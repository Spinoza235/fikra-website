"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Play,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  X,
  ExternalLink,
} from "lucide-react";
import { useState, useRef } from "react";

type Project = {
  id: number;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription?: string;
  images: string[];
  isVideo?: boolean;
  videoSrc?: string;
  url?: string; // lien vers le site en ligne, si applicable
};

const projects: Project[] = [
  {
    id: 1,
    title: "HopeStock",
    category: "Application desktop",
    shortDescription:
      "Une solution de gestion de boutique 100% hors-ligne, pensée pour le quotidien du commerce africain — négociation de prix, crédits clients et assistant IA intégré.",
    fullDescription:
      "HopeStock est une application de bureau conçue pour répondre aux vraies réalités du commerce de détail en Afrique — pas une adaptation d'un logiciel occidental, mais un outil pensé dès le départ pour ce contexte. Elle fonctionne entièrement hors-ligne : aucune connexion internet requise pour vendre, suivre son stock ou consulter ses finances, ce qui la rend fiable même dans les zones à connectivité limitée.\n\nDeux fonctionnalités reflètent particulièrement cette approche africaine : la gestion de la négociation de prix, pour accompagner la pratique courante du marchandage en boutique, et un système de crédit client pour les clients qui repartent avec un produit sans payer immédiatement et règlent plus tard.\n\nL'application intègre aussi un assistant IA consultable depuis le tableau de bord, capable de répondre en langage naturel à des questions sur les ventes, le stock ou les finances de la boutique.\n\nHopeStock n'est pas resté un projet de démonstration : l'application a été développée et déployée pour un client réel, une boutique d'informatique et d'électronique, qui l'utilise aujourd'hui au quotidien pour gérer ses ventes et son stock.\n\nParmi les autres fonctionnalités : historique des ventes mois par mois, système de retour produit, génération de reçus avec QR code, sauvegardes et export de rapports mensuels.",
    images: [
      "/images/portfolio/hopestock-1.png",
      "/images/portfolio/hopestock-2.png",
      "/images/portfolio/hopestock-3.png",
      "/images/portfolio/hopestock-4.png",
      "/images/portfolio/hopestock-5.png",
      "/images/portfolio/hopestock-6.png",
      "/images/portfolio/hopestock-7.png",
      "/images/portfolio/hopestock-8.png",
      "/images/portfolio/hopestock-9.png",
      "/images/portfolio/hopestock-10.png",
    ],
    // Pas d'url : application desktop, pas de site web à visiter
  },
  {
    id: 2,
    title: "Jeff Computer",
    category: "Site e-commerce",
    shortDescription:
      "Boutique en ligne pour la vente d'ordinateurs portables reconditionnés — catalogue filtrable par marque, fiches produits détaillées et mise en avant des prix en FCFA, pensée pour convertir vite.",
    fullDescription:
      "Jeff Computer est un site e-commerce développé pour un vendeur d'ordinateurs portables reconditionnés, aujourd'hui en ligne et utilisé activement pour présenter et vendre ses produits.\n\nLe site met l'accent sur la clarté de l'offre : chaque ordinateur est présenté avec ses caractéristiques techniques essentielles (processeur, RAM, stockage, écran) et son prix directement affiché en FCFA, sans étape cachée. Un système de filtre par catégorie (marques HP, Dell, Lenovo...) permet aux visiteurs de retrouver rapidement le modèle qui correspond à leur besoin et à leur budget.\n\nUne barre de recherche, un bouton de contact direct toujours visible et une fiche produit extensible (\"Voir plus\") complètent l'expérience pour faciliter la prise de contact et la conversion, même pour des visiteurs peu familiers avec les achats en ligne.",
    images: [
      "/images/portfolio/jeffcomputer-1.png",
      "/images/portfolio/jeffcomputer-2.png",
      "/images/portfolio/jeffcomputer-3.png",
    ],
    url: "https://vente-ordinateur-jeff.vercel.app/",
  },
  {
    id: 3,
    title: "URCHINGE",
    category: "Site vitrine scientifique",
    shortDescription:
      "Site institutionnel pour un laboratoire de recherche en chimie — mise en valeur des projets, de l'équipe et des équipements, avec un espace recherche filtrable par statut et domaine.",
    fullDescription:
      "URCHINGE est le site vitrine développé pour un laboratoire de recherche en chimie, conçu pour refléter son sérieux scientifique et faciliter la découverte de ses travaux par des partenaires, chercheurs ou étudiants.\n\nLe cœur du site est sa section Projets de Recherche : chaque projet est présenté avec sa durée, le nombre de chercheurs impliqués, son domaine (chimie organique, etc.), son statut d'avancement et ses partenaires institutionnels (comme le CNRS ou l'Université de Paris). Une recherche par mot-clé et des filtres par statut et par domaine permettent de naviguer facilement dans l'ensemble des recherches menées.\n\nLe site regroupe aussi les sections Équipe, Équipement et Actualités, donnant une vue complète et professionnelle de l'activité du laboratoire — un outil de crédibilité autant qu'une vitrine.",
    images: [
      "/images/portfolio/urchinge-1.png",
      "/images/portfolio/urchinge-2.png",
    ],
    url: "https://lab-tmp.vercel.app/",
  },
];

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative flex-shrink-0 w-[280px] sm:w-auto snap-start cursor-pointer"
      onClick={() => onOpen(project)}
    >
      <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-white/10 to-white/10 group-hover:from-primary group-hover:to-primary-light transition-all duration-500">
        <div className="bg-dark rounded-2xl overflow-hidden">
          <div className="relative aspect-[4/3] overflow-hidden bg-white/5">
            <Image
              src={project.images[0]}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

            <span className="absolute top-4 left-4 text-white/40 text-xs font-mono tracking-widest">
              {String(project.id).padStart(2, "0")}
            </span>

            {project.images.length > 1 && (
              <span className="absolute top-4 right-4 text-white/70 text-[10px] font-mono bg-black/40 backdrop-blur px-2 py-1 rounded-full">
                {project.images.length} photos
              </span>
            )}

            {project.isVideo && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-primary/90 backdrop-blur flex items-center justify-center scale-90 group-hover:scale-100 transition-transform duration-300">
                  <Play className="w-5 h-5 text-white ml-0.5" fill="white" />
                </div>
              </div>
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
            <p className="text-muted text-sm leading-relaxed line-clamp-2">
              {project.shortDescription}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const [imgIndex, setImgIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const next = () => setImgIndex((i) => (i + 1) % project.images.length);
  const prev = () =>
    setImgIndex((i) => (i - 1 + project.images.length) % project.images.length);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-dark border border-white/10 rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* CAROUSEL */}
        {project.isVideo && project.videoSrc ? (
          <div className="aspect-video bg-black">
            <video src={project.videoSrc} controls autoPlay className="w-full h-full" />
          </div>
        ) : (
          <div className="relative aspect-[16/10] bg-black">
           <Image
              src={project.images[imgIndex]}
              alt={`${project.title} — image ${imgIndex + 1}`}
              fill
              className="object-contain"
            />

            {project.images.length > 1 && (
              <>
                <button
                  onClick={prev}
                  aria-label="Image précédente"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 backdrop-blur flex items-center justify-center text-white hover:bg-primary transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={next}
                  aria-label="Image suivante"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 backdrop-blur flex items-center justify-center text-white hover:bg-primary transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {project.images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setImgIndex(i)}
                      aria-label={`Aller à l'image ${i + 1}`}
                      className={`h-1.5 rounded-full transition-all ${
                        i === imgIndex ? "w-5 bg-primary" : "w-1.5 bg-white/40"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}

            <button
              onClick={onClose}
              aria-label="Fermer"
              className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/50 backdrop-blur flex items-center justify-center text-white hover:bg-primary transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* TEXTE */}
        <div className="p-6">
          <div className="flex items-start justify-between gap-4 mb-1">
            <p className="text-primary-light text-xs font-semibold uppercase tracking-wide">
              {project.category}
            </p>

            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary-light border border-primary/40 hover:border-primary rounded-full px-3 py-1.5 transition-colors flex-shrink-0"
              >
                Voir le site en ligne
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>

          <h3 className="text-white font-bold text-xl mb-3">{project.title}</h3>

          <p
            className={`text-muted text-sm leading-relaxed whitespace-pre-line ${
              expanded ? "" : "line-clamp-3"
            }`}
          >
            {project.fullDescription ?? project.shortDescription}
          </p>

          {project.fullDescription && (
            <button
              onClick={() => setExpanded((e) => !e)}
              className="mt-3 text-primary text-sm font-medium hover:text-primary-light transition-colors"
            >
              {expanded ? "Lire moins" : "Lire plus"}
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default function PortfolioContent() {
  const [openProject, setOpenProject] = useState<Project | null>(null);
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
            <ProjectCard key={project.id} project={project} index={i} onOpen={setOpenProject} />
          ))}
        </div>
      </section>

      {/* DESKTOP/TABLETTE : grille */}
      <section className="hidden sm:block px-6 py-20">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} onOpen={setOpenProject} />
          ))}
        </div>
      </section>

      {/* MODALE PROJET (carousel + lire plus / vidéo) */}
      <AnimatePresence>
        {openProject && (
          <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />
        )}
      </AnimatePresence>

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