import { motion } from "framer-motion";
import { CheckCircle2, Shield, TrendingUp } from "lucide-react";

export default function About() {
  const values = [
    {
      title: "Clients Come First",
      description: "We build everything around what works for you. Your goals. Your wins. Your growth.",
      icon: <Shield className="text-primary" size={32} />,
    },
    {
      title: "Straight Talk Only",
      description: "No buzzwords. No hiding behind reports. Just clear updates and honest advice you can use.",
      icon: <CheckCircle2 className="text-secondary" size={32} />,
    },
    {
      title: "Results That Matter",
      description: "More leads. More calls. More booked jobs. That's what we focus on — real growth.",
      icon: <TrendingUp className="text-accent" size={32} />,
    },
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-xs font-bold text-primary uppercase tracking-[0.3em] mb-4 block">Our Mission</span>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-8 leading-[1.1]">
              Your Growth.<br />Our Mission.
            </h2>
            <div className="space-y-6 text-lg text-black/70 font-medium leading-relaxed">
              <p>
                Thomas Town Digital was built for one reason — to help local service businesses win. We're not just another agency; we're your growth partner, focused on real results, not vanity metrics.
              </p>
              <p>
                From high-converting PPC campaigns and local SEO to websites that turn visitors into leads, we create smart, data-driven strategies that put your business ahead of the competition.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {values.map((value, i) => (
              <motion.div 
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-black/5 hover:shadow-md transition-shadow"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-black/60">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
