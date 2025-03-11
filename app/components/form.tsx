"use client";

import { useState } from "react";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
export default function Form() {
  const [form, setForm] = useState({ name: "", email: "", message: "", amount: "", status: "pending" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/submit-form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (data.success) alert("Form submitted successfully!");
    else alert("Error: " + data.error);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input name="name" placeholder="Name" onChange={handleChange} required />
      <Input name="email" type="email" placeholder="Email" onChange={handleChange} required />
      <Textarea name="message" placeholder="Message" onChange={handleChange} required />
      <Input name="amount" type="number" step="0.01" placeholder="Amount" onChange={handleChange} required />
      
      <select name="status" onChange={handleChange} required>
        <option value="pending">Pending</option>
        <option value="approved">Approved</option>
        <option value="rejected">Rejected</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  );
}
