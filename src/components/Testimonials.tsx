"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

// Remplace ces données par tes vrais témoignages une fois collectés.
const testimonials = [
  {
    name: "Amina Djimet",
    role: "Fondatrice",
    company: "Boutique Aïcha Mode",
    quote:
      "Fikra Tech nous a livré un site vitrine magnifique en un temps record. L'équipe a été à l'écoute et très réactive à chaque étape.",
    rating: 5,
  },
  {
    name: "Moussa Abakar",
    role: "Directeur général",
    company: "Sahel Logistique",
    quote:
      "La digitalisation de notre suivi client nous fait gagner un temps précieux chaque semaine. Un vrai partenaire technique, pas juste un prestataire.",
    rating: 5,
  },
  {
    name: "Fatimé Hassan",
    role: "Responsable communication",
    company: "N'Djam Consulting",
    quote:
      "Professionnalisme et créativité. Le site reflète parfaitement l'image que nous voulions donner à nos clients.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="px-6 py-24 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-4"
          >
            Témoignages
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Ce que nos clients en disent
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted max-w-xl mx-auto"
          >
            La confiance de nos clients est notre meilleure carte de visite.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/40 transition-colors duration-300"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>

              <p className="text-white text-sm leading-relaxed mb-6">
                &laquo; {t.quote} &raquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-white text-sm font-medium">{t.name}</p>
                  <p className="text-muted text-xs">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}