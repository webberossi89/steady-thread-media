import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Decorative blurred circles for glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>
      
      {/* Subtle organic background lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0,100 C20,80 50,120 100,0 L100,100 Z" fill="url(#contact-gradient)" />
        <defs>
          <linearGradient id="contact-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F0D6FF" stopOpacity="0" />
            <stop offset="100%" stopColor="#F0D6FF" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>

      <div className="container mx-auto px-6 max-w-[1200px] relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto bg-secondary/80 backdrop-blur-xl p-12 md:p-20 rounded-[3rem] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden group"
        >
          {/* Internal hover glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none animate-float-centered"></div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-[1.1]">
            Need a clearer path to <span className="italic font-light text-primary">qualified growth?</span>
          </h2>
          
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto font-light">
            Let's identify where your GTM strategy is breaking down and what to fix first.
          </p>

          <Link 
            href="/contact"
            className="inline-block relative overflow-hidden group/btn bg-primary text-primary-foreground px-10 py-5 rounded-full text-lg font-medium shadow-[0_0_20px_rgba(240,214,255,0.2)] hover:shadow-[0_0_40px_rgba(240,214,255,0.4)] hover:-translate-y-1 transition-all duration-300"
          >
            <span className="relative z-10">Book a Strategy Call</span>
            <div className="absolute inset-0 bg-[#E5C1FF] transform scale-x-0 origin-left group-hover/btn:scale-x-100 transition-transform duration-500 ease-out z-0"></div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
