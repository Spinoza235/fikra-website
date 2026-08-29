import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";
import { defaultOpenGraph } from "@/src/lib/seo";

export const metadata: Metadata = {
  title: "Services — Sites web, développement, IA",
  description:
    "Création de sites web, développement sur mesure, digitalisation d'entreprise et solutions d'intelligence artificielle. Découvrez nos services à N'Djamena, Tchad.",
  openGraph: {
    ...defaultOpenGraph,
    title: "Nos services — Fikra Tech",
    description:
      "Sites web, développement sur mesure, digitalisation et intelligence artificielle.",
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}