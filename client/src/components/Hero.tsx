import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] w-full flex items-center pt-32 pb-32 overflow-hidden bg-background">
      {/* Background soft lighting and shapes */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3 animate-float"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/4 animate-float-delayed"></div>
      
      {/* Subtle Thread Graphic in Background */}
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <motion.path 
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
            <stop offset="0%" stopColor="#F0D6FF" stopOpacity="0" />
            <stop offset="50%" stopColor="#F0D6FF" stopOpacity="1" />
            <stop offset="100%" stopColor="#F0D6FF" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <div className="container mx-auto px-6 max-w-[1200px] relative z-20 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.05] tracking-tight mb-8">
                Strategic GTM systems for <span className="text-primary relative inline-block">
                  consistent
                  <motion.div 
                    className="absolute -bottom-2 left-0 w-full h-[3px] bg-primary/40 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                  />
                </span> B2B growth
              </h1>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-lg md:text-xl text-white/70 max-w-2xl font-light leading-relaxed mb-10">
                We build signal-based outbound and account-based marketing systems for B2B revenue teams that have a clear ICP but no consistent way to reach the right people and convert them into pipeline.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5">
                <Link 
                  href="/contact"
                  className="relative overflow-hidden group bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium transition-all duration-300 text-center shadow-[0_0_20px_rgba(240,214,255,0.15)] hover:shadow-[0_0_30px_rgba(240,214,255,0.3)] hover:-translate-y-1"
                >
                  <span className="relative z-10">Book a GTM Assessment</span>
                  <div className="absolute inset-0 bg-[#E5C1FF] transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"></div>
                </Link>
                <Link 
                  href="/approach"
                  className="bg-transparent text-white border border-white/20 px-8 py-4 rounded-full font-medium hover:bg-white/5 transition-all duration-300 text-center flex items-center justify-center gap-2 group hover:-translate-y-1"
                >
                  See How It Works
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-5 hidden lg:block">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-md mx-auto aspect-square"
            >
              {/* Abstract Visual Dashboard */}
              <div className="absolute inset-0 bg-background/40 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 shadow-2xl flex flex-col justify-between overflow-hidden group hover:border-primary/30 transition-colors duration-700">
                <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/20 rounded-full blur-[50px] group-hover:bg-primary/30 transition-colors duration-700"></div>
                
                <div className="relative z-10 flex flex-col gap-6">
                  {/* Flow items */}
                  {[
                    { label: "Identify Accounts", width: "w-1/3", delay: 0.5 },
                    { label: "Capture Buying Signals", width: "w-2/3", delay: 0.7 },
                    { label: "Targeted Outreach", width: "w-5/6", delay: 0.9 }
                  ].map((item, i) => (
                    <motion.div 
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: item.delay, ease: "easeOut" }}
                      className="bg-white/5 rounded-2xl border border-white/5 p-4 transform hover:scale-[1.02] transition-transform"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-sm font-medium text-white/70">{item.label}</div>
                        <div className={`w-2 h-2 rounded-full ${i === 2 ? 'bg-primary' : 'bg-white/30'}`}></div>
                      </div>
                      <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 1.5, delay: item.delay + 0.2, ease: "easeInOut" }}
                          className={`h-full ${i === 2 ? 'bg-primary' : 'bg-white/50'} rounded-full origin-left ${item.width}`}
                        ></motion.div>
                      </div>
                    </motion.div>
                  ))}

                  <motion.div 
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
                        <ArrowRight size={14} className="text-primary" />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Curved Divider at the bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 transform translate-y-px">
        <svg className="relative block w-full h-[50px] md:h-[80px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C300,120 900,120 1200,0 L1200,120 L0,120 Z" className="fill-secondary"></path>
        </svg>
      </div>
    </section>
  );
}
