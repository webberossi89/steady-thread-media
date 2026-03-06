import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
      <Nav />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
            GTM work built around real business outcomes
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mb-16">
            See how strategic clarity, stronger execution, and better process can improve growth performance.
          </p>

          <div className="space-y-12">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-secondary rounded-xl p-8 md:p-12">
                <div className="mb-8">
                  <span className="inline-block px-4 py-1.5 rounded-full border border-secondary-foreground/20 text-sm font-medium text-secondary-foreground mb-4">SaaS Platform</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h4 className="font-bold text-secondary-foreground mb-2">Challenge</h4>
                    <p className="text-secondary-foreground/80">The company had demand activity but weak conversion quality.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary-foreground mb-2">Approach</h4>
                    <p className="text-secondary-foreground/80">We refined positioning, improved funnel structure, and aligned campaign strategy to revenue goals.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary-foreground mb-2">Outcome</h4>
                    <p className="text-secondary-foreground/80">The result was a stronger path to qualified opportunities and a more focused GTM model.</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
