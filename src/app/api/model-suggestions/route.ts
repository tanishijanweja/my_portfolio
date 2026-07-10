import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);
const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW = 60_000;
const RATE_LIMIT_MAX = 10;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return true;
  }
  if (entry.count >= RATE_LIMIT_MAX) return false;
  entry.count++;
  return true;
}

function getIp(request: NextRequest): string {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
}

export async function POST(request: NextRequest) {
  if (!checkRateLimit(getIp(request))) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  let body: { modelName?: string; whereUse?: string; visitorId?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { modelName, whereUse, visitorId } = body;

  if (!modelName || modelName.trim().length === 0) {
    return NextResponse.json({ error: "Model name is required" }, { status: 400 });
  }

  if (modelName.length > 200) {
    return NextResponse.json({ error: "Model name too long" }, { status: 400 });
  }

  if (!visitorId || !UUID_REGEX.test(visitorId)) {
    return NextResponse.json({ error: "Valid visitorId is required" }, { status: 400 });
  }

  const { error } = await supabaseAdmin.from("model_suggestions").insert({
    model_name: modelName.trim(),
    where_use: whereUse?.trim() || null,
    visitor_id: visitorId,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const emailTo = process.env.NOTIFICATION_EMAIL;
  if (emailTo) {
    const subject = `new ai model suggestion: ${modelName.trim()}`;
    const text = `someone suggested a new ai model:\n\nmodel: ${modelName.trim()}\nwhere: ${whereUse?.trim() || "not specified"}`;

    await resend.emails
      .send({
        from: "Portfolio <onboarding@resend.dev>",
        to: emailTo,
        subject,
        text,
      })
      .catch(() => {});
  }

  return NextResponse.json({ success: true });
}
