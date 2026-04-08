import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Steady Thread Media",
  description:
    "GTM engineering agency based in Charlotte, NC. We build signal-based outbound and ABM systems for B2B revenue teams.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-[140px] pb-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-[11px] font-semibold tracking-[0.1em] text-muted-foreground uppercase mb-5">
            About
          </p>
          <h1 className="text-[clamp(36px,5vw,68px)] font-bold leading-[1.05] tracking-[-0.03em] max-w-[760px] mb-6">
            We build GTM systems,{" "}
            <span className="text-primary">not decks</span>
          </h1>
          <p className="text-[17px] text-muted-foreground leading-[1.7] max-w-[540px]">
            Steady Thread Media is a GTM engineering agency based in Charlotte, NC. We help B2B revenue teams replace referral dependency and inconsistent outreach with signal-based systems that run.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="px-6 pb-20">
        <div
          className="max-w-[1200px] mx-auto border-t border-white/5 pt-16 gap-20 about-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
        >
          <div>
            <h2 className="text-[clamp(22px,2.5vw,32px)] font-bold leading-[1.2] tracking-[-0.02em] mb-6">
              Why we exist
            </h2>
            <p className="text-[15px] text-muted-foreground leading-[1.8] mb-5">
              Most B2B pipeline problems aren&apos;t caused by bad product or weak demand. They come from not having a system that reliably gets you in front of the right people at the right time.
            </p>
            <p className="text-[15px] text-muted-foreground leading-[1.8] mb-5">
              We started Steady Thread because we kept seeing the same pattern: great companies with strong ICPs and real value propositions, stuck because they had no consistent outbound motion and no visibility into when accounts were actually ready to buy.
            </p>
            <p className="text-[15px] text-muted-foreground leading-[1.8]">
              We built the solution we wished existed — a GTM engineering firm that actually implements the system, runs it alongside you, and is accountable to pipeline outcomes, not deliverable checkboxes.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            {[
              {
                label: "Founded",
                value: "2023",
                sub: "Charlotte, North Carolina",
              },
              {
                label: "Clients served",
                value: "50+",
                sub: "B2B companies across North America",
              },
              {
                label: "Pipeline generated",
                value: "$5M+",
                sub: "For clients since founding",
              },
              {
                label: "Certifications",
                value: "Clay · HubSpot · LinkedIn",
                sub: "Platform-certified practitioners",
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-secondary border border-white/5 rounded-2xl p-6 flex justify-between items-center gap-4"
              >
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.08em] text-muted-foreground uppercase mb-1.5">
                    {stat.label}
                  </p>
                  <p className="text-[13px] text-white/60">{stat.sub}</p>
                </div>
                <p className="text-[20px] font-bold tracking-[-0.02em] text-primary text-right shrink-0">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we're different */}
      <section className="py-20 px-6 bg-secondary border-t border-white/5 border-b border-white/5">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[clamp(24px,3vw,36px)] font-bold tracking-tight mb-12">
            How we&apos;re different from a GTM consultant
          </h2>
          <div
            className="gap-6 diff-grid"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
          >
            <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-7">
              <p className="text-[12px] font-semibold tracking-[0.06em] text-muted-foreground uppercase mb-5">
                Typical GTM Consultant
              </p>
              {[
                "Delivers a strategy and recommendations",
                "You implement (or don't)",
                "Accountable to deliverables, not outcomes",
                "Engagement ends, system doesn't exist",
                "Billed for time, not results",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2.5 text-[14px] text-muted-foreground mb-3 leading-[1.5]"
                >
                  <span className="text-white/20 shrink-0">—</span>
                  {item}
                </div>
              ))}
            </div>
            <div className="bg-primary/5 border border-primary/15 rounded-2xl p-7">
              <p className="text-[12px] font-semibold tracking-[0.06em] text-primary uppercase mb-5">
                Steady Thread Media
              </p>
              {[
                "Builds and runs the actual system",
                "Execution is our job, not yours",
                "Accountable to pipeline generated",
                "System persists and compounds after engagement",
                "Structured around outcomes",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2.5 text-[14px] text-white/75 mb-3 leading-[1.5]"
                >
                  <span className="text-primary shrink-0">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-[11px] font-semibold tracking-[0.1em] text-muted-foreground uppercase mb-10">
            Founder
          </p>
          <div
            className="gap-10 items-start max-w-[720px] founder-grid"
            style={{ display: "grid", gridTemplateColumns: "auto 1fr" }}
          >
            {/* Avatar */}
            <div className="w-40 h-40 rounded-full overflow-hidden border border-white/5 shrink-0">
              <Image
                src="/jared-webber.jpg"
                alt="Jared Webber"
                width={160}
                height={160}
                className="object-cover w-full h-full"
                style={{ objectPosition: "center 15%" }}
              />
            </div>
            {/* Bio */}
            <div>
              <p className="text-[20px] font-bold tracking-[-0.02em] mb-1">
                Jared Webber
              </p>
              <p className="text-[12px] text-primary font-medium tracking-[0.04em] mb-5">
                Founder & GTM Engineer
              </p>
              <p className="text-[15px] text-muted-foreground leading-[1.8] mb-4">
                Background in marketing, demand generation, and agency-side GTM work across B2B. Started Steady Thread to build the kind of outbound infrastructure he kept wishing clients already had — signal-based, accountable, and actually running.
              </p>
              <p className="text-[15px] text-muted-foreground leading-[1.8]">
                Based in Charlotte, NC. Focused on Clay, HubSpot, and the systems that turn ICP clarity into consistent pipeline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-[100px] px-6 text-center">
        <div className="max-w-[520px] mx-auto">
          <h2 className="text-[clamp(26px,3.5vw,42px)] font-bold tracking-[-0.025em] leading-[1.1] mb-5">
            Work with us
          </h2>
          <p className="text-[16px] text-muted-foreground leading-[1.7] mb-9">
            We take on a limited number of clients at a time to stay focused.
            Book a GTM assessment to see if we&apos;re a fit.
          </p>
          <Link
            href="/contact"
            className="btn-white inline-block text-[14px] font-medium text-[#1a1a1a] bg-white py-3 px-7 rounded-full no-underline"
          >
            Book a GTM Assessment
          </Link>
        </div>
      </section>
    </>
  );
}
