import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-black text-white relative overflow-hidden">
      {/* Brand Accent Blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="text-xs font-bold text-primary uppercase tracking-[0.3em] mb-6 block">Ready to Grow?</span>
              <h2 className="text-5xl md:text-7xl font-display font-extrabold tracking-tighter mb-8 leading-[0.9]">
                Let's Make It <br />
                <span className="text-primary italic">Happen.</span>
              </h2>
              <p className="text-xl text-white/60 font-medium mb-12">
                Join the home service business owners who have transformed their revenue with our data-driven strategies.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 text-xl font-bold">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Mail size={20} className="text-primary" />
                  </div>
                  hello@thomastowndigital.com
                </div>
                <div className="flex items-center gap-4 text-xl font-bold">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Phone size={20} className="text-secondary" />
                  </div>
                  Book a Strategy Call
                </div>
              </div>
            </div>

            <div className="bg-white/5 p-10 rounded-3xl backdrop-blur-sm border border-white/10">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40">Full Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40">Email</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40">Industry</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors">
                    <option className="bg-black">Roofing</option>
                    <option className="bg-black">HVAC</option>
                    <option className="bg-black">Restoration</option>
                    <option className="bg-black">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40">Message</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors" placeholder="Tell us about your business goals..."></textarea>
                </div>
                <button className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-black transition-all duration-300">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
