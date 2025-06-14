import React, { useState } from 'react';

export default function SupportPage() {
  const [faqOpen, setFaqOpen] = useState(null);
  const faqs = [
    { q: 'How do I book a flight?', a: 'Use our booking page to get started.' },
    { q: 'Can I cancel my booking?', a: 'Please contact support to cancel.' },
    { q: 'Do you offer catering?', a: 'Yes, gourmet catering is available.' },
  ];

  const toggle = idx => setFaqOpen(faqOpen === idx ? null : idx);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Support</h2>
      {faqs.map((f, idx) => (
        <div key={idx} className="mb-2">
          <button className="w-full text-left p-2 bg-gray-800" onClick={() => toggle(idx)}>{f.q}</button>
          {faqOpen === idx && <div className="p-2 bg-gray-700">{f.a}</div>}
        </div>
      ))}
      <form className="mt-6 space-y-2">
        <input type="text" placeholder="Name" className="w-full p-2 text-black" />
        <input type="email" placeholder="Email" className="w-full p-2 text-black" />
        <textarea placeholder="Message" className="w-full p-2 text-black" />
        <button className="px-4 py-2 bg-gold text-black rounded">Submit</button>
      </form>
    </div>
  );
}
