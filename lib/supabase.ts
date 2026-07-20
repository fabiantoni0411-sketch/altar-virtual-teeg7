import { createBrowserClient, createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

// Cliente para uso em componentes client-side (formulário público, etc.)
export function supabaseBrowser() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

// Cliente para uso em Server Components / Route Handlers (respeita RLS + sessão)
export async function supabaseServer() {
  const cookieStore = await cookies();
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // chamado de um Server Component; middleware cuida do refresh
          }
        },
      },
    }
  );
}

// Cliente com service_role — SOMENTE em rotas de servidor (API routes),
// nunca exposto ao navegador. Usado para envio de notificações e
// operações administrativas que ignoram RLS.
import { createClient } from "@supabase/supabase-js";
export function supabaseAdmin() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false } }
  );
}
