import React from 'react';
import { Link } from 'react-router-dom';

export default function JetCard({ jet }) {
  return (
    <div className="bg-white text-black rounded shadow">
      <img src={jet.image} alt={jet.model} className="w-full h-40 object-cover rounded-t" />
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{jet.model}</h3>
        <p className="text-sm mb-1">Size: {jet.size}</p>
        <p className="text-sm mb-1">Capacity: {jet.capacity}</p>
        <p className="text-sm mb-2">Price: {jet.price}</p>
        <Link to={`/fleet/${jet.id}`} className="text-gold hover:underline">View Details</Link>
      </div>
    </div>
  );
}
