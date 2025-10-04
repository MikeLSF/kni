import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Settings, 
  Network, 
  Wrench, 
  ShoppingCart, 
  HeadphonesIcon, 
  Video, 
  Smartphone,
  ExternalLink
} from "lucide-react";
import maintenanceImg from "@/assets/maintenance.jpg";
import networksImg from "@/assets/networks.jpg";
import salesRepairImg from "@/assets/sales-repair.jpg";

const summaryServices = [
  {
    icon: ShoppingCart,
    title: "Vente",
    items: [
      "Nous vous proposons une large gamme de matériel & accessoires, du câble en passant par la souris à l'ordinateur complet",
      "Les consommables vous sont proposés en originaux et compatibles de qualités à prix planchés",
      "Nous vous conseillons & assistons également pour la gamme Apple",
      "N'hésitez pas à nous consulter, nous ferons notre maximum pour vous satisfaire !"
    ]
  },
  {
    icon: Wrench,
    title: "Réparation",
    items: [
      "Nous réalisons de nombreux types de réparations, n'hésitez pas à nous consulter, voici quelques exemples :",
      "Une panne sur un ordinateur, serveur, ...",
      "Un écran cassé sur un ordinateur portable, un téléphone, ...",
      "La vitre cassée de votre appareil Apple (iPhone, iPad, MacBook, ...)",
      "Une panne de téléphone due à un soucis de câblage, une mauvaise qualité du câblage intérieur, un remplacement de prise, ..."
    ]
  },
  {
    icon: HeadphonesIcon,
    title: "Assistance",
    items: [
      "Diffusé à toute l'équipe",
      "Prise en charge rapide",
      "Tous types de questions",
      "Redirigé si besoin",
      "Traité en priorité"
    ],
    cta: { text: "Demander une assistance", href: "/support" }
  },
  {
    icon: Video,
    title: "Vidéo surveillance",
    items: [
      "Nous vous proposons le placement de systèmes de vidéo surveillance",
      "en intérieur & extérieur",
      "avec ou sans fil",
      "avec ou sans alertes",
      "avec vision nocturne",
      "Plusieurs types de systèmes sont possibles (toutes sont accessibles à distance) :",
      "des caméras fonctionnant en solo sur le cloud : vous recevez des notifications par mail, enregistrement sur serveur FTP, carte mémoire, ...",
      "des caméras associées à un DVR : notifications, enregistrement sur disque dur local , ...",
      "des caméras IP associées à un NAS : un Synology, des caméras IP & vous avec des enregistrements, notifications, ...",
      "N'hésitez pas, contactez-nous & nous vous proposerons différentes solutions !"
    ]
  },
  {
    icon: Smartphone,
    title: "Film2Protection / Fan2Pieces",
    items: [
      "Depuis avril 2017, KNInformatic a lancé Film2Protection, devenu Fan2Pieces en 2019",
      "une boutique en ligne vous proposant des pièces, accessoires & films de protection en verre trempé",
      "pour vos smartphones, votre console Nintendo Switch,..."
    ],
    cta: { text: "Voir le site", href: "https://www.fan2pieces.com/", external: true }
  }
];

const Services = () => {
  return (
    <div className="relative">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-glow"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse-glow"></div>
          
          <div className="container mx-auto px-4 relative z-10 py-20">
            <div className="max-w-4xl mx-auto text-center space-y-8 animate-slide-up">
              <h1 className="text-5xl md:text-7xl font-orbitron font-bold">
                Nos <span className="glow-text">services</span>
              </h1>
              <p className="text-xl text-muted-foreground font-inter">
                KNInformatic propose une multitude de services informatiques
              </p>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] transition-all font-inter font-semibold text-lg px-8"
                asChild
              >
                <a href="/support">Demander une assistance</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Maintenance et Installation */}
        <section className="py-24 relative">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-slide-up">
                <h2 className="text-4xl md:text-5xl font-orbitron font-bold">
                  Maintenance et <span className="glow-text">installation</span>
                </h2>
                
                <div className="space-y-4 text-muted-foreground font-inter">
                  <p>Vous avez du matériel, une infrastructure?</p>
                  <p>Vous cherchez un prestataire de services afin de la maintenir en état de fonctionnement et performante ?</p>
                  <p>Vous démarrez activité?</p>
                  <p className="text-foreground">
                    KN Informatic vous écoute, vous propose une assistance, des conseils, afin de vous proposer le matériel adapté à vos besoins tout en veillant à ne pas vous faire investir dans du matériel bien trop coûteux par rapport à vos besoins!
                  </p>
                </div>
              </div>

              <div className="relative animate-fade-in">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-3xl blur-2xl"></div>
                <img 
                  src={maintenanceImg} 
                  alt="Maintenance informatique" 
                  className="relative rounded-3xl border border-primary/30 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Réseaux */}
        <section className="py-24 relative bg-gradient-to-b from-transparent via-primary/5 to-transparent">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative animate-fade-in lg:order-1">
                <div className="absolute inset-0 bg-gradient-to-l from-primary/30 to-secondary/30 rounded-3xl blur-2xl"></div>
                <img 
                  src={networksImg} 
                  alt="Réseaux informatiques" 
                  className="relative rounded-3xl border border-primary/30 shadow-2xl"
                />
              </div>

              <div className="space-y-6 animate-slide-up lg:order-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl">
                    <Network className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-3xl font-orbitron font-bold">Réseaux</h3>
                </div>
                
                <div className="space-y-4 text-muted-foreground font-inter">
                  <p>Vous avez un ou plusieurs lieux de travail?</p>
                  <p>Vous voulez avoir la possibilité d'effectuer du <span className="text-primary font-semibold">télétravail</span> ?</p>
                  <p>
                    Vos besoins sont analysés avec vous afin de mettre en place les <span className="text-primary font-semibold">solutions</span> les plus <span className="text-primary font-semibold">simples</span> d'utilisation possible !
                  </p>
                  <p>Une liaison aérienne entre votre bâtiment principal et votre atelier quelque peu éloigné par exemple ?</p>
                  <p className="text-foreground font-medium">Il existe des possibilités !</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vente et réparation */}
        <section className="py-24 relative">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-slide-up">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl">
                    <Settings className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-3xl font-orbitron font-bold">Vente et réparation</h3>
                </div>
                
                <div className="space-y-4 text-muted-foreground font-inter">
                  <p>
                    KN Informatic vous propose un catalogue de produits variés en s'efforçant de répondre à vos critères de qualités tout en veillant à votre budget!
                  </p>
                  <p>
                    <span className="text-foreground font-semibold">Une panne</span> ? Il n'est pas toujours nécessaire de remplacer, une réparation est souvent envisageable, nous analysons les coûts avec vous et faisons en sorte que les services soient rétablis au plus vite, avec une solution temporaire si la panne est trop conséquente.
                  </p>
                </div>
              </div>

              <div className="relative animate-fade-in">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-3xl blur-2xl"></div>
                <img 
                  src={salesRepairImg} 
                  alt="Vente et réparation" 
                  className="relative rounded-3xl border border-primary/30 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* En résumé */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
                En <span className="glow-text">résumé</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {summaryServices.map((service, index) => (
                <Card 
                  key={index}
                  className="group glass hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(6,182,212,0.3)] animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl group-hover:scale-110 transition-transform duration-500">
                        <service.icon className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl font-orbitron group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {service.items.map((item, i) => (
                      <p key={i} className="text-sm text-muted-foreground font-inter leading-relaxed">
                        {i === 0 && service.items.length > 1 ? (
                          <span className="text-foreground font-medium">{item}</span>
                        ) : (
                          item
                        )}
                      </p>
                    ))}
                    {service.cta && (
                      <Button 
                        className="w-full mt-4 bg-primary/10 hover:bg-primary/20 border border-primary/30 font-inter"
                        asChild
                      >
                        {service.cta.external ? (
                          <a 
                            href={service.cta.href} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2"
                          >
                            {service.cta.text}
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        ) : (
                          <a href={service.cta.href}>
                            {service.cta.text}
                          </a>
                        )}
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
