import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import Chatbot from "@/src/components/Chatbot";
import { defaultOpenGraph } from "@/src/lib/seo";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://fikra-website.vercel.app"),
  title: {
    default: "Fikra Tech | Création de sites web, développement & digitalisation au Tchad",
    template: "%s | Fikra Tech",
  },
  description:
    "Fikra Tech accompagne les entreprises tchadiennes dans leur transformation numérique : création de sites web, développement sur mesure, digitalisation et automatisation.",
  icons: {
    icon: "/fikra-favicon-32.png",
    apple: "/fikra-apple-touch-180.png",
  },
  openGraph: defaultOpenGraph,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-dark">
        <Header />
        <main className="flex-1 pt-20 bg-dark">{children}</main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}