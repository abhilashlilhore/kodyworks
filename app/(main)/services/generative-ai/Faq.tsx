"use client";

import { useState } from "react";

interface FaqItem {
  q: string;
  a: string;
}

interface FaqProps {
  faqs: FaqItem[];
}

export default function Faq({ faqs }: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="gen-ai-faq">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className="gen-ai-faq-item">
            <button
              className="gen-ai-faq-question"
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              <h4>{faq.q}</h4>
              <span className="gen-ai-faq-arrow">{isOpen ? "▲" : "▼"}</span>
            </button>
            <div
              className="gen-ai-faq-answer"
              style={{ maxHeight: isOpen ? 500 : 0, overflow: "hidden", transition: "max-height 0.3s ease" }}
            >
              {faq.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}
