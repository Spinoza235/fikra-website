import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-4 pt-24 text-center">
      <p className="mb-4 font-medium text-primary-light">Erreur 404</p>
      <h1 className="mb-5 text-4xl font-semibold text-white md:text-6xl">Cette page n&apos;existe pas</h1>
      <p className="mb-10 max-w-md text-muted">
        Le lien est peut-être ancien ou mal saisi. Revenez à l&apos;accueil pour retrouver nos services.
      </p>
      <Link href="/" className="rounded-xl bg-primary px-7 py-3.5 font-semibold text-white hover:bg-primary-light">
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}
