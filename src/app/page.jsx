"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("Hoodies");
  const categories = [
    "Hoodies",
    "Caps & Bags",
    "Trending",
    "Outwear",
    "Accessories",
  ];

  const products = [
    { id: 1, image: "/images/1.jpg", category: "Hoodies" },
    { id: 2, image: "/images/2.jpg", category: "Hoodies" },
    { id: 3, image: "/images/3.jpg", category: "Trending" },
    { id: 4, image: "/images/4.jpg", category: "Outwear" },
    { id: 5, image: "/images/5.jpg", category: "Accessories" },
    { id: 6, image: "/images/6.jpg", category: "Caps & Bags" },
  ];

  const filteredProducts = products.filter(
    (item) => item.category === activeCategory
  );

  return (
    <div className="overflow-x-hidden">
      <div className="relative flex min-h-[100svh] items-center bg-[url('/images/hero.jpeg')] bg-cover bg-center">
        <div className="absolute inset-0 z-10 bg-black/50" />
        <header className="absolute left-0 top-0 z-30 w-full px-4 py-5 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
            <span className="shrink-0 text-xl font-bold text-white sm:text-2xl">
              Omoba
            </span>
            <nav className="hidden items-center gap-6 text-white md:flex">
              <Link href="#" className="transition hover:text-[#C19A6B]">
                Shop
              </Link>
              <Link href="#" className="transition hover:text-[#C19A6B]">
                Services
              </Link>
              <Link href="#" className="transition hover:text-[#C19A6B]">
                About
              </Link>
              <Link href="#" className="transition hover:text-[#C19A6B]">
                Contact
              </Link>
            </nav>
            <Link
              href="#"
              className="shrink-0 rounded-full bg-[#F07B7B] px-4 py-2 text-sm font-medium text-white transition-transform duration-300 hover:scale-105 sm:px-5"
            >
              Pre-Order
            </Link>
          </div>
        </header>

        <section className="relative z-20 flex min-h-[100svh] w-full flex-col items-start justify-end px-4 pb-10 pt-28 text-left sm:px-8 md:px-12 lg:px-16">
          <div className="mb-4 mt-4 flex flex-wrap justify-start gap-3">
            {["Boldly You", "Effortless Glam", "Urban Vogue"].map((label) => (
              <button
                key={label}
                className="rounded-full border border-white/60 px-4 py-2 text-xs font-light text-white sm:px-6 sm:text-sm"
              >
                {label}
              </button>
            ))}
          </div>

          <h1 className="max-w-5xl text-4xl font-light leading-tight tracking-[0.08em] text-white sm:text-5xl md:text-6xl md:tracking-[0.14em]">
            Express Your{" "}
            <span className="font-semibold italic text-[#C19A6B]">
              Individuality
            </span>
          </h1>

          <h2 className="mt-2 max-w-5xl text-3xl font-light leading-tight tracking-[0.06em] text-white sm:text-5xl md:text-6xl md:tracking-[0.12em]">
            with{" "}
            <span className="italic text-[#C19A6B]">Distinctive Fashion</span>
          </h2>

          <Link
            href="#"
            className="mt-6 rounded-full bg-[#F07B7B] px-6 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:scale-105 sm:px-8"
          >
            Join the Waitlist
          </Link>
        </section>
      </div>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 text-black">
          <div className="flex flex-col items-start gap-10 md:flex-row lg:gap-20">
            <div className="flex max-w-xl flex-col justify-center">
              <h2 className="text-3xl tracking-[0.04em] sm:text-4xl sm:tracking-[0.10em]">
                <b>Sophisticated</b> Style for
              </h2>
              <h3 className="text-3xl tracking-[0.04em] sm:text-4xl sm:tracking-[0.10em]">
                the{" "}
                <b>
                  <i>Fashion-Savvy</i>
                </b>
              </h3>
              <p className="mt-6 text-sm font-light leading-relaxed tracking-[0.06em] sm:tracking-[0.12em]">
                Sophisticated yet trendy, our collection offers a perfect
                balance of elegance and modernity, catering to those with a
                discerning eye for fashion.
              </p>
            </div>

            <div className="w-full md:w-auto">
              <img
                src="/images/sec hero.jpg"
                alt=""
                className="h-56 w-full rounded-2xl object-cover object-top shadow-lg md:h-[200px] md:w-[380px]"
              />
            </div>
          </div>

          <div className="mt-14 flex flex-col items-start gap-10 md:mt-20 md:flex-row md:items-end lg:gap-20">
            <img
              src="/images/3rd hero.jpg"
              alt=""
              className="h-56 w-full rounded-2xl object-cover object-top shadow-lg md:h-[200px] md:w-[650px]"
            />

            <div className="flex flex-col items-start self-center text-left md:items-center md:text-center">
              <h3>
                <b>
                  <i>/Style Redefined</i>
                </b>
              </h3>
              <h3 className="mt-4">/Chic Meets Street</h3>
              <h3 className="mt-4">
                <b>
                  <i>/Fashion Forward</i>
                </b>
              </h3>
              <h3 className="mt-4">/Modern Elegance</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 text-black">
          <h2 className="mb-12 max-w-xl text-3xl font-light leading-tight sm:mb-16 sm:text-4xl">
            Innovative <span className="font-semibold">Designs</span> for
            <br />
            the <span className="italic">Modern</span> World
          </h2>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-14">
            {[
              [
                "Personal Styling",
                "One-on-one consultations with professional stylists to curate a wardrobe that reflects your unique personality and lifestyle.",
              ],
              [
                "Custom Tailoring Service",
                "Bespoke clothing and expert alterations for garments that fit perfectly and enhance your style.",
              ],
              [
                "Wardrobe Revamp Service",
                "Fashion consultants assess and refresh your wardrobe, mixing and matching pieces for stylish, contemporary looks.",
              ],
            ].map(([title, copy]) => (
              <div key={title}>
                <h3 className="mb-3 text-lg font-semibold">{title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 text-black">
          <h2 className="mb-8 text-3xl font-semibold leading-tight sm:text-4xl">
            What's Available
          </h2>

          <div className="mb-12 flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-lg px-4 py-2 text-sm transition sm:px-5 ${
                  activeCategory === cat
                    ? "bg-black text-white"
                    : "border border-black text-black hover:bg-black hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {filteredProducts.map((item) => (
              <div
                key={item.id}
                className="group relative h-[280px] w-full overflow-hidden rounded-2xl shadow-lg hover:shadow-xl sm:h-[320px]"
              >
                <img
                  src={item.image}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 opacity-0 transition-opacity group-hover:opacity-100">
                  <button className="rounded-lg bg-white px-6 py-2 text-sm text-black">
                    Pre-Order
                  </button>
                  <button className="rounded-lg border border-white px-6 py-2 text-sm text-white">
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F9F9F9] py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 text-black">
          <h2 className="mb-6 text-3xl font-light leading-tight sm:text-4xl">
            Why <span className="font-semibold italic">Pre-Order</span> With Us
          </h2>

          <p className="mb-16 max-w-xl text-sm leading-relaxed text-gray-600">
            We believe in intentional fashion. Pre-ordering allows us to focus
            on quality, exclusivity, and thoughtful production without
            compromise.
          </p>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-12">
            {[
              [
                "Limited Editions",
                "Each piece is produced in carefully curated quantities, ensuring exclusivity and individuality.",
              ],
              [
                "Premium Craftsmanship",
                "Pre-orders allow us to perfect every detail, from fabric selection to finishing.",
              ],
              [
                "Sustainable Approach",
                "We produce only what's needed, reducing waste and supporting responsible fashion practices.",
              ],
              [
                "Priority Access",
                "Pre-order customers receive first access to new releases and early delivery.",
              ],
            ].map(([title, copy]) => (
              <div key={title}>
                <h3 className="mb-3 text-lg font-semibold">{title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{copy}</p>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <a
              href="#"
              className="inline-block rounded-full border border-black px-8 py-3 text-sm transition hover:bg-black hover:text-white"
            >
              Explore Upcoming Drops
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 text-black">
          <div className="mb-20 flex flex-col gap-10 md:mb-32 md:flex-row lg:gap-20">
            <div className="max-w-xl">
              <h2 className="mb-6 text-3xl font-light tracking-[0.04em] sm:text-4xl sm:tracking-[0.10em]">
                Our <span className="font-semibold italic">Story</span>
              </h2>
              <p className="text-sm leading-relaxed tracking-[0.06em] text-gray-700 sm:tracking-[0.12em]">
                Omoba was born from the belief that fashion should be
                intentional, expressive, and personal. We create pieces that
                move beyond trends, designs that speak to individuality,
                confidence, and modern identity.
                <br />
                <br />
                Every collection is thoughtfully crafted, blending contemporary
                silhouettes with refined details, allowing you to express
                yourself without saying a word.
              </p>
            </div>

            <div className="w-full md:w-[420px]">
              <img
                src="/images/story.jpg"
                alt="Brand Story"
                className="h-[260px] w-full rounded-2xl object-cover shadow-lg"
              />
            </div>
          </div>

          <div className="flex flex-col items-center gap-10 md:flex-row-reverse lg:gap-20">
            <div className="max-w-xl">
              <h2 className="mb-6 text-3xl font-light tracking-[0.04em] sm:text-4xl sm:tracking-[0.10em]">
                Our <span className="font-semibold italic">Vision</span>
              </h2>
              <p className="text-sm leading-relaxed tracking-[0.06em] text-gray-700 sm:tracking-[0.12em]">
                We envision a future where fashion is produced with purpose,
                worn with confidence, and experienced as a form of
                self-expression.
                <br />
                <br />
                By embracing pre-order models and limited releases, we aim to
                redefine modern fashion, creating meaningful pieces while
                minimizing waste and maximizing value.
              </p>
            </div>

            <div className="w-full md:w-[420px]">
              <img
                src="/images/vision.jpg"
                alt="Brand Vision"
                className="h-[260px] w-full rounded-2xl object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-16 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 text-center text-white">
          <h2 className="mb-6 text-3xl font-light tracking-[0.05em] md:text-5xl sm:tracking-[0.12em]">
            Secure Your{" "}
            <span className="italic text-[#C19A6B]">Pre-Order</span> Now
          </h2>

          <p className="mx-auto mb-10 max-w-xl text-sm leading-relaxed tracking-[0.06em] text-white/80 sm:tracking-[0.12em]">
            Be part of a thoughtfully crafted release. Limited quantities.
            Designed with intention. Delivered with care.
          </p>

          <a
            href="#"
            className="inline-block rounded-full bg-[#F07B7B] px-7 py-4 font-semibold tracking-wide text-white transition-transform duration-300 hover:scale-105 sm:px-10"
          >
            Secure My Pre-Order
          </a>

          <div className="mt-10 flex flex-wrap justify-center gap-4 text-xs tracking-[0.10em] text-white/70 sm:gap-6 sm:tracking-[0.15em]">
            <span>No Risk</span>
            <span className="hidden sm:inline">-</span>
            <span>Full Updates</span>
            <span className="hidden sm:inline">-</span>
            <span>Guaranteed Delivery</span>
          </div>
        </div>
      </section>

      <footer className="bg-[#0B0B0B] py-14 text-white/80 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-14">
            <div>
              <h3 className="mb-4 text-2xl font-semibold text-white">Omoba</h3>
              <p className="text-sm leading-relaxed tracking-[0.06em] sm:tracking-[0.12em]">
                A fashion brand rooted in individuality, intentional design,
                and timeless expression.
              </p>
            </div>

            {[
              ["Shop", "Pre-Order", "Collections", "Trending", "Accessories"],
              ["Company", "About Us", "Our Vision", "Contact", "FAQs"],
              [
                "Legal",
                "Privacy Policy",
                "Terms of Service",
                "Returns Policy",
              ],
            ].map(([heading, ...links]) => (
              <div key={heading}>
                <h4 className="mb-4 text-sm font-semibold tracking-[0.15em] text-white">
                  {heading}
                </h4>
                <ul className="space-y-3 text-sm">
                  {links.map((item) => (
                    <li key={item}>
                      <a href="#" className="transition hover:text-white">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center text-xs tracking-[0.08em] md:flex-row sm:tracking-[0.15em]">
            <span>(c) {new Date().getFullYear()} Omoba. All rights reserved.</span>
            <div className="flex gap-6">
              <a href="#" className="transition hover:text-white">
                Instagram
              </a>
              <a href="#" className="transition hover:text-white">
                Twitter
              </a>
              <a href="#" className="transition hover:text-white">
                TikTok
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
