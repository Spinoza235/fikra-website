import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact — Discutons de votre projet | Fikra Tech",
  description:
    "Contactez Fikra Tech pour discuter de votre projet de site web, développement sur mesure ou digitalisation. Réponse rapide, devis adapté à votre budget.",
  openGraph: {
    title: "Contactez Fikra Tech",
    description: "Discutons de votre projet, réponse rapide et devis adapté.",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}