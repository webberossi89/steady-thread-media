import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FeaturedCaseStudies() {
  const caseStudies = [
    {
      clientType: "B2B SaaS",
      challenge: "High traffic, low qualified conversion",
      changed: "Repositioned core offering and restructured demo funnel",
      outcome: "2x increase in sales-qualified opportunities"
    },
    {
      clientType: "Technical Services",
      challenge: "Unclear messaging causing long sales cycles",
      changed: "Simplified value proposition and enabled sales with better collateral",
      outcome: "30% reduction in average time-to-close"
    }
  ];

  return (
    <section className="py-24 bg-background border-t border-white/5">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Selected work
            </h2>
          </div>
          <Link href="/case-studies" className="px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-colors duration-300 font-medium whitespace-nowrap flex items-center gap-2 group">
            View Case Studies <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-secondary p-10 rounded-2xl border border-white/5 flex flex-col"
            >
              <div className="mb-8">
                <span className="inline-block px-4 py-1.5 rounded-full border border-secondary-foreground/20 text-sm font-medium text-secondary-foreground">{study.clientType}</span>
              </div>
              
              <div className="space-y-6 flex-grow">
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-secondary-foreground/50 font-semibold mb-2">Challenge</h4>
                  <p className="text-secondary-foreground text-lg">{study.challenge}</p>
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-secondary-foreground/50 font-semibold mb-2">What we changed</h4>
                  <p className="text-secondary-foreground/80">{study.changed}</p>
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-secondary-foreground/50 font-semibold mb-2">Outcome</h4>
                  <p className="text-primary-foreground font-medium">{study.outcome}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
