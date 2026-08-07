"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Factory,
  HardHat,
  Layers3,
  MapPin,
  PackageOpen,
  X,
} from "lucide-react";
import { IndustriesWeServe } from "@/components/industries/industries-we-serve";

const filters = [
  "All",
  "Buildings",
  "Infrastructure",
  "Industrial",
  "Residential",
  "Commercial",
  "Material Supply",
];

const projects = [
  {
    id: 1,
    title: "High-Rise Development",
    category: "Buildings",
    location: "Nairobi",
    status: "Completed",
    description:
      "A premium mixed-use tower delivered with precision coordination, quality materials and structural execution.",
    image: "/images/projects/high-rise-buildings.jfif",
    scope: ["Structural works", "Material supply", "Site coordination"],
    products: ["Steel reinforcement", "Cement", "Safety equipment"],
    services: ["Construction delivery", "Procurement support"],
    challenge: "Tight schedule and premium finish expectations.",
    solution:
      "Integrated planning and phased procurement ensured smooth delivery.",
  },
  {
    id: 2,
    title: "Residential Apartments",
    category: "Residential",
    location: "Kisumu",
    status: "Completed",
    description:
      "A modern apartment complex completed with reliable supply support and refined execution.",
    image: "/images/projects/residential-apartments.jfif",
    scope: [
      "Residential construction",
      "Finishing works",
      "Material sequencing",
    ],
    products: ["Blocks", "Roofing materials", "PPE"],
    services: ["Construction works", "Supply chain management"],
    challenge: "Fast-moving delivery schedule across multiple units.",
    solution:
      "Coordinated scheduling and inventory planning kept works on track.",
  },
  {
    id: 3,
    title: "Commercial Office Tower",
    category: "Commercial",
    location: "Mombasa",
    status: "Completed",
    description:
      "A high-standard commercial build completed with durable materials and efficient delivery.",
    image: "/images/projects/commercial-buildings.jfif",
    scope: ["Commercial fit-out", "Structural supply", "Site management"],
    products: ["Steel products", "Engineering tools", "Welding consumables"],
    services: ["Construction delivery", "Project coordination"],
    challenge: "Strict client quality standards and phased occupancy.",
    solution:
      "Dedicated coordination and quality oversight secured a seamless handover.",
  },
  {
    id: 4,
    title: "Road Infrastructure",
    category: "Infrastructure",
    location: "Eldoret",
    status: "Completed",
    description:
      "A public infrastructure project supported with quarry products and dependable civil works delivery.",
    image: "/images/projects/roads.jfif",
    scope: ["Roadworks", "Drainage support", "Aggregate supply"],
    products: ["Ballast", "Hardcore", "Sand"],
    services: ["Civil works", "Material logistics"],
    challenge: "Large-scale logistics and site continuity requirements.",
    solution: "Reliable batching and stock planning minimised disruption.",
  },
  {
    id: 5,
    title: "Warehousing Facility",
    category: "Industrial",
    location: "Nakuru",
    status: "Completed",
    description:
      "A warehouse delivered for industrial efficiency with strong structural support and rapid deployment.",
    image: "/images/projects/warehouses.jfif",
    scope: ["Warehousing", "Heavy-duty structure", "Delivery planning"],
    products: ["Steel beams", "Engineering supplies", "Safety systems"],
    services: ["Industrial construction", "Installation support"],
    challenge: "Operational readiness and short turnaround window.",
    solution: "Parallel procurement and execution kept the project on pace.",
  },
  {
    id: 6,
    title: "Factory Construction",
    category: "Industrial",
    location: "Thika",
    status: "Completed",
    description:
      "A purpose-built factory completed with durable infrastructure and coordinated industrial supply.",
    image: "/images/projects/factory-construction.jfif",
    scope: ["Factory shell", "Process support", "Safety supply"],
    products: ["Steel products", "PPE", "Engineering tools"],
    services: ["Construction delivery", "Industrial supply"],
    challenge: "Operational uptime and phased installation constraints.",
    solution: "Carefully phased sequencing protected continuity on site.",
  },
  {
    id: 7,
    title: "Material Supply Delivery",
    category: "Material Supply",
    location: "Kiambu",
    status: "Ongoing",
    description:
      "High-volume materials delivery support for a major construction programme across multiple sites.",
    image: "/images/projects/material-supply-deliveries.jfif",
    scope: ["Bulk supply", "Fleet coordination", "Site scheduling"],
    products: ["Cement", "Steel", "Quarry products"],
    services: ["Logistics", "Procurement support"],
    challenge:
      "Multiple sites requiring strict scheduling and lead-time control.",
    solution:
      "Dedicated logistics and supplier coordination ensured dependable intake.",
  },
  {
    id: 8,
    title: "Completed Building Exterior",
    category: "Buildings",
    location: "Mombasa",
    status: "Completed",
    description:
      "A completed building exterior reflecting careful finishing, durable materials and premium craftsmanship.",
    image: "/images/projects/completed-building-exterior.jfif",
    scope: ["Facade works", "Finishing", "Quality control"],
    products: ["Roofing materials", "Finishing materials", "Safety equipment"],
    services: ["Construction completion", "Quality inspection"],
    challenge: "High finish expectations for external presentation.",
    solution:
      "Detailed inspection and material quality controls delivered a polished result.",
  },
];

const timeline = [
  {
    step: "Consultation",
    description:
      "Understanding scope, site requirements and delivery expectations.",
  },
  {
    step: "Planning",
    description:
      "Technical planning, procurement preparation and programme alignment.",
  },
  {
    step: "Procurement",
    description:
      "Reliable sourcing of materials, equipment and industrial supplies.",
  },
  {
    step: "Execution",
    description:
      "Construction delivery, installation support and project coordination.",
  },
  {
    step: "Quality Inspection",
    description: "Strict review of workmanship, safety and material readiness.",
  },
  {
    step: "Completion",
    description: "Final handover, client support and long-term partnership.",
  },
];

export function ProjectsShowcase() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[number] | null
  >(null);

  const visibleProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <main className="bg-[#F8FAFC] pt-[72px] sm:pt-[80px] lg:pt-[90px] text-brand-text">
      <section className="relative overflow-hidden border-b border-slate-200/70 bg-[linear-gradient(135deg,#0B1F3A_0%,#1E4D78_60%,#2C5F8A_100%)] py-6 sm:py-8 lg:py-10">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/images/p-and-l-above-heights-ltd.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-slate-950/60" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.95) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.95) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />
        <div className="absolute -left-10 top-12 h-40 w-40 rounded-full border border-white/15" />
        <div className="absolute bottom-10 right-8 h-24 w-24 rotate-12 rounded-[2rem] border border-brand-amber/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,199,44,0.18),transparent_32%)]" />

        <div className="container-shell relative grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl text-white"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-amber">
              Projects
            </p>
            <h1 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl">
              Experience shaped through completed work and dependable delivery.
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-200 sm:text-lg">
              From high-rise developments and industrial facilities to
              infrastructure and material supply programmes, our portfolio
              reflects the depth of our capability.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/request-quotation"
                className="rounded-full bg-brand-orange px-6 py-3 font-semibold text-white transition hover:scale-[1.02] hover:bg-brand-amber hover:text-brand-navy"
              >
                Request Quotation
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition hover:scale-[1.02] hover:bg-brand-blue/45"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75 }}
            className="relative mx-auto w-full max-w-[420px]"
          >
            <div className="rounded-[1.75rem] border border-white/20 bg-white/10 p-3 shadow-[0_24px_80px_rgba(2,15,31,0.28)] backdrop-blur-md">
              <motion.div
                animate={{ y: [0, -8, 0], rotate: [0, 0.6, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative overflow-hidden rounded-[1.35rem]"
              >
                <Image
                  src="/images/projects/commercial-buildings.jfif"
                  alt="Commercial project showcase"
                  width={900}
                  height={700}
                  className="h-[220px] w-full object-cover sm:h-[250px] lg:h-[260px]"
                  quality={100}
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/35 via-transparent to-transparent" />
                <div className="absolute left-4 top-4 rounded-full border border-white/30 bg-white/90 px-3 py-2 text-sm font-semibold text-brand-blue shadow-sm">
                  150+ Projects Completed
                </div>
              </motion.div>
            </div>

            <div className="mt-[-1.25rem] flex flex-wrap gap-3 px-2 sm:mt-[-1.5rem] sm:px-4">
              <div className="flex min-w-[140px] flex-1 items-center gap-3 rounded-[1.1rem] border border-slate-200 bg-white p-3 shadow-soft">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                  <Building2 className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-brand-navy">150+</p>
                  <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
                    Completed Projects
                  </p>
                </div>
              </div>
              <div className="flex min-w-[140px] flex-1 items-center gap-3 rounded-[1.1rem] border border-slate-200 bg-white p-3 shadow-soft">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                  <PackageOpen className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-brand-navy">500+</p>
                  <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
                    Products Supplied
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="container-shell py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-blue">
            Project Story
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-brand-navy sm:text-5xl">
            A collection of work shaped by trust, quality and engineered
            execution.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Every project reflects a blend of strong planning, reliable supply
            support and disciplined delivery that keeps our clients moving
            forward.
          </p>
        </motion.div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${activeFilter === filter ? "bg-brand-blue text-white shadow-sm" : "bg-white text-slate-600 hover:bg-brand-blue/10 hover:text-brand-blue"}`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-12 columns-1 gap-6 md:columns-2 xl:columns-3">
          {visibleProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.6, delay: index * 0.04 }}
              className="mb-6 break-inside-avoid overflow-hidden rounded-[1.85rem] border border-slate-200 bg-white shadow-[0_18px_60px_rgba(11,31,58,0.08)]"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                  quality={100}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/70 via-[#0B1F3A]/10 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-brand-blue">
                  {project.category}
                </div>
                <div className="absolute bottom-4 left-4 rounded-full bg-brand-orange px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-white">
                  {project.status}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-brand-blue">
                  <MapPin className="h-4 w-4" /> {project.location}
                </div>
                <h3 className="mt-4 font-display text-2xl font-semibold text-brand-navy">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {project.description}
                </p>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-orange px-4 py-2.5 font-semibold text-white transition hover:bg-brand-blue"
                >
                  View Project <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="container-shell pb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_18px_60px_rgba(11,31,58,0.08)] sm:p-10"
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-blue">
                Project Delivery Process
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-brand-navy sm:text-4xl">
                A disciplined path from consultation to completion.
              </h2>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-6">
            {timeline.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="relative rounded-[1.4rem] border border-slate-200 bg-brand-bg p-5 text-center"
              >
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-brand-orange text-white">
                  {index + 1}
                </div>
                <h3 className="mt-4 font-semibold text-brand-navy">
                  {item.step}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
                {index < timeline.length - 1 && (
                  <div className="absolute -right-3 top-6 hidden h-[2px] w-6 bg-brand-blue lg:block" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="pb-24">
        <IndustriesWeServe
          compact
          eyebrow="INDUSTRIES SERVED"
          title="Strength across sectors and project types"
          description="Our experience continues to expand through construction, infrastructure, public works, commercial developments and industrial supply programmes."
          showStats={false}
        />
      </section>

      <section className="relative overflow-hidden py-16 text-white">
        <Image
          src="/images/projects/completed-building-exterior.jfif"
          alt="Completed building exterior"
          fill
          className="object-cover object-center"
          quality={100}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(11,31,58,0.92),rgba(30,77,120,0.8))]" />
        <div className="container-shell relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-amber">
              Let’s Build Together
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">
              Let’s build your next project with confidence and precision.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-200 sm:text-lg">
              Partner with P & L Above Heights Ltd for dependable construction
              services, engineering expertise and premium industrial supplies.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/request-quotation"
                className="rounded-full bg-brand-orange px-6 py-3 font-semibold text-white transition hover:bg-brand-amber hover:text-brand-navy"
              >
                Request Quotation
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/20"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B1F3A]/80 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] bg-white shadow-2xl"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-brand-navy shadow-sm"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
                <div className="relative h-72 lg:h-full">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="max-h-[80vh] overflow-y-auto p-7 lg:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <span className="rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-brand-blue">
                      {selectedProject.category}
                    </span>
                    <span className="rounded-full bg-brand-orange/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-brand-orange">
                      {selectedProject.status}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-3xl font-semibold text-brand-navy">
                    {selectedProject.title}
                  </h3>
                  <div className="mt-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
                    <MapPin className="h-4 w-4" /> {selectedProject.location}
                  </div>
                  <p className="mt-5 text-sm leading-8 text-slate-600">
                    {selectedProject.description}
                  </p>

                  <div className="mt-7 grid gap-4 md:grid-cols-2">
                    <div className="rounded-[1.2rem] bg-brand-bg p-4">
                      <h4 className="font-semibold text-brand-navy">
                        Challenge
                      </h4>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {selectedProject.challenge}
                      </p>
                    </div>
                    <div className="rounded-[1.2rem] bg-brand-bg p-4">
                      <h4 className="font-semibold text-brand-navy">
                        Solution
                      </h4>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {selectedProject.solution}
                      </p>
                    </div>
                  </div>

                  <div className="mt-7">
                    <h4 className="font-semibold text-brand-navy">Scope</h4>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {selectedProject.scope.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-600"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-7 grid gap-6 md:grid-cols-2">
                    <div>
                      <h4 className="font-semibold text-brand-navy">
                        Products Supplied
                      </h4>
                      <ul className="mt-3 space-y-2 text-sm text-slate-600">
                        {selectedProject.products.map((item) => (
                          <li key={item} className="flex items-center gap-2">
                            <HardHat className="h-4 w-4 text-brand-orange" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-navy">
                        Services Provided
                      </h4>
                      <ul className="mt-3 space-y-2 text-sm text-slate-600">
                        {selectedProject.services.map((item) => (
                          <li key={item} className="flex items-center gap-2">
                            <Layers3 className="h-4 w-4 text-brand-orange" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <Link
                      href="/request-quotation"
                      className="rounded-full bg-brand-orange px-5 py-2.5 font-semibold text-white transition hover:bg-brand-blue"
                    >
                      Request Similar Project
                    </Link>
                    <Link
                      href="/contact"
                      className="rounded-full border border-slate-200 bg-white px-5 py-2.5 font-semibold text-brand-navy transition hover:border-brand-blue"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
