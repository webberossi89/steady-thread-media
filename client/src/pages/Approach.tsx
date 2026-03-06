import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function Approach() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
      <Nav />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
            A structured approach to B2B growth
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mb-16">
            We focus on the parts of GTM that drive clarity, consistency, and conversion.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
            <div className="bg-secondary p-8 rounded-xl">
              <h3 className="text-2xl font-display font-bold text-secondary-foreground mb-4">1. Diagnose</h3>
              <p className="text-secondary-foreground/80">We assess your current positioning, channel mix, funnel flow, and operational gaps.</p>
            </div>
            <div className="bg-secondary p-8 rounded-xl">
              <h3 className="text-2xl font-display font-bold text-secondary-foreground mb-4">2. Clarify</h3>
              <p className="text-secondary-foreground/80">We define the audience, message, and strategic priorities that should guide execution.</p>
            </div>
            <div className="bg-secondary p-8 rounded-xl">
              <h3 className="text-2xl font-display font-bold text-secondary-foreground mb-4">3. Build</h3>
              <p className="text-secondary-foreground/80">We create the systems, assets, and workflows needed to support demand and revenue growth.</p>
            </div>
            <div className="bg-secondary p-8 rounded-xl">
              <h3 className="text-2xl font-display font-bold text-secondary-foreground mb-4">4. Optimize</h3>
              <p className="text-secondary-foreground/80">We monitor performance, identify friction, and refine what is not working.</p>
            </div>
          </div>

          <div className="text-center max-w-2xl mx-auto">
            <p className="text-2xl font-display italic text-white/80">
              "The objective is not more activity. It is a more effective system."
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
