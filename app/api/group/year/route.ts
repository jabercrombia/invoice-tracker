import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function GET() {
  try {
    const result = await query("SELECT name, TO_CHAR(created_at, 'YYYY') AS year,  SUM(amount) AS total_amount FROM form_submissions WHERE status = 'approved' GROUP BY name, year ORDER BY year DESC, total_amount DESC");
    // Transform results into an object indexed by year
    const groupedData = result.rows.reduce((acc: { [key: string]: { name: string; total_amount: number }[] }, row) => {
      const { year, name, total_amount } = row;

      if (!acc[year]) {
        acc[year] = [];
      }

      acc[year].push({ name, total_amount });

      return acc;
    }, {});

    return NextResponse.json({ success: true, data: groupedData });
  } catch (error) {
    console.error("Database query error:", error);
    return NextResponse.json({ error: "Failed to fetch submissions" }, { status: 500 });
  }
}
