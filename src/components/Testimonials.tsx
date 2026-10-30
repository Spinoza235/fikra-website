"use client";

import { useLang } from "@/src/lib/i18n";

// Témoignages clients.
// N'ajoutez ici que de VRAIS retours, avec l'accord du client.
// Tant que la liste est vide, la section n'apparaît pas sur le site.

type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  // Exemple :
  // {
  //   name: "Prénom Nom",
  //   role: "Gérant",
  //   company: "Nom de la boutique",
  //   quote: "Ce que le client dit, avec ses mots.",
  // },
];

export default function Testimonials() {
  const { t } = useLang();
  if (testimonials.length === 0) return null;

  return (
    <section className="px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold md:text-[2.6rem] md:leading-[1.1]">
          {t.testimonials.title}
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <blockquote className="text-lg leading-relaxed text-white">« {t.quote} »</blockquote>
              <figcaption className="mt-6 text-sm">
                <span className="font-semibold text-white">{t.name}</span>
                <span className="block text-muted">
                  {t.role}, {t.company}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}