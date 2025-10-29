import { TrendingUp, DollarSign, Leaf, BarChart3, Zap, Users } from "lucide-react";

const benefits = [
  {
    category: "For Farmers",
    items: [
      {
        title: "Increased Yield",
        description: "Optimize growing conditions to achieve 20-30% higher crop yields",
        icon: TrendingUp,
      },
      {
        title: "Lower Costs",
        description: "Reduce water usage by 40% and minimize fertilizer waste",
        icon: DollarSign,
      },
      {
        title: "Eco-Friendly",
        description: "Sustainable practices that protect soil health and biodiversity",
        icon: Leaf,
      },
    ],
  },
  {
    category: "For Stakeholders",
    items: [
      {
        title: "Data-Driven Decisions",
        description: "Real-time analytics and insights for informed strategic planning",
        icon: BarChart3,
      },
      {
        title: "Scalability",
        description: "System grows with your operations from small farms to large estates",
        icon: Zap,
      },
      {
        title: "Improved ROI",
        description: "Maximize returns with efficient resource allocation",
        icon: Users,
      },
    ],
  },
];

const Benefits = () => {
  return (
    <section className="py-20 bg-gradient-feature">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Benefits That Matter
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Delivering value to every stakeholder in the agricultural ecosystem
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {benefits.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className="animate-fade-in-up"
              style={{ animationDelay: `${groupIndex * 100}ms` }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center lg:text-left">
                {group.category}
              </h3>
              <div className="space-y-6">
                {group.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex gap-4 p-6 bg-card rounded-lg border border-border hover:shadow-card transition-shadow group"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <item.icon className="h-6 w-6" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-2">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
