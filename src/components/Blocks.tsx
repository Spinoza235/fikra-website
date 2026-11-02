import GridBackground from "@/src/components/GridBackground";

// En-tête commun des pages intérieures.
export function PageHero({ title, intro }: { title: string; intro: string }) {
  return (
     <section className="relative overflow-hidden bg-gradient-to-b from-dark to-[#1A1A2E] px-4 pt-40 pb-16 sm:px-6 md:pt-48 md:pb-24">
      <GridBackground />
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 right-[-10%] h-[460px] w-[460px] rounded-full bg-primary/25 blur-[120px]" />
      <div className="relative mx-auto max-w-6xl">
        <h1 className="max-w-3xl text-4xl leading-[1.05] font-semibold text-white md:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{intro}</p>
      </div>
    </section>
  );
}

// Bandeau d'appel à l'action en bas de page (voir CtaBand.tsx).
export { default as CtaBand } from "./CtaBand";