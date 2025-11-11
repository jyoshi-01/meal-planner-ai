"use client";

export default function GreetingCard() {
  return (
    <div className="bg-white shadow-md rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-2">Hi Jyosh, here’s your plan for today!</h2>
      <p className="text-gray-600 mb-4">Calories Target: <strong>2200 kcal</strong></p>

      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="bg-purple-100 rounded-lg p-4">
          <span className="text-3xl">🔥</span>
          <p className="font-semibold">BMI</p>
          <p className="text-gray-600">22.5</p>
        </div>
        <div className="bg-green-100 rounded-lg p-4">
          <span className="text-3xl">🥗</span>
          <p className="font-semibold">Activity</p>
          <p className="text-gray-600">Active</p>
        </div>
        <div className="bg-blue-100 rounded-lg p-4">
          <span className="text-3xl">💪</span>
          <p className="font-semibold">Consistency</p>
          <p className="text-gray-600">5 Days Streak</p>
        </div>
      </div>
    </div>
  );
}
