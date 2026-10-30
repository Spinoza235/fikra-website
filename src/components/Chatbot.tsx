"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Sparkles } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { whatsappLink } from "@/src/lib/site";
import { useLang } from "@/src/lib/i18n";

// Questions et réponses préparées (textes dans translations.ts, rubrique « chatbot »).
// À remplacer plus tard par un vrai assistant IA.

export default function Chatbot() {
  const { t } = useLang();
  const [isOpen, setIsOpen] = useState(false);
  // On garde seulement les numéros des questions posées : la conversation change de langue avec le site.
  const [asked, setAsked] = useState<number[]>([]);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [asked]);

  const messages = [
    { id: "greet", from: "bot" as const, text: t.chatbot.greeting },
    ...asked.flatMap((qi, k) => [
      { id: `q${k}`, from: "user" as const, text: t.chatbot.faq[qi].question },
      { id: `a${k}`, from: "bot" as const, text: t.chatbot.faq[qi].answer },
    ]),
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed right-4 bottom-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30 transition-transform hover:scale-105 sm:right-6 sm:bottom-6"
        aria-label={isOpen ? t.chatbot.close : t.chatbot.open}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed right-4 bottom-22 z-50 flex h-[520px] max-h-[75vh] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#141424] shadow-2xl shadow-black/50 sm:right-6 sm:bottom-24"
            role="dialog"
            aria-label={t.chatbot.title}
          >
            <div className="flex items-center gap-3 bg-dark px-4 py-3.5 text-white">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary">
                <Sparkles className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-semibold">{t.chatbot.title}</p>
                <p className="text-xs text-muted">{t.chatbot.subtitle}</p>
              </div>
            </div>

            <div className="flex flex-1 flex-col gap-3 overflow-y-auto bg-dark px-4 py-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    msg.from === "bot"
                      ? "self-start rounded-ss-sm border border-white/10 bg-white/5 text-white"
                      : "self-end rounded-se-sm bg-primary text-white"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
              <div ref={endRef} />
            </div>

            <div className="flex max-h-[190px] flex-col gap-2 overflow-y-auto border-t border-white/10 px-4 pt-3 pb-2">
              {t.chatbot.faq.map((item, i) => (
                <button
                  key={item.question}
                  onClick={() => setAsked((a) => [...a, i])}
                  className="rounded-xl border border-white/10 px-3 py-2 text-start text-sm text-white transition-colors hover:border-primary hover:bg-primary/10"
                >
                  {item.question}
                </button>
              ))}
            </div>
            <div className="px-4 pt-1 pb-4">
              <a
                href={whatsappLink(t.common.waDefault)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-wa px-4 py-2.5 text-sm font-medium text-white hover:brightness-95"
              >
                <FaWhatsapp className="h-4 w-4" aria-hidden="true" />
                {t.chatbot.whatsapp}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}