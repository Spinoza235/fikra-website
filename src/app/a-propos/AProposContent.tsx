"use client";

import { motion } from "framer-motion";
import { GraduationCap, Target, Users } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Rigueur technique",
    description: "Chaque projet est construit avec des technologies modernes et des pratiques de développement propres et documentées.",
  },
  {
    icon: Users,
    title: "Proximité client",
    description: "Nous accompagnons chaque client personnellement, de la première discussion jusqu'au suivi après livraison.",
  },
  {
    icon: GraduationCap,
    title: "Expertise en évolution",
    description: "Une formation continue en intelligence artificielle et développement pour proposer des solutions à jour et pertinentes.",
  },
];

export default function AProposContent() {
  return (
    <div className="bg-dark">
      {/* HEADER DE PAGE */}
      <section className="px-6 py-20 text-center border-b border-white/10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          À propos de <span className="text-primary">Fikra Tech</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-muted max-w-xl mx-auto"
        >
          Une startup tchadienne née de la volonté de rendre la technologie accessible aux
          entreprises locales.
        </motion.p>
      </section>

      {/* HISTOIRE */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-white mb-4">Notre histoire</h2>
            <p className="text-muted leading-relaxed mb-4">
              Fikra Tech est née de la rencontre de deux passionnés de technologie, convaincus
              que le Tchad regorge d&apos;entreprises et d&apos;entrepreneurs qui gagneraient à
              être mieux accompagnés dans leur transition numérique.
            </p>
            <p className="text-muted leading-relaxed">
              &laquo; Fikra &raquo;, qui signifie &laquo; idée &raquo;, résume notre philosophie :
              transformer une idée, aussi simple soit-elle, en une solution technologique
              concrète et fonctionnelle.
            </p>
          </motion.div>
        </div>
      </section>

      {/* EQUIPE */}
      <section className="px-6 py-20 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-white text-center mb-14"
          >
            L&apos;équipe fondatrice
          </motion.h2>

          <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-light mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-1">Cofondateur 1</h3>
              <p className="text-primary text-sm mb-2">Direction technique</p>
              <p className="text-muted text-sm leading-relaxed">
                Master en Intelligence Artificielle. Spécialisé en développement, architecture
                logicielle et solutions IA.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-light mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-1">Cofondateur 2</h3>
              <p className="text-primary text-sm mb-2">Développement & relation client</p>
              <p className="text-muted text-sm leading-relaxed">
                Licence en Informations Générales. En charge du développement, de la
                communication et du suivi client.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VALEURS */}
      <section className="px-6 py-20 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-white text-center mb-14"
          >
            Nos valeurs
          </motion.h2>

          <div className="grid sm:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-light mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-white font-semibold mb-2">{value.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}