import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights | Steady Thread Media",
  description:
    "Practical writing on outbound systems, account-based marketing, and pipeline operations for B2B revenue teams.",
};

const accent = "#e8d5ff";
const card = "#222222";
const border = "rgba(255,255,255,0.07)";
const muted = "rgba(255,255,255,0.55)";

const posts = [
  {
    category: "GTM Strategy",
    title: "What Is a GTM Engineer? The New Revenue Role Redefining B2B Sales",
    summary:
      "GTM engineers sit at the intersection of sales, marketing, and data. Here's exactly what they do, why the role exists now, and whether your company needs one.",
    date: "March 10, 2025",
    readTime: "8 min read",
    slug: "what-is-a-gtm-engineer",
  },
  {
    category: "Account Intelligence",
    title: "The 4 Buying Signals That Actually Drive B2B Pipeline (And How to Automate Them)",
    summary:
      "There are hundreds of intent signals. Most are noise. These four consistently correlate with pipeline from outbound — and how to capture them automatically in Clay.",
    date: "January 15, 2025",
    readTime: "9 min read",
    slug: "buying-signals-b2b-pipeline",
  },
  {
    category: "Outbound Systems",
    title: "Clay vs. Manual Research: The Real ROI Calculation for B2B Outbound",
    summary:
      "Clay has a real cost and a learning curve. Here's how to calculate whether it makes sense for your outbound volume — with actual numbers, not hype.",
    date: "February 20, 2025",
    readTime: "7 min read",
    slug: "clay-vs-manual-research",
  },
  {
    category: "CRM & RevOps",
    title: "HubSpot Configuration Mistakes That Kill Outbound Attribution",
    summary:
      "If your CRM can't tell you which outbound activity generated pipeline, you're flying blind. The 6 setup mistakes we fix in every engagement.",
    date: "Coming Soon",
    readTime: "7 min read",
    slug: null,
  },
  {
    category: "ABM",
    title: "Why ABM Fails for Most B2B SaaS Companies (And What to Do Instead)",
    summary:
      "ABM isn't a tool — it's a motion. Most teams fail because they try to run ABM without the prerequisites in place. Here's the honest framework.",
    date: "Coming Soon",
    readTime: "10 min read",
    slug: null,
  },
  {
    category: "GTM Strategy",
    title: "The Referral Trap: What Happens When You Scale Off Warm Intros",
    summary:
      "Referral-dependent growth feels great until it doesn't. The warning signs that your pipeline is fragile — and what to build before the tap runs dry.",
    date: "Coming Soon",
    readTime: "9 min read",
    slug: null,
  },
];

export default function InsightsPage() {
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
            Insights
          </p>
          <h1
            style={{
              fontSize: "clamp(36px, 5vw, 68px)",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              maxWidth: "720px",
              marginBottom: "24px",
            }}
          >
            GTM thinking from the{" "}
            <span style={{ color: accent }}>trenches</span>
          </h1>
          <p
            style={{
              fontSize: "17px",
              color: muted,
              lineHeight: 1.7,
              maxWidth: "500px",
            }}
          >
            Practical writing on outbound systems, account-based marketing, and
            pipeline operations — from practitioners, not theorists.
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <section style={{ padding: "0 24px 120px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Featured post */}
          <Link
            href={`/insights/${posts[0].slug}`}
            style={{ textDecoration: "none", color: "inherit", display: "block" }}
            className="card-hover"
          >
            <div
              style={{
                backgroundColor: card,
                border: `1px solid ${border}`,
                borderRadius: "16px",
                padding: "48px",
                marginBottom: "32px",
                transition: "border-color 0.2s ease, background-color 0.2s ease",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: "16px",
                  marginBottom: "20px",
                }}
              >
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
                  {posts[0].category}
                </span>
                <p style={{ fontSize: "12px", color: muted }}>
                  {posts[0].date} · {posts[0].readTime}
                </p>
              </div>
              <h2
                style={{
                  fontSize: "clamp(22px, 3vw, 34px)",
                  fontWeight: 700,
                  lineHeight: 1.15,
                  letterSpacing: "-0.02em",
                  marginBottom: "16px",
                }}
              >
                {posts[0].title}
              </h2>
              <p
                style={{
                  fontSize: "15px",
                  color: muted,
                  lineHeight: 1.7,
                  maxWidth: "640px",
                  marginBottom: "28px",
                }}
              >
                {posts[0].summary}
              </p>
              <span style={{ fontSize: "13px", color: accent }}>Read article →</span>
            </div>
          </Link>

          {/* Remaining posts grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "20px",
            }}
          >
            {posts.slice(1).map((post) => {
              const inner = (
                <div
                  style={{
                    backgroundColor: card,
                    border: `1px solid ${border}`,
                    borderRadius: "14px",
                    padding: "28px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    height: "100%",
                    transition: "border-color 0.2s ease, background-color 0.2s ease",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexWrap: "wrap",
                      gap: "8px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "10px",
                        fontWeight: 600,
                        color: accent,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                      }}
                    >
                      {post.category}
                    </span>
                    <p style={{ fontSize: "11px", color: muted }}>
                      {post.date} · {post.readTime}
                    </p>
                  </div>
                  <h3
                    style={{
                      fontSize: "17px",
                      fontWeight: 600,
                      lineHeight: 1.3,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {post.title}
                  </h3>
                  <p style={{ fontSize: "13px", color: muted, lineHeight: 1.7, flexGrow: 1 }}>
                    {post.summary}
                  </p>
                  <span style={{ fontSize: "12px", color: post.slug ? accent : "rgba(255,255,255,0.3)" }}>
                    {post.slug ? "Read article →" : "Coming soon →"}
                  </span>
                </div>
              );

              return post.slug ? (
                <Link
                  key={post.title}
                  href={`/insights/${post.slug}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                  className="card-hover"
                >
                  {inner}
                </Link>
              ) : (
                <div key={post.title}>{inner}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section
        style={{
          padding: "80px 24px",
          backgroundColor: "#1e1e1e",
          borderTop: `1px solid ${border}`,
        }}
      >
        <div
          style={{
            maxWidth: "480px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(22px, 3vw, 32px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              marginBottom: "12px",
            }}
          >
            Get new posts in your inbox
          </h2>
          <p
            style={{
              fontSize: "15px",
              color: muted,
              lineHeight: 1.7,
              marginBottom: "28px",
            }}
          >
            Practical GTM writing. No filler. Occasional but worth it.
          </p>
          <Link
            href="/contact"
            className="btn-white"
            style={{
              fontSize: "14px",
              fontWeight: 500,
              color: "#1a1a1a",
              backgroundColor: "#ffffff",
              padding: "11px 24px",
              borderRadius: "100px",
              textDecoration: "none",
            }}
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
