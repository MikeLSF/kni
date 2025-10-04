import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-24 relative">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="glass p-12 md:p-16 rounded-3xl text-center max-w-4xl mx-auto border-primary/30 shadow-[0_0_60px_rgba(6,182,212,0.3)] animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
            Envie de discuter de votre <span className="glow-text">projet</span> ?
          </h2>
          
          <p className="text-lg text-muted-foreground font-inter mb-8">
            Contactez-nous pour discuter de vos besoins en informatique et trouver la solution adaptée
          </p>

          <Button 
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_50px_rgba(6,182,212,0.7)] transition-all font-inter font-bold text-lg px-10 group"
          >
            Commençons maintenant
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};
