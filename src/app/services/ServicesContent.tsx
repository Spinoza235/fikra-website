"use client";

import { Check } from "lucide-react";
import { getPillars } from "@/src/lib/services";
import { PageHero, CtaBand } from "@/src/components/Blocks";
import Reveal from "@/src/components/Reveal";
import { useLang } from "@/src/lib/i18n";

export default function ServicesContent() {
  const { t } = useLang();
  const sp = t.servicesPage;
  const pillars = getPillars(t);

  return (
    <>
      <PageHero
        title={sp.title}
        intro={sp.intro}
      />

      {/* Menu des domaines : reste à sa place, sous le titre de la page */}
      <nav aria-label={sp.navLabel} className="relative z-10 -mt-6 px-4 sm:px-6">
        <ul
          className="scrollbar-hide mx-auto flex w-fit max-w-full gap-1 overflow-x-auto rounded-full border border-white/10 bg-[#161626] p-1.5 shadow-2xl shadow-black/40"
          style={{ scrollbarWidth: "none" }}
        >
          {pillars.map((p) => (
            <li key={p.id} className="flex-shrink-0">
              <a
                href={`#${p.id}`}
                className="flex items-center gap-2 rounded-full px-4 py-2 text-sm text-muted transition-colors hover:bg-white/10 hover:text-white"
              >
                <p.icon className="h-4 w-4 text-primary-light" aria-hidden="true" />
                {p.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {pillars.map((p, i) => (
        <section key={p.id} id={p.id} className="relative px-4 py-16 sm:px-6 md:py-24">
          {i % 2 === 0 && (
            <div aria-hidden="true" className="pointer-events-none absolute top-1/4 left-0 h-72 w-72 rounded-full bg-primary/10 blur-[100px]" />
          )}
          <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
            <Reveal>
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-light shadow-lg shadow-primary/30">
                <p.icon className="h-7 w-7 text-white" strokeWidth={1.8} aria-hidden="true" />
              </span>
              <h2 className="mt-6 text-3xl font-bold md:text-4xl">{p.title}</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">{p.summary}</p>
              <p className="mt-6 inline-block rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-muted">
                <span className="font-semibold text-white">{t.common.forWho}</span>
                {p.forWho}
              </p>
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2">
              {p.items.map((item, j) => (
                <Reveal key={item.title} delay={j * 0.08}>
                  <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-white/[0.06]">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary-light transition-colors group-hover:bg-primary group-hover:text-white">
                      <Check className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted">{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="border-t border-white/10 px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-semibold md:text-4xl">{sp.faqTitle}</h2>
          <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
            {sp.faq.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium text-white">
                  {f.q}
                  <span className="text-2xl leading-none text-primary-light transition-transform group-open:rotate-45" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="mt-3 leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title={sp.ctaTitle} />
    </>
  );
}