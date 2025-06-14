import React from 'react';

export default function DashboardPage() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Dashboard</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-900 p-4 rounded">
          <h3 className="mb-2 font-semibold">Upcoming Trips</h3>
          <ul className="text-sm text-gray-400 space-y-1">
            <li>No upcoming trips.</li>
          </ul>
        </div>
        <div className="bg-gray-900 p-4 rounded">
          <h3 className="mb-2 font-semibold">Past Trips</h3>
          <ul className="text-sm text-gray-400 space-y-1">
            <li>None yet.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
