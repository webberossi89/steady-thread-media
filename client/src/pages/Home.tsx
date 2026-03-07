import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import About from "@/components/About";
import Audience from "@/components/Audience";
import Work from "@/components/Work";
import Framework from "@/components/Framework";
import Results from "@/components/Results";
import TechStack from "@/components/TechStack";
import Pricing from "@/components/Pricing";
import FeaturedCaseStudies from "@/components/FeaturedCaseStudies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
      <Nav />
      <main>
        <Hero />
        <Results />
        <About />
        <Audience />
        <Work />
        <Framework />
        <TechStack />
        <Pricing />
        <FeaturedCaseStudies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
