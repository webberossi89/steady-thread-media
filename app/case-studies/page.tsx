import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Steady Thread Media",
  description:
    "Real outcomes from B2B teams that replaced referral dependency with signal-based outbound, coordinated ABM, and revenue operations systems.",
  alternates: {
    canonical: "/case-studies",
  },
};

const caseStudies = [
  {
    industry: "B2B SaaS · Mid-Market",
    challenge: "Clear ICP, no repeatable outbound motion. Pipeline was 90% referral-dependent with no visibility into when target accounts were ready to buy.",
    changes: [
      "Built signal-based account targeting layer using Clay + intent data",
      "Deployed coordinated email and LinkedIn sequences tied to hiring trigger events",
      "Configured HubSpot with lead scoring and outbound attribution",
    ],
    outcomes: [
      { metric: "Meetings booked", value: "38", period: "in 90 days" },
      { metric: "Pipeline generated", value: "$2.4M", period: "from target account list" },
      { metric: "Reply rate", value: "4.8%", period: "vs. 0.9% industry avg." },
    ],
  },
  {
    industry: "Revenue Intelligence · Series A",
    challenge: "High site traffic from content, but low conversion to sales-qualified opportunities. Demo requests were coming in but MQL quality was inconsistent.",
    changes: [
      "Repositioned core offering messaging around buyer pain points vs. feature list",
      "Restructured demo funnel with intent qualification before booking",
      "Built ABM program targeting accounts already engaging with content",
    ],
    outcomes: [
      { metric: "SQL rate", value: "2x", period: "increase in 60 days" },
      { metric: "Demo close rate", value: "+34%", period: "after funnel restructure" },
      { metric: "ABM accounts engaged", value: "120+", period: "in first campaign" },
    ],
  },
  {
    industry: "HR Tech · Bootstrapped",
    challenge: "Founder-led sales. All pipeline came from the founder's network. Needed to build an outbound motion that could run without founder involvement.",
    changes: [
      "Built full Clay-powered outbound system with AI personalization",
      "Trained and handed off to in-house SDR with documented playbooks",
      "Set up HubSpot with complete handoff workflow and pipeline reporting",
    ],
    outcomes: [
      { metric: "Pipeline", value: "$800K", period: "generated in 6 months" },
      { metric: "Outbound independent", value: "100%", period: "of founder time" },
      { metric: "SDR ramp time", value: "3 weeks", period: "with system in place" },
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-[140px] pb-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-xs font-semibold tracking-[0.1em] text-muted-foreground uppercase mb-5">
            Case Studies
          </p>
          <h1 className="font-sans text-[clamp(36px,5vw,68px)] font-bold leading-[1.05] tracking-[-0.03em] max-w-[760px] mb-6">
            Results from the{" "}
            <span className="text-primary">field</span>
          </h1>
          <p className="font-sans text-[17px] text-muted-foreground leading-[1.7] max-w-[520px]">
            Real outcomes from B2B teams that replaced referral dependency and
            inconsistent outreach with signal-based systems.
          </p>
        </div>
      </section>

      {/* Case studies */}
      <section className="px-6 pb-[120px]">
        <div className="max-w-[1200px] mx-auto">
          {caseStudies.map((cs, i) => (
            <div
              key={i}
              className="border-t border-white/5 py-16"
            >
              {/* Industry tag */}
              <span className="inline-block text-[11px] font-semibold text-muted-foreground tracking-[0.06em] uppercase bg-secondary border border-white/5 px-3 py-1 rounded-full mb-7">
                {cs.industry}
              </span>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-10">
                {/* Challenge */}
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.08em] text-muted-foreground uppercase mb-3">
                    Challenge
                  </p>
                  <p className="font-sans text-[15px] text-white/80 leading-[1.7]">
                    {cs.challenge}
                  </p>
                </div>

                {/* What we changed */}
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.08em] text-muted-foreground uppercase mb-3">
                    What We Changed
                  </p>
                  <div className="flex flex-col gap-[10px]">
                    {cs.changes.map((c) => (
                      <div
                        key={c}
                        className="flex items-start gap-[10px] font-sans text-sm text-white/70 leading-[1.5]"
                      >
                        <span className="text-primary shrink-0">→</span>
                        {c}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Outcomes */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {cs.outcomes.map((o) => (
                  <div
                    key={o.metric}
                    className="bg-secondary border border-white/5 rounded-2xl p-6"
                  >
                    <p className="font-sans text-[32px] font-bold tracking-[-0.03em] text-primary mb-1">
                      {o.value}
                    </p>
                    <p className="font-sans text-[13px] text-muted-foreground leading-[1.4]">
                      {o.metric} · {o.period}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-[100px] px-6 bg-secondary border-t border-white/5 text-center">
        <div className="max-w-[520px] mx-auto">
          <h2 className="font-sans text-[clamp(26px,3.5vw,42px)] font-bold tracking-[-0.025em] leading-[1.1] mb-5">
            Want results like these?
          </h2>
          <p className="font-sans text-base text-muted-foreground leading-[1.7] mb-9">
            Book a GTM assessment. We&apos;ll diagnose your pipeline problem and
            show you exactly what a system would look like for your motion.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary text-primary-foreground font-sans text-sm font-medium px-7 py-3 rounded-full no-underline"
          >
            Book a GTM Assessment
          </Link>
        </div>
      </section>
    </>
  );
}
