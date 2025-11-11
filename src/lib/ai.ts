// src/lib/ai.ts

export async function getMealPlans() {
  // Mock data for demonstration
  return [
    {
      date: "2025-09-28", // yesterday
      meals: [
        { 
          name: "Breakfast", 
          item: "Poha", 
          calories: 320, 
          time: "8:00 AM",
          image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop"
        },
        { 
          name: "Lunch", 
          item: "Dal + Roti", 
          calories: 480, 
          time: "1:00 PM",
          image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop"
        },
        { 
          name: "Dinner", 
          item: "Vegetable pasta", 
          calories: 530, 
          time: "8:00 PM",
          image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
        },
      ],
    },
    {
      date: "2025-09-29", // today
      meals: [
        { 
          name: "Breakfast", 
          item: "Oatmeal with fruits", 
          calories: 350, 
          time: "8:00 AM",
          image: "https://images.unsplash.com/photo-1576308132992-d8b8e3c6c7a9?w=400&h=300&fit=crop"
        },
        { 
          name: "Lunch", 
          item: "Grilled chicken salad", 
          calories: 500, 
          time: "1:00 PM",
          image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
        },
        { 
          name: "Dinner", 
          item: "Brown rice + Veg curry", 
          calories: 600, 
          time: "8:00 PM",
          image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop"
        },
      ],
    },
    {
      date: "2025-09-30", // tomorrow
      meals: [
        { 
          name: "Breakfast", 
          item: "Smoothie bowl", 
          calories: 300, 
          time: "8:00 AM",
          image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=300&fit=crop"
        },
        { 
          name: "Lunch", 
          item: "Paneer wrap", 
          calories: 450, 
          time: "1:00 PM",
          image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop"
        },
        { 
          name: "Dinner", 
          item: "Fish + Steamed veggies", 
          calories: 550, 
          time: "8:00 PM",
          image: "https://images.unsplash.com/photo-1558030006-450675393462?w=400&h=300&fit=crop"
        },
      ],
    },
  ];
}
