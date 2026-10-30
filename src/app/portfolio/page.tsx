import type { Metadata } from "next";
import PortfolioContent from "./PortfolioContent";
import { defaultOpenGraph } from "@/src/lib/seo";

export const metadata: Metadata = {
  title: "Réalisations, logiciels avec IA, sites web et applications",
  description:
    "Projets réalisés par Fikra Tech au Tchad : HopeStock, logiciel de gestion hors ligne avec assistant IA, sites e-commerce et sites institutionnels.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    ...defaultOpenGraph,
    title: "Nos réalisations, Fikra Tech",
    description: "Logiciels avec IA, sites e-commerce et sites institutionnels livrés à nos clients.",
  },
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}
