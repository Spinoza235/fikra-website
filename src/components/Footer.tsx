"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUp, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import { site, whatsappLink } from "@/src/lib/site";
import { getPillars } from "@/src/lib/services";
import { useLang } from "@/src/lib/i18n";

// ✏️ Mettez l'adresse de chaque page quand elle existe (dans src/lib/site.ts, rubrique « socials »).
// Tant qu'une adresse est vide, l'icône s'affiche quand même, mais n'est pas cliquable.
const socials = site.socials as Record<string, string>;
const socialLinks = [
  { href: socials.facebook ?? "", label: "Facebook", Icon: FaFacebookF },
  { href: socials.linkedin ?? "", label: "LinkedIn", Icon: FaLinkedinIn },
  { href: socials.x ?? "", label: "X", Icon: FaXTwitter },
];

const iconClass =
  "flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-white/85 transition-all duration-300";

// Réseau de neurones discret, le même motif que le logo
function NeuralLines() {
  const nodes: [number, number][] = [
    [40, 60], [170, 30], [300, 90], [430, 40], [560, 110], [700, 50], [840, 100], [980, 30], [1110, 80], [1180, 20],
    [90, 180], [250, 210], [400, 170], [620, 220], [780, 170], [930, 210], [1070, 170],
  ];
  const links: [number, number][] = [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9],
    [0, 10], [10, 11], [11, 2], [11, 12], [12, 4], [12, 13], [13, 5], [13, 14], [14, 6], [14, 15], [15, 7], [15, 16], [16, 8],
  ];
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 h-[240px] w-full opacity-60"
      viewBox="0 0 1200 240"
      preserveAspectRatio="xMidYMin slice"
    >
      <defs>
        <linearGradient id="footer-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#A78BFA" stopOpacity="0.35" />
          <stop offset="1" stopColor="#A78BFA" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g stroke="url(#footer-fade)" strokeWidth="1">
        {links.map(([a, b]) => (
          <line key={`${a}-${b}`} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} />
        ))}
      </g>
      <g fill="#A78BFA">
        {nodes.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={i % 4 === 0 ? 2.6 : 1.6} opacity={y < 120 ? 0.55 : 0.25} />
        ))}
      </g>
    </svg>
  );
}

export default function Footer() {
  const { t } = useLang();
  const f = t.footer;
  const pillars = getPillars(t);

  return (
    <footer className="relative overflow-hidden bg-[#0B0B14] px-4 text-white sm:px-6">
      {/* Ligne lumineuse en haut du pied de page */}
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-light/70 to-transparent" />
      <div aria-hidden="true" className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[720px] -translate-x-1/2 rounded-full bg-primary/20 blur-[100px]" />
      <NeuralLines />

      <div className="relative mx-auto max-w-6xl">
        {/* Contact direct : le canal que nos clients utilisent vraiment */}
        <div className="flex flex-col gap-8 border-b border-white/10 pt-16 pb-12 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="text-2xl font-semibold leading-tight md:text-3xl">{f.talkTitle}</p>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">{f.talkText}</p>
          </div>
          <div className="flex flex-col items-start gap-3 md:items-end">
            <a
              href={whatsappLink(t.common.waDefault)}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-2xl bg-wa px-5 py-3.5 text-white shadow-lg shadow-wa/25 transition-transform duration-300 hover:-translate-y-0.5"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
                <FaWhatsapp className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-xl font-semibold tracking-tight" dir="ltr">{site.phoneDisplay}</span>
            </a>
            <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-white">
              <Mail className="h-4 w-4" aria-hidden="true" />
              {f.orEmail} : <span dir="ltr" className="text-white/85">{site.email}</span>
            </a>
          </div>
        </div>

        {/* Plan du site */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 py-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5" aria-label="ZakiCortex">
              <Image src="/zakicortex-logo.png" alt="" width={36} height={36} className="h-9 w-9" />
              <span className="text-xl font-bold tracking-tight" dir="ltr">
                Zaki<span className="bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">Cortex</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">{f.description}</p>
            <p className="mt-4 inline-flex items-center gap-2 text-sm text-white/80">
              <MapPin className="h-4 w-4 text-primary-light" aria-hidden="true" />
              {t.common.city}, {t.common.country}
            </p>

            <ul className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ href, label, Icon }) => (
                <li key={label}>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`ZakiCortex ${label}`}
                      className={`${iconClass} hover:-translate-y-0.5 hover:border-transparent hover:bg-gradient-to-br hover:from-primary hover:to-primary-light hover:text-white hover:shadow-lg hover:shadow-primary/30`}
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ) : (
                    <span title={label} aria-label={label} className={`${iconClass} cursor-default opacity-60`}>
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label={f.services}>
            <p className="mb-4 text-sm font-semibold text-white">{f.services}</p>
            <ul className="space-y-3 text-sm text-muted">
              {pillars.map((p) => (
                <li key={p.id}>
                  <Link href={`/services#${p.id}`} className="transition-colors hover:text-primary-light">
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={f.agency}>
            <p className="mb-4 text-sm font-semibold text-white">{f.agency}</p>
            <ul className="space-y-3 text-sm text-muted">
              <li><Link href="/portfolio" className="transition-colors hover:text-primary-light">{t.nav.portfolio}</Link></li>
              <li><Link href="/a-propos" className="transition-colors hover:text-primary-light">{t.nav.about}</Link></li>
              <li><Link href="/contact" className="transition-colors hover:text-primary-light">{t.nav.contact}</Link></li>
            </ul>
          </nav>
        </div>

        {/* Grand nom de marque, en filigrane */}
        <p
          aria-hidden="true"
          dir="ltr"
          className="pointer-events-none -mb-[0.22em] select-none bg-gradient-to-b from-white/[0.2] via-primary-light/[0.13] to-transparent bg-clip-text text-center text-[19vw] leading-[0.9] font-bold tracking-[-0.04em] text-transparent lg:text-[13.5rem]"
        >
          ZakiCortex
        </p>
      </div>

      {/* Bas de page */}
      <div className="relative -mx-4 border-t border-white/10 bg-[#0B0B14]/80 px-4 backdrop-blur sm:-mx-6 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 py-5 text-xs text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} ZakiCortex. {f.rights}</p>
          <p>{f.madeIn}</p>
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            aria-label={f.backToTop}
            title={f.backToTop}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-white/80 transition-colors hover:border-primary-light hover:text-white"
          >
            <ArrowUp className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
