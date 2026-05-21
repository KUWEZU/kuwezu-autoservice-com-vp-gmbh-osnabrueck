/**
 * client.ts — Automatisch generiert von KUWEZU
 * Erstellt: 2026-05-21T12:52:58.840Z
 * Kundennummer: 73
 *
 * Alle Texte, Bilder und Einstellungen werden hier gepflegt.
 */

export const client = {
  // ── Allgemein ──────────────────────────────────────────────────────────────
  name: "autoservice.com VP GmbH",
  branche: "Autowerkstatt",
  ort: "Osnabrück",
  slogan: "Rundum-Service",
  adresse: "Doppheide 98, 49084 Osnabrück",
  telefon: "0541 668790",
  email: "",
  website: "",
  logo: "https://r2.kuwezu.de/kunden/73/logo.png",
  standort_bild: null,

  // ── Branding ───────────────────────────────────────────────────────────────
  farben: {
    primary: "#e30613",
    secondary: "#000000",
    accent: "#b1b2b3",
  },
  // ── Hero ───────────────────────────────────────────────────────────────────
  hero: {
    bild: "https://r2.kuwezu.de/kunden/73/hero.webp",
    overlayOpacity: 0.55, /* fix — nie schwächer, nie überschreibbar */
    ueberschrift: "Ihre Autowerkstatt in Osnabrück mit Rundum-Service",
    ueberschriftHighlight: "Rundum-Service",
    untertext: "Professionelle Karosserie- und Autoglasreparaturen mit kostenlosem Ersatzwagen. Schnell, zuverlässig und fair.",
    ctaPrimary: { text: "Termin vereinbaren", href: "#kontakt" },
    ctaSecondary: { text: "Leistungen ansehen", href: "#leistungen" },
  },

  // ── Über uns ───────────────────────────────────────────────────────────────
  ueberUns: {
    bild: "https://r2.kuwezu.de/kunden/73/ueber-uns.webp",
    ueberschrift: "Ihr Kfz-Meisterbetrieb im Herzen von Osnabrück",
    text1: "Als etablierte Autowerkstatt in Osnabrück sind wir Ihr kompetenter Partner für alle Karosserie- und Autoglasarbeiten. Mit modernster Technik und langjähriger Erfahrung reparieren wir Unfallschäden, ersetzen Windschutzscheiben und kümmern uns um alle Lackierarbeiten – professionell und termingerecht.",
    text2: "Uns ist wichtig, dass Sie mobil bleiben. Deshalb bieten wir Ihnen während der Reparatur einen kostenlosen Ersatzwagen an. Transparente Kostenvoranschläge und ehrliche Beratung sind für uns selbstverständlich.",
    tags: ["Meisterbetrieb", "Kostenloser Ersatzwagen", "Direkte Versicherungsabrechnung", "Moderne Werkstattausstattung"],
    stats: [
      { value: "10+",    label: "Jahre Erfahrung"   },
      { value: "1.000+", label: "Zufriedene Kunden" },
      { value: "5",      label: "Fachkräfte"        },
      { value: "5.000+", label: "Aufträge/Jahr"     },
    ],
  },

  // ── Leistungen ─────────────────────────────────────────────────────────────
  leistungen: [
    {
      slug: "ersatzwagen",
      title: "Ersatzwagen",
      bild: "https://r2.kuwezu.de/bibliothek/Ersatzwagen/1777882571137-ersatzwagen_auto.webp",
      description: "Bleiben Sie mobil während Ihr Fahrzeug bei uns in Reparatur ist. Wir stellen Ihnen kostenlos einen Ersatzwagen zur Verfügung – unkompliziert und zuverlässig.",
      highlights: ["Kostenlose Bereitstellung", "Verschiedene Fahrzeugklassen", "Sofort verfügbar"],
    },
    {
      slug: "karosserie",
      title: "Karosserie",
      bild: "https://r2.kuwezu.de/bibliothek/Karosserie/1777878013146-leistung_karosserie.webp",
      description: "Von der Unfallreparatur bis zur professionellen Lackierung – unser Karosseriefachbetrieb bringt Ihr Fahrzeug wieder in Bestform. Präzise Arbeit mit modernster Richtbanktechnik und Originalersatzteilen.",
      highlights: ["Unfallschadensbeseitigung", "Spot-Repair & Komplettlackierung", "Versicherungsabwicklung"],
    },
    {
      slug: "autoglas",
      title: "Autoglas",
      bild: "https://r2.kuwezu.de/bibliothek/Autoglas/1777829664081-autoglas_reparatur.webp",
      description: "Steinschlag oder Riss in der Scheibe? Wir reparieren und ersetzen alle Autoscheiben fachgerecht. Schnelle Terminvergabe und direkte Abrechnung mit Ihrer Versicherung möglich.",
      highlights: ["Steinschlagreparatur", "Scheibentausch alle Marken", "Kalibrierung von Assistenzsystemen"],
    }
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
    mo_fr: "08:00 – 17:00" as string,
    sa:    "" as string,
    so:    "" as string,
  },

  // ── Kontakt ────────────────────────────────────────────────────────────────
  kontakt: {
    oeffnungszeiten: ["Mo–Fr: 08:00 – 17:00"],
  },

  // ── Social Media ───────────────────────────────────────────────────────────
  social: {
    facebook:  "https://facebook.de/autoservice" as string | null,
    instagram: null as string | null,
  },

  // ── WhatsApp ───────────────────────────────────────────────────────────────
  whatsapp: "" as string,

  // ── Features ───────────────────────────────────────────────────────────────
  newsEnabled: false as boolean,
} as const;

export type LeistungConfig = (typeof client.leistungen)[number];
