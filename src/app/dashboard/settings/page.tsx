"use client";

import { useState, useEffect } from "react";
import Settings from "../components/Settings";

export default function SettingsPage() {
  const [userData, setUserData] = useState({
    name: "",
    age: "",
    height: "",
    weight: "",
    gender: "",
    goal: "",
    activity: "",
    preferences: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const { userAPI } = await import('@/lib/api');
        const response = await userAPI.getSettings();
        if (response.success && response.data) {
          setUserData(response.data);
        }
      } catch (error) {
        console.error('Failed to fetch settings:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchSettings();
  }, []);

  const handleUpdate = async (updatedData: any) => {
    try {
      const { userAPI } = await import('@/lib/api');
      const response = await userAPI.updateSettings(updatedData);
      if (response.success) {
        setUserData(updatedData);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Failed to update settings:', error);
      return false;
    }
  };

  if (loading) {
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Settings</h1>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      <Settings userData={userData} setUserData={setUserData} onUpdate={handleUpdate} />
    </div>
  );
}


