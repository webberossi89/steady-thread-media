import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-24 bg-secondary relative">
      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        <div className="max-w-3xl mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight"
          >
            Growth stalls when GTM lacks <span className="italic font-light text-primary/80">structure</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl text-muted-foreground leading-relaxed"
          >
            Most growth issues are not caused by a lack of effort. They come from unclear messaging, weak process, and acquisition systems that do not work together.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Unclear positioning",
              desc: "Your message isn't resonating with the right buyers, making acquisition harder than it needs to be."
            },
            {
              title: "Inconsistent pipeline",
              desc: "Lead flow is unpredictable, relying too heavily on one channel or irregular marketing spikes."
            },
            {
              title: "Disconnected sales & marketing",
              desc: "Marketing generates leads, but sales can't close them due to poor qualification or handoff friction."
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-background border border-border p-10 rounded-[2rem] hover:border-primary/30 transition-all duration-500 hover:shadow-[0_10px_40px_-15px_rgba(240,214,255,0.1)] hover:-translate-y-2 overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 text-primary/10">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v12M6 12h12" />
                </svg>
              </div>
              
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-8 font-display font-bold text-xl group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500">
                {i + 1}
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed relative z-10">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
