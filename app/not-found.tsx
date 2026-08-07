import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-24 text-white sm:px-10">
      <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-[#0B1F3A]/95 p-10 shadow-[0_40px_120px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <p className="text-sm uppercase tracking-[0.32em] text-brand-amber">
          Page not found
        </p>
        <h1 className="mt-6 text-4xl font-semibold sm:text-5xl">
          Oops — we can’t find that page.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
          The page you’re looking for doesn’t exist or has been moved. Use the
          link below to return home.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex rounded-full bg-gradient-to-r from-[#F58220] to-[#FFC72C] px-6 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110"
          >
            Go back home
          </Link>
        </div>
      </div>
    </main>
  );
}
