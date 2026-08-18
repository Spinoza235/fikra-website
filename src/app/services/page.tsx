"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Globe, Code2, TrendingUp, Brain } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Création de sites web",
    description: "Un site vitrine ou e-commerce rapide, moderne et pensé pour convertir vos visiteurs en clients.",
    features: [
      "Design sur mesure, responsive mobile",
      "Optimisation SEO de base incluse",
      "Formulaire de contact et intégration WhatsApp",
      "Hébergement et mise en ligne accompagnés",
    ],
  },
  {
    icon: Code2,
    title: "Développement sur mesure",
    description: "Des applications web et outils métiers construits précisément autour de vos besoins réels.",
    features: [
      "Applications web internes ou grand public",
      "Intégration à vos outils existants",
      "Code propre, documenté et évolutif",
      "Accompagnement après livraison",
    ],
  },
  {
    icon: TrendingUp,
    title: "Digitalisation d'entreprise",
    description: "Nous transformons vos processus papier ou manuels en outils numériques simples à utiliser.",
    features: [
      "Audit de vos processus actuels",
      "Digitalisation de la gestion et du suivi client",
      "Formation de vos équipes aux nouveaux outils",
      "Solutions adaptées même en connexion limitée",
    ],
  },
  {
    icon: Brain,
    title: "Intelligence Artificielle",
    description: "Nous concevons des solutions d'IA appliquées à des problématiques concrètes d'entreprise, portées par une expertise académique de niveau Master en Intelligence Artificielle.",
    features: [
      "Assistants conversationnels (chatbots) sur mesure",
      "Automatisation intelligente de tâches et de processus métier",
      "Analyse et valorisation de vos données d'entreprise",
      "Intégration de modèles d'IA dans vos outils existants",
    ],
  },
];

export default function Services() {
  return (
    <div className="bg-dark">
      {/* HEADER DE PAGE */}
      <section className="px-6 py-20 text-center border-b border-white/10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          Nos <span className="text-primary">services</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-muted max-w-xl mx-auto"
        >
          Quatre domaines d&apos;expertise pour accompagner votre transformation numérique, du site
          vitrine à l&apos;intelligence artificielle appliquée.
        </motion.p>
      </section>

      {/* LISTE DETAILLEE */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto flex flex-col gap-16">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`flex flex-col md:flex-row gap-8 items-start ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1">
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-light mb-4">
                  <service.icon className="w-7 h-7 text-white" strokeWidth={2} />
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">{service.title}</h2>
                <p className="text-muted leading-relaxed">{service.description}</p>
              </div>

              <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-6 w-full">
                <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">
                  Ce que ça inclut
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-white text-sm">
                      <span className="text-primary">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Un besoin spécifique à évaluer ?
        </h2>
        <p className="text-muted max-w-xl mx-auto mb-8">
          Décrivez-nous votre projet, nous vous proposons une solution adaptée.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-primary hover:bg-primary-light text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300"
        >
          Discuter de mon projet
        </Link>
      </section>
    </div>
  );
}