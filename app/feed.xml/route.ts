const SITE_URL = "https://steadythreadmedia.com";
const SITE_TITLE = "Steady Thread Media — GTM Engineering Agency";
const SITE_DESCRIPTION =
  "We build signal-based outbound and account-based marketing systems for B2B revenue teams that need consistent pipeline.";

const posts = [
  {
    category: "GTM Strategy",
    title: "What Is a GTM Engineer? The New Revenue Role Redefining B2B Sales",
    summary:
      "GTM engineers sit at the intersection of sales, marketing, and data. Here's exactly what they do, why the role exists now, and whether your company needs one.",
    date: "March 10, 2025",
    readTime: "8 min read",
    slug: "what-is-a-gtm-engineer",
  },
  {
    category: "Account Intelligence",
    title:
      "The 4 Buying Signals That Actually Drive B2B Pipeline (And How to Automate Them)",
    summary:
      "There are hundreds of intent signals. Most are noise. These four consistently correlate with pipeline from outbound — and how to capture them automatically in Clay.",
    date: "January 15, 2025",
    readTime: "9 min read",
    slug: "buying-signals-b2b-pipeline",
  },
  {
    category: "Outbound Systems",
    title:
      "Clay vs. Manual Research: The Real ROI Calculation for B2B Outbound",
    summary:
      "Clay has a real cost and a learning curve. Here's how to calculate whether it makes sense for your outbound volume — with actual numbers, not hype.",
    date: "February 20, 2025",
    readTime: "7 min read",
    slug: "clay-vs-manual-research",
  },
  {
    category: "CRM & RevOps",
    title: "HubSpot Configuration Mistakes That Kill Outbound Attribution",
    summary:
      "If your CRM can't tell you which outbound activity generated pipeline, you're flying blind. The 6 setup mistakes we fix in every engagement.",
    date: "April 15, 2025",
    readTime: "7 min read",
    slug: "hubspot-outbound-attribution",
  },
  {
    category: "ABM",
    title:
      "Why ABM Fails for Most B2B SaaS Companies (And What to Do Instead)",
    summary:
      "ABM isn't a tool — it's a motion. Most teams fail because they try to run ABM without the prerequisites in place. Here's the honest framework.",
    date: "May 8, 2025",
    readTime: "10 min read",
    slug: "why-abm-fails-b2b-saas",
  },
  {
    category: "GTM Strategy",
    title: "The Referral Trap: What Happens When You Scale Off Warm Intros",
    summary:
      "Referral-dependent growth feels great until it doesn't. The warning signs that your pipeline is fragile — and what to build before the tap runs dry.",
    date: "June 3, 2025",
    readTime: "9 min read",
    slug: "referral-trap-warm-intros",
  },
];

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function parseDate(dateStr: string): Date {
  return new Date(dateStr);
}

export async function GET() {
  const sortedPosts = [...posts].sort(
    (a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime()
  );

  const items = sortedPosts
    .map(
      (post) => `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${SITE_URL}/insights/${post.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/insights/${post.slug}</guid>
      <description>${escapeXml(post.summary)}</description>
      <category>${escapeXml(post.category)}</category>
      <pubDate>${parseDate(post.date).toUTCString()}</pubDate>
    </item>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE_TITLE)}</title>
    <link>${SITE_URL}</link>
    <description>${escapeXml(SITE_DESCRIPTION)}</description>
    <language>en-us</language>
    <lastBuildDate>${sortedPosts.length > 0 ? parseDate(sortedPosts[0].date).toUTCString() : new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=3600",
    },
  });
}
