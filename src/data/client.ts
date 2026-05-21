/**
 * client.ts — Automatisch generiert von KUWEZU
 * Erstellt: 2026-05-21T14:57:03.955Z
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
    untertext: "Von Karosserie bis Autoglas – professionelle Reparaturen und kostenloser Ersatzwagen. Ihr Auto in besten Händen.",
    ctaPrimary: { text: "Termin vereinbaren", href: "#kontakt" },
    ctaSecondary: { text: "Leistungen ansehen", href: "#leistungen" },
  },

  // ── Über uns ───────────────────────────────────────────────────────────────
  ueberUns: {
    bild: "https://r2.kuwezu.de/kunden/73/ueber-uns.webp",
    ueberschrift: "Ihre Fachwerkstatt im Herzen von Osnabrück",
    text1: "Bei autoservice.com VP GmbH sind wir Ihre Experten für Karosserie- und Autoglasarbeiten in Osnabrück. Mit jahrelanger Erfahrung und moderner Werkstattausstattung kümmern wir uns um alle Reparaturen an Ihrem Fahrzeug. Ob Unfallschaden, Steinschlag oder Lackierung – wir arbeiten präzise und termingerecht.",
    text2: "Unser Team legt Wert auf transparente Beratung und faire Preise. Damit Sie mobil bleiben, stellen wir Ihnen während der Reparatur einen kostenlosen Ersatzwagen zur Verfügung. Vertrauen und Zuverlässigkeit stehen bei uns an erster Stelle.",
    tags: ["Meisterbetrieb", "Kostenloser Ersatzwagen", "Versicherungsabwicklung", "Schnelle Termine"],
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
      description: "Damit Sie während der Reparatur mobil bleiben, stellen wir Ihnen kostenlos einen Ersatzwagen zur Verfügung. Unkompliziert und ohne lange Wartezeiten.",
      highlights: ["Kostenlose Bereitstellung", "Verschiedene Fahrzeugklassen", "Sofort verfügbar"],
    },
    {
      slug: "karosserie",
      title: "Karosserie",
      bild: "https://r2.kuwezu.de/bibliothek/Karosserie/1777878013146-leistung_karosserie.webp",
      description: "Von der Unfallreparatur über Lackierungen bis zur kompletten Karosseriearbeiten – wir bringen Ihr Fahrzeug wieder in Bestform. Präzise Arbeit mit modernster Technik.",
      highlights: ["Unfallschadenbehebung", "Lackierung & Spotrepair", "Delle & Beulendoktor"],
    },
    {
      slug: "autoglas",
      title: "Autoglas",
      bild: "https://r2.kuwezu.de/bibliothek/Autoglas/1777829664081-autoglas_reparatur.webp",
      description: "Steinschlag oder Glasschaden? Wir reparieren oder tauschen Windschutzscheiben und alle Autogläser fachgerecht aus. Schnell, sauber und versicherungskonform.",
      highlights: ["Steinschlagreparatur", "Scheibentausch", "Versicherungsabwicklung"],
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
