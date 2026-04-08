import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HubSpot Revenue Operations Consulting | Steady Thread Media",
  description:
    "HubSpot CRM configuration, lead scoring, pipeline reporting, and revenue operations for B2B teams that need their outbound motion connected to real pipeline data.",
  alternates: {
    canonical: "/services/hubspot-revenue-operations",
  },
  openGraph: {
    title: "HubSpot Revenue Operations Consulting | Steady Thread Media",
    description:
      "HubSpot CRM configuration, lead scoring, pipeline reporting, and revenue operations for B2B teams.",
    type: "website",
    url: "https://steadythreadmedia.com/services/hubspot-revenue-operations",
  },
};

const deliverables = [
  "Full HubSpot CRM audit and clean-up",
  "Custom lead scoring model tied to ICP fit and engagement signals",
  "Lifecycle stage automation (lead → MQL → SQL → opportunity)",
  "MQL-to-SQL handoff workflow with SLA triggers and notifications",
  "Outbound attribution tracking — know which sequences drive pipeline",
  "Pipeline reporting dashboard by source, stage, and rep",
  "Contact and company property standardization",
  "Workflow automation for lead routing and task creation",
  "Weekly performance reporting cadence setup",
  "Integration with Clay, Smartlead, and HeyReach data flows",
];

const problems = [
  {
    title: "Your CRM can't tell you what's working",
    body: "Outbound sequences are running, but you can't trace which activity generated which opportunity. Reps are logging calls in different places, lead sources are inconsistent, and your pipeline report is more fiction than data.",
  },
  {
    title: "Leads fall through the handoff",
    body: "Marketing generates MQLs. Sales says they're junk. Nobody agrees on what qualified means, and there's no automated workflow to route the right leads to the right rep at the right time.",
  },
  {
    title: "You've outgrown your HubSpot setup",
    body: "What started as a basic CRM has become a mess of unused properties, broken workflows, and dashboards nobody trusts. Your team wastes hours on manual data entry instead of selling.",
  },
];

export default function HubSpotRevOpsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-[140px] pb-20 px-6">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <p className="text-[11px] font-semibold tracking-[0.1em] text-muted-foreground uppercase mb-5">
            Services / Revenue Operations
          </p>
          <h1 className="text-[clamp(36px,5vw,68px)] font-bold tracking-tight leading-[1.05] max-w-[820px] mb-6">
            HubSpot revenue operations that{" "}
            <span className="text-primary">connect outbound to pipeline</span>
          </h1>
          <p className="text-[17px] text-muted-foreground leading-[1.7] max-w-[560px] mb-10">
            Your outbound system is only as good as the CRM behind it. We
            configure HubSpot to match how your team actually sells — proper lead
            scoring, clean handoffs, and reporting that tells you what&apos;s
            driving revenue.
          </p>
          <Link
            href="/contact"
            className="btn-white inline-block text-sm font-medium bg-primary text-primary-foreground px-7 py-3 rounded-full no-underline"
          >
            Book a GTM Assessment
          </Link>
        </div>
      </section>

      {/* Problem section */}
      <section className="px-6 pb-[100px]">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <p className="text-[11px] font-semibold tracking-[0.1em] text-muted-foreground uppercase mb-8">
            The Problem
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {problems.map((p) => (
              <div
                key={p.title}
                className="bg-secondary border border-white/5 rounded-2xl p-8"
              >
                <h3 className="text-lg font-bold tracking-tight mb-3">
                  {p.title}
                </h3>
                <p className="text-[15px] text-muted-foreground leading-[1.75]">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="px-6 pb-[100px]">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="service-grid border-t border-white/5 pt-16">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.1em] text-muted-foreground uppercase mb-5">
                What We Build
              </p>
              <h2 className="text-[clamp(22px,2.5vw,32px)] font-bold tracking-tight leading-[1.15] mb-6">
                A CRM that works as hard as your outbound
              </h2>
              <p className="text-[15px] text-muted-foreground leading-[1.75] mb-4">
                We don&apos;t just clean up HubSpot. We rebuild it around your
                revenue motion — from the properties your team actually needs, to
                the workflows that automate lead routing, to the dashboards that
                show pipeline by source without anyone touching a spreadsheet.
              </p>
              <p className="text-[15px] text-muted-foreground leading-[1.75] mb-4">
                Every configuration decision ties back to one question: can your
                team see exactly which outbound activity is generating qualified
                pipeline? If the answer isn&apos;t yes, the CRM is broken.
              </p>
              <p className="text-[15px] text-muted-foreground leading-[1.75] mb-6">
                We also integrate your outbound tools directly into HubSpot —
                Clay enrichment data, Smartlead sequence activity, and HeyReach
                LinkedIn engagement all flow into contact timelines so your reps
                have full context before every conversation.
              </p>

              <div className="mt-6">
                <p className="text-[11px] font-semibold tracking-[0.08em] text-muted-foreground uppercase mb-2.5">
                  Tools
                </p>
                <div className="flex gap-2 flex-wrap">
                  {["HubSpot", "Clay", "Smartlead", "HeyReach", "Zapier / Make"].map(
                    (tool) => (
                      <span
                        key={tool}
                        className="text-xs text-muted-foreground bg-secondary border border-white/5 px-3 py-1 rounded-full"
                      >
                        {tool}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>

            <div className="bg-secondary border border-white/5 rounded-2xl p-8 self-start">
              <p className="text-[11px] font-semibold tracking-[0.08em] text-muted-foreground uppercase mb-5">
                What You Get
              </p>
              <div className="flex flex-col gap-3.5">
                {deliverables.map((d) => (
                  <div
                    key={d}
                    className="flex items-start gap-3 text-sm text-white/75 leading-[1.5]"
                  >
                    <span className="text-primary shrink-0">&#10003;</span>
                    {d}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-[100px] px-6 bg-secondary border-t border-white/5 text-center">
        <div className="max-w-[560px] mx-auto">
          <h2 className="text-[clamp(26px,3.5vw,44px)] font-bold tracking-tight leading-[1.1] mb-5">
            Your CRM should tell you what&apos;s working
          </h2>
          <p className="text-base text-muted-foreground leading-[1.7] mb-9">
            Book a GTM assessment and we&apos;ll audit your current HubSpot
            setup, identify what&apos;s broken, and show you exactly how to
            connect your outbound motion to pipeline data.
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
