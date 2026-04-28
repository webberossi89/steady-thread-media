import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights | Steady Thread Media",
  description:
    "Practical writing on outbound systems, account-based marketing, and pipeline operations for B2B revenue teams.",
  alternates: {
    canonical: "/insights",
  },
};

const posts = [
  {
    category: "Marketing",
    title: "Signal-Based Outbound vs Traditional Lead Gen: What B2B Teams Need to Know",
    summary: "Signal-based outbound targets accounts when they",
    date: "April 11, 2026",
    dateISO: "2026-04-12",
    readTime: "9 min read",
    slug: "signal-based-outbound-vs-traditional-lead-gen",
  },
  {
    category: "Marketing",
    title: "Clay for Outbound: How B2B Teams Use Clay to Build Signal-Based Pipelines",
    summary: "See how B2B revenue teams use Clay to run signal-based outbound at scale. A Clay outbound agency perspective on what works and why. Get the breakdown.",
    date: "April 25, 2026",
    dateISO: "2026-04-26",
    readTime: "8 min read",
    slug: "clay-outbound-agency-signal-based-pipeline",
  },
  {
    category: "Marketing",
    title: "How to Build an ABM Program for B2B SaaS: A 7-Step Framework",
    summary: "Learn how to build a real ABM program for B2B SaaS — from ICP and account selection to signal-based targeting and pipeline reporting. See how it works.",
    date: "April 18, 2026",
    dateISO: "2026-04-19",
    readTime: "8 min read",
    slug: "abm-program-b2b-saas-framework",
  },
  {
    category: "Marketing",
    title: "What Is GTM Engineering? A Guide for B2B SaaS Teams",
    summary: "GTM engineering builds the outbound systems, signals, and infrastructure B2B teams need for consistent pipeline. Here's what it is and how it works.",
    date: "April 4, 2026",
    dateISO: "2026-04-05",
    readTime: "9 min read",
    slug: "what-is-gtm-engineering",
  },
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
    title: "The 4 Buying Signals That Actually Drive B2B Pipeline (And How to Automate Them)",
    summary:
      "There are hundreds of intent signals. Most are noise. These four consistently correlate with pipeline from outbound — and how to capture them automatically in Clay.",
    date: "January 15, 2025",
    readTime: "9 min read",
    slug: "buying-signals-b2b-pipeline",
  },
  {
    category: "Outbound Systems",
    title: "Clay vs. Manual Research: The Real ROI Calculation for B2B Outbound",
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
    title: "Why ABM Fails for Most B2B SaaS Companies (And What to Do Instead)",
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

export default function InsightsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-[140px] pb-20 px-6">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <p className="text-[11px] font-semibold tracking-widest text-muted-foreground uppercase mb-5">
            Insights
          </p>
          <h1 className="text-[clamp(36px,5vw,68px)] font-bold leading-[1.05] tracking-[-0.03em] max-w-[720px] mb-6">
            GTM thinking from the{" "}
            <span className="text-primary">trenches</span>
          </h1>
          <p className="text-[17px] text-muted-foreground leading-[1.7] max-w-[500px]">
            Practical writing on outbound systems, account-based marketing, and
            pipeline operations — from practitioners, not theorists.
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="px-6 pb-[120px]">
        <div className="container mx-auto px-6 max-w-[1200px]">
          {/* Featured post */}
          <Link
            href={`/insights/${posts[0].slug}`}
            className="no-underline text-inherit block card-hover"
          >
            <div className="bg-secondary border border-white/5 rounded-2xl p-12 mb-8 transition-all hover:border-primary/30">
              <div className="flex justify-between items-start flex-wrap gap-4 mb-5">
                <span className="text-[10px] font-semibold text-primary tracking-wider uppercase bg-primary/10 px-[10px] py-1 rounded-full">
                  {posts[0].category}
                </span>
                <p className="text-xs text-muted-foreground">
                  {posts[0].date} · {posts[0].readTime}
                </p>
              </div>
              <h2 className="text-[clamp(22px,3vw,34px)] font-bold leading-[1.15] tracking-[-0.02em] mb-4">
                {posts[0].title}
              </h2>
              <p className="text-[15px] text-muted-foreground leading-[1.7] max-w-[640px] mb-7">
                {posts[0].summary}
              </p>
              <span className="text-[13px] text-primary">Read article →</span>
            </div>
          </Link>

          {/* Remaining posts grid */}
          <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-5">
            {posts.slice(1).map((post) => {
              const inner = (
                <div className="bg-secondary border border-white/5 rounded-2xl p-7 flex flex-col gap-3 h-full transition-all hover:border-primary/30">
                  <div className="flex justify-between items-center flex-wrap gap-2">
                    <span className="text-[10px] font-semibold text-primary tracking-wider uppercase">
                      {post.category}
                    </span>
                    <p className="text-[11px] text-muted-foreground">
                      {post.date} · {post.readTime}
                    </p>
                  </div>
                  <h3 className="text-[17px] font-semibold leading-[1.3] tracking-[-0.01em]">
                    {post.title}
                  </h3>
                  <p className="text-[13px] text-muted-foreground leading-[1.7] grow">
                    {post.summary}
                  </p>
                  <span className={`text-[12px] ${post.slug ? "text-primary" : "text-white/30"}`}>
                    {post.slug ? "Read article →" : "Coming soon →"}
                  </span>
                </div>
              );

              return post.slug ? (
                <Link
                  key={post.title}
                  href={`/insights/${post.slug}`}
                  className="no-underline text-inherit card-hover"
                >
                  {inner}
                </Link>
              ) : (
                <div key={post.title}>{inner}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-6 bg-secondary border-t border-white/5">
        <div className="max-w-[480px] mx-auto text-center">
          <h2 className="text-[clamp(22px,3vw,32px)] font-bold tracking-[-0.02em] mb-3">
            Get new posts in your inbox
          </h2>
          <p className="text-[15px] text-muted-foreground leading-[1.7] mb-7">
            Practical GTM writing. No filler. Occasional but worth it.
          </p>
          <Link
            href="/contact"
            className="btn-white inline-block text-[14px] font-medium bg-primary text-primary-foreground px-6 py-[11px] rounded-full no-underline"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
