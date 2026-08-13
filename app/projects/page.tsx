import { Metadata } from "next";
import { ProjectsShowcase } from "@/components/projects/projects-showcase";

export const metadata: Metadata = {
  title: "Projects | P & L Above Heights Ltd",
  description:
    "View a portfolio of construction, commercial, industrial, and engineering projects completed by P & L Above Heights Ltd.",
};

export default function ProjectsPage() {
  return <ProjectsShowcase />;
}
