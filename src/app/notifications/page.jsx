import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Navbar from "@/components/Navbar";
import NotificationCard from "@/components/NotificationCard";
import { Bell } from "lucide-react";

export default async function NotificationsPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  // TODO: Fetch real notifications from database
  const notifications = [
    {
      id: 1,
      type: "order_shipped",
      title: "Order Shipped",
      message: "Your order #ESF2026002 has been shipped and is on its way!",
      timestamp: "2026-02-08T10:30:00",
      read: false,
      actionUrl: "/orders",
      icon: "truck",
    },
    {
      id: 2,
      type: "preorder_closing",
      title: "Preorder Closing Soon",
      message: "DROP 001 — Essential Hoodie preorder closes in 24 hours. Don't miss out!",
      timestamp: "2026-02-08T08:00:00",
      read: false,
      actionUrl: "/personalized",
      icon: "clock",
    },
    {
      id: 3,
      type: "new_drop",
      title: "New Drop Alert",
      message: "DROP 002 — Summer Collection launches on March 20th. Set your reminder!",
      timestamp: "2026-02-07T15:00:00",
      read: true,
      actionUrl: "/personalized#upcoming",
      icon: "calendar",
    },
    {
      id: 4,
      type: "price_drop",
      title: "Price Drop on Saved Item",
      message: "Men's Solid Oxford Shirt is now ₦19,000 (was ₦29,000). Save 34%!",
      timestamp: "2026-02-07T12:00:00",
      read: true,
      actionUrl: "/personalized",
      icon: "tag",
    },
    {
      id: 5,
      type: "order_delivered",
      title: "Order Delivered",
      message: "Your order #ESF2026003 has been delivered. Enjoy your new items!",
      timestamp: "2026-02-03T14:20:00",
      read: true,
      actionUrl: "/orders",
      icon: "check",
    },
    {
      id: 6,
      type: "restock",
      title: "Item Back in Stock",
      message: "Men's Crew T-Shirts (Size L) is back in stock. Order now!",
      timestamp: "2026-02-02T09:00:00",
      read: true,
      actionUrl: "/personalized",
      icon: "package",
    },
  ];

  const unreadCount = notifications.filter((n) => !n.read).length;
  const unreadNotifications = notifications.filter((n) => !n.read);
  const readNotifications = notifications.filter((n) => n.read);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <Navbar />
        <div className="max-w-7xl mx-auto px-6 pt-20">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <h1 className="text-3xl font-bold sm:text-4xl">Notifications</h1>
            {unreadCount > 0 && (
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {unreadCount} new
              </span>
            )}
          </div>
          <p className="text-gray-300 mt-2">
            Stay updated with your orders and new drops
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10 sm:px-6 sm:py-12">
        {/* Mark All as Read */}
        {unreadCount > 0 && (
          <div className="mb-6 flex justify-end">
            <button className="text-sm text-blue-600 hover:underline">
              Mark all as read
            </button>
          </div>
        )}

        {/* Unread Notifications */}
        {unreadNotifications.length > 0 && (
          <section className="mb-8">
            <h2 className="text-lg font-semibold mb-4">New</h2>
            <div className="space-y-3">
              {unreadNotifications.map((notification) => (
                <NotificationCard
                  key={notification.id}
                  notification={notification}
                />
              ))}
            </div>
          </section>
        )}

        {/* Read Notifications */}
        {readNotifications.length > 0 && (
          <section>
            <h2 className="text-lg font-semibold mb-4">Earlier</h2>
            <div className="space-y-3">
              {readNotifications.map((notification) => (
                <NotificationCard
                  key={notification.id}
                  notification={notification}
                />
              ))}
            </div>
          </section>
        )}

        {/* Empty State */}
        {notifications.length === 0 && (
          <div className="text-center py-20 bg-white rounded-xl">
            <Bell size={80} className="mx-auto text-gray-300 mb-6" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No notifications yet
            </h3>
            <p className="text-gray-500">
              We'll notify you about orders, new drops, and special offers
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
