/**
 * client.ts — Automatisch generiert von KUWEZU
 * Erstellt: 2026-05-21T13:52:39.227Z
 * Kundennummer: 73
 *
 * Alle Texte, Bilder und Einstellungen werden hier gepflegt.
 */

export const client = {
  // ── Allgemein ──────────────────────────────────────────────────────────────
  name: "autoservice.com VP GmbH",
  branche: "Autowerkstatt",
  ort: "Osnabrück",
  slogan: "mit Ersatzwagen",
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
    ueberschrift: "Ihre Autowerkstatt in Osnabrück mit Ersatzwagen",
    ueberschriftHighlight: "mit Ersatzwagen",
    untertext: "Von Karosserie über Autoglas bis Ersatzwagen – wir halten Sie mobil. Schnelle Termine und transparente Preise.",
    ctaPrimary: { text: "Termin vereinbaren", href: "#kontakt" },
    ctaSecondary: { text: "Leistungen ansehen", href: "#leistungen" },
  },

  // ── Über uns ───────────────────────────────────────────────────────────────
  ueberUns: {
    bild: "https://r2.kuwezu.de/kunden/73/ueber-uns.webp",
    ueberschrift: "Ihre Autowerkstatt aus Osnabrück",
    text1: "Bei autoservice.com VP GmbH kümmern wir uns um Ihr Fahrzeug – von der Karosseriereparatur über den Autoglasaustausch bis zum vollständigen Werkstattservice. Als verlässlicher Partner in Osnabrück bieten wir Ihnen moderne Technik und faire Preise. Damit Sie während der Reparatur mobil bleiben, stellen wir Ihnen gerne einen Ersatzwagen zur Verfügung.",
    text2: "Wir arbeiten präzise, transparent und halten Sie immer auf dem Laufenden. Ihr Auto ist bei uns in guten Händen – versprochen. Vereinbaren Sie einfach einen Termin und überzeugen Sie sich selbst.",
    tags: ["Ersatzwagen inklusive", "Karosserie-Experten", "Autoglas-Service", "Transparente Preise"],
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
      description: "Während Ihr Fahrzeug bei uns repariert wird, bleiben Sie mobil. Wir stellen Ihnen einen Ersatzwagen zur Verfügung – unkompliziert und zuverlässig.",
      highlights: ["Sofort verfügbar", "Verschiedene Fahrzeugklassen", "Transparente Abwicklung"],
    },
    {
      slug: "karosserie",
      title: "Karosserie",
      bild: "https://r2.kuwezu.de/bibliothek/Karosserie/1777878013146-leistung_karosserie.webp",
      description: "Von kleinen Dellen bis zur kompletten Unfallreparatur – unsere Karosserie-Experten bringen Ihr Fahrzeug wieder in Form. Mit modernen Reparaturverfahren und Original-Ersatzteilen.",
      highlights: ["Unfall-Instandsetzung", "Dellen- und Lackarbeiten", "Versicherungsabwicklung"],
    },
    {
      slug: "autoglas",
      title: "Autoglas",
      bild: "https://r2.kuwezu.de/bibliothek/Autoglas/1777829664081-autoglas_reparatur.webp",
      description: "Steinschlag oder Riss in der Scheibe? Wir reparieren oder tauschen Autoglas schnell und fachgerecht aus. Für klare Sicht und Ihre Sicherheit.",
      highlights: ["Steinschlagreparatur", "Scheibenaustausch", "Kalibrierung von Fahrerassistenzsystemen"],
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
