import Link from "next/link";
import { Facebook, Instagram, Linkedin, Send } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-brand-navy text-white">
      <div className="container-shell py-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr_0.7fr]">
          <div>
            <h3 className="font-display text-2xl font-semibold">
              P & L Above Heights Ltd
            </h3>
            <p className="mt-4 max-w-md text-slate-300">
              Premium construction, engineering, and industrial supply solutions
              for modern Kenya.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="mt-4 space-y-3 text-slate-300">
              <li>
                <Link href="/services" className="hover:text-brand-amber">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-brand-amber">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-brand-amber">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-amber">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Social</h4>
            <div className="mt-4 flex gap-3">
              <a
                href="#"
                className="rounded-full border border-white/20 p-3 transition hover:border-brand-orange hover:text-brand-orange"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="rounded-full border border-white/20 p-3 transition hover:border-brand-orange hover:text-brand-orange"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="rounded-full border border-white/20 p-3 transition hover:border-brand-orange hover:text-brand-orange"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="rounded-full border border-white/20 p-3 transition hover:border-brand-orange hover:text-brand-orange"
              >
                <Send className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-white/15 pt-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© 2026 P & L Above Heights Ltd. All rights reserved.</p>
          <p>
            Built for reliable delivery, quality products, and trusted
            partnerships.
          </p>
        </div>
      </div>
    </footer>
  );
}
