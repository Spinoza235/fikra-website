"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ExternalLink, Check, Images, Sparkles } from "lucide-react";
import { projects, type Project } from "@/src/lib/projects";
import { CtaBand } from "@/src/components/Blocks";
import GridBackground from "@/src/components/GridBackground";
import Reveal from "@/src/components/Reveal";

/* Cadre « fenêtre de navigateur / logiciel » autour des captures */
function DeviceFrame({ project, onOpen }: { project: Project; onOpen: () => void }) {
  const label = project.url ? project.url.replace(/^https?:\/\//, "").replace(/\/$/, "") : project.title;
  return (
    <button
      onClick={onOpen}
      className="group relative block w-full text-left"
      aria-label={`Voir les captures du projet ${project.title}`}
    >
      {/* halo */}
      <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/40 to-primary-light/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#161626] shadow-2xl shadow-black/50 transition-transform duration-500 group-hover:-translate-y-1.5">
        <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-3 truncate rounded-md bg-white/5 px-3 py-1 text-xs text-muted">{label}</span>
        </div>
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={project.images[0]}
            alt={`Capture du projet ${project.title}`}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-end justify-end bg-gradient-to-t from-black/60 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-dark">
              <Images className="h-3.5 w-3.5" aria-hidden="true" />
              {project.images.length} captures
            </span>
          </div>
        </div>
      </div>
    </button>
  );
}

function ProjectDetails({ project, onOpen, featured }: { project: Project; onOpen: () => void; featured?: boolean }) {
  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        {featured && (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-primary to-primary-light px-3 py-1 text-xs font-semibold text-white">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Projet phare
          </span>
        )}
        <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary-light">
          {project.category}
        </span>
      </div>

      <h2 className={`mt-5 font-bold text-white ${featured ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl"}`}>
        {project.title}
      </h2>
      <p className="mt-4 text-lg leading-relaxed text-muted">{project.shortDescription}</p>

      {project.highlights && (
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {project.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2.5 text-[15px] text-white/90">
              <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/20">
                <Check className="h-3 w-3 text-primary-light" aria-hidden="true" />
              </span>
              {h}
            </li>
          ))}
        </ul>
      )}

      {project.tags && (
        <ul className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <li key={t} className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-muted">
              {t}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-8 flex flex-wrap gap-3">
        <button
          onClick={onOpen}
          className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-primary hover:bg-primary/20"
        >
          <Images className="h-4 w-4" aria-hidden="true" />
          Voir les captures
        </button>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary-light px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-transform hover:-translate-y-0.5"
          >
            Voir le site en ligne
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        )}
      </div>
    </div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [imgIndex, setImgIndex] = useState(0);
  const count = project.images.length;
  const next = useCallback(() => setImgIndex((i) => (i + 1) % count), [count]);
  const prev = useCallback(() => setImgIndex((i) => (i - 1 + count) % count), [count]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, next, prev]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        className="w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-3 flex items-center justify-between text-white">
          <p className="font-semibold">
            {project.title} <span className="ml-2 text-sm font-normal text-muted">{imgIndex + 1} / {count}</span>
          </p>
          <button onClick={onClose} aria-label="Fermer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-primary">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b14]">
          <AnimatePresence mode="wait">
            <motion.div
              key={imgIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0"
            >
              <Image
                src={project.images[imgIndex]}
                alt={`${project.title}, capture ${imgIndex + 1} sur ${count}`}
                fill
                sizes="1024px"
                className="object-contain"
              />
            </motion.div>
          </AnimatePresence>
          {count > 1 && (
            <>
              <button onClick={prev} aria-label="Capture précédente" className="absolute top-1/2 left-3 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur hover:bg-primary">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button onClick={next} aria-label="Capture suivante" className="absolute top-1/2 right-3 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur hover:bg-primary">
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}
        </div>

        {count > 1 && (
          <div className="scrollbar-hide mt-3 flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
            {project.images.map((src, i) => (
              <button
                key={src}
                onClick={() => setImgIndex(i)}
                aria-label={`Afficher la capture ${i + 1}`}
                className={`relative h-14 w-24 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                  i === imgIndex ? "border-primary-light opacity-100" : "border-transparent opacity-50 hover:opacity-90"
                }`}
              >
                <Image src={src} alt="" fill sizes="96px" className="object-cover" />
              </button>
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function PortfolioContent() {
  const [openProject, setOpenProject] = useState<Project | null>(null);
  const close = useCallback(() => setOpenProject(null), []);
  const [featured, ...others] = projects;

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-dark to-[#1A1A2E] px-4 pt-16 pb-20 sm:px-6 md:pt-24 md:pb-24">
        <GridBackground />
        <div aria-hidden="true" className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[620px] -translate-x-1/2 rounded-full bg-primary/25 blur-[120px]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <Reveal>
            <h1 className="text-4xl leading-[1.08] font-bold md:text-6xl">
              Des projets livrés,{" "}
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                utilisés chaque jour
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              Logiciels avec IA, sites e-commerce et sites institutionnels : voici ce que nous avons
              construit pour nos clients.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <ul className="mt-8 flex flex-wrap justify-center gap-3">
              {[`${projects.length} projets en ligne ou en service`, "IA intégrée", "Pensés pour le Tchad"].map((t) => (
                <li key={t} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 backdrop-blur">
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* PROJET PHARE */}
      {featured && (
        <section className="px-4 py-20 sm:px-6 md:py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
            <Reveal>
              <DeviceFrame project={featured} onOpen={() => setOpenProject(featured)} />
            </Reveal>
            <Reveal delay={0.15}>
              <ProjectDetails project={featured} featured onOpen={() => setOpenProject(featured)} />
            </Reveal>
          </div>
        </section>
      )}

      {/* AUTRES PROJETS, en alternance */}
      {others.map((project, i) => (
        <section key={project.id} className="relative border-t border-white/10 px-4 py-20 sm:px-6 md:py-28">
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute top-1/3 h-72 w-72 rounded-full bg-primary/10 blur-[100px] ${i % 2 === 0 ? "right-0" : "left-0"}`}
          />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal className={i % 2 === 0 ? "lg:order-2" : ""}>
              <DeviceFrame project={project} onOpen={() => setOpenProject(project)} />
            </Reveal>
            <Reveal delay={0.15} className={i % 2 === 0 ? "lg:order-1" : ""}>
              <ProjectDetails project={project} onOpen={() => setOpenProject(project)} />
            </Reveal>
          </div>
        </section>
      ))}

      <AnimatePresence>
        {openProject && <ProjectModal project={openProject} onClose={close} />}
      </AnimatePresence>

      <CtaBand title="Votre projet pourrait être le prochain" />
    </>
  );
}