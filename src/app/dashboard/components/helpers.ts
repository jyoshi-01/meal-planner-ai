// src/lib/helpers.ts

export async function getMealPlans() {
  // Dates
  const today = new Date();
  const prevDay = new Date(today);
  prevDay.setDate(today.getDate() - 1);
  const nextDay = new Date(today);
  nextDay.setDate(today.getDate() + 1);

  const formatDate = (d: Date) =>
    d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });

  // Mock meal data (replace with actual API later)
  const mealsData = [
    {
      date: formatDate(prevDay),
      meals: [
        { name: "Oatmeal", time: "Breakfast", calories: 350 },
        { name: "Chicken Salad", time: "Lunch", calories: 450 },
        { name: "Fruit Snack", time: "Snack", calories: 150 },
      ],
    },
    {
      date: formatDate(today),
      meals: [
        { name: "Smoothie", time: "Breakfast", calories: 300 },
        { name: "Grilled Fish", time: "Lunch", calories: 500 },
        { name: "Nuts", time: "Snack", calories: 200 },
      ],
    },
    {
      date: formatDate(nextDay),
      meals: [
        { name: "Egg Sandwich", time: "Breakfast", calories: 400 },
        { name: "Quinoa Salad", time: "Lunch", calories: 450 },
        { name: "Yogurt", time: "Snack", calories: 180 },
      ],
    },
  ];

  return mealsData;
}
