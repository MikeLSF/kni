import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { DEFAULT_METADATA } from "@/lib/constants/metadata";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const orbitron = Orbitron({ 
  subsets: ["latin"],
  variable: "--font-orbitron",
});

export const metadata: Metadata = {
  ...DEFAULT_METADATA,
  icons: {
    icon: '/kni-white.png',
    shortcut: '/kni-white.png',
    apple: '/kni-white.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${orbitron.variable}`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
