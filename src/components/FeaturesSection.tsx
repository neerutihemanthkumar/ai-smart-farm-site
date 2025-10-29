import { AlertCircle, Droplet, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import diseaseImage from "@/assets/disease-detection.jpg";
import soilImage from "@/assets/soil-monitoring.jpg";
import yieldImage from "@/assets/yield-prediction.jpg";

const features = [
  {
    title: "Real-Time Disease Detection",
    description:
      "Early identification of crop diseases using computer vision and AI, enabling immediate intervention before widespread damage occurs.",
    icon: AlertCircle,
    image: diseaseImage,
  },
  {
    title: "Soil Moisture Monitoring",
    description:
      "Continuous tracking of soil moisture levels at multiple depths, ensuring optimal hydration for maximum crop health and yield.",
    icon: Droplet,
    image: soilImage,
  },
  {
    title: "Yield Prediction",
    description:
      "Advanced forecasting models predict harvest outcomes with high accuracy, helping you plan resources and manage expectations effectively.",
    icon: TrendingUp,
    image: yieldImage,
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Powerful Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge technology designed to transform modern agriculture
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-hover transition-all duration-300 animate-scale-in border-border overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-accent text-accent-foreground rounded-lg mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
