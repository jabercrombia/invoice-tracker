import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function GET() {
  try {
    const result = await query("SELECT id, name, email, message, amount, status, created_at FROM form_submissions ORDER BY created_at DESC");

    return NextResponse.json({ success: true, data: result.rows });
  } catch (error) {
    console.error("Database query error:", error);
    return NextResponse.json({ error: "Failed to fetch submissions" }, { status: 500 });
  }
}
