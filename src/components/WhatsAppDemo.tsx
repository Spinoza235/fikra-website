"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { CheckCheck } from "lucide-react";
import { useLang } from "@/src/lib/i18n";

// Conversation d'exemple jouée une fois au chargement de la page d'accueil.
// Les messages sont dans translations.ts (rubrique « demo »). Faites relire l'arabe par un locuteur natif.

export default function WhatsAppDemo() {
  const { t, lang } = useLang();
  const conversation = t.demo.messages;
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
    if (shown >= conversation.length) return;
    const next = conversation[shown];
    const isBot = next.from === "bot";
    const t1 = setTimeout(() => setTyping(isBot), isBot ? 200 : 0);
    const t2 = setTimeout(
      () => {
        setTyping(false);
        setShown((s) => s + 1);
      },
      shown === 0 ? 700 : isBot ? 1400 : 900,
    );
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [shown, reduce, conversation]);

  return (
    <figure className="relative mx-auto w-full max-w-[340px]">
      <div className="overflow-hidden rounded-[2rem] border-[6px] border-white/10 bg-[#efeae2] shadow-2xl shadow-black/40">
        <div className="relative z-10 flex items-center gap-3 bg-[#075e54] px-4 py-3 text-white">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-sm font-semibold">
            BI
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold">{t.demo.shop}</p>
            <p className="text-[11px] text-white/75">
              {typing ? t.demo.typing : t.demo.status}
            </p>
          </div>
        </div>

        <div className="flex h-[470px] flex-col justify-end gap-2 overflow-hidden px-3 py-4" aria-live="polite">
          {conversation.slice(0, shown).map((m, i) => (
            <motion.div
              key={`${lang}-${i}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className={`max-w-[82%] rounded-lg px-3 py-1.5 text-[13.5px] leading-snug text-[#111b21] shadow-sm ${
                m.from === "client" ? "self-end rounded-se-none bg-[#d9fdd3]" : "self-start rounded-ss-none bg-white"
              }`}
            >
              <p dir={m.rtl ? "rtl" : "ltr"} className={m.rtl ? "font-arabic text-[15px]" : ""}>
                {m.text}
              </p>
              <p className="mt-0.5 flex items-center justify-end gap-1 text-[10px] text-[#667781]">
                {m.time}
                {m.from === "client" && <CheckCheck className="h-3 w-3 text-[#53bdeb]" />}
              </p>
            </motion.div>
          ))}
          {typing && (
            <div className="flex gap-1 self-start rounded-lg rounded-ss-none bg-white px-3 py-2.5 shadow-sm">
              {[0, 1, 2].map((d) => (
                <motion.span
                  key={d}
                  className="h-1.5 w-1.5 rounded-full bg-[#8696a0]"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 0.9, repeat: Infinity, delay: d * 0.15 }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      <figcaption className="mt-4 text-center text-xs text-muted">
        {t.demo.caption}
      </figcaption>
    </figure>
  );
}