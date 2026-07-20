# Altar Virtual — TEEG7

Sistema web para o Templo Espírita Estrela Guia e Caboclo Sete Pedras do Mar
acender velas virtuais, com aprovação administrativa, filtro de conteúdo,
notificações por e-mail/WhatsApp e painel administrativo separado.

## 1. Estrutura de pastas

```
altar-virtual-teeg7/
├── app/
│   ├── page.tsx                 # Página principal (boas-vindas, regras, mural de velas)
│   ├── layout.tsx
│   ├── globals.css
│   ├── acender/page.tsx         # Formulário de acender vela
│   ├── admin/
│   │   └── dashboard/page.tsx   # Painel administrativo (protegido por middleware)
│   └── api/
│       ├── candles/route.ts     # Recebe e valida novos pedidos de vela
│       └── whatsapp-test/route.ts
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx                # Inclui o clique triplo oculto para /admin
│   ├── CandleForm.tsx
│   └── CandleCard.tsx
├── lib/
│   ├── supabase.ts               # Clients browser/server/admin
│   ├── candles-data.ts           # Cores, orixás, significados, consumo da vela
│   ├── content-filter.ts         # Validação de nome e filtro de conteúdo
│   ├── email.ts                  # Notificação por e-mail (Resend)
│   └── whatsapp.ts               # Notificação via Meta WhatsApp Cloud API
├── supabase/schema.sql           # Schema completo + RLS
├── middleware.ts                 # Protege as rotas /admin/*
├── tailwind.config.ts
├── .env.example
└── package.json
```

## 2. Passo a passo — Supabase

1. Crie um projeto em https://supabase.com
2. Vá em **SQL Editor** e rode o conteúdo de `supabase/schema.sql`
3. Em **Authentication → Users**, crie o primeiro usuário admin (e-mail/senha)
4. No **SQL Editor**, insira o admin na tabela de perfis:
   ```sql
   insert into admins (id, nome, email)
   values ('<uuid-do-usuário-criado>', 'Mãe Leila', 'admin@teeg7.com.br');
   ```
5. Copie **Project URL** e **anon public key** (Settings → API) para o `.env`
6. Copie a **service_role key** (nunca exponha no front) para `SUPABASE_SERVICE_ROLE_KEY`

## 3. Variáveis de ambiente

Copie `.env.example` para `.env.local` e preencha com suas chaves reais
(Supabase, Resend, WhatsApp). Veja o arquivo `.env.example` no projeto.

## 4. Instalar e rodar localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## 5. Integração de e-mail (Resend)

1. Crie conta em https://resend.com
2. Verifique um domínio próprio (ex: `teeg7.com.br`) em **Domains**
3. Gere uma API key e coloque em `RESEND_API_KEY`
4. Defina o remetente em `EMAIL_FROM`

## 6. Integração WhatsApp (Meta Cloud API)

1. Acesse https://business.facebook.com/developers e crie um app tipo "Business"
2. Adicione o produto **WhatsApp**
3. Em **API Setup**, copie o `Phone Number ID` → `WHATSAPP_PHONE_NUMBER_ID`
4. Gere um **token permanente** de usuário do sistema (System User) com
   permissão `whatsapp_business_messaging` → `WHATSAPP_ACCESS_TOKEN`
5. Configure `WHATSAPP_ADMIN_NUMBER=5511978384284` (o número do templo)
6. Para envio fora da janela de 24h de conversa, crie um **message template**
   aprovado pela Meta (ex: `nova_vela_admin`) e adapte `lib/whatsapp.ts`
   para usar `type: "template"` em vez de `type: "text"`
7. Use o botão **"Enviar teste"** no painel para validar a integração

## 7. Clique triplo no rodapé (acesso oculto ao admin)

Já implementado em `components/Footer.tsx`: o parágrafo final ("Axé, Luz e
Paz...") tem um `onClick` que conta cliques/toques dentro de uma janela de
900ms. Ao atingir 3, abre um modal de login (Supabase Auth) que redireciona
para `/admin/dashboard`. Funciona em mouse e touch sem código extra, pois
`onClick` é disparado por ambos em navegadores modernos.

## 8. Publicar na Vercel

1. Suba o projeto para um repositório no GitHub/GitLab
2. Acesse https://vercel.com → **Add New Project** → importe o repositório
3. Em **Environment Variables**, cole todas as variáveis do seu `.env.local`
4. Clique em **Deploy**
5. Ao final, você terá uma URL do tipo `altar-virtual-teeg7.vercel.app`

## 9. Gerar o link para divulgar no Instagram

- Use a própria URL do deploy (ou do domínio próprio, veja item 11):
  `https://altar.teeg7.com.br`
- No Instagram, adicione esse link ao **campo de link da bio** do perfil
  `@teeg7_520` (Editar perfil → Link)
- Para posts/stories, use o link direto ou crie um link curto (ex: bit.ly)
  apontando para `https://altar.teeg7.com.br/acender`, levando o visitante
  direto ao formulário de acender vela
- Em Stories, use o adesivo de link ("Link sticker") apontando para a mesma URL

## 10. Conectar um domínio próprio (ex: altar.teeg7.com.br)

1. No painel da Vercel, abra o projeto → **Settings → Domains**
2. Adicione `altar.teeg7.com.br`
3. A Vercel mostrará um registro DNS (tipo `CNAME`, apontando para
   `cname.vercel-dns.com`) — copie esse valor
4. No painel do seu provedor de domínio (Registro.br, GoDaddy, etc.), crie
   um registro CNAME com nome `altar` apontando para o valor da Vercel
5. Aguarde a propagação (pode levar de minutos a algumas horas)
6. A Vercel emite o certificado SSL automaticamente quando o DNS propaga

## Observações de segurança e moderação

- A lista de **palavras bloqueadas** fica no banco (tabela `blocked_words`),
  editável só pelo painel — evitamos deixar termos ofensivos hardcoded no
  código-fonte público do repositório.
- Padrões fixos das regras do templo (amarração, ameaças, "fazer mal a
  terceiros") ficam em `lib/content-filter.ts` como expressões regulares,
  pois são regra permanente da casa e não dependem de cadastro manual.
- O rate limit de envio por IP em `app/api/candles/route.ts` é uma
  implementação simples em memória — funciona para tráfego moderado, mas em
  produção com múltiplas instâncias/regiões da Vercel, considere usar
  Upstash Redis ou o Vercel Edge Config para um contador compartilhado.
- Ative "Confirm email" e um limite de tentativas de login no Supabase Auth
  (Authentication → Settings) para reforçar a proteção contra força bruta
  no acesso administrativo.
