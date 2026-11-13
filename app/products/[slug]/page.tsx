
"use client";

import { useParams } from "next/navigation";
import { useState } from "react";

const products = [
  { slug: "adizero-evo-sl-bape-blue-pink-gold", name: "Adizero Evo SL BAPE Blue Pink Gold", price: 4200, brand: "ADIDAS" },
  { slug: "adizero-evo-sl-white-silver", name: "Adizero Evo SL White Silver", price: 3499, brand: "ADIDAS" },
  { slug: "puma-la-france-gradient-black", name: "PUMA + La France Gradient Black / Cool Dark Grey", price: 3499, brand: "PUMA" },
  { slug: "jordan-1-low-aura-squadron-blue", name: "Jordan 1 Low Aura Squadron Blue", price: 3199, brand: "JORDAN" },
  { slug: "adidas-adizero-evo-sl-exo-white", name: "Adidas Adizero Evo SL Exo White Iron Metal", price: 3499, brand: "ADIDAS" },
  { slug: "nike-sb-dunk-low-pro-white-gum", name: "Nike SB Dunk Low Pro White Gum", price: 3199, brand: "NIKE" },
  { slug: "tiger-mexico-66-sabot-oatmeal", name: "Tiger Mexico 66 Sabot Oatmeal Habanero", price: 2999, brand: "TIGER" },
  { slug: "tiger-mexico-66-sabot-cream-mustard", name: "Tiger Mexico 66 Sabot Cream Mustard", price: 2999, brand: "TIGER" },
  { slug: "asics-trabuco-max-4-wheat-yellow", name: "ASICS Trabuco Max 4 Wheat Yellow", price: 3499, brand: "ASICS" },
  { slug: "nike-dunk-low-se-monsoon-blue", name: "Nike Dunk Low SE Monsoon Blue", price: 3499, brand: "NIKE" },
  { slug: "asics-gel-kayano-31-cool-matcha", name: "ASICS Gel Kayano 31 Cool Matcha / Celadon", price: 3499, brand: "ASICS" },
  { slug: "jordan-4-retro-metallic-gold", name: "Jordan 4 Retro Metallic Gold", price: 3499, brand: "JORDAN" },
];

const sizes = ["UK 3", "UK 4", "UK 5", "UK 6", "UK 7", "UK 8", "UK 9", "UK 10", "UK 11", "UK 12"];

const money = (price: number) => `₹${price.toLocaleString("en-IN")}`;

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;

  const product = products.find(p => p.slug === slug);

  const [size, setSize] = useState("");
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#fbfaf8] px-6 text-center">
        <h1 className="text-3xl font-bold">Product not found</h1>
        <a href="/" className="mt-6 bg-[#842b3d] px-6 py-3 text-white">
          Back to SHOEPHORIA
        </a>
      </main>
    );
  }

  const message = encodeURIComponent(
    `Hi SHOEPHORIA! I want to order:\n\nProduct: ${product.name}\nPrice: ${money(product.price)}\nSize: ${size}\n\nPlease confirm availability and delivery details.`
  );

  const whatsappLink = `https://wa.me/?text=${message}`;

  return (
    <main className="min-h-screen bg-[#fbfaf8] text-[#171615]">

      <div className="bg-[#171514] py-3 text-center text-[10px] tracking-[.2em] text-white">
        FREE SHIPPING ON PREPAID ORDERS
      </div>

      <header className="border-b border-[#dedbd7] px-5 py-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="/" className="text-2xl font-black tracking-[-.08em]">
            SHOE<span className="text-[#842b3d]">PHORIA</span>
          </a>
          <a href="/" className="text-sm">← Back to shop</a>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 py-8 md:py-14">

        <div className="mb-8 text-xs text-[#77716c]">
          <a href="/">Home</a> / {product.brand} / {product.name}
        </div>

        <div className="grid gap-10 md:grid-cols-2 md:gap-16">

          <section>
            <div className="flex aspect-square items-center justify-center bg-[#efeeec] text-center text-xs tracking-widest text-[#aaa49e]">
              <div>
                <span className="mb-3 block text-5xl">＋</span>
                PRODUCT IMAGE COMING SOON
              </div>
            </div>

            <div className="mt-4 grid grid-cols-4 gap-3">
              {[0, 1, 2, 3].map(i => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`flex aspect-square items-center justify-center bg-[#efeeec] text-xs text-[#aaa49e] ${activeImage === i ? "border-2 border-[#842b3d]" : ""}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <p className="mt-3 text-center text-[10px] tracking-widest text-[#aaa49e]">
              PRODUCT PHOTOS TO BE ADDED
            </p>
          </section>

          <section>
            <p className="font-mono text-xs tracking-[.2em] text-[#842b3d]">
              {product.brand}
            </p>

            <h1 className="mt-4 text-3xl font-bold leading-tight tracking-[-.05em] md:text-5xl">
              {product.name}
            </h1>

            <p className="mt-6 text-2xl font-semibold">
              {money(product.price)}
            </p>

            <p className="mt-3 text-sm text-[#77716c]">
              Select your UK size to enquire about availability.
            </p>

            <div className="mt-10">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-sm font-semibold tracking-widest">SELECT SIZE</h2>
                <span className="text-xs text-[#77716c]">UK SIZES</span>
              </div>

              <div className="grid grid-cols-5 gap-2">
                {sizes.map(s => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`border py-4 text-sm transition ${size === s ? "border-[#842b3d] bg-[#842b3d] text-white" : "border-[#dedbd7] bg-white hover:border-black"}`}
                  >
                    {s.replace("UK ", "")}
                  </button>
                ))}
              </div>
              <p className="mt-3 text-xs text-[#77716c]">
                Size availability will be confirmed by our team on WhatsApp.
              </p>
            </div>

            <a
              href={size ? whatsappLink : undefined}
              target="_blank"
              rel="noreferrer"
              onClick={e => {
                if (!size) {
                  e.preventDefault();
                  alert("Please select your UK size first.");
                }
              }}
              className="mt-8 flex w-full items-center justify-between bg-[#842b3d] px-6 py-5 text-sm font-semibold text-white"
            >
              <span>◉ &nbsp; ORDER ON WHATSAPP</span>
              <span>↗</span>
            </a>

            <p className="mt-4 text-center text-xs text-[#77716c]">
              No online payment required. Confirm your order directly with us.
            </p>

            <div className="mt-10 border-t border-[#dedbd7]">
              {[
                ["Product information", "Product: " + product.name + "\nBrand: " + product.brand],
                ["Shipping & delivery", "Contact our team on WhatsApp to confirm delivery timelines and shipping details before ordering."],
                ["Returns & replacement", "Please contact our team for the current return and replacement terms before placing your order."]
              ].map(([heading, content]) => (
                <details key={heading} className="border-b border-[#dedbd7] py-5">
                  <summary className="cursor-pointer text-sm font-semibold">
                    {heading}
                  </summary>
                  <p className="mt-4 whitespace-pre-line text-sm leading-7 text-[#77716c]">
                    {content}
                  </p>
                </details>
              ))}
            </div>
          </section>

        </div>

        <section className="mt-24 border-t border-[#dedbd7] pt-12">
          <p className="text-center font-mono text-xs tracking-widest text-[#842b3d]">
            THE SHOEPHORIA EDIT
          </p>
          <h2 className="mt-3 text-center text-3xl font-bold tracking-[-.05em]">
            YOU MAY ALSO LIKE
          </h2>

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {products.filter(p => p.slug !== product.slug).slice(0, 4).map(p => (
              <a key={p.slug} href={`/products/${p.slug}`}>
                <div className="flex aspect-square items-center justify-center bg-[#efeeec] text-center text-[10px] tracking-widest text-[#aaa49e]">
                  PRODUCT IMAGE COMING SOON
                </div>
                <h3 className="mt-3 text-sm">{p.name}</h3>
                <p className="mt-2 text-sm font-semibold">{money(p.price)}</p>
              </a>
            ))}
          </div>
        </section>

      </div>

      <footer className="bg-[#171514] px-6 py-10 text-center text-white">
        <p className="text-xl font-black">SHOEPHORIA.</p>
        <p className="mt-2 text-[10px] tracking-widest text-[#aaa39e]">
          SNEAKER CULTURE
        </p>
        <p className="mt-8 text-[10px] text-[#aaa39e]">
          © 2026 SHOEPHORIA. ALL RIGHTS RESERVED.
        </p>
      </footer>

    </main>
  );
}
