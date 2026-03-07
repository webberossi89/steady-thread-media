import { motion } from "framer-motion";

export default function Results() {
  return (
    <section className="py-24 bg-secondary border-b border-white/5 relative">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>
      
      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Pipeline generated for clients", metric: "$5M+" },
            { label: "B2B companies served", metric: "50+" },
            { label: "Serving teams across North America", metric: "Charlotte, NC" },
            { label: "Clay | HubSpot | LinkedIn", metric: "Certified" }
          ].map((item, i) => (
             <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="bg-background border border-border p-8 rounded-2xl text-center relative overflow-hidden group h-full flex flex-col justify-center"
            >
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-3xl md:text-4xl font-display font-bold text-white mb-3 group-hover:text-primary transition-colors duration-500">{item.metric}</div>
                <div className="w-8 h-1 bg-primary/20 mx-auto mb-4 rounded-full group-hover:w-16 group-hover:bg-primary/60 transition-all duration-500"></div>
                <p className="text-sm text-foreground/80 font-medium">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
