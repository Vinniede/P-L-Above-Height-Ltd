import Link from "next/link";

export function FinalCtaSection() {
  return (
    <section className="bg-gradient-to-br from-brand-navy via-slate-900 to-brand-navy py-12 text-white">
      <div className="container-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-amber">
            Let’s Build Together
          </p>
          <h2 className="mt-6 font-display text-4xl font-semibold sm:text-5xl">
            Let’s build your next project with confidence and precision.
          </h2>
          <p className="mt-6 text-lg text-slate-300">
            From quotation to execution, our team is ready to support your
            commercial, industrial, or infrastructure requirement.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/request-quotation"
              className="rounded-full bg-brand-orange px-7 py-3.5 font-semibold text-white transition hover:bg-brand-amber hover:text-brand-navy"
            >
              Request Quotation
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/20 bg-slate-950/20 px-7 py-3.5 font-semibold text-white transition hover:bg-slate-950/40"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
