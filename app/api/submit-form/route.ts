import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();
    console.log("Received request:", { name, email, message });

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const result = await query(
      "INSERT INTO form_submissions (name, email, message) VALUES ($1, $2, $3) RETURNING *",
      [name, email, message]
    );

    return NextResponse.json({ success: true, data: result.rows[0] });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
