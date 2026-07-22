"use client";

import { useState } from "react";
import { CANDLES, getCandleById } from "@/lib/candles-data";
import { validateName } from "@/lib/content-filter";

const ESTADOS = [
  "AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB",
  "PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO",
];

export default function CandleForm() {
  const [nome, setNome] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [email, setEmail] = useState("");
  const [corId, setCorId] = useState("");
  const [pedido, setPedido] = useState("");
  const [erro, setErro] = useState<string | null>(null);
  const [enviando, setEnviando] = useState(false);
  const [sucesso, setSucesso] = useState(false);

  const corSelecionada = corId ? getCandleById(corId) : undefined;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErro(null);

    const nomeCheck = validateName(nome);
    if (!nomeCheck.valid) {
      setErro(nomeCheck.message!);
      return;
    }
    if (!cidade.trim() || !estado || !corId) {
      setErro("Por favor, preencha todos os campos obrigatórios.");
      return;
    }
    if (!pedido.trim()) {
      setErro("Por favor, escreva seu pedido de oração.");
      return;
    }

    setEnviando(true);
    try {
      const res = await fetch("/api/candles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, cidade, estado, email, corId, pedido }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErro(data.message || "Não foi possível enviar seu pedido. Tente novamente.");
        setEnviando(false);
        return;
      }
      setSucesso(true);
    } catch {
      setErro("Erro de conexão. Tente novamente em instantes.");
    } finally {
      setEnviando(false);
    }
  }

  if (sucesso) {
    return (
      <div className="max-w-md mx-auto text-center bg-altar-royal/40 border border-altar-gold/30 rounded-2xl p-8 shadow-glow">
        <p className="text-3xl mb-3">🕯️✨</p>
        <p className="font-display text-xl text-altar-gold mb-2">Sua vela foi enviada</p>
        <p className="text-altar-mist/90 text-sm">
          Sua vela foi enviada para análise e, após aprovação, ficará visível no
          Altar Virtual do TEEG7. Que a luz divina ilumine seus caminhos. Axé!
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-5">
      <div className="grid gap-4">
        <Field label="Nome completo *">
          <input
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Seu nome e sobrenome"
            className={inputClass}
          />
        </Field>

        <div className="grid grid-cols-2 gap-3">
          <Field label="Cidade *">
            <input value={cidade} onChange={(e) => setCidade(e.target.value)} className={inputClass} />
          </Field>
          <Field label="Estado (UF) *">
            <select value={estado} onChange={(e) => setEstado(e.target.value)} className={inputClass}>
              <option value="">UF</option>
              {ESTADOS.map((uf) => (
                <option key={uf} value={uf}>{uf}</option>
              ))}
            </select>
          </Field>
        </div>

        <Field label="E-mail (opcional)">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seuemail@exemplo.com"
            className={inputClass}
          />
        </Field>

        <Field label="Cor da vela *">
          <select value={corId} onChange={(e) => setCorId(e.target.value)} className={inputClass}>
            <option value="">Escolha a cor</option>
            {CANDLES.map((c) => (
              <option key={c.id} value={c.id}>{c.label}</option>
            ))}
          </select>
        </Field>

        {corSelecionada && (
          <div className="rounded-xl bg-altar-navy/50 border border-altar-gold/20 p-4 text-sm text-altar-mist space-y-1">
            <p className="text-altar-gold font-semibold">{corSelecionada.label} — {corSelecionada.orixa}</p>
            <p><span className="opacity-70">Significados:</span> {corSelecionada.significados.join(", ")}</p>
            <p><span className="opacity-70">Indicado para:</span> {corSelecionada.indicacao}</p>
            {corSelecionada.observacao && (
              <p className="text-xs italic opacity-80">⚠️ {corSelecionada.observacao}</p>
            )}
          </div>
        )}

        <Field label="Pedido / oração *">
          <textarea
            value={pedido}
            onChange={(e) => setPedido(e.target.value)}
            rows={5}
            placeholder="Escreva seu pedido com clareza e respeito..."
            className={inputClass}
          />
        </Field>
      </div>

      {erro && (
        <p className="text-sm text-red-300 bg-red-900/20 border border-red-400/30 rounded-lg px-3 py-2">
          {erro}
        </p>
      )}

      <button
        type="submit"
        disabled={enviando}
        className="w-full rounded-xl bg-gold-shine text-altar-navy font-semibold py-3 shadow-glow disabled:opacity-60"
      >
        {enviando ? "Enviando..." : "🕯️ Acender vela"}
      </button>
    </form>
  );
}

const inputClass =
  "w-full rounded-lg bg-altar-navy/50 border border-altar-gold/25 px-3 py-2 text-altar-white placeholder:text-altar-mist/40 focus:outline-none focus:ring-2 focus:ring-altar-gold text-sm";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block space-y-1">
      <span className="text-xs text-altar-mist/80">{label}</span>
      {children}
    </label>
  );
}
