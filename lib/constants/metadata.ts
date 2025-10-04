import type { Metadata } from "next";

export const SITE_NAME = "KN Informatique";
export const SITE_DESCRIPTION = "Solutions informatiques professionnelles à Verviers - Maintenance, réparation, réseaux, vidéo surveillance et vente de matériel informatique";

export const DEFAULT_METADATA: Metadata = {
  title: {
    default: `${SITE_NAME} - Votre partenaire informatique de A à Z`,
    template: `%s | ${SITE_NAME}`
  },
  description: SITE_DESCRIPTION,
  authors: [{ name: SITE_NAME }],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: SITE_NAME,
    title: `${SITE_NAME} - Votre partenaire informatique de A à Z`,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const PAGE_METADATA = {
  home: {
    title: "Votre partenaire informatique de A à Z",
    description: "Services informatiques professionnels à Verviers"
  },
  services: {
    title: "Nos services",
    description: "KNInformatic propose une multitude de services informatiques"
  },
  about: {
    title: "À propos",
    description: "Découvrez KN Informatique, votre partenaire informatique de confiance"
  },
  contact: {
    title: "Contact",
    description: "Contactez KN Informatique pour vos besoins informatiques"
  },
  support: {
    title: "Support",
    description: "Demande d'assistance informatique"
  }
};
