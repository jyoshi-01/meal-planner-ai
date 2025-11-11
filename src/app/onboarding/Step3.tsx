'use client';
import React from 'react';

export default function Step3({ formData, setFormData, nextStep, prevStep }: any) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Step 3: Activity Level</h2>
      <select
        value={formData.activity}
        onChange={(e) => setFormData({ ...formData, activity: e.target.value })}
        className="w-full border p-2 rounded mb-3"
      >
        <option value="">Select Activity</option>
        <option value="sedentary">Sedentary</option>
        <option value="active">Active</option>
        <option value="very_active">Very Active</option>
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
