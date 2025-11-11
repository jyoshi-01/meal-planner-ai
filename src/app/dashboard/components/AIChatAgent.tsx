"use client";

import { useState } from "react";

export default function AIChatAgent() {
  const [messages, setMessages] = useState([
    { from: "ai", text: "👋 Hi Jyosh! I’ll help you stay on track today." },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: "user", text: input }]);
    setInput("");
    // Dummy AI reply for now
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { from: "ai", text: "✅ Got it! I’ll adjust your plan accordingly." },
      ]);
    }, 800);
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-4 flex flex-col flex-1 min-h-0">
      <div className="flex-1 overflow-y-auto space-y-2 mb-3">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-2 rounded-md ${
              msg.from === "ai"
                ? "bg-purple-100 text-purple-800 self-start"
                : "bg-gray-200 text-gray-800 self-end"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex space-x-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask AI..."
          className="flex-1 border rounded-md p-2 text-sm"
        />
        <button
          onClick={handleSend}
          className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm"
        >
          Send
        </button>
      </div>
    </div>
  );
}
