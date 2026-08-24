import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-dark min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
      <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">
        Erreur 404
      </span>
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
        Page introuvable
      </h1>
      <p className="text-muted max-w-md mb-10">
        La page que vous cherchez n&apos;existe pas.
      </p>
      <Link
        href="/"
        className="bg-primary hover:bg-primary-light text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300"
      >
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}