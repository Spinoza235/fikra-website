"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";

// Modifie ce tableau avec tes propres questions/réponses préprogrammées
const faqData = [
  {
    question: "Quels sont vos services ?",
    answer:
      "Nous proposons la création de sites web, le développement sur mesure, la digitalisation d'entreprise et des solutions d'intelligence artificielle.",
  },
  {
    question: "Combien coûte un site vitrine ?",
    answer:
      "Le prix dépend de vos besoins précis. Décrivez-nous votre projet via la page Contact et nous vous répondons avec un devis adapté.",
  },
  {
    question: "En combien de temps livrez-vous un projet ?",
    answer:
      "Ça varie selon la complexité, mais un site vitrine simple peut être livré en une à deux semaines.",
  },
  {
    question: "Comment vous contacter ?",
    answer:
      "Le plus simple est notre page Contact, ou WhatsApp directement depuis le pied de page du site.",
  },
];

type Message = {
  id: number;
  from: "bot" | "user";
  text: string;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      from: "bot",
      text: "Bonjour 👋 Je suis l'assistant Fikra Tech. Choisissez une question ci-dessous, ou contactez-nous directement pour un besoin spécifique.",
    },
  ]);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleQuestionClick = (question: string, answer: string) => {
    setMessages((prev) => [
      ...prev,
      { id: prev.length, from: "user", text: question },
      { id: prev.length + 1, from: "bot", text: answer },
    ]);
  };

  return (
    <>
      {/* Bouton flottant */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary-light shadow-lg flex items-center justify-center"
        aria-label="Ouvrir le chat"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-6 h-6 text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Panneau de chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] max-w-sm h-[500px] max-h-[70vh] bg-dark/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 100%)",
            }}
          >
            {/* Header du panneau */}
            <div className="flex items-center gap-2 px-4 py-4 border-b border-white/10">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-white text-sm font-semibold">Assistant Fikra Tech</p>
                <p className="text-muted text-xs">Réponses instantanées</p>
              </div>
            </div>

            {/* Fil de messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    msg.from === "bot"
                      ? "bg-white/5 border border-white/10 text-white self-start rounded-tl-sm"
                      : "bg-primary text-white self-end rounded-tr-sm"
                  }`}
                >
                  {msg.text}
                </motion.div>
              ))}
              <div ref={endRef} />
            </div>

            {/* Questions suggérées */}
            <div className="px-4 pb-4 pt-2 border-t border-white/10 flex flex-col gap-2 max-h-[180px] overflow-y-auto">
              {faqData.map((item) => (
                <button
                  key={item.question}
                  onClick={() => handleQuestionClick(item.question, item.answer)}
                  className="text-left text-sm text-muted hover:text-white hover:bg-white/5 border border-white/10 rounded-xl px-3 py-2 transition-colors duration-200 flex items-center justify-between gap-2"
                >
                  {item.question}
                  <Send className="w-3.5 h-3.5 flex-shrink-0 opacity-50" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}