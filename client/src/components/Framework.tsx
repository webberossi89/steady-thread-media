import { motion } from "framer-motion";

export default function Framework() {
  const steps = [
    {
      number: "01",
      title: "Diagnose",
      description: "Audit current funnel, messaging, and GTM gaps"
    },
    {
      number: "02",
      title: "Clarify",
      description: "Refine offer, audience, and market position"
    },
    {
      number: "03",
      title: "Build",
      description: "Create channel and conversion systems"
    },
    {
      number: "04",
      title: "Optimize",
      description: "Improve performance with data and feedback loops"
    }
  ];

  return (
    <section className="py-24 bg-background border-t border-white/5">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            The Steady Thread framework
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-white/10 -translate-y-1/2 z-0"></div>
          
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative z-10 bg-secondary border border-white/5 p-8 rounded-2xl h-full"
            >
              <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center font-display font-bold text-xl mb-6">
                {step.number}
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
