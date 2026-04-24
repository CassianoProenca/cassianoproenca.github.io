import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, MessageCircle } from "lucide-react";
import type { ReactNode } from "react";
import { aboutMe, getProjectBySlug, projects } from "@/data/content";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

function TextBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-t border-white/10 pt-6">
      <h2 className="text-sm font-black uppercase tracking-[0.26em] text-stone-400">{title}</h2>
      <div className="mt-4 text-lg leading-8 text-zinc-300">{children}</div>
    </section>
  );
}

export function ProjectCase() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const nextProject = projects.find((candidate) => candidate.rank === project.rank + 1);
  const Icon = project.icon;
  const screenshots = project.screenshots ?? [];
  const videoMedia = project.media?.filter((item) => item.type === "video") ?? [];
  const firstVideo = videoMedia[0];
  const isMobile = project.mediaLayout === "mobile";

  return (
    <div className="min-h-screen bg-[#0b0b0a] text-zinc-100">
      <header className="border-b border-white/10 bg-[#0b0b0a]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
          <Button asChild variant="ghost" className="text-zinc-400 hover:bg-white/10 hover:text-white">
            <Link to="/">
              <ArrowLeft className="h-4 w-4" />
              Voltar
            </Link>
          </Button>
          <a href={aboutMe.whatsapp} target="_blank" rel="noreferrer" className="text-sm font-bold text-zinc-400 transition hover:text-white">
            Contato
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:py-24">
          <div className="space-y-8">
            <div className="flex flex-wrap gap-2">
              <Badge className="border-stone-400/20 bg-stone-400/10 text-stone-300">
                #{project.rank.toString().padStart(2, "0")} {project.category}
              </Badge>
              <Badge className="border-white/10 bg-white/5 text-zinc-400">{project.status}</Badge>
            </div>

            <div>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-stone-300">
                <Icon className="h-6 w-6" />
              </div>
              <h1 className="text-5xl font-black leading-none text-white md:text-7xl">{project.title}</h1>
              <p className="mt-6 max-w-2xl text-xl leading-9 text-zinc-400">{project.summary}</p>
            </div>

            <div className="flex flex-wrap gap-3">
              {project.liveUrl && (
                <Button asChild className="bg-stone-100 text-zinc-950 hover:bg-white">
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">
                    Ver ao vivo
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                <Button asChild variant="outline" className="border-white/15 bg-transparent text-zinc-200 hover:bg-white/10 hover:text-white">
                  <a href={project.githubUrl} target="_blank" rel="noreferrer">
                    Repositório
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
              )}
              <Button asChild variant="ghost" className="text-zinc-400 hover:bg-white/10 hover:text-white">
                <a href={aboutMe.whatsapp} target="_blank" rel="noreferrer">
                  Falar sobre projeto
                  <MessageCircle className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-white/10 bg-zinc-950 shadow-2xl shadow-black/30">
            {screenshots[0] ? (
              <div className={isMobile ? "flex aspect-[16/10] items-center justify-center px-8 py-8" : ""}>
                <img
                  src={screenshots[0]}
                  alt={`Tela principal do projeto ${project.title}`}
                  className={
                    isMobile
                      ? "h-full max-h-[520px] w-auto rounded-[2rem] border border-white/10 object-contain shadow-2xl shadow-black/60"
                      : "aspect-[16/10] h-full w-full object-cover object-top"
                  }
                />
              </div>
            ) : firstVideo ? (
              <video
                src={firstVideo.src}
                aria-label={firstVideo.alt}
                className="aspect-[16/10] h-full w-full object-cover object-top"
                controls
                playsInline
                preload="metadata"
              />
            ) : (
              <div className="flex aspect-[16/10] items-center justify-center text-zinc-500">
                Prints em atualização
              </div>
            )}
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#11110f]">
          <div className="mx-auto grid max-w-7xl gap-px px-5 md:grid-cols-4">
            {project.metrics?.map((metric) => (
              <div key={metric.label} className="py-8 md:border-l md:border-white/10 md:px-6 first:md:border-l-0">
                <p className="text-3xl font-black text-white">{metric.value}</p>
                <p className="mt-2 text-xs font-black uppercase tracking-[0.18em] text-zinc-500">{metric.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="space-y-8">
            <div>
              <h2 className="text-sm font-black uppercase tracking-[0.26em] text-zinc-500">Stack</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-semibold text-zinc-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-sm font-black uppercase tracking-[0.26em] text-zinc-500">Papel</h2>
              <p className="mt-4 text-base leading-7 text-zinc-400">{project.role}</p>
            </div>
          </aside>

          <div className="space-y-12">
            <TextBlock title="Problema">{project.problem}</TextBlock>
            <TextBlock title="Solução">{project.solution}</TextBlock>
            <TextBlock title="Decisões técnicas">
              <ul className="space-y-3">
                {project.architectureNotes.map((note) => (
                  <li key={note} className="border-l border-stone-400/30 pl-4">
                    {note}
                  </li>
                ))}
              </ul>
            </TextBlock>
            <TextBlock title="Impacto">
              <ul className="space-y-3">
                {project.businessImpact.map((impact) => (
                  <li key={impact} className="border-l border-white/10 pl-4">
                    {impact}
                  </li>
                ))}
              </ul>
            </TextBlock>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-20">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.26em] text-stone-400">Galeria</p>
              <h2 className="mt-3 text-3xl font-black text-white">
                {videoMedia.length > 0 && screenshots.length === 0 ? "Demonstração do projeto" : "Prints do projeto"}
              </h2>
            </div>
            <p className="hidden max-w-md text-right text-sm leading-6 text-zinc-500 md:block">
              Imagens e vídeos funcionam como evidência do fluxo real: operação, telas internas, produto e entrega.
            </p>
          </div>

          {screenshots.length > 0 || videoMedia.length > 0 ? (
            <div className="grid gap-5">
              {videoMedia.map((item) => (
                <figure key={item.src} className="overflow-hidden rounded-lg border border-white/10 bg-zinc-950">
                  <video
                    src={item.src}
                    aria-label={item.alt}
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full"
                  />
                </figure>
              ))}
              {screenshots.map((screenshot, index) => (
                <figure
                  key={screenshot}
                  className={
                    isMobile
                      ? "flex justify-center rounded-lg border border-white/10 bg-zinc-950 px-6 py-8"
                      : "overflow-hidden rounded-lg border border-white/10 bg-zinc-950"
                  }
                >
                  <img
                    src={screenshot}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className={
                      isMobile
                        ? "max-h-[760px] w-auto rounded-[2rem] border border-white/10 object-contain shadow-2xl shadow-black/60"
                        : "w-full object-cover object-top"
                    }
                  />
                </figure>
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-dashed border-white/15 bg-white/5 p-10 text-center text-zinc-400">
              Prints em atualização. A estrutura do case já está pronta para receber as imagens finais.
            </div>
          )}
        </section>

        {nextProject && (
          <section className="border-t border-white/10 bg-[#11110f] px-5 py-14">
            <Link to={`/projects/${nextProject.slug}`} className="group mx-auto flex max-w-7xl items-center justify-between gap-6">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.26em] text-zinc-500">Próximo case</p>
                <h2 className="mt-2 text-3xl font-black text-white">{nextProject.title}</h2>
              </div>
              <ArrowLeft className="h-6 w-6 rotate-180 text-zinc-500 transition group-hover:translate-x-1 group-hover:text-white" />
            </Link>
          </section>
        )}
      </main>
    </div>
  );
}
