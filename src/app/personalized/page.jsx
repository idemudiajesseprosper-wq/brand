import Link from "next/link";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import CountdownDashboard from "@/components/CountdownDashboard";
import UpcomingDrops from "@/components/UpcomingDrops";

export default async function personalizedpage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  // Active preorders with countdown
  const activePreorders = [
    {
      id: 1,
      name: "DROP 001 — Essential Hoodie",
      price: 38000,
      oldPrice: 45000,
      image: "/images/hoodie.jpg",
      deadline: "2026-04-30T23:59:59",
      slotsFilled: 45,
      totalSlots: 100,
    },
    {
      id: 2,
      name: "Men's Solid Oxford Shirt",
      price: 19000,
      oldPrice: 29000,
      image: "/images/hoodie.jpg",
      deadline: "2026-03-15T23:59:59",
      slotsFilled: 78,
      totalSlots: 100,
    },
  ];

  // Available preorder products
  const preorderProduct = [
    {
      id: 1,
      name: "DROP 001 — Essential Hoodie",
      price: 38000,
      oldPrice: 45000,
      image: "/images/hoodie.jpg",
      deadline: "2026-04-30",
    },
    {
      id: 2,
      name: "Men's Solid Oxford Shirt Long Sleeve",
      price: 19000,
      oldPrice: 29000,
      image: "/images/hoodie.jpg",
      deadline: "2026-04-30",
    },
    {
      id: 3,
      name: "Men's Long Sleeve Casual Button Down",
      price: 22000,
      oldPrice: 30000,
      image: "/images/hoodie.jpg",
      deadline: "2026-04-30",
    },
    {
      id: 4,
      name: "Men's Crew T-Shirts, Multipack",
      price: 18000,
      oldPrice: 30000,
      image: "/images/hoodie.jpg",
      deadline: "2026-04-30",
    },
    {
      id: 5,
      name: "Men's Crew T-Shirts, Multipack",
      price: 18000,
      oldPrice: 30000,
      image: "/images/hoodie.jpg",
      deadline: "2026-04-30",
    },
    {
      id: 6,
      name: "Men's Crew T-Shirts, Multipack",
      price: 18000,
      oldPrice: 30000,
      image: "/images/hoodie.jpg",
      deadline: "2026-04-30",
    },
    {
      id: 7,
      name: "Men's Crew T-Shirts, Multipack",
      price: 18000,
      oldPrice: 30000,
      image: "/images/hoodie.jpg",
      deadline: "2026-04-30",
    },
    {
      id: 8,
      name: "Men's Crew T-Shirts, Multipack",
      price: 18000,
      oldPrice: 30000,
      image: "/images/hoodie.jpg",
      deadline: "2026-04-30",
    },
  ];

  // Upcoming product drops
  const upcomingDrops = [
    {
      id: 1,
      name: "DROP 002 — Summer Collection",
      description: "Lightweight linen shirts and breathable essentials for the warm season.",
      launchDate: "2026-03-20T12:00:00",
      limitedQuantity: true,
    },
    {
      id: 2,
      name: "DROP 003 — Premium Denim Line",
      description: "Handcrafted Japanese selvedge denim with custom fits.",
      launchDate: "2026-04-05T15:00:00",
      limitedQuantity: true,
    },
    {
      id: 3,
      name: "DROP 004 — Accessories Drop",
      description: "Leather bags, belts, and wallets to complete your look.",
      launchDate: "2026-04-25T10:00:00",
      limitedQuantity: false,
    },
  ];

  return (
    <div>
      {/* HERO */}
      <div className="bg-[url('/images/hero.jpeg')] min-h-[100svh] bg-cover bg-center relative flex items-center">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Navbar />

        <section className="relative z-20 px-4 pb-12 pt-28 sm:px-8 lg:px-16">
          <h1 className="text-white tracking-[0.08em] text-3xl sm:text-4xl sm:tracking-[0.16em]">
            Welcome back,
          </h1>

          <h2 className="text-[#C19A6B] font-semibold text-4xl mt-2 break-words sm:text-6xl">
            {session.user.name}
          </h2>

          <p className="text-white/80 mt-6 max-w-lg">
            Discover styles curated just for you.
          </p>

          <Link
            href="#countdown"
            className="inline-block bg-[#F07B7B] text-white px-8 py-3 rounded-full mt-8"
          >
            View Active Preorders
          </Link>
        </section>
      </div>

      {/* COUNTDOWN DASHBOARD */}
      <section
        id="countdown"
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl tracking-[0.06em] mb-6 sm:text-4xl sm:tracking-[0.15em]">
            Active Preorder Countdown
          </h2>

          <p className="text-gray-600 max-w-xl mb-12">
            Don't miss out! These preorders are closing soon.
          </p>

          <CountdownDashboard activePreorders={activePreorders} />
        </div>
      </section>

      {/* UPCOMING DROPS CALENDAR */}
      <section className="py-20 bg-[#FAF9F7]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl tracking-[0.06em] mb-6 sm:text-4xl sm:tracking-[0.15em]">
            Upcoming Drops
          </h2>

          <p className="text-gray-600 max-w-xl mb-12">
            Mark your calendar! Get notified when these drops go live.
          </p>

          <UpcomingDrops drops={upcomingDrops} />
        </div>
      </section>

      {/* PREORDER */}
      <section
        id="available"
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl tracking-[0.06em] mb-6 sm:text-4xl sm:tracking-[0.15em]">
            Available for Preorder
          </h2>

          <p className="text-gray-600 max-w-xl mb-12">
            Produced only after preorder closes. Limited slots.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {preorderProduct.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
