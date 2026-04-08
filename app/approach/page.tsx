import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Approach | Steady Thread Media",
  description:
    "A 4-step system to go from target account list to qualified pipeline. Account intelligence, system build, launch, and ongoing optimization.",
  alternates: {
    canonical: "/approach",
  },
};

const steps = [
  {
    num: "01",
    title: "Account Intelligence Audit",
    duration: "Week 1–2",
    body: "We map your target account list against available signal data to identify which accounts are showing intent, which triggers indicate readiness, and where your current outreach is breaking down. This isn't a generic audit — it's a specific diagnosis of your pipeline problem.",
    outputs: [
      "Signal source assessment for your ICP",
      "Current outreach breakdown analysis",
      "Account prioritization framework",
      "Recommended tool stack for your motion",
    ],
  },
  {
    num: "02",
    title: "System Architecture",
    duration: "Week 2–3",
    body: "We design your outbound and ABM infrastructure — account tiers, signal tracking, messaging frameworks, and channel sequencing built around how your buyers actually behave. Everything is documented before a single workflow is built.",
    outputs: [
      "Full system architecture doc",
      "Messaging framework by persona and trigger",
      "Channel sequence playbook",
      "CRM workflow design",
    ],
  },
  {
    num: "03",
    title: "Build and Launch",
    duration: "Week 3–6",
    body: "We implement the full system: Clay enrichment workflows, email and LinkedIn sequences, ABM campaign structure, CRM configuration, and tracking. You get a working system, not a strategy doc. By the end of this phase, outreach is live.",
    outputs: [
      "Clay enrichment and AI personalization workflows",
      "Smartlead + HeyReach sequences live",
      "HubSpot configured and integrated",
      "First round of outreach sent",
    ],
  },
  {
    num: "04",
    title: "Optimize and Scale",
    duration: "Ongoing",
    body: "We run weekly reviews against pipeline data, refine scoring and messaging based on what's converting, and expand what's working. The system compounds over time — what starts as a basic outbound motion becomes a multi-channel GTM engine.",
    outputs: [
      "Weekly pipeline and sequence performance review",
      "Messaging and signal scoring refinements",
      "New trigger and signal layer additions",
      "ABM campaign expansion as accounts progress",
    ],
  },
];

export default function ApproachPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-[140px] pb-20 px-6">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-5">
            Our Approach
          </p>
          <h1 className="text-[clamp(36px,5vw,68px)] font-bold leading-[1.05] tracking-tight max-w-[760px] mb-6">
            A system, not a{" "}
            <span className="text-primary">strategy doc</span>
          </h1>
          <p className="text-[17px] text-muted-foreground leading-relaxed max-w-[540px]">
            Most GTM engagements end with a deck. Ours end with a running
            system. Here&apos;s exactly how we go from your target account list
            to qualified pipeline in the calendar.
          </p>
        </div>
      </section>

      {/* Process steps */}
      <section className="px-6 pb-[120px]">
        <div className="container mx-auto px-6 max-w-[1200px]">
          {steps.map((step) => (
            <div
              key={step.num}
              className="step-grid border-t border-white/5 py-14 grid gap-12"
              style={{ gridTemplateColumns: "240px 1fr" }}
            >
              {/* Left — number + duration */}
              <div>
                <p className="text-5xl font-bold tracking-tight text-white/[0.08] leading-none mb-3">
                  {step.num}
                </p>
                <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide">
                  {step.duration}
                </span>
              </div>

              {/* Right — content */}
              <div className="step-inner grid gap-10" style={{ gridTemplateColumns: "1fr 1fr" }}>
                <div>
                  <h2 className="text-[clamp(20px,2vw,28px)] font-bold tracking-tight leading-snug mb-4">
                    {step.title}
                  </h2>
                  <p className="text-[15px] text-muted-foreground leading-[1.75]">
                    {step.body}
                  </p>
                </div>
                <div className="bg-secondary border border-white/5 rounded-2xl p-6">
                  <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-4">
                    Outputs
                  </p>
                  <div className="flex flex-col gap-3">
                    {step.outputs.map((o) => (
                      <div
                        key={o}
                        className="flex items-start gap-2.5 text-[13px] text-white/70 leading-snug"
                      >
                        <span className="text-primary shrink-0">→</span>
                        {o}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 px-6 bg-secondary border-t border-b border-white/5">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <h2 className="text-[clamp(24px,3vw,36px)] font-bold tracking-tight mb-12">
            How we think about GTM
          </h2>
          <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
            {[
              {
                title: "Signal over volume",
                body: "More outreach to the wrong accounts at the wrong time doesn't work. Better signal on fewer accounts does.",
              },
              {
                title: "Systems over sprints",
                body: "A one-time campaign doesn't fix a pipeline problem. A system that runs continuously and compounds over time does.",
              },
              {
                title: "Relevance over personalization theater",
                body: "Mentioning someone's LinkedIn post isn't personalization. Reaching out because their company just hired a VP of Sales is.",
              },
              {
                title: "Outbound and ABM together",
                body: "Cold outreach to unknown accounts is hard. ABM to accounts that already know you is much easier. We run both in parallel.",
              },
            ].map((p) => (
              <div
                key={p.title}
                className="bg-secondary border border-white/5 rounded-2xl p-7"
              >
                <h3 className="text-base font-semibold leading-snug mb-2.5">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-[100px] px-6 text-center">
        <div className="max-w-[520px] mx-auto">
          <h2 className="text-[clamp(26px,3.5vw,42px)] font-bold tracking-tight leading-[1.1] mb-5">
            Ready to build the system?
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-9">
            Start with a GTM assessment — we&apos;ll audit your current motion
            and map out exactly what needs to change.
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
