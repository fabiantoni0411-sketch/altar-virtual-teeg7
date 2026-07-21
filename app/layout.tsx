import type { Metadata } from "next";
import "./globals.css";
import { StarsBackground } from "@/components/SkyBackground";

export const metadata: Metadata = {
  title: "Altar Virtual — TEEG7",
  description:
    "Templo Espírita Estrela Guia e Caboclo Sete Pedras do Mar — acenda sua vela virtual e deixe seu pedido de oração.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="text-altar-white font-body min-h-screen">
        <StarsBackground />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
