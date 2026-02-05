import React from 'react';
import { Mail, Phone, Linkedin, Github, MapPin, Printer, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";



export function Resume() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-zinc-100 flex flex-col items-center py-10 print:py-0 print:bg-white text-zinc-900 font-sans">
      
      {/* Floating Action Buttons (Hidden on Print) */}
      <div className="fixed top-6 right-6 flex gap-4 print:hidden z-50">
        <Button onClick={() => window.history.back()} variant="outline" className="bg-white shadow-sm hover:bg-zinc-50 border-zinc-300 text-zinc-700">
          <ArrowLeft className="w-4 h-4 mr-2" /> Voltar
        </Button>
        <Button onClick={handlePrint} className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-md">
          <Printer className="w-4 h-4 mr-2" /> Salvar como PDF
        </Button>
      </div>

      {/* A4 Paper Container */}
      <div className="bg-white shadow-xl print:shadow-none w-[210mm] min-h-[297mm] p-[15mm] md:p-[20mm] relative box-border mx-auto print:w-full print:h-full print:m-0">
        
        {/* Header */}
        <header className="flex flex-col items-center justify-center border-b border-zinc-200 pb-6 mb-6 text-center">
          <h1 className="text-3xl font-bold text-zinc-900 uppercase tracking-tight">Cassiano Melo</h1>
          <p className="text-lg text-zinc-600 font-medium mt-1 mb-3">Desenvolvedor Fullstack</p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-zinc-500">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              <span>Sorocaba – SP</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5" />
              <span>(15) 99130-2323</span>
            </div>
            <a href="mailto:cassianomeloprofissional@gmail.com" className="flex items-center gap-1.5 hover:text-indigo-600 transition-colors">
              <Mail className="w-3.5 h-3.5" />
              <span>cassianomeloprofissional@gmail.com</span>
            </a>
          </div>

          <div className="flex gap-4 mt-3 text-sm">
             <a href="https://linkedin.com/in/cassiano-melo-679938326/" target="_blank" rel="noreferrer" className="flex items-center gap-1 text-indigo-700 font-semibold hover:underline">
               <Linkedin className="w-3.5 h-3.5" /> LinkedIn
             </a>
             <a href="https://github.com/CassianoProenca" target="_blank" rel="noreferrer" className="flex items-center gap-1 text-indigo-700 font-semibold hover:underline">
               <Github className="w-3.5 h-3.5" /> GitHub
             </a>
          </div>
        </header>

        {/* Profile */}
        <section className="mb-6">
          <h2 className="text-sm font-bold text-zinc-900 uppercase tracking-widest border-b border-zinc-300 pb-1 mb-3">Perfil Profissional</h2>
          <p className="text-sm text-zinc-700 leading-relaxed text-justify">
            Profissional com experiência sólida no desenvolvimento de soluções web escaláveis, utilizando tecnologias modernas e boas práticas de engenharia de software. 
            Especialista em back-end com <span className="font-semibold">Java (Spring Boot)</span> e <span className="font-semibold">Node.js (TypeScript/Fastify)</span>, garantindo aplicações rápidas e seguras. 
            No front-end, possuo expertise em <span className="font-semibold">React</span>, construindo interfaces dinâmicas e responsivas. 
            Experiência prática na gerência de containers com <span className="font-semibold">Docker</span> e versionamento com Git/GitHub. 
            Focado em entrega de alto desempenho, metodologias ágeis e arquitetura limpa.
          </p>
        </section>

        {/* Experience */}
        <section className="mb-6">
          <h2 className="text-sm font-bold text-zinc-900 uppercase tracking-widest border-b border-zinc-300 pb-1 mb-4">Experiência Profissional</h2>
          
          <div className="mb-5">
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="font-bold text-zinc-800 text-base">Prefeitura Municipal de Votorantim</h3>
              <span className="text-sm text-zinc-500 font-medium">04/2025 – Atual</span>
            </div>
            <p className="text-sm font-semibold text-zinc-600 mb-2 italic">Estagiário em Desenvolvimento Full Stack</p>
            <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-zinc-700 leading-snug">
              <li>Desenvolvimento fullstack (Front e Back-end) de soluções web e aplicações internas críticas.</li>
              <li>Criação e manutenção do <strong>Sistema de Helpdesk Interno</strong>, utilizado por mais de 300 usuários, reduzindo chamados manuais.</li>
              <li>Atuação em todo o ciclo de vida do software: análise de requisitos, implementação, testes e deploy.</li>
              <li>Integração de sistemas legados com novas arquiteturas modernas para otimização de fluxos.</li>
              <li>Participação ativa em rituais ágeis, Code Reviews e planejamento de arquitetura escalável.</li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="font-bold text-zinc-800 text-base">Farma Ponte</h3>
              <span className="text-sm text-zinc-500 font-medium">04/2024 – 08/2024</span>
            </div>
            <p className="text-sm font-semibold text-zinc-600 mb-2 italic">Suporte Técnico</p>
            <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-zinc-700 leading-snug">
              <li>Suporte N1 e N2 para manutenção de sistemas e equipamentos de TI em ambiente corporativo.</li>
              <li>Diagnóstico e resolução ágil de incidentes, garantindo alto SLA e continuidade da operação.</li>
              <li>Manutenção preventiva de hardware e configuração de redes e softwares corporativos.</li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section className="mb-6">
          <h2 className="text-sm font-bold text-zinc-900 uppercase tracking-widest border-b border-zinc-300 pb-1 mb-3">Formação Acadêmica</h2>
          <div className="flex justify-between items-baseline">
             <div>
                <h3 className="font-bold text-zinc-800">Universidade Cidade de São Paulo (UNICID)</h3>
                <p className="text-sm text-zinc-600">Bacharelado em Ciência da Computação</p>
             </div>
             <span className="text-sm text-zinc-500 italic">Cursando (7º Semestre)</span>
          </div>
        </section>

        {/* Skills & Certifications */}
        <div className="grid grid-cols-2 gap-8">
           <section>
              <h2 className="text-sm font-bold text-zinc-900 uppercase tracking-widest border-b border-zinc-300 pb-1 mb-3">Tech Stack</h2>
              <div className="flex flex-wrap gap-1.5">
                 {['Java', 'Spring Boot', 'Node.js', 'TypeScript', 'React', 'Fastify', 'SQL', 'NoSQL', 'Docker', 'Git', 'AWS (Básico)', 'Azure (Básico)'].map(skill => (
                   <span key={skill} className="px-2 py-0.5 bg-zinc-100 border border-zinc-200 rounded text-xs font-semibold text-zinc-700 print:bg-white print:border-zinc-300">
                     {skill}
                   </span>
                 ))}
              </div>
           </section>

           <section>
              <h2 className="text-sm font-bold text-zinc-900 uppercase tracking-widest border-b border-zinc-300 pb-1 mb-3">Certificações</h2>
              <ul className="space-y-2">
                 <li className="text-sm text-zinc-700 flex flex-col">
                    <span className="font-semibold">Java Completo</span>
                    <span className="text-xs text-zinc-500">Rocketseat</span>
                 </li>
                 <li className="text-sm text-zinc-700 flex flex-col">
                    <span className="font-semibold">Microservices com Spring Cloud</span>
                    <span className="text-xs text-zinc-500">Rocketseat</span>
                 </li>
                 <li className="text-sm text-zinc-700 flex flex-col">
                    <span className="font-semibold">Inglês Avançado</span>
                 </li>
              </ul>
           </section>
        </div>

      </div>
      
      <p className="print:hidden text-zinc-400 text-xs mt-8">
        Dica: Pressione o botão acima ou <span className="font-mono bg-zinc-200 px-1 rounded text-zinc-600">Ctrl + P</span> para salvar como PDF.
      </p>

      {/* Print Styles */}
      <style>{`
        @media print {
          @page { margin: 0; }
          body { background: white; }
          .print\\:hidden { display: none !important; }
          .print\\:bg-white { background-color: white !important; }
          .print\\:border-zinc-300 { border-color: #d4d4d8 !important; }
          .print\\:w-full { width: 100% !important; }
          .print\\:h-full { height: 100% !important; }
          .print\\:m-0 { margin: 0 !important; }
          .print\\:shadow-none { box-shadow: none !important; }
        }
      `}</style>
    </div>
  );
}
