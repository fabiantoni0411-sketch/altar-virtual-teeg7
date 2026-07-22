export type CandleType = "simples" | "bicolor";

export interface CandleDefinition {
  id: string;
  label: string;
  tipo: CandleType;
  orixa: string;
  hexPrimary: string;
  hexSecondary?: string;
  significados: string[];
  indicacao: string;
  observacao?: string;
}

export const CANDLES: CandleDefinition[] = [
  {
    id: "branca",
    label: "Branca",
    tipo: "simples",
    orixa: "Oxalá",
    hexPrimary: "#FDFDFD",
    significados: ["paz", "purificação", "proteção espiritual", "harmonia", "fé"],
    indicacao: "Orações e equilíbrio espiritual.",
  },
  {
    id: "azul-marinho",
    label: "Azul Marinho",
    tipo: "simples",
    orixa: "Ogum",
    hexPrimary: "#0B1447",
    significados: ["força", "proteção", "coragem", "vitória", "defesa espiritual"],
    indicacao: "Abrir caminhos e vencer dificuldades.",
  },
  {
    id: "azul-clara",
    label: "Azul Clara",
    tipo: "simples",
    orixa: "Iemanjá / Marinheiros",
    hexPrimary: "#A9C6F5",
    significados: ["serenidade", "proteção da família", "equilíbrio emocional", "paz no lar"],
    indicacao: "Maternidade, proteção familiar e proteção de quem trabalha ou viaja pelo mar.",
  },
  {
    id: "vermelha",
    label: "Vermelha",
    tipo: "simples",
    orixa: "Ogum / Pombagiras",
    hexPrimary: "#B91C1C",
    significados: ["vitalidade", "amor próprio", "paixão saudável", "coragem"],
    indicacao: "Fortalecer a autoestima, encontrar um amor verdadeiro e pedir harmonia nos relacionamentos.",
    observacao: "Pedidos amorosos são permitidos, porém não são permitidos pedidos de amarração.",
  },
  {
    id: "amarela",
    label: "Amarela",
    tipo: "simples",
    orixa: "Oxum / Baianos",
    hexPrimary: "#F5C542",
    significados: ["prosperidade", "dinheiro", "abundância", "alegria", "fertilidade"],
    indicacao: "Crescimento financeiro e prosperidade.",
  },
  {
    id: "verde",
    label: "Verde",
    tipo: "simples",
    orixa: "Oxóssi / Caboclos",
    hexPrimary: "#1F7A4D",
    significados: ["saúde", "prosperidade", "crescimento", "abertura de caminhos"],
    indicacao: "Recuperação da saúde e conquistas profissionais.",
  },
  {
    id: "roxa",
    label: "Roxa",
    tipo: "simples",
    orixa: "Nanã",
    hexPrimary: "#5B3A8E",
    significados: ["transmutação", "cura espiritual", "sabedoria", "renovação"],
    indicacao: "Momentos de transformação e fortalecimento interior.",
  },
  {
    id: "preta",
    label: "Preta",
    tipo: "simples",
    orixa: "Exu",
    hexPrimary: "#1A1A1A",
    significados: ["neutralização de más influências", "quebra de energias negativas", "proteção contra inveja e olho gordo", "limpeza espiritual"],
    indicacao: "Proteção e descarrego espiritual.",
  },
  {
    id: "rosa",
    label: "Rosa",
    tipo: "simples",
    orixa: "Oxum",
    hexPrimary: "#F2A9C4",
    significados: ["amor", "carinho", "harmonia afetiva", "autoamor"],
    indicacao: "Fortalecer relações saudáveis e a autoestima.",
  },
  {
    id: "laranja",
    label: "Laranja",
    tipo: "simples",
    orixa: "Iansã / Corrente dos Ciganos",
    hexPrimary: "#E8791A",
    significados: ["ânimo", "criatividade", "movimento", "mudanças positivas"],
    indicacao: "Sair da estagnação, renovar a energia e pedidos à corrente cigana.",
  },
  {
    id: "marrom",
    label: "Marrom",
    tipo: "simples",
    orixa: "Xangô / Boiadeiros",
    hexPrimary: "#6B4423",
    significados: ["justiça", "força", "equilíbrio", "trabalho no campo", "proteção rural"],
    indicacao: "Justiça, equilíbrio e proteção para quem trabalha com a terra e os animais.",
  },
  {
    id: "dourada",
    label: "Dourada",
    tipo: "simples",
    orixa: "Exu do Ouro / Pombagira Rosa do Ouro",
    hexPrimary: "#D4AF6A",
    significados: ["prosperidade material", "riqueza", "fartura", "sucesso financeiro", "atração de oportunidades", "brilho pessoal"],
    indicacao: "Crescimento financeiro, reconhecimento profissional e abertura de oportunidades de prosperidade.",
    observacao: "Utilizada para pedidos de prosperidade, abundância, valorização profissional e estabilidade material.",
  },
  {
    id: "amarela-preta",
    label: "Amarela e Preta",
    tipo: "bicolor",
    orixa: "Obaluaê / Omulu",
    hexPrimary: "#F5C542",
    hexSecondary: "#1A1A1A",
    significados: ["cura", "descarrego", "proteção contra doenças", "fortalecimento espiritual"],
    indicacao: "Recuperação da saúde e limpeza espiritual.",
  },
  {
    id: "vermelha-preta",
    label: "Vermelha e Preta",
    tipo: "bicolor",
    orixa: "Exus Mirins",
    hexPrimary: "#B91C1C",
    hexSecondary: "#1A1A1A",
    significados: ["proteção", "quebra de negatividade", "defesa espiritual"],
    indicacao: "Afastar más influências e proteger a família.",
  },
  {
    id: "verde-preta",
    label: "Verde e Preta",
    tipo: "bicolor",
    orixa: "Exus dos Caminhos",
    hexPrimary: "#1F7A4D",
    hexSecondary: "#1A1A1A",
    significados: ["abertura de caminhos", "prosperidade", "movimentação financeira"],
    indicacao: "Trabalho, renda e oportunidades.",
  },
  {
    id: "roxa-preta",
    label: "Roxa e Preta",
    tipo: "bicolor",
    orixa: "Pombagiras da Calunga / Exus da Calunga",
    hexPrimary: "#5B3A8E",
    hexSecondary: "#1A1A1A",
    significados: ["transmutação profunda", "proteção espiritual", "encerramento de ciclos negativos"],
    indicacao: "Libertação emocional e fortalecimento espiritual.",
  },
  {
    id: "azul-marinho-preta",
    label: "Azul-Marinho e Preta",
    tipo: "bicolor",
    orixa: "Ogum e Exus de Demanda",
    hexPrimary: "#0B1447",
    hexSecondary: "#1A1A1A",
    significados: ["quebra de demandas", "destravamento de caminhos", "proteção contra magias negativas"],
    indicacao: "Vencer bloqueios espirituais e abrir caminhos.",
  },
  {
    id: "branca-preta",
    label: "Branca e Preta",
    tipo: "bicolor",
    orixa: "Pretos Velhos",
    hexPrimary: "#FDFDFD",
    hexSecondary: "#1A1A1A",
    significados: ["sabedoria", "cura", "proteção", "acolhimento espiritual"],
    indicacao: "Saúde, paz e orientação espiritual.",
  },
  {
    id: "rosa-azul-clara",
    label: "Rosa e Azul Clara",
    tipo: "bicolor",
    orixa: "Cosme e Damião",
    hexPrimary: "#F2A9C4",
    hexSecondary: "#A9C6F5",
    significados: ["proteção infantil", "alegria", "inocência", "bênçãos para as crianças"],
    indicacao: "Pedidos de proteção para crianças e bênçãos da dupla de santos Cosme e Damião.",
  },
  {
    id: "vermelha-azul-marinho",
    label: "Vermelha e Azul Marinho",
    tipo: "bicolor",
    orixa: "Ogum",
    hexPrimary: "#B91C1C",
    hexSecondary: "#0B1447",
    significados: ["força", "coragem", "vitória em batalhas", "proteção guerreira"],
    indicacao: "Superar obstáculos com força e coragem, sob a proteção de Ogum.",
  },
];

export function getCandleById(id: string) {
  if (!id) return undefined;
  const normalized = id.trim().toLowerCase();
  return CANDLES.find(
    (c) =>
      c.id.toLowerCase() === normalized ||
      c.label.toLowerCase() === normalized
  );
}

export function candlePercentRemaining(createdAt: Date, now: Date = new Date()): number {
  const msPerDay = 1000 * 60 * 60 * 24;
  const daysElapsed = Math.floor((now.getTime() - createdAt.getTime()) / msPerDay);
  const table = [100, 85, 70, 55, 40, 20, 0];
  if (daysElapsed >= 7) return 0;
  return table[daysElapsed] ?? 0;
}

export function candleExpiresAt(createdAt: Date): Date {
  return new Date(createdAt.getTime() + 7 * 24 * 60 * 60 * 1000);
}
