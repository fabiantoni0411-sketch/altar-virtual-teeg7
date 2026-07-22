      import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CandleCard from "@/components/CandleCard";
import { supabaseServer } from "@/lib/supabase-server";
import Link from "next/link";

export const revalidate = 30; // atualiza o mural de velas a cada 30s

export default async function HomePage() {
  const supabase = await supabaseServer();

  const { data: candles } = await supabase
  .from("candles")
  .select("nome, cidade, estado, cor, created_at, pedido")
  .eq("status", "aprovada")
  .order("created_at", { ascending: false })
  .limit(24);

  return (
    <main>
      <Header />

      <section className="max-w-2xl mx-auto px-6 space-y-4 text-center">
        <p className="text-altar-mist/90 leading-relaxed">
          {content?.welcome_text ??
            "Seja bem-vindo(a) ao Altar Virtual do TEEG7. Acenda uma vela e deixe seu pedido de oração."}
        </p>

        <Link
          href="/acender"
          className="inline-block rounded-xl bg-gold-shine text-altar-navy font-semibold px-8 py-3 shadow-glow"
        >
          🕯️ Acender uma vela
        </Link>
      </section>

      <section className="max-w-2xl mx-auto px-6 mt-12">
        <div className="rounded-2xl bg-altar-royal/30 border border-altar-gold/20 p-6 text-sm text-altar-mist/90 space-y-2">
          <h2 className="font-display text-xl text-altar-gold mb-2">Regras do Altar</h2>
          <p className="whitespace-pre-line">
            {content?.rules_text ??
              "Não são permitidos pedidos de amarração. Não são permitidos pedidos para causar mal a outras pessoas. Este é um espaço de fé, luz, caridade e oração."}
          </p>
          <p className="pt-2">
            São permitidos pedidos relacionados a: saúde, trabalho, proteção, paz,
            prosperidade, harmonia familiar, evolução espiritual, amor e
            relacionamentos saudáveis, fortalecimento do amor próprio, encontro
            de um amor verdadeiro, e orações pelo bem de pessoas vivas ou
            desencarnadas.
          </p>
          <p className="text-xs italic opacity-80 pt-2">
            Observação: pedidos amorosos são permitidos, desde que voltados para
            relacionamentos saudáveis, amor verdadeiro, harmonia, reconciliação
            respeitosa e fortalecimento do amor próprio. Pedidos de amarração,
            manipulação emocional ou qualquer prática que interfira no
            livre-arbítrio de outra pessoa são proibidos.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 mt-14 pb-10">
        <h2 className="font-display text-2xl text-altar-gold text-center mb-6">
          Velas acesas no Altar
        </h2>
        {candles && candles.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {candles.map((c, i) => (
              <CandleCard
                <CandleCard
  key={i}
  nome={c.nome}
  cidade={c.cidade}
  estado={c.estado}
  cor={c.cor}
  createdAt={c.created_at}
  pedido={c.pedido}
/>
            ))}
          </div>
        ) : (
          <p className="text-center text-altar-mist/60 text-sm">
            Nenhuma vela acesa no momento. Seja o primeiro a levar luz ao altar.
          </p>
        )}
      </section>

      <Footer />
    </main>
  );
}          
