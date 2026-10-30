import type { Metadata } from "next";
import ContactContent from "./ContactContent";
import { defaultOpenGraph } from "@/src/lib/seo";

export const metadata: Metadata = {
  title: "Contact, parlons de votre projet IA ou numérique",
  description:
    "Contactez Fikra Tech à N'Djamena par WhatsApp ou par message : chatbot, numérisation, analyse de données, site web ou formation. Premier échange gratuit.",
  alternates: { canonical: "/contact" },
  openGraph: {
    ...defaultOpenGraph,
    title: "Contactez Fikra Tech",
    description: "Premier échange gratuit, sur WhatsApp ou par message.",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
