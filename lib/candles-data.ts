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
  imagens?: string[];
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
    imagens: ["/Oxalá.jpeg"],
  },
  {
    id: "azul-marinho",
    label: "Azul Marinho",
    tipo: "simples",
    orixa: "Ogum",
    hexPrimary: "#0B1447",
    significados: ["força", "proteção", "coragem", "vitória", "defesa espiritual"],
    indicacao: "Abrir caminhos e vencer dificuldades.",
    imagens: ["/Ogum.jpeg"],
  },
  {
    id: "azul-clara",
    label: "Azul Clara",
    tipo: "simples",
    orixa: "Iemanjá / Marinheiros",
    hexPrimary: "#A9C6F5",
    significados: ["serenidade", "proteção da família", "equilíbrio emocional", "paz no lar"],
    indicacao: "Maternidade, proteção familiar e proteção de quem trabalha ou viaja pelo mar.",
    imagens: ["/Iemanjá.jpeg"],
  },
  {
    id: "vermelha",
    label: "Vermelha",
    tipo: "simples",
    orixa: "Iansã / Pombagiras",
    hexPrimary: "#B91C1C",
    significados: ["vitalidade", "amor próprio", "paixão saudável", "coragem"],
    indicacao: "Fortalecer a autoestima, enc
