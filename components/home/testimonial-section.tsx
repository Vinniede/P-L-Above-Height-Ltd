"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Their team combined strong execution with dependable supply support. Every stage felt organised, professional and accountable.",
    name: "Michael Waweru",
    company: "Capital Developments",
    initials: "MW",
  },
  {
    quote:
      "From procurement to on-site delivery, the standard of service was exceptional and the quality was clear from day one.",
    name: "Asha Mugo",
    company: "Northstar Construction",
    initials: "AM",
  },
  {
    quote:
      "We valued the calm coordination and practical support across our materials and site requirements. It made a real difference.",
    name: "Daniel Otieno",
    company: "Prime Industrial Group",
    initials: "DO",
  },
];

const clients = [
  "NCA",
  "KRA",
  "County Governments",
  "Parastatals",
  "Private Developers",
  "Manufacturers",
];

export function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = testimonials[activeIndex];

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );

  return (
    <section className="bg-[#F8FAFC] py-12 sm:py-16">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-blue">
            Testimonials & Clients
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-brand-navy sm:text-4xl">
            Trusted by clients across Kenya who expect performance and
            precision.
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_18px_60px_rgba(11,31,58,0.08)] sm:p-10">
            <div className="flex items-center justify-between">
              <div className="flex gap-1 text-brand-amber">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-brand-navy transition hover:border-brand-blue hover:text-brand-blue"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={next}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-brand-navy transition hover:border-brand-blue hover:text-brand-blue"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current.name}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.35 }}
                className="mt-8"
              >
                <p className="text-xl leading-9 text-slate-700">
                  “{current.quote}”
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue/10 text-sm font-semibold text-brand-blue">
                    {current.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-brand-navy">
                      {current.name}
                    </p>
                    <p className="text-sm text-slate-500">{current.company}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {clients.map((client) => (
              <motion.div
                key={client}
                whileHover={{ y: -4, scale: 1.01 }}
                className="flex h-24 items-center justify-center rounded-[1.4rem] border border-slate-200 bg-white text-center font-semibold text-brand-navy shadow-sm"
              >
                {client}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
