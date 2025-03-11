import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function GET() {
  try {
    const result = await query("SELECT name, SUM(amount) AS total_amount, COUNT(*) AS total_submissions FROM form_submissions WHERE status = 'approved' GROUP BY name");

    return NextResponse.json({ success: true, data: result.rows });
  } catch (error) {
    console.error("Database query error:", error);
    return NextResponse.json({ error: "Failed to fetch submissions" }, { status: 500 });
  }
}
