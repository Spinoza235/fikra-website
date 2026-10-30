import type { Metadata } from "next";
import AProposContent from "./AProposContent";
import { defaultOpenGraph } from "@/src/lib/seo";

export const metadata: Metadata = {
  title: "À propos, une équipe tchadienne formée en intelligence artificielle",
  description:
    "Fikra Tech est une agence d'intelligence artificielle fondée par trois jeunes Tchadiens formés en IA. Notre mission : rendre l'IA utile et accessible aux organisations du Tchad.",
  alternates: { canonical: "/a-propos" },
  openGraph: {
    ...defaultOpenGraph,
    title: "À propos de Fikra Tech",
    description: "Une équipe tchadienne formée en IA, au service des organisations du Tchad.",
  },
};

export default function AProposPage() {
  return <AProposContent />;
}