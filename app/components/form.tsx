"use client"; // Needed for handling form state

import { useState } from "react";
import { Input } from "../../components/ui/input";

import { Textarea } from "../../components/ui/textarea";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponse("");

    try {
      const res = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (res.ok) {
        setResponse("Form submitted successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setResponse(result.error || "Submission failed.");
      }
    } catch (error) {
      setResponse("Error submitting the form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 border rounded-lg">
      <div className="mb-4">
        <label className="block text-sm font-bold">Name</label>
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
         
          
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold">Email</label>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold">Message</label>
        <Textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded" disabled={loading}>
        {loading ? "Submitting..." : "Submit"}
      </button>
      {response && <p className="mt-2 text-center text-sm">{response}</p>}
    </form>
  );
}
