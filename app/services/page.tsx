import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Steady Thread Media",
  description:
    "Signal-based account targeting, AI-powered outbound systems, ABM programs, and CRM operations for B2B revenue teams.",
};

const accent = "#e8d5ff";
const card = "#222222";
const border = "rgba(255,255,255,0.07)";
const muted = "rgba(255,255,255,0.55)";

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
            Services
          </p>
          <h1
            style={{
              fontSize: "clamp(36px, 5vw, 68px)",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              maxWidth: "820px",
              marginBottom: "24px",
            }}
          >
            Everything you need to build{" "}
            <span style={{ color: accent }}>consistent pipeline</span>
          </h1>
          <p
            style={{
              fontSize: "17px",
              color: muted,
              lineHeight: 1.7,
              maxWidth: "560px",
              marginBottom: "40px",
            }}
          >
            We don&apos;t hand you a strategy doc. We build the full system —
            account intelligence, outbound infrastructure, ABM programs, and CRM
            operations — and run it alongside you.
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

      {/* Services detail */}
      <section style={{ padding: "0 24px 120px" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "80px",
          }}
        >
          {services.map((service) => (
            <div
              key={service.num}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1.2fr",
                gap: "64px",
                borderTop: `1px solid ${border}`,
                paddingTop: "64px",
              }}
              className="service-grid"
            >
              {/* Left */}
              <div>
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    color: accent,
                    letterSpacing: "0.06em",
                    marginBottom: "16px",
                  }}
                >
                  {service.num}
                </p>
                <h2
                  style={{
                    fontSize: "clamp(22px, 2.5vw, 32px)",
                    fontWeight: 700,
                    lineHeight: 1.15,
                    letterSpacing: "-0.02em",
                    marginBottom: "12px",
                  }}
                >
                  {service.title}
                </h2>
                <p
                  style={{
                    fontSize: "15px",
                    color: accent,
                    marginBottom: "24px",
                    fontStyle: "italic",
                  }}
                >
                  {service.tagline}
                </p>
                {service.body.map((p, i) => (
                  <p
                    key={i}
                    style={{
                      fontSize: "15px",
                      color: muted,
                      lineHeight: 1.75,
                      marginBottom: "16px",
                    }}
                  >
                    {p}
                  </p>
                ))}

                {/* Related article link */}
                {service.readMore && (
                  <Link
                    href={service.readMore.href}
                    className="link-muted"
                    style={{
                      display: "inline-block",
                      fontSize: "13px",
                      color: accent,
                      textDecoration: "none",
                      marginTop: "4px",
                      marginBottom: "8px",
                    }}
                  >
                    {service.readMore.label}
                  </Link>
                )}

                {/* Tools */}
                <div style={{ marginTop: "24px" }}>
                  <p
                    style={{
                      fontSize: "11px",
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      color: muted,
                      textTransform: "uppercase",
                      marginBottom: "10px",
                    }}
                  >
                    Tools
                  </p>
                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                    {service.tools.map((tool) => (
                      <span
                        key={tool}
                        style={{
                          fontSize: "12px",
                          color: "rgba(255,255,255,0.6)",
                          backgroundColor: card,
                          border: `1px solid ${border}`,
                          padding: "5px 12px",
                          borderRadius: "100px",
                        }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right — deliverables */}
              <div
                style={{
                  backgroundColor: card,
                  border: `1px solid ${border}`,
                  borderRadius: "16px",
                  padding: "32px",
                  alignSelf: "flex-start",
                }}
              >
                <p
                  style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    color: muted,
                    textTransform: "uppercase",
                    marginBottom: "20px",
                  }}
                >
                  What You Get
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "14px",
                  }}
                >
                  {service.deliverables.map((d) => (
                    <div
                      key={d}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "12px",
                        fontSize: "14px",
                        color: "rgba(255,255,255,0.75)",
                        lineHeight: 1.5,
                      }}
                    >
                      <span style={{ color: accent, flexShrink: 0 }}>✓</span>
                      {d}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <style>{`@media(max-width:768px){.service-grid{grid-template-columns:1fr!important;}}`}</style>
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
        <div style={{ maxWidth: "560px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(26px, 3.5vw, 44px)",
              fontWeight: 700,
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
              marginBottom: "20px",
            }}
          >
            Not sure which service fits?
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: muted,
              lineHeight: 1.7,
              marginBottom: "36px",
            }}
          >
            Book a GTM assessment and we&apos;ll map out exactly what your
            pipeline needs and where to start.
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
