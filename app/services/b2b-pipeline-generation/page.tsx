import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "B2B Pipeline Generation Services | Steady Thread Media",
  description:
    "Repeatable B2B pipeline systems with signal-based targeting, outbound infrastructure, and ABM execution that drives qualified pipeline for revenue teams.",
  alternates: {
    canonical: "/services/b2b-pipeline-generation",
  },
  openGraph: {
    title: "B2B Pipeline Generation Services | Steady Thread Media",
    description:
      "Build a repeatable pipeline system for your B2B revenue team. Signal-based targeting, outbound infrastructure, and ABM execution.",
    type: "website",
    url: "https://steadythreadmedia.com/services/b2b-pipeline-generation",
  },
};

const deliverables = [
  "Signal-based target account list with buying intent scoring",
  "Full outbound infrastructure — Clay, Smartlead, HeyReach",
  "AI-powered personalization workflows for email and LinkedIn",
  "Multi-channel sequencing coordinated across touchpoints",
  "ABM campaign structure for high-value named accounts",
  "HubSpot pipeline tracking and attribution setup",
  "Weekly pipeline review and optimization cadence",
  "Messaging frameworks tested and refined by persona",
  "Lead scoring and qualification model tied to ICP fit",
  "Monthly pipeline performance report with source attribution",
];

const phases = [
  {
    num: "01",
    title: "Diagnose",
    duration: "Week 1",
    body: "We audit your current pipeline sources, outreach motion, and conversion data. Most teams discover that 70% or more of their pipeline comes from referrals and warm intros — which means there's no system, just luck. We identify exactly where the gaps are and what a reliable pipeline system looks like for your motion.",
  },
  {
    num: "02",
    title: "Build",
    duration: "Week 2–4",
    body: "We build the full infrastructure: signal-based account targeting in Clay, AI-personalized outbound sequences in Smartlead and HeyReach, and CRM workflows in HubSpot that track every touchpoint from first outreach to closed deal. No strategy doc — a running system.",
  },
  {
    num: "03",
    title: "Launch",
    duration: "Week 4–6",
    body: "Outreach goes live. We monitor reply rates, booking rates, and pipeline conversion in real time, adjusting messaging, targeting, and sequencing based on what the data shows. By the end of this phase, you have qualified meetings on the calendar from accounts that match your ICP.",
  },
  {
    num: "04",
    title: "Scale",
    duration: "Ongoing",
    body: "The system compounds. We expand what's working — new signal layers, additional personas, ABM campaigns for enterprise accounts, and content-assisted nurture for accounts that aren't ready yet. Pipeline becomes predictable instead of random.",
  },
];

export default function PipelineGenerationPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-[140px] pb-20 px-6">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <p className="text-[11px] font-semibold tracking-[0.1em] text-muted-foreground uppercase mb-5">
            Services / Pipeline Generation
          </p>
          <h1 className="text-[clamp(36px,5vw,68px)] font-bold tracking-tight leading-[1.05] max-w-[820px] mb-6">
            Pipeline that doesn&apos;t depend on{" "}
            <span className="text-primary">referrals and luck</span>
          </h1>
          <p className="text-[17px] text-muted-foreground leading-[1.7] max-w-[560px] mb-10">
            You know your target accounts. You know your ICP. What you
            don&apos;t have is a reliable system to reach them at the right time
            and convert outreach into qualified pipeline. That&apos;s what we
            build.
          </p>
          <Link
            href="/contact"
            className="btn-white inline-block text-sm font-medium bg-primary text-primary-foreground px-7 py-3 rounded-full no-underline"
          >
            Book a GTM Assessment
          </Link>
        </div>
      </section>

      {/* The problem */}
      <section className="px-6 pb-[100px]">
        <div className="container mx-auto px-6 max-w-[1200px] max-w-[760px]">
          <p className="text-[11px] font-semibold tracking-[0.1em] text-muted-foreground uppercase mb-8">
            The Problem
          </p>
          <h2 className="text-[clamp(22px,2.5vw,32px)] font-bold tracking-tight leading-[1.15] mb-6">
            Your pipeline is unpredictable because it&apos;s not a system
          </h2>
          <p className="text-[15px] text-muted-foreground leading-[1.75] mb-4">
            Most B2B teams rely on a mix of referrals, warm intros, and
            occasional bursts of outreach to fill their pipeline. Some quarters
            are strong. Others are empty. There&apos;s no compounding effect
            because there&apos;s no infrastructure underneath.
          </p>
          <p className="text-[15px] text-muted-foreground leading-[1.75] mb-4">
            Cold outreach is running, but reply rates are low because
            there&apos;s no signal layer — you&apos;re reaching out to accounts
            that aren&apos;t in-market. Messaging is generic because
            there&apos;s no enrichment. And attribution is a black box because
            your CRM wasn&apos;t built to track outbound performance.
          </p>
          <p className="text-[15px] text-muted-foreground leading-[1.75]">
            The result: pipeline depends on individual effort instead of a
            repeatable system. We fix that.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 pb-[100px]">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <p className="text-[11px] font-semibold tracking-[0.1em] text-muted-foreground uppercase mb-8">
            How It Works
          </p>
          <div className="flex flex-col gap-16">
            {phases.map((phase) => (
              <div
                key={phase.num}
                className="border-t border-white/5 pt-10 grid md:grid-cols-[120px_1fr] gap-6"
              >
                <div>
                  <p className="text-xs font-semibold text-primary tracking-[0.06em] mb-1">
                    {phase.num}
                  </p>
                  <p className="text-[11px] text-muted-foreground uppercase tracking-wide">
                    {phase.duration}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-tight mb-3">
                    {phase.title}
                  </h3>
                  <p className="text-[15px] text-muted-foreground leading-[1.75] max-w-[640px]">
                    {phase.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="px-6 pb-[100px]">
        <div className="container mx-auto px-6 max-w-[760px]">
          <div className="bg-secondary border border-white/5 rounded-2xl p-10">
            <p className="text-[11px] font-semibold tracking-[0.08em] text-muted-foreground uppercase mb-6">
              What You Get
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
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
      </section>

      {/* CTA */}
      <section className="py-[100px] px-6 bg-secondary border-t border-white/5 text-center">
        <div className="max-w-[560px] mx-auto">
          <h2 className="text-[clamp(26px,3.5vw,44px)] font-bold tracking-tight leading-[1.1] mb-5">
            Ready to build a pipeline you can predict?
          </h2>
          <p className="text-base text-muted-foreground leading-[1.7] mb-9">
            Book a GTM assessment. We&apos;ll diagnose where your current
            outreach is breaking down and show you what a signal-based pipeline
            system looks like for your motion.
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
