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
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-foreground mb-6">
            Built for B2B teams that need traction
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((audience, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-background border border-border p-8 rounded-xl flex items-center"
            >
              <div className="w-2 h-2 rounded-full bg-primary mr-4 flex-shrink-0"></div>
              <p className="font-medium text-foreground">{audience}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
