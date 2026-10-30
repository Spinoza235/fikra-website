"use client";

import { Target, MapPin, GraduationCap, Lightbulb, Rocket, HeartHandshake } from "lucide-react";
import { CtaBand } from "@/src/components/Blocks";
import GridBackground from "@/src/components/GridBackground";
import Reveal from "@/src/components/Reveal";
import TeamCard, { type TeamMember } from "@/src/components/TeamCard";
import { useLang } from "@/src/lib/i18n";

// ✏️ Photos et liens LinkedIn des associés (dans le même ordre que « team » dans translations.ts).
// Les noms, rôles et textes se modifient dans src/lib/translations.ts, rubrique « about ».
const teamExtras = [
  { photo: "/images/team/cofounder-1.jpeg", linkedin: "" },
  { photo: "/images/team/cofounder-2.jpeg", linkedin: "" },
  { photo: "/images/team/cofounder-3.jpeg", linkedin: "" },
];

const valueIcons = [Target, MapPin, GraduationCap];
const journeyIcons = [Lightbulb, Rocket, HeartHandshake];

export default function AProposContent() {
  const { t } = useLang();
  const a = t.about;
  const team: TeamMember[] = a.team.map((m, i) => ({ ...m, ...teamExtras[i] }));
  const values = a.values.map((v, i) => ({ ...v, icon: valueIcons[i] }));
  const journey = a.journey.map((j, i) => ({ ...j, icon: journeyIcons[i] }));

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-dark to-[#1A1A2E] px-4 pt-16 pb-20 sm:px-6 md:pt-24 md:pb-28">
        <GridBackground />
        <div aria-hidden="true" className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[620px] -translate-x-1/2 rounded-full bg-primary/25 blur-[120px]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary-light">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-light opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-light" />
              </span>
              {a.badge}
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 text-4xl leading-[1.08] font-bold text-white md:text-6xl">
              {a.titleStart}{" "}
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                {a.titleHighlight}
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              {a.intro}
            </p>
          </Reveal>
        </div>
      </section>

      {/* HISTOIRE */}
      <section className="px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="text-3xl font-bold md:text-4xl">{a.storyTitle}</h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted">
              {a.story.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>
          </Reveal>

          {/* Carte « Fikra = idée » */}
          <Reveal delay={0.15}>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-primary/20 via-white/[0.03] to-transparent p-10 text-center md:p-14">
              <div aria-hidden="true" className="absolute -right-16 -bottom-16 h-56 w-56 rounded-full bg-primary/30 blur-3xl" />
              <p
                lang="ar"
                dir="rtl"
                className="relative font-arabic text-7xl font-medium text-transparent bg-gradient-to-r from-primary-light to-white bg-clip-text md:text-8xl"
              >
                فكرة
              </p>
              <p className="relative mt-4 text-2xl font-bold text-white">{a.fikraTitle}</p>
              <p className="relative mx-auto mt-3 max-w-sm leading-relaxed text-muted">
                {a.fikraText}
              </p>
            </div>
          </Reveal>
        </div>

        {/* Parcours */}
        <div className="mx-auto mt-20 grid max-w-6xl gap-6 md:grid-cols-3">
          {journey.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.12}>
              <div className="relative h-full rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-colors duration-300 hover:border-primary/40">
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-light">
                    <step.icon className="h-5 w-5 text-white" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-medium text-muted">{a.stepLabel} {i + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* EQUIPE */}
      <section className="relative overflow-hidden border-y border-white/10 bg-surface px-4 py-20 sm:px-6 md:py-28">
        <div aria-hidden="true" className="pointer-events-none absolute top-1/3 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />
        <div className="relative mx-auto max-w-6xl">
          <Reveal className="text-center">
            <h2 className="text-3xl font-bold md:text-4xl">{a.teamTitle}</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              {a.teamIntro}
            </p>
          </Reveal>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {team.map((m, i) => (
              <TeamCard key={m.photo} member={m} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* VALEURS */}
      <section className="px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal className="text-center">
            <h2 className="text-3xl font-bold md:text-4xl">{a.valuesTitle}</h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.12}>
                <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-white/[0.06]">
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-light shadow-lg shadow-primary/30 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <v.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{v.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}