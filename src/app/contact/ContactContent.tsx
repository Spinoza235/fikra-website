"use client";

import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle2, User, Building2, Phone, ShieldCheck, ArrowUpRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import GridBackground from "@/src/components/GridBackground";
import Reveal from "@/src/components/Reveal";
import { site, whatsappLink } from "@/src/lib/site";
import { getPillars } from "@/src/lib/services";
import { useLang } from "@/src/lib/i18n";

// Champ de saisie avec une icône à gauche
const input =
  "w-full rounded-xl border border-white/10 bg-[#12121F] py-3 ps-11 pe-4 text-[15px] text-white outline-none transition-all placeholder:text-muted/60 focus:border-primary focus:ring-4 focus:ring-primary/15";
const label = "mb-2 block text-sm font-medium text-white";

function Field({
  id,
  text,
  optional,
  icon: Icon,
  children,
}: {
  id: string;
  text: string;
  optional?: string;
  icon: typeof User;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className={label}>
        {text} {optional && <span className="font-normal text-muted">{optional}</span>}
      </label>
      <div className="relative">
        <Icon className="pointer-events-none absolute start-4 top-[1.4rem] h-4 w-4 -translate-y-1/2 text-muted" aria-hidden="true" />
        {children}
      </div>
    </div>
  );
}

export default function ContactContent() {
  const [state, handleSubmit] = useForm("xqpzwkrg");
  const { t } = useLang();
  const c = t.contact;
  const pillars = getPillars(t);
  const needs = [...pillars.map((p) => p.title), c.other];
  const [need, setNeed] = useState(0);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-dark to-[#1A1A2E] px-4 pt-40 pb-24 sm:px-6 md:pt-48 md:pb-32">
        <GridBackground />
        <div aria-hidden="true" className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[620px] -translate-x-1/2 rounded-full bg-primary/25 blur-[120px]" />
        <div className="relative mx-auto max-w-3xl text-center">
          <Reveal>
            <h1 className="text-4xl leading-[1.08] font-bold md:text-6xl">{c.title}</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">{c.intro}</p>
          </Reveal>
          <Reveal delay={0.2}>
            <ul className="mt-8 flex flex-wrap justify-center gap-3">
              {c.badges.map((b) => (
                <li key={b} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 backdrop-blur">
                  <CheckCircle2 className="h-4 w-4 text-primary-light" aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="relative -mt-12 px-4 pb-24 sm:px-6">
        <div className="relative mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_1.45fr]">
          {/* COLONNE GAUCHE : moyens de contact + étapes */}
          <div className="flex flex-col gap-5">
            <Reveal>
              <a
                href={whatsappLink(t.common.waDefault)}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-3xl bg-gradient-to-br from-[#1fa855] to-[#128c4a] p-7 text-white shadow-2xl shadow-[#1fa855]/20 transition-transform duration-300 hover:-translate-y-1"
              >
                <div aria-hidden="true" className="absolute -end-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
                <span className="relative inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">{c.fastest}</span>
                <div className="relative mt-5 flex items-center gap-4">
                  <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-white/15">
                    <FaWhatsapp className="h-8 w-8" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xl font-bold">{t.common.whatsapp}</span>
                    <span className="block text-sm text-white/85">{c.whatsappHint}</span>
                  </span>
                  <ArrowUpRight className="ms-auto h-6 w-6 flex-shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:-scale-x-100" aria-hidden="true" />
                </div>
                <p className="relative mt-5 text-lg font-semibold tracking-wide" dir="ltr">
                  {site.phoneDisplay}
                </p>
              </a>
            </Reveal>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <Reveal delay={0.08}>
                <a
                  href={`mailto:${site.email}`}
                  className="group flex h-full flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-light">
                    <Mail className="h-5 w-5 text-white" aria-hidden="true" />
                  </span>
                  <span className="font-semibold text-white">{c.email}</span>
                  <span className="text-sm break-all text-muted group-hover:text-primary-light">{site.email}</span>
                </a>
              </Reveal>
              <Reveal delay={0.16}>
                <div className="flex h-full flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-light">
                    <MapPin className="h-5 w-5 text-white" aria-hidden="true" />
                  </span>
                  <span className="font-semibold text-white">{c.whereTitle}</span>
                  <span className="text-sm text-muted">
                    {t.common.city}, {t.common.country}. {c.whereText}
                  </span>
                </div>
              </Reveal>
            </div>

            {/* Ce qui se passe ensuite */}
            <Reveal delay={0.2}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <h2 className="text-lg font-semibold">{c.stepsTitle}</h2>
                <ol className="mt-5 space-y-5">
                  {c.steps.map((s, i) => (
                    <li key={s.title} className="relative flex gap-4">
                      {i < c.steps.length - 1 && (
                        <span aria-hidden="true" className="absolute start-[15px] top-9 h-[calc(100%-4px)] w-px bg-gradient-to-b from-primary/60 to-transparent" />
                      )}
                      <span className="relative flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/15 text-sm font-bold text-primary-light">
                        {i + 1}
                      </span>
                      <span>
                        <span className="block font-medium text-white">{s.title}</span>
                        <span className="mt-1 block text-sm leading-relaxed text-muted">{s.text}</span>
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>

          {/* COLONNE DROITE : formulaire */}
          <Reveal delay={0.1}>
            <div className="relative rounded-3xl bg-gradient-to-b from-primary/50 via-white/10 to-white/5 p-px shadow-2xl shadow-black/40">
              <div className="rounded-[calc(1.5rem-1px)] bg-[#141424] p-6 sm:p-8 md:p-10">
                {state.succeeded ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center gap-4 py-16 text-center"
                    role="status"
                  >
                    <span className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-light shadow-lg shadow-primary/40">
                      <CheckCircle2 className="h-10 w-10 text-white" aria-hidden="true" />
                    </span>
                    <h2 className="text-2xl font-bold">{c.sentTitle}</h2>
                    <p className="max-w-sm text-muted">{c.sentText}</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <h2 className="text-2xl font-bold md:text-3xl">{c.formTitle}</h2>

                    {/* Choix du besoin en pastilles */}
                    <fieldset>
                      <legend className={label}>{c.need}</legend>
                      <div className="flex flex-wrap gap-2">
                        {needs.map((n, i) => (
                          <button
                            key={n}
                            type="button"
                            onClick={() => setNeed(i)}
                            aria-pressed={need === i}
                            className={`rounded-full border px-4 py-2 text-sm transition-all duration-200 ${
                              need === i
                                ? "border-primary bg-primary text-white shadow-lg shadow-primary/30"
                                : "border-white/10 bg-white/5 text-muted hover:border-primary/50 hover:text-white"
                            }`}
                          >
                            {n}
                          </button>
                        ))}
                      </div>
                      <input type="hidden" name="subject" value={needs[need]} />
                    </fieldset>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field id="name" text={c.name} icon={User}>
                        <input id="name" name="name" type="text" required autoComplete="name" className={input} />
                      </Field>
                      <Field id="organisation" text={c.org} optional={c.optional} icon={Building2}>
                        <input id="organisation" name="organisation" type="text" autoComplete="organization" className={input} />
                      </Field>
                      <Field id="email" text={c.emailLabel} icon={Mail}>
                        <input id="email" name="email" type="email" required autoComplete="email" className={input} />
                        <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-1 text-xs text-red-400" />
                      </Field>
                      <Field id="phone" text={c.phone} optional={c.optional} icon={Phone}>
                        <input id="phone" name="phone" type="tel" dir="ltr" autoComplete="tel" placeholder="+235" className={input} />
                      </Field>
                    </div>

                    <div>
                      <label htmlFor="message" className={label}>
                        {c.message}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        className="w-full resize-none rounded-xl border border-white/10 bg-[#12121F] px-4 py-3 text-[15px] text-white outline-none transition-all placeholder:text-muted/60 focus:border-primary focus:ring-4 focus:ring-primary/15"
                        placeholder={c.placeholder}
                      />
                      <ValidationError prefix="Message" field="message" errors={state.errors} className="mt-1 text-xs text-red-400" />
                    </div>

                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="group flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary-light px-6 py-4 font-semibold text-white shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:shadow-primary/50 disabled:translate-y-0 disabled:opacity-60"
                    >
                      {state.submitting ? c.sending : c.submit}
                      {!state.submitting && (
                        <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:-scale-x-100" aria-hidden="true" />
                      )}
                    </button>

                    <p className="flex items-center justify-center gap-2 text-center text-xs text-muted">
                      <ShieldCheck className="h-4 w-4 flex-shrink-0 text-primary-light" aria-hidden="true" />
                      {c.privacy}
                    </p>
                  </form>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}