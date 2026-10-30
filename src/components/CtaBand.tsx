"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Send, MessageSquareText, ScanText, Globe, GraduationCap } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { whatsappLink } from "@/src/lib/site";
import { useLang } from "@/src/lib/i18n";

// Besoins proposés : un clic pré-remplit le message WhatsApp (textes dans translations.ts, rubrique « cta »).
const needIcons = [MessageSquareText, ScanText, Globe, GraduationCap];

export default function CtaBand({ title, text }: { title?: string; text?: string }) {
  const { t, lang } = useLang();
  const needs = t.cta.needs.map((n, i) => ({ ...n, icon: needIcons[i] ?? Globe }));
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [typed, setTyped] = useState(reduce ? needs[0].text : "");
  const [auto, setAuto] = useState(true); // défilement automatique tant que le visiteur n'a rien choisi

  // Effet machine à écrire
  useEffect(() => {
    const full = needs[active].text;
    if (reduce) {
      setTyped(full);
      return;
    }
    if (typed.length < full.length) {
      const t = setTimeout(() => setTyped(full.slice(0, typed.length + 1)), 28);
      return () => clearTimeout(t);
    }
    if (auto) {
      const t = setTimeout(() => {
        setTyped("");
        setActive((a) => (a + 1) % needs.length);
      }, 2600);
      return () => clearTimeout(t);
    }
  }, [typed, active, auto, reduce, t]);

  // Recommence l'animation quand on change de langue
  useEffect(() => {
    setTyped("");
    setActive(0);
    setAuto(true);
  }, [lang]);

  const choose = (i: number) => {
    setAuto(false);
    setActive(i);
    setTyped(reduce ? needs[i].text : "");
  };

  const message = `${t.cta.greeting}${needs[active].text}.`;

  return (
    <section className="px-4 py-20 sm:px-6 md:py-28">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] p-px">
        {/* Bordure lumineuse qui tourne */}
        <motion.div
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 aspect-square w-[160%] -translate-x-1/2 -translate-y-1/2"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, #7C3AED 60deg, #A78BFA 120deg, transparent 180deg, transparent 360deg)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />

        <div className="relative grid gap-10 overflow-hidden rounded-[calc(2rem-1px)] bg-[#12121F] px-6 py-12 md:grid-cols-2 md:gap-14 md:px-12 md:py-14">
          {/* Fond à points + halo */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              backgroundImage: "radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
              maskImage: "radial-gradient(ellipse 60% 80% at 0% 50%, black, transparent)",
              WebkitMaskImage: "radial-gradient(ellipse 60% 80% at 0% 50%, black, transparent)",
            }}
          />
          <div aria-hidden="true" className="pointer-events-none absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-primary/25 blur-[100px]" />

          <div className="relative flex flex-col justify-center">
            <h2 className="text-3xl leading-tight font-bold md:text-[2.6rem]">
              {title ?? t.cta.title}
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-muted">{text ?? t.cta.text}</p>
            <Link
              href="/contact"
              className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary-light underline-offset-4 hover:underline"
            >
              {t.cta.emailLink}
            </Link>
          </div>

          {/* Mini composeur WhatsApp */}
          <div className="relative">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/40 backdrop-blur">
              <p className="text-sm font-medium text-white">{t.cta.question}</p>
              <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label={t.cta.groupLabel}>
                {needs.map((n, i) => (
                  <button
                    key={n.label}
                    onClick={() => choose(i)}
                    aria-pressed={i === active}
                    className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-sm transition-all duration-300 ${
                      i === active
                        ? "border-primary bg-primary text-white shadow-lg shadow-primary/30"
                        : "border-white/10 bg-white/5 text-muted hover:border-primary/50 hover:text-white"
                    }`}
                  >
                    <n.icon className="h-4 w-4" aria-hidden="true" />
                    {n.label}
                  </button>
                ))}
              </div>

              <div className="mt-5 flex items-end gap-3">
                <div className="min-h-[88px] flex-1 rounded-2xl rounded-ee-sm bg-[#1f2c34] px-4 py-3 text-[15px] leading-relaxed text-white">
                  <span className="text-white/50">{t.cta.greeting}</span>
                  {typed}
                  <span className="ml-0.5 inline-block h-4 w-0.5 translate-y-0.5 animate-pulse bg-primary-light" aria-hidden="true" />
                </div>
                <a
                  href={whatsappLink(message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t.cta.sendAria}
                  className="group flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-wa text-white shadow-lg shadow-wa/30 transition-transform hover:scale-110"
                >
                  <Send className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:-scale-x-100" />
                </a>
              </div>

              <p className="mt-4 flex items-center gap-2 text-xs text-muted">
                <FaWhatsapp className="h-4 w-4 text-wa" aria-hidden="true" />
                {t.cta.footnote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}