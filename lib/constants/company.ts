export const COMPANY_INFO = {
  name: "KN Informatique",
  shortName: "KNInformatic",
  tagline: "Votre partenaire informatique de A à Z",
  partner: "Partenaire 3CX Officiel",
  
  hero: {
    title: "Votre partenaire informatique de A à Z",
    subtitle: "De l'achat à l'utilisation, les réparations, la mise à jour, …",
    description: [
      "Nous proposons nos services aux particuliers.",
      "Une utilisation professionnelle ?",
      "Nous analysons vos besoins & y répondons !",
      "Du matériel, des services, une visibilité sur internet…",
      "La seule chose que nous ne proposons pas actuellement est le développement de vos applications."
    ]
  },

  contact: {
    phone: "+32 XX XX XX XX", // À remplacer par le vrai numéro
    email: "contact@kninformatique.be", // À remplacer par le vrai email
    address: "Verviers, Belgique"
  },

  externalSites: {
    fan2pieces: "https://www.fan2pieces.com/"
  },

  urls: {
    services: "/services",
    contact: "/contact",
    support: "/support",
    about: "/about"
  }
};

export const ANIMATION_DELAYS = {
  card: 0.1, // Délai entre chaque carte en secondes
  section: 0.2, // Délai entre chaque section
  hero: 0.3 // Délai pour les animations du hero
};

export const STYLES = {
  glowShadow: "0_0_40px_rgba(6,182,212,0.6)",
  primaryGlow: "0_0_40px_rgba(6,182,212,0.3)",
  cardAnimation: "group glass hover:border-primary/50 transition-all duration-500",
  buttonPrimary: "bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] transition-all font-inter font-semibold text-lg px-8",
  buttonOutline: "border-primary/50 hover:bg-primary/10 font-inter font-semibold text-lg px-8"
};
