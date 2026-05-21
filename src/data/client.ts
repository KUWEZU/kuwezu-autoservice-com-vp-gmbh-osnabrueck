/**
 * client.ts — Automatisch generiert von KUWEZU
 * Erstellt: 2026-05-21T12:27:14.870Z
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
  logo: null,
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
    untertext: "Von Karosserieschäden über Autoglasreparatur bis zum Ersatzwagen – wir sind Ihr zuverlässiger Partner für alle Fahrzeugangelegenheiten.",
    ctaPrimary: { text: "Termin vereinbaren", href: "#kontakt" },
    ctaSecondary: { text: "Leistungen ansehen", href: "#leistungen" },
  },

  // ── Über uns ───────────────────────────────────────────────────────────────
  ueberUns: {
    bild: "https://r2.kuwezu.de/kunden/73/ueber-uns.webp",
    ueberschrift: "Ihre Autowerkstatt für Osnabrück und Umgebung",
    text1: "Die autoservice.com VP GmbH steht für professionelle Fahrzeugpflege und Reparaturen in Osnabrück. Unser erfahrenes Team kümmert sich um Karosserie- und Autoglasarbeiten aller Art. Damit Sie mobil bleiben, stellen wir Ihnen bei größeren Reparaturen selbstverständlich einen Ersatzwagen zur Verfügung.",
    text2: "Wir arbeiten mit moderner Technik, setzen auf Qualität und halten Sie während der gesamten Reparatur auf dem Laufenden. Ihre Zufriedenheit und schnelle Lösungen stehen bei uns an erster Stelle.",
    tags: ["Meisterbetrieb", "Ersatzwagen inklusive", "Schnelle Termine", "Alle Fabrikate"],
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
      description: "Bleiben Sie mobil während Ihr Fahrzeug bei uns in der Werkstatt ist. Wir stellen Ihnen einen zuverlässigen Ersatzwagen zur Verfügung, damit Sie ohne Einschränkungen Ihren Alltag meistern können.",
      highlights: ["Verschiedene Fahrzeugklassen", "Unkomplizierte Abwicklung", "Versicherungsabrechnung möglich"],
    },
    {
      slug: "karosserie",
      title: "Karosserie",
      bild: "https://r2.kuwezu.de/bibliothek/Karosserie/1777878013146-leistung_karosserie.webp",
      description: "Von kleinen Dellen bis zu kompletten Unfallschäden – unsere Karosserieexperten bringen Ihr Fahrzeug wieder in Form. Wir arbeiten mit modernen Richtbänken und Lacktechnologien für ein perfektes Ergebnis.",
      highlights: ["Unfall-Instandsetzung", "Lackierarbeiten", "Smart Repair für kleine Schäden"],
    },
    {
      slug: "autoglas",
      title: "Autoglas",
      bild: "https://r2.kuwezu.de/bibliothek/Autoglas/1777829664081-autoglas_reparatur.webp",
      description: "Steinschlag oder größere Glasschäden? Wir reparieren oder tauschen Windschutzscheiben, Seiten- und Heckscheiben fachgerecht aus. Schnell, professionell und direkt mit Ihrer Versicherung abrechenbar.",
      highlights: ["Steinschlagreparatur", "Scheibenwechsel alle Marken", "Kalibrierung von Assistenzsystemen"],
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
  whatsapp: "+4917621575303" as string,

  // ── Features ───────────────────────────────────────────────────────────────
  newsEnabled: true as boolean,
} as const;

export type LeistungConfig = (typeof client.leistungen)[number];
