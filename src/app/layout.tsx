import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { AccessibilityWidget } from "@/components/AccessibilityWidget";
import { CookieBanner } from "@/components/CookieBanner";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Autowerkstatt Osnabrück | autoservice.com VP GmbH",
  description: "Karosserie, Autoglas & Ersatzwagen in Osnabrück. Professionelle Reparaturen für alle Fahrzeuge. Jetzt Termin vereinbaren bei autoservice.com VP GmbH!",
  openGraph: {
    title: "Autowerkstatt Osnabrück | autoservice.com VP GmbH",
    description: "Karosserie, Autoglas & Ersatzwagen in Osnabrück. Professionelle Reparaturen für alle Fahrzeuge. Jetzt Termin vereinbaren bei autoservice.com VP GmbH!",
    type: "website",
    locale: "de_DE",
  },

};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${geistSans.variable} h-full scroll-smooth`}>
      <body className="min-h-full bg-brand-bg text-brand-text antialiased">
        <a href="#main-content" className="skip-link">
          Zum Hauptinhalt springen
        </a>
        {children}
        <AccessibilityWidget />
        <CookieBanner />
        <WhatsAppButton />
      </body>
    </html>
  );
}
