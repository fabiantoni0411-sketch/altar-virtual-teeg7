"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { cartas, temas, montarLeitura, CartaCigana, Tema } from "@/lib/baralhoCiganoData";

// Embaralha um array sem alterar o original
function embaralhar<T>(arr: T[]): T[] {
  const copia = [...arr];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

export default function BaralhoCigano() {
  const [ordem, setOrdem] = useState<number[]>(() => embaralhar(cartas.map((c) => c.id)));
  const [escolhidas, setEscolhidas] = useState<number[]>([]);
  const [temasEscolhidos, setTemasEscolhidos] = useState<Tema[]>([]);
  const [resumoGeral, setResumoGeral] = useState(false);
  const [revelado, setRevelado] = useState(false);
  const [leitura, setLeitura] = useState<string>("");

  const cartasEscolhidas = useMemo(
    () => escolhidas.map((id) => cartas.find((c) => c.id === id)!) as CartaCigana[],
    [escolhidas]
  );

  function escolherCarta(id: number) {
    if (escolhidas.includes(id) || escolhidas.length >= 3) return;
    setEscolhidas([...escolhidas, id]);
  }

  function embaralharNovamente() {
    setOrdem(embaralhar(cartas.map((c) => c.id)));
    setEscolhidas([]);
    setRevelado(false);
    setLeitura("");
  }

  function alternarTema(tema: Tema) {
    setResumoGeral(false);
    setTemasEscolhidos((prev) =>
      prev.includes(tema) ? prev.filter((t) => t !== tema) : [...prev, tema]
    );
  }

  function alternarResumoGeral() {
    setTemasEscolhidos([]);
    setResumoGeral((prev) => !prev);
  }

  function revelarMensagem() {
    setRevelado(true);
    setLeitura(montarLeitura(cartasEscolhidas, temasEscolhidos, resumoGeral));
  }

  const totalArco = 150;
  const raio = 340;

  return (
    <section className="baralho-cigano">
      <div className="bc-logo">
        <Image src="/logo-teeg7.png" alt="Templo Espírita Estrela Guia" width={150} height={119} />
      </div>
      <div className="bc-eyebrow">Altar Virtual · TEEG7</div>
      <h1 className="bc-titulo">Mensagem do Baralho Cigano</h1>
      <p className="bc-subtitulo">Escolha o que deseja perguntar e tire três cartas para receber sua mensagem.</p>

      {/* Seleção de temas */}
      <div className="bc-temas">
        <div className="bc-temas-label">Sobre o que você quer saber?</div>
        <div className="bc-temas-grid">
          {temas.map((tema) => (
            <button
              key={tema}
              className={`bc-tema-btn ${temasEscolhidos.includes(tema) ? "ativo" : ""}`}
              onClick={() => alternarTema(tema)}
            >
              {tema}
            </button>
          ))}
          <button className={`bc-tema-btn ${resumoGeral ? "ativo" : ""}`} onClick={alternarResumoGeral}>
            ✦ Resumo Geral
          </button>
        </div>
      </div>

      <div className="bc-toolbar">
        <button className="bc-pill" onClick={embaralharNovamente}>🔀 Embaralhar</button>
        <span className="bc-contador">{escolhidas.length} de 3 cartas escolhidas</span>
      </div>

      {/* Leque com as 36 cartas */}
      <div className="bc-leque">
        {ordem.map((id, i) => {
          const frac = ordem.length === 1 ? 0 : i / (ordem.length - 1) - 0.5;
          const angulo = frac * totalArco;
          const rad = (angulo * Math.PI) / 180;
          const x = raio * Math.sin(rad);
          const y = raio * (1 - Math.cos(rad));
          const escolhida = escolhidas.includes(id);
          return (
            <div
              key={id}
              className={`bc-mini ${escolhida ? "escolhida" : ""}`}
              style={{
                left: `calc(50% + ${x}px)`,
                top: `${y}px`,
                zIndex: i,
                transform: `rotate(${angulo}deg)`,
              }}
              onClick={() => escolherCarta(id)}
            />
          );
        })}
      </div>
      <p className="bc-dica">Toque em <b>3 cartas</b> do leque</p>

      {/* Cartas reveladas */}
      <div className="bc-spread">
        {[0, 1, 2].map((i) => {
          const carta = cartasEscolhidas[i];
          return (
            <div className={`bc-flip ${revelado && carta ? "revelada" : ""}`} key={i}>
              <div className="bc-flip-inner">
                <div className="bc-face bc-back" />
                <div className="bc-face bc-front">
                  {carta && (
                    <>
                      <Image src={carta.arquivo} alt={carta.nome} fill style={{ objectFit: "cover" }} />
                      <div className="bc-nome-tag">{carta.nome}</div>
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <button className="bc-revelar" disabled={escolhidas.length < 3} onClick={revelarMensagem}>
        Revelar Mensagem
      </button>

      {revelado && (
        <div className="bc-leitura">
          <h2>Sua Mensagem</h2>
          <span className="bc-tema-tag">
            {resumoGeral ? "Leitura geral" : temasEscolhidos.length ? `Tema: ${temasEscolhidos.join(", ")}` : ""}
          </span>
          <p>{leitura}</p>
        </div>
      )}

      <div className="bc-rodape">Baralho Cigano · Templo Espírita Estrela Guia e Caboclo 7 Pedras do Mar</div>
      <div className="bc-rodape" style={{ marginTop: 8, opacity: 0.5 }}>Desenvolvido por Fabi Antonio</div>
    </section>
  );
}
