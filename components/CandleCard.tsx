"use client";

import { motion } from "framer-motion";
import { getCandleById, candlePercentRemaining, candleExpiresAt } from "@/lib/candles-data";

interface CandleCardProps {
  nome: string;
  cidade: string;
  estado: string;
  cor: string;
  createdAt: string;
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
      <div className="relative h-16 flex flex-col items-center justify-end">
        {/* Chama delicada, tremulando */}
        <div
          className="relative z-10"
          style={{
            width: 8,
            height: 14,
            marginBottom: -2,
            borderRadius: "50% 50% 50% 50% / 65% 65% 35% 35%",
            background: "radial-gradient(ellipse at 50% 30%, #FFF9E0 0%, #FFD966 35%, #FF9D2E 70%, #E8631A 100%)",
            boxShadow: "0 0 10px 3px rgba(255,180,60,0.6)",
            animation: "flameFlicker 1.6s ease-in-out infinite",
            transformOrigin: "50% 100%",
          }}
        />
        {/* Pavio */}
        <div style={{ width: 2, height: 4, background: "#2A1F14" }} />
        {/* Corpo da vela (a altura reflete o % restante) */}
        <div
          className="rounded-t-sm rounded-b-md border border-black/10"
          style={{
            width: 14,
            height: `${Math.max(percent, 8)}%`,
            minHeight: 8,
            background: bg,
            boxShadow: "inset -2px 0 4px rgba(0,0,0,0.12), inset 2px 0 3px rgba(255,255,255,0.25)",
          }}
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
