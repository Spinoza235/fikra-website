"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Play, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";

const projects = [
  {
    id: 1,
    title: "Projet 1",
    category: "Site vitrine",
    description: "Description courte du projet à remplacer.",
    image: "/portfolio/projet-1.jpg",
    isVideo: false,
  },
  {
    id: 2,
    title: "Projet 2",
    category: "E-commerce",
    description: "Description courte du projet à remplacer.",
    image: "/portfolio/projet-2.jpg",
    isVideo: false,
  },
  {
    id: 3,
    title: "Projet 3",
    category: "Application web",
    description: "Description courte du projet à remplacer.",
    image: "/portfolio/projet-3.jpg",
    isVideo: false,
  },
  {
    id: 4,
    title: "Projet 4",
    category: "Digitalisation",
    description: "Description courte du projet à remplacer.",
    image: "/portfolio/projet-4.jpg",
    isVideo: false,
  },
  {
    id: 5,
    title: "Projet 5",
    category: "Intelligence artificielle",
    description: "Description courte du projet à remplacer.",
    image: "/portfolio/projet-5.jpg",
    isVideo: false,
  },
  {
    id: 6,
    title: "Démonstration produit",
    category: "Vidéo",
    description: "Description courte de la vidéo à remplacer.",
    image: "/portfolio/projet-6-cover.jpg",
    isVideo: true,
    videoSrc: "/portfolio/projet-6.mp4",
  },
];

function ProjectCard({
  project,
  index,
  onPlayVideo,
}: {
  project: (typeof projects)[number];
  index: number;
  onPlayVideo: (id: number) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative flex-shrink-0 w-[280px] sm:w-auto snap-start"
    >
      <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-white/10 to-white/10 group-hover:from-primary group-hover:to-primary-light transition-all duration-500">
        <div className="bg-dark rounded-2xl overflow-hidden">
          <div className="relative aspect-[4/3] overflow-hidden bg-white/5">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

            <span className="absolute top-4 left-4 text-white/40 text-xs font-mono tracking-widest">
              {String(project.id).padStart(2, "0")}
            </span>

            {project.isVideo && (
              <button
                onClick={() => onPlayVideo(project.id)}
                className="absolute inset-0 flex items-center justify-center"
                aria-label="Lire la vidéo"
              >
                <div className="w-14 h-14 rounded-full bg-primary/90 backdrop-blur flex items-center justify-center scale-90 group-hover:scale-100 transition-transform duration-300">
                  <Play className="w-5 h-5 text-white ml-0.5" fill="white" />
                </div>
              </button>
            )}

            <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <p className="text-primary-light text-xs font-semibold uppercase tracking-wide mb-1">
                {project.category}
              </p>
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-white font-semibold text-lg">{project.title}</h3>
                <ArrowUpRight className="w-5 h-5 text-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0" />
              </div>
            </div>
          </div>

          <div className="p-5 pt-4">
            <p className="text-muted text-sm leading-relaxed">{project.description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function PortfolioContent() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 300;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-dark">
      {/* HEADER DE PAGE */}
      <section className="px-6 py-20 text-center border-b border-white/10">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-4"
        >
          Portfolio
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          Ce que nous <span className="text-primary">construisons</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-muted max-w-xl mx-auto"
        >
          Chaque projet est une idée transformée en solution concrète. Voici un aperçu de notre
          travail.
        </motion.p>
      </section>

      {/* MOBILE : carrousel horizontal avec flèches */}
      <section className="py-16 sm:hidden">
        <div className="flex items-center justify-between px-6 mb-4">
          <p className="text-muted text-xs uppercase tracking-wide">Faites glisser →</p>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white hover:border-primary hover:text-primary transition-colors"
              aria-label="Précédent"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white hover:border-primary hover:text-primary transition-colors"
              aria-label="Suivant"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto px-6 pb-4 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none" }}
        >
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onPlayVideo={setActiveVideo}
            />
          ))}
        </div>
      </section>

      {/* DESKTOP/TABLETTE : grille */}
      <section className="hidden sm:block px-6 py-20">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onPlayVideo={setActiveVideo}
            />
          ))}
        </div>
      </section>

      {/* MODALE VIDEO */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setActiveVideo(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-3xl aspect-video bg-black rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={projects.find((p) => p.id === activeVideo)?.videoSrc}
              controls
              autoPlay
              className="w-full h-full"
            />
          </motion.div>
        </div>
      )}

      {/* CTA */}
      <section className="px-6 pb-24 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Votre projet pourrait être le prochain
        </h2>
        <p className="text-muted max-w-xl mx-auto mb-8">
          Parlons de vos besoins et voyons comment nous pouvons vous accompagner.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300"
        >
          Démarrer un projet
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}