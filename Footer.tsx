"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { supabaseBrowser } from "@/lib/supabase";

// Clique/toque 3x rápido no texto do rodapé abre o login oculto do admin.
// Funciona com mouse (onClick) e touch (onClick também dispara em touch
// em navegadores modernos, então um único handler cobre os dois casos).
const TRIPLE_CLICK_WINDOW_MS = 900;

export default function Footer() {
  const clickTimestamps = useRef<number[]>([]);
  const [showLogin, setShowLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  function handleHiddenTrigger() {
    const now = Date.now();
    clickTimestamps.current = [...clickTimestamps.current, now].filter(
      (t) => now - t < TRIPLE_CLICK_WINDOW_MS
    );
    if (clickTimestamps.current.length >= 3) {
      clickTimestamps.current = [];
      setShowLogin(true);
    }
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setErro(null);
    setLoading(true);
    const supabase = supabaseBrowser();
    const { error } = await supabase.auth.signInWithPassword({ email, password: senha });
    setLoading(false);
    if (error) {
      setErro("E-mail ou senha inválidos.");
      return;
    }
    setShowLogin(false);
    router.push("/admin/dashboard");
  }

  return (
    <footer className="relative bg-altar-navy border-t border-altar-gold/20 text-altar-mist py-10 px-6 mt-16">
      <div className="max-w-3xl mx-auto text-center space-y-3 font-body text-sm">
        <p className="font-display text-lg text-altar-gold">
          Templo Espírita Estrela Guia e Caboclo Sete Pedras do Mar
        </p>
        <p>📍 Rua Júlio Nunes do Rego, 246 — Jardim Roberto — Osasco/SP</p>
        <p>🗓️ Fundado em 31 de agosto de 1996</p>
        <p className="opacity-90 max-w-xl mx-auto">
          Casa inaugurada pelo saudoso Pai Aron e pela Mãe Leila, que conduz os
          trabalhos espirituais até os dias de hoje, mantendo viva a missão
          iniciada por Pai Aron, hoje em memória.
        </p>
        <p className="opacity-90 max-w-xl mx-auto">
          O TEEG7 é uma casa de caridade, acolhimento, fé e assistência
          espiritual, dedicada ao bem, à oração e ao auxílio fraterno a todos
          que buscam luz e amparo.
        </p>
        <div className="flex justify-center gap-4 pt-2">
          <a href="https://instagram.com/teeg7_520" target="_blank" rel="noopener noreferrer" className="hover:text-altar-gold">
            📸 @teeg7_520
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-altar-gold">
            📘 Facebook
          </a>
        </div>

        {/* Acesso oculto ao admin: clique/toque 3x rápido neste texto */}
        <p
          onClick={handleHiddenTrigger}
          className="pt-6 text-altar-gold/90 italic select-none cursor-default"
          aria-hidden="true"
        >
          "Axé, Luz e Paz para todos os irmãos e irmãs."
        </p>
      </div>

      {showLogin && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
          <form
            onSubmit={handleLogin}
            className="bg-altar-royal/95 border border-altar-gold/40 rounded-2xl p-6 w-full max-w-sm shadow-glow space-y-4"
          >
            <h3 className="font-display text-xl text-altar-gold text-center">
              Acesso Administrativo
            </h3>
            <input
              type="email"
              required
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg bg-altar-navy/60 border border-altar-gold/30 px-3 py-2 text-altar-white placeholder:text-altar-mist/50 focus:outline-none focus:ring-2 focus:ring-altar-gold"
            />
            <input
              type="password"
              required
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="w-full rounded-lg bg-altar-navy/60 border border-altar-gold/30 px-3 py-2 text-altar-white placeholder:text-altar-mist/50 focus:outline-none focus:ring-2 focus:ring-altar-gold"
            />
            {erro && <p className="text-red-300 text-sm text-center">{erro}</p>}
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setShowLogin(false)}
                className="flex-1 rounded-lg border border-altar-gold/40 py-2 text-altar-mist"
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={loading}
                className="flex-1 rounded-lg bg-gold-shine py-2 font-semibold text-altar-navy disabled:opacity-60"
              >
                {loading ? "Entrando..." : "Entrar"}
              </button>
            </div>
          </form>
        </div>
      )}
    </footer>
  );
}
