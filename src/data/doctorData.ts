/**
 * Dados institucionais e clínicos do Dr. Bruno Soares Monte
 * CRM: 5809 (PI) | RQE: 4109
 * Fonte: Dados cadastrais, técnicos e comerciais oficiais
 */

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  badge?: string;
  shortDescription: string;
  fullDescription: string;
  indications: string[];
  benefits: string[];
  recovery: string;
  isFlagship?: boolean;
}

export interface TestimonialItem {
  id: string;
  name: string;
  roleOrCity: string;
  rating: number;
  content: string;
  date?: string;
  treatment?: string;
  verified?: boolean;
}

export interface InsuranceItem {
  name: string;
  category: 'Amplo' | 'Nacional' | 'Corporativo' | 'Outros';
}

export const DOCTOR_INFO = {
  fullName: 'Dr. Bruno Soares Monte',
  shortName: 'Dr. Bruno Monte',
  crm: '5809 (PI)',
  rqe: '4109',
  title: 'Ortopedista, Traumatologista e Cirurgião Oncológico Ortopédico',
  phone: '(86) 98820-1011',
  phoneClean: '5586988201011',
  primaryAddress: {
    street: 'Avenida Universitária, 750',
    building: 'Edifício Diamond Center, Torre Medical',
    rooms: 'Salas 1307 e 1308',
    neighborhood: 'Bairro Fátima',
    city: 'Teresina',
    state: 'PI',
    zip: '64049-494',
    googleMapsUrl: 'https://maps.google.com/?q=Avenida+Universitaria+750+Edificio+Diamond+Center+Teresina+PI',
    accessibility: [
      'Entrada principal com rampa acessível e piso tátil',
      'Elevadores amplos e inteligentes de alta velocidade',
      'Estacionamento rotativo no edifício com vagas reservadas para PCD',
      'Banheiros das salas 1307 e 1308 totalmente adaptados para cadeirantes',
    ],
  },
  otherLocations: [
    {
      name: 'Hospital São Marcos',
      description: 'Atuação em procedimentos cirúrgicos complexos de alta densidade técnica.',
      city: 'Teresina - PI',
    },
    {
      name: 'Oncoclínica (Edifício Prime)',
      description: 'Atendimento e acompanhamento oncológico ortopédico multidisciplinar integrado.',
      city: 'Teresina - PI',
    },
  ],
  workingHours: {
    weekdays: 'Segunda a sexta: das 08h às 18h',
    saturday: 'Sábado: das 08h às 12h',
    sunday: 'Domingo: fechado',
  },
  googleProof: {
    rating: 4.9,
    reviewCount: 184,
    yearsInTeresina: 'Mais de 9 anos de atuação em Teresina',
    clinicalVolume: 'Mais de 30 mil pacientes atendidos',
    surgicalVolume: 'Mais de 3 mil cirurgias realizadas',
  },
  academicBackground: [
    {
      institution: 'Centro Universitário Uninovafapi',
      title: 'Graduação em Medicina',
      description: 'Formação médica com sólida base científica e ética clínica humanizada.',
      tag: 'Graduação',
    },
    {
      institution: 'Conjunto Hospitalar do Mandaqui (São Paulo)',
      title: 'Residência Médica em Ortopedia e Traumatologia',
      description: 'Treinamento cirúrgico intensivo em centro de alta complexidade em trauma ortopédico na capital paulista.',
      tag: 'Residência Médica',
    },
    {
      institution: 'A.C. Camargo Cancer Center (São Paulo)',
      title: 'Especialização em Cirurgia Oncológica Ortopédica',
      description: 'Formação avançada em diagnóstico, biópsias e cirurgia de tumores ósseos e de partes moles na maior referência oncológica do país.',
      tag: 'Especialização de Referência',
    },
    {
      institution: 'Interpain (Ceará)',
      title: 'Capacitação em Medicina Intervencionista da Dor e Medicina Regenerativa',
      description: 'Técnicas minimamente invasivas guiadas por imagem, bloqueios seletivos e radiofrequência para alívio de dor crônica articular e espinhal.',
      tag: 'Medicina Intervencionista',
    },
    {
      institution: 'Uninovafapi Afya',
      title: 'Docente e Coordenador Adjunto do Curso de Medicina',
      description: 'Atuação contínua no ensino médico superior e formação de novas gerações de médicos em Teresina.',
      tag: 'Docência Acadêmica',
    },
  ],
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'coluna-endoscopia',
    title: 'Cirurgia e Cuidados com a Coluna',
    category: 'Procedimento Minimamente Invasivo',
    badge: 'Carro-Chefe',
    isFlagship: true,
    shortDescription: 'Tratamento de hérnia de disco por endoscopia de coluna com microincisão de 1 cm, preservação muscular e alta no mesmo dia.',
    fullDescription: 'Abordagem cirúrgica moderna que substitui as grandes incisões tradicionais. Utilizando uma câmera de alta definição através de uma incisão milimétrica (apenas 1 cm), o Dr. Bruno Monte realiza a descompressão direta da raiz nervosa e a ressecção precisa da hérnia discal. Também abrange tratamento de fraturas vertebrais e artrodese com tecnologia de ponta.',
    indications: [
      'Hérnia de disco lombar ou cervical com dor ciática',
      'Estenose do canal vertebral',
      'Fraturas vertebrais por trauma ou osteoporose',
      'Instabilidade da coluna que demanda artrodese',
    ],
    benefits: [
      'Microincisão de aproximadamente 1 cm',
      'Preservação máxima dos músculos e ligamentos da coluna',
      'Alta hospitalar no mesmo dia na imensa maioria dos casos',
      'Retorno substancialmente acelerado ao trabalho e rotina',
      'Mínima dor pós-operatória e baixo índice de sangramento',
    ],
    recovery: 'Alta hospitalar em poucas horas; deambulação no mesmo dia da cirurgia.',
  },
  {
    id: 'oncologia-ortopedica',
    title: 'Oncologia Ortopédica',
    category: 'Especialização Cirúrgica de Alta Complexidade',
    badge: 'Referência A.C. Camargo',
    shortDescription: 'Biópsias precisas, diagnóstico precoce e tratamento cirúrgico especializado de tumores ósseos primários, lesões de partes moles e metástases na coluna.',
    fullDescription: 'Com formação especializada no renomado A.C. Camargo Cancer Center em São Paulo, o Dr. Bruno Monte conduz o plano terapêutico completo para tumores do aparelho locomotor. Realiza biópsias guiadas, ressecções oncológicas com margem de segurança e cirurgias de preservação de membro com reconstruções funcionais avançadas.',
    indications: [
      'Investigação de nódulos ou massas musculares e ósseas',
      'Tumores ósseos benignos e malignos (ex: osteossarcoma, condrossarcoma)',
      'Tumores de partes moles e sarcomas musculares',
      'Metástases na coluna vertebral ou ossos longos',
    ],
    benefits: [
      'Técnicas modernas de preservação e salvamento de membros',
      'Biópsias planejadas respeitando os rigorosos corredores oncológicos',
      'Integração com equipe oncológica multidisciplinar',
      'Prevenção de fraturas patológicas na coluna e membros',
    ],
    recovery: 'Acompanhamento pós-operatório rigoroso e individualizado com foco em reabilitação e qualidade de vida.',
  },
  {
    id: 'tratamento-dor-cronica',
    title: 'Tratamento da Dor Crônica',
    category: 'Medicina Intervencionista da Dor',
    badge: 'Procedimentos Guiados por Imagem',
    shortDescription: 'Bloqueios nervosos, infiltrações articulares e radiofrequência guiada por imagem para alívio duradouro de dores crônicas incapacitantes.',
    fullDescription: 'Tratamentos intervencionistas indicados para pacientes que convivem com dores refratárias na coluna, ombro, quadril ou joelhos e que buscam alternativas sem cirurgias abertas agressivas. Todos os procedimentos são guiados em tempo real por escopia radiológica ou ultrassonografia.',
    indications: [
      'Dor lombar e cervical crônica (lombalgias e cervicalgias)',
      'Dor facetária na coluna e dor sacroilíaca',
      'Neuralgias periféricas e dor neuropática pós-herpética',
      'Tendinopatias e bursites refratárias ao tratamento clínico',
    ],
    benefits: [
      'Procedimentos ambulatoriais sem necessidade de internação prolongada',
      'Guiados por ultrassom ou radioscopia para máxima precisão anatômica',
      'Redução expressiva na necessidade de analgésicos e anti-inflamatórios orais',
      'Melhora direta na mobilidade física e sono do paciente',
    ],
    recovery: 'Procedimento rápido com retorno para casa logo após o período de observação.',
  },
  {
    id: 'artrose-desgaste',
    title: 'Artrose e Desgaste Articular',
    category: 'Cirurgia Reconstrutiva e Medicina Regenerativa',
    shortDescription: 'Colocação de prótese (artroplastia) de joelho, quadril e ombro, aliada a terapias biológicas regenerativas para preservar a articulação.',
    fullDescription: 'Manejo completo do desgaste da cartilagem. Desde abordagens conservadoras com viscossuplementação com ácido hialurônico de alto peso molecular até artroplastias totais e parciais com implantes modernos, restabelecendo o alinhamento mecânico e a independência de movimento.',
    indications: [
      'Artrose severa de joelho (gonartrose)',
      'Desgaste e necrose na cabeça do fêmur (coxartrose)',
      'Artrose glenoumeral no ombro',
      'Rigidez e perda progressiva de mobilidade articular',
    ],
    benefits: [
      'Alívio efetivo da dor incapacitante ao caminhar ou repousar',
      'Correção de deformidades articulares progressivas',
      'Uso de próteses consagradas internacionalmente de alta durabilidade',
      'Protocolos de reabilitação motora precoce',
    ],
    recovery: 'Início da fisioterapia motora precoce para recuperação gradual da amplitude e marcha.',
  },
  {
    id: 'traumatologia-geral',
    title: 'Traumatologia Geral e Fraturas',
    category: 'Cirurgia Ortopédica Traumatológica',
    shortDescription: 'Diagnóstico rápido e fixação rígida de fraturas ósseas em membros superiores e inferiores com materiais de osteossíntese avançados.',
    fullDescription: 'Atendimento a traumas, quedas, acidentes e lesões esportivas. Formado no Conjunto Hospitalar do Mandaqui — referência paulista em politrauma —, o Dr. Bruno realiza a redução e estabilização de fraturas em clavícula, úmero, rádio, punho, fêmur, tíbia e tornozelo.',
    indications: [
      'Fraturas expostas e fechadas em membros superiores e inferiores',
      'Fraturas articulares complexas que exigem reconstrução anatômica',
      'Lesões ligamentares e luxações agudas',
      'Pseudartroses (fraturas que não consolidaram adequadamente)',
    ],
    benefits: [
      'Estabilização anatômica com placas e hastes bloqueadas de última geração',
      'Redução do tempo de imobilização com gesso tradicional',
      'Prevenção de consolidações viciosas e perda funcional',
      'Retorno seguro às atividades diárias e esportivas',
    ],
    recovery: 'Planejamento de mobilização articular precoce supervisionada pela equipe.',
  },
];

export const INSURANCE_LIST: string[] = [
  'Bradesco Saúde',
  'SulAmérica',
  'Saúde Caixa',
  'Cassi',
  'Camed Saúde',
  'Geap Saúde',
  'Assefaz',
  'Fusex',
  'Marinha do Brasil',
  'Codevasf',
  'Fachesf',
  'Gama Saúde',
  'Medi Service',
  'Plan Assiste',
  'Porto Saúde',
  'Postal Saúde',
  'Pro-Social',
  'Sepaco Saúde',
  'Telos',
  'Vale (CVRD)',
  'Consultas Particulares (com emissão de recibo para reembolso)',
];

export const INITIAL_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'dep-1',
    name: 'Richardson Luis',
    roleOrCity: 'Paciente Ortopédico',
    rating: 5,
    treatment: 'Cirurgia Oncológica Ortopédica',
    content: 'Médico com experiência de longa data no AC Camargo, transmite total confiança técnica. Em um momento tão delicado de diagnóstico, ter um cirurgião dessa estirpe em Teresina fez toda a diferença para o tratamento.',
    date: 'Avaliação verificada',
    verified: true,
  },
  {
    id: 'dep-2',
    name: 'Livia Sales',
    roleOrCity: 'Fortaleza - CE (Veio para consulta em Teresina)',
    rating: 5,
    treatment: 'Tratamento da Dor e Coluna',
    content: 'Viajei com minha mãe de Fortaleza até Teresina para consulta com o Dr. Bruno. Destaco a escuta atenta, o acolhimento humano e o alívio rápido das dores que ela sentia há meses. Valeu cada quilômetro percorrido.',
    date: 'Avaliação verificada',
    verified: true,
  },
  {
    id: 'dep-3',
    name: 'Maria Paixão',
    roleOrCity: 'Teresina - PI',
    rating: 5,
    treatment: 'Cirurgia de Coluna & Reabilitação',
    content: 'Destaco o suporte cirúrgico atencioso e o acompanhamento médico pós-operatório humanizado durante meses de reabilitação. O Dr. Bruno sempre foi muito presente, esclarecedor e dedicado.',
    date: 'Avaliação verificada',
    verified: true,
  },
];

export const FAQ_ITEMS = [
  {
    question: 'Como funciona a cirurgia de coluna por endoscopia e quais as vantagens?',
    answer: 'A cirurgia endoscópica da coluna é um procedimento minimamente invasivo executado através de uma incisão milimétrica (cerca de 1 cm). Uma microcâmera de alta definição e instrumentos de precisão são introduzidos sem necessidade de cortar a musculatura paravertebral. A hérnia de disco é removida diretamente na origem do problema. Como o dano tecidual é mínimo, o sangramento é insignificante e a grande maioria dos pacientes recebe alta hospitalar no mesmo dia.',
  },
  {
    question: 'O Dr. Bruno Monte atende pelo meu plano de saúde ou apenas particular?',
    answer: 'O Dr. Bruno Monte atende uma ampla rede de convênios médicos em Teresina, incluindo: Bradesco Saúde, SulAmérica, Saúde Caixa, Cassi, Camed Saúde, Geap Saúde, Assefaz, Fusex, Marinha do Brasil, Codevasf, Fachesf, Gama Saúde, Medi Service, Plan Assiste, Porto Saúde, Postal Saúde, Pro-Social, Sepaco Saúde, Telos e Vale (CVRD). Também realiza atendimentos particulares, com emissão de nota e relatório para solicitação de reembolso junto à sua operadora.',
  },
  {
    question: 'O que é a Cirurgia Oncológica Ortopédica e quando ela é indicada?',
    answer: 'É a subespecialidade médica focada no diagnóstico por imagem, realização de biópsias ósseas criteriosas e tratamento cirúrgico de tumores que acometem o esqueleto e tecidos vizinhos. É indicada para pacientes com lesões ósseas suspeitas, tumores primários (benignos ou malignos), sarcomas de partes moles ou metástases na coluna e ossos longos. O Dr. Bruno possui formação de excelência no A.C. Camargo Cancer Center em São Paulo.',
  },
  {
    question: 'O consultório no Edifício Diamond Center conta com acessibilidade para pessoas com dificuldade de locomoção?',
    answer: 'Sim, a acessibilidade é prioritária. O Edifício Diamond Center possui entrada nivelada com rampa de acesso suave, elevadores inteligentes e modernos, vagas de estacionamento exclusivas para idosos e pessoas com deficiência, além de banheiros adaptados para cadeirantes nas salas 1307 e 1308 da Torre Medical.',
  },
  {
    question: 'O que devo levar no dia da primeira consulta ortopédica?',
    answer: 'Recomendamos trazer todos os exames de imagem anteriores que você possua (como ressonâncias magnéticas, tomografias computadorizadas e radiografias), exames de sangue recentes, a lista dos medicamentos de uso habitual e a carteirinha do seu convênio médico juntamente com um documento oficial com foto.',
  },
  {
    question: 'Em quais hospitais de Teresina o Dr. Bruno realiza procedimentos cirúrgicos?',
    answer: 'Além do atendimento clínico em seu consultório no Diamond Center (Torre Medical), o Dr. Bruno Monte atua e opera em centros hospitalares de referência em Teresina, como o Hospital São Marcos e a Oncoclínica (Edifício Prime), garantindo infraestrutura completa de centro cirúrgico e UTI quando necessário.',
  },
  {
    question: 'Como agendar uma consulta pelo WhatsApp?',
    answer: 'Basta clicar em qualquer um dos botões de agendamento do site ou enviar uma mensagem direta para o número comercial (86) 98820-1011. A equipe de atendimento responderá prontamente com os horários disponíveis e instruções personalizadas.',
  },
];

export const BENEFITS_LIST = [
  {
    title: 'Endoscopia com Alta no Mesmo Dia',
    description: 'Cirurgia de hérnia de disco com incisão de 1 cm, preservando os músculos e permitindo alta hospitalar rápida sem internação prolongada.',
    icon: 'Activity',
  },
  {
    title: 'Especialização no A.C. Camargo e Mandaqui (SP)',
    description: 'Formação nos maiores polos de oncologia ortopédica e traumatologia da América Latina, trazendo a Teresina técnicas cirúrgicas de padrão internacional.',
    icon: 'Award',
  },
  {
    title: 'Medicina Intervencionista Guiada por Imagem',
    description: 'Bloqueios nervosos e radiofrequência guiados em tempo real por ultrassom e radioscopia para precisão milimétrica no alívio da dor crônica.',
    icon: 'Crosshair',
  },
  {
    title: 'Acessibilidade Plena nas Instalações',
    description: 'Consultório na Torre Medical do Diamond Center equipado com rampas, elevadores de alta capacidade, estacionamento e banheiros adaptados.',
    icon: 'Accessibility',
  },
  {
    title: 'Mais de 19 Convênios Atendidos',
    description: 'Ampla cobertura de planos de saúde respeitados nacionalmente, além de modelo de consulta particular com suporte para reembolso.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Acompanhamento Pós-Operatório Próximo',
    description: 'Cuidado contínuo desde o pré-operatório até a completa reabilitação funcional, garantindo tranquilidade e segurança ao paciente e à família.',
    icon: 'HeartHandshake',
  },
];
