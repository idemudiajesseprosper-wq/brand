"use client";

import {
  Bell,
  Package,
  Truck,
  Clock,
  Calendar,
  Tag,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

export default function NotificationCard({ notification }) {
  const getIcon = () => {
    switch (notification.icon) {
      case "truck":
        return <Truck size={20} className="text-orange-500" />;
      case "clock":
        return <Clock size={20} className="text-red-500" />;
      case "calendar":
        return <Calendar size={20} className="text-blue-500" />;
      case "tag":
        return <Tag size={20} className="text-green-500" />;
      case "check":
        return <CheckCircle size={20} className="text-green-500" />;
      case "package":
        return <Package size={20} className="text-purple-500" />;
      default:
        return <Bell size={20} className="text-gray-500" />;
    }
  };

  const getTimestamp = () => {
    const date = new Date(notification.timestamp);
    const now = new Date();
    const diffInMinutes = Math.floor((now - date) / (1000 * 60));

    if (diffInMinutes < 1) return "Just now";
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours}h ago`;
    
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays === 1) return "Yesterday";
    if (diffInDays < 7) return `${diffInDays}d ago`;
    
    return date.toLocaleDateString();
  };

  return (
    <Link
      href={notification.actionUrl || "#"}
      className={`
        block p-4 rounded-xl border transition-all
        ${
          notification.read
            ? "bg-white border-gray-200 hover:border-gray-300"
            : "bg-blue-50 border-blue-200 hover:border-blue-300"
        }
      `}
    >
      <div className="flex gap-3 sm:gap-4">
        {/* Icon */}
        <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center border border-gray-200">
          {getIcon()}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3 sm:gap-4">
            <div className="flex-1">
              <h3
                className={`font-semibold text-sm ${
                  notification.read ? "text-gray-900" : "text-gray-900"
                }`}
              >
                {notification.title}
              </h3>
              <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                {notification.message}
              </p>
              <p className="text-xs text-gray-500 mt-2">{getTimestamp()}</p>
            </div>

            {/* Unread Indicator */}
            {!notification.read && (
              <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-1" />
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
