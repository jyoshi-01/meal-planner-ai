export default function Insights() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-lg font-bold mb-4">AI Insights</h3>
      <ul className="list-disc list-inside space-y-2">
        <li>You skipped breakfast yesterday, so lunch is higher in protein today.</li>
        <li>Since you had pizza for lunch, dinner carbs are reduced.</li>
        <li>Keep up your streak! 5 days of consistent logging.</li>
      </ul>
    </div>
  );
}
