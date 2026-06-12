import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-server";

const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW = 60_000;
const RATE_LIMIT_MAX = 30;

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

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  if (!checkRateLimit(getIp(_request))) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  const { slug } = await params;
  const visitorId = _request.headers.get("x-visitor-id");

  if (visitorId && !UUID_REGEX.test(visitorId)) {
    return NextResponse.json({ error: "Invalid visitor ID" }, { status: 400 });
  }

  const [countResult, starredResult] = await Promise.all([
    supabaseAdmin
      .from("blog_stars")
      .select("*", { count: "exact", head: true })
      .eq("post_slug", slug),
    visitorId
      ? supabaseAdmin
          .from("blog_stars")
          .select("id")
          .eq("post_slug", slug)
          .eq("visitor_id", visitorId)
          .maybeSingle()
      : { data: null },
  ]);

  return NextResponse.json(
    {
      count: countResult.count ?? 0,
      starred: Boolean(starredResult.data),
    },
    {
      headers: {
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=120",
      },
    },
  );
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  if (!checkRateLimit(getIp(request))) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  const { slug } = await params;

  let body: { visitorId?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { visitorId } = body;

  if (!visitorId || !UUID_REGEX.test(visitorId)) {
    return NextResponse.json(
      { error: "Valid visitorId is required" },
      { status: 400 },
    );
  }

  const { error } = await supabaseAdmin
    .from("blog_stars")
    .insert({ post_slug: slug, visitor_id: visitorId });

  if (error) {
    if (error.code === "23505") {
      return NextResponse.json({ error: "Already starred" }, { status: 409 });
    }
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ starred: true });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  if (!checkRateLimit(getIp(request))) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  const { slug } = await params;

  let body: { visitorId?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { visitorId } = body;

  if (!visitorId || !UUID_REGEX.test(visitorId)) {
    return NextResponse.json(
      { error: "Valid visitorId is required" },
      { status: 400 },
    );
  }

  const { error } = await supabaseAdmin
    .from("blog_stars")
    .delete()
    .eq("post_slug", slug)
    .eq("visitor_id", visitorId);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ starred: false });
}
