"use client";

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Consultation",
    description: "We understand your goals, scope and delivery priorities.",
  },
  {
    title: "Planning",
    description: "Technical planning, procurement strategy and site alignment.",
  },
  {
    title: "Quotation",
    description:
      "Transparent pricing and product recommendations tailored to your project.",
  },
  {
    title: "Procurement",
    description: "Reliable sourcing of materials and industrial supplies.",
  },
  {
    title: "Execution",
    description: "Disciplined implementation supported by experienced teams.",
  },
  {
    title: "Quality Inspection",
    description: "Final checks for workmanship, safety and performance.",
  },
  {
    title: "Project Completion",
    description: "Responsible handover and long-term client support.",
  },
];

export function ProcessSection() {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16">
      <div className="absolute inset-0">
        <Image
          src="/images/Projects/High-rise buildings.jfif"
          alt="Engineering process background"
          fill
          className="object-cover object-center"
          quality={100}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,31,58,0.18),rgba(11,31,58,0.1))]" />
      </div>

      <div className="container-shell relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl rounded-[2rem] bg-slate-950/85 p-8 text-center text-white shadow-[0_28px_100px_rgba(0,0,0,0.35)]"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-amber">
            Our Process
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
            A premium delivery journey built on clarity and control.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-200">
            From first consultation to project completion, every stage is
            managed with precision, transparency and accountability.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-7">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative rounded-[1.4rem] border border-white/15 bg-slate-950/70 p-5 text-center text-white shadow-sm"
            >
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-brand-amber text-sm font-semibold text-brand-navy">
                0{index + 1}
              </div>
              <h3 className="mt-4 font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-200">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div className="absolute -right-3 top-7 hidden h-[2px] w-6 bg-brand-amber lg:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
