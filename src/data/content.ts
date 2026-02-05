import { Database, ShoppingBag, Map, HeartHandshake } from "lucide-react";
import type { Project } from "../types";

// Assets imports
import helpdeskHome from "../assets/homehelpdesk.png";
import helpdeskLogin from "../assets/loginhelpdesk.png";
import helpdeskDash from "../assets/dashboardhelpdesk.png";
import animaisLogin from "../assets/logingestaoanimais.png";

// Pink Closet Assets
import pinkHome from "../assets/pinkcloset/homepinkcloset.png";
import pinkAdmin from "../assets/pinkcloset/paineladmpinkcloset.png";
import pinkOrders from "../assets/pinkcloset/gerenciadordepedidopinkcloset.png";
import pinkProfile from "../assets/pinkcloset/meuperfilpinkcloset.png";

// SolidaryStock (Donation System) Assets - Renamed for clarity
import donationDash from "../assets/donation-system/dashboard.png";
import donationMovements from "../assets/donation-system/movimentacoes.png";
import donationProducts from "../assets/donation-system/produtos.png";
import donationLots from "../assets/donation-system/lotes.png";
import donationUsers from "../assets/donation-system/usuarios.png";

export const aboutMe = {
  name: "Cassiano Augusto",
  role: "Desenvolvedor Fullstack | Prefeitura de Votorantim",
  education: "Ciência da Computação (7º Semestre)",
  description: "Meu nome é Cassiano Augusto, sou estudante do 7º semestre de Ciência da Computação e atuo como Desenvolvedor Fullstack na Prefeitura de Votorantim. Minha jornada técnica começou no Suporte de TI, uma experiência fundamental que moldou minha filosofia atual: o desenvolvimento de software começa na empatia pelo usuário, não no código. Entendi que ser desenvolvedor vai muito além da sintaxe; é sobre arquitetar soluções, documentar processos e resolver dores reais. Essa visão me permitiu sair da teoria e entregar sistemas que hoje impactam centenas de usuários diariamente, unindo a robustez do Java/Spring Boot com a experiência fluida do React."
};

export const projects: Project[] = [
  {
    title: "Sistema de Helpdesk Corporativo",
    type: "Principal",
    description: "Solução fullstack desenvolvida para substituir processos manuais e informais. O sistema centralizou a gestão de TI, eliminando chamados via WhatsApp e gerando dados para tomada de decisão.",
    techStack: ["Java Spring Boot", "React", "MySQL", "Docker"],
    metrics: [
      { label: "Chamados Resolvidos", value: "1.900+" },
      { label: "Usuários Ativos", value: "400+" },
      { label: "Manutenção Recorrente", value: "Zero" },
      { label: "Aderência", value: "Imediata" }
    ],
    challenge: "Desenvolvido 100% sozinho, desde o levantamento de requisitos até o deploy da v2 em produção.",
    icon: Database,
    images: [helpdeskHome, helpdeskDash, helpdeskLogin]
  },
  {
    title: "Gestão de Eventos (Secretaria do Meio Ambiente)",
    type: "Secundário",
    description: "Sistema inteligente para gestão de eventos municipais, focado em otimização de recursos públicos e análise geográfica de demanda.",
    techStack: ["Node.js", "React", "Leaflet", "PostgreSQL", "MinIO"],
    metrics: [
      { label: "Inteligência Geográfica", value: "Mapas de Calor" },
      { label: "Predição de Insumos", value: "Desperdício Zero" },
      { label: "Gestão de Vagas", value: "Controle em Tempo Real" }
    ],
    highlight: "Integração com Leaflet para visualização de densidade de munícipes por região, permitindo a escolha estratégica de locais para eventos baseada em dados reais.",
    challenge: "O sistema utiliza o número exato de vagas reservadas para calcular a compra de materiais, permitindo uma predição precisa que elimina perdas financeiras para a prefeitura.",
    icon: Map,
    images: [animaisLogin]
  },
  {
    title: "Donation-System: Gestão de Doações",
    type: "Open Source",
    description: "Projeto Open Source desenvolvido para instituições sem fins lucrativos. O sistema gerencia o fluxo de entrada e saída de doações (cestas básicas, roupas, insumos), garantindo transparência e controle de estoque real.",
    techStack: ["React", "TypeScript", "Node.js", "SQLite"],
    metrics: [
      { label: "Foco Social", value: "Instituições Carentes" },
      { label: "Arquitetura", value: "Offline-First" },
      { label: "Licença", value: "Open Source" }
    ],
    highlight: "Interface simplificada para voluntários e relatórios automáticos de transparência para doadores.",
    challenge: "Desenvolvido para rodar em hardware limitado, otimizando o consumo de memória e permitindo o uso em escolas e igrejas com infraestrutura básica.",
    icon: HeartHandshake,
    images: [donationDash, donationMovements, donationProducts, donationLots, donationUsers],
    githubUrl: "https://github.com/CassianoProenca/donation-system"
  },
  {
    title: "E-commerce & ERP: Pink Closet",
    type: "Freelance",
    description: "Plataforma completa de vendas online com foco em alta performance e experiência de compra fluida. Inclui sistema de gestão interna (ERP) para controle de pedidos e estoque.",
    techStack: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    metrics: [
      { label: "Mobile-First UX", value: "100%" },
      { label: "Performance Score", value: "98/100" },
      { label: "SEO Optimized", value: "A+" }
    ],
    highlight: "Desenvolvimento de Painel Administrativo customizado para gestão de catálogo e fluxo de pedidos em tempo real.",
    icon: ShoppingBag,
    images: [pinkHome, pinkAdmin, pinkOrders, pinkProfile]
  }
];