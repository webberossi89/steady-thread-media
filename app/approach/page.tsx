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

const accent = "#e8d5ff";
const card = "#222222";
const border = "rgba(255,255,255,0.07)";
const muted = "rgba(255,255,255,0.55)";

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
      <section style={{ padding: "140px 24px 80px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.1em",
              color: muted,
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            Our Approach
          </p>
          <h1
            style={{
              fontSize: "clamp(36px, 5vw, 68px)",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              maxWidth: "760px",
              marginBottom: "24px",
            }}
          >
            A system, not a{" "}
            <span style={{ color: accent }}>strategy doc</span>
          </h1>
          <p
            style={{
              fontSize: "17px",
              color: muted,
              lineHeight: 1.7,
              maxWidth: "540px",
            }}
          >
            Most GTM engagements end with a deck. Ours end with a running
            system. Here&apos;s exactly how we go from your target account list
            to qualified pipeline in the calendar.
          </p>
        </div>
      </section>

      {/* Process steps */}
      <section style={{ padding: "0 24px 120px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {steps.map((step, i) => (
            <div
              key={step.num}
              style={{
                display: "grid",
                gridTemplateColumns: "240px 1fr",
                gap: "48px",
                borderTop: `1px solid ${border}`,
                padding: "56px 0",
              }}
              className="step-grid"
            >
              {/* Left — number + duration */}
              <div>
                <p
                  style={{
                    fontSize: "48px",
                    fontWeight: 700,
                    letterSpacing: "-0.04em",
                    color: "rgba(255,255,255,0.08)",
                    lineHeight: 1,
                    marginBottom: "12px",
                  }}
                >
                  {step.num}
                </p>
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    color: accent,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    backgroundColor: "rgba(232,213,255,0.1)",
                    padding: "4px 10px",
                    borderRadius: "100px",
                  }}
                >
                  {step.duration}
                </span>
              </div>

              {/* Right — content */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }} className="step-inner">
                <div>
                  <h2
                    style={{
                      fontSize: "clamp(20px, 2vw, 28px)",
                      fontWeight: 700,
                      lineHeight: 1.2,
                      letterSpacing: "-0.02em",
                      marginBottom: "16px",
                    }}
                  >
                    {step.title}
                  </h2>
                  <p
                    style={{
                      fontSize: "15px",
                      color: muted,
                      lineHeight: 1.75,
                    }}
                  >
                    {step.body}
                  </p>
                </div>
                <div
                  style={{
                    backgroundColor: card,
                    border: `1px solid ${border}`,
                    borderRadius: "14px",
                    padding: "24px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "11px",
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      color: muted,
                      textTransform: "uppercase",
                      marginBottom: "16px",
                    }}
                  >
                    Outputs
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    {step.outputs.map((o) => (
                      <div
                        key={o}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "10px",
                          fontSize: "13px",
                          color: "rgba(255,255,255,0.7)",
                          lineHeight: 1.5,
                        }}
                      >
                        <span style={{ color: accent, flexShrink: 0 }}>→</span>
                        {o}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <style>{`
          @media(max-width:900px){.step-grid{grid-template-columns:1fr!important;}}
          @media(max-width:640px){.step-inner{grid-template-columns:1fr!important;}}
        `}</style>
      </section>

      {/* Principles */}
      <section
        style={{
          padding: "80px 24px",
          backgroundColor: "#1e1e1e",
          borderTop: `1px solid ${border}`,
          borderBottom: `1px solid ${border}`,
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(24px, 3vw, 36px)",
              fontWeight: 700,
              letterSpacing: "-0.025em",
              marginBottom: "48px",
            }}
          >
            How we think about GTM
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "24px",
            }}
          >
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
                style={{
                  backgroundColor: card,
                  border: `1px solid ${border}`,
                  borderRadius: "14px",
                  padding: "28px",
                }}
              >
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    marginBottom: "10px",
                    lineHeight: 1.3,
                  }}
                >
                  {p.title}
                </h3>
                <p style={{ fontSize: "14px", color: muted, lineHeight: 1.7 }}>
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "100px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "520px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(26px, 3.5vw, 42px)",
              fontWeight: 700,
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
              marginBottom: "20px",
            }}
          >
            Ready to build the system?
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: muted,
              lineHeight: 1.7,
              marginBottom: "36px",
            }}
          >
            Start with a GTM assessment — we&apos;ll audit your current motion
            and map out exactly what needs to change.
          </p>
          <Link
            href="/contact"
            className="btn-white"
            style={{
              fontSize: "14px",
              fontWeight: 500,
              color: "#1a1a1a",
              backgroundColor: "#ffffff",
              padding: "12px 28px",
              borderRadius: "100px",
              textDecoration: "none",
            }}
          >
            Book a GTM Assessment
          </Link>
        </div>
      </section>
    </>
  );
}
