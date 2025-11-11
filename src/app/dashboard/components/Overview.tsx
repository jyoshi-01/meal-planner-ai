export default function Overview() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-bold">Hi Jyosh, here’s your plan for today!</h2>
      <div className="mt-4 flex justify-between">
        <div>
          <p>Calories Target: 2200 kcal</p>
          <p>BMI: 22.5</p>
          <p>Activity Level: Active</p>
        </div>
        <div className="flex space-x-4">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">🔥</div>
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">🥗</div>
          <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">💪</div>
        </div>
      </div>
    </div>
  );
}
