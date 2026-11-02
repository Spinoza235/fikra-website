"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ExternalLink, Check, Images, Sparkles, Play } from "lucide-react";
import { projects as rawProjects, localizeProject, type Project } from "@/src/lib/projects";
import { useLang } from "@/src/lib/i18n";
import { CtaBand } from "@/src/components/Blocks";
import GridBackground from "@/src/components/GridBackground";
import Reveal from "@/src/components/Reveal";

/* Cadre « fenêtre de navigateur / logiciel » autour des captures */
function DeviceFrame({ project, onOpen }: { project: Project; onOpen: () => void }) {
  const { t } = useLang();
  const label = project.url ? project.url.replace(/^https?:\/\//, "").replace(/\/$/, "") : project.title;
  return (
    <button
      onClick={onOpen}
      className="group relative block w-full text-left"
      aria-label={`${t.portfolio.seeCaptures} : ${project.title}`}
    >
      {/* halo */}
      <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/40 to-primary-light/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#161626] shadow-2xl shadow-black/50 transition-transform duration-500 group-hover:-translate-y-1.5">
        <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ms-3 truncate rounded-md bg-white/5 px-3 py-1 text-xs text-muted" dir="ltr">{label}</span>
        </div>
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={project.images[0]}
            alt={`${t.portfolio.capture} : ${project.title}`}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-end justify-end bg-gradient-to-t from-black/60 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-dark">
              <Images className="h-3.5 w-3.5" aria-hidden="true" />
              {project.images.length} {t.portfolio.captures}
            </span>
          </div>
        </div>
      </div>
    </button>
  );
}

/* Lecteur vidéo de démonstration, dans le même cadre que les captures */
function VideoFrame({ project }: { project: Project }) {
  const { t } = useLang();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const play = () => {
    setPlaying(true);
    videoRef.current?.play();
  };

  return (
    <div className="group relative">
      <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/40 to-primary-light/10 opacity-60 blur-2xl" />
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#161626] shadow-2xl shadow-black/50">
        <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ms-3 truncate rounded-md bg-white/5 px-3 py-1 text-xs text-muted" dir="ltr">{project.title}</span>
          <span className="ms-auto inline-flex items-center gap-1.5 rounded-full bg-red-500/15 px-2.5 py-1 text-[11px] font-semibold text-red-300">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-400" />
            {t.portfolio.demoLabel}
          </span>
        </div>
        <div className="relative aspect-video bg-black">
          <video
            ref={videoRef}
            src={project.videoSrc}
            poster={project.poster}
            controls={playing}
            playsInline
            preload="metadata"
            onPause={() => videoRef.current?.ended && setPlaying(false)}
            className="h-full w-full object-contain"
          />
          {!playing && (
            <button
              onClick={play}
              aria-label={`${t.portfolio.playDemo} : ${project.title}`}
              className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/50 via-transparent to-transparent"
            >
              <span className="relative flex h-20 w-20 items-center justify-center">
                <span className="absolute inset-0 animate-ping rounded-full bg-primary/40" />
                <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-light shadow-2xl shadow-primary/50 transition-transform duration-300 group-hover:scale-110">
                  <Play className="ms-1 h-8 w-8 text-white" fill="white" aria-hidden="true" />
                </span>
              </span>
              <span className="absolute bottom-4 start-4 rounded-full bg-black/60 px-3 py-1.5 text-sm font-medium text-white backdrop-blur">
                {t.portfolio.playDemo}
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function ProjectDetails({ project, onOpen, featured }: { project: Project; onOpen: () => void; featured?: boolean }) {
  const { t } = useLang();
  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        {featured && (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-primary to-primary-light px-3 py-1 text-xs font-semibold text-white">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            {t.portfolio.featured}
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
          {t.portfolio.seeCaptures}
        </button>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary-light px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-transform hover:-translate-y-0.5"
          >
            {t.portfolio.seeOnline}
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        )}
      </div>
    </div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const { t } = useLang();
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
            {project.title} <span className="ms-2 text-sm font-normal text-muted">{imgIndex + 1} / {count}</span>
          </p>
          <button onClick={onClose} aria-label={t.portfolio.close} className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-primary">
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
                alt={`${project.title}, ${t.portfolio.capture} ${imgIndex + 1} / ${count}`}
                fill
                sizes="1024px"
                className="object-contain"
              />
            </motion.div>
          </AnimatePresence>
          {count > 1 && (
            <>
              <button onClick={prev} aria-label={t.portfolio.prev} className="absolute top-1/2 left-3 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur hover:bg-primary">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button onClick={next} aria-label={t.portfolio.next} className="absolute top-1/2 right-3 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur hover:bg-primary">
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
                aria-label={`${t.portfolio.capture} ${i + 1}`}
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
  const { t, lang } = useLang();
  const p = t.portfolio;
  const projects = rawProjects.map((raw) => localizeProject(raw, lang));
  const [openProject, setOpenProject] = useState<Project | null>(null);
  const close = useCallback(() => setOpenProject(null), []);
  const [featured, ...others] = projects;

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-dark to-[#1A1A2E] px-4 pt-40 pb-20 sm:px-6 md:pt-48 md:pb-24">
        <GridBackground />
        <div aria-hidden="true" className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[620px] -translate-x-1/2 rounded-full bg-primary/25 blur-[120px]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <Reveal>
            <h1 className="text-4xl leading-[1.08] font-bold md:text-6xl">
              {p.titleStart}{" "}
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                {p.titleHighlight}
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              {p.intro}
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <ul className="mt-8 flex flex-wrap justify-center gap-3">
              {[`${projects.length} ${p.countChip}`, ...p.chips].map((t) => (
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
              {featured.videoSrc ? (
                <VideoFrame project={featured} />
              ) : (
                <DeviceFrame project={featured} onOpen={() => setOpenProject(featured)} />
              )}
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

      <CtaBand title={p.ctaTitle} />
    </>
  );
}