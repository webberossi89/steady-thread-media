import { motion } from "framer-motion";

export default function TechStack() {
  return (
    <section className="py-32 bg-secondary relative overflow-hidden">
      {/* Top curved divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 transform -translate-y-px rotate-180">
        <svg className="relative block w-full h-[50px] md:h-[80px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C300,120 900,120 1200,0 L1200,120 L0,120 Z" className="fill-background"></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 max-w-[1200px] relative z-10 pt-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            The tools behind the system
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We don't resell software. We build the workflows that make these tools actually generate pipeline.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "Clay", desc: "Account enrichment, signal aggregation, and AI-powered research at scale" },
            { name: "Smartlead", desc: "Email sequencing built around trigger-based timing, not batch sends" },
            { name: "HeyReach", desc: "LinkedIn outreach coordinated with email for true multi-channel coverage" },
            { name: "HubSpot", desc: "CRM infrastructure with lead scoring, routing, and pipeline visibility" },
            { name: "Webflow / Lovable", desc: "Landing pages and ABM assets built for account-specific personalization" }
          ].map((tool, i) => (
             <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="bg-background border border-border p-8 rounded-[2rem] flex flex-col hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-[0_15px_30px_-10px_rgba(240,214,255,0.05)]"
            >
              <h3 className="text-2xl font-display font-bold text-white mb-3">{tool.name}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{tool.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Curved Divider at the bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 transform translate-y-px">
        <svg className="relative block w-full h-[50px] md:h-[80px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C300,120 900,120 1200,0 L1200,120 L0,120 Z" className="fill-background"></path>
        </svg>
      </div>
    </section>
  );
}
