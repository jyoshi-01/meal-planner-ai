"use client";

import { useState } from "react";
import Sidebar from "./components/Sidebar";
import AIChatAgent from "./components/AIChatAgent";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAIOpen, setIsAIOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6">{children}</main>

      {/* Floating AI Assistant Icon */}
      {!isAIOpen && (
        <button
          onClick={() => setIsAIOpen(true)}
          className="fixed bottom-6 right-6 bg-purple-600 text-white p-4 rounded-full shadow-lg hover:bg-purple-700 transition-all z-50 flex items-center justify-center w-14 h-14"
          aria-label="Open AI Assistant"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        </button>
      )}

      {/* Right AI Assistant Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-gray-50 border-l shadow-xl transition-transform duration-300 z-40 ${
          isAIOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 h-full flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">AI Assistant</h3>
            <button
              onClick={() => setIsAIOpen(false)}
              className="text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="Close AI Assistant"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <AIChatAgent />
        </div>
      </div>

      {/* Overlay when AI is open */}
      {isAIOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-20 z-30"
          onClick={() => setIsAIOpen(false)}
        />
      )}
    </div>
  );
}
