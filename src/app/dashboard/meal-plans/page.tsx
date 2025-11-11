"use client";

import MealPlan from "../components/MealPlan";

export default function MealPlansPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Meal Plans</h1>
      <MealPlan />
    </div>
  );
}
