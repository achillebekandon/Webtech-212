import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Récupère les variables d’environnement côté serveur
const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

// Crée le client Supabase côté serveur
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      { success: false, error: "Tous les champs sont obligatoires." },
      { status: 400 }
    );
  }

  const { error } = await supabase.from("contacts").insert({
    name,
    email,
    message,
  });

  if (error) {
    console.error("Supabase Error:", error);
    return NextResponse.json({ success: false, error }, { status: 400 });
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
