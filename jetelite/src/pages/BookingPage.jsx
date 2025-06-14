import React, { useState } from 'react';
import jets from '../data/jets.js';
import WizardSteps from '../components/WizardSteps.jsx';

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [selectedJet, setSelectedJet] = useState('');
  const [date, setDate] = useState('');
  const [passengers, setPassengers] = useState(1);
  const [addons, setAddons] = useState({ chauffeur: false, catering: false, concierge: false });

  const toggleAddon = (name) => {
    setAddons(prev => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <WizardSteps current={step} />
      {step === 1 && (
        <div>
          <select value={selectedJet} onChange={e => setSelectedJet(e.target.value)} className="w-full p-2 mb-4 text-black">
            <option value="">Select Jet</option>
            {jets.map(j => (
              <option key={j.id} value={j.id}>{j.model}</option>
            ))}
          </select>
          <button className="px-4 py-2 bg-gold text-black rounded" onClick={() => setStep(2)}>Next</button>
        </div>
      )}
      {step === 2 && (
        <div className="space-y-4">
          <input type="date" value={date} onChange={e => setDate(e.target.value)} className="w-full p-2 text-black" />
          <input type="number" min="1" value={passengers} onChange={e => setPassengers(e.target.value)} className="w-full p-2 text-black" />
          <div className="flex justify-between">
            <button className="px-4 py-2 border border-gold rounded" onClick={() => setStep(1)}>Back</button>
            <button className="px-4 py-2 bg-gold text-black rounded" onClick={() => setStep(3)}>Next</button>
          </div>
        </div>
      )}
      {step === 3 && (
        <div className="space-y-2">
          {['chauffeur','catering','concierge'].map(name => (
            <label key={name} className="flex items-center space-x-2">
              <input type="checkbox" checked={addons[name]} onChange={() => toggleAddon(name)} className="text-black" />
              <span className="capitalize">{name}</span>
            </label>
          ))}
          <div className="flex justify-between mt-4">
            <button className="px-4 py-2 border border-gold rounded" onClick={() => setStep(2)}>Back</button>
            <button className="px-4 py-2 bg-gold text-black rounded" onClick={() => setStep(4)}>Next</button>
          </div>
        </div>
      )}
      {step === 4 && (
        <div className="space-y-4">
          <p>Jet: {selectedJet}</p>
          <p>Date: {date}</p>
          <p>Passengers: {passengers}</p>
          <p>Add-ons: {Object.entries(addons).filter(([k,v]) => v).map(([k]) => k).join(', ') || 'None'}</p>
          <div className="flex justify-between">
            <button className="px-4 py-2 border border-gold rounded" onClick={() => setStep(3)}>Back</button>
            <button className="px-4 py-2 bg-gold text-black rounded" onClick={() => alert('Submitted!')}>Submit</button>
          </div>
        </div>
      )}
    </div>
  );
}
