import { motion } from "framer-motion";
import { Link } from "wouter";

export default function Work() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-[1200px]">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              How we help
            </h2>
          </div>
          
          <Link href="/services" className="px-6 py-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition-colors duration-300 font-medium whitespace-nowrap">
            Explore Services
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-secondary p-10 rounded-xl flex flex-col h-full border border-white/5">
            <h3 className="text-2xl font-display font-bold text-white mb-4">GTM Strategy</h3>
            <p className="text-muted-foreground mb-8 flex-grow">
              Positioning, ICP clarity, messaging, channel strategy
            </p>
            <Link href="/services" className="text-primary hover:text-[#E5C1FF] font-medium inline-flex items-center gap-2 transition-colors">
              Learn more <span className="text-xl leading-none">→</span>
            </Link>
          </div>
          
          <div className="bg-secondary p-10 rounded-xl flex flex-col h-full border border-white/5">
            <h3 className="text-2xl font-display font-bold text-white mb-4">Demand Generation</h3>
            <p className="text-muted-foreground mb-8 flex-grow">
              Campaign architecture, funnel planning, lead flow improvement
            </p>
            <Link href="/services" className="text-primary hover:text-[#E5C1FF] font-medium inline-flex items-center gap-2 transition-colors">
              Learn more <span className="text-xl leading-none">→</span>
            </Link>
          </div>
          
          <div className="bg-secondary p-10 rounded-xl flex flex-col h-full border border-white/5">
            <h3 className="text-2xl font-display font-bold text-white mb-4">Revenue Optimization</h3>
            <p className="text-muted-foreground mb-8 flex-grow">
              Sales-marketing alignment, conversion improvements, handoff process
            </p>
            <Link href="/services" className="text-primary hover:text-[#E5C1FF] font-medium inline-flex items-center gap-2 transition-colors">
              Learn more <span className="text-xl leading-none">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
