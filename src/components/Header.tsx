"use client";

import { Phone, Facebook, Menu } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/src/components/ui/sheet";
import { useState } from "react";
import Image from "next/image";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative w-32 h-12">
              <div className="absolute inset-0 bg-primary blur-xl opacity-50 animate-pulse-glow"></div>
              <Image 
                src="/kni-white.png" 
                alt="KNI Informatique" 
                fill
                className="relative object-contain"
              />
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
              className="hidden sm:flex p-2 hover:bg-primary/10 rounded-lg transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <Button 
              className="hidden sm:flex bg-primary hover:bg-primary/90 text-primary-foreground font-inter font-medium shadow-[0_0_20px_rgba(6,182,212,0.4)]"
              asChild
            >
              <a href="/support">Support</a>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="lg:hidden"
                >
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-[300px] bg-background/95 backdrop-blur-xl border-primary/20"
              >
                <nav className="flex flex-col gap-6 mt-8">
                  <a 
                    href="/" 
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-inter hover:text-primary transition-colors py-2"
                  >
                    ACCUEIL
                  </a>
                  <a 
                    href="/services" 
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-inter hover:text-primary transition-colors py-2"
                  >
                    NOS SERVICES
                  </a>
                  <a 
                    href="/about" 
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-inter hover:text-primary transition-colors py-2"
                  >
                    A PROPOS DE NOUS
                  </a>
                  <a 
                    href="/contact" 
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-inter hover:text-primary transition-colors py-2"
                  >
                    CONTACT
                  </a>

                  <div className="pt-6 border-t border-primary/20 space-y-4">
                    <a 
                      href="tel:+32494040444"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                    >
                      <Phone className="w-5 h-5" />
                      <span className="font-inter">0494 040 444</span>
                    </a>
                    <a 
                      href="https://www.facebook.com/KNInformatic" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                    >
                      <Facebook className="w-5 h-5" />
                      <span className="font-inter">Facebook</span>
                    </a>
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-inter font-medium"
                      asChild
                      onClick={() => setIsOpen(false)}
                    >
                      <a href="/support">Support</a>
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};
