import { type LucideIcon } from "lucide-react";

export type ProjectMetric = {
  label: string;
  value: string;
};

export type ProjectMedia = {
  type: "image" | "video";
  src: string;
  alt: string;
  poster?: string;
};

export type ProjectCategory = "Sistema real" | "Produto próprio" | "Open Source" | "Freelance";

export type ProjectStatus = "Em produção" | "Interno" | "Open Source" | "Em atualização" | "SaaS B2B";

export type Project = {
  slug: string;
  rank: number;
  title: string;
  shortTitle?: string;
  description: string;
  summary: string;
  techStack: string[];
  metrics?: ProjectMetric[];
  highlight?: string;
  challenge?: string;
  type: "Principal" | "Secundário" | "Freelance" | "Open Source" | "Mobile";
  category: ProjectCategory;
  status: ProjectStatus;
  role: string;
  problem: string;
  solution: string;
  architectureNotes: string[];
  businessImpact: string[];
  icon: LucideIcon;
  images?: string[];
  screenshots?: string[];
  media?: ProjectMedia[];
  mediaLayout?: "desktop" | "mobile";
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
};
