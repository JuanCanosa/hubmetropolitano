// ─── Types ────────────────────────────────────────────────────────────────────

export interface ServiceItem {
  icon: string;
  name: string;
  description: string;
  price?: string;
}

export interface Business {
  slug: string;
  type: 'digital';
  title: string;
  tagline: string;
  description: string;
  logo?: string;
  cover: string;
  location?: string;
  services: ServiceItem[];
  technologies?: string[];
  clientSectors?: string;
  category: string;
}

// ─── Mock Data — LT1: Agências & Serviços Digitais ───────────────────────────

export const mockBusinesses: Business[] = [
  {
    slug: 'orbital-agency',
    type: 'digital',
    title: 'Orbital Agency',
    tagline: 'Marketing digital que converte no Centro Metropolitano',
    description:
      'Somos uma agência boutique especializada em crescimento para marcas premium da Barra da Tijuca. Combinamos estratégia, criatividade e tecnologia para entregar resultados mensuráveis. Atendemos marcas de luxo, clínicas, condomínios e negócios B2B que querem dominar sua região.',
    cover:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop',
    location: 'Barra da Tijuca · Rio de Janeiro',
    category: 'Agências de Marketing Digital',
    technologies: ['Meta Ads', 'Google Ads', 'WordPress', 'n8n', 'Figma', 'HubSpot'],
    clientSectors: 'Saúde & Clínicas, Imóveis, Negócios B2B, Moda & Luxo',
    services: [
      {
        icon: '📈',
        name: 'Tráfego Pago',
        description: 'Google Ads e Meta Ads com gestão mensal e relatórios semanais de performance.',
        price: 'A partir de R$1.500/mês',
      },
      {
        icon: '🌐',
        name: 'Sites & Landing Pages',
        description: 'Design, desenvolvimento e hospedagem inclusa no primeiro ano.',
        price: 'A partir de R$3.800',
      },
      {
        icon: '🤖',
        name: 'Automação',
        description: 'n8n, Make e integrações customizadas para o seu negócio.',
        price: 'Sob consulta',
      },
      {
        icon: '📱',
        name: 'Social Media',
        description: 'Criação de conteúdo, calendário editorial e gestão das redes.',
        price: 'R$2.200/mês',
      },
      {
        icon: '📧',
        name: 'E-mail Marketing',
        description: 'Estratégia de nutrição, copywriting e automação de campanhas.',
        price: 'R$1.200/mês',
      },
      {
        icon: '📊',
        name: 'Consultoria Estratégica',
        description: 'Diagnóstico completo de presença digital e plano de crescimento trimestral.',
        price: 'R$800/sessão',
      },
    ],
  },
  {
    slug: 'byteforge-dev',
    type: 'digital',
    title: 'ByteForge Dev',
    tagline: 'Desenvolvimento web e apps para negócios que escalam',
    description:
      'Time de desenvolvedores sênior focado em soluções robustas para PMEs e startups. Do MVP ao produto completo, construímos com tecnologias modernas e entregamos com qualidade. Experiência em SaaS, e-commerce, sistemas internos e integrações complexas.',
    cover:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1600&auto=format&fit=crop',
    location: 'Barra da Tijuca · 100% Remoto',
    category: 'Desenvolvimento Web & Apps',
    technologies: ['React', 'Next.js', 'Node.js', 'Python', 'PostgreSQL', 'AWS'],
    clientSectors: 'Startups, SaaS, E-commerce, Fintechs',
    services: [
      {
        icon: '💻',
        name: 'Desenvolvimento Web',
        description: 'Sites e sistemas web modernos com React, Next.js ou Astro.',
        price: 'A partir de R$6.000',
      },
      {
        icon: '📲',
        name: 'Apps Mobile',
        description: 'Aplicativos iOS e Android com React Native ou Flutter.',
        price: 'A partir de R$12.000',
      },
      {
        icon: '🔌',
        name: 'APIs & Integrações',
        description: 'REST APIs, webhooks e integrações entre sistemas e plataformas.',
        price: 'A partir de R$3.500',
      },
      {
        icon: '🛒',
        name: 'E-commerce',
        description: 'Lojas virtuais customizadas com WooCommerce, Shopify ou solução própria.',
        price: 'A partir de R$8.000',
      },
      {
        icon: '☁️',
        name: 'Cloud & DevOps',
        description: 'Configuração de infraestrutura AWS, GCP ou Azure com CI/CD.',
        price: 'Sob consulta',
      },
    ],
  },
  {
    slug: 'visu-studio',
    type: 'digital',
    title: 'Visu Studio',
    tagline: 'Design & identidade visual para marcas que querem ser lembradas',
    description:
      'Estúdio criativo especializado em branding, UI/UX e produção visual para marcas que valorizam estética e diferenciação. Trabalhamos com negócios premium, clínicas, escritórios e empresas que entendem que design é investimento, não custo.',
    cover:
      'https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=1600&auto=format&fit=crop',
    location: 'Barra da Tijuca · Rio de Janeiro',
    category: 'Design & Criação Visual',
    technologies: ['Figma', 'Adobe CC', 'Framer', 'Webflow', 'After Effects'],
    clientSectors: 'Saúde, Advocacia, Imóveis, Beleza & Lifestyle',
    services: [
      {
        icon: '✨',
        name: 'Branding Completo',
        description: 'Identidade visual, manual de marca, logo e aplicações.',
        price: 'A partir de R$4.500',
      },
      {
        icon: '🎨',
        name: 'UI/UX Design',
        description: 'Prototipagem, wireframes e design de interfaces para web e mobile.',
        price: 'A partir de R$2.800',
      },
      {
        icon: '📸',
        name: 'Direção de Arte',
        description: 'Concept, art direction e supervisão para ensaios e campanhas.',
        price: 'Sob consulta',
      },
      {
        icon: '🎬',
        name: 'Motion & Vídeo',
        description: 'Animações, vídeos institucionais e reels para redes sociais.',
        price: 'A partir de R$1.800',
      },
      {
        icon: '📐',
        name: 'Peças & Materiais',
        description: 'Apresentações, folders, banners, posts e materiais para eventos.',
        price: 'A partir de R$350/peça',
      },
    ],
  },
];

export function getBusiness(slug: string): Business | undefined {
  return mockBusinesses.find((b) => b.slug === slug);
}
