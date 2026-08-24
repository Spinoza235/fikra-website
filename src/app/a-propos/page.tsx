import type { Metadata } from "next";
import AProposContent from "./AProposContent";

export const metadata: Metadata = {
  title: "À propos — Notre histoire et notre équipe | Fikra Tech",
  description:
    "Découvrez l'équipe fondatrice de Fikra Tech, startup tchadienne spécialisée en développement web et intelligence artificielle, et notre vision pour la transformation numérique au Tchad.",
  openGraph: {
    title: "À propos de Fikra Tech",
    description:
      "L'équipe fondatrice de Fikra Tech et notre vision pour le Tchad.",
  },
};

export default function AProposPage() {
  return <AProposContent />;
}