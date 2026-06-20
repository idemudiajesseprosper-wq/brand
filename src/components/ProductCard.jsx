"use client";

import { useState } from "react";
import { Eye, ShoppingCart } from "lucide-react";
import QuickViewModal from "./QuickViewModal";
import { useCart } from "./CartContext";

export default function ProductCard({ product }) {
  const [open, setOpen] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    // If product has sizes, open the modal to select size
    // Otherwise, add directly to cart
    if (product.sizes && product.sizes.length > 0) {
      setOpen(true);
    } else {
      addToCart(product);
    }
  };

  return (
    <>
      <div className="relative bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
        {/* Eye icon */}
        <button
          onClick={() => setOpen(true)}
          className="absolute top-3 right-3 bg-green-500 text-white p-2.5 rounded-full hover:bg-green-600 transition z-10"
        >
          <Eye size={18} />
        </button>

        {/* Product Image */}
        <div className="relative aspect-[3/4] overflow-hidden bg-gray-50">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="p-4">
          <h3 className="text-sm font-normal text-gray-800 line-clamp-2 mb-2">
            {product.name}
          </h3>

          <div className="flex items-center gap-2">
            <span className="text-base font-semibold text-gray-900">
              ₦{product.price.toLocaleString()}
            </span>
            {product.oldPrice && (
              <span className="text-sm line-through text-gray-400">
                ₦{product.oldPrice.toLocaleString()}
              </span>
            )}
          </div>

          <button
            onClick={handleAddToCart}
            className="mt-3 w-full bg-green-500 text-white py-2.5 rounded-lg font-medium hover:bg-green-600 transition flex items-center justify-center gap-2"
          >
            <ShoppingCart size={18} />
            Add to cart
          </button>
        </div>
      </div>

      {open && (
        <QuickViewModal product={product} onClose={() => setOpen(false)} />
      )}
    </>
  );
}
