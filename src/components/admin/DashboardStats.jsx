"use client";

import { ArrowUp, ArrowDown } from "lucide-react";

export default function DashboardStats({ stats }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => {
        const Icon = stat.icon;
        const isPositive = stat.change.startsWith("+");

        const colorClasses = {
          green: "bg-green-100 text-green-600",
          blue: "bg-blue-100 text-blue-600",
          purple: "bg-purple-100 text-purple-600",
          orange: "bg-orange-100 text-orange-600",
        };

        return (
          <div
            key={stat.title}
            className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-sm text-gray-600 font-medium">
                  {stat.title}
                </p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {stat.value}
                </p>
                <div className="flex items-center gap-1 mt-3">
                  {isPositive ? (
                    <ArrowUp size={16} className="text-green-600" />
                  ) : (
                    <ArrowDown size={16} className="text-red-600" />
                  )}
                  <span
                    className={`text-sm font-semibold ${
                      isPositive ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {stat.change}
                  </span>
                  <span className="text-sm text-gray-500">vs last month</span>
                </div>
              </div>

              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  colorClasses[stat.color]
                }`}
              >
                <Icon size={24} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
