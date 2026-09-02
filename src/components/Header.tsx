"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Réalisations" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-4 transition-all duration-300 ${
        isScrolled ? "pt-2" : "pt-4"
      }`}
    >
      <div
        className="max-w-6xl mx-auto rounded-2xl border border-white/10 bg-dark/60 backdrop-blur-xl shadow-2xl shadow-primary/10"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 100%)",
        }}
      >
        <div className="px-6 py-4 flex items-center justify-between text-white">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/fikra-logo.png" alt="Fikra Tech" width={32} height={32} className="h-8 w-auto" priority />
            <span className="text-xl font-bold">
              Fikra<span className="text-primary">Tech</span>
            </span>
          </Link>

          <nav className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className="hidden md:flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur px-5 py-2 text-sm font-medium text-white hover:bg-white/10 hover:border-primary/50 transition-all duration-300 group"
          >
            Discuter d&apos;un projet
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <button
            className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-[6px] z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Ouvrir le menu"
          >
            <span
              className={`block h-0.5 w-6 bg-white rounded-full transition-all duration-300 ease-in-out ${
                isOpen ? "rotate-45 translate-y-[8px]" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white rounded-full transition-all duration-300 ease-in-out ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white rounded-full transition-all duration-300 ease-in-out ${
                isOpen ? "-rotate-45 -translate-y-[8px]" : ""
              }`}
            />
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="md:hidden fixed inset-0 top-0 bg-black/40 backdrop-blur-sm z-40"
                onClick={() => setIsOpen(false)}
              />

              <motion.nav
                initial={{ opacity: 0, scale: 0.95, y: -12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -12 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="md:hidden relative z-50 mx-2 mb-2 bg-dark/70 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 100%)",
                }}
              >
                <div className="flex flex-col p-2">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.2 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-3 rounded-xl text-muted hover:text-white hover:bg-white/5 transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}

                  <div className="h-px bg-white/10 my-2 mx-4" />

                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="mx-2 mt-1 mb-2 flex items-center justify-center gap-1.5 rounded-xl border border-white/15 bg-white/5 text-white text-center px-4 py-3 font-medium hover:bg-white/10 transition-colors duration-300"
                  >
                    Discuter d&apos;un projet
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.nav>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}