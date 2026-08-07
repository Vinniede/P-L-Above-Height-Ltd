"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Factory,
  Home,
  Landmark,
  Layers3,
  Warehouse,
} from "lucide-react";

const industries = [
  {
    title: "Construction",
    description:
      "Residential, commercial and civil construction solutions designed for projects of every scale.",
    image: "/images/Industries/Modern commercial construction site.jfif",
    icon: Building2,
    accent: "Construction",
  },
  {
    title: "Manufacturing",
    description:
      "Reliable engineering products, industrial tools and safety equipment supporting modern manufacturing facilities.",
    image: "/images/Industries/Industrial factory interior.jfif",
    icon: Factory,
    accent: "Industrial",
  },
  {
    title: "Government",
    description:
      "Supplying compliant construction materials and engineering solutions for public infrastructure and institutional projects.",
    image: "/images/Industries/Road or public infrastructure project.jfif",
    icon: Landmark,
    accent: "Public Works",
  },
  {
    title: "Infrastructure",
    description:
      "Supporting roads, bridges and large-scale infrastructure developments with quality materials and dependable execution.",
    image: "/images/Industries/Bridge or highway construction.jfif",
    icon: Layers3,
    accent: "Civil Works",
  },
  {
    title: "Commercial",
    description:
      "Professional construction and engineering solutions for offices, retail spaces and commercial developments.",
    image: "/images/Industries/Office building construction.jpg",
    icon: Warehouse,
    accent: "Business",
  },
  {
    title: "Real Estate",
    description:
      "Supplying premium materials and construction services for residential housing and mixed-use developments.",
    image: "/images/Industries/Residential housing development.jfif",
    icon: Home,
    accent: "Development",
  },
];

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "500+", label: "Products Supplied" },
  { value: "20+", label: "Industry Partners" },
  { value: "100%", label: "Quality Commitment" },
];

type IndustriesWeServeProps = {
  compact?: boolean;
  eyebrow?: string;
  title?: string;
  description?: string;
  showStats?: boolean;
  className?: string;
};

export function IndustriesWeServe({
  compact = false,
  eyebrow = "OUR INDUSTRIES",
  title = "Industries We Serve",
  description = "Delivering construction, engineering and industrial supply solutions across diverse sectors with quality, reliability and professionalism.",
  showStats = true,
  className = "",
}: IndustriesWeServeProps) {
  return (
    <section
      className={`relative overflow-hidden bg-[#F8FAFC] py-12 sm:py-16 ${className}`}
    >
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(11,31,58,0.95) 1px, transparent 1px), linear-gradient(90deg, rgba(11,31,58,0.95) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />
      <div className="container-shell relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className={`mx-auto text-center ${compact ? "max-w-2xl" : "max-w-[760px]"}`}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-blue">
            {eyebrow}
          </p>
          <h2
            className={`mt-4 font-display font-semibold leading-tight text-brand-navy ${compact ? "text-3xl sm:text-4xl" : "text-4xl sm:text-5xl"}`}
          >
            {title}
          </h2>
          <p
            className={`mx-auto mt-5 text-base leading-8 text-slate-600 sm:text-lg ${compact ? "max-w-xl" : "max-w-3xl"}`}
          >
            {description}
          </p>
        </motion.div>

        {showStats && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[1.4rem] border border-slate-200 bg-white/80 p-5 text-center shadow-sm backdrop-blur"
              >
                <p className="font-display text-3xl font-semibold text-brand-blue">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-medium uppercase tracking-[0.25em] text-slate-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        )}

        <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.article
                key={industry.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.01 }}
                className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_18px_60px_rgba(11,31,58,0.08)]"
              >
                <div className="relative h-[320px] overflow-hidden sm:h-[360px]">
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,31,58,0.05)_0%,rgba(11,31,58,0.42)_55%,rgba(11,31,58,0.78)_100%)]" />
                  <div className="absolute inset-0 transition duration-500 group-hover:bg-[linear-gradient(180deg,rgba(11,31,58,0.12)_0%,rgba(30,77,120,0.5)_55%,rgba(44,95,138,0.72)_100%)]" />
                  <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/25 bg-white/90 text-brand-blue shadow-sm">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-amber">
                      {industry.accent}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-semibold">
                      {industry.title}
                    </h3>
                    <p className="mt-3 max-w-[24rem] text-sm leading-7 text-slate-200">
                      {industry.description}
                    </p>
                    <div className="mt-4 inline-flex items-center gap-2 font-semibold text-brand-amber">
                      Learn More{" "}
                      <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
