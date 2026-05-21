/**
 * client.ts — Automatisch generiert von KUWEZU
 * Erstellt: 2026-05-21T12:08:04.024Z
 * Kundennummer: 72
 *
 * Alle Texte, Bilder und Einstellungen werden hier gepflegt.
 */

export const client = {
  // ── Allgemein ──────────────────────────────────────────────────────────────
  name: "autoservice.com VP GmbH",
  branche: "Autowerkstatt",
  ort: "Osnabrück",
  slogan: "alle Fälle",
  adresse: "Doppheide 98, 49084 Osnabrück",
  telefon: "0541 668790",
  email: "",
  website: "",
  logo: "https://r2.kuwezu.de/konzepte/autoteam-plus/logo.svg",
  standort_bild: "https://r2.kuwezu.de/kunden/72/standort.webp",

  // ── Branding ───────────────────────────────────────────────────────────────
  farben: {
    primary: "#95c11f",
    secondary: "#f7a600",
    accent: "#636363",
  },
  // ── Hero ───────────────────────────────────────────────────────────────────
  hero: {
    bild: "https://r2.kuwezu.de/kunden/72/hero.webp",
    overlayOpacity: 0.55, /* fix — nie schwächer, nie überschreibbar */
    ueberschrift: "Ihre Autowerkstatt für alle Fälle",
    ueberschriftHighlight: "alle Fälle",
    untertext: "Professioneller Service für Ihr Fahrzeug in Osnabrück. Von der Achsvermessung bis zum Autoglas – wir sind für Sie da.",
    ctaPrimary: { text: "Termin vereinbaren", href: "#kontakt" },
    ctaSecondary: { text: "Leistungen ansehen", href: "#leistungen" },
  },

  // ── Über uns ───────────────────────────────────────────────────────────────
  ueberUns: {
    bild: "https://r2.kuwezu.de/kunden/72/ueber-uns.webp",
    ueberschrift: "Ihre Autowerkstatt in Osnabrück",
    text1: "Bei autoservice.com VP GmbH dreht sich alles um Ihr Fahrzeug. Als etablierte Werkstatt in Osnabrück bieten wir Ihnen umfassenden Service rund ums Auto – von präziser Achsvermessung über professionelle Autoglasreparatur bis zum zuverlässigen Ersatzwagen. Unser erfahrenes Team sorgt dafür, dass Sie schnell und sicher wieder mobil sind.",
    text2: "Wir legen Wert auf ehrliche Beratung, faire Preise und Termintreue. Ihr Auto ist bei uns in guten Händen – das versprechen wir Ihnen. Überzeugen Sie sich selbst von unserem Service.",
    tags: ["Meisterbetrieb", "Ersatzwagen inklusive", "Schnelle Terminvergabe", "Faire Preise"],
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
      description: "Bleiben Sie mobil, auch während Ihr Fahrzeug bei uns in der Werkstatt ist. Wir stellen Ihnen unkompliziert einen zuverlässigen Ersatzwagen zur Verfügung.",
      highlights: ["Sofort verfügbar", "Faire Konditionen", "Unkomplizierte Abwicklung"],
    },
    {
      slug: "achsvermessung",
      title: "Achsvermessung",
      bild: "https://r2.kuwezu.de/bibliothek/Achsvermessung/1777878369186-leistung_achsvermessung.webp",
      description: "Präzise Achsvermessung für optimales Fahrverhalten und gleichmäßigen Reifenverschleiß. Mit modernster Technik bringen wir Ihr Fahrzeug wieder in die perfekte Spur.",
      highlights: ["Modernste Messtechnik", "Schnelle Durchführung", "Erhöht die Fahrsicherheit"],
    },
    {
      slug: "autoglas",
      title: "Autoglas",
      bild: "https://r2.kuwezu.de/bibliothek/Autoglas/1777829664081-autoglas_reparatur.webp",
      description: "Steinschlag oder Riss in der Scheibe? Wir reparieren oder tauschen Autoglas fachgerecht aus – schnell und sauber. Direktabrechnung mit Ihrer Versicherung möglich.",
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
    facebook:  null as string | null,
    instagram: null as string | null,
  },

  // ── WhatsApp ───────────────────────────────────────────────────────────────
  whatsapp: "+4917621575303" as string,

  // ── Features ───────────────────────────────────────────────────────────────
  newsEnabled: true as boolean,
} as const;

export type LeistungConfig = (typeof client.leistungen)[number];
