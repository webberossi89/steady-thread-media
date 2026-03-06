import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full flex items-center pt-32 pb-24 overflow-hidden bg-background">
      {/* Background shapes */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="container mx-auto px-6 max-w-[1200px] relative z-20 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight mb-6">
                Strategic GTM systems for <span className="text-primary">consistent</span> B2B growth
              </h1>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            >
              <p className="text-xl md:text-2xl text-white/70 max-w-2xl font-light leading-relaxed mb-10">
                We help B2B companies build clearer positioning, stronger demand generation, and more effective go-to-market systems that create qualified opportunities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:bg-[#E5C1FF] transition-colors duration-300 text-center"
                >
                  Book a Strategy Call
                </Link>
                <Link 
                  href="/approach"
                  className="bg-transparent text-white border border-white/20 px-8 py-4 rounded-full font-medium hover:bg-white/5 transition-colors duration-300 text-center flex items-center justify-center gap-2 group"
                >
                  See Our Approach
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              
              <p className="mt-8 text-sm text-white/40 uppercase tracking-widest font-medium">
                Trusted by B2B teams that need more clarity, better pipeline, and stronger execution.
              </p>
            </motion.div>
          </div>
          
          <div className="lg:col-span-5 hidden lg:block">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-square w-full max-w-md mx-auto"
            >
              {/* Abstract visual / framework graphic placeholder */}
              <div className="absolute inset-0 bg-secondary/5 border border-white/10 rounded-2xl flex items-center justify-center overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-[40px]"></div>
                <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-white/5 rounded-full blur-[40px]"></div>
                
                <div className="grid grid-cols-2 gap-4 p-8 w-full h-full relative z-10">
                  <div className="bg-white/5 rounded-xl border border-white/10 p-4 flex flex-col justify-end">
                    <div className="w-8 h-1 bg-primary/80 mb-2 rounded-full"></div>
                    <div className="text-xs text-white/50">Positioning</div>
                  </div>
                  <div className="bg-white/5 rounded-xl border border-white/10 p-4 flex flex-col justify-end translate-y-8">
                    <div className="w-12 h-1 bg-white/80 mb-2 rounded-full"></div>
                    <div className="text-xs text-white/50">Demand</div>
                  </div>
                  <div className="bg-white/5 rounded-xl border border-white/10 p-4 flex flex-col justify-end -translate-y-8">
                    <div className="w-10 h-1 bg-white/80 mb-2 rounded-full"></div>
                    <div className="text-xs text-white/50">Pipeline</div>
                  </div>
                  <div className="bg-primary/10 rounded-xl border border-primary/20 p-4 flex flex-col justify-end">
                    <div className="w-16 h-1 bg-primary mb-2 rounded-full"></div>
                    <div className="text-xs text-white/80 font-medium">Growth</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
