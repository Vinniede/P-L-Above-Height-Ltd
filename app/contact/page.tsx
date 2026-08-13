import { Metadata } from "next";
import { MapPin, Phone, Mail, Clock3 } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | P & L Above Heights Ltd",
  description:
    "Get in touch with P & L Above Heights Ltd for quotations, project discussions, and support.",
};

export default function ContactPage() {
  return (
    <main className="pt-[72px] sm:pt-[80px] lg:pt-[90px] bg-brand-bg">
      <section className="bg-brand-navy text-white">
        <div className="container-shell py-14 sm:py-20 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-brand-amber">
              Get In Touch
            </p>
            <h1 className="mt-6 font-display text-4xl font-semibold sm:text-5xl">
              We’re ready to support your construction, engineering, and
              material supply needs.
            </h1>
            <p className="mt-6 text-lg text-slate-300">
              Reach out to us for quotations, project consultations, or product
              inquiries.
            </p>
          </div>
        </div>
      </section>

      <section className="container-shell py-12 sm:py-16 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="glass-card p-5 sm:p-8">
            <h2 className="font-display text-2xl font-semibold text-brand-navy sm:text-3xl">
              Contact details
            </h2>
            <div className="mt-8 space-y-6 text-slate-700">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-brand-orange" />
                <div>
                  <p className="font-semibold text-brand-navy">Location</p>
                  <p>Thika Super Highway</p>
                  <p>Astrol Petro Station</p>
                  <p>Ruiru, Kiambu, Kenya</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 text-brand-orange" />
                <div>
                  <p className="font-semibold text-brand-navy">
                    Postal Address
                  </p>
                  <p>P.O. Box 2838-00100</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 text-brand-orange" />
                <div>
                  <p className="font-semibold text-brand-navy">Call Us</p>
                  <p>0725 406 058</p>
                  <p>0783 448 888</p>
                  <p>0745 244 718</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 text-brand-orange" />
                <div>
                  <p className="font-semibold text-brand-navy">Email Us</p>
                  <p>info@plaboveheights.com</p>
                  <p>sales@plaboveheights.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock3 className="mt-1 h-5 w-5 text-brand-orange" />
                <div>
                  <p className="font-semibold text-brand-navy">
                    Business Hours
                  </p>
                  <p>Monday – Friday: 8:00 AM – 5:00 PM</p>
                  <p>Saturday: 8:00 AM – 1:00 PM</p>
                  <p>Sunday & Public Holidays: Closed</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-5 sm:p-8">
            <h2 className="font-display text-2xl font-semibold text-brand-navy sm:text-3xl">
              Send us a message
            </h2>
            <form className="mt-8 space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <input
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none"
                  placeholder="Name"
                />
                <input
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none"
                  placeholder="Company"
                />
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <input
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none"
                  placeholder="Email"
                />
                <input
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none"
                  placeholder="Phone"
                />
              </div>
              <textarea
                className="min-h-40 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none"
                placeholder="How can we help?"
              ></textarea>
              <button className="w-full rounded-full bg-brand-orange px-6 py-3 font-semibold text-white transition hover:bg-brand-navy sm:w-auto">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
