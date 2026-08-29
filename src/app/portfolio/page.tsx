import type { Metadata } from "next";
import PortfolioContent from "./PortfolioContent";
import { defaultOpenGraph } from "@/src/lib/seo";

export const metadata: Metadata = {
  title: "Réalisations — Nos projets",
  description:
    "Découvrez les projets réalisés par Fikra Tech : sites web, applications sur mesure et solutions d'intelligence artificielle pour des entreprises au Tchad.",
  openGraph: {
    ...defaultOpenGraph,
    title: "Nos réalisations — Fikra Tech",
    description: "Sites web, applications et projets IA réalisés pour nos clients.",
  },
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}