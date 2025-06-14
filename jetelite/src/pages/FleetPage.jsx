import React from 'react';
import jets from '../data/jets.js';
import JetCard from '../components/JetCard.jsx';

export default function FleetPage() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Fleet</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {jets.map(jet => (
          <JetCard key={jet.id} jet={jet} />
        ))}
      </div>
    </div>
  );
}
