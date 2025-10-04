import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import kevinProfile from "@/assets/kevin-profile.jpg";

export default function About() {
  return (
    <div className="relative">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section - Notre philosophie */}
        <section className="relative min-h-[80vh] flex items-center">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-glow"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse-glow"></div>
          
          <div className="container mx-auto px-4 relative z-10 py-20">
            <div className="max-w-5xl mx-auto text-center space-y-12 animate-slide-up">
              <h1 className="text-5xl md:text-7xl font-orbitron font-bold mb-12">
                Notre <span className="glow-text">philosophie</span>
              </h1>
              
              {/* Quote Block */}
              <div className="glass p-12 rounded-3xl border-l-4 border-primary shadow-[0_0_60px_rgba(6,182,212,0.2)]">
                <blockquote className="space-y-6">
                  <p className="text-xl md:text-2xl text-foreground font-inter leading-relaxed">
                    Lorsqu'un client est content, il le fait savoir, la confiance règne
                  </p>
                  <p className="text-lg md:text-xl text-muted-foreground font-inter leading-relaxed">
                    Notre but n'est pas d'avoir une quantité incroyable de client et donc de devoir en délaisser, nous préférons avoir une petite clientèle, la satisfaire & la fidéliser.
                  </p>
                  <footer className="text-right">
                    <cite className="not-italic text-primary font-orbitron font-bold text-xl">
                      Kevin Niesten
                    </cite>
                  </footer>
                </blockquote>
              </div>

              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] transition-all font-inter font-semibold text-lg px-8"
                asChild
              >
                <a href="/contact">Contactez-nous</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Section Kevin Niesten */}
        <section className="py-24 relative bg-gradient-to-b from-transparent via-primary/5 to-transparent">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
                La satisfaction de nos clients est notre <span className="glow-text">priorité</span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="glass overflow-hidden hover:shadow-[0_0_60px_rgba(6,182,212,0.3)] transition-all duration-500 animate-slide-up">
                <div className="grid md:grid-cols-5 gap-8">
                  {/* Image */}
                  <div className="md:col-span-2 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 blur-2xl"></div>
                    <Image 
                      src={kevinProfile} 
                      alt="Kevin Niesten - Fondateur KN Informatique" 
                      className="relative w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="md:col-span-3 p-8 flex flex-col justify-center space-y-6">
                    <div>
                      <h3 className="text-3xl font-orbitron font-bold mb-2 glow-text">
                        Kevin Niesten
                      </h3>
                      <p className="text-muted-foreground font-inter">
                        Fondateur & Gérant
                      </p>
                    </div>

                    <div className="space-y-4">
                      <a 
                        href="mailto:info@kninformatic.be"
                        className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
                      >
                        <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                          <Mail className="w-5 h-5 text-primary" />
                        </div>
                        <span className="font-inter">info@kninformatic.be</span>
                      </a>

                      <a 
                        href="tel:+32494040444"
                        className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
                      >
                        <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                          <Phone className="w-5 h-5 text-primary" />
                        </div>
                        <span className="font-inter">0494 04 04 44</span>
                      </a>
                    </div>

                    <div className="pt-4">
                      <p className="text-lg font-orbitron font-semibold mb-4">
                        Envoyez moi un mail pour discuter de votre projet.
                      </p>
                      <Button 
                        className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] transition-all font-inter font-semibold"
                        asChild
                      >
                        <a href="/contact">Contactez-nous</a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
