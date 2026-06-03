"use client";
import React, { useState } from "react";

const products = [
  { id: 1, name: { id: "Set Kartu Afirmasi", en: "Affirmation Card Set" }, price: 19000, desc: { id: "30 kartu afirmasi harian", en: "30 daily affirmation cards" }, detail: { id: "Set berisi 30 kartu afirmasi positif yang dirancang untuk menemanimu setiap hari. Cocok diletakkan di meja kerja, cermin, atau dibawa ke mana saja. Dicetak dengan kualitas premium, tahan lama.", en: "A set of 30 positive affirmation cards designed to accompany you every day. Perfect for your desk, mirror, or on the go. Printed with premium quality, durable finish." } },
  { id: 2, name: { id: "Poster Motivasi A3", en: "Motivational Poster A3" }, price: 22000, desc: { id: "Cetak premium, siap pigura", en: "Premium print, frame-ready" }, detail: { id: "Poster motivasi ukuran A3 dengan desain elegan dan kata-kata yang menginspirasi. Dicetak di atas kertas premium 210gsm. Siap dipigura dan dipajang di ruang kerja atau kamarmu.", en: "A3 motivational poster with elegant design and inspiring words. Printed on premium 210gsm paper. Frame-ready for your workspace or bedroom." } },
  { id: 3, name: { id: "Self-Love Card Pack", en: "Self-Love Card Pack" }, price: 18000, desc: { id: "20 kartu cinta diri sendiri", en: "20 self-love reminder cards" }, detail: { id: "20 kartu pengingat untuk mencintai diri sendiri. Setiap kartu berisi pesan lembut yang membantu kamu lebih menghargai diri di hari-hari yang berat.", en: "20 gentle reminder cards for self-love. Each card carries a soft message to help you appreciate yourself on hard days." } },
  { id: 4, name: { id: "Daily Intention Kit", en: "Daily Intention Kit" }, price: 25000, desc: { id: "Kartu + mini journal harian", en: "Cards + mini daily journal" }, detail: { id: "Paket lengkap untuk memulai harimu dengan niat yang kuat. Berisi kartu afirmasi dan mini journal untuk mencatat tujuan harianmu.", en: "A complete kit to start your day with strong intention. Includes affirmation cards and a mini journal to record your daily goals." } },
  { id: 5, name: { id: "Poster Mindfulness", en: "Mindfulness Poster" }, price: 20000, desc: { id: "Desain tenang untuk ruang kerja", en: "Calm design for your workspace" }, detail: { id: "Poster dengan desain minimalis dan tenang, menampilkan kata-kata mindfulness untuk membantu fokus dan ketenangan di ruang kerjamu.", en: "A minimalist and calming poster featuring mindfulness words to help you stay focused and peaceful at your workspace." } },
  { id: 6, name: { id: "Gratitude Card Set", en: "Gratitude Card Set" }, price: 19000, desc: { id: "25 kartu rasa syukur", en: "25 gratitude reminder cards" }, detail: { id: "25 kartu pengingat rasa syukur untuk membantu kamu fokus pada hal-hal baik setiap hari. Cocok sebagai hadiah untuk orang tersayang.", en: "25 gratitude reminder cards to help you focus on the good things every day. Perfect as a gift for your loved ones." } },
];
export default function ProductDetail({ params }) {
  const { id } = React.use(params);
  const [lang, setLang] = useState("id");
  const productId = parseInt(id);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <main className="min-h-screen bg-[#fdf6ec] flex items-center justify-center">
        <p className="text-[#8c6b4f]">Produk tidak ditemukan.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#fdf6ec] font-serif px-6 py-12">
      <div className="max-w-lg mx-auto">
        <div className="flex justify-between items-center mb-6">
          <a href="/" className="text-sm text-[#8c6b4f] hover:underline">← Kembali</a>
          <button
            onClick={() => setLang(lang === "id" ? "en" : "id")}
            className="text-sm text-[#8c6b4f] border border-[#c9a882] px-3 py-1 rounded-full hover:bg-[#f0e0cc] transition"
          >
            {lang === "id" ? "EN" : "ID"}
          </button>
        </div>

        <div className="w-full h-64 bg-[#f0e0cc] rounded-2xl flex items-center justify-center text-[#c9a882] text-sm mb-6">
          foto produk
        </div>

        <h1 className="text-2xl text-[#5c3d2e] mb-2">{product.name[lang]}</h1>
        <p className="text-[#8c6b4f] text-sm mb-4">{product.desc[lang]}</p>
        <p className="text-xl text-[#5c3d2e] font-semibold mb-6">Rp {product.price.toLocaleString("id-ID")}</p>

        <div className="bg-white rounded-2xl border border-[#e8d5c0] p-6 mb-8">
          <p className="text-[#5c3d2e] text-sm leading-relaxed">{product.detail[lang]}</p>
        </div>
		<div className="flex gap-3">
        <a
            href={"/bayar?id=" + product.id + "&lang=" + lang}
            className="flex-1 bg-[#5c3d2e] text-[#fdf6ec] text-center py-3 rounded-full text-sm hover:bg-[#7a5240] transition"
          >
            {lang === "id" ? "Beli Sekarang" : "Buy Now"}
          </a>
        <a
            href="/"
            className="flex-1 border border-[#5c3d2e] text-[#5c3d2e] text-center py-3 rounded-full text-sm hover:bg-[#f0e0cc] transition"
          >
            {lang === "id" ? "Lihat Produk Lain" : "See Other Products"}
          </a>
        </div>
      </div>
    </main>
  );
}