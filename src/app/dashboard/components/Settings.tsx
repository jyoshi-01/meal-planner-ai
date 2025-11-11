'use client';
import React, { useState } from 'react';

export default function Settings({ userData, setUserData, onUpdate }: any) {
  const [formData, setFormData] = useState(userData);

  const handleUpdate = async () => {
    if (onUpdate) {
      const success = await onUpdate(formData);
      if (success) {
        setUserData(formData);
        alert('Settings updated successfully!');
      } else {
        alert('Failed to update settings. Please try again.');
      }
    } else {
      // Fallback if onUpdate not provided
      setUserData(formData);
      alert('Settings updated successfully!');
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Settings</h2>

      <div className="space-y-4">
        {/* Personal Info */}
        <div>
          <h3 className="font-semibold mb-2">Personal Info</h3>
          <input
            type="text"
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full border p-2 rounded mb-2"
          />
          <input
            type="number"
            placeholder="Age"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            className="w-full border p-2 rounded mb-2"
          />
          <input
            type="number"
            placeholder="Height (cm)"
            value={formData.height}
            onChange={(e) => setFormData({ ...formData, height: e.target.value })}
            className="w-full border p-2 rounded mb-2"
          />
          <input
            type="number"
            placeholder="Weight (kg)"
            value={formData.weight}
            onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
            className="w-full border p-2 rounded mb-2"
          />
          <select
            value={formData.gender}
            onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
            className="w-full border p-2 rounded mb-2"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        {/* Goals */}
        <div>
          <h3 className="font-semibold mb-2">Goals</h3>
          <select
            value={formData.goal}
            onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
            className="w-full border p-2 rounded mb-2"
          >
            <option value="">Select Goal</option>
            <option value="loss">Weight Loss</option>
            <option value="gain">Weight Gain</option>
            <option value="maintain">Maintain</option>
          </select>
        </div>

        {/* Activity Level */}
        <div>
          <h3 className="font-semibold mb-2">Activity Level</h3>
          <select
            value={formData.activity}
            onChange={(e) => setFormData({ ...formData, activity: e.target.value })}
            className="w-full border p-2 rounded mb-2"
          >
            <option value="">Select Activity Level</option>
            <option value="sedentary">Sedentary</option>
            <option value="active">Active</option>
            <option value="very_active">Very Active</option>
          </select>
        </div>

        {/* Dietary Preferences */}
        <div>
          <h3 className="font-semibold mb-2">Dietary Preferences</h3>
          <textarea
            value={formData.preferences}
            onChange={(e) =>
              setFormData({ ...formData, preferences: e.target.value })
            }
            placeholder="Allergies, restrictions, preferred cuisines..."
            className="w-full border p-2 rounded"
          />
        </div>

        <button
          onClick={handleUpdate}
          className="bg-purple-600 text-white px-6 py-2 rounded mt-4"
        >
          Update Settings
        </button>
      </div>
    </div>
  );
}
