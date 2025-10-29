import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    details: "info@aismartfarming.com",
    href: "mailto:info@aismartfarming.com",
  },
  {
    icon: Phone,
    title: "Phone",
    details: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    title: "Address",
    details: "123 AgriTech Lane, Farm City, FC 12345",
    href: "#",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: "Mon - Fri: 9:00 AM - 6:00 PM",
    href: "#",
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-primary-foreground py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Get In Touch
              </h1>
              <p className="text-xl text-primary-foreground/90">
                Have questions? We'd love to hear from you. Send us a message and we'll
                respond as soon as possible.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Info */}
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Contact Information
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Reach out to us through any of the following channels. Our team is here
                  to help you understand how our AI Smart Farming System can benefit your
                  agricultural operations.
                </p>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg hover:shadow-card transition-shadow group"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <item.icon className="h-6 w-6" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                        <p className="text-muted-foreground">{item.details}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <div className="animate-fade-in-up">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Map Section (Optional) */}
        <section className="py-20 bg-gradient-feature">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h2 className="text-3xl font-bold text-foreground mb-6">Visit Our Office</h2>
              <p className="text-muted-foreground mb-8">
                We welcome you to visit our demonstration facility to see our technology in
                action
              </p>
              <div className="bg-muted rounded-lg h-96 flex items-center justify-center">
                <p className="text-muted-foreground">Map placeholder - Integration available</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
