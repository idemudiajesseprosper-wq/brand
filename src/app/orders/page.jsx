import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Navbar from "@/components/Navbar";
import OrderCard from "@/components/OrderCard";
import { Package } from "lucide-react";

export default async function OrdersPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  // TODO: Fetch real orders from database
  const orders = [
    {
      id: "ORD-001",
      orderNumber: "ESF2026001",
      date: "2026-02-01",
      status: "processing", // processing, shipped, delivered, cancelled
      items: [
        {
          id: 1,
          name: "DROP 001 — Essential Hoodie",
          price: 38000,
          quantity: 2,
          size: "L",
          image: "/hoodie.jpg",
        },
      ],
      totalAmount: 76000,
      estimatedDelivery: "2026-04-15",
      trackingNumber: "ESF123456789",
      shippingAddress: {
        name: "John Doe",
        street: "123 Fashion Street",
        city: "Lagos",
        state: "Lagos",
        country: "Nigeria",
      },
    },
    {
      id: "ORD-002",
      orderNumber: "ESF2026002",
      date: "2026-01-28",
      status: "shipped",
      items: [
        {
          id: 2,
          name: "Men's Solid Oxford Shirt",
          price: 19000,
          quantity: 1,
          size: "M",
          image: "/hoodie.jpg",
        },
        {
          id: 3,
          name: "Men's Crew T-Shirts",
          price: 18000,
          quantity: 3,
          size: "L",
          image: "/hoodie.jpg",
        },
      ],
      totalAmount: 73000,
      estimatedDelivery: "2026-03-25",
      trackingNumber: "ESF987654321",
      shippingAddress: {
        name: "John Doe",
        street: "123 Fashion Street",
        city: "Lagos",
        state: "Lagos",
        country: "Nigeria",
      },
    },
    {
      id: "ORD-003",
      orderNumber: "ESF2026003",
      date: "2026-01-15",
      status: "delivered",
      items: [
        {
          id: 4,
          name: "Men's Long Sleeve Casual Button Down",
          price: 22000,
          quantity: 1,
          size: "XL",
          image: "/hoodie.jpg",
        },
      ],
      totalAmount: 22000,
      estimatedDelivery: "2026-02-05",
      deliveredDate: "2026-02-03",
      trackingNumber: "ESF456789123",
      shippingAddress: {
        name: "John Doe",
        street: "123 Fashion Street",
        city: "Lagos",
        state: "Lagos",
        country: "Nigeria",
      },
    },
  ];

  const activeOrders = orders.filter(
    (order) => order.status !== "delivered" && order.status !== "cancelled"
  );
  const pastOrders = orders.filter(
    (order) => order.status === "delivered" || order.status === "cancelled"
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <Navbar />
        <div className="max-w-7xl mx-auto px-6 pt-20">
          <h1 className="text-3xl font-bold sm:text-4xl">My Orders</h1>
          <p className="text-gray-300 mt-2">
            Track and manage your preorders
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 sm:py-12">
        {/* Active Orders */}
        {activeOrders.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">
              Active Orders ({activeOrders.length})
            </h2>
            <div className="space-y-4">
              {activeOrders.map((order) => (
                <OrderCard key={order.id} order={order} />
              ))}
            </div>
          </section>
        )}

        {/* Past Orders */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">
            Past Orders ({pastOrders.length})
          </h2>
          {pastOrders.length > 0 ? (
            <div className="space-y-4">
              {pastOrders.map((order) => (
                <OrderCard key={order.id} order={order} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-xl">
              <Package size={64} className="mx-auto text-gray-300 mb-4" />
              <p className="text-gray-500">No past orders yet</p>
            </div>
          )}
        </section>

        {/* Empty State */}
        {orders.length === 0 && (
          <div className="text-center py-20 bg-white rounded-xl">
            <Package size={80} className="mx-auto text-gray-300 mb-6" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No orders yet
            </h3>
            <p className="text-gray-500 mb-6">
              Start shopping to see your orders here
            </p>
            <a
              href="/personalized"
              className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Browse Products
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
