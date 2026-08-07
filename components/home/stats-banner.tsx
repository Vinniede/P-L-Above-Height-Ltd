"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const stats = [
  { value: "150+", label: "Completed Projects" },
  { value: "500+", label: "Products Delivered" },
  { value: "20+", label: "Industry Partners" },
  { value: "98%", label: "Client Satisfaction" },
];

export function StatsBanner() {
  return (
    <section className="relative overflow-hidden py-12 text-white sm:py-16">
      <Image
        src="/images/Projects/Completed building exterior.jfif"
        alt="Completed building exterior"
        fill
        className="object-cover object-center"
        quality={100}
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(11,31,58,0.18),rgba(30,77,120,0.14))]" />
      <div className="container-shell relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl rounded-[2rem] bg-slate-950/85 p-8 text-center shadow-[0_28px_100px_rgba(0,0,0,0.35)]"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-amber">
            Performance at Scale
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Trusted delivery backed by measurable results.
          </h2>
        </motion.div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
              className="rounded-[1.6rem] border border-white/15 bg-slate-950/75 p-8 text-center"
            >
              <p className="font-display text-4xl font-semibold text-brand-amber">
                {stat.value}
              </p>
              <p className="mt-3 text-sm font-medium uppercase tracking-[0.25em] text-slate-200">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
