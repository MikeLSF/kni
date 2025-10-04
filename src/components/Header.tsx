import { Phone, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-primary blur-xl opacity-50 animate-pulse-glow"></div>
              <div className="relative text-3xl font-orbitron font-bold glow-text">
                KN<span className="text-secondary">I</span>
              </div>
            </div>
            <div className="hidden md:block font-inter text-sm text-muted-foreground">
              Informatique
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="/" className="font-inter text-sm hover:text-primary transition-colors">
              ACCUEIL
            </a>
            <a href="/services" className="font-inter text-sm hover:text-primary transition-colors">
              NOS SERVICES
            </a>
            <a href="/about" className="font-inter text-sm hover:text-primary transition-colors">
              A PROPOS DE NOUS
            </a>
            <a href="/contact" className="font-inter text-sm hover:text-primary transition-colors">
              CONTACT
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <a 
              href="tel:+32494040444" 
              className="hidden md:flex items-center gap-2 text-sm font-inter hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>0494 040 444</span>
            </a>
            <a 
              href="https://www.facebook.com/KNInformatic" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 hover:bg-primary/10 rounded-lg transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <Button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-inter font-medium shadow-[0_0_20px_rgba(6,182,212,0.4)]"
            >
              Support
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
