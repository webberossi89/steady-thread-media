import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
      <Nav />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 text-center">
              Need a clearer path to qualified growth?
            </h1>
            <p className="text-xl text-muted-foreground mb-16 text-center">
              Let's identify where your GTM strategy is breaking down and what to fix first.
            </p>

            <div className="bg-secondary p-8 md:p-12 rounded-2xl">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-secondary-foreground">First Name</label>
                    <input type="text" className="w-full bg-white border border-secondary-foreground/10 rounded-lg px-4 py-3 text-secondary-foreground focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Jane" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-secondary-foreground">Last Name</label>
                    <input type="text" className="w-full bg-white border border-secondary-foreground/10 rounded-lg px-4 py-3 text-secondary-foreground focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Smith" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary-foreground">Work Email</label>
                  <input type="email" className="w-full bg-white border border-secondary-foreground/10 rounded-lg px-4 py-3 text-secondary-foreground focus:outline-none focus:ring-2 focus:ring-primary" placeholder="jane@company.com" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary-foreground">Company Name</label>
                  <input type="text" className="w-full bg-white border border-secondary-foreground/10 rounded-lg px-4 py-3 text-secondary-foreground focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Acme Corp" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary-foreground">How can we help?</label>
                  <textarea rows={4} className="w-full bg-white border border-secondary-foreground/10 rounded-lg px-4 py-3 text-secondary-foreground focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Tell us about your current GTM challenges..."></textarea>
                </div>

                <button type="button" className="w-full bg-primary hover:bg-[#E5C1FF] text-primary-foreground font-bold py-4 rounded-full transition-colors">
                  Book a GTM Assessment
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
