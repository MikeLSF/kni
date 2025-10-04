import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-glow"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse-glow"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center space-y-8 animate-slide-up">
          <h1 className="text-9xl font-orbitron font-bold glow-text">404</h1>
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold">
            Page <span className="text-primary">introuvable</span>
          </h2>
          <p className="text-xl text-muted-foreground font-inter">
            Oups ! La page que vous recherchez n'existe pas.
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] transition-all font-inter font-semibold text-lg px-8"
            asChild
          >
            <Link href="/">Retour à l'accueil</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
