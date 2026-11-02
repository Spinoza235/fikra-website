import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import Chatbot from "@/src/components/Chatbot";
import MotionProvider from "@/src/components/MotionProvider";
import { LanguageProvider } from "@/src/lib/i18n";
import { defaultOpenGraph, organizationJsonLd, SITE_URL } from "@/src/lib/seo";
import { site } from "@/src/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const arabic = Noto_Sans_Arabic({
  variable: "--font-noto-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Fikra Tech | Agence d'intelligence artificielle au Tchad",
    template: "%s | Fikra Tech",
  },
  description: site.description,
  alternates: { canonical: "/" },
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
      dir="ltr"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${arabic.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-dark text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <LanguageProvider>
          <MotionProvider>
            <Header />
            <main className="flex-1 bg-dark">{children}</main>
            <Footer />
            <Chatbot />
          </MotionProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}