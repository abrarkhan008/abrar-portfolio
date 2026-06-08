// src/pages/LogosPage.jsx
// =============================================
// Shows your logo designs
// HOW TO ADD A LOGO:
// 1. Put image in public/logos/ folder
// 2. Add a new object to the "logos" array below
// =============================================

import { Download, Eye } from "lucide-react";

const logos = [
  {
    title: "Khanam Artistry Logo",
    client: "Mehendi Artist",
    img: "/logos/khanam-artistry.png",
    style: "Elegant, Floral",
    emoji: "🌿",
    gradient: "from-green-700 to-teal-600",
  },
  {
    title: "Beauty Studio Logo",
    client: "Beauty Parlour",
    img: "/logos/beauty-studio.png",
    style: "Modern, Minimal",
    emoji: "💄",
    gradient: "from-pink-700 to-rose-600",
  },
  {
    title: "JK Fancy Store Logo",
    client: "Retail Store",
    img: "/logos/jk-fancy.png",
    style: "Bold, Clean",
    emoji: "🏪",
    gradient: "from-blue-700 to-indigo-600",
  },
  {
    title: "Tech Startup Logo",
    client: "Software Company",
    img: "/logos/tech-startup.png",
    style: "Minimal, Modern",
    emoji: "🚀",
    gradient: "from-cyan-700 to-blue-600",
  },
  {
    title: "Restaurant Logo",
    client: "Food Business",
    img: "/logos/restaurant.png",
    style: "Warm, Inviting",
    emoji: "🍽️",
    gradient: "from-orange-700 to-red-600",
  },
  {
    title: "Electrician Logo",
    client: "Service Business",
    img: "/logos/electrician.png",
    style: "Bold, Professional",
    emoji: "⚡",
    gradient: "from-yellow-700 to-amber-600",
  },
];

export default function LogosPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 glass gold-border rounded-full text-yellow-400 text-sm mb-4">
            ✨ Logo Designs
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-black text-white mb-4">
            Brand <span className="text-yellow-400">Logos</span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            Every business needs a strong identity. I create unique logos that
            people remember.
          </p>
        </div>

        {/* Tip */}
        <div className="mb-10 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl text-sm text-yellow-300">
          <strong>📌 To add your logos:</strong> Put PNG files in{" "}
          <code className="bg-black/30 px-1 rounded">public/logos/</code>
          and update the <code className="bg-black/30 px-1 rounded">
            logos
          </code>{" "}
          array in this file.
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {logos.map((l, i) => (
            <div
              key={i}
              className="glass rounded-2xl overflow-hidden gold-border hover:border-yellow-400/40 transition-all hover:scale-[1.02] group"
            >
              {/* Logo preview */}
              <div
                className={`h-48 bg-gradient-to-br ${l.gradient} flex items-center justify-center relative`}
              >
                <img
                  src={l.img}
                  alt={l.title}
                  className="max-h-32 max-w-full object-contain p-4"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <div
                  className="absolute inset-0 items-center justify-center flex-col gap-2"
                  style={{ display: "none" }}
                >
                  <span className="text-6xl">{l.emoji}</span>
                  <span className="text-white/60 text-xs">Logo Preview</span>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-bold text-white mb-0.5 group-hover:text-yellow-400 transition-colors">
                  {l.title}
                </h3>
                <p className="text-xs text-gray-500 mb-1">{l.client}</p>
                <p className="text-xs text-yellow-400/70 mb-3">
                  Style: {l.style}
                </p>
                <div className="flex gap-2">
                  <a
                    href={l.img}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 glass gold-border text-yellow-400 rounded-lg text-xs font-medium hover:bg-yellow-400/10 transition-all"
                  >
                    View
                  </a>
                  <a
                    href={l.img}
                    download
                    className="flex-1 text-center py-2 bg-yellow-400 text-black rounded-lg text-xs font-bold hover:bg-yellow-300 transition-all"
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="glass rounded-2xl p-6 gold-border">
            <div className="text-4xl mb-3">✨</div>
            <h3 className="text-xl font-bold text-white mb-2">
              Need a Logo for Your Brand?
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Share your business name and what you do — I'll create a
              professional logo that represents your brand perfectly.
            </p>
            <a
              href="https://wa.me/919380195144?text=Hi%20Abrar!%20I%20need%20a%20logo%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-yellow-400 text-black rounded-xl font-bold text-sm hover:bg-yellow-300 transition-all hover:scale-105"
            >
              💬 Order Your Logo
            </a>
          </div>

          <div className="glass rounded-2xl p-6 gold-border">
            <div className="text-4xl mb-3">📦</div>
            <h3 className="text-xl font-bold text-white mb-2">
              Logo Package Includes
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {[
                "PNG & JPG formats",
                "Transparent background (PNG)",
                "Multiple color versions",
                "High resolution file",
                "Fast delivery 24–48 hrs",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-yellow-400">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
