import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function GET() {
  try {
    const result = await query("SELECT NOW()");
    return NextResponse.json({ success: true, timestamp: result.rows[0] });
  } catch (error) {
    console.error("Database connection failed:", error);
    return NextResponse.json({ error: "Database connection failed" }, { status: 500 });
  }
}
