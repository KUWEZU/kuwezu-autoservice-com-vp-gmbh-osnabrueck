/**
 * client.ts — Automatisch generiert von KUWEZU
 * Erstellt: 2026-05-21T12:44:25.088Z
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
    untertext: "Vom Steinschlag bis zur Karosserie-Reparatur – bei uns ist Ihr Fahrzeug in besten Händen. Professionell, zuverlässig und fair.",
    ctaPrimary: { text: "Termin vereinbaren", href: "#kontakt" },
    ctaSecondary: { text: "Leistungen ansehen", href: "#leistungen" },
  },

  // ── Über uns ───────────────────────────────────────────────────────────────
  ueberUns: {
    bild: "https://r2.kuwezu.de/kunden/73/ueber-uns.webp",
    ueberschrift: "Ihre Autowerkstatt mitten in Osnabrück",
    text1: "Die autoservice.com VP GmbH ist Ihr kompetenter Partner für alle Belange rund um Ihr Fahrzeug. Ob Karosserieschaden, Autoglas-Reparatur oder die schnelle Bereitstellung eines Ersatzwagens – wir kümmern uns um alles. Mit moderner Technik und geschultem Fachpersonal sorgen wir dafür, dass Sie schnell wieder mobil sind.",
    text2: "Qualität und Kundenzufriedenheit stehen bei uns an erster Stelle. Wir arbeiten transparent, halten Termine ein und beraten Sie ehrlich. Ihr Auto ist bei uns in guten Händen – versprochen.",
    tags: ["Meisterbetrieb", "Moderne Ausstattung", "Schnelle Termine", "Faire Preise"],
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
      description: "Damit Sie während der Reparatur mobil bleiben, stellen wir Ihnen einen zuverlässigen Ersatzwagen zur Verfügung. Unkompliziert und zu fairen Konditionen.",
      highlights: ["Moderne Fahrzeugflotte", "Flexible Mietdauer", "Direkte Verfügbarkeit"],
    },
    {
      slug: "karosserie",
      title: "Karosserie",
      bild: "https://r2.kuwezu.de/bibliothek/Karosserie/1777878013146-leistung_karosserie.webp",
      description: "Von der Delle bis zum Unfallschaden – unsere Karosserie-Experten bringen Ihr Fahrzeug wieder in Form. Mit Fachwissen, präziser Arbeit und Originalteilen.",
      highlights: ["Unfallreparaturen", "Dellen & Beulen", "Lackierarbeiten"],
    },
    {
      slug: "autoglas",
      title: "Autoglas",
      bild: "https://r2.kuwezu.de/bibliothek/Autoglas/1777829664081-autoglas_reparatur.webp",
      description: "Steinschlag oder Riss in der Scheibe? Wir reparieren oder tauschen Ihr Autoglas fachgerecht aus. Schnell, sauber und mit direkter Versicherungsabrechnung.",
      highlights: ["Steinschlag-Reparatur", "Scheibenaustausch", "Versicherungsabwicklung"],
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
