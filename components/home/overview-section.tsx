"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

export function OverviewSection() {
  return (
    <section className="bg-[#F8FAFC] py-12 sm:py-16">
      <div className="container-shell grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <SectionHeading
            eyebrow="Company Overview"
            title="One partner for construction, engineering and industrial supply."
            description="We combine technical expertise with operational discipline to support projects across infrastructure, commercial, industrial and public-sector environments."
          />
          <p className="mt-6 text-lg leading-8 text-slate-700">
            P & L Above Heights Ltd delivers premium solutions built on quality
            workmanship, dependable sourcing and responsive project execution.
            Our teams are focused on creating lasting value for every client and
            every stage of delivery.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-semibold text-brand-orange"
            >
              Learn more about our company <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 font-semibold text-brand-blue"
            >
              See our projects
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto w-full max-w-[560px]"
        >
          <div className="rounded-[2rem] border border-slate-200 bg-white p-3 shadow-[0_20px_70px_rgba(11,31,58,0.12)]">
            <div className="relative h-[420px] overflow-hidden rounded-[1.5rem]">
              <Image
                src="/images/Professional team meeting at a construction site.jfif"
                alt="Professional team meeting at a construction site"
                fill
                className="object-cover"
                quality={100}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/35 via-transparent to-transparent" />
            </div>
          </div>
          <div className="absolute -left-4 top-8 w-40 overflow-hidden rounded-[1.3rem] border border-white/70 shadow-lg sm:w-48">
            <Image
              src="/images/Engineers wearing PPE.jfif"
              alt="Engineers wearing PPE"
              width={240}
              height={180}
              className="h-32 w-full object-cover"
              quality={100}
              sizes="220px"
            />
          </div>
          <div className="absolute -bottom-4 right-0 w-40 overflow-hidden rounded-[1.3rem] border border-white/70 shadow-lg sm:w-48">
            <Image
              src="/images/Modern office with architectural plans.jpg"
              alt="Modern office with architectural plans"
              width={240}
              height={180}
              className="h-32 w-full object-cover"
              quality={100}
              sizes="220px"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
