"use client";

import GreetingCard from "./components/GreetingCard";
import Insights from "./components/Insights";
import Progress from "./components/Progress";
import QuickActions from "./components/QuickActions";

export default function DashboardPage() {
  return (
    <div className="space-y-8 p-6">
      {/* Greeting + Quick Stats */}
      <GreetingCard />

      {/* Link to full Meal Plans page */}
      <div className="mb-6">
        <a
          href="/dashboard/meal-plans"
          className="inline-block bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition"
        >
          View Full Meal Plans
        </a>
      </div>

      {/* AI Insights */}
      <Insights />

      {/* Progress Tracker */}
      <Progress />

      {/* Floating Quick Actions */}
      <QuickActions />
    </div>
  );
}
