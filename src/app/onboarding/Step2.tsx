'use client';
import React from 'react';

export default function Step2({ formData, setFormData, nextStep, prevStep }: any) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Step 2: Goals</h2>
      <select
        value={formData.goal}
        onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
        className="w-full border p-2 rounded mb-3"
      >
        <option value="">Select Goal</option>
        <option value="loss">Weight Loss</option>
        <option value="gain">Weight Gain</option>
        <option value="maintain">Maintain</option>
      </select>
      <div className="flex justify-between">
        <button onClick={prevStep} className="bg-gray-300 px-4 py-2 rounded">
          ← Back
        </button>
        <button onClick={nextStep} className="bg-purple-600 text-white px-4 py-2 rounded">
          Next →
        </button>
      </div>
    </div>
  );
}
