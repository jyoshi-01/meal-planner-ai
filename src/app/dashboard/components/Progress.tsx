"use client";

import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Progress() {
  // Weekly calories data
  const weeklyCalories = [
    { day: "Mon", consumed: 2100, target: 2200 },
    { day: "Tue", consumed: 2150, target: 2200 },
    { day: "Wed", consumed: 2000, target: 2200 },
    { day: "Thu", consumed: 2250, target: 2200 },
    { day: "Fri", consumed: 2100, target: 2200 },
    { day: "Sat", consumed: 2300, target: 2200 },
    { day: "Sun", consumed: 2050, target: 2200 },
  ];

  // Weight trend data (last 4 weeks)
  const weightTrend = [
    { week: "Week 1", weight: 70.5 },
    { week: "Week 2", weight: 70.2 },
    { week: "Week 3", weight: 69.8 },
    { week: "Week 4", weight: 69.5 },
  ];

  // Daily meal completion
  const mealCompletion = [
    { meal: "Breakfast", completed: 95 },
    { meal: "Lunch", completed: 88 },
    { meal: "Dinner", completed: 92 },
    { meal: "Snacks", completed: 75 },
  ];

  const COLORS = ["#9333ea", "#10b981", "#f59e0b", "#ef4444"];

  const totalCalories = weeklyCalories.reduce((sum, day) => sum + day.consumed, 0);
  const avgCalories = Math.round(totalCalories / 7);
  const weightLoss = weightTrend[0].weight - weightTrend[weightTrend.length - 1].weight;

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white p-6 rounded-xl shadow-lg">
          <p className="text-sm opacity-90 mb-1">Avg Daily Calories</p>
          <p className="text-3xl font-bold">{avgCalories}</p>
          <p className="text-sm opacity-90 mt-1">/ 2200 kcal</p>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-700 text-white p-6 rounded-xl shadow-lg">
          <p className="text-sm opacity-90 mb-1">Weight Loss</p>
          <p className="text-3xl font-bold">{weightLoss.toFixed(1)}kg</p>
          <p className="text-sm opacity-90 mt-1">Last 4 weeks</p>
        </div>
        <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white p-6 rounded-xl shadow-lg">
          <p className="text-sm opacity-90 mb-1">Current Streak</p>
          <p className="text-3xl font-bold">7</p>
          <p className="text-sm opacity-90 mt-1">days 🔥</p>
        </div>
        <div className="bg-gradient-to-br from-orange-500 to-orange-700 text-white p-6 rounded-xl shadow-lg">
          <p className="text-sm opacity-90 mb-1">Meal Completion</p>
          <p className="text-3xl font-bold">87%</p>
          <p className="text-sm opacity-90 mt-1">This week</p>
        </div>
      </div>

      {/* Weekly Calories Bar Chart */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-bold mb-4">Weekly Calories Intake</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={weeklyCalories}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="consumed" fill="#9333ea" name="Consumed" radius={[8, 8, 0, 0]} />
            <Bar dataKey="target" fill="#e5e7eb" name="Target" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Weight Trend Line Chart */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-bold mb-4">Weight Trend (Last 4 Weeks)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={weightTrend}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="week" />
            <YAxis domain={[69, 71]} />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="weight"
              stroke="#10b981"
              strokeWidth={3}
              name="Weight (kg)"
              dot={{ fill: "#10b981", r: 6 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Meal Completion Bars */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-bold mb-4">Meal Completion Rate</h3>
        <div className="space-y-4">
          {mealCompletion.map((item, index) => (
            <div key={item.meal}>
              <div className="flex justify-between mb-2">
                <span className="font-semibold">{item.meal}</span>
                <span className="text-gray-600">{item.completed}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${item.completed}%`,
                    backgroundColor: COLORS[index % COLORS.length],
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Streak Visualization */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-xl shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-2">🔥 Current Streak</h3>
            <p className="text-4xl font-bold">7 Days</p>
            <p className="text-sm opacity-90 mt-2">Keep it up! You're doing great!</p>
          </div>
          <div className="text-6xl">🏆</div>
        </div>
      </div>
    </div>
  );
}
