import { HardDrive, Network, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Wrench,
    title: "Maintenance & Réparation",
    description: "Maintenance et réparation de tous vos équipements informatiques"
  },
  {
    icon: HardDrive,
    title: "Vente & Réparation",
    description: "Vente de matériel informatique et réparations professionnelles"
  },
  {
    icon: Network,
    title: "Réseaux",
    description: "Installation et maintenance de réseaux d'entreprise"
  }
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
            Nos secteurs <span className="glow-text">d'activités</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group glass hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(6,182,212,0.3)] animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 inline-flex p-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                  <service.icon className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-orbitron font-bold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground font-inter">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
