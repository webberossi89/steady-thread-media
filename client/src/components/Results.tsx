import { motion } from "framer-motion";

export default function Results() {
  return (
    <section className="py-24 bg-secondary border-t border-white/5">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-foreground mb-6">
            Strategic GTM. Measurable progress.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-background border border-border p-10 rounded-2xl text-center"
          >
            <div className="text-4xl font-display font-bold text-primary mb-4">Pipeline</div>
            <p className="text-lg text-foreground/80 font-medium">Improved qualified pipeline</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-background border border-border p-10 rounded-2xl text-center"
          >
            <div className="text-4xl font-display font-bold text-primary mb-4">Clarity</div>
            <p className="text-lg text-foreground/80 font-medium">Sharper positioning</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-background border border-border p-10 rounded-2xl text-center"
          >
            <div className="text-4xl font-display font-bold text-primary mb-4">Efficiency</div>
            <p className="text-lg text-foreground/80 font-medium">Better conversion efficiency</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
