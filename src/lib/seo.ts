import { site } from "./site";

export const SITE_URL = site.url;

export const defaultOpenGraph = {
  siteName: site.name,
  locale: "fr_FR",
  type: "website" as const,
  images: [
    {
      // Idéalement une image 1200×630 (logo + phrase d'accroche) : /og-image.png
      url: "/fikra-logo.png",
      width: 512,
      height: 512,
      alt: `${site.name}, agence d'intelligence artificielle au Tchad`,
    },
  ],
};

// Données structurées : aident Google à comprendre qui vous êtes et où vous êtes.
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  description: site.description,
  url: site.url,
  logo: `${site.url}/fikra-logo.png`,
  image: `${site.url}/fikra-logo.png`,
  email: site.email,
  telephone: site.phoneDisplay.replace(/\s/g, ""),
  address: {
    "@type": "PostalAddress",
    addressLocality: site.city,
    addressCountry: "TD",
  },
  areaServed: { "@type": "Country", name: "Tchad" },
  knowsLanguage: ["fr", "ar"],
  knowsAbout: [
    "Intelligence artificielle",
    "Chatbot WhatsApp",
    "Numérisation d'archives",
    "Analyse de données",
    "Création de sites web",
    "Développement d'applications",
  ],
  sameAs: Object.values(site.socials).filter(Boolean),
};
