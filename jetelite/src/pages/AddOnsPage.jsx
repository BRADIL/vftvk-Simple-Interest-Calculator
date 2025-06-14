import React, { useState } from 'react';

export default function AddOnsPage() {
  const [selected, setSelected] = useState({});
  const services = [
    { id: 'chauffeur', name: 'Chauffeur', img: 'https://unsplash.it/400/300?image=856' },
    { id: 'catering', name: 'Catering', img: 'https://unsplash.it/400/300?image=1025' },
    { id: 'concierge', name: 'Concierge', img: 'https://unsplash.it/400/300?image=823' },
  ];

  const toggle = (id) => setSelected(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Add-On Services</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map(s => (
          <div key={s.id} className="bg-gray-900 rounded">
            <img src={s.img} alt={s.name} className="w-full h-40 object-cover rounded-t" />
            <div className="p-4 flex items-center justify-between">
              <p>{s.name}</p>
              <input type="checkbox" checked={!!selected[s.id]} onChange={() => toggle(s.id)} className="text-black" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
