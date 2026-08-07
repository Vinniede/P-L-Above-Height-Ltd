import { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import {
  ArrowRight,
  ShieldCheck,
  Wrench,
  Factory,
  BadgeCheck,
  Compass,
} from "lucide-react";
import { IndustriesWeServe } from "@/components/industries/industries-we-serve";

export const metadata: Metadata = {
  title: "About | P & L Above Heights Ltd",
  description:
    "Learn about our vision, values, growth, and operational capacity as a trusted engineering and industrial supply company.",
};

const values = [
  "Integrity in every delivery",
  "Safety and compliance-minded execution",
  "Precision in engineering and logistics",
  "Long-term client partnerships",
];

export default function AboutPage() {
  return (
    <main className="pt-[72px] sm:pt-[80px] lg:pt-[90px] bg-brand-bg">
      <section className="relative overflow-hidden bg-brand-navy text-white">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/images/P & L Above Heights Ltd.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-slate-950/70" />
        <div className="relative container-shell py-16 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-brand-amber">
              About Our Company
            </p>
            <h1 className="mt-6 font-display text-4xl font-semibold sm:text-5xl">
              Engineering excellence grounded in trust and performance.
            </h1>
            <p className="mt-6 text-lg text-slate-300">
              We are a premium construction, engineering, and industrial supply
              partner delivering robust solutions across Kenya’s most demanding
              sectors.
            </p>
          </div>
        </div>
      </section>

      <section className="container-shell py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading
              eyebrow="Company Overview"
              title="Built for scale, trusted for delivery."
              description="P & L Above Heights Ltd combines site execution, procurement expertise, and industrial supply capabilities to deliver reliable outcomes from foundation to finish."
            />
            <p className="mt-6 text-lg leading-8 text-slate-700">
              Our team brings deep experience in construction works, building
              materials, quarry products, engineering supplies, and industrial
              safety solutions. We serve government, infrastructure, commercial,
              and private-sector clients with the discipline of a multinational
              contractor.
            </p>
          </div>
          <div className="glass-card p-8">
            <h3 className="font-display text-2xl font-semibold text-brand-navy">
              Vision
            </h3>
            <p className="mt-4 text-slate-700">
              To become Kenya’s most dependable partner for integrated
              construction and industrial supply solutions.
            </p>
            <h3 className="mt-8 font-display text-2xl font-semibold text-brand-navy">
              Mission
            </h3>
            <p className="mt-4 text-slate-700">
              To deliver superior projects and dependable products through
              quality, efficiency, and customer-focused execution.
            </p>
          </div>
        </div>
      </section>

      <section className="container-shell pb-20">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="glass-card p-8">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-8 w-8 text-brand-orange" />
              <h3 className="font-display text-2xl font-semibold text-brand-navy">
                Health, Safety & Environment
              </h3>
            </div>
            <p className="mt-4 text-slate-700">
              We prioritise safe work environments, robust site controls, and
              compliance with industry standards at every stage of project
              delivery.
            </p>
          </div>
          <div className="glass-card p-8">
            <div className="flex items-center gap-3">
              <BadgeCheck className="h-8 w-8 text-brand-orange" />
              <h3 className="font-display text-2xl font-semibold text-brand-navy">
                Quality Assurance
              </h3>
            </div>
            <p className="mt-4 text-slate-700">
              Every product and service is delivered under stringent quality
              controls and documented assurance procedures.
            </p>
          </div>
        </div>
      </section>

      <section className="container-shell pb-20">
        <div className="rounded-[2rem] bg-gradient-to-br from-brand-navy via-slate-800 to-brand-navy p-10 text-white">
          <SectionHeading
            eyebrow="Core Values"
            title="The principles that guide every engagement."
            description="Our values shape how we lead projects, support clients, and build lasting trust."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {values.map((value) => (
              <div
                key={value}
                className="rounded-2xl border border-white/20 bg-white/10 p-6"
              >
                <div className="flex items-center gap-3">
                  <Compass className="h-6 w-6 text-brand-amber" />
                  <p className="font-display text-lg font-semibold">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell pb-24">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="glass-card p-8">
            <div className="flex items-center gap-3">
              <Wrench className="h-7 w-7 text-brand-orange" />
              <h3 className="font-display text-2xl font-semibold text-brand-navy">
                Operational Capacity
              </h3>
            </div>
            <p className="mt-4 text-slate-700">
              We maintain robust delivery capability through experienced teams,
              reliable supply channels, and responsive project coordination
              across Kenya.
            </p>
          </div>
          <div className="glass-card p-8">
            <div className="flex items-center gap-3">
              <Factory className="h-7 w-7 text-brand-orange" />
              <h3 className="font-display text-2xl font-semibold text-brand-navy">
                Director’s Statement
              </h3>
            </div>
            <p className="mt-4 text-slate-700">
              “Our strength lies in combining technical expertise with
              disciplined execution so every client receives dependable value
              and confidence.”
            </p>
          </div>
        </div>
      </section>

      <IndustriesWeServe
        compact
        eyebrow="INDUSTRY EXPERIENCE"
        title="A broad footprint across sectors"
        description="Our project and supply capability spans construction, infrastructure, commercial development, government works and industrial operations."
        showStats={false}
      />
    </main>
  );
}
