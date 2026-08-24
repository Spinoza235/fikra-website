import type { Metadata } from "next";
import PortfolioContent from "./PortfolioContent";

export const metadata: Metadata = {
  title: "Réalisations — Nos projets | Fikra Tech",
  description:
    "Découvrez les projets réalisés par Fikra Tech : sites web, applications sur mesure et solutions d'intelligence artificielle pour des entreprises au Tchad.",
  openGraph: {
    title: "Nos réalisations — Fikra Tech",
    description: "Sites web, applications et projets IA réalisés pour nos clients.",
  },
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}