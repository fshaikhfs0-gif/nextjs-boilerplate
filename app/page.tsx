
"use client";

import { useMemo, useState } from "react";

const products = [
  { name: "Adizero Evo SL BAPE Blue Pink Gold", price: "₹4,200", category: "RUNNING COLLECTION" },
  { name: "Adizero Evo SL White Silver", price: "₹3,499", category: "RUNNING COLLECTION" },
  { name: "PUMA + La France Gradient Black / Cool Dark Grey", price: "₹3,499", category: "LIFESTYLE COLLECTION" },
  { name: "Jordan 1 Low Aura Squadron Blue", price: "₹3,199", category: "LIFESTYLE COLLECTION" },
  { name: "Adidas Adizero Evo SL Exo White Iron Metal", price: "₹3,499", category: "RUNNING COLLECTION" },
  { name: "Nike SB Dunk Low Pro White Gum", price: "₹3,199", category: "SKATE COLLECTION" },
  { name: "Tiger Mexico 66 Sabot Oatmeal Habanero", price: "₹2,999", category: "LIFESTYLE COLLECTION" },
  { name: "Tiger Mexico 66 Sabot Cream Mustard", price: "₹2,999", category: "LIFESTYLE COLLECTION" },
  { name: "ASICS Trabuco Max 4 Wheat Yellow", price: "₹3,499", category: "RUNNING COLLECTION" },
  { name: "Nike Dunk Low SE Monsoon Blue", price: "₹3,499", category: "LIFESTYLE COLLECTION" },
  { name: "ASICS Gel Kayano 31 Cool Matcha / Celadon", price: "₹3,499", category: "RUNNING COLLECTION" },
  { name: "Jordan 4 Retro Metallic Gold", price: "₹3,499", category: "LIFESTYLE COLLECTION" },
];

export default function Home() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("ALL");
  const [cart, setCart] = useState<string[]>([]);
  const [selected, setSelected] = useState<(typeof products)[number] | null>(null);

  const categories = ["ALL", ...Array.from(new Set(products.map(p => p.category)))];

  const filtered = useMemo(() =>
    products.filter(p =>
      (category === "ALL" || p.category === category) &&
      p.name.toLowerCase().includes(query.toLowerCase())
    ), [category, query]);

  return (
    <main className="min-h-screen bg-white text-black">
      <div className="bg-black px-4 py-3 text-center text-xs tracking-widest text-white">
        NEW COLLECTION • FIND YOUR NEXT PAIR
      </div>

      <header className="flex items-center justify-between border-b px-5 py-5 md:px-12">
        <a href="#" className="text-2xl font-black tracking-tighter">
          SHOEPHORIA<span className="text-gray-400">.</span>
        </a>
        <nav className="flex gap-5 text-xs font-bold tracking-widest">
          <a href="#collection">SHOP</a>
          <a href="#about">ABOUT</a>
        </nav>
        <span className="text-xs font-bold">BAG ({cart.length})</span>
      </header>

      <section className="relative flex min-h-[440px] items-center overflow-hidden bg-neutral-950 px-7 py-20 text-white md:min-h-[570px] md:px-16">
        <img
          src="https://images.unsplash.com/photo-1552346154-21d32810aba3?w=1800"
          alt="Sneaker collection"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="relative max-w-2xl">
          <p className="mb-5 text-xs tracking-widest">THE SNEAKER DESTINATION</p>
          <h1 className="text-6xl font-black leading-none tracking-tighter md:text-8xl">
            FIND YOUR<br />NEXT PAIR.
          </h1>
          <p className="my-7 max-w-md text-sm leading-7 text-gray-200">
            Explore fresh silhouettes, everyday essentials and standout styles.
          </p>
          <a href="#collection" className="inline-block bg-white px-8 py-4 text-xs font-bold text-black">
            SHOP COLLECTION →
          </a>
        </div>
      </section>

      <section id="collection" className="px-5 py-16 md:px-12 md:py-20">
        <div className="mb-8">
          <p className="mb-2 text-xs tracking-widest text-gray-500">CURATED FOR SNEAKER LOVERS</p>
          <h2 className="text-4xl font-black tracking-tighter md:text-5xl">THE COLLECTION</h2>
          <p className="mt-3 text-sm text-gray-500">Explore our first 12 styles.</p>
        </div>

        <div className="mb-7 flex flex-col gap-3">
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search sneakers..."
            className="w-full border border-gray-300 px-4 py-3 text-sm outline-none"
          />

          <div className="flex flex-wrap gap-2">
            {categories.map(item => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`border px-4 py-2 text-xs font-semibold ${
                  category === item
                    ? "border-black bg-black text-white"
                    : "border-gray-300"
                }`}
              >
                {item === "ALL" ? "ALL" : item.replace(" COLLECTION", "")}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 md:gap-x-7">
          {filtered.map(product => (
            <article key={product.name}>
              <button
                onClick={() => setSelected(product)}
                className="flex aspect-square w-full items-center justify-center bg-[#f3f3f1] p-5 text-center text-xs font-semibold text-gray-500"
              >
                PRODUCT IMAGE<br />COMING SOON
              </button>

              <div className="pt-4">
                <p className="mb-2 text-[10px] text-gray-500">{product.category}</p>
                <h3 className="text-sm font-bold leading-5">{product.name}</h3>
                <p className="mt-2 text-sm">{product.price}</p>
                <button
                  onClick={() => setSelected(product)}
                  className="mt-4 w-full border border-black px-3 py-3 text-[10px] font-bold hover:bg-black hover:text-white"
                >
                  VIEW DETAILS
                </button>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="py-12 text-center text-sm text-gray-500">
            No sneakers match your search.
          </p>
        )}
      </section>

      <section id="about" className="bg-[#f2f1ee] px-7 py-16 text-center">
        <p className="mb-4 text-xs tracking-widest">THE SHOEPHORIA EDIT</p>
        <h2 className="text-4xl font-black tracking-tighter md:text-6xl">
          YOUR STYLE. YOUR MOVE.
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-gray-600">
          A destination for sneaker lovers. Discover styles that bring your everyday look together.
        </p>
      </section>

      <footer className="bg-black px-7 py-10 text-white md:px-12">
        <h2 className="text-2xl font-black">SHOEPHORIA.</h2>
        <p className="mt-3 text-xs text-gray-400">FIND YOUR STYLE. WALK YOUR WAY.</p>
        <p className="mt-8 border-t border-gray-700 pt-5 text-xs text-gray-500">
          © 2026 SHOEPHORIA. ALL RIGHTS RESERVED.
        </p>
      </footer>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="w-full max-w-md bg-white p-6"
            onClick={e => e.stopPropagation()}
          >
            <div className="mb-5 flex justify-between">
              <p className="text-xs font-bold">PRODUCT DETAILS</p>
              <button onClick={() => setSelected(null)}>✕</button>
            </div>

            <div className="mb-5 flex aspect-video items-center justify-center bg-[#f3f3f1] text-xs text-gray-500">
              PRODUCT IMAGE COMING SOON
            </div>

            <h3 className="text-xl font-bold">{selected.name}</h3>
            <p className="mt-2">{selected.price}</p>

            <p className="mt-4 text-xs leading-6 text-gray-500">
              Please confirm available sizes, stock and delivery details before ordering.
            </p>

            <button
              onClick={() => {
                setCart(items => [...items, selected.name]);
                setSelected(null);
              }}
              className="mt-6 w-full bg-black py-4 text-xs font-bold text-white"
            >
              ADD TO BAG
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
