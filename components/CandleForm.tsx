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
    }
