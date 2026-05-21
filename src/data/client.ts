/**
 * client.ts — Automatisch generiert von KUWEZU
 * Erstellt: 2026-05-21T12:58:29.017Z
 * Kundennummer: 73
 *
 * Alle Texte, Bilder und Einstellungen werden hier gepflegt.
 */

export const client = {
  // ── Allgemein ──────────────────────────────────────────────────────────────
  name: "autoservice.com VP GmbH",
  branche: "Autowerkstatt",
  ort: "Osnabrück",
  slogan: "zuverlässig",
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
    ueberschrift: "Ihre Autowerkstatt in Osnabrück – zuverlässig",
    ueberschriftHighlight: "zuverlässig",
    untertext: "Von Karosserieschäden bis Autoglas – wir kümmern uns um Ihr Fahrzeug. Mit Ersatzwagen bleiben Sie mobil.",
    ctaPrimary: { text: "Termin vereinbaren", href: "#kontakt" },
    ctaSecondary: { text: "Leistungen ansehen", href: "#leistungen" },
  },

  // ── Über uns ───────────────────────────────────────────────────────────────
  ueberUns: {
    bild: "https://r2.kuwezu.de/kunden/73/ueber-uns.webp",
    ueberschrift: "Ihre Kfz-Profis mitten in Osnabrück",
    text1: "Bei autoservice.com VP GmbH in Osnabrück sind Sie mit Ihrem Fahrzeug in besten Händen. Wir reparieren Karosserieschäden fachgerecht, ersetzen Autoscheiben und bieten Ihnen während der Reparatur einen Ersatzwagen. So bleiben Sie mobil, während wir uns um Ihr Auto kümmern.",
    text2: "Unser Team arbeitet präzise, transparent und fair. Wir nehmen uns Zeit für Ihre Anliegen und sorgen dafür, dass Sie schnell und sicher zurück auf die Straße kommen.",
    tags: ["Karosseriefachbetrieb", "Autoglas-Service", "Ersatzwagen inklusive", "Faire Preise"],
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
      description: "Während Ihr Fahrzeug bei uns in der Werkstatt ist, stellen wir Ihnen einen Ersatzwagen zur Verfügung. So bleiben Sie flexibel und mobil im Alltag.",
      highlights: ["Kostenlose Mobilitätsgarantie", "Sofort verfügbar", "Unkomplizierte Abwicklung"],
    },
    {
      slug: "karosserie",
      title: "Karosserie",
      bild: "https://r2.kuwezu.de/bibliothek/Karosserie/1777878013146-leistung_karosserie.webp",
      description: "Von kleinen Dellen bis zu größeren Unfallschäden – wir reparieren Ihre Karosserie fachgerecht und in Erstausrüsterqualität. Ihr Auto sieht wieder aus wie neu.",
      highlights: ["Unfallinstandsetzung", "Dellenreparatur ohne Lackierung", "Lackierung in Originalfarbe"],
    },
    {
      slug: "autoglas",
      title: "Autoglas",
      bild: "https://r2.kuwezu.de/bibliothek/Autoglas/1777829664081-autoglas_reparatur.webp",
      description: "Steinschlag oder Riss in der Scheibe? Wir reparieren oder tauschen Ihre Autoscheiben schnell und präzise – von Frontscheibe bis Seitenfenster.",
      highlights: ["Steinschlagreparatur", "Scheibentausch aller Marken", "Direktabrechnung mit Versicherung"],
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
