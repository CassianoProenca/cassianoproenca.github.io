import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Printer,
  Briefcase,
  Code,
  GraduationCap,
  Award,
  Wrench
} from "lucide-react";
import {
  aboutMe,
  resumeProfile,
  resumeExperience,
  resumeProjects,
  resumeSkills
} from "@/data/content";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const certifications = [
  {
    title: "Java",
    href: "https://app.rocketseat.com.br/certificates/1d4e9905-36c6-42ad-bc95-9b051de94923",
  },
  {
    title: "Node.js",
    href: "https://app.rocketseat.com.br/certificates/c8950e28-463d-46f1-842e-aeb2607c7207",
  },
  {
    title: "Microsserviços com Spring Cloud",
    href: "https://app.rocketseat.com.br/certificates/5c4b86f4-82d3-4432-94ee-aadfde6915fd",
  },
  {
    title: "Engenharia de Prompt",
    href: "https://app.rocketseat.com.br/certificates/a73d901d-e1b7-46e4-b70b-1c4c9923b2fa",
  },
];

function Section({ title, icon: Icon, children, noTopBorder = false }: { title: string; icon?: React.ElementType; children: ReactNode; noTopBorder?: boolean }) {
  return (
    <section className={noTopBorder ? "break-inside-avoid pt-0" : "break-inside-avoid border-t border-slate-300 pt-6"}>
      <div className="flex items-center gap-2 mb-5 text-slate-950">
        {Icon && <Icon className="h-5 w-5" />}
        <h2 className="text-sm font-bold uppercase tracking-[0.16em]">{title}</h2>
      </div>
      <div>{children}</div>
    </section>
  );
}

function PrintSection({ title, children, noTopBorder = false }: { title: string; children: ReactNode; noTopBorder?: boolean }) {
  return (
    <section className={noTopBorder ? "break-inside-avoid pt-0" : "break-inside-avoid border-t border-slate-300 pt-3"}>
      <h2 className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-950">{title}</h2>
      <div className="mt-2">{children}</div>
    </section>
  );
}

function PrintResume() {
  const prefeituraExperience = resumeExperience[0];
  const previousExperience = resumeExperience.slice(1);
  const additionalProjects = resumeProjects.filter((project) => ["NexOps", "Finstreak"].includes(project.title));

  return (
    <main className="hidden bg-white px-[12mm] py-[10mm] text-slate-900 print:block">
      <header className="break-inside-avoid border-b border-slate-300 pb-3">
        <div className="flex items-start justify-between gap-6">
          <div>
            <h1 className="text-2xl font-extrabold leading-none text-slate-950">{aboutMe.name}</h1>
            <p className="mt-1 text-sm font-bold text-slate-800">{resumeProfile.headline}</p>
          </div>
          <div className="shrink-0 space-y-0.5 text-right text-[10px] leading-4 text-slate-700">
            <p>{aboutMe.location}</p>
            <p>(15) 99130-2323</p>
            <p>{aboutMe.email}</p>
            <p>linkedin.com/in/cassiano-melo-679938326</p>
            <p>github.com/CassianoProenca</p>
          </div>
        </div>
        <p className="mt-3 text-[11px] leading-5 text-slate-700">
          {resumeProfile.summary}
        </p>
      </header>

      <div className="mt-3 space-y-3">
        <PrintSection title="Competências técnicas" noTopBorder>
          <div className="grid grid-cols-2 gap-x-6 gap-y-1.5 text-[10px] leading-4 text-slate-700">
            {resumeSkills.map((skillGroup) => (
              <p key={skillGroup.category}>
                <strong className="text-slate-950">{skillGroup.category}:</strong> {skillGroup.items.join(", ")}
              </p>
            ))}
          </div>
        </PrintSection>

        <PrintSection title="Experiência profissional">
          <article className="break-inside-avoid">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-sm font-bold text-slate-950">{prefeituraExperience.company}</h3>
              <span className="text-[10px] font-semibold text-slate-600">{prefeituraExperience.period}</span>
            </div>
            <p className="text-[11px] font-semibold text-slate-800">{prefeituraExperience.role}</p>
            <ul className="mt-1.5 list-disc space-y-0.5 pl-4 text-[10px] leading-4 text-slate-700">
              {prefeituraExperience.description.map((desc) => (
                <li key={desc}>{desc}</li>
              ))}
            </ul>

            {"milestones" in prefeituraExperience && prefeituraExperience.milestones ? (
              <div className="mt-2.5 space-y-2">
                {prefeituraExperience.milestones.map((milestone) => (
                  <div key={milestone.title} className="break-inside-avoid border-l-2 border-slate-300 pl-3">
                    <div className="flex items-baseline justify-between gap-4">
                      <h4 className="text-[11px] font-bold text-slate-950">
                        {milestone.title}
                      </h4>
                      <span className="text-[9px] font-semibold uppercase tracking-[0.08em] text-slate-500">
                        {milestone.period}
                      </span>
                    </div>
                    <p className="mt-0.5 text-[10px] leading-4 text-slate-700">{milestone.description}</p>
                    <div className="mt-0.5 flex flex-wrap gap-x-2 gap-y-0.5 text-[9px] font-semibold text-slate-600">
                      <span>{milestone.status}</span>
                      {milestone.impact ? <span>{milestone.impact}</span> : null}
                      <span>{milestone.stack.join(" | ")}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
          </article>

          {previousExperience.map((exp) => (
            <article key={exp.company} className="mt-2 break-inside-avoid">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-[11px] font-bold text-slate-950">{exp.company}</h3>
                <span className="text-[10px] font-semibold text-slate-600">{exp.period}</span>
              </div>
              <p className="text-[10px] font-semibold text-slate-800">{exp.role}</p>
              <ul className="mt-1 list-disc space-y-0.5 pl-4 text-[10px] leading-4 text-slate-700">
                {exp.description.map((desc) => (
                  <li key={desc}>{desc}</li>
                ))}
              </ul>
            </article>
          ))}
        </PrintSection>

        <PrintSection title="Projetos complementares">
          <div className="grid grid-cols-2 gap-3">
            {additionalProjects.map((project) => (
              <article key={project.title} className="break-inside-avoid">
                <h3 className="text-[11px] font-bold text-slate-950">{project.title}</h3>
                <p className="mt-0.5 text-[10px] leading-4 text-slate-700">{project.description}</p>
              </article>
            ))}
          </div>
        </PrintSection>

        <PrintSection title="Formação, idiomas e certificações">
          <div className="grid grid-cols-3 gap-4 text-[10px] leading-4 text-slate-700">
            <p>
              <strong className="text-slate-950">Ciência da Computação</strong>
              <br />
              UNICID - 7º semestre
              <br />
              Conclusão prevista: 12/2026
            </p>
            <p>
              <strong className="text-slate-950">Inglês avançado</strong>
              <br />
              Leitura, escrita e conversação
            </p>
            <p>
              <strong className="text-slate-950">Certificações</strong>
              <br />
              Java, Node.js, Microsserviços com Spring Cloud, Engenharia de Prompt
            </p>
          </div>
        </PrintSection>
      </div>
    </main>
  );
}

export function Resume() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-200 px-4 py-10 text-slate-900 print:bg-white print:p-0">
      <div className="fixed right-6 top-6 z-50 flex gap-3 print:hidden">
        <Button asChild variant="outline" className="border-slate-300 bg-white text-slate-800 shadow-sm hover:bg-slate-100 transition-all hover:-translate-y-0.5">
          <Link to="/">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar
          </Link>
        </Button>
        <Button onClick={handlePrint} className="bg-slate-950 text-white shadow-md hover:bg-slate-800 transition-all hover:-translate-y-0.5">
          <Printer className="h-4 w-4 mr-2" />
          Salvar PDF
        </Button>
      </div>

      <main className="mx-auto min-h-[297mm] w-full max-w-[210mm] bg-white px-[16mm] py-[14mm] shadow-xl shadow-black/20 print:hidden">
        <header className="break-inside-avoid border-b border-slate-300 pb-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="flex-1">
              <h1 className="text-4xl font-extrabold leading-tight text-slate-950">{aboutMe.name}</h1>
              <p className="mt-1 text-lg font-bold text-blue-700">{resumeProfile.headline}</p>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-700 text-justify">
                {resumeProfile.summary}
              </p>
            </div>

            <div className="flex flex-col gap-2 text-sm text-slate-600 md:items-end md:pl-6 shrink-0">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-slate-400" />
                {aboutMe.location}
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-slate-400" />
                (15) 99130-2323
              </p>
              <a href={`mailto:${aboutMe.email}`} className="flex items-center gap-2 text-blue-700 hover:text-blue-800 hover:underline transition-colors group">
                <Mail className="h-4 w-4 text-blue-600 group-hover:text-blue-800" />
                Email
              </a>
              <a href={aboutMe.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-blue-700 hover:text-blue-800 hover:underline transition-colors group">
                <Linkedin className="h-4 w-4 text-blue-600 group-hover:text-blue-800" />
                LinkedIn
              </a>
              <a href={aboutMe.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-blue-700 hover:text-blue-800 hover:underline transition-colors group">
                <Github className="h-4 w-4 text-blue-600 group-hover:text-blue-800" />
                GitHub
              </a>
            </div>
          </div>
        </header>

        <div className="mt-8 space-y-8">
          <Section title="Experiência profissional" icon={Briefcase} noTopBorder>
            <div className="relative border-l-2 border-slate-200 ml-3 space-y-8 pb-2">
              {resumeExperience.map((exp, index) => (
                <article key={index} className="relative pl-6 break-inside-avoid">
                  <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-4 border-white bg-blue-600 print:color-adjust-exact"></span>
                  
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-base font-bold text-slate-950">{exp.company}</h3>
                    <span className="text-sm font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded print:color-adjust-exact">{exp.period}</span>
                  </div>
                  <p className="text-sm font-semibold text-blue-700 mt-1">{exp.role}</p>

                  <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-slate-700">
                    {exp.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>

                  {"milestones" in exp && exp.milestones ? (
                    <div className="mt-5 space-y-4">
                      {exp.milestones.map((milestone) => (
                        <div
                          key={milestone.title}
                          className={
                            milestone.featured
                              ? "rounded-lg border border-blue-200 bg-blue-50/70 p-4 print:border-slate-300 print:bg-transparent"
                              : "rounded-lg border border-slate-200 bg-slate-50 p-4 print:border-slate-300 print:bg-transparent"
                          }
                        >
                          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                            <div>
                              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">{milestone.period}</p>
                              <h4 className="mt-1 font-bold text-slate-950">{milestone.title}</h4>
                            </div>
                            <span className="w-fit rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-600 print:bg-transparent">
                              {milestone.status}
                            </span>
                          </div>

                          <p className="mt-3 text-sm leading-relaxed text-slate-700">{milestone.description}</p>

                          {milestone.impact ? (
                            <p className="mt-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-blue-800 print:bg-transparent print:px-0">
                              {milestone.impact}
                            </p>
                          ) : null}

                          <div className="mt-3 flex flex-wrap gap-1.5">
                            {milestone.stack.map((item) => (
                              <Badge
                                key={item}
                                variant="secondary"
                                className="border border-slate-200 bg-white text-slate-700 print:bg-transparent"
                              >
                                {item}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </article>
              ))}
            </div>
          </Section>

          <Section title="Projetos relevantes" icon={Code}>
            <div className="grid gap-4 sm:grid-cols-2">
              {resumeProjects.map((project, index) => (
                <article key={index} className="break-inside-avoid rounded-lg border border-slate-200 bg-slate-50 p-4 transition-all hover:shadow-sm hover:border-slate-300 print:border-slate-300 print:bg-transparent print:color-adjust-exact">
                  <h3 className="font-bold text-slate-950">{project.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700">{project.description}</p>
                </article>
              ))}
            </div>
          </Section>

          <Section title="Stack técnica" icon={Wrench}>
            <div className="space-y-4">
              {resumeSkills.map((skillGroup, index) => (
                <div key={index} className="break-inside-avoid flex flex-col sm:flex-row sm:items-start gap-2">
                  <strong className="text-sm text-slate-900 sm:w-32 sm:shrink-0 pt-0.5">{skillGroup.category}:</strong>
                  <div className="flex flex-wrap gap-1.5">
                    {skillGroup.items.map((item, i) => (
                      <Badge 
                        key={i} 
                        variant="secondary" 
                        className="bg-slate-100 text-slate-700 hover:bg-slate-200 font-medium print:color-adjust-exact border border-slate-200"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Formação e idiomas" icon={GraduationCap}>
            <div className="grid gap-6 md:grid-cols-2">
              <article className="break-inside-avoid">
                <h3 className="font-bold text-slate-950">Ciência da Computação</h3>
                <p className="mt-1 text-sm text-slate-700">
                  UNICID - 7º semestre<br />
                  Conclusão prevista: 12/2026
                </p>
              </article>
              <article className="break-inside-avoid">
                <h3 className="font-bold text-slate-950">Inglês avançado</h3>
                <p className="mt-1 text-sm text-slate-700">Leitura, escrita e conversação</p>
              </article>
            </div>
          </Section>

          <Section title="Certificações" icon={Award}>
            <div className="grid gap-3 sm:grid-cols-2">
              {certifications.map((certification) => (
                <a
                  key={certification.href}
                  href={certification.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between break-inside-avoid rounded-md border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 hover:border-blue-300 hover:bg-blue-50/50 hover:text-blue-700 transition-all print:border-slate-300 print:color-adjust-exact"
                >
                  {certification.title}
                  <svg className="h-4 w-4 text-slate-400 opacity-0 transition-opacity group-hover:opacity-100 group-hover:text-blue-500 print:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ))}
            </div>
          </Section>
        </div>
      </main>

      <PrintResume />

      <style>{`
        @media print {
          @page { margin: 0; }
          body { 
            background: white; 
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          a { text-decoration: none; }
        }
      `}</style>
    </div>
  );
}
