"use client";

import { useEffect, useState } from "react";

export default function Submissions() {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/get-submissions");
      const data = await res.json();
      if (data.success) setSubmissions(data.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Form Submissions</h1>
      <ul>
        {submissions.map((submission) => (
          <li key={submission?.id}>
            <strong>{submission?.name}</strong> - {submission?.email}
            <p>{submission?.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
