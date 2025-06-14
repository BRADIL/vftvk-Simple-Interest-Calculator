import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="text-center pt-10 px-4">
      <section className="my-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Fly Private, Fly Elite</h1>
        <p className="mb-6 text-gray-300">Seamless luxury jet charter at your fingertips.</p>
        <div className="space-x-4">
          <Link to="/fleet" className="px-5 py-2 bg-gold text-black rounded">View Fleet</Link>
          <Link to="/booking" className="px-5 py-2 border border-gold rounded hover:bg-gold hover:text-black">Book Now</Link>
        </div>
      </section>
      <section className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
        <div className="p-4 bg-gray-900 rounded">
          <h3 className="text-xl mb-2">Modern Fleet</h3>
          <p className="text-sm text-gray-400">Choose from light to large cabin jets.</p>
        </div>
        <div className="p-4 bg-gray-900 rounded">
          <h3 className="text-xl mb-2">Professional Chauffeur</h3>
          <p className="text-sm text-gray-400">Door to door service at your destination.</p>
        </div>
        <div className="p-4 bg-gray-900 rounded">
          <h3 className="text-xl mb-2">Gourmet Catering</h3>
          <p className="text-sm text-gray-400">Indulge in curated meals during your flight.</p>
        </div>
      </section>
    </div>
  );
}
