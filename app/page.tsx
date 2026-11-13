
"use client";

import { useState } from "react";

const products = [
  {
    name: "Classic Street Runner",
    price: "$89",
    category: "EVERYDAY COLLECTION",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
  },
  {
    name: "Retro Court Sneakers",
    price: "$95",
    category: "RETRO COLLECTION",
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800",
  },
  {
    name: "Urban Essential",
    price: "$79",
    category: "DAILY ESSENTIALS",
    image: "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?w=800",
  },
  {
    name: "Modern Runner",
    price: "$110",
    category: "NEW ARRIVALS",
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=800",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cart, setCart] = useState(0);

  return (
    <main className="min-h-screen bg-white text-black">
      <div className="bg-black text-white text-center text-xs tracking-widest py-3">
        DISCOVER YOUR NEXT FAVORITE PAIR
      </div>

      <header className="relative flex items-center justify-between px-5 md:px-12 py-6 border-b border-gray-200">
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <a href="#" className="text-2xl md:text-3xl font-black tracking-tighter">
          SHOEPHORIA<span className="text-gray-400">.</span>
        </a>

        <nav className={`${menuOpen ? "flex" : "hidden"} md:flex absolute md:static top-full left-0 w-full md:w-auto bg-white z-20 flex-col md:flex-row gap-6 px-6 py-6 md:p-0 text-xs font-bold tracking-widest`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>HOME</a>
          <a href="#collection" onClick={() => setMenuOpen(false)}>COLLECTION</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>ABOUT</a>
        </nav>

        <button className="text-sm font-bold" aria-label="Shopping cart">
          BAG ({cart})
        </button>
      </header>

      <section
        id="home"
        className="relative min-h-[570px] md:min-h-[690px] bg-black flex items-center overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1552346154-21d32810aba3?w=1800"
          alt="Sneaker collection"
          className="absolute inset-0 w-full h-full object-cover opacity-55"
        />

        <div className="relative z-10 px-7 md:px-16 py-24 text-white max-w-4xl">
          <p className="text-xs md:text-sm tracking-[0.4em] mb-7">
            THE NEW STREETWEAR DESTINATION
          </p>

          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9]">
            WALK YOUR
            <br />
            OWN WAY.
          </h1>

          <p className="text-gray-200 mt-7 mb-9 max-w-md text-sm md:text-base leading-7">
            Find your style. Discover your next pair. Explore a collection
            made for everyday movement.
          </p>

          <a
            href="#collection"
            className="inline-block bg-white text-black px-9 py-4 text-xs font-bold tracking-widest hover:bg-gray-200 transition"
          >
            EXPLORE COLLECTION →
          </a>
        </div>
      </section>

      <section className="px-6 md:px-12 py-16 border-b border-gray-100">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            "CURATED STYLES",
            "EVERYDAY COMFORT",
            "FRESH COLLECTIONS",
            "MADE FOR YOU",
          ].map((item) => (
            <div key={item}>
              <p className="text-xs font-bold tracking-widest">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="collection" className="px-5 md:px-12 py-20">
        <div className="flex justify-between items-end mb-10">
          <div>
            <p className="text-xs tracking-[0.3em] text-gray-500 mb-3">
              FIND YOUR NEXT FAVORITE
            </p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter">
              THE COLLECTION
            </h2>
          </div>
          <p className="text-xs text-gray-500 hidden md:block">
            EXPLORE THE LATEST STYLES
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-7">
          {products.map((product) => (
            <article key={product.name} className="group">
              <div className="bg-[#f3f3f3] overflow-hidden aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="pt-4">
                <p className="text-[9px] md:text-[10px] text-gray-500 tracking-widest mb-2">
                  {product.category}
                </p>
                <h3 className="font-bold text-sm md:text-base">
                  {product.name}
                </h3>
                <p className="text-sm mt-2">{product.price}</p>
                <button
                  onClick={() => setCart(cart + 1)}
                  className="mt-4 border border-black px-4 py-3 w-full text-[10px] font-bold tracking-widest hover:bg-black hover:text-white transition"
                >
                  ADD TO BAG
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#f1f0ed] px-7 md:px-16 py-20 text-center">
        <p className="text-xs tracking-[0.35em] mb-5">THE SHOEPHORIA EDIT</p>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter max-w-3xl mx-auto">
          YOUR STYLE.
          <br />
          YOUR MOVEMENT.
          <br />
          YOUR STORY.
        </h2>
        <a
          href="#collection"
          className="inline-block mt-9 bg-black text-white px-9 py-4 text-xs font-bold tracking-widest"
        >
          SHOP THE COLLECTION
        </a>
      </section>

      <section id="about" className="px-7 md:px-16 py-16 text-center">
        <h2 className="text-3xl font-black tracking-tighter mb-5">
          ABOUT SHOEPHORIA
        </h2>
        <p className="max-w-xl mx-auto text-gray-600 text-sm leading-7">
          A destination for sneaker lovers and streetwear enthusiasts.
          Discover styles that complement your everyday look.
        </p>
      </section>

      <footer className="bg-black text-white px-7 md:px-16 py-12">
        <h2 className="text-3xl font-black tracking-tighter">
          SHOEPHORIA.
        </h2>
        <p className="text-gray-400 text-xs mt-4">
          FIND YOUR STYLE. WALK YOUR WAY.
        </p>
        <div className="border-t border-gray-700 mt-10 pt-6 text-xs text-gray-400">
          © 2026 SHOEPHORIA. ALL RIGHTS RESERVED.
        </div>
      </footer>
    </main>
  );
}
