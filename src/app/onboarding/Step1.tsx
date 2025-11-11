'use client';
import React from 'react';

export default function Step1({ formData, setFormData, nextStep }: any) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Step 1: Personal Info</h2>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="w-full border p-2 rounded mb-3"
      />
      <input
        type="number"
        placeholder="Age"
        value={formData.age}
        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
        className="w-full border p-2 rounded mb-3"
      />
      <input
        type="number"
        placeholder="Height (cm)"
        value={formData.height}
        onChange={(e) => setFormData({ ...formData, height: e.target.value })}
        className="w-full border p-2 rounded mb-3"
      />
      <input
        type="number"
        placeholder="Weight (kg)"
        value={formData.weight}
        onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
        className="w-full border p-2 rounded mb-3"
      />
      <select
        value={formData.gender}
        onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
        className="w-full border p-2 rounded mb-3"
      >
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <button
        onClick={nextStep}
        className="bg-purple-600 text-white px-4 py-2 rounded"
      >
        Next →
      </button>
    </div>
  );
}
