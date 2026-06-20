import AdminSidebar from "@/components/admin/AdminSidebar";
import ProductForm from "@/components/admin/ProductForm";

export default function EditProductPage({ params }) {
  const product = {
    id: params.id,
    name: "DROP 001 - Essential Hoodie",
    description: "Premium quality preorder item.",
    price: 38000,
    oldPrice: 45000,
    image: "/images/hoodie.jpg",
    deadline: "2026-04-30T23:59:59",
    totalSlots: 100,
    status: "active",
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Premium Cotton",
    estimatedDelivery: "4-6 weeks after deadline",
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 lg:flex-row">
      <AdminSidebar />
      <div className="flex-1 lg:ml-64">
        <header className="border-b border-gray-200 bg-white px-4 py-5 sm:px-8 sm:py-6">
          <h1 className="text-xl font-bold text-gray-900 sm:text-2xl">
            Edit Product
          </h1>
          <p className="mt-1 text-gray-500">
            Update preorder product details.
          </p>
        </header>
        <main className="p-4 sm:p-8">
          <ProductForm product={product} />
        </main>
      </div>
    </div>
  );
}
