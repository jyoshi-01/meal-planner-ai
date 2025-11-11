"use client";

import { useMemo } from "react";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  AreaChart,
  Area,
  XAxis,
  YAxis,
} from "recharts";

export default function Insights() {
  const weeklyCalories = useMemo(
    () => [
      { d: "Mon", cal: 2050 },
      { d: "Tue", cal: 1920 },
      { d: "Wed", cal: 2150 },
      { d: "Thu", cal: 1980 },
      { d: "Fri", cal: 1840 },
      { d: "Sat", cal: 2310 },
      { d: "Sun", cal: 1990 },
    ],
    []
  );

  const proteinSpark = useMemo(
    () => [
      { x: 1, y: 110 },
      { x: 2, y: 120 },
      { x: 3, y: 135 },
      { x: 4, y: 128 },
      { x: 5, y: 140 },
      { x: 6, y: 150 },
      { x: 7, y: 160 },
    ],
    []
  );

  const streakDays = 5;
  const avgCalories = Math.round(
    weeklyCalories.reduce((a, b) => a + b.cal, 0) / weeklyCalories.length
  );
  const proteinToday = 148;
  const proteinTarget = 160;
  const proteinPct = Math.min(100, Math.round((proteinToday / proteinTarget) * 100));

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm text-gray-500">Streak</div>
            <span className="text-xs px-2 py-1 rounded-full bg-emerald-50 text-emerald-700">
              Great!
            </span>
          </div>
          <div className="text-3xl font-semibold">{streakDays} days 🔥</div>
          <div className="mt-2 text-sm text-gray-500">
            Keep logging daily to hit 7!
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm text-gray-500">Avg Calories (7d)</div>
            <span className="text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-700">
              Balanced
            </span>
          </div>
          <div className="text-3xl font-semibold">{avgCalories}</div>
          <div className="h-10 mt-3 -mb-2">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={weeklyCalories}>
                <Tooltip
                  contentStyle={{ fontSize: 12 }}
                  cursor={{ stroke: "#e5e7eb" }}
                />
                <Line
                  type="monotone"
                  dataKey="cal"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm text-gray-500">Protein Today</div>
            <span className="text-xs px-2 py-1 rounded-full bg-purple-50 text-purple-700">
              {proteinPct}% of target
            </span>
          </div>
          <div className="flex items-end gap-2">
            <div className="text-3xl font-semibold">{proteinToday}g</div>
            <div className="text-gray-400 mb-1">/ {proteinTarget}g</div>
          </div>
          <div className="h-10 mt-3 -mb-2">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={proteinSpark}>
                <defs>
                  <linearGradient id="prot" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity={0.4} />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity={0.05} />
                  </linearGradient>
                </defs>
                <Tooltip contentStyle={{ fontSize: 12 }} />
                <Area
                  type="monotone"
                  dataKey="y"
                  stroke="#8b5cf6"
                  strokeWidth={2}
                  fill="url(#prot)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold mb-3">Today’s Smart Adjustments</h3>
        <ul className="space-y-2 text-gray-700">
          <li>• You skipped breakfast yesterday, so lunch is higher in protein today.</li>
          <li>• Since you had pizza for lunch, dinner carbs are reduced to stabilize energy.</li>
          <li>• Hydration nudge: target +500ml by 6pm to support recovery.</li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-bold">Weekly Calories Trend</h3>
          <div className="text-sm text-gray-500">Goal range: 1850–2150</div>
        </div>
        <div className="h-56">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={weeklyCalories} margin={{ left: 10, right: 20 }}>
              <XAxis dataKey="d" tickLine={false} axisLine={false} />
              <YAxis hide domain={[1600, 2400]} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="cal"
                stroke="#10b981"
                strokeWidth={3}
                dot={{ r: 3, fill: "#10b981" }}
                activeDot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-gradient-to-r from-amber-50 to-rose-50 p-6 rounded-xl border border-amber-100">
        <div className="flex items-start gap-3">
          <div className="text-2xl">💡</div>
          <div>
            <div className="font-semibold mb-1">Coach tip</div>
            <p className="text-gray-700">
              Add a lean protein snack between lunch and dinner to smooth energy dips and help
              you comfortably hit today’s protein target.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
