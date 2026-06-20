"use client";

import { Calendar, Clock, Bell } from "lucide-react";

export default function UpcomingDrops({ drops }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <div className="space-y-4">
      {drops.map((drop) => (
        <div
          key={drop.id}
          className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            {/* Date Badge */}
            <div className="flex-shrink-0 bg-[#C19A6B] text-white rounded-lg p-3 text-center min-w-[70px]">
              <div className="text-xs font-medium">
                {new Date(drop.launchDate).toLocaleDateString("en-US", {
                  month: "short",
                })}
              </div>
              <div className="text-2xl font-bold">
                {new Date(drop.launchDate).getDate()}
              </div>
            </div>

            {/* Drop Details */}
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-lg text-gray-900">
                {drop.name}
              </h3>
              <p className="text-sm text-gray-600 mt-1">{drop.description}</p>

              <div className="flex flex-wrap items-center gap-3 mt-3 text-sm text-gray-500 sm:gap-4">
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  <span>{formatTime(drop.launchDate)}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  <span>{formatDate(drop.launchDate)}</span>
                </div>
              </div>

              {drop.limitedQuantity && (
                <div className="mt-2 inline-block bg-red-50 text-red-600 text-xs px-3 py-1 rounded-full">
                  Limited Quantity
                </div>
              )}
            </div>

            {/* Notify Button */}
            <button className="flex w-full flex-shrink-0 items-center justify-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-white transition hover:bg-gray-800 sm:w-auto">
              <Bell size={16} />
              <span className="text-sm">Notify Me</span>
            </button>
          </div>
        </div>
      ))}

      {drops.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          <Calendar size={48} className="mx-auto mb-3 opacity-50" />
          <p>No upcoming drops scheduled yet.</p>
          <p className="text-sm mt-1">Check back soon for new releases!</p>
        </div>
      )}
    </div>
  );
}
