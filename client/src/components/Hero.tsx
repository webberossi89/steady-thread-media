import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-white">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-muted/30 -skew-x-12 translate-x-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              For Home Service Businesses
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-extrabold leading-[1.05] tracking-tighter mb-8 text-black">
              More Leads.<br />
              More Jobs.<br />
              <span className="text-primary italic">More Revenue.</span>
            </h1>
            
            <p className="text-xl text-black/60 mb-10 leading-relaxed max-w-lg">
              We help home service business owners build a steady pipeline of high-quality enquiries — so you’re never chasing leads, you’re choosing the best ones.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact"
                className="inline-flex items-center justify-center gap-3 bg-primary text-white px-8 py-5 rounded-full text-lg font-bold hover:bg-black hover:scale-105 transition-all duration-300 shadow-xl shadow-primary/20 group"
              >
                Get Started
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              
              <button className="inline-flex items-center justify-center gap-3 bg-white border-2 border-black/5 px-8 py-5 rounded-full text-lg font-bold hover:border-primary/50 transition-all duration-300 group">
                <span className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Play size={16} className="fill-black group-hover:fill-primary text-transparent" />
                </span>
                Watch Demo
              </button>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-muted flex items-center justify-center text-[10px] font-bold">
                    User
                  </div>
                ))}
              </div>
              <p className="text-sm font-medium text-black/40 italic">
                Trusted by 50+ Home Service Pros
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl brand-gradient p-1">
              <div className="w-full h-full bg-white rounded-[calc(1.5rem-2px)] flex items-center justify-center p-12">
                <div className="text-center">
                  <div className="text-8xl font-display font-extrabold tracking-tighter text-black mb-2 leading-none">TT</div>
                  <div className="text-sm font-bold tracking-[0.3em] text-primary uppercase">Digital Lead Gen</div>
                </div>
              </div>
            </div>
            {/* Stats Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-black/5">
              <div className="text-4xl font-display font-extrabold text-primary leading-none mb-1">2X</div>
              <div className="text-xs font-bold text-black/40 uppercase tracking-widest leading-none">Industry Conversion Rate</div>
            </div>
            {/* Launch Badge */}
            <div className="absolute -top-6 -right-6 bg-accent p-6 rounded-2xl shadow-xl transform rotate-3">
              <div className="text-xl font-display font-extrabold text-black leading-none mb-1">21 DAYS</div>
              <div className="text-xs font-bold text-black/60 uppercase tracking-widest leading-none text-center">Time To Launch</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
