import Link from "next/link";

const accent = "#e8d5ff";
const accentDim = "rgba(232,213,255,0.1)";
const card = "#222222";
const border = "rgba(255,255,255,0.07)";
const muted = "rgba(255,255,255,0.55)";

export default function Home() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────── */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          padding: "120px 24px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "10%",
            right: "5%",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(232,213,255,0.06) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          <div>
            <h1
              style={{
                fontSize: "clamp(44px, 6vw, 80px)",
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                marginBottom: "24px",
              }}
            >
              Strategic GTM systems for{" "}
              <span style={{ color: accent }}>consistent</span> B2B growth
            </h1>
            <p
              style={{
                fontSize: "17px",
                color: muted,
                lineHeight: 1.7,
                maxWidth: "480px",
                marginBottom: "40px",
              }}
            >
              We build signal-based outbound and account-based marketing systems
              for B2B revenue teams that have a clear ICP but no consistent way
              to reach the right people and convert them into pipeline.
            </p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
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
              <Link
                href="/approach"
                className="btn-ghost"
                style={{
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.7)",
                  padding: "12px 28px",
                  borderRadius: "100px",
                  textDecoration: "none",
                  border: `1px solid ${border}`,
                }}
              >
                See How It Works
              </Link>
            </div>
          </div>

          {/* Pipeline card stack */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              { label: "Identify Accounts", progress: 60 },
              { label: "Capture Buying Signals", progress: 75 },
              { label: "Targeted Outreach", progress: 90 },
            ].map((step, i) => (
              <div
                key={step.label}
                style={{
                  backgroundColor: card,
                  border: `1px solid ${border}`,
                  borderRadius: "14px",
                  padding: "20px 24px",
                }}
              >
                <p style={{ fontSize: "14px", fontWeight: 500, marginBottom: "10px" }}>
                  {step.label}
                </p>
                <div
                  style={{
                    height: "4px",
                    backgroundColor: "rgba(255,255,255,0.08)",
                    borderRadius: "2px",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: `${step.progress}%`,
                      backgroundColor: i === 2 ? accent : "rgba(255,255,255,0.3)",
                      borderRadius: "2px",
                    }}
                  />
                </div>
              </div>
            ))}
            <div
              style={{
                backgroundColor: accentDim,
                border: "1px solid rgba(232,213,255,0.15)",
                borderRadius: "14px",
                padding: "20px 24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: "10px",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    color: "rgba(232,213,255,0.6)",
                    textTransform: "uppercase",
                    marginBottom: "4px",
                  }}
                >
                  Outcome
                </p>
                <p style={{ fontSize: "16px", fontWeight: 600, color: accent }}>
                  Qualified Pipeline
                </p>
              </div>
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  backgroundColor: accent,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M2 7H12M8 3L12 7L8 11"
                    stroke="#1a1a1a"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* ── Stats bar ───────────────────────────────────── */}
      <section
        style={{
          borderTop: `1px solid ${border}`,
          borderBottom: `1px solid ${border}`,
          padding: "40px 24px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "32px",
          }}
        >
          {[
            { value: "$5M+", label: "Pipeline generated for clients" },
            { value: "50+", label: "B2B companies served" },
            { value: "Charlotte, NC", label: "Serving teams across North America" },
            { value: "Certified", label: "Clay · HubSpot · LinkedIn" },
          ].map((stat) => (
            <div key={stat.value}>
              <p
                style={{
                  fontSize: "22px",
                  fontWeight: 700,
                  marginBottom: "4px",
                  letterSpacing: "-0.02em",
                }}
              >
                {stat.value}
              </p>
              <p style={{ fontSize: "13px", color: muted, lineHeight: 1.4 }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Problem section ─────────────────────────────── */}
      <section style={{ padding: "100px 24px" }}>
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
            The Problem
          </p>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              maxWidth: "640px",
              marginBottom: "64px",
            }}
          >
            You know who your target accounts are. The problem is getting in
            front of them.
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {[
              {
                num: "01",
                title: "No consistent outbound motion",
                body: "You have a target list but no systematic way to work it. Pipeline comes from referrals, warm intros, and occasional bursts of activity — not a repeatable system.",
              },
              {
                num: "02",
                title: "Outreach that doesn't convert",
                body: "Messages go out but replies don't come back. The problem isn't volume, it's relevance. Generic outreach to the right accounts still gets ignored.",
              },
              {
                num: "03",
                title: "No signal on when accounts are ready",
                body: "You're reaching out blind with no visibility into which target accounts are showing buying intent, researching solutions, or experiencing triggers that make them ready to buy now.",
              },
            ].map((item) => (
              <div
                key={item.num}
                style={{
                  backgroundColor: card,
                  border: `1px solid ${border}`,
                  borderRadius: "16px",
                  padding: "32px",
                }}
              >
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    color: muted,
                    letterSpacing: "0.06em",
                    marginBottom: "16px",
                  }}
                >
                  {item.num}
                </p>
                <h3
                  style={{
                    fontSize: "17px",
                    fontWeight: 600,
                    marginBottom: "12px",
                    lineHeight: 1.3,
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: "14px", color: muted, lineHeight: 1.7 }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ICP section ─────────────────────────────────── */}
      <section
        style={{
          padding: "80px 24px",
          backgroundColor: "#1e1e1e",
          borderTop: `1px solid ${border}`,
          borderBottom: `1px solid ${border}`,
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "64px",
            alignItems: "center",
          }}
          className="icp-grid"
        >
          <div>
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
              Built For
            </p>
            <h2
              style={{
                fontSize: "clamp(24px, 3vw, 36px)",
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: "-0.025em",
              }}
            >
              B2B teams that know their ICP but can&apos;t convert it into
              pipeline
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {[
              "B2B SaaS companies with ACV above $15K",
              "Revenue teams moving off referral-dependent growth",
              "Founders and marketing leaders who need outbound that actually works",
              "Companies running outreach but seeing low reply and conversion rates",
              "Teams that want ABM but don't have the infrastructure to execute it",
            ].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.75)",
                  lineHeight: 1.5,
                }}
              >
                <span
                  style={{ color: accent, flexShrink: 0, marginTop: "2px" }}
                >
                  ✦
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){.icp-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* ── Services overview ───────────────────────────── */}
      <section style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "56px",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  color: muted,
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                Services
              </p>
              <h2
                style={{
                  fontSize: "clamp(26px, 3.5vw, 42px)",
                  fontWeight: 700,
                  letterSpacing: "-0.025em",
                  lineHeight: 1.1,
                }}
              >
                How we get you in front of the right accounts
              </h2>
            </div>
            <Link
              href="/services"
              className="btn-ghost"
              style={{
                fontSize: "13px",
                color: muted,
                textDecoration: "none",
                border: `1px solid ${border}`,
                padding: "9px 18px",
                borderRadius: "100px",
              }}
            >
              Explore Services →
            </Link>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "20px",
            }}
          >
            {[
              {
                num: "01",
                title: "Signal-Based Account Targeting",
                body: "We identify which of your target accounts are showing buying signals right now — using behavioral data, trigger events, and intent indicators to prioritize outreach.",
              },
              {
                num: "02",
                title: "AI-Powered Outbound Systems",
                body: "We build outbound infrastructure using Clay, Smartlead, and HeyReach that researches, personalizes, and sequences outreach at scale without sacrificing relevance.",
              },
              {
                num: "03",
                title: "Account-Based Marketing",
                body: "We run tiered ABM programs that build awareness with your target accounts before the pitch. Multi-channel, buying committee aware, designed to create inbound pull.",
              },
              {
                num: "04",
                title: "CRM and Revenue Operations",
                body: "We connect your outbound motion to HubSpot with proper lead scoring, handoff workflows, and pipeline reporting so nothing falls through the cracks.",
              },
            ].map((service) => (
              <div
                key={service.num}
                className="card-hover"
              style={{
                  backgroundColor: card,
                  border: `1px solid ${border}`,
                  borderRadius: "16px",
                  padding: "32px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <p
                  style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    color: accent,
                    letterSpacing: "0.06em",
                  }}
                >
                  {service.num}
                </p>
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    lineHeight: 1.3,
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontSize: "13px",
                    color: muted,
                    lineHeight: 1.7,
                    flexGrow: 1,
                  }}
                >
                  {service.body}
                </p>
                <Link
                  href="/services"
                  className="link-muted"
                  style={{ fontSize: "13px", color: muted, textDecoration: "none" }}
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Engagement options ──────────────────────────── */}
      <section
        style={{
          padding: "100px 24px",
          backgroundColor: "#1e1e1e",
          borderTop: `1px solid ${border}`,
          borderBottom: `1px solid ${border}`,
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.1em",
              color: muted,
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            How We Engage
          </p>
          <h2
            style={{
              fontSize: "clamp(26px, 3.5vw, 42px)",
              fontWeight: 700,
              letterSpacing: "-0.025em",
              marginBottom: "48px",
            }}
          >
            Choose how we work together
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            {[
              {
                name: "GTM Sprint",
                tag: null,
                desc: "90-day engagement to build your outbound system from the ground up. Account targeting, signal infrastructure, messaging, and sequences. Priced on scope.",
                best: "Teams with zero outbound motion who need a system built fast.",
              },
              {
                name: "Ongoing GTM Partner",
                tag: "Most Common",
                desc: "Monthly retainer for teams that need continued execution, optimization, and pipeline support. ABM campaigns, outbound management, CRM operations, and weekly reporting.",
                best: "Teams with an existing motion that needs to be systematized and scaled.",
              },
              {
                name: "ABM Program",
                tag: null,
                desc: "Dedicated account-based marketing for teams targeting a defined list of high-value accounts. Full buying committee strategy, multi-channel execution, and account progression tracking.",
                best: "Teams with a named account list and enterprise deal sizes that need a true ABM program.",
              },
            ].map((plan) => (
              <div
                key={plan.name}
                style={{
                  backgroundColor: plan.tag ? accentDim : card,
                  border: plan.tag
                    ? "1px solid rgba(232,213,255,0.2)"
                    : `1px solid ${border}`,
                  borderRadius: "16px",
                  padding: "32px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                {plan.tag && (
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 600,
                      color: accent,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      backgroundColor: "rgba(232,213,255,0.12)",
                      padding: "4px 10px",
                      borderRadius: "100px",
                      alignSelf: "flex-start",
                    }}
                  >
                    {plan.tag}
                  </span>
                )}
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {plan.name}
                </h3>
                <p style={{ fontSize: "14px", color: muted, lineHeight: 1.7 }}>
                  {plan.desc}
                </p>
                <div
                  style={{
                    backgroundColor: "rgba(255,255,255,0.05)",
                    borderRadius: "10px",
                    padding: "14px 16px",
                    marginTop: "auto",
                  }}
                >
                  <p
                    style={{
                      fontSize: "10px",
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      color: muted,
                      textTransform: "uppercase",
                      marginBottom: "6px",
                    }}
                  >
                    Best For
                  </p>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "rgba(255,255,255,0.7)",
                      lineHeight: 1.5,
                    }}
                  >
                    {plan.best}
                  </p>
                </div>
                <Link
                  href="/contact"
                  className={plan.tag ? "btn-accent" : "btn-subtle"}
                  style={{
                    fontSize: "13px",
                    fontWeight: 500,
                    color: plan.tag ? "#1a1a1a" : "rgba(255,255,255,0.7)",
                    backgroundColor: plan.tag
                      ? accent
                      : "rgba(255,255,255,0.08)",
                    padding: "11px 20px",
                    borderRadius: "100px",
                    textDecoration: "none",
                    textAlign: "center",
                  }}
                >
                  Book a GTM Assessment →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tools ───────────────────────────────────────── */}
      <section
        style={{ padding: "64px 24px", borderBottom: `1px solid ${border}` }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: "13px", color: muted, marginBottom: "28px" }}>
            The tools behind the system — we build the workflows that make them
            generate pipeline.
          </p>
          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {["Clay", "Smartlead", "HeyReach", "HubSpot", "Webflow / Lovable"].map(
              (tool) => (
                <span
                  key={tool}
                  style={{
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.6)",
                    backgroundColor: card,
                    border: `1px solid ${border}`,
                    padding: "8px 16px",
                    borderRadius: "100px",
                  }}
                >
                  {tool}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────── */}
      <section style={{ padding: "120px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 52px)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              marginBottom: "20px",
            }}
          >
            You already know who you want to close.
          </h2>
          <p
            style={{
              fontSize: "17px",
              color: muted,
              lineHeight: 1.7,
              marginBottom: "40px",
            }}
          >
            Let&apos;s build the system to get you in front of them. We&apos;ll
            start with a GTM assessment to identify exactly where your outreach
            is breaking down.
          </p>
          <Link
            href="/contact"
            className="btn-white"
            style={{
              fontSize: "15px",
              fontWeight: 500,
              color: "#1a1a1a",
              backgroundColor: "#ffffff",
              padding: "14px 32px",
              borderRadius: "100px",
              textDecoration: "none",
            }}
          >
            Book Your GTM Assessment
          </Link>
        </div>
      </section>
    </>
  );
}
