import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Steady Thread Media",
  description:
    "Real outcomes from B2B teams that replaced referral dependency with signal-based outbound and ABM systems.",
  alternates: {
    canonical: "/case-studies",
  },
};

const accent = "#e8d5ff";
const card = "#222222";
const border = "rgba(255,255,255,0.07)";
const muted = "rgba(255,255,255,0.55)";

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
            Case Studies
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
            Results from the{" "}
            <span style={{ color: accent }}>field</span>
          </h1>
          <p
            style={{
              fontSize: "17px",
              color: muted,
              lineHeight: 1.7,
              maxWidth: "520px",
            }}
          >
            Real outcomes from B2B teams that replaced referral dependency and
            inconsistent outreach with signal-based systems.
          </p>
        </div>
      </section>

      {/* Case studies */}
      <section style={{ padding: "0 24px 120px" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "0",
          }}
        >
          {caseStudies.map((cs, i) => (
            <div
              key={i}
              style={{
                borderTop: `1px solid ${border}`,
                padding: "64px 0",
              }}
            >
              {/* Industry tag */}
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  color: muted,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  backgroundColor: card,
                  padding: "4px 12px",
                  borderRadius: "100px",
                  border: `1px solid ${border}`,
                  display: "inline-block",
                  marginBottom: "28px",
                }}
              >
                {cs.industry}
              </span>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "64px",
                  marginBottom: "40px",
                }}
                className="cs-grid"
              >
                {/* Challenge */}
                <div>
                  <p
                    style={{
                      fontSize: "11px",
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      color: muted,
                      textTransform: "uppercase",
                      marginBottom: "12px",
                    }}
                  >
                    Challenge
                  </p>
                  <p
                    style={{
                      fontSize: "15px",
                      color: "rgba(255,255,255,0.8)",
                      lineHeight: 1.7,
                    }}
                  >
                    {cs.challenge}
                  </p>
                </div>

                {/* What we changed */}
                <div>
                  <p
                    style={{
                      fontSize: "11px",
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      color: muted,
                      textTransform: "uppercase",
                      marginBottom: "12px",
                    }}
                  >
                    What We Changed
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {cs.changes.map((c) => (
                      <div
                        key={c}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "10px",
                          fontSize: "14px",
                          color: "rgba(255,255,255,0.7)",
                          lineHeight: 1.5,
                        }}
                      >
                        <span style={{ color: accent, flexShrink: 0 }}>→</span>
                        {c}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Outcomes */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "16px",
                }}
                className="outcome-grid"
              >
                {cs.outcomes.map((o) => (
                  <div
                    key={o.metric}
                    style={{
                      backgroundColor: card,
                      border: `1px solid ${border}`,
                      borderRadius: "14px",
                      padding: "24px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "32px",
                        fontWeight: 700,
                        letterSpacing: "-0.03em",
                        color: accent,
                        marginBottom: "4px",
                      }}
                    >
                      {o.value}
                    </p>
                    <p
                      style={{
                        fontSize: "13px",
                        color: muted,
                        lineHeight: 1.4,
                      }}
                    >
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
      <section
        style={{
          padding: "100px 24px",
          backgroundColor: "#1e1e1e",
          borderTop: `1px solid ${border}`,
          textAlign: "center",
        }}
      >
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
            Want results like these?
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: muted,
              lineHeight: 1.7,
              marginBottom: "36px",
            }}
          >
            Book a GTM assessment. We&apos;ll diagnose your pipeline problem and
            show you exactly what a system would look like for your motion.
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
