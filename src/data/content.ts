import {
  Database,
  Globe2,
  HeartHandshake,
  Map,
  Smartphone,
  ServerCog,
  ShoppingBag,
  Truck,
} from "lucide-react";
import type { Project } from "../types";

import helpdeskHome from "../assets/helpdesk-pmv/home.png";
import helpdeskLogin from "../assets/helpdesk-pmv/login.png";
import helpdeskDash from "../assets/helpdesk-pmv/dashboard.png";
import eventosLogin from "../assets/sema/login.png";

import nexopsLanding from "../assets/nexops/lp-nexops.png";
import nexopsProduct from "../assets/nexops/produto-nexops.png";
import nexopsHow from "../assets/nexops/como-funciona-nexops.png";
import nexopsPlans from "../assets/nexops/planos-nexops.png";
import nexopsHome from "../assets/nexops/sistema/home.png";
import nexopsLogin from "../assets/nexops/sistema/login.png";
import nexopsNewTicket from "../assets/nexops/sistema/novo-chamado.png";
import nexopsTickets from "../assets/nexops/sistema/todos-chamados.png";
import nexopsTenant from "../assets/nexops/sistema/view-tenant.png";

import pinkHome from "../assets/pinkcloset/new/new-homepinkcloset.png";
import pinkCatalog from "../assets/pinkcloset/new/new-catalogopinkcloset.png";
import pinkProfile from "../assets/pinkcloset/new/new-meuperfilpinkcloset.png";

import fretepagooHero from "../assets/fretepagoo/new/new-hero-fretepagoo.png";
import fretepagooSobre from "../assets/fretepagoo/new/new-sobre.png";
import fretepagooEspecialidades from "../assets/fretepagoo/new/new-especialidades.png";
import fretepagooParceiros from "../assets/fretepagoo/new/new-parceiros-fretepagoo.png";
import fretepagooMarcas from "../assets/fretepagoo/new/new-carrousel-marcas-pq-escolher-fretepagoo.png";

import donationVideo from "../assets/donation-system/new/donation-system-video.mov";
import noveraHero from "../assets/noveraimports/hero.png";
import finstreakDashboard from "../assets/finstreak/dashboard.webp";
import finstreakExtract from "../assets/finstreak/extrato.webp";
import finstreakLogin from "../assets/finstreak/login-bem-vindo.webp";
import finstreakGoals from "../assets/finstreak/metas-xp.webp";
import finstreakIncome from "../assets/finstreak/nova-transacao-ganho.webp";
import finstreakExpense from "../assets/finstreak/nova-transacao-gasto.webp";
import finstreakOnboarding from "../assets/finstreak/onboarding.webp";
import finstreakProfile from "../assets/finstreak/perfil.webp";

export const aboutMe = {
  name: "Cassiano Melo",
  role: "Desenvolvedor Fullstack",
  education: "Ciência da Computação (7º Semestre)",
  location: "Sorocaba, SP",
  email: "cassianomeloprofissional@gmail.com",
  whatsapp: "https://wa.me/5515991302323?text=Ol%C3%A1%2C%20Cassiano.%20Vi%20seu%20portf%C3%B3lio%20e%20quero%20conversar.",
  github: "https://github.com/CassianoProenca",
  linkedin: "https://linkedin.com/in/cassiano-melo-679938326/",
  headline: "Desenvolvo sistemas reais para operação, gestão e negócios.",
  description:
    "Sou desenvolvedor fullstack e estudante de Ciência da Computação. Minha trajetória começou no suporte de TI, o que moldou uma forma prática de construir software: entender a dor operacional, organizar o fluxo e entregar uma solução que funcione em produção. Trabalho com React, Java/Spring Boot, Node.js, Docker e infraestrutura Linux para criar sistemas que resolvem problemas reais.",
};

export const proofPoints = [
  { label: "Projetos reais", value: "8", detail: "B2B, setor público, mobile, open source e freelances" },
  { label: "Usuários impactados", value: "400+", detail: "Sistemas internos em operação" },
  { label: "Chamados resolvidos", value: "2.500+", detail: "Helpdesk corporativo em uso real" },
  { label: "Entrega completa", value: "Fullstack", detail: "Produto, frontend, backend, deploy e operação" },
];

export const projects: Project[] = [
  {
    slug: "nexops",
    rank: 1,
    title: "NexOps",
    shortTitle: "NexOps",
    type: "Principal",
    category: "Sistema real",
    status: "SaaS B2B",
    featured: true,
    description:
      "Solução B2B e principal projeto arquitetural do portfólio, criada para organizar atendimento, operação e gestão em um fluxo centralizado.",
    summary:
      "Produto SaaS B2B ativo, assinável e em evolução contínua para centralizar atendimento, operação e gestão técnica.",
    role:
      "Responsável por produto, arquitetura, interface, implementação fullstack e visão operacional do sistema.",
    problem:
      "Empresas precisam centralizar atendimento, operação e processos técnicos sem depender de fluxos informais ou ferramentas desconectadas.",
    solution:
      "Produto com portal público, autenticação, abertura de chamados, visão administrativa e organização de contexto por empresa.",
    architectureNotes: [
      "Separação entre landing pública, área autenticada e telas internas de operação.",
      "Fluxo preparado para múltiplos perfis de uso: cliente, suporte e administração.",
      "Modelo pensado para evoluir como produto B2B, com organização por empresa, chamados e visão gerencial.",
    ],
    businessImpact: [
      "Mostra capacidade de transformar uma dor operacional em produto B2B.",
      "Comunica visão além do código: produto, fluxo, usuário e entrega.",
      "É o principal ponto de prova técnica do portfólio por reunir produto, operação e arquitetura.",
    ],
    techStack: ["Java Spring Boot", "React", "TypeScript", "Docker", "PostgreSQL", "IA via BYOK", "B2B", "SaaS", "WebSocket", "Testes", "CI/CD"],
    metrics: [
      { label: "Complexidade", value: "Maior case" },
      { label: "Natureza", value: "B2B" },
      { label: "Status", value: "Em evolução" },
    ],
    icon: ServerCog,
    images: [nexopsLanding, nexopsProduct, nexopsHome],
    screenshots: [
      nexopsLanding,
      nexopsProduct,
      nexopsHow,
      nexopsPlans,
      nexopsLogin,
      nexopsHome,
      nexopsNewTicket,
      nexopsTickets,
      nexopsTenant,
    ],
    liveUrl: "https://getnexops.com.br/",
  },
  {
    slug: "helpdesk",
    rank: 2,
    title: "Sistema de Helpdesk Corporativo",
    shortTitle: "Helpdesk",
    type: "Principal",
    category: "Sistema real",
    status: "Interno",
    description:
      "Solução fullstack desenvolvida para substituir processos manuais e informais. O sistema centralizou a gestão de TI, eliminando chamados via WhatsApp e gerando dados para tomada de decisão.",
    summary:
      "Sistema interno usado por centenas de usuários para abertura, acompanhamento e gestão de chamados de TI.",
    role:
      "Responsável por levantamento, implementação fullstack, deploy, manutenção e evolução do sistema.",
    problem:
      "A gestão de chamados acontecia em canais informais, dificultando prioridade, rastreabilidade, histórico e tomada de decisão.",
    solution:
      "Centralização do fluxo em uma aplicação web com abertura de chamados, acompanhamento, painel técnico, status e visão administrativa.",
    architectureNotes: [
      "Backend em Java Spring Boot com persistência em MySQL.",
      "Frontend em React com foco em navegação simples para usuários não técnicos.",
      "Uso de Docker para padronizar execução e reduzir atrito de manutenção.",
      "WebSocket preparado para comunicação e atualização de eventos do fluxo.",
    ],
    businessImpact: [
      "Substituiu chamados informais por uma base organizada e rastreável.",
      "Ajudou a gestão de TI a enxergar volume, status e histórico de atendimento.",
      "Consolidou o primeiro case real de software em produção.",
    ],
    techStack: ["Java Spring Boot", "React", "MySQL", "Docker", "WebSocket"],
    metrics: [
      { label: "Chamados resolvidos", value: "2.500+" },
      { label: "Usuários ativos", value: "400+" },
      { label: "Manutenção recorrente", value: "Zero" },
      { label: "Aderência", value: "Imediata" },
    ],
    challenge:
      "Desenvolvido 100% sozinho, desde o levantamento de requisitos até o deploy da v2 em produção.",
    icon: Database,
    images: [helpdeskLogin, helpdeskHome, helpdeskDash],
    screenshots: [helpdeskLogin, helpdeskHome, helpdeskDash],
  },
  {
    slug: "gestao-de-eventos",
    rank: 3,
    title: "Gestão de Eventos (Secretaria do Meio Ambiente)",
    shortTitle: "Gestão de Eventos",
    type: "Secundário",
    category: "Sistema real",
    status: "Interno",
    description:
      "Sistema para gestão de eventos municipais, com controle de presenças, agendamentos, horários e análise geográfica de demanda.",
    summary:
      "Sistema para organizar eventos públicos com inscrições, horários, presenças e leitura geográfica da demanda.",
    role:
      "Responsável pela arquitetura fullstack, modelagem dos fluxos e construção da experiência operacional.",
    problem:
      "Eventos municipais exigem controle de inscritos, presença, horários, recursos e localização da demanda sem depender de planilhas dispersas.",
    solution:
      "Aplicação para controlar inscrições, agendas, presença, lotação por horário e análise geográfica para planejamento.",
    architectureNotes: [
      "Backend em Node.js/Fastify com MySQL e armazenamento de arquivos em MinIO.",
      "Frontend em React com TanStack Router para navegação estruturada.",
      "Mapas com Leaflet para visualizar densidade e demanda por região.",
      "Fluxos desenhados para agendamento de horários e controle de presença.",
    ],
    businessImpact: [
      "Apoia planejamento de eventos com base em dados reais.",
      "Reduz desperdício ao conectar vagas reservadas com necessidade de insumos.",
      "Mostra domínio de regras de negócio além de CRUD simples.",
    ],
    techStack: ["Node.js", "Fastify", "React", "TanStack Router", "Leaflet", "MySQL", "MinIO", "Docker"],
    metrics: [
      { label: "Inteligência geográfica", value: "Mapas" },
      { label: "Controle", value: "Presenças" },
      { label: "Agenda", value: "Horários" },
    ],
    highlight:
      "Integração com Leaflet para visualização de densidade de munícipes por região.",
    icon: Map,
    images: [eventosLogin],
    screenshots: [eventosLogin],
  },
  {
    slug: "donation-system",
    rank: 4,
    title: "Donation System",
    shortTitle: "Donation System",
    type: "Open Source",
    category: "Open Source",
    status: "Open Source",
    description:
      "Projeto open source desenvolvido para instituições sem fins lucrativos gerenciarem entradas, saídas e estoque de doações.",
    summary:
      "Sistema open source para registrar produtos, lotes e movimentações de doações em instituições com operação simples.",
    role:
      "Responsável pela concepção, modelagem, frontend, backend e organização do projeto open source.",
    problem:
      "Instituições pequenas precisam controlar doações com transparência, mas muitas vezes dependem de planilhas frágeis e processos manuais.",
    solution:
      "Aplicação para controle de estoque social, entradas, saídas e usuários, com foco em operação simples e transparente.",
    architectureNotes: [
      "Organização por entidades de estoque, lotes, movimentações e usuários.",
      "Interface pensada para voluntários e operação com baixa curva de aprendizado.",
      "Base preparada para rodar em infraestrutura simples.",
    ],
    businessImpact: [
      "Demonstra iniciativa social e pensamento de produto.",
      "Mostra preocupação com uso real em ambientes com pouca infraestrutura.",
      "Serve como prova pública de organização de código e domínio fullstack.",
    ],
    techStack: ["Java Spring Boot", "React", "Open Source", "Docker", "PostgreSQL"],
    metrics: [
      { label: "Foco", value: "ONGs" },
      { label: "Licença", value: "Open source" },
      { label: "Domínio", value: "Estoque" },
    ],
    icon: HeartHandshake,
    images: [],
    screenshots: [],
    media: [
      {
        type: "video",
        src: donationVideo,
        alt: "Demonstração em vídeo do Donation System",
      },
    ],
    githubUrl: "https://github.com/CassianoProenca/donation-system",
  },
  {
    slug: "pink-closet",
    rank: 6,
    title: "Pink Closet",
    shortTitle: "Pink Closet",
    type: "Freelance",
    category: "Freelance",
    status: "Em produção",
    description:
      "E-commerce com painel administrativo para catálogo, pedidos e operação interna. O projeto não inclui gateway de pagamento.",
    summary:
      "E-commerce freelance com vitrine mobile-first e base para gestão de catálogo e pedidos.",
    role:
      "Responsável por frontend, backend, painel administrativo, deploy e infraestrutura da aplicação.",
    problem:
      "A loja precisava de presença digital própria e gestão interna para catálogo, pedidos e clientes.",
    solution:
      "Plataforma de e-commerce sem gateway de pagamento, com vitrine, perfil de cliente e base administrativa.",
    architectureNotes: [
      "Frontend em React com Tailwind CSS.",
      "Backend em Node/NestJS com PostgreSQL.",
      "Deploy em VPS Linux com Docker, GitHub Actions e Nginx Proxy Manager.",
      "Sem gateway de pagamento nesta fase do projeto.",
    ],
    businessImpact: [
      "Entrega comercial real para cliente freelance.",
      "Une vitrine de venda com operação administrativa.",
      "Demonstra capacidade de cuidar de aplicação e infraestrutura.",
    ],
    techStack: ["React", "Node.js", "NestJS", "PostgreSQL", "Tailwind CSS", "Docker", "GitHub Actions", "VPS"],
    metrics: [
      { label: "UX", value: "Mobile-first" },
      { label: "Operação", value: "ERP básico" },
      { label: "Deploy", value: "VPS" },
    ],
    icon: ShoppingBag,
    images: [pinkHome, pinkCatalog, pinkProfile],
    screenshots: [pinkHome, pinkCatalog, pinkProfile],
    liveUrl: "https://pinkcloset.cassiano.cloud/",
  },
  {
    slug: "finstreak",
    rank: 5,
    title: "Finstreak",
    shortTitle: "Finstreak",
    type: "Mobile",
    category: "Produto próprio",
    status: "Em produção",
    description:
      "App mobile de educação financeira gamificada, criado para incentivar o hábito de guardar dinheiro e acompanhar controle financeiro.",
    summary:
      "Aplicativo mobile inspirado em mecânicas de gamificação para ajudar usuários a criarem sequência, metas e controle financeiro.",
    role:
      "Responsável por produto, arquitetura, backend, app mobile, deploy e pipeline de entrega.",
    problem:
      "Muitas pessoas sabem que precisam guardar dinheiro, mas têm dificuldade em criar constância, visualizar progresso e transformar controle financeiro em rotina.",
    solution:
      "App mobile que usa progresso, sequência e metas para tornar o hábito financeiro mais simples, visual e recorrente.",
    architectureNotes: [
      "App mobile em React Native consumindo backend em Java Spring Boot.",
      "Persistência em PostgreSQL para dados financeiros e evolução do usuário.",
      "Ambiente containerizado com Docker e pipeline de CI/CD via GitHub Actions.",
    ],
    businessImpact: [
      "Mostra capacidade de construir produto mobile além de aplicações web.",
      "Demonstra pensamento de produto aplicado a hábito, retenção e comportamento.",
      "Expande o portfólio com um case próprio em finanças pessoais e gamificação.",
    ],
    techStack: ["React Native", "Java Spring Boot", "PostgreSQL", "Docker", "GitHub Actions", "CI/CD", "Mobile"],
    metrics: [
      { label: "Plataforma", value: "Mobile" },
      { label: "Domínio", value: "Finanças" },
      { label: "Foco", value: "Gamificação" },
    ],
    icon: Smartphone,
    images: [finstreakLogin, finstreakDashboard, finstreakGoals],
    screenshots: [
      finstreakLogin,
      finstreakOnboarding,
      finstreakDashboard,
      finstreakGoals,
      finstreakExtract,
      finstreakIncome,
      finstreakExpense,
      finstreakProfile,
    ],
    mediaLayout: "mobile",
    liveUrl: "https://finstreak.cassiano.cloud",
  },
  {
    slug: "frete-pagoo",
    rank: 7,
    title: "Frete Pagoo",
    shortTitle: "Frete Pagoo",
    type: "Freelance",
    category: "Freelance",
    status: "Em produção",
    description:
      "Landing page institucional para empresa de transporte refrigerado, com integração direta ao WhatsApp para captação de cotações.",
    summary:
      "Landing page comercial em produção para apresentar serviço e direcionar pedidos de cotação para o WhatsApp.",
    role:
      "Responsável por interface, implementação, publicação e fluxo de conversão via WhatsApp.",
    problem:
      "A empresa precisava de presença digital clara para explicar seus serviços e receber pedidos de cotação.",
    solution:
      "Landing page objetiva com seções institucionais, prova de serviço e CTA para WhatsApp.",
    architectureNotes: [
      "React, Vite, TypeScript e Tailwind CSS.",
      "Fluxo de contato sem backend, direcionado para WhatsApp.",
      "Componentização simples para facilitar ajustes com o cliente.",
    ],
    businessImpact: [
      "Entrega freelance publicada e acessível publicamente.",
      "Foco em conversão, clareza e contato direto.",
      "Mostra capacidade de entregar sites comerciais menores com acabamento.",
    ],
    techStack: ["React", "Vite", "TypeScript", "Tailwind CSS", "WhatsApp"],
    metrics: [
      { label: "Captação", value: "WhatsApp" },
      { label: "Status", value: "Ativo" },
      { label: "Tipo", value: "LP" },
    ],
    icon: Truck,
    images: [fretepagooHero, fretepagooSobre, fretepagooEspecialidades],
    screenshots: [fretepagooHero, fretepagooSobre, fretepagooEspecialidades, fretepagooParceiros, fretepagooMarcas],
    liveUrl: "https://fretepagoo.com",
  },
  {
    slug: "novera-imports",
    rank: 8,
    title: "Novera Imports",
    shortTitle: "Novera Imports",
    type: "Freelance",
    category: "Freelance",
    status: "Em produção",
    description:
      "Landing page freelance em produção para uma operação comercial de importação.",
    summary:
      "Site comercial para apresentar a marca, reforçar confiança e conduzir o visitante ao contato.",
    role:
      "Responsável pela implementação e entrega da landing page.",
    problem:
      "O negócio precisava de uma presença digital objetiva para apresentar proposta e facilitar contato.",
    solution:
      "Landing page com comunicação comercial, estrutura responsiva e CTA de conversão.",
    architectureNotes: [
      "Landing page responsiva com foco em primeira impressão e clareza comercial.",
      "Estrutura simples para publicação rápida e manutenção de conteúdo institucional.",
    ],
    businessImpact: [
      "Entrega freelance em produção.",
      "Mostra capacidade de resolver demandas comerciais com escopo enxuto.",
    ],
    techStack: ["React", "Vite", "TypeScript", "Tailwind CSS", "Deploy"],
    metrics: [
      { label: "Tipo", value: "Freelance" },
      { label: "Status", value: "Em produção" },
      { label: "Escopo", value: "LP" },
    ],
    icon: Globe2,
    images: [noveraHero],
    screenshots: [noveraHero],
    liveUrl: "https://noveraimports.com.br/",
  },
];

export const getProjectBySlug = (slug: string | undefined) =>
  projects.find((project) => project.slug === slug);

export const resumeProfile = {
  headline: "Desenvolvedor Full Stack",
  summary: "Desenvolvedor Full Stack com experiência prática em sistemas B2B e aplicações corporativas em produção. Atuo em todo o ciclo de vida do software: entendimento da regra de negócio, arquitetura, frontend, backend, banco de dados, deploy e infraestrutura. Trabalho com Java/Spring Boot, Node.js/Fastify, React/TypeScript, Docker, Linux e CI/CD para entregar aplicações robustas que resolvem problemas reais."
};

export const resumeExperience = [
  {
    company: "Prefeitura Municipal de Votorantim",
    period: "04/2025 - Atual",
    role: "Estagiário em Desenvolvimento Full Stack",
    description: [
      "Atuação no desenvolvimento de sistemas internos em produção para diferentes setores da Prefeitura, cobrindo levantamento de requisitos, modelagem, frontend, backend, banco de dados, deploy, manutenção e suporte pós-entrega.",
      "Construção de soluções para atendimento de TI, controle auditável de áreas públicas, eventos municipais, gestão interna do departamento de TI e padronização de ambientes técnicos."
    ],
    milestones: [
      {
        period: "Abr/2025 - Out/2025",
        title: "Helpdesk Corporativo",
        status: "Em produção desde 11/07/2025",
        description:
          "Sistema interno para abertura, acompanhamento e gestão de chamados de TI, criado para centralizar o atendimento e substituir fluxos manuais. Desenvolvido do levantamento ao deploy, incluindo requisitos, casos de uso, layout, banco de dados, backend, frontend e manutenção.",
        impact: "2.500+ chamados resolvidos até 24/04/2026",
        stack: ["Java", "Spring Boot", "Thymeleaf", "MySQL", "Docker"],
        featured: true,
      },
      {
        period: "Set/2025 - Nov/2025",
        title: "SPI - Sistema de Áreas Públicas",
        status: "Finalizado",
        description:
          "Sistema interno para controle de áreas públicas, cobranças e auditorias, substituindo rotinas baseadas em Word e planilhas por um fluxo centralizado e auditável.",
        stack: ["Node.js", "Fastify", "React", "MySQL", "Docker"],
      },
      {
        period: "Out/2025 - Fev/2026",
        title: "Gestão de Eventos - Meio Ambiente",
        status: "Finalizado",
        description:
          "Sistema para gestão de eventos públicos, com controle de inscrições, horários, presenças, envio de emails, geocoding e apoio à análise territorial.",
        stack: ["Node.js", "Fastify", "React", "Leaflet", "MinIO"],
      },
      {
        period: "Jan/2026 - Atual",
        title: "ERP Interno de TI",
        status: "Em evolução",
        description:
          "Sistema para organização de contratos, vigência de estagiários, atestados e execução de serviços de terceiros, expandido conforme novas necessidades operacionais do departamento.",
        stack: ["React", "Node.js", "Fastify", "MySQL", "Docker"],
      },
      {
        period: "Em desenvolvimento",
        title: "Plataforma Interna de Desenvolvimento",
        status: "Em desenvolvimento",
        description:
          "Plataforma para padronizar documentação, organizar ambientes de desenvolvimento e produção e centralizar informações técnicas dos sistemas internos.",
        stack: ["Documentação", "DevOps", "Ambientes", "Padronização"],
      },
    ],
  },
  {
    company: "Farma Ponte",
    period: "04/2024 - 08/2024",
    role: "Suporte Técnico",
    description: [
      "Suporte N1/N2 para sistemas, equipamentos e rotinas de TI em ambiente corporativo.",
      "Diagnóstico de incidentes, atendimento a usuários e manutenção da continuidade operacional."
    ]
  }
];

export const resumeProjects = [
  {
    title: "NexOps",
    description: "SaaS B2B funcional e assinável com Java Spring Boot, React/TypeScript, PostgreSQL, Docker, WebSocket, Stripe, IA via BYOK, testes e CI/CD."
  },
  {
    title: "Helpdesk Corporativo",
    description: "Sistema interno criado do zero para gestão de chamados, com 400+ usuários e 2.500+ chamados resolvidos."
  },
  {
    title: "Gestão de Eventos",
    description: "Sistema público com inscrições, horários, presenças, geocoding, análise territorial, React, Fastify, Leaflet, MySQL e MinIO."
  },
  {
    title: "Finstreak",
    description: "App mobile em beta com React Native, Java Spring Boot, PostgreSQL, Docker e GitHub Actions para gamificar hábitos financeiros."
  }
];

export const resumeSkills = [
  { category: "Backend Core", items: ["Java", "Spring Boot", "REST APIs", "Microsserviços"] },
  { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS"] },
  { category: "Infra & Banco", items: ["Docker", "Linux", "PostgreSQL", "MySQL", "CI/CD (Actions)", "Nginx"] },
  { category: "Outras", items: ["Node.js", "NestJS", "Fastify", "React Native", "WebSocket", "MinIO"] }
];
