
"use client";
import { useMemo, useState } from "react";

const products = [
  { name: "Adizero Evo SL BAPE Blue Pink Gold", price: 4200, brand: "ADIDAS", category: "Running", badge: "NEW IN" },
  { name: "Adizero Evo SL White Silver", price: 3499, brand: "ADIDAS", category: "Running", badge: "TRENDING" },
  { name: "PUMA + La France Gradient Black / Cool Dark Grey", price: 3499, brand: "PUMA", category: "Lifestyle" },
  { name: "Jordan 1 Low Aura Squadron Blue", price: 3199, brand: "JORDAN", category: "Lifestyle", badge: "NEW IN" },
  { name: "Adidas Adizero Evo SL Exo White Iron Metal", price: 3499, brand: "ADIDAS", category: "Running" },
  { name: "Nike SB Dunk Low Pro White Gum", price: 3199, brand: "NIKE", category: "Skate", badge: "TRENDING" },
  { name: "Tiger Mexico 66 Sabot Oatmeal Habanero", price: 2999, brand: "TIGER", category: "Lifestyle" },
  { name: "Tiger Mexico 66 Sabot Cream Mustard", price: 2999, brand: "TIGER", category: "Lifestyle" },
  { name: "ASICS Trabuco Max 4 Wheat Yellow", price: 3499, brand: "ASICS", category: "Running", badge: "NEW IN" },
  { name: "Nike Dunk Low SE Monsoon Blue", price: 3499, brand: "NIKE", category: "Lifestyle" },
  { name: "ASICS Gel Kayano 31 Cool Matcha / Celadon", price: 3499, brand: "ASICS", category: "Running" },
  { name: "Jordan 4 Retro Metallic Gold", price: 3499, brand: "JORDAN", category: "Lifestyle", badge: "TRENDING" },
];

const money = (n: number) => `₹${n.toLocaleString("en-IN")}`;

const wa = (p: (typeof products)[number]) =>
  `https://wa.me/?text=${encodeURIComponent(
    `Hi SHOEPHORIA! I’m interested in ${p.name} (${money(p.price)}). Please confirm available sizes, stock and delivery details.`
  )}`;

export default function Home() {
  const [tab, setTab] = useState("All products");
  const [query, setQuery] = useState("");
  const [brand, setBrand] = useState("All");
  const [sort, setSort] = useState("Featured");
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  const [selected, setSelected] = useState<(typeof products)[number] | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [expanded, setExpanded] = useState("");

  const brands = ["All", ...Array.from(new Set(products.map(p => p.brand)))];

  const filtered = useMemo(() => {
    let list = products.filter(p => {
      const tabMatch =
        tab === "All products" ||
        (tab === "New arrivals" && p.badge === "NEW IN") ||
        ((tab === "Best sellers" || tab === "Trending") && p.badge === "TRENDING");

      return (
        tabMatch &&
        (brand === "All" || p.brand === brand) &&
        `${p.name} ${p.brand} ${p.category}`.toLowerCase().includes(query.toLowerCase())
      );
    });

    if (sort === "Price: low to high") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "Price: high to low") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "Name: A to Z") list = [...list].sort((a, b) => a.name.localeCompare(b.name));

    return list;
  }, [tab, query, brand, sort]);

  const hero = products[3];

  return (
    <main className="min-h-screen bg-[#fbfaf8] pb-24 text-[#171615]">
      <div className="bg-[#171514] px-4 py-3 text-center text-[10px] tracking-[.22em] text-white">
        ✦ &nbsp; FREE SHIPPING ON PREPAID ORDERS &nbsp; ✦
      </div>

      <header className="sticky top-0 z-30 border-b border-[#dedbd7] bg-[#fbfaf8]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-10">
          <a href="#" className="text-[22px] font-black tracking-[-.09em]">
            SHOE<span className="text-[#842b3d]">PHORIA</span>
            <span className="mt-1 block text-[7px] tracking-[.34em]">SNEAKER CULTURE</span>
          </a>

          <nav className="hidden gap-8 text-xs tracking-widest md:flex">
            <a href="#collection">SHOP ALL</a>
            <a href="#collection" onClick={() => setTab("New arrivals")}>NEW ARRIVALS</a>
            <a href="#about">OUR STORY</a>
          </nav>

          <div className="flex items-center gap-5">
            <button aria-label="Search" onClick={() => document.getElementById("product-search")?.focus()} className="text-2xl">⌕</button>
            <a href="https://wa.me/?text=Hi%20SHOEPHORIA" target="_blank" rel="noreferrer">◉</a>
            <button aria-label="Menu" onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">☰</button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t bg-white px-6 py-4 text-sm">
            <a className="block py-2" href="#collection">Shop all</a>
            <a className="block py-2" href="#about">Our story</a>
            <a className="block py-2" href="https://wa.me/?text=Hi%20SHOEPHORIA">WhatsApp</a>
          </div>
        )}
      </header>

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-12 text-center text-[clamp(4rem,17vw,13rem)] font-black leading-none tracking-[-.08em] text-[#eeece9]">
          PURE HEAT
        </div>

        <div className="relative mx-auto flex min-h-[650px] max-w-7xl flex-col items-center justify-between px-5 pb-12 pt-36 text-center md:min-h-[760px] md:pt-44">
          <div className="flex flex-1 items-center justify-center">
            <div className="flex h-[310px] w-[min(82vw,620px)] items-center justify-center text-[10px] tracking-widest text-[#aaa49e] md:h-[410px]">
              <span className="text-center">
                <span className="mb-3 block text-5xl text-[#d8d4cf]">＋</span>
                PRODUCT IMAGE COMING SOON
              </span>
            </div>
          </div>

          <div className="w-full">
            <p className="mb-2 font-mono text-xs tracking-widest text-[#6f6964]">{hero.brand}</p>
            <h1 className="text-4xl font-bold tracking-[-.07em] md:text-6xl">{hero.name}</h1>
            <p className="mt-2 text-[#77716c]">Find your next favourite pair</p>
            <div className="mt-7 flex items-center justify-center gap-7">
              <a href="#collection" className="bg-[#842b3d] px-7 py-4 text-sm text-white">Explore the vault ↘</a>
              <button onClick={() => setSelected(hero)} className="border-b px-1 py-3 text-sm">Quick view</button>
            </div>
          </div>
        </div>

        <div className="mx-auto h-[3px] max-w-6xl bg-[#dedbd7]">
          <div className="h-full w-1/3 bg-[#842b3d]" />
        </div>
      </section>

      <section id="collection" className="mx-auto max-w-7xl px-5 py-12 md:px-10 md:py-20">
        <div className="mb-8 flex flex-wrap gap-x-8 gap-y-4 border-b text-sm">
          {["All products", "New arrivals", "Best sellers", "Trending"].map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`border-b-2 pb-4 ${tab === t ? "border-[#842b3d]" : "border-transparent text-[#77716c]"}`}
            >
              {t}
              {t === "All products" && <span className="ml-2 text-[#842b3d]">12</span>}
            </button>
          ))}
        </div>

        <div className="flex items-center border-b py-4">
          <span className="mr-3 text-2xl">⌕</span>
          <input
            id="product-search"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Find a name, brand or colour"
            className="min-w-0 flex-1 bg-transparent outline-none"
          />
          <span>→</span>
        </div>

        <div className="mt-4 grid grid-cols-2 border bg-white">
          <button
            onClick={() => { setFilterOpen(!filterOpen); setSortOpen(false); }}
            className="border-r px-3 py-4 text-sm"
          >
            ☷ &nbsp; Filters
          </button>
          <button
            onClick={() => { setSortOpen(!sortOpen); setFilterOpen(false); }}
            className="px-3 py-4 text-sm"
          >
            ↕ &nbsp; Sort by
          </button>
        </div>

        {filterOpen && (
          <div className="border border-t-0 bg-white p-5">
            <p className="mb-3 text-xs tracking-widest">BRAND</p>
            <div className="flex flex-wrap gap-2">
              {brands.map(b => (
                <button
                  key={b}
                  onClick={() => setBrand(b)}
                  className={`border px-4 py-2 text-sm ${brand === b ? "border-[#842b3d] bg-[#842b3d] text-white" : "border-[#dedbd7]"}`}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>
        )}

        {sortOpen && (
          <div className="border border-t-0 bg-white p-3">
            {["Featured", "Price: low to high", "Price: high to low", "Name: A to Z"].map(s => (
              <button
                key={s}
                onClick={() => { setSort(s); setSortOpen(false); }}
                className="block w-full px-3 py-3 text-left text-sm"
              >
                {s}{sort === s ? " ✓" : ""}
              </button>
            ))}
          </div>
        )}

        <div className="mt-7 flex items-center gap-3 font-mono text-sm text-[#716b66]">
          <span>{filtered.length} products</span>
          {(brand !== "All" || query || tab !== "All products") && (
            <button className="underline" onClick={() => { setBrand("All"); setQuery(""); setTab("All products"); }}>
              Clear filters ×
            </button>
          )}
        </div>

        <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-7">
          {filtered.map(p => (
            <article key={p.name}>
              <button
                onClick={() => setSelected(p)}
                className="relative flex aspect-square w-full items-center justify-center bg-[#efeeec] p-4 text-center text-[10px] tracking-widest text-[#aaa49e]"
              >
                {p.badge && <span className="absolute left-3 top-3 bg-[#fbfaf8] px-3 py-2 text-[9px] text-[#842b3d]">{p.badge}</span>}
                <span><span className="mb-2 block text-4xl">＋</span>PRODUCT IMAGE COMING SOON</span>
              </button>
              <div className="pt-4">
                <p className="mb-2 font-mono text-[10px] tracking-widest text-[#77716c]">{p.brand}</p>
                <button onClick={() => setSelected(p)} className="min-h-12 text-left text-sm leading-6">{p.name}</button>
                <p className="mt-4">{money(p.price)}</p>
              </div>
            </article>
          ))}
        </div>

        {!filtered.length && <p className="py-16 text-center text-sm text-[#77716c]">No sneakers match your search.</p>}
      </section>

      <section id="about" className="border-y bg-[#f2efec] px-6 py-20 text-center">
        <p className="mb-4 font-mono text-xs tracking-widest text-[#842b3d]">✦ THE SHOEPHORIA EDIT</p>
        <h2 className="text-4xl font-bold tracking-[-.07em] md:text-6xl">YOUR STYLE. YOUR MOVE.</h2>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#716b66]">
          A destination for sneaker lovers. Explore everyday essentials, fresh silhouettes and standout styles.
        </p>
        <a href="#collection" className="mt-8 inline-block border-b border-black pb-2 text-sm">Explore sneakers →</a>
      </section>

      <footer className="bg-[#171514] px-6 py-12 text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row">
          <div>
            <p className="text-2xl font-black">SHOEPHORIA.</p>
            <p className="mt-2 font-mono text-[10px] tracking-widest text-[#b9b2ac]">SNEAKER CULTURE</p>
          </div>
          <div className="flex gap-6 text-xs">
            <a href="#collection">Shop</a>
            <a href="#about">About</a>
            <a href="https://wa.me/?text=Hi%20SHOEPHORIA">WhatsApp</a>
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-7xl border-t border-[#494440] pt-5 font-mono text-[10px] text-[#aaa39d]">
          © 2026 SHOEPHORIA. ALL RIGHTS RESERVED.
        </p>
      </footer>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/55 p-0 sm:items-center sm:p-5"
          onClick={() => setSelected(null)}
        >
          <div
            className="max-h-[92vh] w-full max-w-2xl overflow-y-auto bg-[#fbfaf8] p-5 sm:p-8"
            onClick={e => e.stopPropagation()}
          >
            <div className="mb-5 flex justify-between">
              <span className="font-mono text-xs tracking-widest">PRODUCT VIEW</span>
              <button onClick={() => setSelected(null)} className="text-2xl">×</button>
            </div>
            <div className="flex aspect-[1.25] items-center justify-center bg-[#efeeec] text-xs tracking-widest text-[#aaa49e]">
              PRODUCT IMAGE COMING SOON
            </div>
            <p className="mt-7 font-mono text-xs tracking-widest text-[#77716c]">{selected.brand} / {selected.category}</p>
            <h2 className="mt-3 text-2xl font-bold">{selected.name}</h2>
            <p className="mt-6 text-3xl">{money(selected.price)}</p>
            <p className="mt-2 text-sm text-[#77716c]">Please confirm size availability and delivery details with our team before payment.</p>
            <a href={wa(selected)} target="_blank" rel="noreferrer" className="mt-6 flex justify-between bg-[#842b3d] px-5 py-5 text-sm text-white">
              ◉ &nbsp; Order on WhatsApp <span>↗</span>
            </a>

            {["Product details", "Shipping & delivery", "Returns & replacement"].map(label => (
              <div key={label} className="border-t border-[#dedbd7]">
                <button
                  onClick={() => setExpanded(expanded === label ? "" : label)}
                  className="flex w-full justify-between py-5 text-left font-semibold"
                >
                  {label}<span>{expanded === label ? "⌃" : "⌄"}</span>
                </button>
                {expanded === label && (
                  <p className="pb-5 text-sm leading-7 text-[#77716c]">
                    {label === "Product details"
                      ? `${selected.brand} · ${selected.category} sneakers.`
                      : label === "Shipping & delivery"
                      ? "Contact our team on WhatsApp to confirm delivery timelines and shipping details before ordering."
                      : "Please ask our team for the current return and replacement terms before payment."}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {selected && (
        <div className="fixed bottom-0 left-0 right-0 z-[60] flex items-center justify-between border-t bg-[#fbfaf8] px-4 py-3 sm:hidden">
          <span className="text-xl font-semibold">{money(selected.price)}</span>
          <a href={wa(selected)} target="_blank" rel="noreferrer" className="bg-[#842b3d] px-5 py-4 text-sm text-white">
            ◉ Order on WhatsApp
          </a>
        </div>
      )}
    </main>
  );
}
