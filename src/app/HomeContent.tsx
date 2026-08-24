"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Globe, Code2, TrendingUp, Brain } from "lucide-react";
import ServiceCard from "@/src/components/ServiceCard";
import GridBackground from "@/src/components/GridBackground";
import Image from "next/image";
import Testimonials from "../components/Testimonials";

const services = [
  {
    icon: Globe,
    title: "Création de sites web",
    description: "Des sites vitrines et e-commerce rapides, modernes et responsives, conçus pour convertir vos visiteurs en clients.",
  },
  {
    icon: Code2,
    title: "Développement sur mesure",
    description: "Des applications et outils métiers construits précisément autour de vos besoins, de la conception au déploiement.",
  },
  {
    icon: TrendingUp,
    title: "Digitalisation d'entreprise",
    description: "Nous structurons et digitalisons vos processus internes pour gagner en efficacité et en rigueur au quotidien.",
  },
  {
    icon: Brain,
    title: "Intelligence Artificielle",
    description: "Des solutions d'IA appliquées à vos besoins réels : automatisation intelligente, analyse de données, assistants conversationnels.",
  },
];

export default function HomeContent() {
  return (
    <div className="bg-dark">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-dark to-[#1A1A2E] px-6 py-24 md:py-32">
        <GridBackground />
        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Texte */}
          <div className="text-center lg:text-left">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-4"
            >
              Fikra Tech · Tchad
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
            >
              L&apos;expertise technique au service de{" "}
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                votre croissance.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted text-lg max-w-xl mx-auto lg:mx-0 mb-10"
            >
              Fikra Tech conçoit des sites web, des applications sur mesure et des solutions
              d&apos;intelligence artificielle pour accompagner la transformation numérique des
              entreprises au Tchad.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="/contact"
                className="bg-primary hover:bg-primary-light text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300"
              >
                Discuter de mon projet
              </Link>
              <Link
                href="/services"
                className="border border-white/20 hover:border-primary text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300"
              >
                Découvrir nos services
              </Link>
            </motion.div>
          </div>

          {/* Illustration - masquée sur mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:flex justify-center items-center relative"
          >
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
            <motion.div
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <Image
                src="/fikra-logo.png"
                alt="Fikra Tech illustration"
                width={380}
                height={420}
                className="w-full max-w-sm drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Notre expertise</h2>
            <p className="text-muted max-w-xl mx-auto">
              Une gamme de services conçue pour accompagner chaque étape de votre transformation
              numérique.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.title} index={i} {...service} />
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* CTA FINAL */}
      <section className="px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto bg-gradient-to-r from-primary to-primary-light rounded-3xl px-8 py-14 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Un projet en tête ? Échangeons.
          </h2>
          <p className="text-white/90 max-w-xl mx-auto mb-8">
            Décrivez-nous votre besoin, nous revenons vers vous avec une proposition claire et
            adaptée à votre budget.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-light transition-colors duration-300"
          >
            Contactez-nous
          </Link>
        </motion.div>
      </section>
    </div>
  );
}