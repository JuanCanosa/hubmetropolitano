// ─── Types ────────────────────────────────────────────────────────────────────

export interface ServiceItem {
  icon: string;
  name: string;
  description: string;
  price?: string;
}

export interface Business {
  slug: string;
  type: 'digital' | 'servicos-profissionais' | 'servicos-tecnicos';
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
  // LT2 — Profissionais B2B
  registroProfissional?: string;
  faixaHonorarios?: string;
  clientesAtendidos?: string;
  // LT3 — Técnicos & Casa
  atendeUrgencia?: 'sim-24h' | 'sim-comercial' | 'nao';
  areaCobertura?: string[];
  prazoAtendimento?: string;
  disponibilidade?: string;
  garantia?: string;
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

// ─── Mock Data — LT2: Serviços Profissionais B2B ─────────────────────────────

export const mockBusinessesB2B: Business[] = [
  {
    slug: 'contabil-solucoes',
    type: 'servicos-profissionais',
    title: 'Contábil Soluções',
    tagline: 'Contabilidade e planejamento tributário para PMEs na Barra da Tijuca',
    description:
      'Escritório contábil com 15 anos de experiência atendendo pequenas e médias empresas do Centro Metropolitano. Somos especialistas em redução da carga tributária, BPO financeiro e abertura de empresas. Nossa equipe de contadores garante conformidade total e tranquilidade para o seu negócio crescer.',
    cover:
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1600&auto=format&fit=crop',
    location: 'Barra da Tijuca · Rio de Janeiro',
    category: 'Contabilidade & Gestão Financeira',
    registroProfissional: 'CRC/RJ-045231',
    faixaHonorarios: 'R$800 – R$3.000/mês',
    clientesAtendidos: 'Mais de 120 empresas ativas na Barra da Tijuca e região',
    clientSectors: 'Clínicas, E-commerce, Construtoras, Escritórios de Advocacia',
    services: [
      {
        icon: '🧮',
        name: 'Contabilidade Mensal',
        description: 'Escrituração contábil completa, DRE, balanço e obrigações acessórias.',
        price: 'A partir de R$800/mês',
      },
      {
        icon: '💰',
        name: 'Planejamento Tributário',
        description: 'Análise de regime tributário e estratégias legais para redução de impostos.',
        price: 'Sob consulta',
      },
      {
        icon: '📑',
        name: 'BPO Financeiro',
        description: 'Contas a pagar e receber, conciliação bancária e relatórios gerenciais.',
        price: 'A partir de R$1.200/mês',
      },
      {
        icon: '🏢',
        name: 'Abertura de Empresas',
        description: 'Registro, CNPJ, alvarás e toda burocracia para sua empresa nascer certa.',
        price: 'R$1.500',
      },
      {
        icon: '👥',
        name: 'Folha de Pagamento',
        description: 'Processamento de holerites, férias, rescisões e eSocial.',
        price: 'A partir de R$350/mês',
      },
      {
        icon: '📊',
        name: 'Consultoria Financeira',
        description: 'Análise de indicadores, fluxo de caixa e dashboard gerencial mensal.',
        price: 'R$600/sessão',
      },
    ],
  },
  {
    slug: 'primo-imoveis',
    type: 'servicos-profissionais',
    title: 'Primo Imóveis',
    tagline: 'Corretagem de alto padrão para compra, venda e locação na Barra',
    description:
      'Imobiliária boutique especializada no segmento premium da Barra da Tijuca e arredores. Com mais de 10 anos no mercado, nossos corretores conhecem cada condomínio, lançamento e oportunidade da região. Transparência, agilidade e resultado em cada negociação.',
    cover:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1600&auto=format&fit=crop',
    location: 'Barra da Tijuca · Rio de Janeiro',
    category: 'Imobiliária & Corretagem',
    registroProfissional: 'CRECI/RJ-87432-J',
    faixaHonorarios: '6% sobre o valor da transação',
    clientesAtendidos: 'Mais de 350 imóveis negociados nos últimos 5 anos',
    clientSectors: 'Pessoa Física, Investidores, Incorporadoras, Empresas',
    services: [
      {
        icon: '🔑',
        name: 'Compra & Venda',
        description: 'Captação, avaliação, negociação e fechamento de imóveis residenciais e comerciais.',
      },
      {
        icon: '🏠',
        name: 'Locação',
        description: 'Gestão completa do processo de locação — anúncio, visitas, contrato e vistoria.',
        price: 'Taxa de administração: 8%/mês',
      },
      {
        icon: '📋',
        name: 'Gestão de Contratos',
        description: 'Renovações, reajustes, inadimplência e relacionamento com proprietários e inquilinos.',
        price: 'Incluso na administração',
      },
      {
        icon: '📐',
        name: 'Avaliação de Imóveis',
        description: 'Laudo de avaliação mercadológica com base em comparativos da região.',
        price: 'R$800',
      },
      {
        icon: '📈',
        name: 'Consultoria de Investimento',
        description: 'Análise de rentabilidade e indicação das melhores oportunidades do mercado.',
        price: 'Sob consulta',
      },
    ],
  },
  {
    slug: 'estrateg-rh',
    type: 'servicos-profissionais',
    title: 'Estrateg RH',
    tagline: 'Recrutamento, seleção e desenvolvimento de pessoas para empresas que crescem',
    description:
      'Consultoria de recursos humanos especializada em PMEs e empresas de médio porte no Rio de Janeiro. Atuamos desde o recrutamento operacional até headhunting executivo, com foco em fit cultural e resultados de longo prazo. Parceiros de negócios que entendem que gente é o maior ativo.',
    cover:
      'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1600&auto=format&fit=crop',
    location: 'Barra da Tijuca · Atende todo o Rio de Janeiro',
    category: 'RH, Headhunting & Carreira',
    faixaHonorarios: 'R$2.000 – R$8.000/processo',
    clientesAtendidos: 'Mais de 80 empresas atendidas · 600+ posições preenchidas',
    clientSectors: 'Tecnologia, Saúde, Finanças, Varejo, Construção Civil',
    services: [
      {
        icon: '🔍',
        name: 'Recrutamento & Seleção',
        description: 'Processo seletivo completo: triagem, entrevistas, testes e apresentação de finalistas.',
        price: 'A partir de R$2.000/vaga',
      },
      {
        icon: '🎯',
        name: 'Headhunting Executivo',
        description: 'Mapeamento de mercado e abordagem ativa para posições de liderança e C-level.',
        price: 'Sob consulta',
      },
      {
        icon: '📚',
        name: 'Treinamento & Desenvolvimento',
        description: 'Programas de capacitação, liderança e cultura organizacional para equipes.',
        price: 'A partir de R$3.500/turma',
      },
      {
        icon: '🧭',
        name: 'Consultoria de Carreira',
        description: 'Mentoria individual, reposicionamento profissional e preparação para liderança.',
        price: 'R$350/sessão',
      },
      {
        icon: '📊',
        name: 'Avaliação de Desempenho',
        description: 'Implantação de ciclos de performance, feedback 360° e planos de desenvolvimento.',
        price: 'A partir de R$4.000/projeto',
      },
    ],
  },
];

// ─── Mock Data — LT3: Serviços Técnicos & Casa ───────────────────────────────

export const mockBusinessesTec: Business[] = [
  {
    slug: 'carlos-eletrica',
    type: 'servicos-tecnicos',
    title: 'Carlos Elétrica',
    tagline: 'Eletricista residencial e predial — atendo urgências na Barra e Recreio',
    description:
      'Eletricista com 18 anos de experiência em instalações residenciais e prediais na Barra da Tijuca e região. Atendo emergências 24h, com laudo de conformidade incluso nos serviços. Trabalho com material de primeira linha e garantia em todos os serviços realizados.',
    cover:
      'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1600&auto=format&fit=crop',
    location: 'Barra da Tijuca · Rio de Janeiro',
    category: 'Eletricidade & Hidráulica',
    atendeUrgencia: 'sim-24h',
    areaCobertura: ['Barra da Tijuca', 'Recreio', 'Ilha Pura', 'Rio2', 'Barra de Guaratiba'],
    prazoAtendimento: 'Mesmo dia',
    disponibilidade: 'Disponível Agora',
    garantia: '90 dias em instalações elétricas',
    services: [
      {
        icon: '⚡',
        name: 'Instalações Elétricas',
        description: 'Quadros de distribuição, tomadas, iluminação e fiação completa.',
        price: 'A partir de R$250',
      },
      {
        icon: '🔧',
        name: 'Manutenção Preventiva',
        description: 'Revisão elétrica residencial com laudo de conformidade incluso.',
        price: 'R$350',
      },
      {
        icon: '🚨',
        name: 'Emergências 24h',
        description: 'Atendimento imediato para curtos, quedas de energia e situações de risco.',
        price: 'A partir de R$300',
      },
      {
        icon: '💡',
        name: 'Iluminação & LED',
        description: 'Projeto e instalação de iluminação residencial, jardins e fachadas.',
        price: 'Sob consulta',
      },
      {
        icon: '📋',
        name: 'Laudo Elétrico',
        description: 'Laudo técnico assinado por engenheiro para AVCB, seguro e imóveis.',
        price: 'R$580',
      },
    ],
  },
  {
    slug: 'friobom-climatizacao',
    type: 'servicos-tecnicos',
    title: 'FrioBom Climatização',
    tagline: 'Instalação, manutenção e limpeza de ar-condicionado — atendimento rápido',
    description:
      'Empresa especializada em climatização residencial e comercial com mais de 12 anos na Barra da Tijuca. Trabalhamos com todas as marcas: Daikin, LG, Samsung, Midea, Gree e mais. Técnicos certificados e peças originais em estoque para agilizar o atendimento.',
    cover:
      'https://images.unsplash.com/photo-1631567091534-92b62c78d3ce?q=80&w=1600&auto=format&fit=crop',
    location: 'Barra da Tijuca · Recreio · Jacarepaguá',
    category: 'Ar-Condicionado & Climatização',
    atendeUrgencia: 'sim-comercial',
    areaCobertura: ['Barra da Tijuca', 'Recreio', 'Jacarepaguá', 'Ilha Pura'],
    prazoAtendimento: '24-48h',
    disponibilidade: 'Agenda Aberta',
    garantia: '6 meses em peças e serviço',
    services: [
      {
        icon: '❄️',
        name: 'Instalação',
        description: 'Instalação de splits, multisplits e cassetes residenciais e comerciais.',
        price: 'A partir de R$350',
      },
      {
        icon: '🔧',
        name: 'Manutenção Preventiva',
        description: 'Limpeza completa, verificação de gás e revisão de componentes.',
        price: 'R$180/aparelho',
      },
      {
        icon: '🔩',
        name: 'Manutenção Corretiva',
        description: 'Diagnóstico e reparo de aparelhos com defeito, peças originais.',
        price: 'A partir de R$250',
      },
      {
        icon: '💧',
        name: 'Higienização',
        description: 'Limpeza profunda com produto bactericida — elimina fungos e bactérias.',
        price: 'R$220/aparelho',
      },
      {
        icon: '🌡️',
        name: 'Recarga de Gás',
        description: 'Verificação de vazamento e recarga com gás R-22, R-410A ou R-32.',
        price: 'A partir de R$180',
      },
    ],
  },
  {
    slug: 'reforma-certa',
    type: 'servicos-tecnicos',
    title: 'Reforma Certa',
    tagline: 'Reforma e construção civil com qualidade e prazo garantidos na Barra',
    description:
      'Empresa de reforma residencial e comercial atuando há 20 anos na Barra da Tijuca. Do pequeno reparo à reforma completa, entregamos com pontualidade e acabamento premium. Mestre de obras experiente, equipe própria e orçamento detalhado sem surpresas.',
    cover:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop',
    location: 'Barra da Tijuca · Recreio · Barra de Guaratiba',
    category: 'Reforma & Construção Civil',
    atendeUrgencia: 'nao',
    areaCobertura: ['Barra da Tijuca', 'Recreio', 'Barra de Guaratiba', 'Rio2'],
    prazoAtendimento: 'Agendado',
    disponibilidade: 'Agendado',
    garantia: '1 ano em serviços de reforma',
    clientSectors: 'Residencial, Comercial, Condomínios, Escritórios',
    services: [
      {
        icon: '🏗️',
        name: 'Reforma Completa',
        description: 'Banheiros, cozinhas, salas e apartamentos completos com projeto incluso.',
        price: 'Sob consulta',
      },
      {
        icon: '🪟',
        name: 'Pintura & Acabamento',
        description: 'Pintura interna e externa, textura, grafiato e acabamentos especiais.',
        price: 'A partir de R$15/m²',
      },
      {
        icon: '🧱',
        name: 'Alvenaria & Revestimento',
        description: 'Demolição, construção de paredes, porcelanato e revestimentos.',
        price: 'A partir de R$80/m²',
      },
      {
        icon: '🚿',
        name: 'Hidráulica',
        description: 'Instalação e reparo de tubulações, louças, aquecedores e boxes.',
        price: 'A partir de R$300',
      },
      {
        icon: '🪚',
        name: 'Marcenaria & Gesso',
        description: 'Drywall, forro de gesso, nicho e móveis planejados sob medida.',
        price: 'Sob consulta',
      },
    ],
  },
];

export function getBusiness(slug: string): Business | undefined {
  return [...mockBusinesses, ...mockBusinessesB2B, ...mockBusinessesTec].find((b) => b.slug === slug);
}
