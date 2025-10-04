import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-tech.jpg";

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
                Partenaire 3CX Officiel
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-orbitron font-bold leading-tight">
              Votre partenaire <span className="glow-text">informatique</span> de{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                A à Z
              </span>
            </h1>

            <p className="text-lg text-muted-foreground font-inter leading-relaxed">
              De l'achat à l'utilisation, les réparations, la mise à jour, …
              <br /><br />
              Nous proposons nos services aux particuliers.
              <br /><br />
              <span className="text-foreground font-medium">Une utilisation professionnelle ?</span>
              <br />
              Nous analysons vos besoins & y répondons !
            </p>

            <div className="space-y-3 text-muted-foreground font-inter">
              <p>Du matériel, des services, une visibilité sur internet…</p>
              <p className="text-sm">
                La seule chose que nous ne proposons pas actuellement est le développement de vos applications.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] transition-all font-inter font-semibold text-lg px-8"
                asChild
              >
                <a href="/services">Consultez nos services</a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary/50 hover:bg-primary/10 font-inter font-semibold text-lg px-8"
                asChild
              >
                <a href="/#contact">Nous contacter</a>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-3xl blur-2xl"></div>
            <img 
              src={heroImage} 
              alt="Workspace technologique futuriste" 
              className="relative rounded-3xl border border-primary/30 shadow-2xl animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
