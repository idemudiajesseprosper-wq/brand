"use client";

import { Package, Truck, CheckCircle, XCircle, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function OrderCard({ order }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getStatusIcon = () => {
    switch (order.status) {
      case "processing":
        return <Package className="text-blue-500" size={20} />;
      case "shipped":
        return <Truck className="text-orange-500" size={20} />;
      case "delivered":
        return <CheckCircle className="text-green-500" size={20} />;
      case "cancelled":
        return <XCircle className="text-red-500" size={20} />;
      default:
        return <Package className="text-gray-500" size={20} />;
    }
  };

  const getStatusText = () => {
    switch (order.status) {
      case "processing":
        return "Processing";
      case "shipped":
        return "Shipped";
      case "delivered":
        return "Delivered";
      case "cancelled":
        return "Cancelled";
      default:
        return "Unknown";
    }
  };

  const getStatusColor = () => {
    switch (order.status) {
      case "processing":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "shipped":
        return "bg-orange-50 text-orange-700 border-orange-200";
      case "delivered":
        return "bg-green-50 text-green-700 border-green-200";
      case "cancelled":
        return "bg-red-50 text-red-700 border-red-200";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
      {/* Order Header */}
      <div className="p-4 sm:p-6">
        <div className="flex flex-col gap-4 mb-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="flex flex-col gap-2 mb-2 sm:flex-row sm:items-center sm:gap-3">
              <h3 className="font-semibold text-lg break-words">
                Order #{order.orderNumber}
              </h3>
              <div
                className={`flex items-center gap-2 px-3 py-1 rounded-full border ${getStatusColor()}`}
              >
                {getStatusIcon()}
                <span className="text-sm font-medium">{getStatusText()}</span>
              </div>
            </div>
            <p className="text-sm text-gray-500">
              Placed on {new Date(order.date).toLocaleDateString()}
            </p>
          </div>

          <div className="text-left sm:text-right">
            <p className="text-sm text-gray-500">Total</p>
            <p className="text-xl font-semibold">
              ₦{order.totalAmount.toLocaleString()}
            </p>
          </div>
        </div>

        {/* Order Items Preview */}
        <div className="space-y-3">
          {order.items.slice(0, isExpanded ? undefined : 2).map((item) => (
            <div key={`${item.id}-${item.size}`} className="flex gap-3 sm:gap-4">
              <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium break-words">{item.name}</h4>
                <p className="text-xs text-gray-500 mt-1">
                  Size: {item.size} • Qty: {item.quantity}
                </p>
                <p className="text-sm font-semibold mt-1">
                  ₦{(item.price * item.quantity).toLocaleString()}
                </p>
              </div>
            </div>
          ))}

          {order.items.length > 2 && !isExpanded && (
            <button
              onClick={() => setIsExpanded(true)}
              className="text-sm text-blue-600 hover:underline"
            >
              +{order.items.length - 2} more items
            </button>
          )}
        </div>

        {/* Tracking Info */}
        {order.status === "shipped" && (
          <div className="mt-6 p-4 bg-orange-50 border border-orange-200 rounded-lg">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-medium text-orange-900">
                  Tracking Number
                </p>
                <p className="text-sm text-orange-700 mt-1">
                  {order.trackingNumber}
                </p>
              </div>
              <button className="text-sm bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition">
                Track Order
              </button>
            </div>
          </div>
        )}

        {/* Delivery Info */}
        {order.status === "delivered" && (
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm font-medium text-green-900">
              Delivered on {new Date(order.deliveredDate).toLocaleDateString()}
            </p>
          </div>
        )}

        {order.status === "processing" && (
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm font-medium text-blue-900">
              Estimated Delivery
            </p>
            <p className="text-sm text-blue-700 mt-1">
              {new Date(order.estimatedDelivery).toLocaleDateString()}
            </p>
          </div>
        )}

        {/* Expand/Collapse Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 w-full flex items-center justify-center gap-2 text-sm text-gray-600 hover:text-gray-900 py-2 border-t"
        >
          <span>{isExpanded ? "Show Less" : "View Details"}</span>
          <ChevronDown
            size={16}
            className={`transition-transform ${isExpanded ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      {/* Expanded Details */}
      {isExpanded && (
        <div className="border-t bg-gray-50 p-4 space-y-6 sm:p-6">
          {/* Shipping Address */}
          <div>
            <h4 className="font-semibold mb-2">Shipping Address</h4>
            <div className="text-sm text-gray-600">
              <p>{order.shippingAddress.name}</p>
              <p>{order.shippingAddress.street}</p>
              <p>
                {order.shippingAddress.city}, {order.shippingAddress.state}
              </p>
              <p>{order.shippingAddress.country}</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-3 sm:flex-row">
            {order.status === "delivered" && (
              <button className="flex-1 bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition">
                Reorder
              </button>
            )}
            <button className="flex-1 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition">
              Contact Support
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
