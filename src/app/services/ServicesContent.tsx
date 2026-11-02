"use client";

import { useEffect, useRef } from "react";
import { Check } from "lucide-react";
import { getPillars, type Pillar } from "@/src/lib/services";
import { PageHero, CtaBand } from "@/src/components/Blocks";
import Reveal from "@/src/components/Reveal";
import { useLang } from "@/src/lib/i18n";

// Menu des 4 domaines.
// Sur ordinateur, tout tient sur une ligne : rien ne bouge.
// Sur mobile, le menu dépasse l'écran : il passe tout seul au domaine suivant toutes les 2,5 secondes,
// et se met en pause 6 secondes quand le visiteur le touche.
function ServicesNav({ pillars, label }: { pillars: Pillar[]; label: string }) {
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let index = 0;
    let paused = false;
    let visible = false;
    let resume: ReturnType<typeof setTimeout> | undefined;

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    observer.observe(list);

    const tick = () => {
      // Rien à faire si tout est visible (grand écran) ou si le menu n'est pas à l'écran
      if (paused || !visible || list.scrollWidth <= list.clientWidth + 4) return;
      index = (index + 1) % list.children.length;
      const item = list.children[index] as HTMLElement;
      const listBox = list.getBoundingClientRect();
      const itemBox = item.getBoundingClientRect();
      const offset = itemBox.left - listBox.left - (listBox.width - itemBox.width) / 2;
      list.scrollBy({ left: offset, behavior: "smooth" });
    };
    const timer = setInterval(tick, 2500);

    const pause = () => {
      paused = true;
      clearTimeout(resume);
      resume = setTimeout(() => (paused = false), 6000);
    };
    list.addEventListener("pointerdown", pause);
    list.addEventListener("touchstart", pause, { passive: true });
    list.addEventListener("wheel", pause, { passive: true });

    return () => {
      clearInterval(timer);
      clearTimeout(resume);
      observer.disconnect();
      list.removeEventListener("pointerdown", pause);
      list.removeEventListener("touchstart", pause);
      list.removeEventListener("wheel", pause);
    };
  }, []);

  return (
    <nav aria-label={label} className="relative z-10 -mt-6 px-4 sm:px-6">
      <div className="mx-auto w-fit max-w-full overflow-hidden rounded-full border border-white/10 bg-[#161626] shadow-2xl shadow-black/40">
        <ul
          ref={listRef}
          className="scrollbar-hide flex gap-1 overflow-x-auto p-1.5 [mask-image:linear-gradient(to_right,transparent,black_20px,black_calc(100%-20px),transparent)] md:[mask-image:none]"
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
      </div>
    </nav>
  );
}

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

      {/* Menu des domaines : reste à sa place ; sur mobile il défile tout seul */}
      <ServicesNav pillars={pillars} label={sp.navLabel} />

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