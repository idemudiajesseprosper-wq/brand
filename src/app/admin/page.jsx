import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import AdminSidebar from "@/components/admin/AdminSidebar";
import ProductsTable from "@/components/admin/ProductsTable";
import { Plus } from "lucide-react";
import Link from "next/link";

export default async function AdminProductsPage() {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "admin") {
    redirect("/login");
  }

  // TODO: Fetch real products from database
  const products = [
    {
      id: 1,
      name: "DROP 001 — Essential Hoodie",
      price: 38000,
      oldPrice: 45000,
      image: "/hoodie.jpg",
      deadline: "2026-04-30T23:59:59",
      status: "active",
      slotsFilled: 45,
      totalSlots: 100,
      createdAt: "2026-01-15",
    },
    {
      id: 2,
      name: "Men's Solid Oxford Shirt",
      price: 19000,
      oldPrice: 29000,
      image: "/hoodie.jpg",
      deadline: "2026-03-15T23:59:59",
      status: "active",
      slotsFilled: 78,
      totalSlots: 100,
      createdAt: "2026-01-20",
    },
    {
      id: 3,
      name: "Men's Long Sleeve Casual Button Down",
      price: 22000,
      oldPrice: 30000,
      image: "/hoodie.jpg",
      deadline: "2026-02-28T23:59:59",
      status: "active",
      slotsFilled: 92,
      totalSlots: 100,
      createdAt: "2026-01-10",
    },
    {
      id: 4,
      name: "Men's Crew T-Shirts, Multipack",
      price: 18000,
      oldPrice: 30000,
      image: "/hoodie.jpg",
      deadline: "2026-05-15T23:59:59",
      status: "draft",
      slotsFilled: 0,
      totalSlots: 100,
      createdAt: "2026-02-05",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 lg:flex-row">
      <AdminSidebar />

      <div className="flex-1 lg:ml-64">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-4 py-5 sm:px-8 sm:py-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-xl font-bold text-gray-900 sm:text-2xl">
                Product Management
              </h1>
              <p className="text-gray-500 mt-1">
                Manage your preorder products and inventory
              </p>
            </div>
            <Link
              href="/admin/products/new"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700 sm:px-6"
            >
              <Plus size={20} />
              Add Product
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-4 sm:p-8">
          <ProductsTable products={products} />
        </main>
      </div>
    </div>
  );
}
