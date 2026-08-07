"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function ParallaxBanner() {
  return (
    <section className="relative overflow-hidden py-12 text-white sm:py-16">
      <Image
        src="/images/services/commercial-building-under-construction.jfif"
        alt="Commercial building under construction"
        fill
        className="object-cover object-center"
        quality={100}
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(11,31,58,0.18),rgba(30,77,120,0.1))]" />
      <div className="container-shell relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl rounded-[2rem] border border-white/15 bg-slate-950/85 p-8 shadow-[0_28px_100px_rgba(0,0,0,0.35)] sm:p-10"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-amber">
            Built to Last
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
            Building quality that lasts through every phase of delivery.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-200">
            Engineering excellence backed by quality materials, disciplined
            execution and experienced professionals.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/request-quotation"
              className="rounded-full bg-brand-orange px-6 py-3 font-semibold text-white transition hover:bg-brand-amber hover:text-brand-navy"
            >
              Request Quotation
            </Link>
            <Link
              href="/services"
              className="rounded-full border border-white/20 bg-slate-950/10 px-6 py-3 font-semibold text-white transition hover:bg-slate-950/20"
            >
              Explore Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
