import { Cpu, Droplets, Radio } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import sensorImage from "@/assets/sensor-module.jpg";
import aiImage from "@/assets/ai-analysis.jpg";
import irrigationImage from "@/assets/irrigation.jpg";

const steps = [
  {
    title: "Sensor Modules",
    description:
      "Advanced IoT sensors continuously monitor soil conditions, weather patterns, and crop health in real-time across your entire farm.",
    icon: Radio,
    image: sensorImage,
  },
  {
    title: "AI Crop Analysis",
    description:
      "Machine learning algorithms analyze sensor data to detect diseases, predict growth patterns, and provide actionable insights.",
    icon: Cpu,
    image: aiImage,
  },
  {
    title: "Automated Irrigation",
    description:
      "Smart irrigation systems automatically adjust water distribution based on real-time soil moisture and weather forecasts.",
    icon: Droplets,
    image: irrigationImage,
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-feature">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our three-step system seamlessly integrates technology with agriculture to
            optimize your farming operations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="group hover:shadow-hover transition-all duration-300 animate-fade-in-up border-border"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex items-center justify-center w-14 h-14 bg-primary text-primary-foreground rounded-lg mb-4 group-hover:bg-primary-hover transition-colors">
                  <step.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
