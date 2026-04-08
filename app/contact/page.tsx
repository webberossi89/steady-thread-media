"use client";

import { useState } from "react";
import Script from "next/script";

const expectItems = [
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
];

const tools = ["Clay", "HubSpot", "LinkedIn"];

export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
      <Script
        id="cal-embed"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
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
          `,
        }}
      />

      <section className="pt-[140px] pb-[120px] px-6">
        <div className="container mx-auto max-w-[1200px]">
          <div className="contact-grid grid gap-[72px] items-start [grid-template-columns:1fr_1.6fr]">

            {/* ── Left ── */}
            <div>
              <p className="text-[11px] font-semibold tracking-[0.1em] text-muted-foreground uppercase mb-5">
                Book an Assessment
              </p>

              <h1 className="font-sans text-[clamp(32px,4vw,50px)] font-bold leading-[1.1] tracking-[-0.03em] mb-5">
                Let&apos;s look at your{" "}
                <span className="text-primary">pipeline problem</span>
              </h1>

              <p className="font-sans text-[15px] text-muted-foreground leading-[1.75] mb-10">
                Pick a time on the right, or drop your email and we&apos;ll reach
                out to schedule. No pitch, no pressure — just a focused 30-minute
                conversation about your outreach motion and where it&apos;s
                breaking down.
              </p>

              {/* What to expect */}
              <div className="flex flex-col gap-[18px] mb-12">
                {expectItems.map((item) => (
                  <div key={item.title} className="flex gap-[14px] items-start">
                    <span className="text-primary shrink-0 mt-[2px]">→</span>
                    <div>
                      <p className="font-sans text-[14px] font-semibold mb-[3px]">
                        {item.title}
                      </p>
                      <p className="font-sans text-[13px] text-muted-foreground leading-[1.6]">
                        {item.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* ── Email capture ── */}
              <div className="rounded-[16px] bg-secondary border border-white/5 p-7">
                {submitted ? (
                  <div className="text-center py-4">
                    <p className="text-[28px] mb-3">✦</p>
                    <p className="font-sans text-[16px] font-semibold text-primary mb-2">
                      Got it — we&apos;ll be in touch
                    </p>
                    <p className="font-sans text-[13px] text-muted-foreground leading-[1.6]">
                      We&apos;ll reach out within one business day to schedule your
                      assessment.
                    </p>
                  </div>
                ) : (
                  <>
                    <p className="font-sans text-[13px] font-semibold text-white/80 mb-1.5">
                      Prefer we reach out?
                    </p>
                    <p className="font-sans text-[12px] text-muted-foreground leading-[1.5] mb-4">
                      Drop your work email and we&apos;ll get back to you within
                      one business day.
                    </p>
                    <form onSubmit={handleSubmit} className="flex gap-[10px]">
                      <input
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-1 min-w-0 bg-background border border-white/10 rounded-xl px-[14px] py-[11px] text-[14px] text-white font-sans outline-none focus:border-primary/40 transition-colors"
                      />
                      <button
                        type="submit"
                        disabled={loading}
                        className="shrink-0 bg-primary text-primary-foreground font-sans text-[13px] font-medium px-[18px] py-[11px] rounded-xl border-none cursor-pointer whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed transition-opacity"
                      >
                        {loading ? "Sending…" : "Reach out →"}
                      </button>
                    </form>
                    {error && (
                      <p className="font-sans text-[12px] text-red-400 mt-2">
                        {error}
                      </p>
                    )}
                  </>
                )}
              </div>

              {/* Certs */}
              <div className="mt-7">
                <p className="text-[11px] font-semibold tracking-[0.08em] text-white/30 uppercase mb-3">
                  Certified in
                </p>
                <div className="flex gap-2 flex-wrap">
                  {tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs text-muted-foreground bg-secondary border border-white/5 px-3 py-1 rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Right — Cal embed ── */}
            <div className="rounded-[20px] bg-secondary border border-white/5 overflow-hidden min-h-[640px] sticky top-[88px]">
              <div
                id="cal-booking-embed"
                className="w-full h-full min-h-[640px]"
              />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
