"use client";

import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function ContactContent() {
  const [state, handleSubmit] = useForm("xqpzwkrg");

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
          Parlons de votre <span className="text-primary">projet</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-muted max-w-xl mx-auto"
        >
          Décrivez-nous votre besoin, nous revenons vers vous rapidement avec une réponse
          adaptée.
        </motion.p>
      </section>

      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-10">
          {/* Coordonnées */}
          <div className="md:col-span-2 flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-light">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white font-medium mb-1">Email</p>
                <p className="text-muted text-sm">contact@fikratech.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-light">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white font-medium mb-1">WhatsApp</p>

                <a href="https://wa.me/235XXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted text-sm hover:text-primary transition-colors"
                >
                  +235 XX XX XX XX
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-light">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white font-medium mb-1">Localisation</p>
                <p className="text-muted text-sm">N&apos;Djamena, Tchad</p>
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <div className="md:col-span-3">
            {state.succeeded ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/5 border border-primary/30 rounded-2xl p-10 text-center flex flex-col items-center gap-4"
              >
                <CheckCircle2 className="w-12 h-12 text-primary" />
                <h3 className="text-white font-semibold text-lg">Message envoyé !</h3>
                <p className="text-muted text-sm">
                  Merci pour votre message, nous vous répondons très prochainement.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-white text-sm mb-2">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-primary transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white text-sm mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-primary transition-colors"
                      placeholder="vous@exemple.com"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                      className="text-red-400 text-xs mt-1"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white text-sm mb-2">
                    Type de besoin
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-primary transition-colors"
                  >
                    <option className="bg-dark">Création de site web</option>
                    <option className="bg-dark">Développement sur mesure</option>
                    <option className="bg-dark">Digitalisation d&apos;entreprise</option>
                    <option className="bg-dark">Intelligence artificielle</option>
                    <option className="bg-dark">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white text-sm mb-2">
                    Votre message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Décrivez-nous votre projet..."
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-red-400 text-xs mt-1"
                  />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-light disabled:opacity-60 text-white px-6 py-3.5 rounded-xl font-medium transition-colors duration-300"
                >
                  {state.submitting ? "Envoi en cours..." : "Envoyer le message"}
                  {!state.submitting && <Send className="w-4 h-4" />}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}