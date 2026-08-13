"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Clock3,
  Handshake,
  PackageCheck,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const reasons = [
  {
    icon: BadgeCheck,
    title: "Quality Assured",
    description:
      "Structured processes and documented standards drive quality at every stage.",
  },
  {
    icon: ShieldCheck,
    title: "Safety First",
    description:
      "Safety controls and responsible execution are built into every engagement.",
  },
  {
    icon: PackageCheck,
    title: "Reliable Supply Chain",
    description:
      "Dependable movement of materials and products keeps projects on course.",
  },
  {
    icon: Users,
    title: "Experienced Professionals",
    description:
      "Skilled teams with a strong understanding of technical delivery and site needs.",
  },
  {
    icon: Clock3,
    title: "Timely Delivery",
    description:
      "A disciplined operating model supports schedules and client confidence.",
  },
  {
    icon: TrendingUp,
    title: "Competitive Value",
    description:
      "Balanced procurement and sourcing strategies help protect project value.",
  },
  {
    icon: Handshake,
    title: "Trusted Partner",
    description:
      "Long-term relationships grounded in responsiveness and accountability.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="bg-[#F8FAFC] py-12 sm:py-16">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Professional delivery, dependable support and lasting trust."
            description="We combine engineering discipline with responsive service to elevate how projects are delivered."
          />
        </motion.div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.01 }}
                className="rounded-[1.8rem] border border-slate-200 bg-white p-7 shadow-[0_18px_60px_rgba(11,31,58,0.08)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-orange/10 text-brand-orange">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-brand-navy">
                  {reason.title}
                </h3>
                <p className="mt-3 text-slate-600">{reason.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
