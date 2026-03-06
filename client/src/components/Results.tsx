import { motion } from "framer-motion";

export default function Results() {
  return (
    <section className="py-32 bg-secondary border-t border-white/5 relative">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>
      
      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
            Strategic GTM. <br/>
            <span className="italic font-light text-primary/90">Measurable</span> progress.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: "Improved qualified pipeline", metric: "Pipeline" },
            { label: "Sharper positioning", metric: "Clarity" },
            { label: "Better conversion efficiency", metric: "Efficiency" }
          ].map((item, i) => (
             <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="bg-background border border-border p-10 rounded-[2rem] text-center relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-4xl md:text-5xl font-display font-bold text-white mb-4 group-hover:text-primary transition-colors duration-500">{item.metric}</div>
                <div className="w-12 h-1 bg-primary/20 mx-auto mb-6 rounded-full group-hover:w-24 group-hover:bg-primary/60 transition-all duration-500"></div>
                <p className="text-lg text-foreground/80 font-medium">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
