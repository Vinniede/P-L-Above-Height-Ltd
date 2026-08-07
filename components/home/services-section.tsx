"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  HardHat,
  Layers3,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const services = [
  {
    icon: Building2,
    title: "Construction Works",
    description:
      "Robust execution for civil, structural and commercial construction engagements.",
    image: "/images/services/Commercial building under construction.jfif",
  },
  {
    icon: Layers3,
    title: "Building Materials",
    description:
      "Premium materials sourced for durability, efficiency and dependable project delivery.",
    image: "/images/services/Construction materials display.jfif",
  },
  {
    icon: HardHat,
    title: "Quarry Products",
    description:
      "Quality aggregates and quarry materials for infrastructure and industrial works.",
    image: "/images/services/Stone loading with excavator.jfif",
  },
  {
    icon: Wrench,
    title: "Engineering Supplies",
    description:
      "Specialised tools and components that support efficient installations and repairs.",
    image: "/images/services/Professional workshop.jfif",
  },
  {
    icon: ShieldCheck,
    title: "Safety Equipment",
    description:
      "Certified safety products that strengthen site protection and compliance.",
    image: "/images/services/Workers wearing complete PPE.jfif",
  },
  {
    icon: Sparkles,
    title: "Welding Consumables",
    description:
      "High-performance consumables for fabrication and repair projects.",
    image: "/images/services/Welder with sparks.jfif",
  },
];

export function ServicesSection() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <SectionHeading
            eyebrow="Construction & Engineering Solutions"
            title="Specialised services shaped for strong delivery outcomes."
            description="We support projects across construction, supply and engineering with clear execution and dependable quality."
          />
        </motion.div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.01 }}
                className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-brand-bg shadow-[0_18px_60px_rgba(11,31,58,0.08)]"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,31,58,0.04),rgba(11,31,58,0.40))]" />
                </div>
                <div className="p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold text-brand-navy">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-slate-600">{service.description}</p>
                  <Link
                    href="/services"
                    className="mt-6 inline-flex items-center gap-2 font-semibold text-brand-orange"
                  >
                    Learn more{" "}
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
