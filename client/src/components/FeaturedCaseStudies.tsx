import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FeaturedCaseStudies() {
  const caseStudies = [
    {
      clientType: "[Client name], [Industry]",
      challenge: "Could not reach target accounts despite having a clear ICP and target list.",
      changed: "Built signal-based account targeting layer, deployed Clay enrichment workflows, launched coordinated email and LinkedIn sequences tied to buying trigger events.",
      outcome: "X meetings booked in 90 days. $Xm in pipeline from target account list."
    },
    {
      clientType: "[Client name], [Industry]",
      challenge: "High traffic, low qualified conversion",
      changed: "Repositioned core offering and restructured demo funnel",
      outcome: "2x increase in sales-qualified opportunities"
    }
  ];

  return (
    <section className="py-32 bg-secondary relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Selected work
            </h2>
          </motion.div>
          <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link href="/case-studies" className="px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-colors duration-300 font-medium whitespace-nowrap flex items-center gap-2 group">
              View Case Studies <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-background p-10 md:p-12 rounded-[2rem] border border-white/5 flex flex-col hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(240,214,255,0.05)]"
            >
              <div className="mb-10 flex justify-between items-center">
                <span className="inline-block px-4 py-1.5 rounded-full bg-secondary border border-border text-sm font-medium text-white group-hover:border-primary/40 group-hover:text-primary transition-colors duration-500">
                  {study.clientType}
                </span>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-primary group-hover:text-primary-foreground transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                  <ArrowRight size={16} className="-rotate-45" />
                </div>
              </div>
              
              <div className="space-y-8 flex-grow">
                <div>
                  <h4 className="text-xs uppercase tracking-[0.15em] text-white/40 font-semibold mb-3">Challenge</h4>
                  <p className="text-white text-xl md:text-2xl font-display">{study.challenge}</p>
                </div>
                <div className="w-full h-px bg-white/5 group-hover:bg-primary/10 transition-colors duration-500"></div>
                <div>
                  <h4 className="text-xs uppercase tracking-[0.15em] text-white/40 font-semibold mb-3">What we changed</h4>
                  <p className="text-white/70 leading-relaxed text-sm">{study.changed}</p>
                </div>
                <div className="bg-secondary rounded-xl p-5 border border-white/5 group-hover:border-primary/20 transition-colors duration-500">
                  <h4 className="text-xs uppercase tracking-[0.15em] text-white/40 font-semibold mb-2">Outcome</h4>
                  <p className="text-primary font-medium text-lg">{study.outcome}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
