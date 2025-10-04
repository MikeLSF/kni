import { Button } from "@/src/components/ui/button";
import Image from "next/image";
import heroImage from "@/src/assets/hero-tech.jpg";
import { COMPANY_INFO, STYLES } from "@/lib/constants/company";

export const HeroSection = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center pt-20">
      {/* Gradient glow effects */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-glow"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse-glow"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
              <span className="text-primary font-inter text-sm font-medium">
                {COMPANY_INFO.partner}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-orbitron font-bold leading-tight">
              {COMPANY_INFO.hero.title.split('informatique')[0]}
              <span className="glow-text">informatique</span>{" "}
              {COMPANY_INFO.hero.title.split('informatique')[1].split('A à Z')[0]}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                A à Z
              </span>
            </h1>

            <p className="text-lg text-muted-foreground font-inter leading-relaxed">
              {COMPANY_INFO.hero.subtitle}
              <br /><br />
              {COMPANY_INFO.hero.description[0]}
              <br /><br />
              <span className="text-foreground font-medium">{COMPANY_INFO.hero.description[1]}</span>
              <br />
              {COMPANY_INFO.hero.description[2]}
            </p>

            <div className="space-y-3 text-muted-foreground font-inter">
              <p>{COMPANY_INFO.hero.description[3]}</p>
              <p className="text-sm">
                {COMPANY_INFO.hero.description[4]}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg"
                className={STYLES.buttonPrimary}
                asChild
              >
                <a href={COMPANY_INFO.urls.services}>Consultez nos services</a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className={STYLES.buttonOutline}
                asChild
              >
                <a href={COMPANY_INFO.urls.contact}>Nous contacter</a>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-3xl blur-2xl"></div>
            <Image 
              src={heroImage} 
              alt="Workspace technologique futuriste" 
              className="relative rounded-3xl border border-primary/30 shadow-2xl animate-float"
              width={600}
              height={600}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
