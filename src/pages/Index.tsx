import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import FeaturesSection from "@/components/FeaturesSection";
import Benefits from "@/components/Benefits";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <HowItWorks />
        <FeaturesSection />
        <Benefits />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
