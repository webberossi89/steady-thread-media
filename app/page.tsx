import Link from "next/link";
import { MotionDiv, MotionPath } from "@/components/MotionDiv";

export default function Home() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────── */}
      <section className="relative min-h-[100vh] w-full flex items-center pt-32 pb-32 overflow-hidden bg-background">
        {/* Background soft lighting */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3 animate-float" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/4 animate-float-delayed" />

        {/* Subtle thread line */}
        <svg className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <MotionPath
            d="M -100,200 C 300,300 400,100 600,400 C 800,700 900,200 1100,500"
            stroke="url(#lavender-gradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="lavender-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(278 100% 92%)" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(278 100% 92%)" stopOpacity="1" />
              <stop offset="100%" stopColor="hsl(278 100% 92%)" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        <div className="container mx-auto px-6 max-w-[1200px] relative z-20 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <MotionDiv
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-sans font-bold leading-[1.05] tracking-tight mb-8">
                  Strategic GTM systems for{" "}
                  <span className="text-primary relative inline-block">
                    consistent
                    <MotionDiv
                      className="absolute -bottom-2 left-0 w-full h-[3px] bg-primary/40 rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                    />
                  </span>{" "}
                  B2B growth
                </h1>
              </MotionDiv>

              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="text-lg md:text-xl text-white/70 max-w-2xl font-light leading-relaxed mb-10">
                  We build signal-based outbound and account-based marketing systems
                  for B2B revenue teams that have a clear ICP but no consistent way
                  to reach the right people and convert them into pipeline.
                </p>

                <div className="flex flex-col sm:flex-row gap-5">
                  <Link
                    href="/contact"
                    className="btn-primary group"
                  >
                    <span className="relative z-10">Book a GTM Assessment</span>
                  </Link>
                  <Link
                    href="/approach"
                    className="btn-ghost flex items-center justify-center gap-2 group"
                  >
                    See How It Works
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="group-hover:translate-x-1 transition-transform">
                      <path d="M4 9H14M10 5L14 9L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              </MotionDiv>
            </div>

            {/* Pipeline visual */}
            <div className="lg:col-span-5 hidden lg:block">
              <MotionDiv
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-md mx-auto aspect-square"
              >
                <div className="absolute inset-0 bg-background/40 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 shadow-2xl flex flex-col justify-between overflow-hidden group hover:border-primary/30 transition-colors duration-700">
                  <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/20 rounded-full blur-[50px] group-hover:bg-primary/30 transition-colors duration-700" />

                  <div className="relative z-10 flex flex-col gap-6">
                    {[
                      { label: "Identify Accounts", width: "w-1/3", delay: 0.5 },
                      { label: "Capture Buying Signals", width: "w-2/3", delay: 0.7 },
                      { label: "Targeted Outreach", width: "w-5/6", delay: 0.9 },
                    ].map((item, i) => (
                      <MotionDiv
                        key={item.label}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: item.delay, ease: "easeOut" }}
                        className="bg-white/5 rounded-2xl border border-white/5 p-4 transform hover:scale-[1.02] transition-transform"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="text-sm font-medium text-white/70">{item.label}</div>
                          <div className={`w-2 h-2 rounded-full ${i === 2 ? "bg-primary" : "bg-white/30"}`} />
                        </div>
                        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                          <MotionDiv
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 1.5, delay: item.delay + 0.2, ease: "easeInOut" }}
                            className={`h-full ${i === 2 ? "bg-primary" : "bg-white/50"} rounded-full origin-left ${item.width}`}
                          />
                        </div>
                      </MotionDiv>
                    ))}

                    <MotionDiv
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
                      className="mt-4 bg-primary/10 border border-primary/20 rounded-2xl p-5"
                    >
                      <div className="flex items-end justify-between">
                        <div>
                          <div className="text-xs text-primary/70 uppercase tracking-wider mb-1">Outcome</div>
                          <div className="text-lg text-primary font-medium">Qualified Pipeline</div>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M2 7H12M8 3L12 7L8 11" stroke="hsl(278 100% 92%)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                    </MotionDiv>
                  </div>
                </div>
              </MotionDiv>
            </div>
          </div>
        </div>

        {/* Curved divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 transform translate-y-px">
          <svg className="relative block w-full h-[50px] md:h-[80px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C300,120 900,120 1200,0 L1200,120 L0,120 Z" className="fill-secondary" />
          </svg>
        </div>
      </section>

      {/* ── Stats bar ───────────────────────────────────── */}
      <section className="py-24 bg-secondary border-b border-white/5 relative">
        <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Pipeline generated for clients", metric: "$5M+" },
              { label: "B2B companies served", metric: "50+" },
              { label: "Serving teams across North America", metric: "Charlotte, NC" },
              { label: "Clay \u00b7 HubSpot \u00b7 LinkedIn", metric: "Certified" },
            ].map((item, i) => (
              <MotionDiv
                key={item.metric}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="bg-background border border-border p-8 rounded-2xl text-center relative overflow-hidden group h-full flex flex-col justify-center"
              >
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="text-3xl md:text-4xl font-sans font-bold text-white mb-3 group-hover:text-primary transition-colors duration-500">
                    {item.metric}
                  </div>
                  <div className="w-8 h-1 bg-primary/20 mx-auto mb-4 rounded-full group-hover:w-16 group-hover:bg-primary/60 transition-all duration-500" />
                  <p className="text-sm text-foreground/80 font-medium">{item.label}</p>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* ── Problem section ─────────────────────────────── */}
      <section className="py-32 bg-background relative">
        <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
          <div className="max-w-4xl mb-20">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-white mb-6 leading-tight">
                You know who your target accounts are. The problem is{" "}
                <span className="text-primary relative inline-block">
                  getting in front of them.
                  <MotionDiv
                    className="absolute -bottom-2 left-0 w-full h-[3px] bg-primary/40 rounded-full"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                  />
                </span>
              </h2>
            </MotionDiv>
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-xl text-muted-foreground leading-relaxed mt-10">
                Most B2B revenue problems aren&apos;t caused by a bad product or weak demand. They come from not having a reliable system to get in front of the right people consistently.
              </p>
            </MotionDiv>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "No consistent outbound motion",
                desc: "You have a target list but no systematic way to work it. Pipeline comes from referrals, warm intros, and occasional bursts of activity \u2014 not a repeatable system.",
              },
              {
                title: "Outreach that doesn\u2019t convert",
                desc: "Messages go out but replies don\u2019t come back. The problem isn\u2019t volume, it\u2019s relevance. Generic outreach to the right accounts still gets ignored.",
              },
              {
                title: "No signal on when accounts are ready",
                desc: "You\u2019re reaching out blind with no visibility into which target accounts are showing buying intent, researching solutions, or experiencing triggers that make them ready to buy now.",
              },
            ].map((item, i) => (
              <MotionDiv
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="card-hover p-10 overflow-hidden group"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-8 font-sans font-bold text-xl group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-2xl font-sans font-bold text-white mb-4 pr-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* ── ICP section ─────────────────────────────────── */}
      <section className="py-32 bg-secondary relative overflow-hidden">
        {/* Decorative blur */}
        <div className="absolute -top-[20%] -right-[10%] w-[60vw] h-[60vh] bg-primary/5 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

        {/* Top curve */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 transform -translate-y-px rotate-180">
          <svg className="relative block w-full h-[50px] md:h-[80px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C300,120 900,120 1200,0 L1200,120 L0,120 Z" className="fill-background" />
          </svg>
        </div>

        <div className="container mx-auto px-6 max-w-[1200px] relative z-10 pt-10">
          <div className="flex flex-col md:flex-row gap-16 items-center icp-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            <div>
              <MotionDiv
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <h2 className="text-4xl md:text-5xl font-sans font-bold text-white leading-tight">
                  Built for B2B teams that know their ICP but can&apos;t convert it into{" "}
                  <span className="text-primary italic font-light">pipeline</span>
                </h2>
              </MotionDiv>
            </div>

            <div className="flex flex-col gap-4">
              {[
                "B2B SaaS companies with ACV above $15K",
                "Revenue teams moving off referral-dependent growth",
                "Founders and marketing leaders who need outbound that actually works",
                "Companies running outreach but seeing low reply and conversion rates",
                "Teams that want ABM but don\u2019t have the infrastructure to execute it",
              ].map((audience, i) => (
                <MotionDiv
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="group bg-background border border-white/5 p-6 rounded-2xl flex items-center hover:border-primary/30 hover:bg-white/[0.02] transition-all duration-300"
                >
                  <div className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary group-hover:shadow-[0_0_8px_rgba(240,214,255,0.8)] mr-6 flex-shrink-0 transition-all duration-300 group-hover:scale-150" />
                  <p className="font-medium text-foreground/90 group-hover:text-white transition-colors text-lg">{audience}</p>
                </MotionDiv>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom curve */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 transform translate-y-px">
          <svg className="relative block w-full h-[50px] md:h-[80px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C300,120 900,120 1200,0 L1200,120 L0,120 Z" className="fill-background" />
          </svg>
        </div>
      </section>

      {/* ── Services overview ───────────────────────────── */}
      <section className="py-32 bg-background relative">
        <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-3xl"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-white mb-6">
                How we get you in front of the right accounts
              </h2>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <Link href="/services" className="btn-ghost flex items-center gap-2 group whitespace-nowrap text-sm px-6 py-3">
                Explore Services
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-1 transition-transform">
                  <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </MotionDiv>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                num: "01",
                title: "Signal-Based Account Targeting",
                desc: "We identify which of your target accounts are showing buying signals right now \u2014 using behavioral data, trigger events, and intent indicators to prioritize outreach around accounts that are actually ready.",
                article: { label: "The 4 signals that drive pipeline \u2192", href: "/insights/buying-signals-b2b-pipeline" },
              },
              {
                num: "02",
                title: "AI-Powered Outbound Systems",
                desc: "We build outbound infrastructure using Clay, Smartlead, and HeyReach that researches, personalizes, and sequences outreach at scale without sacrificing relevance. Not spray and pray. Targeted, triggered, and systematic.",
                article: { label: "Clay vs. manual research: real ROI \u2192", href: "/insights/clay-vs-manual-research" },
              },
              {
                num: "03",
                title: "Account-Based Marketing",
                desc: "We run tiered ABM programs that build awareness and relationship with your target accounts before the pitch. Multi-channel, buying committee aware, and designed to create inbound pull from the accounts you\u2019ve been trying to reach outbound.",
                article: null,
              },
              {
                num: "04",
                title: "CRM and Revenue Operations",
                desc: "We connect your outbound motion to HubSpot with proper lead scoring, handoff workflows, and pipeline reporting so nothing falls through the cracks and sales knows exactly who to prioritize.",
                article: null,
              },
            ].map((service, i) => (
              <MotionDiv
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="card-hover p-10 md:p-12 flex flex-col h-full relative overflow-hidden group"
              >
                {/* Gradient hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="text-primary font-sans font-bold text-xl mb-6">{service.num}</div>
                <h3 className="text-2xl font-sans font-bold text-white mb-4 relative z-10">{service.title}</h3>
                <p className="text-muted-foreground mb-10 flex-grow relative z-10 leading-relaxed text-sm md:text-base">
                  {service.desc}
                </p>

                <div className="flex flex-col gap-2 relative z-10">
                  <Link href="/services" className="text-primary/70 group-hover:text-primary font-medium inline-flex items-center gap-3 transition-colors w-fit">
                    Learn more
                    <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:-rotate-45 transition-transform duration-300">
                        <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </Link>
                  {service.article && (
                    <Link href={service.article.href} className="text-xs text-primary/50 hover:text-primary/80 transition-colors">
                      {service.article.label}
                    </Link>
                  )}
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* ── Engagement options ──────────────────────────── */}
      <section className="py-32 bg-secondary relative overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-white mb-6">
              Choose how we work together
            </h2>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
            ].map((plan, i) => (
              <MotionDiv
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={`rounded-[2rem] p-10 flex flex-col gap-6 border transition-all duration-500 hover:-translate-y-2 ${
                  plan.tag
                    ? "bg-primary/10 border-primary/20 hover:border-primary/40"
                    : "bg-secondary border-white/5 hover:border-white/15"
                }`}
              >
                {plan.tag && (
                  <span className="text-xs font-semibold text-primary tracking-wider uppercase bg-primary/15 px-3 py-1 rounded-full self-start">
                    {plan.tag}
                  </span>
                )}
                <h3 className="text-2xl font-sans font-bold">{plan.name}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{plan.desc}</p>
                <div className="bg-white/5 rounded-2xl p-4 mt-auto">
                  <p className="text-[10px] font-semibold tracking-wider text-muted-foreground uppercase mb-2">Best For</p>
                  <p className="text-sm text-white/70 leading-relaxed">{plan.best}</p>
                </div>
                <Link
                  href="/contact"
                  className={`text-center text-sm font-medium rounded-full py-3 px-6 transition-all duration-300 ${
                    plan.tag
                      ? "bg-primary text-primary-foreground hover:bg-[#E5C1FF]"
                      : "bg-white/8 text-white/70 hover:bg-white/15"
                  }`}
                >
                  Book a GTM Assessment &rarr;
                </Link>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tools ───────────────────────────────────────── */}
      <section className="py-16 border-b border-white/5 bg-background">
        <div className="container mx-auto px-6 max-w-[1200px] text-center">
          <p className="text-sm text-muted-foreground mb-7">
            The tools behind the system — we build the workflows that make them generate pipeline.
          </p>
          <div className="flex gap-3 flex-wrap justify-center">
            {["Clay", "Smartlead", "HeyReach", "HubSpot", "Webflow / Lovable"].map((tool) => (
              <span
                key={tool}
                className="text-sm text-white/60 bg-secondary border border-white/5 px-5 py-2.5 rounded-full"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Insights strip ───────────────────────────────── */}
      <section className="py-20 bg-background border-t border-white/5">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="flex justify-between items-center mb-8 flex-wrap gap-3">
            <p className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">From the Insights</p>
            <Link href="/insights" className="link-muted text-sm text-muted-foreground">View all &rarr;</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { category: "GTM Strategy", title: "What Is a GTM Engineer?", href: "/insights/what-is-a-gtm-engineer" },
              { category: "Outbound Systems", title: "Clay vs. Manual Research: The Real ROI", href: "/insights/clay-vs-manual-research" },
              { category: "Account Intelligence", title: "The 4 Buying Signals That Drive Pipeline", href: "/insights/buying-signals-b2b-pipeline" },
            ].map((post) => (
              <Link key={post.href} href={post.href} className="group">
                <div className="bg-secondary border border-white/5 rounded-2xl p-6 flex flex-col gap-3 hover:border-primary/30 transition-all duration-300">
                  <span className="text-[10px] font-semibold text-primary tracking-wider uppercase">{post.category}</span>
                  <p className="text-sm font-medium group-hover:text-white transition-colors">{post.title}</p>
                  <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">Read &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────── */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />

        <div className="container mx-auto px-6 max-w-[1200px] relative z-10 text-center">
          <MotionDiv
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto bg-secondary/80 backdrop-blur-xl p-12 md:p-20 rounded-[3rem] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <h2 className="text-4xl md:text-5xl lg:text-7xl font-sans font-bold text-white mb-6 leading-[1.1]">
              You already know who you want to close. Let&apos;s build the system to{" "}
              <span className="italic font-light text-primary">get you in front of them.</span>
            </h2>

            <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              We&apos;ll start with a GTM assessment to identify exactly where your current outreach is breaking down and what a signal-based system would look like for your specific account list and sales motion.
            </p>

            <Link href="/contact" className="btn-primary inline-block text-lg">
              <span className="relative z-10">Book Your GTM Assessment</span>
            </Link>
          </MotionDiv>
        </div>
      </section>
    </>
  );
}
