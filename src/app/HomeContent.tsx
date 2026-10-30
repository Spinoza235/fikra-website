"use client";

import Link from "next/link";
import Image from "next/image";
import { Check, ArrowRight, WifiOff, Languages, GraduationCap, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import GridBackground from "@/src/components/GridBackground";
import Reveal from "@/src/components/Reveal";
import WhatsAppDemo from "@/src/components/WhatsAppDemo";
import Testimonials from "@/src/components/Testimonials";
import { CtaBand } from "@/src/components/Blocks";
import { getPillars } from "@/src/lib/services";
import { projects, localizeProject } from "@/src/lib/projects";
import { useLang } from "@/src/lib/i18n";
import { whatsappLink } from "@/src/lib/site";

const strengthIcons = [WifiOff, Languages, GraduationCap, MapPin];

export default function HomeContent() {
  const { t, lang } = useLang();
  const h = t.home;
  const pillars = getPillars(t);
  const changes = h.changes;
  const strengths = h.strengths.map((s, i) => ({ ...s, icon: strengthIcons[i] }));
  const steps = h.steps;

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-dark to-[#1A1A2E] px-4 pt-14 pb-16 text-white sm:px-6 md:pt-20 md:pb-24">
        <GridBackground />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-primary/30 blur-[120px]"
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <p className="mb-5 text-[15px] font-medium text-primary-light">
              {h.eyebrow}
            </p>
            <h1 className="text-[2.4rem] leading-[1.04] font-semibold sm:text-[3.2rem] lg:text-[3.5rem]">
              {h.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              {h.intro}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappLink(t.common.waDefault)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-wa px-6 py-3.5 font-semibold text-white transition hover:brightness-110"
              >
                <FaWhatsapp className="h-5 w-5" aria-hidden="true" />
                {h.ctaPrimary}
              </a>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-xl border border-white/25 px-6 py-3.5 font-medium text-white transition-colors hover:bg-white/10"
              >
                {h.ctaSecondary}
              </Link>
            </div>

            <ul className="mt-10 grid gap-2.5 text-[15px] text-muted sm:grid-cols-2">
              {h.checks.map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Check className="h-4 w-4 flex-shrink-0 text-primary-light" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <WhatsAppDemo />
        </div>
      </section>

      {/* CE QUI CHANGE */}
      <section className="bg-surface px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="max-w-2xl text-3xl font-semibold md:text-[2.6rem] md:leading-[1.1]">
            {h.changesTitle}
          </h2>
          <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
            {changes.map((c, i) => (
              <Reveal key={c.before} delay={i * 0.1} className="grid gap-3 py-7 md:grid-cols-2 md:gap-12">
                <p className="text-lg leading-relaxed text-muted">{c.before}</p>
                <p className="flex gap-3 text-lg leading-relaxed font-medium text-white">
                  <ArrowRight className="mt-1.5 h-5 w-5 flex-shrink-0 text-primary rtl:-scale-x-100" aria-hidden="true" />
                  {c.after}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="max-w-xl text-3xl font-semibold md:text-[2.6rem] md:leading-[1.1]">
              {h.servicesTitle}
            </h2>
            <p className="max-w-md text-muted">{h.servicesIntro}</p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {pillars.map((p, i) => (
              <Reveal key={p.id} delay={(i % 2) * 0.1}>
              <Link
                href={`/services#${p.id}`}
                className={`group flex h-full flex-col rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_60px_-25px_rgba(124,58,237,0.55)] md:p-8 ${
                  i < 2
                    ? "border-primary/15 bg-primary/10 hover:border-primary/50"
                    : "border-white/10 bg-white/5 hover:border-primary/40"
                }`}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-light transition-transform duration-300 group-hover:scale-110">
                  <p.icon className="h-6 w-6 text-white" strokeWidth={1.8} aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-2xl font-semibold">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{p.summary}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.items.map((item) => (
                    <li
                      key={item.title}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white"
                    >
                      {item.title}
                    </li>
                  ))}
                </ul>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-light">
                  {t.common.seeDetail}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100" aria-hidden="true" />
                </span>
              </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* POURQUOI NOUS */}
      <section className="bg-surface px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="max-w-2xl text-3xl font-semibold md:text-[2.6rem] md:leading-[1.1]">
            {h.strengthsTitle}
          </h2>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {strengths.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1} className="border-t-2 border-primary-light pt-5">
                <s.icon className="h-6 w-6 text-white" strokeWidth={1.8} aria-hidden="true" />
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* REALISATIONS */}
      <section className="px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="text-3xl font-semibold md:text-[2.6rem] md:leading-[1.1]">
              {h.projectsTitle}
            </h2>
            <Link href="/portfolio" className="inline-flex items-center gap-1.5 font-semibold text-primary-light">
              {h.projectsAll}
              <ArrowRight className="h-4 w-4 rtl:-scale-x-100" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {projects.slice(0, 3).map((raw) => localizeProject(raw, lang)).map((p, i) => (
              <Reveal key={p.id} delay={i * 0.1}>
              <Link href="/portfolio" className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                  <Image
                    src={p.images[0]}
                    alt={`${h.projectPreview} ${p.title}`}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <p className="mt-4 text-sm font-medium text-primary-light">{p.category}</p>
                <h3 className="mt-1 text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 line-clamp-3 text-[15px] leading-relaxed text-muted">
                  {p.shortDescription}
                </p>
              </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* METHODE */}
      <section className="bg-surface px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="max-w-2xl text-3xl font-semibold md:text-[2.6rem] md:leading-[1.1]">
            {h.stepsTitle}
          </h2>
          <ol className="mt-12 grid gap-8 md:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title}>
                <Reveal delay={i * 0.12}>
                <span className="font-display text-5xl font-bold bg-gradient-to-b from-primary-light to-primary/20 bg-clip-text text-transparent">{i + 1}</span>
                <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{s.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Testimonials />

      <CtaBand />
    </>
  );
}