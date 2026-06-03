"use client";
import { useState } from "react";

const products = [
  { id: 1, name: { id: "Set Kartu Afirmasi", en: "Affirmation Card Set" }, price: 19000, desc: { id: "30 kartu afirmasi harian", en: "30 daily affirmation cards" } },
  { id: 2, name: { id: "Poster Motivasi A3", en: "Motivational Poster A3" }, price: 22000, desc: { id: "Cetak premium, siap pigura", en: "Premium print, frame-ready" } },
  { id: 3, name: { id: "Self-Love Card Pack", en: "Self-Love Card Pack" }, price: 18000, desc: { id: "20 kartu cinta diri sendiri", en: "20 self-love reminder cards" } },
  { id: 4, name: { id: "Daily Intention Kit", en: "Daily Intention Kit" }, price: 25000, desc: { id: "Kartu + mini journal harian", en: "Cards + mini daily journal" } },
  { id: 5, name: { id: "Poster Mindfulness", en: "Mindfulness Poster" }, price: 20000, desc: { id: "Desain tenang untuk ruang kerja", en: "Calm design for your workspace" } },
  { id: 6, name: { id: "Gratitude Card Set", en: "Gratitude Card Set" }, price: 19000, desc: { id: "25 kartu rasa syukur", en: "25 gratitude reminder cards" } },
];
export default function Home() {
  const [lang, setLang] = useState("id");
  const text = {
    id: { tagline: "Mulai harimu dengan energi positif", sub: "Kartu afirmasi dan poster motivasi untuk jiwa yang lebih kuat", cta: "Lihat Produk", catalog: "Produk Kami", order: "Pesan via WA" },
    en: { tagline: "Start your day with positive energy", sub: "Affirmation cards and motivational posters for a stronger soul", cta: "Shop Now", catalog: "Our Products", order: "Order via WA" },
  };
  const t = text[lang];
  const waBase = "https://wa.me/6281223235666?text=Hi kak, saya mau order ";
  return (
    <main className="min-h-screen bg-[#fdf6ec] font-serif">
      <nav className="flex justify-between items-center px-8 py-5 border-b border-[#e8d5c0]">
        <h1 className="text-2xl text-[#5c3d2e] tracking-wide">Positiva</h1>
        <button onClick={() => setLang(lang === "id" ? "en" : "id")} className="text-sm text-[#8c6b4f] border border-[#c9a882] px-3 py-1 rounded-full hover:bg-[#f0e0cc] transition">
          {lang === "id" ? "EN" : "ID"}
        </button>
      </nav>
	 <section className="flex flex-col items-center justify-center text-center px-8 py-24">
        <h2 className="text-4xl text-[#5c3d2e] mb-4 leading-snug max-w-xl">{t.tagline}</h2>
        <p className="text-[#8c6b4f] text-lg mb-8 max-w-md">{t.sub}</p>
        <a href="#produk" className="bg-[#5c3d2e] text-[#fdf6ec] px-8 py-3 rounded-full text-base hover:bg-[#7a5240] transition">{t.cta}</a>
      </section>
      <section id="produk" className="px-8 pb-24">
        <h3 className="text-2xl text-[#5c3d2e] text-center mb-10">{t.catalog}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {products.map((p) => (
            <div key={p.id} className="bg-white rounded-2xl p-6 shadow-sm border border-[#e8d5c0] flex flex-col gap-3">
              <a href={"/produk/" + p.id + "?lang=" + lang} className="w-full h-40 bg-[#f0e0cc] rounded-xl flex items-center justify-center text-[#c9a882] text-sm hover:opacity-80 transition">foto produk</a>
              <a href={"/produk/" + p.id + "?lang=" + lang} className="text-[#5c3d2e] text-lg hover:underline">{p.name[lang]}</a>
              <p className="text-[#8c6b4f] text-sm">{p.desc[lang]}</p>
              <p className="text-[#5c3d2e] font-semibold">Rp {p.price.toLocaleString("id-ID")}</p>
              <a href={"/bayar?id=" + p.id + "&lang=" + lang} className="mt-auto bg-[#5c3d2e] text-[#fdf6ec] text-center py-2 rounded-full text-sm hover:bg-[#7a5240] transition">{lang === "id" ? "Beli Sekarang" : "Buy Now"}</a>
            </div>
          ))}
        </div>
      </section>
      <footer className="text-center text-[#8c6b4f] text-sm py-6 border-t border-[#e8d5c0]">2025 Positiva. All rights reserved.</footer>
    </main>
  );
}