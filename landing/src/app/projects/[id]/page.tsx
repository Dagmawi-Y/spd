import { notFound } from "next/navigation";
import { allProjects } from "@/data/projects";
import ProjectDetail from "@/components/sections/ProjectDetailSection";

interface ProjectDetailPageProps {
  params: { id: string };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  // This is fine for static data
  const project = allProjects.find((p) => p.id === params.id);

  if (!project) return notFound();

  return <ProjectDetail project={project} />;
}
