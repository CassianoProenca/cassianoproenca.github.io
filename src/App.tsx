import { Link } from "react-router-dom";
import { ArrowRight, Github, Linkedin, Mail, MapPin, MessageCircle, ScanSearch } from "lucide-react";
import { motion } from "framer-motion";
import { aboutMe, projects, proofPoints } from "./data/content";
import type { Project } from "./types";
import { Badge } from "./components/ui/badge";
import { Button } from "./components/ui/button";

const rankedProjects = [...projects].sort((a, b) => a.rank - b.rank);
const featuredProject = rankedProjects.find((project) => project.featured) ?? rankedProjects[0];
const secondaryProjects = rankedProjects.filter((project) => project.slug !== featuredProject.slug);

function EvidenceImage({ project, priority = false }: { project: Project; priority?: boolean }) {
  const image = project.images?.[0] ?? project.screenshots?.[0];
  const video = project.media?.find((item) => item.type === "video");
  const isMobile = project.mediaLayout === "mobile";

  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group block overflow-hidden rounded-lg border border-white/10 bg-zinc-900 shadow-2xl shadow-black/30"
    >
      <div className="flex items-center justify-between border-b border-white/10 bg-zinc-950/90 px-4 py-3">
        <div>
          <p className="text-xs font-semibold uppercase text-zinc-500">#{project.rank.toString().padStart(2, "0")}</p>
          <p className="text-sm font-bold text-zinc-100">{project.shortTitle ?? project.title}</p>
        </div>
        <Badge className="border-white/10 bg-white/5 text-zinc-300">{project.status}</Badge>
      </div>
      <div className={isMobile ? "flex aspect-[16/10] items-center justify-center bg-zinc-950 px-8 py-5" : priority ? "aspect-[16/9]" : "aspect-[16/10]"}>
        {image ? (
          <img
            src={image}
            alt={`Tela do projeto ${project.title}`}
            className={
              isMobile
                ? "h-full max-h-64 w-auto rounded-[1.5rem] border border-white/10 object-contain opacity-95 shadow-2xl shadow-black/50 transition duration-500 group-hover:scale-[1.03]"
                : "h-full w-full object-cover object-top opacity-90 transition duration-500 group-hover:scale-[1.02] group-hover:opacity-100"
            }
          />
        ) : video ? (
          <video
            src={video.src}
            aria-label={video.alt}
            muted
            playsInline
            preload="metadata"
            className="h-full w-full object-cover object-top opacity-90 transition duration-500 group-hover:scale-[1.02] group-hover:opacity-100"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-zinc-900 text-sm text-zinc-500">
            Prints em atualização
          </div>
        )}
      </div>
    </Link>
  );
}

function ProjectRow({ project }: { project: Project }) {
  const Icon = project.icon;

  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group grid gap-6 border-t border-white/10 py-7 transition hover:border-stone-400/60 md:grid-cols-[90px_1.3fr_1fr_40px]"
    >
      <div className="flex items-start justify-between md:block">
        <span className="text-3xl font-black text-zinc-700 transition group-hover:text-stone-300">
          {project.rank.toString().padStart(2, "0")}
        </span>
        <Icon className="h-5 w-5 text-stone-400 md:mt-5" />
      </div>
      <div>
        <div className="mb-3 flex flex-wrap gap-2">
          <Badge className="border-stone-500/20 bg-stone-400/10 text-stone-300">{project.category}</Badge>
          <Badge className="border-white/10 bg-white/5 text-zinc-400">{project.status}</Badge>
        </div>
        <h3 className="text-2xl font-black text-zinc-100 transition group-hover:text-white md:text-3xl">
          {project.title}
        </h3>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-400 md:text-base">{project.summary}</p>
      </div>
      <div className="flex flex-wrap content-start gap-2">
        {project.techStack.slice(0, 5).map((tech) => (
          <span key={tech} className="rounded-md border border-white/10 px-2.5 py-1 text-xs font-semibold text-zinc-400">
            {tech}
          </span>
        ))}
      </div>
      <ArrowRight className="hidden h-5 w-5 self-center text-zinc-600 transition group-hover:translate-x-1 group-hover:text-stone-300 md:block" />
    </Link>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-[#0b0b0a] text-zinc-100 selection:bg-stone-300/20 selection:text-white">
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#0b0b0a]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
          <Link to="/" className="text-sm font-black uppercase tracking-[0.22em] text-zinc-100">
            Cassiano Melo
          </Link>
          <nav className="flex items-center gap-4">
            <a href={aboutMe.github} target="_blank" rel="noreferrer" className="text-zinc-500 transition hover:text-white" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
            <a href={aboutMe.linkedin} target="_blank" rel="noreferrer" className="text-zinc-500 transition hover:text-white" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href={`mailto:${aboutMe.email}`} className="text-zinc-500 transition hover:text-white" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-5 pb-16 pt-28 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-500">
              <span className="inline-flex items-center gap-2 rounded-full border border-stone-400/20 bg-stone-400/10 px-3 py-1 font-semibold text-stone-300">
                <ScanSearch className="h-4 w-4" />
                Projetos reais em produção
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4" />
                {aboutMe.location}
              </span>
            </div>

            <div className="space-y-5">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-500">
                {aboutMe.role}
              </p>
              <h1 className="max-w-4xl text-5xl font-black leading-[0.95] text-white md:text-7xl">
                {aboutMe.headline}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-zinc-400">
                Fullstack com foco em transformar dor operacional em software usável: produto, interface, backend, deploy e leitura de negócio.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button asChild className="bg-stone-100 px-6 text-zinc-950 hover:bg-white">
                <a href="#projects">
                  Ver projetos reais
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" className="border-white/15 bg-transparent px-6 text-zinc-200 hover:bg-white/10 hover:text-white">
                <Link to="/resume">Ver currículo</Link>
              </Button>
              <Button asChild variant="ghost" className="px-6 text-zinc-400 hover:bg-white/10 hover:text-white">
                <a href={aboutMe.whatsapp} target="_blank" rel="noreferrer">
                  Falar comigo
                  <MessageCircle className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="space-y-4"
          >
            <EvidenceImage project={featuredProject} priority />
            <div className="grid gap-4 md:grid-cols-2">
              {rankedProjects.slice(1, 3).map((project) => (
                <EvidenceImage key={project.slug} project={project} />
              ))}
            </div>
          </motion.div>
        </section>

        <section className="border-y border-white/10 bg-[#11110f]">
          <div className="mx-auto grid max-w-7xl gap-px px-5 md:grid-cols-4">
            {proofPoints.map((point) => (
              <div key={point.label} className="py-8 md:border-l md:border-white/10 md:px-6 first:md:border-l-0">
                <p className="text-3xl font-black text-white">{point.value}</p>
                <p className="mt-2 text-sm font-bold text-zinc-300">{point.label}</p>
                <p className="mt-1 text-sm leading-6 text-zinc-500">{point.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-5 py-24">
          <div className="mb-12 grid gap-8 md:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-stone-400">Ranking de complexidade</p>
              <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">Cases com contexto, decisão e entrega.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-zinc-400">
              A ordem dos projetos segue complexidade e satisfação pessoal. Os maiores cases mostram sistemas com regra de negócio, operação e arquitetura; os freelances mostram entrega comercial publicada.
            </p>
          </div>

          <Link
            to={`/projects/${featuredProject.slug}`}
            className="group mb-8 grid overflow-hidden rounded-lg border border-stone-400/20 bg-[#151513] shadow-2xl shadow-black/30 lg:grid-cols-[1fr_0.95fr]"
          >
            <div className="p-6 md:p-10">
              <Badge className="border-stone-400/20 bg-stone-400/10 text-stone-300">Case principal</Badge>
              <h3 className="mt-6 text-4xl font-black text-white md:text-6xl">{featuredProject.title}</h3>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">{featuredProject.summary}</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {featuredProject.metrics?.map((metric) => (
                  <div key={metric.label} className="border-t border-white/10 pt-4">
                    <p className="text-xl font-black text-white">{metric.value}</p>
                    <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">{metric.label}</p>
                  </div>
                ))}
              </div>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-stone-300">
                Abrir case
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </div>
            <div className="min-h-80 bg-zinc-950">
              {featuredProject.images?.[1] ? (
                <img
                  src={featuredProject.images[1]}
                  alt={`Preview do ${featuredProject.title}`}
                  className="h-full w-full object-cover object-top opacity-90 transition duration-500 group-hover:scale-[1.02] group-hover:opacity-100"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-zinc-500">Prints em atualização</div>
              )}
            </div>
          </Link>

          <div>
            {secondaryProjects.map((project) => (
              <ProjectRow key={project.slug} project={project} />
            ))}
          </div>
        </section>

        <section className="border-t border-white/10 bg-[#11110f] px-5 py-20">
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-500">Contato</p>
              <h2 className="mt-4 max-w-3xl text-4xl font-black text-white">
                Aberto para oportunidades e projetos com problema real para resolver.
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="bg-stone-100 text-zinc-950 hover:bg-white">
                <a href={aboutMe.whatsapp} target="_blank" rel="noreferrer">
                  Falar comigo
                  <MessageCircle className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" className="border-white/15 bg-transparent text-zinc-200 hover:bg-white/10 hover:text-white">
                <Link to="/resume">Currículo</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
