import { motion } from "framer-motion";

export default function Audience() {
  const audiences = [
    "B2B SaaS companies with ACV above $15K",
    "Revenue teams moving off referral-dependent growth",
    "Founders and marketing leaders who need outbound that actually works",
    "Companies running outreach but seeing low reply and conversion rates",
    "Teams that want ABM but don't have the infrastructure to execute it"
  ];

  return (
    <section className="py-32 bg-secondary relative overflow-hidden">
      {/* Decorative blurred thread in background */}
      <div className="absolute -top-[20%] -right-[10%] w-[60vw] h-[60vh] bg-primary/5 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>

      {/* Top curved divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 transform -translate-y-px rotate-180">
        <svg className="relative block w-full h-[50px] md:h-[80px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C300,120 900,120 1200,0 L1200,120 L0,120 Z" className="fill-background"></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 max-w-[1200px] relative z-10 pt-10">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/3">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl font-display font-bold text-white leading-tight"
            >
              Built for B2B teams that know their ICP but can't convert it into <span className="text-primary italic font-light">pipeline</span>
            </motion.h2>
          </div>

          <div className="w-full md:w-2/3 flex flex-col gap-4">
            {audiences.map((audience, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="group bg-background border border-white/5 p-6 rounded-2xl flex items-center hover:border-primary/30 hover:bg-white/[0.02] transition-all duration-300"
              >
                <div className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary group-hover:shadow-[0_0_8px_rgba(240,214,255,0.8)] mr-6 flex-shrink-0 transition-all duration-300 group-hover:scale-150"></div>
                <p className="font-medium text-foreground/90 group-hover:text-white transition-colors text-lg">{audience}</p>
              </motion.div>
            ))}
          </div>
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
