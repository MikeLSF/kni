import { MapPin, Mail, Phone, ExternalLink } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contact" className="relative border-t border-primary/20 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-primary blur-xl opacity-50"></div>
                <div className="relative text-3xl font-orbitron font-bold glow-text">
                  KN<span className="text-secondary">I</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground font-inter">
              Votre partenaire informatique de confiance à Verviers
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-orbitron font-bold mb-4">Contact</h3>
            <div className="space-y-3 text-sm font-inter">
              <a 
                href="https://maps.google.com/?q=Rue+Houckaye+72,+4800+Verviers" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-primary transition-colors group"
              >
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <div>Rue Houckaye 72</div>
                  <div>4800 Verviers</div>
                </div>
              </a>
              
              <a 
                href="mailto:info@kninformatic.be"
                className="flex items-center gap-3 hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>info@kninformatic.be</span>
              </a>
              
              <a 
                href="tel:+32494040444"
                className="flex items-center gap-3 hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>0494 040 444</span>
              </a>
            </div>
          </div>

          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-orbitron font-bold mb-4">KN Informatique Scomm</h3>
            <div className="space-y-2 text-sm font-inter text-muted-foreground">
              <p>TVA : BE0725.686.001</p>
              <a 
                href="https://mikeconception.be/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                © Mike Conception 2022
                <ExternalLink className="w-3 h-3" />
              </a>
              <p className="text-xs">Made with passion.</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-primary/10 text-center">
          <p className="text-sm text-muted-foreground font-inter">
            <a href="#" className="hover:text-primary transition-colors">
              RGPD - Politique de confidentialité
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
