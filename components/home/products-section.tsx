"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const products = [
  {
    title: "Construction Materials",
    description:
      "Premium cement, reinforcement and building materials for dependable structural delivery.",
    image: "/images/products/premium-cement-bags.jfif",
  },
  {
    title: "Steel Products",
    description:
      "Structural steel and reinforcement products built for strength, integrity and performance.",
    image: "/images/products/structural-steel.jfif",
  },
  {
    title: "Quarry Products",
    description:
      "Ballast, hardcore and aggregate outputs for major infrastructure and civil works.",
    image: "/images/products/ballast.jfif",
  },
  {
    title: "Safety Equipment",
    description:
      "Certified protective products that support safer, more compliant operations.",
    image: "/images/products/helmets.jfif",
  },
  {
    title: "Engineering Tools",
    description:
      "Professional tools for workshop use, field execution and operational precision.",
    image: "/images/products/measuring-tools.jfif",
  },
  {
    title: "Welding Consumables",
    description:
      "Dependable welding machines, rods and accessories for fabrication environments.",
    image: "/images/products/welding-machine.jfif",
  },
];

export function ProductsSection() {
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
            eyebrow="Featured Products"
            title="Premium products curated for performance and reliability."
            description="We supply materials and equipment designed for demanding commercial, industrial and construction environments."
          />
        </motion.div>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {products.map((product, index) => (
            <motion.article
              key={product.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className={`group grid overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_18px_60px_rgba(11,31,58,0.08)] ${index % 2 === 0 ? "lg:grid-cols-[0.95fr_1.05fr]" : "lg:grid-cols-[1.05fr_0.95fr]"}`}
            >
              <div className="relative h-64 overflow-hidden lg:h-full">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  quality={100}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,31,58,0.04),rgba(11,31,58,0.24))]" />
              </div>
              <div className="p-7 sm:p-8">
                <h3 className="font-display text-2xl font-semibold text-brand-navy">
                  {product.title}
                </h3>
                <p className="mt-3 text-slate-600">{product.description}</p>
                <Link
                  href="/products"
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-brand-orange"
                >
                  View products{" "}
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
