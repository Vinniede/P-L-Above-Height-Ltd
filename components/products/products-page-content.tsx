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
    eyebrow: "Cement & Building Materials",
    title:
      "Quality materials for residential, commercial and infrastructure projects.",
    description:
      "We supply a wide range of cement and essential building materials to support construction projects of different scales, with dependable product availability and supply support.",
    image: "/images/products/premium-cement-bags.jfif",
    products: [
      {
        name: "Savannah Cement",
        description:
          "Quality cement supplied for a wide range of residential, commercial and infrastructure construction requirements.",
        applications: [
          "Residential construction",
          "Commercial buildings",
          "Infrastructure projects",
        ],
        features: [
          "Reliable cement supply",
          "Suitable for different construction requirements",
          "Available for project and bulk orders",
        ],
        image: encodeURI("/images/products/Savannah Cement.jpg"),
      },
      {
        name: "Bamburi Cement",
        description:
          "Quality cement supplied for construction projects requiring dependable materials and consistent supply.",
        applications: [
          "Residential construction",
          "Commercial buildings",
          "Infrastructure projects",
        ],
        features: [
          "Reliable product supply",
          "Suitable for construction projects",
          "Available for project requirements",
        ],
        image: encodeURI("/images/products/Bamburi Cement.jpg"),
      },
      {
        name: "Portland Cement",
        description:
          "Cement supplied for general building and construction applications across residential, commercial and infrastructure projects.",
        applications: [
          "Building construction",
          "Structural works",
          "General construction",
        ],
        features: [
          "Reliable supply",
          "Suitable for varied construction needs",
          "Available for project and bulk requirements",
        ],
        image: encodeURI("/images/products/Portland Cement.jpg"),
      },
      {
        name: "Reinforcement Bars",
        description:
          "Steel reinforcement supplied for concrete structures requiring strength, stability and structural support.",
        applications: [
          "Foundations",
          "Slabs and beams",
          "Structural construction",
        ],
        features: [
          "Structural reinforcement",
          "Consistent supply",
          "Suitable for project and bulk requirements",
        ],
        image: "/images/products/reinforcement-bars.jfif",
      },
      {
        name: "Building Blocks",
        description:
          "Durable building blocks supplied for walling, partitioning and general construction applications.",
        applications: [
          "Residential buildings",
          "Commercial buildings",
          "Wall construction",
        ],
        features: [
          "Durable construction",
          "Practical for walling applications",
          "Suitable for different project requirements",
        ],
        image: "/images/products/building-blocks.jfif",
      },
      {
        name: "Roofing Materials",
        description:
          "Roofing materials supplied for projects requiring dependable protection and practical building solutions.",
        applications: [
          "Residential buildings",
          "Commercial buildings",
          "Industrial facilities",
        ],
        features: [
          "Suitable for different roofing requirements",
          "Reliable product supply",
          "Available for project requirements",
        ],
        image: "/images/products/roofing-materials.jfif",
      },
      {
        name: "Nails",
        description:
          "Essential building fasteners supplied for construction, carpentry, roofing and general building applications.",
        applications: [
          "Timber construction",
          "Roofing work",
          "General building",
        ],
        features: [
          "Practical for construction applications",
          "Available in different requirements",
          "Suitable for project and general use",
        ],
        image: "/images/products/Nails.jpg",
      },
      {
        name: "Gypsum",
        description:
          "Gypsum building products supplied for interior construction, partitioning and finishing applications.",
        applications: [
          "Interior partitions",
          "Ceiling applications",
          "Building finishes",
        ],
        features: [
          "Suitable for interior construction",
          "Practical for partitioning and finishing",
          "Available for project requirements",
        ],
        image: "/images/products/Gypsum.jpg",
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
    image: "/images/products/structural-steel.jfif",
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
        image: "/images/products/deformed-steel-bars.jfif",
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
        image: "/images/products/structural-steel.jfif",
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
        image: "/images/products/steel-beams.jfif",
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
        image: "/images/products/steel-pipes.jfif",
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
    image: "/images/products/ballast.jfif",
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
        image: "/images/products/ballast.jfif",
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
        image: "/images/products/hardcore.jfif",
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
        image: "/images/products/machine-cut-stones.jfif",
      },
      {
        name: "Sand",
        description:
          "Clean, dependable sand for concrete mixes, bedding and finishing applications.",
        applications: ["Concrete production", "Masonry", "Landscaping"],
        features: ["Clean grading", "Consistent quality", "Ready dispatch"],
        image: "/images/products/sand.jfif",
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
    image: "/images/products/helmets.jfif",
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
        image: "/images/products/helmets.jfif",
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
        image: "/images/products/gloves.jfif",
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
        image: "/images/products/boots.jfif",
      },
      {
        name: "Safety Goggles",
        description:
          "Precision eye protection built for visibility, comfort and field performance.",
        applications: ["Cutting work", "Machinery areas", "Inspection tasks"],
        features: ["Clear optics", "Reliable fit", "Worksite durability"],
        image: "/images/products/safety-goggles.jfif",
      },
      {
        name: "Reflective Jackets",
        description:
          "High-visibility wear suitable for operations where visibility and protection matter.",
        applications: ["Night work", "Traffic zones", "Logistics operations"],
        features: ["High visibility", "Weather-ready", "Professional finish"],
        image: "/images/products/reflective-jackets.jpg",
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
    image: "/images/products/measuring-tools.jfif",
    products: [
      {
        name: "Angle Grinders",
        description:
          "High-performance grinders for cutting, finishing and material preparation tasks.",
        applications: ["Fabrication", "Metalwork", "Site finishing"],
        features: ["Efficient operation", "Durable build", "Precision control"],
        image: "/images/products/angle-grinders.jfif",
      },
      {
        name: "Precision Measuring Tools",
        description:
          "Accurate measurement tools that support quality control and field accuracy.",
        applications: ["Inspection", "Layout planning", "Engineering checks"],
        features: ["High accuracy", "Professional grade", "Easy handling"],
        image: "/images/products/measuring-tools.jfif",
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
        image: "/images/products/drilling-machines.jfif",
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
        image: "/images/products/power-tools.jfif",
      },
    ],
  },
  {
    id: "welding-equipment",
    eyebrow: "Welding Consumables & Equipment",
    title:
      "Reliable welding products for fabrication, construction and repair.",
    description:
      "We supply welding rods, equipment and essential welding accessories for professional fabrication, maintenance, construction and repair applications.",
    image: "/images/products/welding-machine.jfif",
    products: [
      {
        name: "Welding Rods & Electrodes",
        description:
          "A wide range of welding rods and electrodes available for different welding and fabrication requirements.",
        applications: [
          "Metal fabrication",
          "Construction work",
          "Maintenance and repairs",
        ],
        features: [
          "Wide range of options",
          "Different sizes and specifications",
          "Suitable for various welding requirements",
        ],
        image: encodeURI("/images/products/Welding Rods & Electrodes.jpg"),
      },
      {
        name: "Welding Machines",
        description:
          "Welding equipment supplied for fabrication, repair and general welding operations.",
        applications: ["Structural work", "Repair jobs", "Fabrication"],
        features: [
          "Reliable equipment",
          "Practical for workshop use",
          "Suitable for different welding requirements",
        ],
        image: "/images/products/welding-machine.jfif",
      },
      {
        name: "Welding Masks",
        description:
          "Protective welding equipment designed to support safer welding operations.",
        applications: ["Fabrication", "Repair work", "Site welding"],
        features: [
          "Eye and face protection",
          "Comfortable use",
          "Durable construction",
        ],
        image: "/images/products/welding-mask.jfif",
      },
      {
        name: "Gas Cylinders",
        description:
          "Gas cylinders supplied for welding and fabrication applications.",
        applications: [
          "Welding operations",
          "Fabrication",
          "Workshop applications",
        ],
        features: [
          "Reliable supply",
          "Suitable for welding applications",
          "Available for project requirements",
        ],
        image: "/images/products/gas-cylinders.jfif",
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
  { value: "100+", label: "Products Delivered" },
  { value: "30+", label: "Projects Supported" },
  { value: "500+", label: "Satisfied Clients" },
];

export function ProductsPageContent() {
  const [activeSection, setActiveSection] = useState(categorySections[0].id);
  const [mobileCatalogOpen, setMobileCatalogOpen] = useState(false);

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
          <source
            src="/images/p-and-l-above-heights-ltd.mp4"
            type="video/mp4"
          />
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
                    src="/images/services/construction-materials-display.jfif"
                    alt="Construction materials display"
                    width={900}
                    height={700}
                    className="h-[220px] w-full object-cover sm:h-[250px] lg:h-[260px]"
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 45vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/35 via-transparent to-transparent" />
                  <div className="absolute left-4 top-4 rounded-full border border-white/30 bg-white/90 px-3 py-2 text-sm font-semibold text-brand-blue shadow-sm">
                    100+ Products Available
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
                      100+
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
                      50+
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
              src="/images/professional-team-meeting-at-a-construction-site.jfif"
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

      <section
        id="catalogue"
        className="bg-brand-bg py-2 md:py-6 sticky top-20 z-20"
      >
        <div className="container-shell relative">
          {/* Desktop / tablet: show full pill list */}
          <div className="hidden md:flex flex-wrap justify-center gap-3 rounded-full border border-slate-200 bg-white/90 p-3 shadow-soft backdrop-blur">
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

          {/* Mobile: compact toggle that opens a popover with the same links */}
          <div className="md:hidden flex justify-center py-1">
            <div className="relative">
              <button
                type="button"
                onClick={() => setMobileCatalogOpen((s) => !s)}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-semibold text-brand-blue"
              >
                Categories
              </button>

              {mobileCatalogOpen && (
                <div className="absolute left-0 right-0 top-full z-30 mt-2 rounded-lg border border-slate-200 bg-white p-3 shadow-lg">
                  <div className="flex flex-wrap justify-center gap-3">
                    {categorySections.map((section) => (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        onClick={() => setMobileCatalogOpen(false)}
                        className={`rounded-full px-4 py-2 text-sm font-semibold transition ${activeSection === section.id ? "bg-brand-blue text-white shadow-sm" : "text-slate-700 hover:bg-brand-blue/10 hover:text-brand-blue"}`}
                      >
                        {section.eyebrow}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
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
          src="/images/services/commercial-building-under-construction.jfif"
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
