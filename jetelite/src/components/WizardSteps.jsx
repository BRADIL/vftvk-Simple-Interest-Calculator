import React from 'react';

export default function WizardSteps({ current }) {
  const steps = ['Choose Jet', 'Select Date & Passengers', 'Choose Add-ons', 'Quote Preview'];
  return (
    <div className="flex justify-between mb-6">
      {steps.map((label, idx) => (
        <div key={idx} className="flex-1 text-center">
          <div className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center ${current === idx + 1 ? 'bg-gold text-black' : 'bg-gray-700'}`}>{idx + 1}</div>
          <p className="text-xs mt-1">{label}</p>
        </div>
      ))}
    </div>
  );
}
