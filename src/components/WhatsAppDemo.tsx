"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  BadgeCheck,
  Camera,
  CheckCheck,
  Laptop,
  Lock,
  Mic,
  MoreVertical,
  Paperclip,
  Phone,
  Reply,
  Smile,
  Video,
} from "lucide-react";
import { useLang } from "@/src/lib/i18n";

// Démo d'un assistant WhatsApp, dans un téléphone fidèle à l'application (thème sombre).
// La conversation se joue, puis recommence après une pause.
// Les textes sont dans translations.ts (rubrique « demo »). Faites relire l'arabe par un locuteur natif.

// Couleurs officielles de WhatsApp en thème sombre
const WA = {
  bg: "#0b141a",
  bar: "#1f2c34",
  out: "#005c4b",
  in: "#202c33",
  text: "#e9edef",
  meta: "#8696a0",
  green: "#00a884",
  tick: "#53bdeb",
};

// Motif discret du fond de discussion (comme le « papier peint » de WhatsApp)
const doodle =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cg fill='none' stroke='%23ffffff' stroke-opacity='0.045' stroke-width='1.4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M14 18h20a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5h-12l-6 5v-5h-2a5 5 0 0 1-5-5V23a5 5 0 0 1 5-5z'/%3E%3Ccircle cx='88' cy='24' r='9'/%3E%3Cpath d='M84 24l3 3 5-6'/%3E%3Cpath d='M22 78l6-12 6 12-6 4z'/%3E%3Cpath d='M70 70c6-8 18-8 18 2 0 8-18 16-18 16S52 80 52 72c0-10 12-10 18-2z'/%3E%3Cpath d='M100 96l4 8 8 1-6 6 2 8-8-4-8 4 2-8-6-6 8-1z'/%3E%3Cpath d='M30 104h16M38 96v16'/%3E%3C/g%3E%3C/svg%3E\")";

type Msg = { from: "client" | "bot"; text: string; time: string; rtl: boolean; buttons?: string[] };

function Bubble({ m, first, pageRtl }: { m: Msg; first: boolean; pageRtl: boolean }) {
  const out = m.from === "client";
  const color = out ? WA.out : WA.in;
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
      className={`flex max-w-[84%] flex-col gap-[3px] ${out ? "self-end" : "self-start"} ${first ? "mt-2" : ""}`}
    >
      <div
        className={`relative flow-root rounded-lg px-2.5 pt-1.5 pb-[5px] shadow-[0_1px_0.5px_rgba(0,0,0,0.13)] ${
          first ? (out ? "rounded-se-none" : "rounded-ss-none") : ""
        }`}
        style={{ backgroundColor: color, color: WA.text }}
      >
        {/* Petite pointe de la bulle, côté expéditeur */}
        {first && (
          <span
            aria-hidden="true"
            className={`absolute top-0 h-3 w-2 ${
              out
                ? "-end-2 [clip-path:polygon(0_0,100%_0,0_100%)] rtl:[clip-path:polygon(0_0,100%_0,100%_100%)]"
                : "-start-2 [clip-path:polygon(0_0,100%_0,100%_100%)] rtl:[clip-path:polygon(0_0,100%_0,0_100%)]"
            }`}
            style={{ backgroundColor: color }}
          />
        )}
        <p dir={m.rtl ? "rtl" : "ltr"} className={`text-[13.5px] leading-[1.35] ${m.rtl ? "font-arabic text-[14.5px]" : ""}`}>
          {m.text}
          {/* L'heure flotte en bas, côté fin de l'écran : sur la dernière ligne s'il reste de la place,
              sinon juste en dessous, comme dans WhatsApp */}
          <span
            className={`relative top-[5px] flex items-center gap-[3px] text-[10.5px] leading-[18px] ${
              pageRtl ? "float-left pr-2.5" : "float-right pl-2.5"
            }`}
            style={{ color: out ? "rgba(233,237,239,0.6)" : WA.meta }}
            dir="ltr"
          >
            {m.time}
            {out && <CheckCheck className="h-[15px] w-[15px]" style={{ color: WA.tick }} aria-hidden="true" />}
          </span>
        </p>
      </div>

      {/* Boutons de réponse rapide d'un compte professionnel */}
      {m.buttons?.map((b) => (
        <div
          key={b}
          className="flex items-center justify-center gap-1.5 rounded-lg py-2 text-[13px] font-medium shadow-[0_1px_0.5px_rgba(0,0,0,0.13)]"
          style={{ backgroundColor: color, color: WA.tick }}
        >
          <Reply className="h-3.5 w-3.5" aria-hidden="true" />
          {b}
        </div>
      ))}
    </motion.div>
  );
}

export default function WhatsAppDemo() {
  const { t, lang } = useLang();
  const d = t.demo;
  const conversation = d.messages as Msg[];
  const reduce = useReducedMotion();
  const [shown, setShown] = useState(reduce ? conversation.length : 0);
  const [typing, setTyping] = useState(false);

  // Rejoue la conversation quand on change de langue
  useEffect(() => {
    if (!reduce) setShown(0);
  }, [lang, reduce]);

  useEffect(() => {
    if (reduce) {
      setShown(conversation.length);
      return;
    }
    // Fin de la conversation : pause, puis on recommence
    if (shown >= conversation.length) {
      const restart = setTimeout(() => setShown(0), 6000);
      return () => clearTimeout(restart);
    }
    const next = conversation[shown];
    const isBot = next.from === "bot";
    const t1 = setTimeout(() => setTyping(isBot), isBot ? 350 : 0);
    const t2 = setTimeout(
      () => {
        setTyping(false);
        setShown((s) => s + 1);
      },
      shown === 0 ? 900 : isBot ? 1700 : 1100,
    );
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [shown, reduce, conversation]);

  const visible = conversation.slice(0, shown);

  return (
    <figure className="relative mx-auto w-full max-w-[330px]">
      {/* Halo violet derrière le téléphone */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-[-18%] top-[8%] bottom-[12%] rounded-full bg-[radial-gradient(closest-side,rgba(124,58,237,0.55),rgba(124,58,237,0)_70%)] blur-2xl"
      />

      {/* Téléphone */}
      <div className="relative rounded-[3.1rem] bg-gradient-to-b from-[#4a4a5a] via-[#1d1d27] to-[#3a3a48] p-[2px] shadow-[0_40px_90px_-30px_rgba(124,58,237,0.7),0_25px_50px_-20px_rgba(0,0,0,0.8)]">
        {/* Boutons sur les côtés */}
        <span aria-hidden="true" className="absolute top-28 -left-[3px] h-8 w-[3px] rounded-s bg-[#2c2c38]" />
        <span aria-hidden="true" className="absolute top-40 -left-[3px] h-14 w-[3px] rounded-s bg-[#2c2c38]" />
        <span aria-hidden="true" className="absolute top-36 -right-[3px] h-20 w-[3px] rounded-e bg-[#2c2c38]" />

        <div className="rounded-[3rem] bg-[#050507] p-[10px]">
          <div
            className="relative flex h-[600px] flex-col overflow-hidden rounded-[2.4rem] sm:h-[640px]"
            style={{ backgroundColor: WA.bg }}
            dir={lang === "ar" ? "rtl" : "ltr"}
          >
            {/* Barre d'état + Dynamic Island */}
            <div className="relative flex h-11 flex-shrink-0 items-center justify-between px-7 text-[13px] font-semibold text-white" style={{ backgroundColor: WA.bar }} dir="ltr">
              <span>22:31</span>
              <span aria-hidden="true" className="absolute top-2.5 left-1/2 h-[26px] w-[92px] -translate-x-1/2 rounded-full bg-black" />
              <span className="flex items-center gap-1.5" aria-hidden="true">
                {/* réseau */}
                <svg width="17" height="11" viewBox="0 0 17 11" fill="white"><rect x="0" y="7" width="3" height="4" rx="1" /><rect x="4.5" y="5" width="3" height="6" rx="1" /><rect x="9" y="2.5" width="3" height="8.5" rx="1" /><rect x="13.5" y="0" width="3" height="11" rx="1" /></svg>
                {/* wifi */}
                <svg width="15" height="11" viewBox="0 0 15 11" fill="white"><path d="M7.5 2.2c2.2 0 4.2.8 5.7 2.2l1.1-1.2A9.8 9.8 0 0 0 7.5.5 9.8 9.8 0 0 0 .7 3.2l1.1 1.2c1.5-1.4 3.5-2.2 5.7-2.2zm0 3.3c1.3 0 2.5.5 3.4 1.3l1.1-1.2a6.6 6.6 0 0 0-9 0l1.1 1.2c.9-.8 2.1-1.3 3.4-1.3zm0 3.2c-.5 0-1 .2-1.3.5L7.5 10.6l1.3-1.4c-.3-.3-.8-.5-1.3-.5z" /></svg>
                {/* batterie */}
                <svg width="25" height="12" viewBox="0 0 25 12" fill="none"><rect x="0.5" y="0.5" width="21" height="11" rx="3.5" stroke="white" strokeOpacity="0.5" /><rect x="2" y="2" width="15" height="8" rx="2" fill="white" /><path d="M23 4v4a2 2 0 0 0 0-4z" fill="white" fillOpacity="0.5" /></svg>
              </span>
            </div>

            {/* En-tête de la discussion */}
            <div className="flex flex-shrink-0 items-center gap-1.5 px-1.5 pt-1 pb-2.5 text-white" style={{ backgroundColor: WA.bar }}>
              <ArrowLeft className="h-5 w-5 flex-shrink-0 rtl:rotate-180" style={{ color: WA.text }} aria-hidden="true" />
              <div className="flex h-[34px] w-[34px] flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-light">
                <Laptop className="h-[17px] w-[17px] text-white" aria-hidden="true" />
              </div>
              <div className="min-w-0 flex-1 leading-tight">
                <p className="flex items-center gap-1 truncate text-[14.5px] font-medium" style={{ color: WA.text }}>
                  <span className="truncate">{d.shop}</span>
                  <BadgeCheck className="h-[15px] w-[15px] flex-shrink-0" style={{ color: WA.green }} aria-hidden="true" />
                </p>
                <p className="truncate text-[11.5px]" style={{ color: typing ? WA.green : WA.meta }}>
                  {typing ? d.typing : d.business}
                </p>
              </div>
              <div className="flex items-center gap-3 pe-1" style={{ color: WA.text }} aria-hidden="true">
                <Video className="h-[19px] w-[19px]" />
                <Phone className="h-[17px] w-[17px]" />
                <MoreVertical className="h-[18px] w-[18px]" />
              </div>
            </div>

            {/* Discussion */}
            <div
              className="relative flex min-h-0 flex-1 flex-col justify-end gap-[3px] overflow-hidden px-3 pb-2"
              style={{ backgroundImage: doodle }}
              aria-live="polite"
            >
              {/* Repères en haut de la discussion, qui défilent comme dans l'application */}
              <div className="mb-2 flex flex-col items-center gap-2">
                <span className="rounded-md px-3 py-1 text-[11.5px] shadow-sm" style={{ backgroundColor: "#182229", color: WA.meta }}>
                  {d.today}
                </span>
                <span
                  className="flex max-w-[92%] items-start gap-1.5 rounded-md px-3 py-1.5 text-center text-[11px] leading-snug shadow-sm"
                  style={{ backgroundColor: "#182229", color: "#ffd279" }}
                >
                  <Lock className="mt-px h-3 w-3 flex-shrink-0" aria-hidden="true" />
                  {d.encrypted}
                </span>
              </div>

              {visible.map((m, i) => (
                <Bubble key={`${lang}-${i}`} m={m} pageRtl={lang === "ar"} first={i === 0 || conversation[i - 1].from !== m.from} />
              ))}

              <AnimatePresence>
                {typing && (
                  <motion.div
                    key="typing"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-2 flex gap-1 self-start rounded-lg rounded-ss-none px-3.5 py-3"
                    style={{ backgroundColor: WA.in }}
                  >
                    {[0, 1, 2].map((dot) => (
                      <motion.span
                        key={dot}
                        className="h-[7px] w-[7px] rounded-full"
                        style={{ backgroundColor: WA.meta }}
                        animate={{ opacity: [0.3, 1, 0.3], y: [0, -2, 0] }}
                        transition={{ duration: 0.9, repeat: Infinity, delay: dot * 0.15 }}
                      />
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Zone de saisie */}
            <div className="flex flex-shrink-0 items-center gap-1.5 px-2 pt-1 pb-2">
              <div className="flex h-11 flex-1 items-center gap-3 rounded-full px-3.5" style={{ backgroundColor: WA.bar, color: WA.meta }}>
                <Smile className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                <span className="flex-1 truncate text-[15px]">{d.placeholder}</span>
                <Paperclip className="h-5 w-5 flex-shrink-0 -rotate-45" aria-hidden="true" />
                <Camera className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
              </div>
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: WA.green }}>
                <Mic className="h-5 w-5 text-[#0b141a]" aria-hidden="true" />
              </div>
            </div>

            {/* Barre d'accueil du téléphone */}
            <div className="flex flex-shrink-0 justify-center pt-1 pb-2">
              <span aria-hidden="true" className="h-[5px] w-28 rounded-full bg-white/70" />
            </div>
          </div>
        </div>
      </div>

      <figcaption className="relative mt-5 text-center text-xs text-muted">{d.caption}</figcaption>
    </figure>
  );
}
