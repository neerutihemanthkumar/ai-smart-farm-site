import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import sensorImage from "@/assets/sensor-module.jpg";
import aiImage from "@/assets/ai-analysis.jpg";

const galleryImages = [
  {
    src: gallery1,
    alt: "Smart farming dashboard showing real-time crop monitoring",
    title: "Real-Time Dashboard",
  },
  {
    src: gallery2,
    alt: "Agricultural drone capturing aerial data over crops",
    title: "Drone Technology",
  },
  {
    src: sensorImage,
    alt: "IoT sensor module in agricultural field",
    title: "IoT Sensors",
  },
  {
    src: aiImage,
    alt: "AI-powered crop health analysis visualization",
    title: "AI Analysis",
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            See It In Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our smart farming system through real-world applications and
            deployments
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-card hover:shadow-hover transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-primary-foreground">
                  <h3 className="font-bold text-lg">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
