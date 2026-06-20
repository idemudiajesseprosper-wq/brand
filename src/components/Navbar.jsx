"use client";

import Link from "next/link";
import { ShoppingBag, Bell, User } from "lucide-react";
import { useCart } from "./CartContext";
import { signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { getTotalItems, setIsOpen } = useCart();
  const { data: session } = useSession();
  const cartItems = getTotalItems();

  return (
    <nav className="absolute top-0 left-0 right-0 z-30 px-4 py-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-white text-lg font-bold tracking-wider sm:text-2xl">
          ESEFABRICS
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/personalized"
            className="text-white/90 hover:text-white transition"
          >
            Shop
          </Link>
          <Link
            href="/personalized#upcoming"
            className="text-white/90 hover:text-white transition"
          >
            Upcoming Drops
          </Link>
          <Link
            href="/orders"
            className="text-white/90 hover:text-white transition"
          >
            My Orders
          </Link>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Notifications */}
          <Link
            href="/notifications"
            className="relative p-2 text-white hover:bg-white/10 rounded-full transition"
          >
            <Bell size={20} />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              3
            </span>
          </Link>

          {/* Cart */}
          <button
            onClick={() => setIsOpen(true)}
            className="relative p-2 text-white hover:bg-white/10 rounded-full transition"
          >
            <ShoppingBag size={20} />
            {cartItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                {cartItems}
              </span>
            )}
          </button>

          {/* User Menu */}
          {session ? (
            <div className="relative group">
              <button className="flex items-center gap-2 text-white hover:bg-white/10 px-3 py-2 rounded-full transition">
                <User size={20} />
                <span className="hidden md:block">{session.user.name}</span>
              </button>

              {/* Dropdown */}
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link
                  href="/profile"
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-t-lg"
                >
                  My Profile
                </Link>
                <Link
                  href="/orders"
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-100"
                >
                  My Orders
                </Link>
                <Link
                  href="/notifications"
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-100"
                >
                  Notifications
                </Link>
                <button
                  onClick={() => signOut()}
                  className="block w-full text-left px-4 py-3 text-red-600 hover:bg-gray-100 rounded-b-lg"
                >
                  Sign Out
                </button>
              </div>
            </div>
          ) : (
            <Link
            href="/login"
              className="text-white bg-white/20 hover:bg-white/30 px-3 py-2 rounded-full text-sm transition sm:px-4"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
