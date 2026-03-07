import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Work() {
  return (
    <section className="py-32 bg-background relative">
      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              How we get you in front of the right accounts
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Link href="/services" className="px-6 py-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition-colors duration-300 font-medium whitespace-nowrap flex items-center gap-2 group">
              Explore Services <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              number: "01",
              title: "Signal-Based Account Targeting",
              desc: "We identify which of your target accounts are showing buying signals right now — using behavioral data, trigger events, and intent indicators to prioritize outreach around accounts that are actually ready."
            },
            {
              number: "02",
              title: "AI-Powered Outbound Systems",
              desc: "We build outbound infrastructure using Clay, Smartlead, and HeyReach that researches, personalizes, and sequences outreach at scale without sacrificing relevance. Not spray and pray. Targeted, triggered, and systematic."
            },
            {
              number: "03",
              title: "Account-Based Marketing",
              desc: "We run tiered ABM programs that build awareness and relationship with your target accounts before the pitch. Multi-channel, buying committee aware, and designed to create inbound pull from the accounts you've been trying to reach outbound."
            },
            {
              number: "04",
              title: "CRM and Revenue Operations",
              desc: "We connect your outbound motion to HubSpot with proper lead scoring, handoff workflows, and pipeline reporting so nothing falls through the cracks and sales knows exactly who to prioritize."
            }
          ].map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-secondary p-10 md:p-12 rounded-[2rem] flex flex-col h-full border border-white/5 relative overflow-hidden hover:border-primary/40 hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(240,214,255,0.1)]"
            >
              {/* Subtle gradient hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="text-primary font-display font-bold text-xl mb-6">{service.number}</div>
              <h3 className="text-2xl font-display font-bold text-white mb-4 relative z-10">{service.title}</h3>
              <p className="text-muted-foreground mb-10 flex-grow relative z-10 leading-relaxed text-sm md:text-base">
                {service.desc}
              </p>
              
              <Link href="/services" className="text-primary/70 group-hover:text-primary font-medium inline-flex items-center gap-3 transition-colors relative z-10 w-fit">
                Learn more 
                <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <ArrowRight size={14} className="group-hover:-rotate-45 transition-transform duration-300" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
