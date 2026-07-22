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
  { id: "branca", label: "Branca", tipo: "simples", orixa: "Oxalá", hexPrimary: "#FDFDFD", significados: ["paz", "purificação", "proteção espiritual", "harmonia", "fé"], indicacao: "Orações e equilíbrio espiritual." },
  { id: "azul-marinho", label: "Azul Marinho", tipo: "simples", orixa: "Ogum", hexPrimary: "#0B1447", significados: ["força", "proteção", "coragem", "vitória", "defesa espiritual"], indicacao: "Abrir caminhos e vencer dificuldades." },
  { id: "azul-clara", label: "Azul Clara", tipo: "simples", orixa: "Iemanjá / Marinheiros", hexPrimary: "#A9C6F5", significados: ["serenidade", "proteção da família", "equilíbrio emocional", "paz no lar"], indicacao: "Maternidade, proteção familiar e proteção de quem trabalha ou viaja pelo mar." },
  { id: "vermelha", label: "Vermelha", tipo: "simples", orixa: "Ogum / Pombagiras", hexPrimary: "#B91C1C", significados: ["vitalidade", "amor próprio", "paixão saudável", "coragem"], indicacao: "Fortalecer a autoestima, encontrar um amor verdadeiro e pedir harmonia nos relacionamentos.", observacao: "Pedidos amorosos são permitidos, porém não são permitidos pedidos de amarração." },
  { id: "amarela", label: "Amarela", tipo: "simples", orixa: "Oxum / Baianos", hexPrimary: "#F5C542", significados: ["prosperidade", "dinheiro", "abundância", "alegria", "fertilidade"], indicacao: "Crescimento financeiro e prosperidade." },
  { id: "verde", label: "Verde", tipo: "simples", orixa: "Oxóssi / Caboclos", hexPrimary: "#1F7A4D", significados: ["saúde", "prosperidade", "crescimento", "abertura de caminhos"], indicacao: "Recuperação da saúde e conquistas profissionais." },
  { id: "roxa", label: "Roxa", tipo: "simples", orixa: "Nanã", hexPrimary: "#5B3A8E", significados: ["transmutação", "cura espiritual", "sabedoria", "renovação"], indicacao: "Momentos de transformação e fortalecimento interior." },
  { id: "preta", label: "Preta", tipo: "simples", orixa: "Exu", hexPrimary: "#1A1A1A", significados: ["neutralização de más influências", "quebra de energias negativas", "proteção contra inveja e olho gordo", "limpeza espiritual"], indicacao: "Proteção e descarrego espiritual." },
  { id: "rosa", label: "Rosa", tipo: "simples", orixa: "Oxum", hexPrimary: "#F2A9C4", significados: ["amor", "carinho", "harmonia afetiva", "autoamor"], indicacao: "Fortalecer relações saudáveis e a autoestima." },
  { id: "laranja", label: "Laranja", tipo: "simples", orixa: "Iansã / Corrente dos Ciganos", hexPrimary: "#E8791A", significados: ["ânimo", "criatividade", "movimento", "mudanças positivas"], indicacao: "Sair da estagnação, renovar a energia e pedidos à corrente cigana." },
  { id: "marrom", label: "Marrom", tipo: "simples", orixa: "Xangô / Boiadeiros", hexPrimary: "#6B4423", significados: ["justiça", "força", "equilíbrio", "trabalho no campo", "proteção rural"], indicacao: "Justiça, equilíbrio e proteção para quem trabalha com a terra e os animais." },
  { id: "dourada", label: "Dourada", tipo: "simples", orixa: "Exu do Ouro / Pombagira Rosa do Ouro", hexPrimary: "#D4AF6A", significados: ["prosperidade material"
