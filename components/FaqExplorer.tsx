"use client";

import { useMemo, useState } from "react";
import { faqs } from "@/lib/content";

export function FaqExplorer() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return faqs.filter(([question, answer]) => `${question} ${answer}`.toLowerCase().includes(q));
  }, [query]);

  return (
    <div className="faq-explorer">
      <label>
        <span>Search FAQs</span>
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search membership, documents or payments" />
      </label>
      <div className="accordion">
        {filtered.map(([question, answer]) => (
          <details key={question}>
            <summary>{question}</summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
