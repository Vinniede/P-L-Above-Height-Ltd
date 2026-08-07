import { SectionHeading } from "@/components/section-heading";
import {
  BadgeCheck,
  ShieldCheck,
  FileCheck2,
  Factory,
  GanttChartSquare,
} from "lucide-react";

const certs = [
  {
    icon: BadgeCheck,
    title: "NCA",
    description:
      "Registered and recognized for professional construction delivery.",
  },
  {
    icon: FileCheck2,
    title: "KRA Compliance",
    description: "Aligned with regulatory and fiscal compliance practices.",
  },
  {
    icon: GanttChartSquare,
    title: "eGP Registration",
    description: "Ready for digital government procurement processes.",
  },
  {
    icon: ShieldCheck,
    title: "Safety Standards",
    description:
      "Committed to strong health, safety, and environmental controls.",
  },
  {
    icon: Factory,
    title: "Quality Assurance",
    description: "Documented quality systems supporting dependable execution.",
  },
];

export function CertificationsSection() {
  return (
    <section className="py-12 bg-white">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Certifications & Compliance"
          title="Professional credentials that support trust and credibility."
          description="Our compliance posture reflects the standards expected by serious clients and institutional buyers."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {certs.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="glass-card p-7 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-orange/10 text-brand-orange">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-brand-navy">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
