"use client";

import { Header } from "@/src/components/Header";
import { Footer } from "@/src/components/Footer";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent } from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import { Label } from "@/src/components/ui/label";
import { Download } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";

const supportSchema = z.object({
  name: z.string().trim().min(1, { message: "Le nom est requis" }).max(100, { message: "Le nom ne peut pas dépasser 100 caractères" }),
  email: z.string().trim().email({ message: "Adresse email invalide" }).max(255, { message: "L'email ne peut pas dépasser 255 caractères" }),
  phone: z.string().trim().min(1, { message: "Le numéro de téléphone est requis" }).max(20, { message: "Le numéro ne peut pas dépasser 20 caractères" }),
  problem: z.string().trim().min(1, { message: "La description du problème est requise" }).max(1000, { message: "La description ne peut pas dépasser 1000 caractères" })
});

type SupportFormData = z.infer<typeof supportSchema>;

export default function Support() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<SupportFormData>({
    resolver: zodResolver(supportSchema)
  });

  const onSubmit = (data: SupportFormData) => {
    try {
      // Encode data properly for mailto
      const subject = encodeURIComponent("Demande d'assistance");
      const body = encodeURIComponent(
        `Nom: ${data.name}\nEmail: ${data.email}\nTéléphone: ${data.phone}\n\nProblème:\n${data.problem}`
      );
      
      // Open email client
      window.location.href = `mailto:info@kninformatic.be?subject=${subject}&body=${body}`;
      
      toast.success("Votre client email va s'ouvrir pour envoyer la demande");
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
        <section className="relative min-h-[50vh] flex items-center">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-glow"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse-glow"></div>
          
          <div className="container mx-auto px-4 relative z-10 py-16">
            <div className="max-w-4xl mx-auto text-center space-y-8 animate-slide-up">
              <h1 className="text-5xl md:text-7xl font-orbitron font-bold">
                <span className="glow-text">Assistance</span>
              </h1>

              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] transition-all font-inter font-semibold text-lg px-8"
                asChild
              >
                <a 
                  href="http://get.teamviewer.com/qs_kni" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Télécharger Team Viewer
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Support Form Section */}
        <section className="py-24 relative bg-gradient-to-b from-transparent via-primary/5 to-transparent">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
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
                      <Label htmlFor="problem" className="font-inter">
                        Votre problème
                      </Label>
                      <Textarea
                        id="problem"
                        {...register("problem")}
                        className="bg-background/50 border-primary/30 focus:border-primary min-h-[150px]"
                        placeholder="Décrivez votre problème..."
                      />
                      {errors.problem && (
                        <p className="text-sm text-destructive">{errors.problem.message}</p>
                      )}
                    </div>

                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] transition-all font-inter font-semibold text-lg py-6"
                    >
                      {isSubmitting ? "Envoi..." : "Envoyer la demande"}
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
