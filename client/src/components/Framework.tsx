import { motion } from "framer-motion";

export default function Framework() {
  const steps = [
    {
      number: "01",
      title: "Account Intelligence Audit",
      description: "We map your target account list against available signal data to identify which accounts are showing intent, which triggers indicate readiness, and where your current outreach is breaking down."
    },
    {
      number: "02",
      title: "System Architecture",
      description: "We design your outbound and ABM infrastructure — account tiers, signal tracking, messaging frameworks, and channel sequencing built around how your buyers actually behave."
    },
    {
      number: "03",
      title: "Build and Launch",
      description: "We implement the full system: Clay enrichment workflows, email and LinkedIn sequences, ABM campaign structure, CRM configuration, and tracking. You get a system, not a strategy doc."
    },
    {
      number: "04",
      title: "Optimize and Scale",
      description: "We run weekly reviews against pipeline data, refine scoring and messaging based on what's converting, and expand what's working. The system compounds over time."
    }
  ];

  return (
    <section className="py-32 bg-background relative overflow-hidden border-t border-white/5">
      {/* Abstract curved background line */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" viewBox="0 0 1440 600" preserveAspectRatio="none">
        <motion.path 
          d="M 0,300 C 300,100 600,500 1000,300 C 1200,200 1440,300 1440,300" 
          stroke="url(#framework-gradient)" 
          strokeWidth="1.5" 
          strokeDasharray="4 8"
          fill="none" 
          initial={{ strokeDashoffset: 100 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        />
        <defs>
          <linearGradient id="framework-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1A1A1A" />
            <stop offset="50%" stopColor="#F0D6FF" />
            <stop offset="100%" stopColor="#1A1A1A" />
          </linearGradient>
        </defs>
      </svg>

      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            How it works
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Desktop connecting thread */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0">
             <motion.div 
               className="h-full bg-primary/80"
               initial={{ scaleX: 0, transformOrigin: "left" }}
               whileInView={{ scaleX: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
             />
          </div>
          
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 group"
            >
              <div className="bg-secondary/50 backdrop-blur-sm border border-white/5 p-8 rounded-[2rem] h-full hover:bg-secondary hover:border-primary/20 transition-all duration-500 hover:-translate-y-2">
                <div className="w-14 h-14 rounded-full bg-background border border-white/10 text-primary flex items-center justify-center font-display font-bold text-xl mb-8 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_0_20px_rgba(240,214,255,0.4)] transition-all duration-500">
                  {step.number}
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-primary transition-colors">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
