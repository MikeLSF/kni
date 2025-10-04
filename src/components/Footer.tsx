import { MapPin, Mail, Phone, ExternalLink } from "lucide-react";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer id="contact" className="relative border-t border-primary/20 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Logo */}
          <div className="flex items-center">
            <div className="relative w-48 h-48">
              <div className="absolute inset-0 bg-primary blur-xl opacity-50"></div>
              <Image 
                src="/kni-white.png" 
                alt="KNI Informatique" 
                fill
                className="relative object-contain"
              />
            </div>
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
            <p className="text-sm text-muted-foreground font-inter">
              Votre partenaire informatique de confiance à Verviers
            </p>
            <div className="space-y-2 text-sm font-inter text-muted-foreground">
              <p>TVA : BE0725.686.001</p>
              <p className="flex items-center gap-2">
                © Mike Conception {new Date().getFullYear()} &{" "}
                <a 
                  href="https://pixeldrive.be/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                  Pixeldrive
                  <ExternalLink className="w-3 h-3" />
                </a>
              </p>
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
