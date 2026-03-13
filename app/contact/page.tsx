"use client";

import { useEffect, useState } from "react";

const accent = "#e8d5ff";
const card = "#222222";
const border = "rgba(255,255,255,0.07)";
const muted = "rgba(255,255,255,0.55)";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Cal?: any;
  }
}

export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.innerHTML = `
      (function (C, A, L) {
        let p = function (a, ar) { a.q.push(ar); };
        let d = C.document;
        C.Cal = C.Cal || function () {
          let cal = C.Cal; let ar = arguments;
          if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; }
          if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if (typeof namespace === "string") { cal.ns[namespace] = cal.ns[namespace] || api; p(cal.ns[namespace], ar); p(cal, [L, namespace, ar[2]]); } else p(cal, ar); return; }
          p(cal, ar);
        };
      })(window, "https://app.cal.com/embed/embed.js", "init");
      Cal("init", { origin: "https://cal.com" });
      Cal("inline", {
        elementOrSelector: "#cal-booking-embed",
        calLink: "webberossi/30min",
        layout: "month_view"
      });
      Cal("ui", {
        theme: "dark",
        styles: { branding: { brandColor: "#e8d5ff" } },
        hideEventTypeDetails: false,
        layout: "month_view"
      });
    `;
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Failed to submit");
      setSubmitted(true);
    } catch {
      setError("Something went wrong — please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <section style={{ padding: "140px 24px 120px" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1.6fr",
            gap: "72px",
            alignItems: "flex-start",
          }}
          className="contact-grid"
        >
          {/* ── Left ── */}
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
              Book an Assessment
            </p>
            <h1
              style={{
                fontSize: "clamp(32px, 4vw, 50px)",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                marginBottom: "20px",
              }}
            >
              Let&apos;s look at your{" "}
              <span style={{ color: accent }}>pipeline problem</span>
            </h1>
            <p
              style={{
                fontSize: "15px",
                color: muted,
                lineHeight: 1.75,
                marginBottom: "40px",
              }}
            >
              Pick a time on the right, or drop your email and we&apos;ll reach
              out to schedule. No pitch, no pressure — just a focused 30-minute
              conversation about your outreach motion and where it&apos;s
              breaking down.
            </p>

            {/* What to expect */}
            <div style={{ display: "flex", flexDirection: "column", gap: "18px", marginBottom: "48px" }}>
              {[
                {
                  title: "What to expect",
                  body: "30 minutes. We come prepared with questions about your ICP, current outbound, and pipeline targets.",
                },
                {
                  title: "What you get",
                  body: "A clear diagnosis of where your outreach is breaking down and a preliminary system design for your motion.",
                },
                {
                  title: "Who it's for",
                  body: "B2B teams with ACV above $15K, a defined ICP, and a pipeline problem referrals alone can't solve.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}
                >
                  <span style={{ color: accent, flexShrink: 0, marginTop: "2px" }}>→</span>
                  <div>
                    <p style={{ fontSize: "14px", fontWeight: 600, marginBottom: "3px" }}>
                      {item.title}
                    </p>
                    <p style={{ fontSize: "13px", color: muted, lineHeight: 1.6 }}>
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* ── Email capture ── */}
            <div
              style={{
                backgroundColor: card,
                border: `1px solid ${border}`,
                borderRadius: "16px",
                padding: "28px",
              }}
            >
              {submitted ? (
                <div style={{ textAlign: "center", padding: "16px 0" }}>
                  <p style={{ fontSize: "28px", marginBottom: "12px" }}>✦</p>
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: 600,
                      color: accent,
                      marginBottom: "8px",
                    }}
                  >
                    Got it — we&apos;ll be in touch
                  </p>
                  <p style={{ fontSize: "13px", color: muted, lineHeight: 1.6 }}>
                    We&apos;ll reach out within one business day to schedule your
                    assessment.
                  </p>
                </div>
              ) : (
                <>
                  <p
                    style={{
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "rgba(255,255,255,0.8)",
                      marginBottom: "6px",
                    }}
                  >
                    Prefer we reach out?
                  </p>
                  <p
                    style={{
                      fontSize: "12px",
                      color: muted,
                      lineHeight: 1.5,
                      marginBottom: "16px",
                    }}
                  >
                    Drop your work email and we&apos;ll get back to you within
                    one business day.
                  </p>
                  <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px" }}>
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{
                        flex: 1,
                        backgroundColor: "#1a1a1a",
                        border: `1px solid ${border}`,
                        borderRadius: "10px",
                        padding: "11px 14px",
                        fontSize: "14px",
                        color: "#ffffff",
                        outline: "none",
                        fontFamily: "Inter, sans-serif",
                        minWidth: 0,
                      }}
                    />
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-white"
                      style={{
                        fontSize: "13px",
                        fontWeight: 500,
                        color: "#1a1a1a",
                        backgroundColor: "#ffffff",
                        padding: "11px 18px",
                        borderRadius: "10px",
                        border: "none",
                        cursor: loading ? "not-allowed" : "pointer",
                        fontFamily: "Inter, sans-serif",
                        whiteSpace: "nowrap",
                        flexShrink: 0,
                        opacity: loading ? 0.7 : 1,
                      }}
                    >
                      {loading ? "Sending…" : "Reach out →"}
                    </button>
                  </form>
                  {error && (
                    <p style={{ fontSize: "12px", color: "#ff6b6b", marginTop: "8px" }}>
                      {error}
                    </p>
                  )}
                </>
              )}
            </div>

            {/* Certs */}
            <div style={{ marginTop: "28px" }}>
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  color: "rgba(255,255,255,0.3)",
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                Certified in
              </p>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {["Clay", "HubSpot", "LinkedIn"].map((tool) => (
                  <span
                    key={tool}
                    style={{
                      fontSize: "12px",
                      color: "rgba(255,255,255,0.5)",
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

          {/* ── Right — Cal embed ── */}
          <div
            style={{
              backgroundColor: card,
              border: `1px solid ${border}`,
              borderRadius: "20px",
              overflow: "hidden",
              minHeight: "640px",
              position: "sticky",
              top: "88px",
            }}
          >
            <div
              id="cal-booking-embed"
              style={{ width: "100%", height: "100%", minHeight: "640px" }}
            />
          </div>
        </div>

        <style>{`
          @media(max-width:768px) { .contact-grid { grid-template-columns: 1fr !important; } }
          input::placeholder { color: rgba(255,255,255,0.25); }
          input:focus { border-color: rgba(232,213,255,0.35) !important; }
        `}</style>
      </section>
    </>
  );
}
