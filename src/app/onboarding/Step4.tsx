'use client';
import React from 'react';

export default function Step4({ formData, setFormData, prevStep, finish }: any) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Step 4: Preferences</h2>
      <textarea
        placeholder="Allergies, restrictions, cuisines..."
        value={formData.preferences}
        onChange={(e) =>
          setFormData({ ...formData, preferences: e.target.value })
        }
        className="w-full border p-2 rounded mb-3"
      />
      <div className="flex justify-between">
        <button onClick={prevStep} className="bg-gray-300 px-4 py-2 rounded">
          ← Back
        </button>
        <button onClick={finish} className="bg-green-600 text-white px-4 py-2 rounded">
          Finish 🎉
        </button>
      </div>
    </div>
  );
}
