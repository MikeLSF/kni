import { Video, ShoppingCart, Wrench, Shield } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/src/components/ui/card";

const detailedServices = [
  {
    icon: Video,
    title: "Vidéo de surveillance",
    description: "Vous souhaitez pouvoir garder une vue sur vos locaux? votre atelier? votre stock ? Nous vous proposons le placement de systèmes de vidéo surveillance"
  },
  {
    icon: ShoppingCart,
    title: "Ventes",
    description: "Nous vous proposons une large gamme de matériel & accessoires, du câble en passant par la souris à l'ordinateur complet. Les consommables vous sont proposés en originaux et compatibles de qualités à prix planchés. Nous vous proposons également la gamme Apple. N'hésitez pas à nous consulter, nous ferons notre maximum pour vous satisfaire !"
  },
  {
    icon: Wrench,
    title: "Réparation",
    description: "Nous réalisons de nombreux types de réparations, n'hésitez pas à nous consulter : une panne sur un ordinateur, serveur, l'upgrade des performances • un écran cassé sur un ordinateur portable • la vitre cassée de votre appareil Apple (iPhone, MacBook, …) • une panne de téléphone due à un soucis de câblage, une mauvaise qualité du câblage intérieur, un remplacement de prise, …"
  },
  {
    icon: Shield,
    title: "Film2Protection - Fan2Pieces",
    description: "Depuis avril 2017, KNInformatic a lancé Film2Protection, devenu Fan2Pieces en 2019, une boutique en ligne vous proposant des pièces, accessoires & films de protection en verre trempé pour vos smartphones, votre console Nintendo Switch,…"
  }
];

export const DetailedServicesSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
            Une multitude de <span className="glow-text">services</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {detailedServices.map((service, index) => (
            <Card 
              key={index}
              className="group glass hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(6,182,212,0.3)] animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl group-hover:scale-110 transition-transform duration-500">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-orbitron group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-inter leading-relaxed">
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
