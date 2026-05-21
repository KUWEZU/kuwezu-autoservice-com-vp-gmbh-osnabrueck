/**
 * client.ts — Automatisch generiert von KUWEZU
 * Erstellt: 2026-05-21T14:58:49.566Z
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
    untertext: "Von Karosserie bis Autoglas – wir kümmern uns um Ihr Fahrzeug. Professionell, schnell und mit kostenlosem Ersatzwagen.",
    ctaPrimary: { text: "Termin vereinbaren", href: "#kontakt" },
    ctaSecondary: { text: "Leistungen ansehen", href: "#leistungen" },
  },

  // ── Über uns ───────────────────────────────────────────────────────────────
  ueberUns: {
    bild: "https://r2.kuwezu.de/kunden/73/ueber-uns.webp",
    ueberschrift: "Ihr zuverlässiger Autoservice im Herzen von Osnabrück",
    text1: "Als autoservice.com VP GmbH sind wir Ihre kompetenten Ansprechpartner rund um Karosserie, Autoglas und Fahrzeugreparaturen in Osnabrück. Mit moderner Werkstattausstattung und langjähriger Erfahrung sorgen wir dafür, dass Ihr Fahrzeug schnell und fachgerecht wieder einsatzbereit ist.",
    text2: "Unser Anspruch ist ehrliche Beratung und transparente Arbeit. Wir nehmen uns Zeit für Ihre Anliegen und stellen Ihnen während der Reparatur selbstverständlich einen kostenlosen Ersatzwagen zur Verfügung.",
    tags: ["Meisterbetrieb", "Kostenloser Ersatzwagen", "Moderne Werkstatt", "Faire Preise"],
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
      description: "Während Ihr Fahrzeug bei uns in der Werkstatt ist, bleiben Sie mobil. Wir stellen Ihnen kostenlos einen Ersatzwagen zur Verfügung, damit Sie Ihren Alltag ohne Einschränkungen weiterführen können.",
      highlights: ["Kostenlose Bereitstellung", "Verschiedene Fahrzeugklassen", "Schnelle Übergabe"],
    },
    {
      slug: "karosserie",
      title: "Karosserie",
      bild: "https://r2.kuwezu.de/bibliothek/Karosserie/1777878013146-leistung_karosserie.webp",
      description: "Ob Unfallschaden, Delle oder Rost – unsere Karosserie-Experten bringen Ihr Fahrzeug wieder in Form. Mit modernster Technik und präziser Handwerkskunst sorgen wir für ein makelloses Ergebnis.",
      highlights: ["Unfallreparaturen", "Dellen- und Rostbeseitigung", "Lackierung in Originalfarbe"],
    },
    {
      slug: "autoglas",
      title: "Autoglas",
      bild: "https://r2.kuwezu.de/bibliothek/Autoglas/1777829664081-autoglas_reparatur.webp",
      description: "Von Steinschlag bis Kompletttausch: Wir reparieren und erneuern Autoscheiben aller Art. Schnelle Terminvergabe und professionelle Ausführung garantieren Ihre Sicherheit im Straßenverkehr.",
      highlights: ["Steinschlagreparatur", "Scheibentausch", "Kalibrierung Fahrerassistenz"],
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
  newsEnabled: false as boolean,
} as const;

export type LeistungConfig = (typeof client.leistungen)[number];
