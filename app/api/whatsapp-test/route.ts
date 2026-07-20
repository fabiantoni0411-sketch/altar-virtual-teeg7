import { NextResponse } from "next/server";
import { sendWhatsappTest } from "@/lib/whatsapp";

export async function POST() {
  const result = await sendWhatsappTest();
  return NextResponse.json(result);
}
