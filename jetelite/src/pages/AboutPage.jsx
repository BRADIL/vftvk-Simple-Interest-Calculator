import React from 'react';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4 text-center">About JetElite</h2>
      <p className="mb-4">JetElite is committed to delivering unparalleled private aviation experiences. Our mission is to provide luxury, safety, and convenience for discerning travelers.</p>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-900 p-4 rounded">
          <h3 className="text-xl mb-2">Our Mission</h3>
          <p className="text-sm text-gray-400">To make private air travel accessible and effortless.</p>
        </div>
        <div className="bg-gray-900 p-4 rounded">
          <h3 className="text-xl mb-2">Founders</h3>
          <p className="text-sm text-gray-400">Jane Doe and John Smith, aviation enthusiasts with decades of experience.</p>
        </div>
      </div>
    </div>
  );
}
