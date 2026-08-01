import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-bold mb-2">
            Fikra<span className="text-primary">Tech</span>
          </h3>
          <p className="text-muted text-sm">
            Sites web, développement, digitalisation et automatisation pour les entreprises au Tchad.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Navigation</h4>
          <ul className="space-y-2 text-muted text-sm">
            <li><Link href="/services" className="hover:text-primary">Services</Link></li>
            <li><Link href="/portfolio" className="hover:text-primary">Réalisations</Link></li>
            <li><Link href="/a-propos" className="hover:text-primary">À propos</Link></li>
            <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-muted text-sm">
            <li>N&apos;Djamena, Tchad</li>
            <li>contact@fikratech.com</li>
            <li>WhatsApp : +235 XX XX XX XX</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-muted text-xs">
        © {new Date().getFullYear()} Fikra Tech. Tous droits réservés.
      </div>
    </footer>
  );
}