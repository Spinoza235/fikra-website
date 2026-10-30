"use client";

import Image from "next/image";
import Link from "next/link";
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
  "flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-all duration-300";

export default function Footer() {
  const { t } = useLang();
  const pillars = getPillars(t);

  return (
    <footer className="border-t border-white/10 bg-dark px-4 text-white sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="mb-3 flex items-center gap-2.5">
            <Image src="/fikra-logo.png" alt="Fikra Tech" width={28} height={28} className="h-7 w-auto" />
            <p className="text-lg font-bold" dir="ltr">
              Fikra<span className="text-primary">Tech</span>
            </p>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted">{t.footer.description}</p>

          {/* Réseaux sociaux */}
          <ul className="mt-6 flex items-center gap-3">
            {socialLinks.map(({ href, label, Icon }) => (
              <li key={label}>
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Fikra Tech ${label}`}
                    className={`${iconClass} hover:-translate-y-0.5 hover:border-transparent hover:bg-gradient-to-br hover:from-primary hover:to-primary-light hover:shadow-lg hover:shadow-primary/30`}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ) : (
                  <span title={label} aria-label={label} className={`${iconClass} cursor-default opacity-70`}>
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 font-semibold">{t.footer.services}</p>
          <ul className="space-y-2 text-sm text-muted">
            {pillars.map((p) => (
              <li key={p.id}>
                <Link href={`/services#${p.id}`} className="hover:text-white">
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 font-semibold">{t.footer.agency}</p>
          <ul className="space-y-2 text-sm text-muted">
            <li><Link href="/portfolio" className="hover:text-white">{t.nav.portfolio}</Link></li>
            <li><Link href="/a-propos" className="hover:text-white">{t.nav.about}</Link></li>
            <li><Link href="/contact" className="hover:text-white">{t.nav.contact}</Link></li>
          </ul>
        </div>

        <div>
          <p className="mb-3 font-semibold">{t.footer.contact}</p>
          <ul className="space-y-2 text-sm text-muted">
            <li>{t.common.city}, {t.common.country}</li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a>
            </li>
            <li>
              <a
                href={whatsappLink(t.common.waDefault)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-white"
              >
                <FaWhatsapp className="h-4 w-4" aria-hidden="true" />
                <span dir="ltr">{site.phoneDisplay}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="-mx-4 border-t border-white/10 px-4 py-5 text-center text-xs text-muted sm:-mx-6">
        © {new Date().getFullYear()} Fikra Tech. {t.footer.rights}
      </div>
    </footer>
  );
}