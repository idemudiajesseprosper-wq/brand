"use client";

import { Clock } from "lucide-react";
import CountdownTimer from "./CountdownTimer";

export default function CountdownDashboard({ activePreorders }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {activePreorders.map((preorder) => (
        <div
          key={preorder.id}
          className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-xl p-4 shadow-lg sm:p-6"
        >
          <div className="flex items-start gap-3 sm:gap-4">
            {/* Product Image */}
            <div className="flex-shrink-0 w-20 h-20 bg-white rounded-lg overflow-hidden">
              <img
                src={preorder.image}
                alt={preorder.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-base break-words">
                {preorder.name}
              </h3>
              <p className="text-sm text-gray-300 mt-1">
                Preorder closes in:
              </p>
            </div>
          </div>

          {/* Countdown */}
          <div className="mt-6">
            <CountdownTimer deadline={preorder.deadline} />
          </div>

          {/* Progress Bar */}
          <div className="mt-4">
            <div className="flex justify-between text-xs text-gray-300 mb-2">
              <span>Slots filled</span>
              <span>{preorder.slotsFilled || 0}/{preorder.totalSlots || 100}</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div
                className="bg-[#C19A6B] h-2 rounded-full transition-all"
                style={{
                  width: `${((preorder.slotsFilled || 0) / (preorder.totalSlots || 100)) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>
      ))}

      {activePreorders.length === 0 && (
        <div className="col-span-2 text-center py-12 text-gray-500 bg-gray-50 rounded-xl">
          <Clock size={48} className="mx-auto mb-3 opacity-50" />
          <p>No active preorders at the moment.</p>
          <p className="text-sm mt-1">Browse available products below!</p>
        </div>
      )}
    </div>
  );
}
