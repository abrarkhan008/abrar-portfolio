// src/pages/BannersPage.jsx
// =============================================
// This page shows your banner designs
//
// HOW TO ADD A BANNER IMAGE:
// 1. Put image in public/banners/ folder (JPG or PNG)
// 2. Copy one object in the "banners" array below
// 3. Change: title, desc, img (file name), size, type
// =============================================

import { Download, Eye, Image } from "lucide-react";

const banners = [
  // Replace these with your real banner images
  {
    title: "Grand Opening Banner",
    desc: "Eye-catching banner for business grand openings. Bold design with business name and details.",
    img: "/banners/grand-opening.jpg", // ← Put image in public/banners/
    size: "3000 × 1500 px",
    type: "Event",
    emoji: "🎊",
    gradient: "from-red-600 to-orange-500",
  },
  {
    title: "Eid Special Offer Banner",
    desc: "Festive Eid Mubarak banner with discount offers for shops and businesses.",
    img: "/banners/eid-offer.jpg",
    size: "1080 × 1080 px",
    type: "Festival",
    emoji: "🌙",
    gradient: "from-green-700 to-emerald-500",
  },
  {
    title: "Beauty Parlour Banner",
    desc: "Elegant banner for salons with special discount announcement.",
    img: "/banners/beauty-parlour.jpg",
    size: "1920 × 600 px",
    type: "Business",
    emoji: "💄",
    gradient: "from-pink-600 to-rose-500",
  },
  {
    title: "Product Sale Banner",
    desc: "Bold promotional banner for product sales and special offers.",
    img: "/banners/product-sale.jpg",
    size: "1200 × 628 px",
    type: "Marketing",
    emoji: "🛍️",
    gradient: "from-purple-600 to-indigo-500",
  },
  {
    title: "Social Media Post Banner",
    desc: "Square format Instagram/Facebook post banner for daily promotions.",
    img: "/banners/social-post.jpg",
    size: "1080 × 1080 px",
    type: "Social Media",
    emoji: "📱",
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    title: "Wedding Event Banner",
    desc: "Elegant banner for wedding events, receptions and celebrations.",
    img: "/banners/wedding.jpg",
    size: "4000 × 2000 px",
    type: "Wedding",
    emoji: "💒",
    gradient: "from-yellow-600 to-amber-500",
  },
];

const typeColors = {
  Event: "text-orange-400",
  Festival: "text-green-400",
  Business: "text-blue-400",
  Marketing: "text-purple-400",
  "Social Media": "text-pink-400",
  Wedding: "text-yellow-400",
};

export default function BannersPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 glass gold-border rounded-full text-yellow-400 text-sm mb-4">
            🎨 Banner Designs
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-black text-white mb-4">
            Stunning <span className="text-yellow-400">Banners</span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            High-quality banners for events, festivals, social media and
            businesses. Order a custom banner in 24 hours!
          </p>
        </div>

        {/* Add image tip */}
        <div className="mb-10 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl text-sm text-yellow-300">
          <strong>📌 To add your banner images:</strong> Put JPG/PNG files in
          the <code className="bg-black/30 px-1 rounded">public/banners/</code>{" "}
          folder, then update the{" "}
          <code className="bg-black/30 px-1 rounded">img</code> field in this
          page's <code className="bg-black/30 px-1 rounded">banners</code>{" "}
          array.
        </div>

        {/* Banners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {banners.map((b, i) => (
            <div
              key={i}
              className="glass rounded-2xl overflow-hidden gold-border hover:border-yellow-400/40 transition-all duration-300 hover:scale-[1.02] group"
            >
              {/* Preview area */}
              <div
                className={`h-44 bg-gradient-to-br ${b.gradient} flex items-center justify-center relative overflow-hidden`}
              >
                {/* If image exists show it, else show emoji placeholder */}
                <img
                  src={b.img}
                  alt={b.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                {/* Fallback if no image yet */}
                <div
                  className="absolute inset-0 flex items-center justify-center flex-col gap-2"
                  style={{ display: "none" }}
                >
                  <span className="text-5xl">{b.emoji}</span>
                  <span className="text-white/60 text-xs">
                    Preview Coming Soon
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/50 rounded text-xs text-white">
                  {b.size}
                </div>
              </div>

              {/* Card info */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className={`text-xs font-semibold ${typeColors[b.type] || "text-yellow-400"}`}
                  >
                    {b.type}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                  {b.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{b.desc}</p>
                <div className="flex gap-2">
                  <a
                    href={b.img}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 glass gold-border text-yellow-400 rounded-lg text-sm hover:bg-yellow-400/10 transition-all"
                  >
                    <Eye size={14} /> View
                  </a>
                  <a
                    href={b.img}
                    download
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-yellow-400 text-black rounded-lg text-sm font-bold hover:bg-yellow-300 transition-all"
                  >
                    <Download size={14} /> Download
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 glass rounded-3xl p-8 gold-border text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-3">
            Order a Custom Banner 🎨
          </h2>
          <p className="text-gray-400 mb-6">
            Any size • Any design • Ready in 24 hours • WhatsApp delivery
          </p>
          <a
            href="https://wa.me/919380195144?text=Hi%20Abrar!%20I%20need%20a%20custom%20banner%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-300 transition-all hover:scale-105"
          >
            💬 Order Banner on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
