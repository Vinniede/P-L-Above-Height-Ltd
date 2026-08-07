"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  ChevronDown,
  PackageOpen,
  Smile,
} from "lucide-react";

const slides = [
  "/images/Tower%20cranes%20and%20high-rise%20construction.jfif",
  "/images/Engineers%20discussing%20blueprints%20on-site.jfif",
  "/images/Heavy%20machinery%20in%20operation.jfif",
  "/images/Drone%20view%20of%20a%20large%20construction%20site%20at%20sunrise.jfif",
];

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative isolate min-h-[33vh] overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <motion.div
            key={slide}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === activeIndex ? 1 : 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0"
          >
            <Image
              src={slide}
              alt="Construction scene"
              fill
              priority={index === 0}
              className="object-cover object-center"
              quality={100}
              sizes="100vw"
            />
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,31,58,0.08)_0%,rgba(11,31,58,0.28)_45%,rgba(11,31,58,0.72)_100%)]" />
      </div>

      <div className="container-shell relative flex flex-col gap-8 min-h-[33vh] items-center py-4 lg:py-6 lg:flex-row-reverse lg:items-start">
        <div className="hidden lg:block lg:basis-1/3">
          <div className="space-y-3">
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-4 shadow-[0_16px_50px_rgba(0,0,0,0.20)] backdrop-blur-xl">
              <div className="flex items-center gap-2 text-brand-amber">
                <Building2 className="h-5 w-5" />
                <div>
                  <p className="text-xl font-semibold">150+</p>
                  <p className="text-[11px] uppercase tracking-[0.28em] text-slate-300">
                    Projects Completed
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-4 shadow-[0_16px_50px_rgba(0,0,0,0.20)] backdrop-blur-xl">
              <div className="flex items-center gap-2 text-brand-amber">
                <PackageOpen className="h-5 w-5" />
                <div>
                  <p className="text-xl font-semibold">500+</p>
                  <p className="text-[11px] uppercase tracking-[0.28em] text-slate-300">
                    Quality Products
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-4 shadow-[0_16px_50px_rgba(0,0,0,0.20)] backdrop-blur-xl">
              <div className="flex items-center gap-2 text-brand-amber">
                <Smile className="h-5 w-5" />
                <div>
                  <p className="text-xl font-semibold">98%</p>
                  <p className="text-[11px] uppercase tracking-[0.28em] text-slate-300">
                    Client Satisfaction
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 w-full lg:basis-2/3 lg:pr-10"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-amber bg-slate-950/40 px-2 py-1 rounded-full">
            P & L Above Heights Ltd
          </span>
          <h1 className="mt-4 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
            Building tomorrow with{" "}
            <span className="text-brand-amber">
              quality, precision and reliability.
            </span>
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-200 sm:text-lg">
            Delivering premium construction services, engineering expertise,
            industrial supplies and infrastructure solutions for projects across
            Kenya.
          </p>
          <div className="mt-8 lg:max-w-[680px]">
            <div className="mb-4 flex items-center justify-between gap-3">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-amber">
                Company Overview
              </p>
              <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.35em] text-slate-200">
                Quick Links
              </span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Link
                href="/services"
                className="inline-flex h-full items-center justify-center gap-2 rounded-[1.5rem] border border-white/15 bg-white/10 px-5 py-3 text-center font-semibold text-white shadow-soft transition duration-300 hover:-translate-y-0.5 hover:border-brand-amber hover:bg-white/20"
              >
                Explore Services
              </Link>
              <Link
                href="/products"
                className="inline-flex h-full items-center justify-center gap-2 rounded-[1.5rem] border border-white/15 bg-white/10 px-5 py-3 text-center font-semibold text-white shadow-soft transition duration-300 hover:-translate-y-0.5 hover:border-brand-amber hover:bg-white/20"
              >
                Explore Products
              </Link>
              <Link
                href="/projects"
                className="inline-flex h-full items-center justify-center gap-2 rounded-[1.5rem] border border-white/15 bg-white/10 px-5 py-3 text-center font-semibold text-white shadow-soft transition duration-300 hover:-translate-y-0.5 hover:border-brand-amber hover:bg-white/20"
              >
                Explore Projects
              </Link>
              <Link
                href="/request-quotation"
                className="inline-flex h-full items-center justify-center gap-2 rounded-[1.5rem] bg-brand-orange px-5 py-3 text-center font-semibold text-white shadow-soft transition duration-300 hover:-translate-y-0.5 hover:bg-brand-amber hover:text-brand-navy"
              >
                Request Quotation <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
