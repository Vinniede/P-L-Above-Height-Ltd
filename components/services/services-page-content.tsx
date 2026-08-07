"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Clock3,
  Factory,
  HardHat,
  Layers3,
  ShieldCheck,
  Sparkles,
  Wrench,
  CheckCircle2,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const serviceHighlights = [
  "Commercial Buildings",
  "Residential Projects",
  "Concrete Structures",
  "Structural Steel",
  "Renovations",
  "Project Management",
];

const materialsCards = [
  {
    title: "Cement & Binders",
    image: "/images/Services/Cement bags stacked in warehouse.jfif",
    description:
      "Reliable bulk supply for structural and finishing applications.",
  },
  {
    title: "Steel Reinforcement",
    image: "/images/Services/Reinforcement steel bars.jfif",
    description: "High-strength steel solutions for structural integrity.",
  },
  {
    title: "Blocks & Bricks",
    image: "/images/Services/Blocks and bricks.jfif",
    description: "Durable masonry materials for rapid project execution.",
  },
];

const engineeringFeatures = [
  {
    title: "Industrial Engineering Tools",
    icon: Wrench,
    image: "/images/Services/Industrial engineering tools.jfif",
  },
  {
    title: "Precision Measuring Equipment",
    icon: Layers3,
    image: "/images/Services/Precision measuring equipment.jfif",
  },
  {
    title: "Professional Workshop",
    icon: Factory,
    image: "/images/Services/Professional workshop.jfif",
  },
];

const safetyFeatures = [
  { title: "PPE Supply", image: "/images/Services/Safety helmets.jfif" },
  {
    title: "Reflective Jackets",
    image: "/images/Services/Reflective jackets.jpg",
  },
  {
    title: "Safety Harnesses",
    image: "/images/Services/Safety harnesses.jfif",
  },
  {
    title: "Inspection Ready",
    image: "/images/Services/Industrial safety inspection.jfif",
  },
];

const processSteps = [
  "Consultation",
  "Site Assessment",
  "Quotation",
  "Supply / Construction",
  "Inspection",
  "Project Completion",
];

const industries = [
  {
    title: "Construction",
    label: "Construction",
    image: "/images/Industries/Modern commercial construction site.jfif",
    description:
      "Residential, commercial and civil construction solutions designed for projects of every scale.",
  },
  {
    title: "Manufacturing",
    label: "Industrial",
    image: "/images/Industries/Industrial factory interior.jfif",
    description:
      "Reliable engineering products, industrial tools and safety equipment supporting modern manufacturing facilities.",
  },
  {
    title: "Government",
    label: "Public Works",
    image: "/images/Industries/Road or public infrastructure project.jfif",
    description:
      "Supplying compliant construction materials and engineering solutions for public infrastructure and institutional projects.",
  },
  {
    title: "Infrastructure",
    label: "Civil Works",
    image: "/images/Industries/Bridge or highway construction.jfif",
    description:
      "Supporting roads, bridges and large-scale infrastructure developments with quality materials and dependable execution.",
  },
  {
    title: "Commercial",
    label: "Business",
    image: "/images/Industries/Office building construction.jpg",
    description:
      "Professional construction and engineering solutions for offices, retail spaces and commercial developments.",
  },
  {
    title: "Real Estate",
    label: "Development",
    image: "/images/Industries/Residential housing development.jfif",
    description:
      "Supplying premium materials and construction services for residential housing and mixed-use developments.",
  },
];

export function ServicesPageContent() {
  return (
    <main className="bg-brand-bg pt-[72px] sm:pt-[80px] lg:pt-[90px] text-brand-text">
      <section className="relative overflow-hidden border-b border-slate-200/70 bg-[linear-gradient(135deg,#0B1F3A_0%,#1E4D78_60%,#2C5F8A_100%)] py-5 sm:py-6 lg:py-8">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/images/P & L Above Heights Ltd.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-slate-950/60" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.95) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.95) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        <div className="absolute -left-10 top-12 h-40 w-40 rounded-full border border-white/15" />
        <div className="absolute bottom-10 right-8 h-24 w-24 rotate-12 rounded-[2rem] border border-brand-amber/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,199,44,0.18),transparent_32%)]" />

        <div className="container-shell relative">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75 }}
              className="max-w-2xl text-white"
            >
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.5 }}
                className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-amber"
              >
                Services
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-5xl"
              >
                Construction & Engineering Solutions
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.6 }}
                className="mt-5 max-w-xl text-base leading-7 text-slate-200 sm:text-lg"
              >
                Dependable construction delivery, premium materials, engineering
                support and safety solutions for projects that require speed,
                strength and precision.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <Link
                  href="/request-quotation"
                  className="inline-flex items-center justify-center rounded-full bg-brand-orange px-6 py-3 font-semibold text-white transition hover:scale-[1.02] hover:bg-brand-amber hover:text-brand-navy"
                >
                  Request Quotation
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition hover:scale-[1.02] hover:bg-brand-blue/45"
                >
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, delay: 0.15 }}
              className="relative mx-auto w-full max-w-[480px]"
            >
              <div className="rounded-[1.75rem] border border-white/20 bg-white/10 p-3 shadow-[0_24px_80px_rgba(2,15,31,0.28)] backdrop-blur-md">
                <motion.div
                  animate={{ y: [0, -8, 0], rotate: [0, -0.6, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative overflow-hidden rounded-[1.35rem]"
                >
                  <Image
                    src="/images/Services/Commercial building under construction.jfif"
                    alt="Commercial building under construction"
                    width={900}
                    height={700}
                    className="h-[220px] w-full object-cover sm:h-[250px] lg:h-[260px]"
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 45vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/35 via-transparent to-transparent" />
                  <div className="absolute left-4 top-4 rounded-full border border-white/30 bg-white/90 px-3 py-2 text-sm font-semibold text-brand-blue shadow-sm">
                    ✓ Trusted Construction Partner
                  </div>
                  <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full border border-white/30 bg-white/95 px-3 py-2 shadow-sm">
                    <Image
                      src="/images/P & L logo.jpeg"
                      alt="P & L Above Heights logo"
                      width={28}
                      height={28}
                      className="h-[28px] w-[28px] rounded-full object-contain"
                    />
                    <span className="text-sm font-semibold text-slate-900">
                      P & L
                    </span>
                  </div>
                </motion.div>
              </div>

              <div className="mt-[-1.25rem] flex flex-wrap gap-3 px-2 sm:mt-[-1.5rem] sm:px-4">
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.25 }}
                  className="flex min-w-[140px] flex-1 items-center gap-3 rounded-[1.1rem] border border-slate-200 bg-white p-3 shadow-soft"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-brand-navy">15+</p>
                    <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
                      Construction Solutions
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.32 }}
                  className="flex min-w-[140px] flex-1 items-center gap-3 rounded-[1.1rem] border border-slate-200 bg-white p-3 shadow-soft"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                    <HardHat className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-brand-navy">
                      100+
                    </p>
                    <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
                      Completed Projects
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.39 }}
                  className="flex min-w-[140px] flex-1 items-center gap-3 rounded-[1.1rem] border border-slate-200 bg-white p-3 shadow-soft"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                    <Clock3 className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-brand-navy">
                      24/7
                    </p>
                    <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
                      Support
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <SectionHeading
              eyebrow="Integrated Expertise"
              title="A premium delivery partner for complex industrial and construction environments."
              description="We bring together engineering discipline, strict procurement standards, and dependable site execution to support projects from planning to completion."
            />
            <p className="mt-8 text-lg leading-8 text-slate-700">
              Our services span construction delivery, building materials
              supply, quarry products, engineering supplies, welding consumables
              and industrial safety equipment. Every engagement is handled with
              rigor, transparency and a focus on lasting value.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {serviceHighlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-brand-blue/20 bg-brand-bg px-4 py-2 text-sm font-medium text-brand-blue"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-[2.5rem] border border-slate-200 shadow-soft"
          >
            <Image
              src="/images/Services/Professional workshop.jfif"
              alt="Professional workshop"
              width={900}
              height={700}
              className="h-[420px] w-full object-cover object-center"
              quality={100}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </section>

      <section
        id="construction"
        className="relative overflow-hidden bg-white py-16"
      >
        <Image
          src="/images/Services/Commercial building under construction.jfif"
          alt="Commercial building under construction"
          fill
          className="absolute inset-0 object-cover object-center"
          quality={100}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-slate-950/10" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,31,58,0.06)_0%,rgba(11,31,58,0.14)_40%,rgba(11,31,58,0.42)_100%)]" />
        <div className="relative container-shell z-10">
          <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="overflow-hidden rounded-[2.5rem] border border-slate-200 bg-brand-bg p-5 shadow-soft"
            >
              <Image
                src="/images/Services/Commercial building under construction.jfif"
                alt="Commercial building under construction"
                width={900}
                height={700}
                className="h-[480px] w-full rounded-[2rem] object-cover object-center"
                quality={100}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div className="overflow-hidden rounded-[1.6rem] border border-slate-200 bg-white">
                  <Image
                    src="/images/Services/Reinforced concrete works.png"
                    alt="Reinforced concrete works"
                    width={500}
                    height={360}
                    className="h-48 w-full object-cover object-center"
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
                <div className="overflow-hidden rounded-[1.6rem] border border-slate-200 bg-white">
                  <Image
                    src="/images/Services/Structural steel installation.jfif"
                    alt="Structural steel installation"
                    width={500}
                    height={360}
                    className="h-48 w-full object-cover object-center"
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="lg:pl-8"
            >
              <div className="inline-flex items-center gap-3 rounded-full border border-brand-blue/20 bg-white px-4 py-2">
                <span className="h-2.5 w-2.5 rounded-full bg-brand-orange" />
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-blue">
                  Construction Works
                </p>
              </div>
              <h2 className="mt-6 font-display text-4xl font-semibold leading-tight text-brand-orange sm:text-5xl">
                Crafted for major builds, engineered for long-term reliability.
              </h2>
              <p className="mt-6 text-lg leading-8 text-white">
                We deliver construction solutions with disciplined planning,
                quality controls and dependable project oversight for
                commercial, residential and infrastructure developments.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {serviceHighlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-brand-blue/15 bg-brand-bg p-4 text-brand-blue"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5" />
                      <span className="font-medium">{item}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/request-quotation"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-brand-orange px-6 py-3 font-semibold text-white transition hover:bg-brand-blue"
              >
                Request Construction Quote <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-shell">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl text-brand-navy"
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-brand-blue/20 bg-white px-4 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-brand-orange" />
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-blue">
                Building Materials
              </p>
            </div>
            <h2 className="mt-6 font-display text-4xl font-semibold leading-tight text-brand-orange sm:text-5xl">
              Building materials supply that keeps projects moving with
              confidence.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              We provide dependable sourcing for cement, reinforcement steel,
              concrete products and masonry materials, supported by consistent
              availability and responsive logistics.
            </p>
          </motion.div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {materialsCards.map((card, index) => (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-[2rem] border border-brand-blue/20 bg-white p-4 shadow-soft"
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  width={600}
                  height={420}
                  className="h-48 w-full rounded-[1.5rem] object-cover object-center"
                  quality={100}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="p-4">
                  <h3 className="font-display text-xl font-semibold text-brand-navy">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {card.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-16">
        <Image
          src="/images/Services/Stone loading with excavator.jfif"
          alt="Stone loading with excavator"
          fill
          className="absolute inset-0 object-cover object-center"
          quality={100}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-slate-950/10" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,31,58,0.06)_0%,rgba(11,31,58,0.14)_40%,rgba(11,31,58,0.42)_100%)]" />
        <div className="relative container-shell z-10 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-brand-blue/20 bg-white px-4 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-brand-orange" />
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-blue">
                Quarry Products
              </p>
            </div>
            <h2 className="mt-6 font-display text-4xl font-semibold leading-tight text-brand-orange sm:text-5xl">
              High-quality quarry materials for civil and industrial
              applications.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white">
              We supply ballast, stone and quarry-based materials that help
              projects stay robust, efficient and ready for heavy-duty demand.
            </p>
            <Link
              href="/request-quotation"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-orange px-6 py-3 font-semibold text-white transition hover:bg-brand-blue"
            >
              Request Quarry Supply <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            <div className="overflow-hidden rounded-[2.5rem] border border-slate-200 bg-brand-bg p-4 shadow-soft">
              <Image
                src="/images/Services/Stone loading with excavator.jfif"
                alt="Stone loading with excavator"
                width={900}
                height={700}
                className="h-[420px] w-full rounded-[2rem] object-cover object-center"
                quality={100}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex gap-4">
              <div className="overflow-hidden rounded-full border-4 border-white shadow-soft">
                <Image
                  src="/images/Services/Quarry crushing plant.jfif"
                  alt="Quarry crushing plant"
                  width={180}
                  height={180}
                  className="h-28 w-28 rounded-full object-cover object-center"
                  quality={100}
                  sizes="120px"
                />
              </div>
              <div className="overflow-hidden rounded-full border-4 border-white shadow-soft">
                <Image
                  src="/images/Services/Ballast stockpiles.jfif"
                  alt="Ballast stockpiles"
                  width={180}
                  height={180}
                  className="h-28 w-28 rounded-full object-cover object-center"
                  quality={100}
                  sizes="120px"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16">
        <div className="container-shell grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-4 shadow-soft"
          >
            <Image
              src="/images/Services/Precision measuring equipment.jfif"
              alt="Precision measuring equipment"
              width={900}
              height={700}
              className="h-[420px] w-full rounded-[2rem] object-cover object-center"
              quality={100}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-brand-blue/20 bg-brand-blue/10 px-4 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-brand-orange" />
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-blue">
                Engineering Supplies
              </p>
            </div>
            <h2 className="mt-6 font-display text-4xl font-semibold leading-tight text-brand-orange sm:text-5xl">
              Advanced tools and technical support for modern engineering teams.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              We support precision-driven work with industrial engineering
              tools, measuring equipment and workshop-ready hardware that
              prioritises accuracy and continuity.
            </p>
            <div className="mt-8 grid gap-4">
              {engineeringFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="flex items-center gap-4 rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:border-brand-blue"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-brand-navy">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-slate-600">
                        Built for reliable field execution and workshop
                        performance.
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 text-white">
        <Image
          src="/images/Services/Welder with sparks.jfif"
          alt="Welder with sparks"
          fill
          className="absolute inset-0 object-cover object-center"
          quality={100}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-slate-950/12" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,31,58,0.06)_0%,rgba(11,31,58,0.16)_40%,rgba(11,31,58,0.45)_100%)]" />
        <div className="relative container-shell z-10">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur">
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-orange" />
                  <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-amber">
                    Welding Consumables
                  </p>
                </div>
                <h2 className="font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
                  Professional welding supplies for fabrication integrity and
                  dependable performance.
                </h2>
              </div>
              <div className="grid gap-5">
                <div className="rounded-[1.6rem] border border-white/20 bg-white/10 p-6 shadow-sm">
                  <div className="flex items-center gap-3 text-brand-amber">
                    <Sparkles className="h-5 w-5" />
                    <span className="font-semibold text-white">
                      Welding Electrodes
                    </span>
                  </div>
                  <p className="mt-3 text-slate-200">
                    Reliable consumables for structural and fabrication-focused
                    applications.
                  </p>
                </div>
                <div className="rounded-[1.6rem] border border-white/20 bg-white/10 p-6 shadow-sm">
                  <div className="flex items-center gap-3 text-brand-amber">
                    <Factory className="h-5 w-5" />
                    <span className="font-semibold text-white">
                      Fabrication Workshop
                    </span>
                  </div>
                  <p className="mt-3 text-slate-200">
                    Field-ready inventory and technical support for active
                    workshop environments.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7 }}
              className="grid gap-5"
            >
              <div className="overflow-hidden rounded-[2.5rem] border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur-xl">
                <Image
                  src="/images/Services/Welding electrodes.jfif"
                  alt="Welding electrodes"
                  width={900}
                  height={700}
                  className="h-[260px] w-full rounded-[2rem] object-cover object-center"
                  quality={100}
                  sizes="100vw"
                />
              </div>
              <div className="overflow-hidden rounded-[2.5rem] border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur-xl">
                <Image
                  src="/images/Services/Fabrication workshop.jfif"
                  alt="Fabrication workshop"
                  width={900}
                  height={700}
                  className="h-[260px] w-full rounded-[2rem] object-cover object-center"
                  quality={100}
                  sizes="100vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-[2.5rem] border border-slate-200 bg-brand-bg p-4 shadow-soft"
          >
            <Image
              src="/images/Services/Workers wearing complete PPE.jfif"
              alt="Workers wearing complete PPE"
              width={900}
              height={700}
              className="h-[420px] w-full rounded-[2rem] object-cover object-center"
              quality={100}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-brand-blue/20 bg-brand-blue/10 px-4 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-brand-orange" />
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-blue">
                Safety Equipment
              </p>
            </div>
            <h2 className="mt-6 font-display text-4xl font-semibold leading-tight text-brand-orange sm:text-5xl">
              Safety-focused supply solutions built for active worksites.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              We support safe operations with certified PPE, active protection
              solutions and dependable supply for industrial and construction
              teams.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {safetyFeatures.map((item) => (
                <div
                  key={item.title}
                  className="overflow-hidden rounded-[1.6rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-brand-blue"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={280}
                    className="h-36 w-full object-cover object-center"
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <p className="p-4 font-semibold text-brand-navy">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-950 py-16 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,130,32,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_32%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.96),rgba(15,23,42,0.9))]" />
        <div className="relative container-shell">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              eyebrow="Our Process"
              title="A structured delivery model from consultation to completion."
              description="Every project follows a clear and disciplined workflow designed for quality, transparency and dependable outcomes."
              align="center"
              eyebrowClassName="text-brand-amber"
              titleClassName="text-brand-amber"
              descriptionClassName="text-slate-200"
            />
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/95 p-5 text-center shadow-[0_25px_80px_rgba(15,23,42,0.25)]"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-amber text-slate-950 shadow-sm">
                  <span className="text-lg font-semibold">{index + 1}</span>
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">
                  {step}
                </h3>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute right-[-14px] top-1/2 h-[2px] w-8 -translate-y-1/2 bg-brand-amber/60" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-shell">
          <SectionHeading
            eyebrow="INDUSTRY EXPERTISE"
            title="Serving the sectors shaping modern growth"
            description="From public works to private development, we support a broad range of industries with dependable materials, engineering support and construction delivery."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {industries.map((industry, index) => (
              <motion.article
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm"
              >
                <div className="relative h-[260px] w-full">
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    fill
                    className="object-cover"
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="space-y-4 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-amber">
                    {industry.label}
                  </p>
                  <h3 className="font-display text-2xl font-semibold text-brand-navy">
                    {industry.title}
                  </h3>
                  <p className="text-sm leading-6 text-slate-600">{industry.description}</p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center rounded-full border border-brand-blue/10 bg-brand-blue/5 px-5 py-2 text-sm font-semibold text-brand-blue transition hover:bg-brand-blue/10"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-14 text-white">
        <Image
          src="/images/Services/Commercial building under construction.jfif"
          alt="Commercial building under construction"
          fill
          className="absolute inset-0 object-cover object-center"
          quality={100}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-slate-950/40" />
        <div className="relative container-shell z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-amber">
              Ready to Build
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">
              Ready to build with confidence?
            </h2>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/request-quotation"
                className="rounded-full bg-brand-orange px-7 py-3.5 font-semibold text-white transition hover:bg-brand-amber hover:text-brand-navy"
              >
                Request Quotation
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-white/20 bg-white/10 px-7 py-3.5 font-semibold text-white transition hover:bg-white/20"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
