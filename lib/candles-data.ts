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
