import ProductCard from "@/components/ProductCard";

const products = [
  {
    id: 1,
    name: "DROP 001 — Essential Hoodie",
    price: "38,000",
    oldPrice: "45,000",
    image: "/images/hoodie.jpg",
    deadline: "2026-04-30",
  },
];

export default function PreorderPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 sm:py-12">
      <h1 className="text-2xl font-semibold mb-6">
        Preorder Collection
      </h1>

      <div className="grid grid-cols-1 gap-6 py-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
