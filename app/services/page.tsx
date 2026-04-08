import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Steady Thread Media",
  description:
    "Signal-based account targeting, AI-powered outbound systems, ABM programs, and CRM operations for B2B revenue teams.",
  alternates: {
    canonical: "/services",
  },
};

const services = [
  {
    num: "01",
    title: "Signal-Based Account Targeting",
    tagline: "Stop guessing. Start reaching accounts when they're actually ready.",
    body: [
      "Most outbound fails because it's timed wrong, not written wrong. We build the data infrastructure to identify which accounts in your target list are showing real buying signals right now — job postings, funding events, tech stack changes, intent data spikes, and behavioral triggers that indicate readiness.",
      "You get a prioritized, signal-ranked account list updated continuously, so your team always knows where to focus.",
    ],
    readMore: { label: "The 4 buying signals that actually drive pipeline →", href: "/insights/buying-signals-b2b-pipeline" },
    deliverables: [
      "Target account list mapped against signal sources",
      "Intent data integration (G2, Bombora, or similar)",
      "Trigger-event monitoring (hiring, funding, tech changes)",
      "Weekly signal-ranked account priority report",
      "Clay enrichment workflow for real-time account scoring",
    ],
    tools: ["Clay", "Bombora", "G2", "LinkedIn Sales Navigator"],
  },
  {
    num: "02",
    title: "AI-Powered Outbound Systems",
    tagline: "Personalized at scale. Systematic by design.",
    body: [
      "We build the full outbound engine: Clay-powered research workflows that pull context on every account and contact, AI-generated messaging that actually reflects what's happening at the company right now, and sequencing infrastructure that coordinates email and LinkedIn in a way that feels human.",
      "Not spray and pray. Triggered, targeted, and systematic — built to run without constant manual intervention.",
    ],
    readMore: { label: "Clay vs. manual research: the real ROI →", href: "/insights/clay-vs-manual-research" },
    deliverables: [
      "Clay enrichment and AI personalization workflow",
      "Email sequencing in Smartlead with trigger-based timing",
      "LinkedIn outreach via HeyReach coordinated with email",
      "A/B tested messaging frameworks by persona",
      "Reply handling and meeting booking automation",
    ],
    tools: ["Clay", "Smartlead", "HeyReach", "OpenAI"],
  },
  {
    num: "03",
    title: "Account-Based Marketing",
    tagline: "Build relationship before the pitch. Win deals before the first call.",
    body: [
      "Cold outreach to enterprise accounts doesn't work because you're unknown. ABM flips the sequence — we build awareness and relationship with your target accounts across channels before your team ever reaches out, so when outbound lands, it lands warm.",
      "We run tiered programs based on account priority: high-touch 1:1 ABM for named accounts, 1:few for account clusters, and 1:many for the broader target list.",
    ],
    readMore: null,
    deliverables: [
      "Account tiering framework and prioritization model",
      "Multi-channel campaign architecture (LinkedIn, email, content)",
      "Buying committee mapping and stakeholder targeting",
      "Account-specific landing pages and personalized assets",
      "Account progression tracking and engagement scoring",
    ],
    tools: ["LinkedIn Campaign Manager", "HubSpot", "Webflow / Lovable"],
  },
  {
    num: "04",
    title: "CRM and Revenue Operations",
    tagline: "Connect your outbound motion to your pipeline. Nothing falls through.",
    body: [
      "A great outbound system that feeds into a disorganized CRM is wasted work. We configure HubSpot to match how your team actually sells — proper lead scoring, lifecycle stage automation, handoff workflows between marketing and sales, and pipeline reporting that shows what's actually driving revenue.",
      "We also build the dashboards your team will actually use: pipeline by source, outbound performance, account engagement, and sequence metrics.",
    ],
    readMore: null,
    deliverables: [
      "HubSpot CRM configuration and clean-up",
      "Lead scoring model tied to ICP fit and engagement signals",
      "MQL to SQL handoff workflow with SLA triggers",
      "Pipeline reporting dashboard by source and stage",
      "Weekly outbound performance reporting cadence",
    ],
    tools: ["HubSpot", "Clay", "Zapier / Make"],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-[140px] pb-20 px-6">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <p className="text-[11px] font-semibold tracking-[0.1em] text-muted-foreground uppercase mb-5">
            Services
          </p>
          <h1 className="text-[clamp(36px,5vw,68px)] font-bold tracking-tight leading-[1.05] max-w-[820px] mb-6">
            Everything you need to build{" "}
            <span className="text-primary">consistent pipeline</span>
          </h1>
          <p className="text-[17px] text-muted-foreground leading-[1.7] max-w-[560px] mb-10">
            We don&apos;t hand you a strategy doc. We build the full system —
            account intelligence, outbound infrastructure, ABM programs, and CRM
            operations — and run it alongside you.
          </p>
          <Link
            href="/contact"
            className="btn-white inline-block text-sm font-medium bg-primary text-primary-foreground px-7 py-3 rounded-full no-underline"
          >
            Book a GTM Assessment
          </Link>
        </div>
      </section>

      {/* Services detail */}
      <section className="px-6 pb-[120px]">
        <div className="container mx-auto px-6 max-w-[1200px] flex flex-col gap-20">
          {services.map((service) => (
            <div
              key={service.num}
              className="service-grid border-t border-white/5 pt-16"
            >
              {/* Left */}
              <div>
                <p className="text-xs font-semibold text-primary tracking-[0.06em] mb-4">
                  {service.num}
                </p>
                <h2 className="text-[clamp(22px,2.5vw,32px)] font-bold tracking-tight leading-[1.15] mb-3">
                  {service.title}
                </h2>
                <p className="text-[15px] text-primary italic mb-6">
                  {service.tagline}
                </p>
                {service.body.map((p, i) => (
                  <p
                    key={i}
                    className="text-[15px] text-muted-foreground leading-[1.75] mb-4"
                  >
                    {p}
                  </p>
                ))}

                {/* Related article link */}
                {service.readMore && (
                  <Link
                    href={service.readMore.href}
                    className="link-muted inline-block text-[13px] text-primary no-underline mt-1 mb-2"
                  >
                    {service.readMore.label}
                  </Link>
                )}

                {/* Tools */}
                <div className="mt-6">
                  <p className="text-[11px] font-semibold tracking-[0.08em] text-muted-foreground uppercase mb-2.5">
                    Tools
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {service.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-xs text-muted-foreground bg-secondary border border-white/5 px-3 py-1 rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right — deliverables */}
              <div className="bg-secondary border border-white/5 rounded-2xl p-8 self-start">
                <p className="text-[11px] font-semibold tracking-[0.08em] text-muted-foreground uppercase mb-5">
                  What You Get
                </p>
                <div className="flex flex-col gap-3.5">
                  {service.deliverables.map((d) => (
                    <div
                      key={d}
                      className="flex items-start gap-3 text-sm text-white/75 leading-[1.5]"
                    >
                      <span className="text-primary shrink-0">✓</span>
                      {d}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-[100px] px-6 bg-secondary border-t border-white/5 text-center">
        <div className="max-w-[560px] mx-auto">
          <h2 className="text-[clamp(26px,3.5vw,44px)] font-bold tracking-tight leading-[1.1] mb-5">
            Not sure which service fits?
          </h2>
          <p className="text-base text-muted-foreground leading-[1.7] mb-9">
            Book a GTM assessment and we&apos;ll map out exactly what your
            pipeline needs and where to start.
          </p>
          <Link
            href="/contact"
            className="btn-white inline-block text-sm font-medium bg-primary text-primary-foreground px-7 py-3 rounded-full no-underline"
          >
            Book a GTM Assessment
          </Link>
        </div>
      </section>
    </>
  );
}
