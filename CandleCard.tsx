"use client";

import { motion } from "framer-motion";
import { getCandleById, candlePercentRemaining, candleExpiresAt } from "@/lib/candles-data";

interface CandleCardProps {
  nome: string;
  cidade: string;
  estado: string;
  cor: string;
  createdAt: string; // ISO
}

export default function CandleCard({ nome, cidade, estado, cor, createdAt }: CandleCardProps) {
  const def = getCandleById(cor);
  const created = new Date(createdAt);
  const percent = candlePercentRemaining(created);
  const expires = candleExpiresAt(created);
  const diasRestantes = Math.max(
    0,
    Math.ceil((expires.getTime() - Date.now()) / (1000 * 60 * 60 * 24))
  );

  const bg = def?.tipo === "bicolor"
    ? `linear-gradient(180deg, ${def.hexPrimary} 50%, ${def.hexSecondary} 50%)`
    : def?.hexPrimary ?? "#FDFDFD";

  return (
    <div className="rounded-2xl bg-altar-royal/40 border border-altar-gold/20 p-4 flex flex-col items-center gap-3 shadow-glow backdrop-blur-sm">
      <div className="relative h-24 flex items-end">
        {/* Chama */}
        <motion.div
          className="absolute -top-6 left-1/2 -translate-x-1/2 w-3 h-6 rounded-full bg-gradient-to-t from-orange-500 via-yellow-300 to-yellow-100 shadow-candle animate-flicker"
        />
        {/* Corpo da vela — altura reflete o percentual restante */}
        <div
          className="w-6 rounded-t-md rounded-b-sm border border-black/10"
          style={{ height: `${Math.max(percent, 6)}%`, background: bg, minHeight: 8 }}
        />
      </div>

      <div className="text-center">
        <p className="font-display text-lg text-altar-white">{nome}</p>
        <p className="text-xs text-altar-mist/70">{cidade}/{estado}</p>
        <p className="text-xs text-altar-gold mt-1">{def?.label ?? cor} · {def?.orixa}</p>
      </div>

      <div className="w-full">
        <div className="h-1.5 w-full rounded-full bg-altar-navy/60 overflow-hidden">
          <div
            className="h-full bg-gold-shine transition-all"
            style={{ width: `${percent}%` }}
          />
        </div>
        <p className="text-[11px] text-altar-mist/60 text-center mt-1">
          {percent}% · {diasRestantes > 0 ? `${diasRestantes} dia(s) restante(s)` : "apagando"}
        </p>
      </div>
    </div>
  );
}
