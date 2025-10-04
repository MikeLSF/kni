import { Shield, Briefcase, Smartphone, HeadphonesIcon } from "lucide-react";
import { Card, CardContent } from "@/src/components/ui/card";

const reasons = [
  {
    icon: Shield,
    title: "Sécurité et Confidentialité",
    description: "La confidentialité est indispensable, elle ne peut être assurée sans une sécurisation. Nous nous en chargeons ! Ne prenez pas de risques."
  },
  {
    icon: Briefcase,
    title: "Travaillez sereinement",
    description: "Ne perdez pas de temps à vous préoccuper de votre infrastructure, nous nous en chargeons & vous vous consacrez totalement à vos activités."
  },
  {
    icon: Smartphone,
    title: "Accessibilité & Mobilité",
    description: "Nous nous occupons de vos appareils mobiles tels que tablette, smartphone, iPhone, iPad. Nous vous aidons à rendre vos données accessibles où que vous soyez."
  },
  {
    icon: HeadphonesIcon,
    title: "Assistance",
    description: "Diffusé à toute l'équipe • Prise en charge rapide • Tous types de questions • Redirigé si besoin • Traité en priorité"
  }
];

export const WhyChooseSection = () => {
  return (
    <section id="apropos" className="py-24 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
            Pourquoi choisir <span className="glow-text">KNI</span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-xl font-orbitron font-semibold text-primary">
              La satisfaction de notre clientèle est notre priorité
            </p>
            <p className="text-muted-foreground font-inter">
              Notre but n'est pas d'avoir une quantité incroyable de clients et donc de devoir en délaisser,
              nous préférons avoir une petite clientèle, la satisfaire & la fidéliser.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <Card 
              key={index}
              className="group glass hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(6,182,212,0.3)] animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="mb-4 inline-flex p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl group-hover:scale-110 transition-transform duration-500">
                  <reason.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-orbitron font-bold mb-3 group-hover:text-primary transition-colors">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground font-inter leading-relaxed">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
