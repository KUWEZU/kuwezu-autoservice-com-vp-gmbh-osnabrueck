/**
 * client.ts — Automatisch generiert von KUWEZU
 * Erstellt: 2026-05-22T11:47:41.031Z
 * Kundennummer: 77
 *
 * Alle Texte, Bilder und Einstellungen werden hier gepflegt.
 */

export const client = {
  // ── Allgemein ──────────────────────────────────────────────────────────────
  name: "autoservice.com VP GmbH",
  branche: "Autowerkstatt",
  ort: "Osnabrück",
  slogan: "mit Herz",
  adresse: "",
  telefon: "0541 668790",
  email: "",
  website: "",
  logo: "https://r2.kuwezu.de/kunden/77/logo.png",
  standort_bild: null,

  // ── Branding ───────────────────────────────────────────────────────────────
  farben: {
    primary: "#e30613",
    secondary: "#000000",
    accent: "#b1b2b3",
  },
  // ── Hero ───────────────────────────────────────────────────────────────────
  hero: {
    bild: "https://r2.kuwezu.de/kunden/77/hero.webp",
    overlayOpacity: 0.55, /* fix — nie schwächer, nie überschreibbar */
    ueberschrift: "Ihre Autowerkstatt in Osnabrück mit Herz",
    ueberschriftHighlight: "mit Herz",
    untertext: "Kompetente Fahrzeugpflege und zuverlässige Reparaturen für alle Marken. Wir kümmern uns um Ihr Auto.",
    ctaPrimary: { text: "Termin vereinbaren", href: "#kontakt" },
    ctaSecondary: { text: "Leistungen ansehen", href: "#leistungen" },
  },

  // ── Über uns ───────────────────────────────────────────────────────────────
  ueberUns: {
    bild: "https://r2.kuwezu.de/kunden/77/ueber-uns.webp",
    ueberschrift: "autoservice.com VP GmbH – Ihre Partner in Osnabrück",
    text1: "Als moderne Autowerkstatt in Osnabrück stehen wir für fachkundigen Service rund um Ihr Fahrzeug. Mit jahrelanger Erfahrung und geschultem Personal bieten wir umfassende Werkstattleistungen für alle gängigen Fahrzeugmarken. Von der Inspektion bis zur Hauptuntersuchung – bei uns ist Ihr Auto in guten Händen.",
    text2: "Ehrliche Beratung und transparente Preise sind für uns selbstverständlich. Wir nehmen uns Zeit für Ihre Anliegen und erklären jeden Arbeitsschritt verständlich. Qualität und Kundenzufriedenheit stehen bei uns an erster Stelle.",
    tags: ["Meisterbetrieb", "Alle Marken", "Faire Preise", "Terminservice"],
    stats: [
      { value: "10+",    label: "Jahre Erfahrung"   },
      { value: "1.000+", label: "Zufriedene Kunden" },
      { value: "5",      label: "Fachkräfte"        },
      { value: "5.000+", label: "Aufträge/Jahr"     },
    ],
  },

  // ── Leistungen ─────────────────────────────────────────────────────────────
  leistungen: [

  ] as { slug: string; title: string; bild: string; description: string; highlights: string[] }[],

  // ── Karriere ───────────────────────────────────────────────────────────────
  karriere: {
    jobs: [
      { title: "Fachkraft (m/w/d)",       type: "Vollzeit",   experience: "Berufserfahrung erwünscht"  },
      { title: "Auszubildende (m/w/d)",    type: "Ausbildung", experience: "Schulabschluss erforderlich" },
    ],
  },

  // ── Öffnungszeiten & Services ──────────────────────────────────────────────
  tuev_termine: true as boolean,
  oeffnungszeiten: {
    mo_fr: "" as string,
    sa:    "" as string,
    so:    "" as string,
  },

  // ── Kontakt ────────────────────────────────────────────────────────────────
  kontakt: {
    oeffnungszeiten: ["Nach Vereinbarung"],
  },

  // ── Social Media ───────────────────────────────────────────────────────────
  social: {
    facebook:  null as string | null,
    instagram: null as string | null,
  },

  // ── WhatsApp ───────────────────────────────────────────────────────────────
  whatsapp: "" as string,

  // ── Features ───────────────────────────────────────────────────────────────
  newsEnabled: false as boolean,
} as const;

export type LeistungConfig = (typeof client.leistungen)[number];
