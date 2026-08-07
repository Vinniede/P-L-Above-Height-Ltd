import { Metadata } from "next";
import { QuotationForm } from "@/components/quotation-form";

export const metadata: Metadata = {
  title: "Request Quotation | P & L Above Heights Ltd",
  description:
    "Submit your project requirements and receive a tailored quotation from P & L Above Heights Ltd.",
};

export default function RequestQuotationPage() {
  return (
    <main className="pt-[72px] sm:pt-[80px] lg:pt-[90px] bg-brand-bg">
      <section className="bg-brand-navy text-white">
        <div className="container-shell py-14 sm:py-20 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-brand-amber">
              Request Quotation
            </p>
            <h1 className="mt-6 font-display text-4xl font-semibold sm:text-5xl">
              Share your project scope and let us prepare a tailored proposal.
            </h1>
            <p className="mt-6 text-lg text-slate-300">
              Our team will review your requirements and respond with a concise
              quotation plan aligned to your timeline and budget.
            </p>
          </div>
        </div>
      </section>

      <section className="container-shell py-12 sm:py-16 lg:py-20">
        <QuotationForm />
      </section>
    </main>
  );
}
