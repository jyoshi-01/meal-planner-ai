"use client";

import Insights from "../components/Insights";

export default function InsightsPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-1">Insights</h1>
      <p className="text-gray-500 mb-6">
        Your personalized trends, smart adjustments, and coaching tips.
      </p>
      <Insights />
    </div>
  );
}


