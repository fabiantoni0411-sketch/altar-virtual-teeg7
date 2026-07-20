import { NextResponse, type NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  if (!req.nextUrl.pathname.startsWith("/admin")) {
    return res;
  }

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return req.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => res.cookies.set(name, value));
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // A própria página de "login oculto" fica embutida no rodapé do site (/),
  // então qualquer acesso direto a /admin/dashboard sem sessão volta para "/".
  if (!user) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Confere se o usuário autenticado é de fato um admin cadastrado
  const { data: admin } = await supabase
    .from("admins")
    .select("id")
    .eq("id", user.id)
    .single();

  if (!admin) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return res;
}

export const config = {
  matcher: ["/admin/:path*"],
};
