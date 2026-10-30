import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";
import { defaultOpenGraph } from "@/src/lib/seo";
import { dict } from "@/src/lib/translations";

export const metadata: Metadata = {
  title: "Services IA, chatbot WhatsApp, numérisation et sites web au Tchad",
  description:
    "Chatbots WhatsApp en français et arabe tchadien, numérisation d'archives, analyse de données, audit IA, sites web, applications et formations à l'IA à N'Djamena.",
  alternates: { canonical: "/services" },
  openGraph: {
    ...defaultOpenGraph,
    title: "Nos services, Fikra Tech",
    description:
      "Automatisation intelligente, solutions IA sur mesure, sites et applications, formation à l'IA.",
  },
};

// Questions fréquentes lisibles par Google (version française)
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: dict.fr.servicesPage.faq.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <ServicesContent />
    </>
  );
}