"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Meal Plans", path: "/dashboard/meal-plans" },
  { name: "Progress", path: "/dashboard/progress" },
  { name: "Insights", path: "/dashboard/insights" },
  { name: "Settings", path: "/dashboard/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen bg-gray-900 text-white flex flex-col p-4">
      <h1 className="text-2xl font-bold mb-8">MealPlanner AI</h1>
      <nav className="space-y-4">
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`block px-3 py-2 rounded-md transition-colors ${
              pathname === item.path
                ? "bg-purple-700 text-white"
                : "hover:bg-gray-700"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
      <div className="mt-auto pt-6 border-t border-gray-700">
        <Link
          href="/"
          className="block px-3 py-2 rounded-md text-red-400 hover:bg-red-700/30"
        >
          Logout
        </Link>
      </div>
    </aside>
  );
}
