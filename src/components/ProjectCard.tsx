import { motion } from "framer-motion";
import type { Project } from "../types";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Maximize2, ArrowRight } from "lucide-react";


interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: (project: Project) => void;
}

export function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  const mainImage = project.images?.[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="h-full cursor-pointer"
      onClick={() => onClick(project)}
    >
      <Card className="h-full flex flex-col border-zinc-800 bg-zinc-900/40 backdrop-blur-sm overflow-hidden hover:border-indigo-500/50 transition-all group shadow-xl">
        
        {/* Project Image Preview */}
        {mainImage && (
          <div className="relative h-56 w-full overflow-hidden border-b border-zinc-800 bg-zinc-950">
            <div className="absolute inset-0 bg-linear-to-t from-zinc-950/90 via-zinc-950/20 to-transparent z-10" />
            <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
               <div className="bg-zinc-900/80 p-2 rounded-full border border-zinc-700 backdrop-blur-md">
                  <Maximize2 className="w-4 h-4 text-white" />
               </div>
            </div>
            <motion.img 
              src={mainImage} 
              alt={project.title}
              className="w-full h-full object-cover object-top opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            />
          </div>
        )}

        <CardHeader className="pb-4 relative">
          <div className="flex justify-between items-start mb-2">
            <div className={`p-2 rounded-lg bg-zinc-900/80 border border-zinc-800 ${project.type === 'Principal' ? 'text-indigo-400' : 'text-zinc-400'}`}>
              <project.icon className="w-5 h-5" />
            </div>
            <Badge variant={project.type === 'Principal' ? 'indigo' : 'secondary'} className="uppercase text-[10px] tracking-wider">
              {project.type}
            </Badge>
          </div>
          <CardTitle className="text-xl font-bold text-zinc-100 group-hover:text-indigo-300 transition-colors">
            {project.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="grow flex flex-col gap-4">
          <p className="text-zinc-400 text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.techStack.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="outline" className="text-[10px] text-zinc-300 border-zinc-700 bg-zinc-800/50 hover:bg-zinc-700/50 transition-colors">
                {tech}
              </Badge>
            ))}
            {project.techStack.length > 4 && <span className="text-[10px] text-zinc-500">+{project.techStack.length - 4}</span>}
          </div>
        </CardContent>

        <CardFooter className="pt-0 border-t border-zinc-800/50 mt-auto bg-zinc-900/10">
          <div className="w-full py-4 flex items-center justify-between group/footer">
             <span className="text-xs font-bold text-zinc-400 uppercase group-hover/footer:text-indigo-400 transition-colors tracking-widest">Ver Estudo de Caso</span>
             <ArrowRight className="w-4 h-4 text-zinc-500 group-hover/footer:translate-x-1 group-hover/footer:text-indigo-400 transition-all" />
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
