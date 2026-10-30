import type { Metadata } from "next";
import HomeContent from "./HomeContent";
import { defaultOpenGraph } from "@/src/lib/seo";
import { site } from "@/src/lib/site";

export const metadata: Metadata = {
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    ...defaultOpenGraph,
    title: "Fikra Tech, agence d'intelligence artificielle au Tchad",
    description:
      "Chatbots WhatsApp, numérisation d'archives, analyse de données, sites et applications pour les organisations du Tchad.",
  },
};

export default function HomePage() {
  return <HomeContent />;
}
