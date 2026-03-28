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

const accent = "#e8d5ff";
const card = "#222222";
const border = "rgba(255,255,255,0.07)";
const muted = "rgba(255,255,255,0.55)";

export default function AboutPage() {
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
            About
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
            We build GTM systems,{" "}
            <span style={{ color: accent }}>not decks</span>
          </h1>
          <p
            style={{
              fontSize: "17px",
              color: muted,
              lineHeight: 1.7,
              maxWidth: "540px",
            }}
          >
            Steady Thread Media is a GTM engineering agency based in Charlotte, NC. We help B2B revenue teams replace referral dependency and inconsistent outreach with signal-based systems that run.
          </p>
        </div>
      </section>

      {/* Story */}
      <section style={{ padding: "0 24px 80px" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            borderTop: `1px solid ${border}`,
            paddingTop: "64px",
          }}
          className="about-grid"
        >
          <div>
            <h2
              style={{
                fontSize: "clamp(22px, 2.5vw, 32px)",
                fontWeight: 700,
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                marginBottom: "24px",
              }}
            >
              Why we exist
            </h2>
            <p
              style={{
                fontSize: "15px",
                color: muted,
                lineHeight: 1.8,
                marginBottom: "20px",
              }}
            >
              Most B2B pipeline problems aren&apos;t caused by bad product or weak demand. They come from not having a system that reliably gets you in front of the right people at the right time.
            </p>
            <p
              style={{
                fontSize: "15px",
                color: muted,
                lineHeight: 1.8,
                marginBottom: "20px",
              }}
            >
              We started Steady Thread because we kept seeing the same pattern: great companies with strong ICPs and real value propositions, stuck because they had no consistent outbound motion and no visibility into when accounts were actually ready to buy.
            </p>
            <p
              style={{
                fontSize: "15px",
                color: muted,
                lineHeight: 1.8,
              }}
            >
              We built the solution we wished existed — a GTM engineering firm that actually implements the system, runs it alongside you, and is accountable to pipeline outcomes, not deliverable checkboxes.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
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
                style={{
                  backgroundColor: card,
                  border: `1px solid ${border}`,
                  borderRadius: "14px",
                  padding: "24px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: "11px",
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      color: muted,
                      textTransform: "uppercase",
                      marginBottom: "6px",
                    }}
                  >
                    {stat.label}
                  </p>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)" }}>
                    {stat.sub}
                  </p>
                </div>
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    color: accent,
                    textAlign: "right",
                    flexShrink: 0,
                  }}
                >
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we're different */}
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
            How we&apos;re different from a GTM consultant
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "24px",
            }}
            className="diff-grid"
          >
            <div
              style={{
                backgroundColor: "rgba(255,255,255,0.03)",
                border: `1px solid ${border}`,
                borderRadius: "14px",
                padding: "28px",
              }}
            >
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  color: muted,
                  textTransform: "uppercase",
                  marginBottom: "20px",
                }}
              >
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
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    fontSize: "14px",
                    color: muted,
                    marginBottom: "12px",
                    lineHeight: 1.5,
                  }}
                >
                  <span style={{ color: "rgba(255,255,255,0.2)", flexShrink: 0 }}>—</span>
                  {item}
                </div>
              ))}
            </div>
            <div
              style={{
                backgroundColor: "rgba(232,213,255,0.05)",
                border: "1px solid rgba(232,213,255,0.15)",
                borderRadius: "14px",
                padding: "28px",
              }}
            >
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  color: accent,
                  textTransform: "uppercase",
                  marginBottom: "20px",
                }}
              >
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
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.75)",
                    marginBottom: "12px",
                    lineHeight: 1.5,
                  }}
                >
                  <span style={{ color: accent, flexShrink: 0 }}>✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.1em",
              color: muted,
              textTransform: "uppercase",
              marginBottom: "40px",
            }}
          >
            Founder
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto 1fr",
              gap: "40px",
              alignItems: "start",
              maxWidth: "720px",
            }}
            className="founder-grid"
          >
            {/* Avatar */}
            <div
              style={{
                width: "160px",
                height: "160px",
                borderRadius: "50%",
                overflow: "hidden",
                border: `1px solid ${border}`,
                flexShrink: 0,
              }}
            >
              <Image
                src="/jared-webber.jpg"
                alt="Jared Webber"
                width={160}
                height={160}
                style={{ objectFit: "cover", objectPosition: "center 15%", width: "100%", height: "100%" }}
              />
            </div>
            {/* Bio */}
            <div>
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  marginBottom: "4px",
                }}
              >
                Jared Webber
              </p>
              <p
                style={{
                  fontSize: "12px",
                  color: accent,
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                  marginBottom: "20px",
                }}
              >
                Founder & GTM Engineer
              </p>
              <p
                style={{
                  fontSize: "15px",
                  color: muted,
                  lineHeight: 1.8,
                  marginBottom: "16px",
                }}
              >
                Background in marketing, demand generation, and agency-side GTM work across B2B. Started Steady Thread to build the kind of outbound infrastructure he kept wishing clients already had — signal-based, accountable, and actually running.
              </p>
              <p
                style={{
                  fontSize: "15px",
                  color: muted,
                  lineHeight: 1.8,
                }}
              >
                Based in Charlotte, NC. Focused on Clay, HubSpot, and the systems that turn ICP clarity into consistent pipeline.
              </p>
            </div>
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
            Work with us
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: muted,
              lineHeight: 1.7,
              marginBottom: "36px",
            }}
          >
            We take on a limited number of clients at a time to stay focused.
            Book a GTM assessment to see if we&apos;re a fit.
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
