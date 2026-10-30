"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { dict, type Dict, type Lang } from "./translations";

type LangContext = {
  lang: Lang;
  t: Dict;
  setLang: (l: Lang) => void;
  toggle: () => void;
};

const Ctx = createContext<LangContext>({
  lang: "fr",
  t: dict.fr,
  setLang: () => {},
  toggle: () => {},
});

// Garde la langue choisie par le visiteur et règle le sens d'écriture (droite à gauche en arabe).
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");

  // Langue mémorisée lors d'une visite précédente
  useEffect(() => {
    try {
      const saved = localStorage.getItem("lang");
      if (saved === "fr" || saved === "ar") setLangState(saved);
    } catch {
      /* stockage indisponible : on reste en français */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("lang", l);
    } catch {
      /* ignoré */
    }
  }, []);

  const toggle = useCallback(() => setLang(lang === "fr" ? "ar" : "fr"), [lang, setLang]);

  return <Ctx.Provider value={{ lang, t: dict[lang], setLang, toggle }}>{children}</Ctx.Provider>;
}

export function useLang() {
  return useContext(Ctx);
}