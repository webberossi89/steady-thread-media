import { Link } from "wouter";

export default function Contact() {
  return (
    <section className="py-24 bg-background border-t border-white/5 relative overflow-hidden">
      {/* Decorative blurred circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-[1200px] relative z-10 text-center">
        <div className="max-w-3xl mx-auto bg-secondary p-12 md:p-16 rounded-3xl border border-white/5">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Need a clearer path to qualified growth?
          </h2>
          
          <p className="text-xl text-muted-foreground mb-10">
            Let's identify where your GTM strategy is breaking down and what to fix first.
          </p>

          <Link 
            href="/contact"
            className="inline-block bg-primary text-primary-foreground px-10 py-5 rounded-full text-lg font-bold hover:bg-[#E5C1FF] hover:scale-105 transition-all duration-300"
          >
            Book a Strategy Call
          </Link>
        </div>
      </div>
    </section>
  );
}
