import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FeaturesSection from "@/components/FeaturesSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AlertCircle, Droplet, TrendingUp, Cpu, Shield, Zap } from "lucide-react";

const additionalFeatures = [
  {
    title: "Weather Forecasting",
    description:
      "Integrated weather prediction models help you prepare for changing conditions and optimize planting schedules.",
    icon: Cpu,
  },
  {
    title: "Crop Health Analytics",
    description:
      "Comprehensive health monitoring tracks plant vitality, nutrient levels, and growth rates throughout the season.",
    icon: Shield,
  },
  {
    title: "Energy Optimization",
    description:
      "Smart power management reduces energy consumption while maintaining optimal system performance.",
    icon: Zap,
  },
];

const Features = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-primary-foreground py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Advanced Features
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Discover the comprehensive suite of tools designed to revolutionize your
                farming operations
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Get Started Today</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Main Features */}
        <FeaturesSection />

        {/* Additional Features */}
        <section className="py-20 bg-gradient-feature">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                And Much More
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Additional capabilities to enhance every aspect of your farming operation
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {additionalFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-8 hover:shadow-hover transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 bg-accent text-accent-foreground rounded-lg flex items-center justify-center mb-6">
                    <feature.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Ready to Transform Your Farm?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join hundreds of farmers already benefiting from AI-powered agriculture
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Request a Demo</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Features;
