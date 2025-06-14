import React from 'react';
import { useParams, Link } from 'react-router-dom';
import jets from '../data/jets.js';

export default function JetDetailPage() {
  const { id } = useParams();
  const jet = jets.find(j => j.id === id);

  if (!jet) return <p className="p-4">Jet not found.</p>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <img src={jet.image} alt={jet.model} className="w-full h-60 object-cover rounded" />
      <h2 className="text-3xl font-bold mt-4 mb-2">{jet.model}</h2>
      <p className="mb-1">Size: {jet.size}</p>
      <p className="mb-1">Capacity: {jet.capacity}</p>
      <p className="mb-1">Range: {jet.range}</p>
      <p className="mb-4">{jet.description}</p>
      <Link to="/booking" className="px-5 py-2 bg-gold text-black rounded">Start Booking</Link>
    </div>
  );
}
