import BaralhoCigano from "@/components/BaralhoCigano";
import "@/components/baralho-cigano.css";

export const metadata = {
  title: "Mensagem do Baralho Cigano | Altar Virtual",
  description: "Escolha três cartas do baralho cigano e receba sua mensagem.",
};

export default function PaginaBaralhoCigano() {
  return <BaralhoCigano />;
}
