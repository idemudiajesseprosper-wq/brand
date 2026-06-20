"use client";

import { X, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useCart } from "./CartContext";

export default function QuickViewModal({ product, onClose }) {
  const [selectedSize, setSelectedSize] = useState(null);
  const { addToCart } = useCart();

  const sizes = product.sizes || ["S", "M", "L", "XL", "XXL"];

  const handleAddToCart = () => {
    if (sizes.length > 0 && !selectedSize) {
      alert("Please select a size");
      return;
    }
    addToCart(product, selectedSize);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition z-10"
        >
          <X size={20} />
        </button>

        <div className="grid gap-6 p-4 sm:p-6 md:grid-cols-2 md:gap-8 md:p-8">
          {/* Product Image */}
          <div className="aspect-[3/4] bg-gray-100 rounded-xl overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              {product.name}
            </h2>

            <div className="flex flex-wrap items-center gap-3 mt-4">
              <span className="text-2xl font-bold text-gray-900 sm:text-3xl">
                ₦{product.price.toLocaleString()}
              </span>
              {product.oldPrice && (
                <span className="text-lg line-through text-gray-400">
                  ₦{product.oldPrice.toLocaleString()}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-600 mt-6 leading-relaxed">
              {product.description ||
                "Premium quality preorder item. Limited availability. Secure your piece now before slots run out."}
            </p>

            {/* Size Selection */}
            <div className="mt-8">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-gray-900">Select Size</h3>
                <button className="text-sm text-blue-600 hover:underline">
                  Size Guide
                </button>
              </div>

              <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`
                      py-3 border rounded-lg font-medium transition
                      ${
                        selectedSize === size
                          ? "border-gray-900 bg-gray-900 text-white"
                          : "border-gray-300 hover:border-gray-400"
                      }
                    `}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="mt-8 space-y-3 text-sm">
              <div className="flex flex-col gap-1 py-2 border-b sm:flex-row sm:justify-between">
                <span className="text-gray-600">Material</span>
                <span className="font-medium">
                  {product.material || "Premium Cotton"}
                </span>
              </div>
              <div className="flex flex-col gap-1 py-2 border-b sm:flex-row sm:justify-between">
                <span className="text-gray-600">Preorder Deadline</span>
                <span className="font-medium text-red-600">
                  {new Date(product.deadline).toLocaleDateString()}
                </span>
              </div>
              <div className="flex flex-col gap-1 py-2 border-b sm:flex-row sm:justify-between">
                <span className="text-gray-600">Estimated Delivery</span>
                <span className="font-medium">
                  {product.estimatedDelivery || "4-6 weeks after deadline"}
                </span>
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="mt-auto pt-8 space-y-3">
              <button
                onClick={handleAddToCart}
                className="w-full bg-gray-900 text-white py-4 rounded-lg font-semibold hover:bg-gray-800 transition flex items-center justify-center gap-2"
              >
                <ShoppingCart size={20} />
                Add to Cart
              </button>

              <button
                onClick={onClose}
                className="w-full border border-gray-300 py-4 rounded-lg font-semibold hover:bg-gray-50 transition"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
