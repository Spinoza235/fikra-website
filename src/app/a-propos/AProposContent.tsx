"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
              className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center"
            >
              <div className="relative w-32 h-32 sm:w-36 sm:h-36 mx-auto mb-5 rounded-full overflow-hidden ring-2 ring-primary/40">
                <Image
                  src="/images/team/cofounder-1.jpeg"
                  alt="Photo du cofondateur, expert en Intelligence Artificielle"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-primary text-sm font-medium mb-3">
                Expert en Intelligence Artificielle
              </p>
              <p className="text-muted text-sm leading-relaxed">
                Passionné par l&apos;IA appliquée, il conçoit des solutions intelligentes qui
                résolvent de vrais problèmes métier — de l&apos;architecture logicielle aux
                assistants intégrés dans nos applications.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center"
            >
              <div className="relative w-32 h-32 sm:w-36 sm:h-36 mx-auto mb-5 rounded-full overflow-hidden ring-2 ring-primary/40">
                <Image
                  src="/images/team/cofounder-2.jpeg"
                  alt="Photo du cofondateur, expert en développement d'applications"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-primary text-sm font-medium mb-3">
                Expert en développement d&apos;applications
              </p>
              <p className="text-muted text-sm leading-relaxed">
                Du cahier des charges à la mise en ligne, il transforme chaque besoin client en
                application robuste et bien pensée, tout en assurant un suivi de proximité à
                chaque étape du projet.
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