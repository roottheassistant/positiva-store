"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

const products = [
  { id: 1, name: { id: "Set Kartu Afirmasi", en: "Affirmation Card Set" }, price: 19000 },
  { id: 2, name: { id: "Poster Motivasi A3", en: "Motivational Poster A3" }, price: 22000 },
  { id: 3, name: { id: "Self-Love Card Pack", en: "Self-Love Card Pack" }, price: 18000 },
  { id: 4, name: { id: "Daily Intention Kit", en: "Daily Intention Kit" }, price: 25000 },
  { id: 5, name: { id: "Poster Mindfulness", en: "Mindfulness Poster" }, price: 20000 },
  { id: 6, name: { id: "Gratitude Card Set", en: "Gratitude Card Set" }, price: 19000 },
];

export default function Bayar() {
  const searchParams = useSearchParams();
  const productId = parseInt(searchParams.get("id"));
  const lang = searchParams.get("lang") || "id";
  const product = products.find((p) => p.id === productId);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const waMessage = product
    ? "Halo, saya sudah transfer untuk " + product.name.id + " sebesar Rp " + product.price.toLocaleString("id-ID") + ". HP: " + phone + " | Email: " + email
    : "";
  const waLink = "https://wa.me/628121223235666?text=" + encodeURIComponent(waMessage);

  if (!product) {
    return (
      <main className="min-h-screen bg-[#fdf6ec] flex items-center justify-center">
        <p className="text-[#8c6b4f]">Produk tidak ditemukan.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#fdf6ec] font-serif px-6 py-12">
      <div className="max-w-md mx-auto">
        <a href="/" className="text-sm text-[#8c6b4f] hover:underline mb-6 block">← Kembali</a>
        <h1 className="text-2xl text-[#5c3d2e] mb-1">Pembayaran</h1>
        <p className="text-[#8c6b4f] text-sm mb-6">{product.name[lang]}</p>
        <div className="bg-white rounded-2xl border border-[#e8d5c0] p-6 mb-6 text-center">
          <p className="text-[#8c6b4f] text-sm mb-2">Total pembayaran</p>
          <p className="text-3xl text-[#5c3d2e] font-semibold mb-4">Rp {product.price.toLocaleString("id-ID")}</p>
          <p className="text-[#8c6b4f] text-sm mb-4">Scan QRIS di bawah ini:</p>
          <img src="/qris.jpg" alt="QRIS Positiva" className="w-120 h-169 object-contain mx-auto rounded-xl" />
          <p className="text-xs text-[#c9a882] mt-3">Pastikan nominal sesuai harga produk</p>
        </div>
		<div className="bg-white rounded-2xl border border-[#e8d5c0] p-6 mb-6">
          <p className="text-[#5c3d2e] text-sm mb-4">Isi data kamu untuk konfirmasi:</p>
          <input
            type="tel"
            placeholder="Nomor HP"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border border-[#e8d5c0] rounded-xl px-4 py-3 text-sm text-[#5c3d2e] mb-3 focus:outline-none focus:border-[#c9a882]"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-[#e8d5c0] rounded-xl px-4 py-3 text-sm text-[#5c3d2e] focus:outline-none focus:border-[#c9a882]"
          />
        </div>
        <a
          href={phone && email ? waLink : "#"}
          target="_blank"
          rel="noopener noreferrer"
          className={"block text-center py-3 rounded-full text-sm transition " + (phone && email ? "bg-[#5c3d2e] text-[#fdf6ec] hover:bg-[#7a5240]" : "bg-[#e8d5c0] text-[#c9a882] cursor-not-allowed")}
        >
          {phone && email ? "Konfirmasi Pembayaran via WA" : "Isi nomor HP dan email dulu"}
        </a>
      </div>
    </main>
  );
}