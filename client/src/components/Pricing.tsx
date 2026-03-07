import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "GTM Sprint",
      desc: "90-day engagement to build your outbound system from the ground up. Account targeting, signal infrastructure, messaging, and sequences. Priced on scope.",
      bestFor: "Teams with zero outbound motion who need a system built fast."
    },
    {
      name: "Ongoing GTM Partner",
      desc: "Monthly retainer for teams that need continued execution, optimization, and pipeline support. ABM campaigns, outbound management, CRM operations, and weekly reporting.",
      bestFor: "Teams with an existing motion that needs to be systematized and scaled.",
      popular: true
    },
    {
      name: "ABM Program",
      desc: "Dedicated account-based marketing for teams targeting a defined list of high-value accounts. Full buying committee strategy, multi-channel execution, and account progression tracking.",
      bestFor: "Teams with a named account list and enterprise deal sizes that need a true ABM program, not better cold outreach."
    }
  ];

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            How we engage
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className={`bg-secondary p-10 rounded-[2rem] border flex flex-col hover:-translate-y-2 transition-all duration-500 ${plan.popular ? 'border-primary shadow-[0_0_30px_rgba(240,214,255,0.1)]' : 'border-white/5 hover:border-primary/30'}`}
            >
              {plan.popular && (
                <div className="mb-6">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider">Most Common</span>
                </div>
              )}
              <h3 className="text-3xl font-display font-bold text-white mb-6">{plan.name}</h3>
              <p className="text-muted-foreground leading-relaxed mb-8 flex-grow text-sm md:text-base">
                {plan.desc}
              </p>
              
              <div className="bg-background rounded-xl p-5 border border-white/5 mb-8">
                <h4 className="text-xs uppercase tracking-[0.15em] text-white/40 font-semibold mb-2">Best For</h4>
                <p className="text-white/80 text-sm leading-relaxed">{plan.bestFor}</p>
              </div>

              <Link href="/contact" className={`w-full py-4 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 group ${plan.popular ? 'bg-primary text-primary-foreground hover:bg-[#E5C1FF]' : 'bg-background border border-border text-white hover:border-primary hover:text-primary'}`}>
                Book a GTM Assessment <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
