import { motion } from "framer-motion";
import studioImg from "@/assets/images/about-studio.png";

export default function About() {
  const stats = [
    { value: "40+", label: "Global Awards" },
    { value: "12", label: "Years Experience" },
    { value: "250+", label: "Projects Delivered" },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-background relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          <div className="lg:col-span-5 lg:col-start-1 order-2 lg:order-1">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl"
            >
              <img 
                src={studioImg} 
                alt="Our Creative Studio" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 mix-blend-overlay"></div>
            </motion.div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 order-1 lg:order-2 flex flex-col justify-center">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="uppercase tracking-[0.2em] text-xs font-medium text-white/50 mb-6 block"
            >
              The Studio
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display leading-[1.1] mb-8 text-white"
            >
              We are a collective of <span className="italic font-light text-white/50">thinkers, designers,</span> and engineers.
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-white/60 mb-12 font-light leading-relaxed max-w-xl"
            >
              Based in London with a global mindset. We partner with ambitious leaders to build brands, digital products, and cinematic experiences that define tomorrow. We believe in design that moves people.
            </motion.p>

            <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
              {stats.map((stat, i) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                >
                  <div className="text-3xl md:text-4xl font-display mb-2 text-white">{stat.value}</div>
                  <div className="text-sm text-white/40">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
