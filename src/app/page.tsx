import type { Metadata } from "next";
import HomeContent from "./HomeContent";
import { defaultOpenGraph } from "@/src/lib/seo";

export const metadata: Metadata = {
  description:
    "Fikra Tech accompagne les entreprises tchadiennes dans leur transformation numérique : création de sites web, développement sur mesure, digitalisation et intelligence artificielle.",
  openGraph: {
    ...defaultOpenGraph,
    title: "Fikra Tech — Sites web, développement & IA au Tchad",
    description:
      "Fikra Tech accompagne les entreprises tchadiennes dans leur transformation numérique.",
  },
};

export default function HomePage() {
  return <HomeContent />;
}