import type { Metadata } from "next";
import AProposContent from "./AProposContent";
import { defaultOpenGraph } from "@/src/lib/seo";

export const metadata: Metadata = {
  title: "À propos — Notre histoire et notre équipe",
  description:
    "Découvrez l'équipe fondatrice de Fikra Tech, startup tchadienne spécialisée en développement web et intelligence artificielle, et notre vision pour la transformation numérique au Tchad.",
  openGraph: {
    ...defaultOpenGraph,
    title: "À propos de Fikra Tech",
    description: "L'équipe fondatrice de Fikra Tech et notre vision pour le Tchad.",
  },
};

export default function AProposPage() {
  return <AProposContent />;
}