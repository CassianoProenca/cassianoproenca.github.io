import * as React from "react";
import { aboutMe, projects } from "./data/content";
import { ProjectCard } from "./components/ProjectCard";
import { ProjectModal } from "./components/ProjectModal";
import type { Project } from "./types";
import { Badge } from "./components/ui/badge";
import { Separator } from "./components/ui/separator";
import { Github, Linkedin, Mail, MapPin, Terminal, Download } from "lucide-react";
import { Button } from "./components/ui/button";
import { motion } from "framer-motion";

function App() {
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-indigo-500/30">
      
      {/* Header / Nav */}
      <header className="fixed top-0 w-full z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 text-indigo-400 font-bold text-lg tracking-tight">
            <Terminal className="w-5 h-5" />
            <span>CP.dev</span>
          </div>
          <nav className="flex gap-4">
             <a href="https://github.com/CassianoProenca" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
             <a href="https://linkedin.com/in/cassiano-melo-679938326/" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
             <a href="mailto:cassianomeloprofissional@gmail.com" className="text-zinc-400 hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 pt-32 pb-20 space-y-24">
        
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-12 py-10">
          <div className="max-w-3xl space-y-6 order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="indigo" className="mb-4">
                Disponível para Projetos
              </Badge>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Arquitetando soluções que <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-violet-400">resolvem problemas reais.</span>
              </h1>
              <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed mt-4">
                {aboutMe.role} • {aboutMe.education}
              </p>
              <div className="flex items-center gap-4 text-sm text-zinc-500 pt-2">
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Sorocaba, SP</span>
                <Separator orientation="vertical" className="h-4" />
                <span>Fullstack Developer</span>
              </div>
              <div className="pt-8 flex flex-wrap gap-4">
                 <Button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="bg-white text-black hover:bg-zinc-200 px-8 py-6 text-base font-bold transition-all">
                    Ver Cases de Sucesso
                 </Button>
                 <a href="/portfolio/resume" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-900 hover:text-white gap-2 px-8 py-6 text-base transition-all">
                       <Download className="w-4 h-4" /> Baixar CV
                    </Button>
                 </a>
              </div>
            </motion.div>
          </div>

          {/* Profile Photo / Caricature */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative order-1 md:order-2"
          >
             <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-indigo-500/30 p-2 bg-zinc-900/50 backdrop-blur-sm shadow-2xl shadow-indigo-500/10">
                <div className="w-full h-full rounded-full overflow-hidden bg-zinc-800 flex items-center justify-center relative group">
                   {/* Fallback visual while user adds the photo */}
                   <div className="absolute inset-0 bg-linear-to-tr from-indigo-600/20 to-transparent z-10" />
                   <img 
                    src="/portfolio/profile.png" 
                    alt="Cassiano Melo - Desenvolvedor Fullstack" 
                    className="w-full h-full object-cover grayscale-0 hover:scale-105 transition-all duration-700"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement?.querySelector('.fallback-icon')?.classList.remove('hidden');
                    }}
                   />
                   <div className="fallback-icon hidden flex-col items-center text-zinc-600">
                      <Terminal className="w-20 h-20 opacity-20" />
                      <span className="text-[10px] uppercase tracking-widest mt-2 font-bold opacity-40">CA.dev Image</span>
                   </div>
                </div>
                {/* Decorative Rings */}
                <div className="absolute inset-0 rounded-full border border-indigo-500/10 animate-pulse" />
                <div className="absolute -inset-1 rounded-full border border-indigo-500/5 animate-ping [animation-duration:3s]" />
             </div>
             
             {/* Tech badges around photo (Optional/Stylistic) */}
             <div className="absolute -bottom-2 -right-2 bg-zinc-950 border border-zinc-800 p-2 rounded-xl shadow-xl flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Ativo Agora</span>
             </div>
          </motion.div>
        </section>

        <Separator className="bg-zinc-800" />

        {/* About Section */}
        <section className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
           <div className="space-y-2">
              <h2 className="text-2xl font-bold text-white">Sobre Mim</h2>
              <p className="text-zinc-500 text-sm">A jornada até aqui</p>
           </div>
           <div className="space-y-6 text-zinc-300 leading-relaxed text-lg">
              <p>{aboutMe.description}</p>
           </div>
        </section>

        {/* Projects Grid */}
        <section id="projects" className="space-y-12">
           <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
             <div className="space-y-2">
                <h2 className="text-2xl font-bold text-white">Estudos de Caso</h2>
                <p className="text-zinc-400 max-w-lg">Projetos desenvolvidos com foco em escalabilidade, arquitetura limpa e impacto mensurável.</p>
             </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
              {projects.map((project, index) => (
                <div key={index} className={project.type === "Principal" ? "md:col-span-2" : ""}>
                   <ProjectCard 
                    project={project} 
                    index={index} 
                    onClick={handleOpenProject}
                   />
                </div>
              ))}
           </div>
        </section>
      </main>

      {/* Project Detail Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <footer className="border-t border-zinc-900 bg-zinc-950 py-12">
        <div className="container mx-auto px-4 text-center">
           <p className="text-zinc-600 text-sm">
             © 2026 Cassiano Melo. Construído com React, Tailwind & shadcn/ui.
           </p>
        </div>
      </footer>
    </div>
  )
}

export default App
