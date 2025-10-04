import { Header } from "@/src/components/Header";
import { Footer } from "@/src/components/Footer";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Settings, Network, ExternalLink } from "lucide-react";
import Image from "next/image";
import { SUMMARY_SERVICES, SERVICE_SECTIONS } from "@/lib/constants/services";
import { COMPANY_INFO, ANIMATION_DELAYS, STYLES } from "@/lib/constants/company";
import { PAGE_METADATA } from "@/lib/constants/metadata";
import maintenanceImg from "@/src/assets/maintenance.jpg";
import networksImg from "@/src/assets/networks.jpg";
import salesRepairImg from "@/src/assets/sales-repair.jpg";

export default function Services() {
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
                {PAGE_METADATA.services.description}
              </p>
              <Button 
                size="lg"
                className={STYLES.buttonPrimary}
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
                  {SERVICE_SECTIONS.maintenance.title.split(' ')[0]} <span className="glow-text">{SERVICE_SECTIONS.maintenance.title.split(' ')[2]}</span>
                </h2>
                
                <div className="space-y-4 text-muted-foreground font-inter">
                  {SERVICE_SECTIONS.maintenance.description.slice(0, 3).map((desc, i) => (
                    <p key={i}>{desc}</p>
                  ))}
                  <p className="text-foreground">
                    {SERVICE_SECTIONS.maintenance.description[3]}
                  </p>
                </div>
              </div>

              <div className="relative animate-fade-in">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-3xl blur-2xl"></div>
                <Image 
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
                <Image 
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
                  <h3 className="text-3xl font-orbitron font-bold">{SERVICE_SECTIONS.networks.title}</h3>
                </div>
                
                <div className="space-y-4 text-muted-foreground font-inter">
                  <p>{SERVICE_SECTIONS.networks.description[0]}</p>
                  <p>{SERVICE_SECTIONS.networks.description[1].split('télétravail')[0]}<span className="text-primary font-semibold">télétravail</span> ?</p>
                  <p>
                    {SERVICE_SECTIONS.networks.description[2].split('solutions')[0]}<span className="text-primary font-semibold">solutions</span>{SERVICE_SECTIONS.networks.description[2].split('solutions')[1].split('simples')[0]}<span className="text-primary font-semibold">simples</span>{SERVICE_SECTIONS.networks.description[2].split('simples')[1]}
                  </p>
                  <p>{SERVICE_SECTIONS.networks.description[3]}</p>
                  <p className="text-foreground font-medium">{SERVICE_SECTIONS.networks.description[4]}</p>
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
                  <h3 className="text-3xl font-orbitron font-bold">{SERVICE_SECTIONS.salesRepair.title}</h3>
                </div>
                
                <div className="space-y-4 text-muted-foreground font-inter">
                  <p>{SERVICE_SECTIONS.salesRepair.description[0]}</p>
                  <p>
                    <span className="text-foreground font-semibold">Une panne</span> ? {SERVICE_SECTIONS.salesRepair.description[1].split('?')[1].trim()}
                  </p>
                </div>
              </div>

              <div className="relative animate-fade-in">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-3xl blur-2xl"></div>
                <Image 
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
              {SUMMARY_SERVICES.map((service, index) => (
                <Card 
                  key={index}
                  className={`${STYLES.cardAnimation} hover:shadow-[${STYLES.primaryGlow}] animate-slide-up`}
                  style={{ animationDelay: `${index * ANIMATION_DELAYS.card}s` }}
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
                          <a href={service.cta.href}>{service.cta.text}</a>
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
}
