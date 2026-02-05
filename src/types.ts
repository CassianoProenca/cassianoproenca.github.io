import { type LucideIcon } from "lucide-react";

export type ProjectMetric = {
  label: string;
  value: string;
};

export type Project = {
  title: string;
  description: string;
  techStack: string[];
  metrics?: ProjectMetric[];
  highlight?: string;
  challenge?: string;
  type: "Principal" | "Secundário" | "Freelance" | "Open Source";
  icon: LucideIcon;
  images?: string[];
  githubUrl?: string;
};
