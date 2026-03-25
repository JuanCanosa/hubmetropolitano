// ─── Types ────────────────────────────────────────────────────────────────────

export interface ServiceItem {
  icon: string;
  name: string;
  description: string;
  price?: string;
}

export interface Business {
  slug: string;
  type: 'digital' | 'servicos-profissionais' | 'servicos-tecnicos' | 'gastronomia' | 'saude' | 'esporte' | 'beleza';
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
  // LT4 — Gastronomia
  tipoCozinha?: string;
  faixaPreco?: '$' | '$$' | '$$$' | '$$$$';
  cardapioUrl?: string;
  horarios?: { dias: string; horario: string }[];
  aceitaReservas?: boolean;
  reservasUrl?: string;
  delivery?: boolean;
  deliveryUrl?: string;
  ambiente?: string[];
  estacionamento?: boolean;
  // LT5 — Saúde
  especialidades?: string[];
  planosAceitos?: string[];
  tipoAtendimento?: 'presencial' | 'online' | 'ambos';
  corpoClinico?: { nome: string; especialidade: string; foto?: string }[];
  // LT6 — Beleza
  agendamentoUrl?: string;
  profissionaisBeleza?: { nome: string; especialidade: string }[];
  // LT7 — Esporte
  modalidades?: string[];
  infraestrutura?: string[];
  // Mapa & Rating
  lat?: number;
  lng?: number;
  rating?: number;
  // Agendamento direto
  whatsapp?: string;
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
    lat: -22.998, lng: -43.362, rating: 4.9,
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
    lat: -22.995, lng: -43.366, rating: 4.7,
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
    lat: -23.001, lng: -43.360, rating: 4.8,
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
    lat: -22.997, lng: -43.368, rating: 4.6,
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
    lat: -23.003, lng: -43.371, rating: 4.9,
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
    lat: -22.994, lng: -43.358, rating: 4.5,
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
    lat: -23.002, lng: -43.373, rating: 4.8,
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
    lat: -22.998, lng: -43.355, rating: 4.7,
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
    lat: -23.005, lng: -43.365, rating: 4.4,
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

// ─── Mock Data — LT4: Gastronomia ────────────────────────────────────────────

export const mockBusinessesGastro: Business[] = [
  {
    slug: 'barra-grill',
    type: 'gastronomia',
    title: 'Barra Grill',
    tagline: 'Cortes premium e churrasco artesanal no coração da Barra da Tijuca',
    description:
      'Restaurante especializado em carnes nobres e churrasco artesanal, com mais de 8 anos servindo a região da Barra da Tijuca. Trabalhamos com cortes importados e nacionais de primeira linha, preparo na brasa e um ambiente sofisticado para almoços de negócios ou jantares especiais. Reservas para grupos e eventos corporativos.',
    cover:
      'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop',
    location: 'Barra da Tijuca · Rio de Janeiro',
    lat: -23.000, lng: -43.363, rating: 4.8,
    category: 'Restaurantes & Grills',
    tipoCozinha: 'Churrasco & Carnes Nobres',
    faixaPreco: '$$$',
    horarios: [
      { dias: 'Seg–Sex', horario: '12h–15h · 19h–23h' },
      { dias: 'Sáb–Dom', horario: '12h–23h' },
    ],
    aceitaReservas: true,
    reservasUrl: '#',
    delivery: true,
    deliveryUrl: '#',
    ambiente: ['Sofisticado', 'Executivo', 'Romântico'],
    estacionamento: true,
    services: [
      {
        icon: '🥩',
        name: 'Almoço & Jantar',
        description: 'Cardápio completo com entradas, cortes nobres na brasa e sobremesas artesanais.',
        price: 'Ticket médio R$120/pessoa',
      },
      {
        icon: '🍷',
        name: 'Carta de Vinhos',
        description: 'Seleção de rótulos nacionais e importados com sommelier disponível.',
        price: 'A partir de R$95/garrafa',
      },
      {
        icon: '👥',
        name: 'Eventos Corporativos',
        description: 'Aluguel do espaço VIP para confraternizações, reuniões e celebrações.',
        price: 'Sob consulta',
      },
      {
        icon: '📦',
        name: 'Delivery Premium',
        description: 'Cortes preparados e embalados a vácuo para consumo em casa.',
        price: 'A partir de R$85',
      },
      {
        icon: '🎂',
        name: 'Menu Degustação',
        description: 'Experiência de 5 tempos com harmonização guiada pelo chef.',
        price: 'R$220/pessoa',
      },
    ],
  },
  {
    slug: 'cafe-metropolitan',
    type: 'gastronomia',
    title: 'Café Metropolitan',
    tagline: 'Cafeteria artesanal e brunch premium para o seu dia começar bem',
    description:
      'Cafeteria especializada em café de origem única, pães artesanais e brunch sofisticado. Ambiente aconchegante e moderno para trabalho, reuniões informais ou simplesmente um momento de qualidade. Grãos selecionados de torrefação própria e cardápio sazonal com produtos locais.',
    cover:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1600&auto=format&fit=crop',
    location: 'Barra da Tijuca · Rio de Janeiro',
    lat: -22.997, lng: -43.361, rating: 4.9,
    category: 'Cafeterias & Padarias',
    tipoCozinha: 'Café & Brunch',
    faixaPreco: '$$',
    horarios: [
      { dias: 'Seg–Sex', horario: '07h–20h' },
      { dias: 'Sáb–Dom', horario: '08h–18h' },
    ],
    aceitaReservas: false,
    delivery: true,
    deliveryUrl: '#',
    ambiente: ['Aconchegante', 'Cowork-friendly', 'Descontraído'],
    estacionamento: false,
    services: [
      {
        icon: '☕',
        name: 'Cafés Especiais',
        description: 'Espresso, filtrado, cold brew e drinks de café com grãos de origem única.',
        price: 'A partir de R$12',
      },
      {
        icon: '🥐',
        name: 'Brunch & Café da Manhã',
        description: 'Pães artesanais, ovos, frios selecionados e acompanhamentos sazonais.',
        price: 'A partir de R$55/pessoa',
      },
      {
        icon: '🎂',
        name: 'Confeitaria Artesanal',
        description: 'Bolos, tortas e doces produzidos diariamente com ingredientes frescos.',
        price: 'A partir de R$18/fatia',
      },
      {
        icon: '📦',
        name: 'Assinatura de Café',
        description: 'Receba em casa grãos selecionados toda semana com curadoria do barista.',
        price: 'R$89/mês',
      },
      {
        icon: '🎁',
        name: 'Cestas & Presentes',
        description: 'Kits gourmet personalizados para presentear com produtos da casa.',
        price: 'A partir de R$120',
      },
    ],
  },
  {
    slug: 'sabor-da-vila',
    type: 'gastronomia',
    title: 'Sabor da Vila',
    tagline: 'Culinária brasileira contemporânea com ingredientes locais e muita personalidade',
    description:
      'Restaurante de culinária brasileira contemporânea com foco em ingredientes regionais e receitas reinventadas. O chef Marcos Leal traz uma visão moderna da gastronomia carioca, valorizando produtores locais e criando pratos que contam histórias. Ambiente intimista e cardápio que muda sazonalmente.',
    cover:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1600&auto=format&fit=crop',
    location: 'Barra da Tijuca · Rio de Janeiro',
    lat: -23.003, lng: -43.367, rating: 4.6,
    category: 'Culinária Brasileira',
    tipoCozinha: 'Brasileira Contemporânea',
    faixaPreco: '$$',
    cardapioUrl: '#',
    horarios: [
      { dias: 'Ter–Sex', horario: '12h–15h · 19h–22h30' },
      { dias: 'Sáb', horario: '12h–23h' },
      { dias: 'Dom', horario: '12h–17h' },
    ],
    aceitaReservas: true,
    reservasUrl: '#',
    delivery: false,
    ambiente: ['Intimista', 'Autoral', 'Familiar'],
    estacionamento: true,
    services: [
      {
        icon: '🍽️',
        name: 'Jantar à La Carte',
        description: 'Cardápio sazonal com pratos inspirados na gastronomia brasileira contemporânea.',
        price: 'Ticket médio R$95/pessoa',
      },
      {
        icon: '🥗',
        name: 'Almoço Executivo',
        description: 'Menu simplificado e ágil para o dia a dia com entrada, prato e sobremesa.',
        price: 'R$55/pessoa',
      },
      {
        icon: '🎉',
        name: 'Eventos & Buffet',
        description: 'Buffet personalizado para aniversários, casamentos e eventos corporativos.',
        price: 'Sob consulta',
      },
      {
        icon: '👨‍🍳',
        name: 'Chef em Casa',
        description: 'O chef vai até você preparar um jantar exclusivo para até 12 pessoas.',
        price: 'A partir de R$1.800',
      },
      {
        icon: '🍱',
        name: 'Marmitas Premium',
        description: 'Marmitas saudáveis e saborosas entregues semanalmente com cardápio rotativo.',
        price: 'A partir de R$32/unidade',
      },
    ],
  },
];

// ─── Mock Data — LT5: Saúde & Bem-Estar ─────────────────────────────────────

export const mockBusinessesSaude: Business[] = [
  {
    slug: 'espaco-odonto',
    type: 'saude',
    title: 'Espaço Odonto',
    tagline: 'Odontologia de excelência no coração do Centro Metropolitano',
    description:
      'Clínica odontológica completa com atendimento personalizado para moradores e profissionais do Centro Metropolitano. Equipe de especialistas em implantodontia, estética dental, ortodontia e periodontia. Tecnologia de ponta, ambiente acolhedor e resultados que transformam sorrisos.',
    cover: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1600&auto=format&fit=crop',
    location: 'Metropolitan Office Tower · Barra da Tijuca',
    lat: -22.999, lng: -43.364, rating: 4.9,
    category: 'Odontologia & Estética Dental',
    faixaHonorarios: 'R$200 – R$8.000',
    clientesAtendidos: 'Mais de 3.000 pacientes atendidos',
    especialidades: ['Implantodontia', 'Estética Dental', 'Ortodontia', 'Periodontia', 'Clínico Geral'],
    planosAceitos: ['Particular', 'Amil Dental', 'OdontoPrev', 'SulAmérica Odonto', 'Bradesco Dental'],
    tipoAtendimento: 'presencial',
    horarios: [
      { dias: 'Seg–Sex', horario: '08h–20h' },
      { dias: 'Sáb', horario: '09h–14h' },
    ],
    corpoClinico: [
      { nome: 'Dra. Fernanda Costa', especialidade: 'Implantodontia & Estética' },
      { nome: 'Dr. Rafael Mendes', especialidade: 'Ortodontia' },
      { nome: 'Dra. Juliana Pires', especialidade: 'Periodontia' },
    ],
    services: [
      { icon: '🦷', name: 'Implante Dentário',    description: 'Implantes de titânio com carga imediata e protocolo all-on-4.',         price: 'A partir de R$2.800' },
      { icon: '✨', name: 'Clareamento Dental',   description: 'Clareamento a laser com resultado em sessão única.',                    price: 'R$800' },
      { icon: '😁', name: 'Facetas de Porcelana', description: 'Lentes de contato dental para transformação estética completa.',         price: 'A partir de R$1.200/dente' },
      { icon: '🔲', name: 'Ortodontia',           description: 'Aparelho fixo, removível e alinhadores invisíveis Invisalign.',         price: 'A partir de R$3.500' },
      { icon: '🔬', name: 'Periodontia',          description: 'Tratamento de gengiva, raspagem e cirurgia periodontal.',               price: 'A partir de R$350' },
    ],
  },
  {
    slug: 'dermacenter-clinica',
    type: 'saude',
    title: 'DermaCenter Clínica',
    tagline: 'Dermatologia clínica e estética — diagnóstico preciso e tratamento avançado',
    description:
      'Clínica de dermatologia referência na Barra da Tijuca, com médicos especialistas em dermatologia clínica, cirúrgica e estética. Atendemos desde diagnóstico de doenças de pele até tratamentos estéticos avançados com laser, toxina botulínica e preenchimento. Conforto, privacidade e excelência médica.',
    cover: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1600&auto=format&fit=crop',
    location: 'CEO Corporate · Barra da Tijuca',
    lat: -22.996, lng: -43.360, rating: 4.8,
    category: 'Dermatologia & Medicina Estética',
    faixaHonorarios: 'R$350 – R$4.000',
    clientesAtendidos: 'Mais de 5.000 consultas realizadas',
    especialidades: ['Dermatologia Clínica', 'Dermatologia Cirúrgica', 'Medicina Estética', 'Laser'],
    planosAceitos: ['Particular', 'Bradesco Saúde', 'SulAmérica', 'Amil', 'Unimed'],
    tipoAtendimento: 'presencial',
    horarios: [
      { dias: 'Seg–Sex', horario: '09h–19h' },
      { dias: 'Sáb', horario: '09h–13h' },
    ],
    corpoClinico: [
      { nome: 'Dra. Camila Neves', especialidade: 'Dermatologia Clínica & Cirúrgica' },
      { nome: 'Dr. Thiago Lemos', especialidade: 'Medicina Estética & Laser' },
    ],
    services: [
      { icon: '🔬', name: 'Consulta Dermatológica', description: 'Avaliação completa da pele, diagnóstico e prescrição de tratamento.',   price: 'R$380' },
      { icon: '✨', name: 'Laser & Fototerapia',    description: 'Tratamentos a laser para manchas, acne, rejuvenescimento e depilação.',  price: 'A partir de R$450' },
      { icon: '💉', name: 'Toxina Botulínica',      description: 'Aplicação de Botox para linhas de expressão e hiperidrose.',            price: 'A partir de R$1.200' },
      { icon: '💊', name: 'Dermatologia Clínica',   description: 'Tratamento de acne, rosácea, psoríase, vitiligo e dermatites.',          price: 'R$380' },
      { icon: '🩺', name: 'Mapeamento de Pintas',   description: 'Dermoscopia digital para rastreamento de lesões suspeitas.',             price: 'R$550' },
    ],
  },
  {
    slug: 'psico-espaco-barra',
    type: 'saude',
    title: 'PsicoEspaço Barra',
    tagline: 'Psicologia e saúde mental para profissionais e famílias do Centro Metropolitano',
    description:
      'Centro de psicologia e saúde mental com equipe multidisciplinar de psicólogos, psiquiatras e terapeutas. Atendemos adultos, adolescentes, casais e crianças. Consultório presencial e atendimento online disponível. Espaço acolhedor e sigiloso para cuidar do seu bem-estar mental.',
    cover: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=1600&auto=format&fit=crop',
    location: 'Union Square · Barra da Tijuca',
    lat: -23.001, lng: -43.369, rating: 4.7,
    category: 'Psicologia & Saúde Mental',
    faixaHonorarios: 'R$180 – R$450/sessão',
    clientesAtendidos: 'Mais de 200 pacientes em acompanhamento',
    especialidades: ['Psicoterapia', 'Psiquiatria', 'Terapia de Casal', 'Psicologia Infantil', 'Organizacional'],
    planosAceitos: ['Particular', 'Bradesco Saúde', 'SulAmérica', 'Amil'],
    tipoAtendimento: 'ambos',
    horarios: [
      { dias: 'Seg–Sex', horario: '08h–21h' },
      { dias: 'Sáb', horario: '09h–15h' },
    ],
    corpoClinico: [
      { nome: 'Dra. Ana Beatriz Silva', especialidade: 'Psicologia Clínica & Terapia de Casal' },
      { nome: 'Dr. Rodrigo Faria', especialidade: 'Psiquiatria' },
      { nome: 'Dra. Mariana Santos', especialidade: 'Psicologia Infantil & Adolescente' },
    ],
    services: [
      { icon: '🧠', name: 'Psicoterapia Individual', description: 'Atendimento para adultos e adolescentes com diferentes abordagens terapêuticas.', price: 'R$220/sessão' },
      { icon: '👫', name: 'Terapia de Casal',         description: 'Trabalho focado na comunicação, conflitos e fortalecimento do relacionamento.',   price: 'R$280/sessão' },
      { icon: '👶', name: 'Psicologia Infantil',      description: 'Atendimento especializado para crianças com ludoterapia e avaliação psicológica.',  price: 'R$200/sessão' },
      { icon: '💼', name: 'Psicologia Organizacional', description: 'Coaching, desenvolvimento de liderança e gestão de estresse no trabalho.',         price: 'Sob consulta' },
      { icon: '💊', name: 'Psiquiatria',               description: 'Avaliação psiquiátrica, diagnóstico e acompanhamento farmacológico.',               price: 'R$450/consulta' },
    ],
  },
];

// ─── Mock Data — LT6: Esporte & Lazer ────────────────────────────────────────

export const mockBusinessesEsporte: Business[] = [
  {
    slug: 'metrofit-academia',
    type: 'esporte',
    title: 'MetroFit Academia',
    tagline: 'A maior academia de musculação e fitness do Centro Metropolitano',
    description:
      'Academia de grande porte com mais de 3.000m² de área útil, equipamentos Life Fitness de última geração e equipe de personal trainers certificados. Musculação, aeróbico, aulas coletivas, crossfit e área de recuperação com sauna seca e banho de contraste. O espaço fitness definitivo da Barra da Tijuca.',
    cover: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1600&auto=format&fit=crop',
    location: 'Shopping Metropolitano · Barra da Tijuca',
    lat: -22.999, lng: -43.363, rating: 4.8,
    category: 'Academia & Musculação',
    modalidades: ['Musculação', 'Aeróbico', 'Spinning', 'CrossFit', 'Zumba', 'Body Pump', 'Pilates', 'Funcional'],
    infraestrutura: ['3.000m² de área', 'Vestiários completos', 'Sauna seca', 'Banho de contraste', 'Estacionamento', 'Lanchonete'],
    horarios: [
      { dias: 'Seg–Sex', horario: '05h30–23h' },
      { dias: 'Sáb', horario: '07h–20h' },
      { dias: 'Dom & Feriados', horario: '08h–14h' },
    ],
    services: [
      { icon: '🏋️', name: 'Musculação',         description: 'Área com mais de 200 equipamentos Life Fitness e Technogym para todos os níveis.', price: 'A partir de R$120/mês' },
      { icon: '🏃', name: 'Aulas Coletivas',    description: 'Mais de 40 modalidades semanais: spinning, body pump, zumba, pilates e mais.', price: 'Incluso no plano' },
      { icon: '⚡', name: 'Crossfit',           description: 'Box de crossfit com programação WOD diária e coaches experientes.', price: 'A partir de R$180/mês' },
      { icon: '👤', name: 'Personal Trainer',   description: 'Sessões individuais com personal trainer certificado e planilha personalizada.', price: 'A partir de R$120/sessão' },
      { icon: '🧖', name: 'Área de Recuperação', description: 'Sauna seca, banho de contraste e sala de alongamento com orientação.', price: 'Incluso no plano' },
    ],
  },
  {
    slug: 'arena-abelardo-beach-tennis',
    type: 'esporte',
    title: 'Arena Abelardo Beach',
    tagline: 'A melhor arena de Beach Tennis da Barra — quadras de areia premium',
    description:
      'Arena de Beach Tennis com 8 quadras de areia premium, iluminação para jogo noturno e infraestrutura completa. Aulas para iniciantes e avançados, torneios mensais, aluguel avulso e pacotes de mensalidade. Equipamentos disponíveis para locação e loja especializada no local. O ponto de encontro do BT na Barra da Tijuca.',
    cover: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=1600&auto=format&fit=crop',
    location: 'Av. Abelardo Bueno · Barra da Tijuca',
    lat: -22.997, lng: -43.357, rating: 4.9,
    category: 'Beach Tennis & Areia',
    modalidades: ['Beach Tennis', 'Beach Vôlei', 'Futevôlei'],
    infraestrutura: ['8 quadras de areia', 'Iluminação LED noturna', 'Vestiários', 'Loja especializada', 'Estacionamento', 'Área de descanso'],
    horarios: [
      { dias: 'Seg–Sex', horario: '06h–22h' },
      { dias: 'Sáb–Dom', horario: '07h–22h' },
    ],
    services: [
      { icon: '🎾', name: 'Aulas de Beach Tennis', description: 'Aulas coletivas e individuais para todos os níveis, com professores federados.', price: 'A partir de R$90/aula' },
      { icon: '🏟️', name: 'Aluguel de Quadra',    description: '8 quadras com areia grossa importada e iluminação LED noturna.', price: 'R$80/hora' },
      { icon: '🏆', name: 'Torneios Mensais',     description: 'Torneios internos e abertos com ranking atualizado e premiações.', price: 'A partir de R$60/inscrição' },
      { icon: '🛍️', name: 'Loja Especializada',   description: 'Raquetes, bolas, roupas e acessórios das melhores marcas do Beach Tennis.', price: 'Preços variados' },
      { icon: '📦', name: 'Planos Mensais',       description: 'Aulas ilimitadas ou pacotes com número fixo de sessões semanais.', price: 'A partir de R$280/mês' },
    ],
  },
  {
    slug: 'studio-viva-pilates',
    type: 'esporte',
    title: 'Studio Viva Pilates',
    tagline: 'Pilates clínico e funcional para o seu corpo e mente — Cidade Jardim',
    description:
      'Estúdio boutique de Pilates com aparelhos Balanced Body e instrutores com formação em Pilates clínico. Turmas reduzidas de no máximo 4 alunos para atenção individualizada. Especialistas em reabilitação, prevenção de lesões, gestantes e atletas. Também oferecemos Yoga, meditação e TRX em ambiente sereno e acolhedor.',
    cover: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1600&auto=format&fit=crop',
    location: 'Cidade Jardim · Barra da Tijuca',
    lat: -23.002, lng: -43.370, rating: 4.7,
    category: 'Yoga & Pilates',
    modalidades: ['Pilates no Aparelho', 'Pilates Clínico', 'Yoga', 'Meditação', 'TRX'],
    infraestrutura: ['Aparelhos Balanced Body', 'Sala de Yoga', 'Turmas de até 4 alunos', 'Estacionamento'],
    horarios: [
      { dias: 'Seg–Sex', horario: '06h30–21h' },
      { dias: 'Sáb', horario: '08h–16h' },
    ],
    services: [
      { icon: '🤸', name: 'Pilates no Aparelho',  description: 'Aulas semi-privadas em grupos de até 4 alunos com Reformer Balanced Body.', price: 'A partir de R$130/aula' },
      { icon: '🧘', name: 'Yoga',                description: 'Hatha, Vinyasa e Yin Yoga com instrutoras certificadas pela Yoga Alliance.', price: 'A partir de R$70/aula' },
      { icon: '🏥', name: 'Pilates Clínico',     description: 'Protocolo terapêutico para reabilitação, dor lombar, escoliose e pós-cirúrgico.', price: 'A partir de R$160/sessão' },
      { icon: '🤰', name: 'Pilates Gestante',    description: 'Programa especial para gestantes com acompanhamento e adaptação de exercícios.', price: 'A partir de R$140/aula' },
      { icon: '🧠', name: 'Meditação & TRX',     description: 'Meditação guiada e treinamento funcional em suspensão para complementar sua rotina.', price: 'A partir de R$80/sessão' },
    ],
  },
];

// ─── Mock Data — LT8: Beleza & Estética ──────────────────────────────────────

export const mockBusinessesBeleza: Business[] = [
  {
    slug: 'espaco-beauty-barra',
    type: 'beleza',
    title: 'Espaço Beauty Barra',
    tagline: 'Salão de beleza premium com atendimento personalizado na Barra da Tijuca',
    description:
      'Salão de beleza completo com equipe especializada em coloração, cortes modernos, tratamentos capilares e estética. Ambiente sofisticado e acolhedor, com produtos das melhores marcas profissionais do mercado. Atendemos tanto clientes que buscam o dia a dia quanto produções especiais para eventos.',
    cover: 'https://images.unsplash.com/photo-1560066984-138daaa0942b?q=80&w=1600&auto=format&fit=crop',
    location: 'Barra da Tijuca · Rio de Janeiro',
    lat: -22.998, lng: -43.362, rating: 4.8,
    category: 'Salão de Beleza',
    horarios: [
      { dias: 'Ter–Sex', horario: '09h–20h' },
      { dias: 'Sáb', horario: '09h–18h' },
    ],
    agendamentoUrl: '#',
    whatsapp: '5521999990001',
    profissionaisBeleza: [
      { nome: 'Gabriela Fonseca', especialidade: 'Coloração & Mechas' },
      { nome: 'Lucas Andrade', especialidade: 'Corte Masculino & Feminino' },
      { nome: 'Priscila Torres', especialidade: 'Tratamentos Capilares' },
    ],
    services: [
      { icon: '✂️', name: 'Corte Feminino', description: 'Corte personalizado com lavagem, secagem e finalização.', price: 'A partir de R$120' },
      { icon: '🎨', name: 'Coloração & Mechas', description: 'Coloração completa, babylights, balayage e ombré hair.', price: 'A partir de R$250' },
      { icon: '💆', name: 'Tratamentos Capilares', description: 'Botox capilar, cronograma, hidratação profunda e reconstrução.', price: 'A partir de R$150' },
      { icon: '💅', name: 'Manicure & Pedicure', description: 'Esmaltação tradicional, em gel, fibra e nail art.', price: 'A partir de R$60' },
      { icon: '✨', name: 'Maquiagem', description: 'Maquiagem social, para eventos e noivas com produtos premium.', price: 'A partir de R$180' },
    ],
  },
  {
    slug: 'spa-sereno-barra',
    type: 'beleza',
    title: 'Spa Sereno',
    tagline: 'Spa e estética corporal com rituais de relaxamento e bem-estar',
    description:
      'Espaço de bem-estar especializado em tratamentos corporais e faciais de alta performance. Combinamos técnicas orientais e ocidentais para oferecer uma experiência completa de relaxamento e rejuvenescimento. Ambiente zen, atendimento exclusivo e produtos importados selecionados.',
    cover: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1600&auto=format&fit=crop',
    location: 'Barra da Tijuca · Rio de Janeiro',
    lat: -22.996, lng: -43.365, rating: 4.9,
    category: 'Spa & Bem-Estar',
    horarios: [
      { dias: 'Seg–Sex', horario: '10h–21h' },
      { dias: 'Sáb', horario: '09h–18h' },
    ],
    agendamentoUrl: '#',
    whatsapp: '5521999990002',
    profissionaisBeleza: [
      { nome: 'Andréa Villela', especialidade: 'Esteticista & Terapeuta Holística' },
      { nome: 'Felipe Moreira', especialidade: 'Massoterapia & Drenagem' },
    ],
    services: [
      { icon: '🌿', name: 'Massagem Relaxante', description: 'Massagem com óleos essenciais e técnicas de relaxamento profundo.', price: 'A partir de R$180' },
      { icon: '💆', name: 'Drenagem Linfática', description: 'Drenagem manual para redução de inchaço e melhora da circulação.', price: 'A partir de R$160' },
      { icon: '✨', name: 'Limpeza de Pele', description: 'Limpeza profunda com extração, esfoliação e máscara personalizada.', price: 'A partir de R$200' },
      { icon: '🔥', name: 'Pedras Quentes', description: 'Massagem com pedras vulcânicas para alívio de tensões musculares.', price: 'R$280' },
      { icon: '🌺', name: 'Ritual Completo', description: 'Experiência de 3 horas com esfoliação, banho e massagem.', price: 'R$480' },
    ],
  },
  {
    slug: 'studio-nails-barra',
    type: 'beleza',
    title: 'Studio Nails & Co.',
    tagline: 'Nail art, alongamentos e estética das mãos e pés com técnica e criatividade',
    description:
      'Estúdio especializado em nail art, alongamento de unhas em fibra e gel, e tratamentos para as mãos e pés. Ambiente moderno e higienizado, com materiais descartáveis e as melhores marcas de esmalte do mercado. Referência em nail art na Barra da Tijuca.',
    cover: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1600&auto=format&fit=crop',
    location: 'Barra da Tijuca · Rio de Janeiro',
    lat: -23.001, lng: -43.360, rating: 4.7,
    category: 'Nail Art & Estética',
    horarios: [
      { dias: 'Ter–Sáb', horario: '09h–19h' },
    ],
    agendamentoUrl: '#',
    whatsapp: '5521999990003',
    profissionaisBeleza: [
      { nome: 'Camila Rocha', especialidade: 'Nail Art & Fibra de Vidro' },
      { nome: 'Ingrid Souza', especialidade: 'Gel & Acrigel' },
    ],
    services: [
      { icon: '💅', name: 'Manicure & Pedicure', description: 'Esmaltação tradicional, francesa e decorada.', price: 'A partir de R$50' },
      { icon: '✨', name: 'Esmaltação em Gel', description: 'Duração de até 3 semanas sem lascar.', price: 'A partir de R$90' },
      { icon: '🌟', name: 'Nail Art', description: 'Designs exclusivos, stamps, encapsulados e press-on personalizados.', price: 'A partir de R$120' },
      { icon: '🔨', name: 'Alongamento em Fibra', description: 'Alongamento natural e resistente com fibra de vidro.', price: 'A partir de R$200' },
      { icon: '💎', name: 'Banho de Parafina', description: 'Tratamento hidratante intensivo para mãos e pés.', price: 'R$60' },
    ],
  },
  {
    slug: 'studio-premium-union-square',
    type: 'beleza',
    title: 'Studio Premium',
    tagline: 'Salão de cabelo e manicure premium no coração do Union Square',
    description:
      'Studio especializado em transformações capilares e cuidados completos das mãos e pés. Equipe de coloristas certificados internacionalmente, ambiente climatizado e produtos europeus de alta performance. Reconhecido como referência em coloração e técnicas avançadas de cabelo no Centro Metropolitano.',
    cover: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1600&auto=format&fit=crop',
    location: 'Union Square · Barra da Tijuca',
    lat: -22.997, lng: -43.361, rating: 4.9,
    category: 'Salão de Beleza',
    horarios: [
      { dias: 'Ter–Sex', horario: '09h–20h' },
      { dias: 'Sáb', horario: '09h–18h' },
    ],
    agendamentoUrl: '#',
    whatsapp: '5521999990004',
    profissionaisBeleza: [
      { nome: 'Renata Oliveira', especialidade: 'Coloração Avançada & Balayage' },
      { nome: 'Thiago Lima', especialidade: 'Corte & Finalização' },
      { nome: 'Juliana Matos', especialidade: 'Manicure & Nail Art' },
    ],
    services: [
      { icon: '✂️', name: 'Corte & Styling', description: 'Corte personalizado + lavagem, hidratação e finalização.', price: 'A partir de R$150' },
      { icon: '🎨', name: 'Balayage & Mechas', description: 'Coloração natural e moderna com técnicas internacionais.', price: 'A partir de R$350' },
      { icon: '💅', name: 'Manicure Premium', description: 'Manicure completa com esmaltação em gel e nail art inclusa.', price: 'A partir de R$80' },
      { icon: '💆', name: 'Tratamento Capilar', description: 'Cronograma capilar personalizado conforme diagnóstico dos fios.', price: 'A partir de R$200' },
      { icon: '✨', name: 'Dia da Noiva', description: 'Produção completa: cabelo, maquiagem e unhas para grandes ocasiões.', price: 'Sob consulta' },
    ],
  },
  {
    slug: 'barbearia-hub-metropolitan',
    type: 'beleza',
    title: 'Barbearia Hub',
    tagline: 'Barbearia moderna com corte masculino, barba e experiência premium no Metropolitan',
    description:
      'Barbearia de alto padrão especializada no universo masculino. Cortes modernos e clássicos, tratamentos de barba com navalha, relaxamento, hidratação e produtos de primeira linha. Ambiente masculino sofisticado com TV, bebidas e atendimento por hora marcada. O lugar certo para o homem moderno da Barra da Tijuca.',
    cover: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1600&auto=format&fit=crop',
    location: 'Metropolitan · Barra da Tijuca',
    lat: -22.999, lng: -43.363, rating: 4.8,
    category: 'Barbearia',
    horarios: [
      { dias: 'Seg–Sex', horario: '09h–21h' },
      { dias: 'Sáb', horario: '09h–19h' },
      { dias: 'Dom', horario: '10h–16h' },
    ],
    agendamentoUrl: '#',
    whatsapp: '5521999990005',
    profissionaisBeleza: [
      { nome: 'Rafael Nunes', especialidade: 'Corte & Barba Clássica' },
      { nome: 'Diego Carvalho', especialidade: 'Fade & Designs' },
    ],
    services: [
      { icon: '✂️', name: 'Corte Masculino', description: 'Corte clássico ou moderno com máquina e tesoura, lavagem inclusa.', price: 'A partir de R$70' },
      { icon: '🪒', name: 'Barba Completa', description: 'Acabamento de barba com navalha, toalha quente e balm hidratante.', price: 'A partir de R$55' },
      { icon: '⚡', name: 'Corte + Barba', description: 'Combo completo com desconto especial.', price: 'A partir de R$110' },
      { icon: '💆', name: 'Relaxamento Capilar', description: 'Tratamento antifrizz e alisamento leve para cabelos masculinos.', price: 'A partir de R$120' },
      { icon: '🌿', name: 'Hidratação & Finalização', description: 'Máscara hidratante profissional com secagem e styling.', price: 'A partir de R$80' },
    ],
  },
];

export function getBusiness(slug: string): Business | undefined {
  return [
    ...mockBusinesses,
    ...mockBusinessesB2B,
    ...mockBusinessesTec,
    ...mockBusinessesGastro,
    ...mockBusinessesSaude,
    ...mockBusinessesEsporte,
    ...mockBusinessesBeleza,
  ].find((b) => b.slug === slug);
}

// ─── BusinessCardProps — Template Interface para o Componente Astro de Card ───
//
// TODO: WP — Esta interface representa os dados que virão do WordPress REST API
// quando os listings forem CPTs (Custom Post Types) gerenciados pelo ACF.
// Campos marcados com "// WP:" indicam o mapeamento para a API do WP.

export interface BusinessCardLocation {
  edificio: string;       // WP: taxonomy 'empreendimento' (term name)
  bloco?: string;         // WP: acf.bloco
  sala?: string;          // WP: acf.sala_numero
  reference?: string;     // WP: acf.referencia_localizacao
}

export interface BusinessCardProps {
  title: string;          // WP: post.title.rendered
  slogan: string;         // WP: acf.tagline || post.excerpt.rendered (stripped)
  category: string[];     // WP: post._embedded['wp:term'][0] → taxonomy 'listing_category'
  location: BusinessCardLocation;
  image: string;          // WP: post._embedded['wp:featuredmedia'][0].source_url
  verified: boolean;      // WP: acf.verified (true/false toggle field)
  tags: string[];         // WP: post._embedded['wp:term'][1] → taxonomy 'post_tag'
}

// ─── Dados estáticos — validação de layout antes da integração WP ────────────

// TODO: WP — substituir por: GET /wp-json/wp/v2/listing?type=digital&_embed&per_page=12
export const exampleAgencia: BusinessCardProps = {
  title: 'Orbital Agency',
  slogan: 'Marketing digital que converte no Centro Metropolitano',
  category: ['Agências Digitais', 'Marketing Digital'],
  location: {
    edificio: 'Worldwide Offices',
    bloco: 'Torre A',
    sala: '1204',
    reference: 'Barra da Tijuca, Rio de Janeiro',
  },
  image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800',
  verified: true,
  tags: ['Meta Ads', 'Google Ads', 'SEO', 'Branding'],
};

// TODO: WP — substituir por: GET /wp-json/wp/v2/listing?type=servicos-profissionais&_embed&per_page=12
export const exampleClinica: BusinessCardProps = {
  title: 'Contábil Soluções',
  slogan: 'Contabilidade e planejamento tributário para PMEs na Barra',
  category: ['Profissionais B2B', 'Contabilidade'],
  location: {
    edificio: 'Metropolitan',
    sala: '803',
    reference: 'Barra da Tijuca, Rio de Janeiro',
  },
  image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800',
  verified: true,
  tags: ['Contabilidade', 'Tributos', 'BPO Financeiro', 'Folha de Pagamento'],
};

// TODO: WP — substituir por: GET /wp-json/wp/v2/listing?type=gastronomia&_embed&per_page=12
export const exampleGastro: BusinessCardProps = {
  title: 'Barra Grill',
  slogan: 'Cortes premium e churrasco artesanal na Barra da Tijuca',
  category: ['Gastronomia', 'Restaurantes & Grills'],
  location: {
    edificio: 'Rio2 Shopping',
    reference: 'Barra da Tijuca, Rio de Janeiro',
  },
  image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800',
  verified: true,
  tags: ['Churrasco', 'Carnes Nobres', 'Eventos Corporativos', 'Delivery'],
};
