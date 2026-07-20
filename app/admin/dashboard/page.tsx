"use client";

import { useEffect, useState } from "react";
import { supabaseBrowser } from "@/lib/supabase";

type Tab = "pendentes" | "conteudo" | "palavras" | "bloqueados" | "moderacao" | "config" | "relatorios";

export default function AdminDashboard() {
  const [tab, setTab] = useState<Tab>("pendentes");

  return (
    <div className="min-h-screen bg-altar-navy text-altar-white font-body">
      <header className="border-b border-altar-gold/20 px-6 py-4 flex items-center justify-between">
        <h1 className="font-display text-2xl text-altar-gold">Painel — Altar Virtual TEEG7</h1>
        <LogoutButton />
      </header>

      <nav className="flex flex-wrap gap-2 px-6 py-4 border-b border-altar-gold/10">
        {(
          [
            ["pendentes", "Velas pendentes"],
            ["conteudo", "Conteúdo do site"],
            ["palavras", "Palavras bloqueadas"],
            ["bloqueados", "Usuários bloqueados"],
            ["moderacao", "Registro de moderação"],
            ["config", "Configurações"],
            ["relatorios", "Relatórios"],
          ] as [Tab, string][]
        ).map(([id, label]) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className={`px-4 py-2 rounded-lg text-sm ${
              tab === id ? "bg-gold-shine text-altar-navy font-semibold" : "bg-altar-royal/40 text-altar-mist"
            }`}
          >
            {label}
          </button>
        ))}
      </nav>

      <main className="p-6">
        {tab === "pendentes" && <PendingCandles />}
        {tab === "conteudo" && <SiteContentEditor />}
        {tab === "palavras" && <BlockedWordsManager />}
        {tab === "bloqueados" && <BlockedUsersManager />}
        {tab === "moderacao" && <ModerationLog />}
        {tab === "config" && <NotificationSettings />}
        {tab === "relatorios" && <Reports />}
      </main>
    </div>
  );
}

function LogoutButton() {
  const supabase = supabaseBrowser();
  return (
    <button
      onClick={async () => {
        await supabase.auth.signOut();
        window.location.href = "/";
      }}
      className="text-sm text-altar-mist hover:text-altar-gold"
    >
      Sair
    </button>
  );
}

/* ---------------- Velas pendentes ---------------- */
function PendingCandles() {
  const [candles, setCandles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const supabase = supabaseBrowser();

  async function load() {
    setLoading(true);
    const { data } = await supabase
      .from("candles")
      .select("*")
      .eq("status", "pendente")
      .order("created_at", { ascending: false });
    setCandles(data ?? []);
    setLoading(false);
  }

  useEffect(() => {
    load();
  }, []);

  async function updateStatus(id: string, status: "aprovada" | "rejeitada") {
    await supabase.from("candles").update({ status }).eq("id", id);
    await supabase.from("moderation_logs").insert({
      acao: status === "aprovada" ? "aprovado" : "rejeitado",
    });
    load();
  }

  async function remove(id: string) {
    await supabase.from("candles").delete().eq("id", id);
    load();
  }

  if (loading) return <p className="text-altar-mist">Carregando...</p>;
  if (candles.length === 0) return <p className="text-altar-mist">Nenhuma vela pendente. 🙏</p>;

  return (
    <div className="grid gap-4 max-w-3xl">
      {candles.map((c) => (
        <div key={c.id} className="rounded-xl bg-altar-royal/30 border border-altar-gold/20 p-4">
          <div className="flex justify-between items-start gap-4 flex-wrap">
            <div>
              <p className="font-semibold">{c.nome} — {c.cidade}/{c.estado}</p>
              <p className="text-sm text-altar-gold">{c.cor} · {c.orixa}</p>
              <p className="text-sm text-altar-mist/80 mt-1 max-w-md">{c.pedido}</p>
              <p className="text-xs text-altar-mist/50 mt-1">
                {new Date(c.created_at).toLocaleString("pt-BR")}
              </p>
            </div>
            <div className="flex gap-2">
              <button onClick={() => updateStatus(c.id, "aprovada")} className="px-3 py-1.5 rounded-lg bg-green-600/80 text-sm">Aprovar</button>
              <button onClick={() => updateStatus(c.id, "rejeitada")} className="px-3 py-1.5 rounded-lg bg-yellow-700/80 text-sm">Rejeitar</button>
              <button onClick={() => remove(c.id)} className="px-3 py-1.5 rounded-lg bg-red-800/80 text-sm">Excluir</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ---------------- Conteúdo do site ---------------- */
function SiteContentEditor() {
  const [content, setContent] = useState<any>(null);
  const supabase = supabaseBrowser();

  useEffect(() => {
    supabase.from("site_content").select("*").single().then(({ data }) => setContent(data));
  }, []);

  async function save() {
    await supabase.from("site_content").update({
      welcome_text: content.welcome_text,
      rules_text: content.rules_text,
      footer_text: content.footer_text,
      updated_at: new Date().toISOString(),
    }).eq("id", 1);
    alert("Conteúdo atualizado.");
  }

  if (!content) return <p>Carregando...</p>;

  return (
    <div className="max-w-2xl space-y-4">
      <TextAreaField label="Mensagem de boas-vindas" value={content.welcome_text}
        onChange={(v) => setContent({ ...content, welcome_text: v })} />
      <TextAreaField label="Regras do altar" value={content.rules_text}
        onChange={(v) => setContent({ ...content, rules_text: v })} />
      <TextAreaField label="Texto do rodapé" value={content.footer_text}
        onChange={(v) => setContent({ ...content, footer_text: v })} />
      <button onClick={save} className="px-5 py-2 rounded-lg bg-gold-shine text-altar-navy font-semibold">
        Salvar alterações
      </button>
    </div>
  );
}

function TextAreaField({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <label className="block space-y-1">
      <span className="text-sm text-altar-gold">{label}</span>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={4}
        className="w-full rounded-lg bg-altar-royal/30 border border-altar-gold/20 p-3 text-sm"
      />
    </label>
  );
}

/* ---------------- Palavras bloqueadas ---------------- */
function BlockedWordsManager() {
  const [words, setWords] = useState<any[]>([]);
  const [novaPalavra, setNovaPalavra] = useState("");
  const supabase = supabaseBrowser();

  async function load() {
    const { data } = await supabase.from("blocked_words").select("*").order("palavra");
    setWords(data ?? []);
  }
  useEffect(() => { load(); }, []);

  async function add() {
    if (!novaPalavra.trim()) return;
    await supabase.from("blocked_words").insert({ palavra: novaPalavra.trim().toLowerCase() });
    setNovaPalavra("");
    load();
  }
  async function toggle(id: string, ativa: boolean) {
    await supabase.from("blocked_words").update({ ativa: !ativa }).eq("id", id);
    load();
  }
  async function remove(id: string) {
    await supabase.from("blocked_words").delete().eq("id", id);
    load();
  }

  return (
    <div className="max-w-xl space-y-4">
      <div className="flex gap-2">
        <input
          value={novaPalavra}
          onChange={(e) => setNovaPalavra(e.target.value)}
          placeholder="Adicionar palavra/termo bloqueado"
          className="flex-1 rounded-lg bg-altar-royal/30 border border-altar-gold/20 px-3 py-2 text-sm"
        />
        <button onClick={add} className="px-4 py-2 rounded-lg bg-gold-shine text-altar-navy font-semibold text-sm">
          Adicionar
        </button>
      </div>
      <ul className="divide-y divide-altar-gold/10">
        {words.map((w) => (
          <li key={w.id} className="flex items-center justify-between py-2 text-sm">
            <span className={w.ativa ? "" : "opacity-40 line-through"}>{w.palavra}</span>
            <div className="flex gap-2">
              <button onClick={() => toggle(w.id, w.ativa)} className="text-altar-gold text-xs">
                {w.ativa ? "Desativar" : "Ativar"}
              </button>
              <button onClick={() => remove(w.id)} className="text-red-400 text-xs">Remover</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------------- Usuários bloqueados ---------------- */
function BlockedUsersManager() {
  const [list, setList] = useState<any[]>([]);
  const [form, setForm] = useState({ nome: "", email: "", ip: "", motivo: "pedido de amarração" });
  const supabase = supabaseBrowser();

  async function load() {
    const { data } = await supabase.from("blocked_users").select("*").order("blocked_at", { ascending: false });
    setList(data ?? []);
  }
  useEffect(() => { load(); }, []);

  async function add() {
    await supabase.from("blocked_users").insert(form);
    setForm({ nome: "", email: "", ip: "", motivo: "pedido de amarração" });
    load();
  }
  async function remove(id: string) {
    await supabase.from("blocked_users").delete().eq("id", id);
    load();
  }

  return (
    <div className="max-w-2xl space-y-4">
      <div className="grid grid-cols-2 gap-2">
        <input placeholder="Nome" value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} className="rounded-lg bg-altar-royal/30 border border-altar-gold/20 px-3 py-2 text-sm" />
        <input placeholder="E-mail" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="rounded-lg bg-altar-royal/30 border border-altar-gold/20 px-3 py-2 text-sm" />
        <input placeholder="IP" value={form.ip} onChange={(e) => setForm({ ...form, ip: e.target.value })} className="rounded-lg bg-altar-royal/30 border border-altar-gold/20 px-3 py-2 text-sm" />
        <select value={form.motivo} onChange={(e) => setForm({ ...form, motivo: e.target.value })} className="rounded-lg bg-altar-royal/30 border border-altar-gold/20 px-3 py-2 text-sm">
          <option>pedido de amarração</option>
          <option>pedido de mal a terceiros</option>
          <option>uso de palavras ofensivas</option>
          <option>conteúdo inadequado</option>
          <option>spam</option>
          <option>tentativas repetidas de burlar as regras</option>
          <option>outro motivo</option>
        </select>
      </div>
      <button onClick={add} className="px-4 py-2 rounded-lg bg-gold-shine text-altar-navy font-semibold text-sm">
        Bloquear
      </button>

      <ul className="divide-y divide-altar-gold/10 pt-4">
        {list.map((u) => (
          <li key={u.id} className="flex justify-between items-center py-2 text-sm">
            <span>{u.nome || u.email || u.ip} — <span className="text-altar-gold">{u.motivo}</span></span>
            <button onClick={() => remove(u.id)} className="text-red-400 text-xs">Desbloquear</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------------- Registro de moderação ---------------- */
function ModerationLog() {
  const [logs, setLogs] = useState<any[]>([]);
  const supabase = supabaseBrowser();
  useEffect(() => {
    supabase.from("moderation_logs").select("*").order("created_at", { ascending: false }).limit(100)
      .then(({ data }) => setLogs(data ?? []));
  }, []);

  return (
    <div className="max-w-3xl overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="text-altar-gold text-left">
          <tr><th className="py-2">Data</th><th>Nome</th><th>Ação</th><th>Motivo</th></tr>
        </thead>
        <tbody>
          {logs.map((l) => (
            <tr key={l.id} className="border-t border-altar-gold/10">
              <td className="py-2">{new Date(l.created_at).toLocaleString("pt-BR")}</td>
              <td>{l.nome ?? "—"}</td>
              <td>{l.acao}</td>
              <td>{l.motivo ?? "—"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ---------------- Configurações ---------------- */
function NotificationSettings() {
  const [settings, setSettings] = useState<any>(null);
  const supabase = supabaseBrowser();

  useEffect(() => {
    supabase.from("notification_settings").select("*").single().then(({ data }) => setSettings(data));
  }, []);

  async function save() {
    await supabase.from("notification_settings").update(settings).eq("id", 1);
    alert("Configurações salvas.");
  }

  async function sendTest() {
    await fetch("/api/whatsapp-test", { method: "POST" });
    alert("Teste enviado (verifique o WhatsApp configurado).");
  }

  if (!settings) return <p>Carregando...</p>;

  return (
    <div className="max-w-lg space-y-4 text-sm">
      <label className="block space-y-1">
        <span className="text-altar-gold">E-mail principal</span>
        <input value={settings.email_principal ?? ""} onChange={(e) => setSettings({ ...settings, email_principal: e.target.value })}
          className="w-full rounded-lg bg-altar-royal/30 border border-altar-gold/20 px-3 py-2" />
      </label>
      <label className="block space-y-1">
        <span className="text-altar-gold">Número do WhatsApp</span>
        <input value={settings.whatsapp_numero ?? ""} onChange={(e) => setSettings({ ...settings, whatsapp_numero: e.target.value })}
          className="w-full rounded-lg bg-altar-royal/30 border border-altar-gold/20 px-3 py-2" />
      </label>
      <label className="flex items-center gap-2">
        <input type="checkbox" checked={settings.email_ativo} onChange={(e) => setSettings({ ...settings, email_ativo: e.target.checked })} />
        E-mail ativo
      </label>
      <label className="flex items-center gap-2">
        <input type="checkbox" checked={settings.whatsapp_ativo} onChange={(e) => setSettings({ ...settings, whatsapp_ativo: e.target.checked })} />
        WhatsApp ativo
      </label>
      <div className="flex gap-3">
        <button onClick={save} className="px-4 py-2 rounded-lg bg-gold-shine text-altar-navy font-semibold">Salvar</button>
        <button onClick={sendTest} className="px-4 py-2 rounded-lg border border-altar-gold/40">Enviar teste WhatsApp</button>
      </div>
    </div>
  );
}

/* ---------------- Relatórios ---------------- */
function Reports() {
  const [stats, setStats] = useState<any>(null);
  const supabase = supabaseBrowser();

  useEffect(() => {
    (async () => {
      const [{ count: total }, { count: ativas }, { count: encerradas }, { count: pendentes }] = await Promise.all([
        supabase.from("candles").select("*", { count: "exact", head: true }),
        supabase.from("candles").select("*", { count: "exact", head: true }).eq("status", "aprovada"),
        supabase.from("candles").select("*", { count: "exact", head: true }).eq("status", "encerrada"),
        supabase.from("candles").select("*", { count: "exact", head: true }).eq("status", "pendente"),
      ]);
      setStats({ total, ativas, encerradas, pendentes });
    })();
  }, []);

  if (!stats) return <p>Carregando...</p>;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl">
      <StatCard label="Total de velas" value={stats.total} />
      <StatCard label="Ativas" value={stats.ativas} />
      <StatCard label="Encerradas" value={stats.encerradas} />
      <StatCard label="Pendentes" value={stats.pendentes} />
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-xl bg-altar-royal/30 border border-altar-gold/20 p-4 text-center">
      <p className="text-2xl font-display text-altar-gold">{value ?? 0}</p>
      <p className="text-xs text-altar-mist/70">{label}</p>
    </div>
  );
}
