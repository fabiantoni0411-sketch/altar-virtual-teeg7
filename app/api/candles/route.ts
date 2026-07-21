  const { data: candle, error } = await supabase
    .from("candles")
    .insert({
      nome,
      cidade,
      estado,
      email: email || null,
      cor: candleDef.label,
      orixa: candleDef.orixa,
      tipo_vela: candleDef.tipo,
      pedido,
      status: "pendente",
      ip_address: ip,
    })
    .select()
    .single();

  if (error || !candle) {
    console.error("[api/candles] erro ao inserir:", error);
    return NextResponse.json({ message: "Não foi possível registrar sua vela. Tente novamente." }, { status: 500 });
  }

  notifyAdmins(candle).catch((err) => console.error("[api/candles] falha ao notificar:", err));

  return NextResponse.json({ ok: true, id: candle.id });
}

async function logModeration(ent
