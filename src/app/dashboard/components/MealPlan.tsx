"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Card from "@/components/Card";
import { getMealPlans } from "@/lib/ai"; // Use ai.ts to fetch meals

export default function MealPlan() {
  const [meals, setMeals] = useState<{ date: string; meals: any[] }[]>([]);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const { mealPlansAPI } = await import('@/lib/api');
        const response = await mealPlansAPI.getAll();
        if (response.success) {
          setMeals(response.data);
        } else {
          // Fallback to mock data if API fails
          const data = await getMealPlans();
          setMeals(data);
        }
      } catch (error) {
        console.error('Failed to fetch meal plans:', error);
        // Fallback to mock data if API fails
        const data = await getMealPlans();
        setMeals(data);
      }
    };
    fetchMeals();
  }, []);

  return (
    <div className="space-y-8">
      {meals.map((day) => (
        <div key={day.date}>
          <h2 className="text-2xl font-bold mb-4">{day.date}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {day.meals.map((meal, idx) => (
              <Card key={idx}>
                <div className="relative w-full h-48 mb-3 rounded-lg overflow-hidden">
                  <Image
                    src={meal.image}
                    alt={meal.item}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <h3 className="font-semibold text-lg mb-1">{meal.name}</h3>
                <p className="text-sm font-medium text-gray-800 mb-1">{meal.item}</p>
                <p className="text-sm text-gray-600 mb-1">{meal.time}</p>
                <p className="text-sm font-semibold text-purple-600">{meal.calories} kcal</p>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
