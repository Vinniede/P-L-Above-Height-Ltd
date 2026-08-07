"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Boxes,
  CheckCircle2,
  Factory,
  Gauge,
  HardHat,
  PackageOpen,
  ShieldCheck,
  Sparkles,
  Truck,
  Wrench,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const categorySections = [
  {
    id: "construction-materials",
    eyebrow: "Construction Materials",
    title:
      "Reliable construction materials for residential, commercial and infrastructure projects.",
    description:
      "Premium cement, reinforcement, blocks and roofing solutions built for structural integrity and dependable delivery.",
    image: "/images/Products/Premium%20cement%20bags.jfif",
    products: [
      {
        name: "Premium Cement Bags",
        description:
          "High-performance cement designed for strong, durable and dependable structural builds.",
        applications: [
          "Residential construction",
          "Commercial buildings",
          "Infrastructure projects",
        ],
        features: ["High strength", "Reliable performance", "Quality assured"],
        image: "/images/Products/Premium%20cement%20bags.jfif",
      },
      {
        name: "Reinforcement Bars",
        description:
          "Engineered steel reinforcement suitable for concrete structures requiring resilience and consistency.",
        applications: ["Slabs & beams", "Foundations", "High-load structures"],
        features: [
          "Structural reliability",
          "Consistent grade",
          "Bulk availability",
        ],
        image: "/images/Products/Reinforcement%20bars.jfif",
      },
      {
        name: "Building Blocks",
        description:
          "Durable masonry units for fast, clean and dependable walling and partitioning.",
        applications: [
          "Wall construction",
          "Commercial fit-out",
          "Residential projects",
        ],
        features: [
          "Precision finish",
          "Efficient installation",
          "Long-lasting build",
        ],
        image: "/images/Products/Building%20blocks.jfif",
      },
      {
        name: "Roofing Materials",
        description:
          "Quality roofing solutions designed to protect assets and deliver dependable performance.",
        applications: [
          "Industrial roofs",
          "Residential shelters",
          "Facility upgrades",
        ],
        features: [
          "Weather-ready",
          "Low maintenance",
          "Project-specific supply",
        ],
        image: "/images/Products/Roofing%20materials.jfif",
      },
    ],
  },
  {
    id: "steel-products",
    eyebrow: "Steel Products",
    title:
      "High-grade steel products for structural and industrial performance.",
    description:
      "Engineered steel solutions supporting framing, reinforcement and heavy-duty fabrication.",
    image: "/images/Products/Structural%20steel.jfif",
    products: [
      {
        name: "Deformed Steel Bars",
        description:
          "Corrosion-resistant reinforcement bars supporting modern structural frameworks.",
        applications: [
          "Concrete reinforcement",
          "Civic works",
          "Commercial towers",
        ],
        features: [
          "High tensile strength",
          "Structural integrity",
          "Project-ready sizing",
        ],
        image: "/images/Products/Deformed%20steel%20bars.jfif",
      },
      {
        name: "Structural Steel",
        description:
          "Premium structural steel for framing systems, support structures and engineered builds.",
        applications: [
          "Industrial frames",
          "Commercial developments",
          "Support systems",
        ],
        features: ["Fabrication-ready", "Reliable grade", "Large-scale supply"],
        image: "/images/Products/Structural%20steel.jfif",
      },
      {
        name: "Steel Beams",
        description:
          "Heavy-duty steel beams crafted for major structural loads and demanding installations.",
        applications: ["Bridges", "Warehouses", "Larger spans"],
        features: [
          "High load bearing",
          "Precision fabrication",
          "Long-span capability",
        ],
        image: "/images/Products/Steel%20beams.jfif",
      },
      {
        name: "Steel Pipes",
        description:
          "Dependable steel pipe solutions for utility, processing and industrial infrastructure.",
        applications: [
          "Water systems",
          "Mechanical installations",
          "Structural conduits",
        ],
        features: [
          "Durable finish",
          "Multi-use capability",
          "Consistent availability",
        ],
        image: "/images/Products/Steel%20pipes.jfif",
      },
    ],
  },
  {
    id: "quarry-products",
    eyebrow: "Quarry Products",
    title:
      "Quarry materials supplied for foundation works, road-building and civil infrastructure.",
    description:
      "Durable aggregates and quarry outputs that support high-volume civil and industrial delivery.",
    image: "/images/Products/Ballast.jfif",
    products: [
      {
        name: "Ballast",
        description:
          "Robust rail and road ballast suited to major civil and infrastructure applications.",
        applications: [
          "Roadworks",
          "Rail infrastructure",
          "Foundation support",
        ],
        features: ["Reliable grading", "High durability", "Bulk supply"],
        image: "/images/Products/Ballast.jfif",
      },
      {
        name: "Hardcore",
        description:
          "Strong compacting material for sub-bases, fill and ground preparation.",
        applications: [
          "Sub-base preparation",
          "Heavy construction",
          "Civil works",
        ],
        features: ["Stable compaction", "Strong base", "Project-scale supply"],
        image: "/images/Products/Hardcore.jfif",
      },
      {
        name: "Machine-cut Stones",
        description:
          "Precision-cut stone products for durable surfacing and construction finishing.",
        applications: ["Paving", "Retaining works", "Design-led builds"],
        features: [
          "Accurate dimensions",
          "Premium finish",
          "Consistent quality",
        ],
        image: "/images/Products/Machine-cut%20stones.jfif",
      },
      {
        name: "Sand",
        description:
          "Clean, dependable sand for concrete mixes, bedding and finishing applications.",
        applications: ["Concrete production", "Masonry", "Landscaping"],
        features: ["Clean grading", "Consistent quality", "Ready dispatch"],
        image: "/images/Products/Sand.jfif",
      },
    ],
  },
  {
    id: "safety-equipment",
    eyebrow: "Safety Equipment",
    title:
      "Certified PPE and workplace protection for active, compliant job sites.",
    description:
      "Protective equipment designed for productivity, confidence and safe operations.",
    image: "/images/Products/Helmets.jfif",
    products: [
      {
        name: "Safety Helmets",
        description:
          "Dependable head protection for demanding environments and high-risk work areas.",
        applications: [
          "Construction sites",
          "Industrial zones",
          "Maintenance work",
        ],
        features: ["Impact protection", "Comfort fit", "Site-ready compliance"],
        image: "/images/Products/Helmets.jfif",
      },
      {
        name: "Industrial Gloves",
        description:
          "Professional-grade hand protection for handling, assembly and daily site operations.",
        applications: [
          "Material handling",
          "Fabrication",
          "Routine maintenance",
        ],
        features: ["Grip support", "Durable finish", "All-day comfort"],
        image: "/images/Products/Gloves.jfif",
      },
      {
        name: "Safety Boots",
        description:
          "Robust footwear for traction, protection and long-lasting wear in active environments.",
        applications: ["Site work", "Operations", "Heavy-duty installations"],
        features: [
          "Slip resistance",
          "Protective support",
          "Work-ready design",
        ],
        image: "/images/Products/Boots.jfif",
      },
      {
        name: "Safety Goggles",
        description:
          "Precision eye protection built for visibility, comfort and field performance.",
        applications: ["Cutting work", "Machinery areas", "Inspection tasks"],
        features: ["Clear optics", "Reliable fit", "Worksite durability"],
        image: "/images/Products/Safety%20goggles.jfif",
      },
      {
        name: "Reflective Jackets",
        description:
          "High-visibility wear suitable for operations where visibility and protection matter.",
        applications: ["Night work", "Traffic zones", "Logistics operations"],
        features: ["High visibility", "Weather-ready", "Professional finish"],
        image: "/images/Products/Reflective%20jackets.jpg",
      },
    ],
  },
  {
    id: "engineering-tools",
    eyebrow: "Engineering Tools",
    title:
      "Professional tools for precision work, maintenance and workshop productivity.",
    description:
      "Engineered equipment for efficient field execution and dependable workshop performance.",
    image: "/images/Products/Measuring%20tools.jfif",
    products: [
      {
        name: "Angle Grinders",
        description:
          "High-performance grinders for cutting, finishing and material preparation tasks.",
        applications: ["Fabrication", "Metalwork", "Site finishing"],
        features: ["Efficient operation", "Durable build", "Precision control"],
        image: "/images/Products/Angle%20grinders.jfif",
      },
      {
        name: "Precision Measuring Tools",
        description:
          "Accurate measurement tools that support quality control and field accuracy.",
        applications: ["Inspection", "Layout planning", "Engineering checks"],
        features: ["High accuracy", "Professional grade", "Easy handling"],
        image: "/images/Products/Measuring%20tools.jfif",
      },
      {
        name: "Drilling Machines",
        description:
          "Reliable drilling tools suitable for installation, assembly and industrial operation.",
        applications: ["Workshop use", "Site installation", "Maintenance work"],
        features: [
          "Consistent output",
          "Easy operation",
          "Built for durability",
        ],
        image: "/images/Products/Drilling%20machines.jfif",
      },
      {
        name: "Power Tools",
        description:
          "Versatile power tools designed for speed, efficiency and operational confidence.",
        applications: ["Assembly", "Maintenance", "Field work"],
        features: [
          "Performance-led",
          "Reliable operation",
          "Broad application",
        ],
        image: "/images/Products/Power%20tools.jfif",
      },
    ],
  },
  {
    id: "welding-equipment",
    eyebrow: "Welding Equipment",
    title:
      "Industrial welding solutions for fabrication integrity and dependable output.",
    description:
      "Equipment and consumables supporting professional welding environments with precision and confidence.",
    image: "/images/Products/Welding%20machine.jfif",
    products: [
      {
        name: "Welding Machine",
        description:
          "Robust welding equipment for dependable fabrication and repair operations.",
        applications: ["Structural work", "Repair jobs", "Fabrication shops"],
        features: [
          "Reliable output",
          "Professional performance",
          "Project-ready",
        ],
        image: "/images/Products/Welding%20machine.jfif",
      },
      {
        name: "Welding Rods",
        description:
          "High-quality rods designed to support strong welds and fabrication continuity.",
        applications: [
          "Metal fabrication",
          "Maintenance",
          "Structural repairs",
        ],
        features: ["Strong fusion", "Consistent quality", "Wide compatibility"],
        image: "/images/Products/Welding%20rods.jfif",
      },
      {
        name: "Welding Mask",
        description:
          "Essential protection for safer welding operations with a clear, focused field of view.",
        applications: ["Fabrication", "Repair work", "Site welding"],
        features: ["Eye protection", "Comfort fit", "Durable build"],
        image: "/images/Products/Welding%20mask.jfif",
      },
      {
        name: "Gas Cylinders",
        description:
          "Dependable gas systems supporting professional welding and fabrication work.",
        applications: [
          "Shielded welding",
          "Industrial fabrication",
          "Workshop support",
        ],
        features: ["Safe handling", "Reliable supply", "Industrial-grade"],
        image: "/images/Products/Gas%20cylinders.jfif",
      },
    ],
  },
];

const whyChoose = [
  {
    title: "Quality Assured",
    description: "Strictly sourced and inspected for job-site reliability.",
    icon: ShieldCheck,
  },
  {
    title: "Trusted Suppliers",
    description: "Consistent availability backed by professional support.",
    icon: Truck,
  },
  {
    title: "Competitive Pricing",
    description: "Value-led sourcing for commercial and industrial scale.",
    icon: Gauge,
  },
  {
    title: "Reliable Delivery",
    description: "Efficient dispatch for projects that cannot afford delay.",
    icon: PackageOpen,
  },
  {
    title: "Bulk Supply",
    description:
      "Inventory and logistics designed for large project continuity.",
    icon: Boxes,
  },
  {
    title: "Professional Support",
    description: "Technical guidance from experienced supply specialists.",
    icon: Wrench,
  },
];

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "200+", label: "Products Delivered" },
  { value: "100+", label: "Projects Supported" },
  { value: "500+", label: "Satisfied Clients" },
];

export function ProductsPageContent() {
  const [activeSection, setActiveSection] = useState(categorySections[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const offsets = categorySections.map((section) => {
        const element = document.getElementById(section.id);
        if (!element)
          return { id: section.id, offset: Number.POSITIVE_INFINITY };
        const rect = element.getBoundingClientRect();
        return { id: section.id, offset: Math.abs(rect.top - 180) };
      });

      const current = offsets.sort((a, b) => a.offset - b.offset)[0];
      if (current) setActiveSection(current.id);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="bg-brand-bg pt-[72px] sm:pt-[80px] lg:pt-[90px] text-brand-text">
      <section className="relative overflow-hidden border-b border-slate-200/70 bg-[linear-gradient(135deg,#0B1F3A_0%,#1E4D78_60%,#2C5F8A_100%)] py-6 sm:py-8 lg:py-10">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/images/P%20%26%20L%20Above%20Heights%20Ltd.mp4" type="video/mp4" />
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
                Products
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-5xl"
              >
                Premium Construction & Engineering Products
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.6 }}
                className="mt-5 max-w-xl text-base leading-7 text-slate-200 sm:text-lg"
              >
                Discover reliable construction materials, structural steel,
                quarry products, engineering tools and safety equipment supplied
                for projects of every scale.
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
                <a
                  href="#catalogue"
                  className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition hover:scale-[1.02] hover:bg-brand-blue/45"
                >
                  Browse Categories
                </a>
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
                  animate={{ y: [0, -8, 0], rotate: [0, 0.6, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative overflow-hidden rounded-[1.35rem]"
                >
                  <Image
                    src="/images/Services/Construction%20materials%20display.jfif"
                    alt="Construction materials display"
                    width={900}
                    height={700}
                    className="h-[220px] w-full object-cover sm:h-[250px] lg:h-[260px]"
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 45vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/35 via-transparent to-transparent" />
                  <div className="absolute left-4 top-4 rounded-full border border-white/30 bg-white/90 px-3 py-2 text-sm font-semibold text-brand-blue shadow-sm">
                    500+ Products Available
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
                    <Boxes className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-brand-navy">
                      500+
                    </p>
                    <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
                      Products
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
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-brand-navy">
                      100+
                    </p>
                    <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
                      Trusted Suppliers
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
                    <Truck className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-brand-navy">
                      Fast
                    </p>
                    <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
                      Nationwide Delivery
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <SectionHeading
              eyebrow="Our Product Supply Capability"
              title="A premium industrial catalogue for demanding project teams."
              description="We combine sourcing discipline, engineering focus and dependable logistics to support contractors, developers, manufacturers and public-sector teams."
            />
            <p className="mt-8 text-lg leading-8 text-slate-700">
              Every product is selected to meet demanding job-site requirements,
              from structural integrity and safety compliance to workshop
              performance and fast deployment.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Certified sourcing",
                "Bulk capacity",
                "Technical support",
                "Fast dispatch",
              ].map((item) => (
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
              src="/images/Professional%20team%20meeting%20at%20a%20construction%20site.jfif"
              alt="Professional team reviewing site requirements"
              width={900}
              height={700}
              className="h-[460px] w-full object-cover object-center"
              quality={100}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </section>

      <section id="catalogue" className="bg-brand-bg py-6 sticky top-20 z-20">
        <div className="container-shell">
          <div className="flex flex-wrap justify-center gap-3 rounded-full border border-slate-200 bg-white/90 p-3 shadow-soft backdrop-blur">
            {categorySections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${activeSection === section.id ? "bg-brand-blue text-white shadow-sm" : "text-slate-700 hover:bg-brand-blue/10 hover:text-brand-blue"}`}
              >
                {section.eyebrow}
              </a>
            ))}
          </div>
        </div>
      </section>

      {categorySections.map((section, sectionIndex) => (
        <section
          key={section.id}
          id={section.id}
          className={`py-24 ${sectionIndex % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}`}
        >
          <div className="container-shell">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-3 rounded-full border border-brand-blue/20 bg-brand-blue/10 px-4 py-2">
                <span className="h-2.5 w-2.5 rounded-full bg-brand-orange" />
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-blue">
                  {section.eyebrow}
                </p>
              </div>
              <h2 className="mt-6 font-display text-4xl font-semibold leading-tight text-brand-navy sm:text-5xl">
                {section.title}
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-700">
                {section.description}
              </p>
            </motion.div>

            <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
              {section.products.map((product, index) => (
                <motion.article
                  key={product.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="flex h-full flex-col overflow-hidden rounded-[1.8rem] border border-slate-200 bg-white shadow-soft transition"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition duration-500 hover:scale-105"
                      quality={100}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="font-display text-2xl font-semibold text-brand-navy">
                      {product.name}
                    </h3>
                    <p className="mt-4 text-slate-600">{product.description}</p>
                    <div className="mt-6">
                      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-blue">
                        Applications
                      </p>
                      <ul className="mt-3 space-y-2 text-sm text-slate-700">
                        {product.applications.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-6">
                      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-blue">
                        Key Features
                      </p>
                      <ul className="mt-3 space-y-2 text-sm text-slate-700">
                        {product.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2">
                            <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-brand-amber" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-8">
                      <Link
                        href="/request-quotation"
                        className="inline-flex items-center gap-2 font-semibold text-brand-orange transition hover:text-brand-blue"
                      >
                        Request Quote <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="bg-gradient-to-br from-brand-navy via-brand-blue to-brand-navy py-24 text-white">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Why Choose Our Products"
            title="Trusted by teams that demand reliability, quality and speed."
            description="Our product portfolio is selected and supplied with the discipline expected by complex industrial and construction environments."
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {whyChoose.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="rounded-[2rem] border border-white/15 bg-white/10 p-8 shadow-soft backdrop-blur-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-amber/15 text-brand-amber">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-slate-200">{item.description}</p>
                </motion.article>
              );
            })}
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.06 }}
                className="rounded-[1.8rem] border border-white/15 bg-white/10 p-8 text-center backdrop-blur-xl"
              >
                <p className="font-display text-4xl font-semibold text-brand-amber">
                  {stat.value}
                </p>
                <p className="mt-3 text-slate-200">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 text-white">
        <Image
          src="/images/Services/Commercial%20building%20under%20construction.jfif"
          alt="Warehouse or fabrication backdrop"
          fill
          className="object-cover object-center"
          quality={100}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(11,31,58,0.92),rgba(30,77,120,0.78))]" />
        <div className="relative container-shell text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-amber">
              Need Premium Construction Products?
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">
              Let our team recommend the right products and prepare a
              competitive quotation for your project.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-200 sm:text-lg">
              From quotation to delivery planning, we’re ready to support
              procurement decisions with the professionalism and speed your
              project demands.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/request-quotation"
                className="rounded-full bg-brand-orange px-7 py-3.5 font-semibold text-white transition hover:bg-brand-amber hover:text-brand-navy"
              >
                Request Product Quote
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-white/20 bg-white/10 px-7 py-3.5 font-semibold text-white transition hover:bg-white/20"
              >
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
