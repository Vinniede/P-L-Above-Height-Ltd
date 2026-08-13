"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const projects = [
  {
    title: "High-Rise Development",
    location: "Nairobi",
    category: "Buildings",
    image: "/images/projects/high-rise-buildings.jfif",
    height: "h-72",
  },
  {
    title: "Residential Apartments",
    location: "Kisumu",
    category: "Residential",
    image: "/images/projects/residential-apartments.jfif",
    height: "h-80",
  },
  {
    title: "Commercial Office Tower",
    location: "Mombasa",
    category: "Commercial",
    image: "/images/projects/commercial-buildings.jfif",
    height: "h-72",
  },
  {
    title: "Road Infrastructure",
    location: "Eldoret",
    category: "Infrastructure",
    image: "/images/projects/roads.jfif",
    height: "h-80",
  },
  {
    title: "Warehouse Facility",
    location: "Nakuru",
    category: "Industrial",
    image: "/images/projects/warehouses.jfif",
    height: "h-[19rem]",
  },
  {
    title: "Factory Construction",
    location: "Thika",
    category: "Industrial",
    image: "/images/projects/factory-construction.jfif",
    height: "h-72",
  },
];

export function ProjectsSection() {
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
            eyebrow="Featured Projects"
            title="A portfolio of purposeful execution and enduring value."
            description="Our completed work reflects a consistent focus on quality, speed and sophisticated project management."
          />
        </motion.div>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-brand-bg shadow-[0_18px_60px_rgba(11,31,58,0.08)]"
            >
              <div className={`relative overflow-hidden ${project.height}`}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  quality={100}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,31,58,0.04),rgba(11,31,58,0.36))]" />
                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-brand-blue">
                  {project.category}
                </div>
              </div>
              <div className="p-7">
                <h3 className="font-display text-2xl font-semibold text-brand-navy">
                  {project.title}
                </h3>
                <p className="mt-3 text-slate-600">{project.location}</p>
                <Link
                  href="/projects"
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-brand-orange"
                >
                  View project{" "}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
