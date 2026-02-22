import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 md:py-48 bg-background relative overflow-hidden">
      {/* Decorative blurred circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-8xl lg:text-9xl font-display font-medium tracking-tighter mb-8 leading-[0.9]">
              Let's Create <br />
              <span className="italic font-light text-white/50 text-stroke">Together.</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/60 font-light max-w-2xl mx-auto mb-16">
              Ready to redefine your digital presence? We're currently accepting new projects for 2026.
            </p>

            <a 
              href="mailto:hello@ocular.studio"
              className="inline-flex items-center gap-4 bg-white text-black px-10 py-5 rounded-full text-lg font-medium hover:scale-105 transition-transform duration-300 group"
            >
              hello@ocular.studio
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
