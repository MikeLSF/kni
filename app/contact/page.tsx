"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().trim().min(1, { message: "Le nom est requis" }).max(100, { message: "Le nom ne peut pas dépasser 100 caractères" }),
  email: z.string().trim().email({ message: "Adresse email invalide" }).max(255, { message: "L'email ne peut pas dépasser 255 caractères" }),
  phone: z.string().trim().min(1, { message: "Le numéro de téléphone est requis" }).max(20, { message: "Le numéro ne peut pas dépasser 20 caractères" }),
  message: z.string().trim().min(1, { message: "Le message est requis" }).max(1000, { message: "Le message ne peut pas dépasser 1000 caractères" })
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = (data: ContactFormData) => {
    try {
      // Encode data properly for mailto
      const subject = encodeURIComponent("Nouveau contact depuis le site web");
      const body = encodeURIComponent(
        `Nom: ${data.name}\nEmail: ${data.email}\nTéléphone: ${data.phone}\n\nMessage:\n${data.message}`
      );
      
      // Open email client
      window.location.href = `mailto:info@kninformatic.be?subject=${subject}&body=${body}`;
      
      toast.success("Votre client email va s'ouvrir pour envoyer le message");
      reset();
    } catch (error) {
      toast.error("Une erreur s'est produite. Veuillez réessayer.");
    }
  };

  return (
    <div className="relative">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-glow"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse-glow"></div>
          
          <div className="container mx-auto px-4 relative z-10 py-20">
            <div className="max-w-4xl mx-auto text-center space-y-6 animate-slide-up">
              <h1 className="text-5xl md:text-7xl font-orbitron font-bold">
                Restons en <span className="glow-text">contact</span>
              </h1>
              <p className="text-xl text-muted-foreground font-inter">
                Nous sommes à votre disposition
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-24 relative">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Get in touch */}
              <Card className="glass animate-slide-up">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-orbitron font-bold mb-8">
                    Get in <span className="text-primary">touch</span>
                  </h2>
                  
                  <div className="space-y-6">
                    <a 
                      href="https://www.google.be/maps/place/Rue+Houckaye+72,+4800+Verviers/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 text-foreground hover:text-primary transition-colors group"
                    >
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div className="font-inter">
                        <p>Rue Houckaye, 72</p>
                        <p>4800 Verviers</p>
                      </div>
                    </a>

                    <a 
                      href="tel:+32494040444"
                      className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group"
                    >
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors flex-shrink-0">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <span className="font-inter">0494/04.04.44</span>
                    </a>

                    <a 
                      href="mailto:info@kninformatic.be"
                      className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group"
                    >
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <span className="font-inter">info@kninformatic.be</span>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Heure ouverture */}
              <Card className="glass animate-slide-up" style={{ animationDelay: "0.1s" }}>
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Clock className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-3xl font-orbitron font-bold">
                      Heure <span className="text-primary">ouverture</span>
                    </h2>
                  </div>
                  
                  <div className="space-y-6 font-inter">
                    <div>
                      <p className="text-lg font-semibold mb-2">Lundi – Vendredi</p>
                      <p className="text-muted-foreground">8h00-20h30 (sur RDV)</p>
                    </div>
                    
                    <div>
                      <p className="text-lg font-semibold mb-2">Samedi</p>
                      <p className="text-muted-foreground">sur RDV</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-24 relative bg-gradient-to-b from-transparent via-primary/5 to-transparent">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12 animate-slide-up">
                <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
                  Formulaire de <span className="glow-text">contact</span>
                </h2>
              </div>

              <Card className="glass animate-slide-up">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-inter">
                        Votre nom
                      </Label>
                      <Input
                        id="name"
                        {...register("name")}
                        className="bg-background/50 border-primary/30 focus:border-primary"
                        placeholder="Entrez votre nom"
                      />
                      {errors.name && (
                        <p className="text-sm text-destructive">{errors.name.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-inter">
                        Votre adresse mail
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email")}
                        className="bg-background/50 border-primary/30 focus:border-primary"
                        placeholder="votre@email.com"
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive">{errors.email.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="font-inter">
                        Votre numéro de téléphone
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        {...register("phone")}
                        className="bg-background/50 border-primary/30 focus:border-primary"
                        placeholder="0494 04 04 44"
                      />
                      {errors.phone && (
                        <p className="text-sm text-destructive">{errors.phone.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="font-inter">
                        Votre projet ou demande
                      </Label>
                      <Textarea
                        id="message"
                        {...register("message")}
                        className="bg-background/50 border-primary/30 focus:border-primary min-h-[150px]"
                        placeholder="Décrivez votre projet ou votre demande..."
                      />
                      {errors.message && (
                        <p className="text-sm text-destructive">{errors.message.message}</p>
                      )}
                    </div>

                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] transition-all font-inter font-semibold text-lg py-6"
                    >
                      {isSubmitting ? "Envoi..." : "Envoyer"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
