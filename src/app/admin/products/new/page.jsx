import AdminSidebar from "@/components/admin/AdminSidebar";
import ProductForm from "@/components/admin/ProductForm";

export default function NewProductPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 lg:flex-row">
      <AdminSidebar />
      <div className="flex-1 lg:ml-64">
        <header className="border-b border-gray-200 bg-white px-4 py-5 sm:px-8 sm:py-6">
          <h1 className="text-xl font-bold text-gray-900 sm:text-2xl">
            Add Product
          </h1>
          <p className="mt-1 text-gray-500">
            Create a new preorder product.
          </p>
        </header>
        <main className="p-4 sm:p-8">
          <ProductForm />
        </main>
      </div>
    </div>
  );
}
