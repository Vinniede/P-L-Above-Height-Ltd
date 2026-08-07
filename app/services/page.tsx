import { Metadata } from "next";
import { ServicesPageContent } from "@/components/services/services-page-content";

export const metadata: Metadata = {
  title: "Services | P & L Above Heights Ltd",
  description:
    "Explore our construction, engineering, industrial supply, and logistics services designed for demanding projects.",
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
