import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Layout, Info, Target, Github, Star } from "lucide-react";
import type { Project } from "../types";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [currentImg, setCurrentImg] = React.useState(0);

  // Reset image index when modal opens with a new project
  React.useEffect(() => {
    if (isOpen) setCurrentImg(0);
  }, [isOpen, project]);

  if (!project) return null;

  const images = project.images || [];

  const nextImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImg((prev) => (prev + 1) % images.length);
  };

  const prevImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImg((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <AnimatePresence>
        {isOpen && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-zinc-950/90 backdrop-blur-md z-100"
              />
            </Dialog.Overlay>
            <Dialog.Content asChild>
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-[95%] max-w-5xl max-h-[90vh] overflow-y-auto bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl z-101 outline-none"
              >
                <div className="flex flex-col">
                  
                  {/* Image Carousel Area */}
                  <div className="relative bg-black h-75 md:h-137.5 group flex items-center justify-center border-b border-zinc-800">
                    {images.length > 0 ? (
                      <>
                        <motion.img
                          key={currentImg}
                          src={images[currentImg]}
                          alt={`${project.title} screenshot ${currentImg + 1}`}
                          className="w-full h-full object-contain"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                        {images.length > 1 && (
                          <>
                            <button 
                              onClick={prevImg} 
                              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-zinc-900/80 hover:bg-indigo-600 text-white transition-all opacity-0 group-hover:opacity-100 border border-zinc-700 shadow-lg"
                            >
                              <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button 
                              onClick={nextImg} 
                              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-zinc-900/80 hover:bg-indigo-600 text-white transition-all opacity-0 group-hover:opacity-100 border border-zinc-700 shadow-lg"
                            >
                              <ChevronRight className="w-6 h-6" />
                            </button>
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10">
                               {images.map((_, i) => (
                                 <button 
                                   key={i} 
                                   onClick={(e) => { e.stopPropagation(); setCurrentImg(i); }}
                                   className={`w-2 h-2 rounded-full transition-all ${i === currentImg ? 'bg-indigo-500 w-6' : 'bg-zinc-600 hover:bg-zinc-400'}`} 
                                 />
                               ))}
                            </div>
                          </>
                        )}
                      </>
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center text-zinc-600 bg-zinc-950 gap-4 p-12 text-center">
                        <Layout className="w-16 h-16 opacity-10" />
                        <div>
                           <p className="text-lg font-bold text-zinc-300">Imagens em desenvolvimento</p>
                           <p className="text-sm text-zinc-500 max-w-xs mx-auto">Confira a arquitetura completa no repositório GitHub.</p>
                        </div>
                        {project.githubUrl && (
                           <a href={project.githubUrl} target="_blank" rel="noreferrer">
                              <Button variant="outline" className="border-zinc-700 hover:bg-zinc-800 gap-2">
                                <Github className="w-4 h-4" /> Ver Repositório
                              </Button>
                           </a>
                        )}
                      </div>
                    )}
                    <Dialog.Close className="absolute top-4 right-4 p-2.5 rounded-full bg-zinc-950/80 hover:bg-red-500/20 hover:text-red-500 text-white transition-all z-20 border border-white/10 backdrop-blur-md">
                      <X className="w-5 h-5" />
                    </Dialog.Close>
                  </div>

                  {/* Content Area */}
                  <div className="p-6 md:p-10 space-y-10 bg-zinc-900">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <Badge variant="indigo" className="uppercase tracking-widest text-[10px] px-3 py-1 font-bold">
                            Case: {project.type}
                          </Badge>
                          {project.githubUrl && (
                            <a 
                              href={project.githubUrl} 
                              target="_blank" 
                              rel="noreferrer"
                              className="flex items-center gap-1.5 text-[10px] font-black text-amber-500 hover:text-amber-400 transition-colors uppercase tracking-[0.15em] bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20"
                            >
                              <Star className="w-3 h-3 fill-current" />
                              Deixe uma estrela
                            </a>
                          )}
                        </div>
                        <Dialog.Title className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-none">
                          {project.title}
                        </Dialog.Title>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 md:justify-end md:max-w-75">
                        {project.techStack.map(tech => (
                          <Badge key={tech} variant="outline" className="bg-zinc-800/50 text-zinc-300 border-zinc-700 px-3 py-1 text-[11px]">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12 items-start pt-4">
                      <div className="md:col-span-2 space-y-10">
                        <section className="space-y-4">
                          <h4 className="flex items-center gap-2 text-indigo-400 font-bold text-xs uppercase tracking-[0.2em]">
                            <Info className="w-4 h-4" /> Visão Geral
                          </h4>
                          <p className="text-zinc-300 text-xl leading-relaxed font-medium">{project.description}</p>
                        </section>

                        {project.challenge && (
                          <section className="space-y-4">
                            <h4 className="flex items-center gap-2 text-indigo-400 font-bold text-xs uppercase tracking-[0.2em]">
                              <Target className="w-4 h-4" /> Decisões Arquiteturais
                            </h4>
                            <div className="p-8 rounded-2xl bg-zinc-950/50 border border-zinc-800 relative overflow-hidden group">
                              <div className="absolute top-0 left-0 w-1.5 h-full bg-indigo-500" />
                              <p className="text-zinc-300 italic text-lg leading-relaxed">"{project.challenge}"</p>
                            </div>
                          </section>
                        )}
                      </div>

                      <div className="space-y-8 bg-zinc-950/40 p-8 rounded-2xl border border-zinc-800/50 backdrop-blur-sm">
                         <h4 className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.3em] mb-6">Métricas & Impacto</h4>
                         <div className="space-y-8">
                            {project.metrics?.map((m, i) => (
                              <div key={i} className="group border-b border-zinc-800/50 pb-4 last:border-0 last:pb-0">
                                <p className="text-4xl font-black text-white group-hover:text-indigo-400 transition-all duration-300 tracking-tighter">{m.value}</p>
                                <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest mt-2">{m.label}</p>
                              </div>
                            ))}
                         </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}