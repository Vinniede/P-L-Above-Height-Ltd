import { SectionHeading } from "@/components/section-heading";

const clients = [
  "NCA",
  "KRA",
  "County Governments",
  "Parastatals",
  "Private Developers",
  "Manufacturers",
];

export function ClientsSection() {
  return (
    <section className="bg-brand-bg py-12">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Major Clients"
          title="Trusted by organisations that expect performance and precision."
          description="Our reputation is rooted in reliable delivery and strong partnerships across sectors."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {clients.map((client) => (
            <div
              key={client}
              className="glass-card flex h-28 items-center justify-center rounded-[1.5rem] text-center font-display text-xl font-semibold text-brand-navy"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
