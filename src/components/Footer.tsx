import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M16.6 5.82c-1.03-.9-1.66-2.19-1.66-3.62h-3.03v13.4c0 1.55-1.26 2.8-2.8 2.8a2.8 2.8 0 1 1 0-5.6c.28 0 .55.04.8.12V9.87a5.86 5.86 0 0 0-.8-.06 5.84 5.84 0 1 0 5.84 5.84V9.4a8.94 8.94 0 0 0 5.03 1.53V7.9c-1.24 0-2.4-.4-3.38-1.08a5.6 5.6 0 0 1-.03-1z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-dark text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-3">
        
        {/* Présentation */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Image
              src="/fikra-logo.png"
              alt="Fikra Tech"
              width={28}
              height={28}
              className="h-7 w-auto"
            />

            <h3 className="text-lg font-bold">
              Fikra<span className="text-primary">Tech</span>
            </h3>
          </div>

          <p className="text-muted text-sm mb-4">
            Sites web, développement, digitalisation et automatisation pour
            les entreprises au Tchad.
          </p>

          {/* Réseaux sociaux */}
          <div className="flex items-center gap-3">

            {/* Facebook */}
            <a
              href="https://facebook.com/votre-page"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Fikra Tech sur Facebook"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-white/15 text-white hover:border-primary hover:text-primary hover:bg-primary/10 transition-colors duration-300"
            >
              <FaFacebookF className="w-4 h-4" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/company/votre-page"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Fikra Tech sur LinkedIn"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-white/15 text-white hover:border-primary hover:text-primary hover:bg-primary/10 transition-colors duration-300"
            >
              <FaLinkedinIn className="w-4 h-4" />
            </a>

            {/* TikTok */}
            <a
              href="https://tiktok.com/@votre-page"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Fikra Tech sur TikTok"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-white/15 text-white hover:border-primary hover:text-primary hover:bg-primary/10 transition-colors duration-300"
            >
              <TikTokIcon className="w-4 h-4" />
            </a>

          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-semibold mb-3">Navigation</h4>

          <ul className="space-y-2 text-muted text-sm">
            <li>
              <Link
                href="/services"
                className="hover:text-primary"
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                href="/portfolio"
                className="hover:text-primary"
              >
                Réalisations
              </Link>
            </li>

            <li>
              <Link
                href="/a-propos"
                className="hover:text-primary"
              >
                À propos
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="hover:text-primary"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>

          <ul className="space-y-2 text-muted text-sm">
            <li>N&apos;Djamena, Tchad</li>
            <li>contact@fikratech.com</li>
            <li>WhatsApp : +235 66 92 58 38</li>
          </ul>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 py-4 text-center text-muted text-xs">
        © {new Date().getFullYear()} Fikra Tech. Tous droits réservés.
      </div>
    </footer>
  );
}