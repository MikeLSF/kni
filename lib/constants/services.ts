import { 
  ShoppingCart, 
  Wrench, 
  HeadphonesIcon, 
  Video, 
  Smartphone,
  LucideIcon
} from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  items: string[];
  cta?: {
    text: string;
    href: string;
    external?: boolean;
  };
}

export const SUMMARY_SERVICES: Service[] = [
  {
    icon: ShoppingCart,
    title: "Vente",
    items: [
      "Nous vous proposons une large gamme de matériel & accessoires, du câble en passant par la souris à l'ordinateur complet",
      "Les consommables vous sont proposés en originaux et compatibles de qualités à prix planchés",
      "Nous vous conseillons & assistons également pour la gamme Apple",
      "N'hésitez pas à nous consulter, nous ferons notre maximum pour vous satisfaire !"
    ]
  },
  {
    icon: Wrench,
    title: "Réparation",
    items: [
      "Nous réalisons de nombreux types de réparations, n'hésitez pas à nous consulter, voici quelques exemples :",
      "Une panne sur un ordinateur, serveur, ...",
      "Un écran cassé sur un ordinateur portable, un téléphone, ...",
      "La vitre cassée de votre appareil Apple (iPhone, iPad, MacBook, ...)",
      "Une panne de téléphone due à un soucis de câblage, une mauvaise qualité du câblage intérieur, un remplacement de prise, ..."
    ]
  },
  {
    icon: HeadphonesIcon,
    title: "Assistance",
    items: [
      "Diffusé à toute l'équipe",
      "Prise en charge rapide",
      "Tous types de questions",
      "Redirigé si besoin",
      "Traité en priorité"
    ],
    cta: { text: "Demander une assistance", href: "/support" }
  },
  {
    icon: Video,
    title: "Vidéo surveillance",
    items: [
      "Nous vous proposons le placement de systèmes de vidéo surveillance",
      "en intérieur & extérieur",
      "avec ou sans fil",
      "avec ou sans alertes",
      "avec vision nocturne",
      "Plusieurs types de systèmes sont possibles (toutes sont accessibles à distance) :",
      "des caméras fonctionnant en solo sur le cloud : vous recevez des notifications par mail, enregistrement sur serveur FTP, carte mémoire, ...",
      "des caméras associées à un DVR : notifications, enregistrement sur disque dur local , ...",
      "des caméras IP associées à un NAS : un Synology, des caméras IP & vous avec des enregistrements, notifications, ...",
      "N'hésitez pas, contactez-nous & nous vous proposerons différentes solutions !"
    ]
  },
  {
    icon: Smartphone,
    title: "Film2Protection / Fan2Pieces",
    items: [
      "Depuis avril 2017, KNInformatic a lancé Film2Protection, devenu Fan2Pieces en 2019",
      "une boutique en ligne vous proposant des pièces, accessoires & films de protection en verre trempé",
      "pour vos smartphones, votre console Nintendo Switch,..."
    ],
    cta: { text: "Voir le site", href: "https://www.fan2pieces.com/", external: true }
  }
];

export const SERVICE_SECTIONS = {
  maintenance: {
    title: "Maintenance et installation",
    description: [
      "Vous avez du matériel, une infrastructure?",
      "Vous cherchez un prestataire de services afin de la maintenir en état de fonctionnement et performante ?",
      "Vous démarrez activité?",
      "KN Informatic vous écoute, vous propose une assistance, des conseils, afin de vous proposer le matériel adapté à vos besoins tout en veillant à ne pas vous faire investir dans du matériel bien trop coûteux par rapport à vos besoins!"
    ]
  },
  networks: {
    title: "Réseaux",
    description: [
      "Vous avez un ou plusieurs lieux de travail?",
      "Vous voulez avoir la possibilité d'effectuer du télétravail ?",
      "Vos besoins sont analysés avec vous afin de mettre en place les solutions les plus simples d'utilisation possible !",
      "Une liaison aérienne entre votre bâtiment principal et votre atelier quelque peu éloigné par exemple ?",
      "Il existe des possibilités !"
    ]
  },
  salesRepair: {
    title: "Vente et réparation",
    description: [
      "KN Informatic vous propose un catalogue de produits variés en s'efforçant de répondre à vos critères de qualités tout en veillant à votre budget!",
      "Une panne ? Il n'est pas toujours nécessaire de remplacer, une réparation est souvent envisageable, nous analysons les coûts avec vous et faisons en sorte que les services soient rétablis au plus vite, avec une solution temporaire si la panne est trop conséquente."
    ]
  }
};
