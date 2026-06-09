export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: BlogBlock[];
}

export type InlineSegment =
  | { type: "text"; text: string }
  | { type: "link"; text: string; href: string };

export type BlogBlock =
  | { type: "heading"; text: string }
  | { type: "subheading"; text: string }
  | { type: "paragraph"; text: string; segments?: InlineSegment[] }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string; author?: string }
  | { type: "hr" };

export const blogPosts: BlogPost[] = [
  {
    slug: "connecting-the-dots",
    title: "Connecting the Dots",
    date: "June 2026",
    description: "How I Landed My First Internship as a Web Developer.",
    content: [
      { type: "subheading", text: "What is CallHQ?" },
      {
        type: "paragraph",
        text: "CallHQ is a Voice AI platform that lets businesses build AI agents to make and receive phone calls, automate conversations, and streamline customer interactions.",
      },
      {
        type: "paragraph",
        text: "I first came across CallHQ long before I ever thought about working there.",
      },
      { type: "subheading", text: "TL;DR" },
      {
        type: "subheading",
        text: "The First Time I Heard About CallHQ",
      },
      {
        type: "paragraph",
        text: "Back in 2025, I attended DevFest New Delhi. Like every tech enthusiast at such events, I spent most of my time exploring booths, talking to founders, checking out demos, and discovering products being built by Indian startups.",
      },
      {
        type: "paragraph",
        text: "One of the startups that caught my attention was CallHQ.AI.",
        segments: [
          {
            type: "text",
            text: "One of the startups that caught my attention was ",
          },
          { type: "link", text: "CallHQ.AI", href: "https://callhq.ai/" },
          { type: "text", text: "." },
        ],
      },
      {
        type: "paragraph",
        text: "Their idea was interesting. I spent some time understanding the product, exploring what they were building, and learning about the problem they were solving. After the event, I moved on to other projects and technologies, but the startup remained somewhere in the back of my mind.",
      },
      {
        type: "paragraph",
        text: "At that point, I had no idea that a few months later I would end up working with them.",
      },
      { type: "subheading", text: "Another Event, Another Day" },
      {
        type: "paragraph",
        text: "Fast forward to February 2026.",
      },
      {
        type: "paragraph",
        text: "I attended the India AI Impact Summit 2026, where I got the opportunity to explore a wide variety of startups, AI products, and emerging technologies. Walking around the summit, speaking with founders, and seeing what teams were building was incredibly inspiring.",
      },
      {
        type: "paragraph",
        text: "Interestingly, during the event, I came across a product solving a problem very similar to what CallHQ was working on.",
      },
      {
        type: "paragraph",
        text: "That instantly reminded me of the startup I had seen months earlier at DevFest.",
      },
      {
        type: "paragraph",
        text: "On my way back, a simple thought crossed my mind:",
      },
      {
        type: "paragraph",
        text: `"What if I just ask them if they're hiring?"`,
      },
      {
        type: "paragraph",
        text: "It sounds obvious now, but many opportunities are missed simply because people never ask.",
      },
      { type: "subheading", text: "Sending That Message" },
      {
        type: "paragraph",
        text: "After the summit, I reached out to the CallHQ team.",
      },
      {
        type: "paragraph",
        text: `Instead of sending a generic "Are you hiring?" message, I shared my work, projects, and the things I had been building. I wanted them to see what I could actually do rather than just read a resume.`,
      },
      {
        type: "paragraph",
        text: "A few days later, I learned that my profile had been internally shortlisted by their team.",
      },
      {
        type: "paragraph",
        text: "Soon after, an interview was scheduled.",
      },
      { type: "subheading", text: "The Interview" },
      {
        type: "paragraph",
        text: "In early March 2026, I had my interview with Akash Malhotra, the co-founder behind the product.",
        segments: [
          {
            type: "text",
            text: "In early March 2026, I had my interview with ",
          },
          {
            type: "link",
            text: "Akash Malhotra",
            href: "https://www.linkedin.com/in/akashrmalhotra",
          },
          { type: "text", text: ", the co-founder behind the product." },
        ],
      },
      {
        type: "paragraph",
        text: "Like most interviews, I went in expecting technical questions, discussions about projects, and conversations around my experience.",
      },
      {
        type: "paragraph",
        text: "A significant part of the discussion revolved around one of my projects called Vibe.",
        segments: [
          {
            type: "text",
            text: "A significant part of the discussion revolved around one of my projects called ",
          },
          { type: "link", text: "Vibe", href: "https://vibe-ucq3.vercel.app/" },
          { type: "text", text: "." },
        ],
      },
      {
        type: "paragraph",
        text: "What made the conversation particularly interesting was that the architecture and ideas behind Vibe had surprising similarities to some of the systems they were building themselves.",
      },
      {
        type: "paragraph",
        text: "Rather than feeling like a traditional question-answer session, the interview felt like a discussion between people who genuinely enjoyed building products.",
      },
      { type: "paragraph", text: "We talked about:" },
      {
        type: "list",
        items: [
          "Projects I had built",
          "Technical decisions I had made",
          "How I approached problem solving",
          "Technologies I was comfortable working with",
          "What kind of work I would be expected to do at CallHQ",
        ],
      },
      {
        type: "paragraph",
        text: "By the end of the conversation, I felt confident that I had communicated my thought process clearly.",
      },
      { type: "subheading", text: "The Offer" },
      {
        type: "paragraph",
        text: "Two days later, I received the news.",
      },
      {
        type: "paragraph",
        text: "I had received my first internship offer.",
      },
      { type: "paragraph", text: "Without hesitation, I accepted it." },
      {
        type: "paragraph",
        text: "On 9 March 2026, I officially started my journey as a Web Developer Intern at CallHQ.",
      },
        { type: "subheading", text: "Connecting the Dots" },  
      {
        type: "paragraph",
        text: "Getting my first internship taught me something valuable:",
      },
      {
        type: "paragraph",
        text: "Opportunities don't always come from job portals or mass applications.",
      },
      {
        type: "paragraph",
        text: "Sometimes they come from attending an event, discovering a startup, building projects in your free time, sending one message, and being willing to take a chance.",
      },
      {
        type: "paragraph",
        text: "Looking back, what seemed like unrelated events—attending DevFest, exploring startups, building side projects, and visiting the India AI Impact Summit, ended up connecting together in a way I never expected.",
      },
      {
        type: "quote",
        text: "You can't connect the dots looking forward; you can only connect them looking backwards.",
        author: "Steve Jobs",
      },
    ],
  },
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
