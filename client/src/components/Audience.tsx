import { motion } from "framer-motion";

export default function Audience() {
  const audiences = [
    "SaaS companies",
    "Technical founders",
    "Early-stage revenue teams",
    "Service businesses with complex sales cycles",
    "Companies refining positioning",
    "Teams trying to improve lead quality"
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative blurred thread in background */}
      <div className="absolute -top-[20%] -right-[10%] w-[60vw] h-[60vh] bg-primary/5 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>

      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/3">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl font-display font-bold text-white leading-tight"
            >
              Built for B2B teams that need <span className="text-primary italic font-light">traction</span>
            </motion.h2>
          </div>

          <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {audiences.map((audience, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="group bg-secondary border border-white/5 p-6 rounded-2xl flex items-center hover:border-primary/30 hover:bg-white/[0.02] transition-all duration-300"
              >
                <div className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary group-hover:shadow-[0_0_8px_rgba(240,214,255,0.8)] mr-4 flex-shrink-0 transition-all duration-300 group-hover:scale-150"></div>
                <p className="font-medium text-foreground/90 group-hover:text-white transition-colors">{audience}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
