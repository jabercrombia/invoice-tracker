import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { name, email, message, amount, status } = await req.json();
    
    if (!name || !email || !message || !amount || !status) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    await query(
      "INSERT INTO form_submissions (name, email, message, amount, status) VALUES ($1, $2, $3, $4, $5)",
      [name, email, message, amount, status]
    );

    return NextResponse.json({ success: true, message: "Form submitted successfully" });
  } catch (error) {
    console.error("Error inserting data:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
