// src/pages/BrochuresPage.jsx
// =============================================
// This page shows your brochure designs (PDF files)
//
// HOW TO ADD A BROCHURE PDF:
// 1. Put your PDF file inside the "public/brochures/" folder
// 2. Copy one object in the "brochures" array below
// 3. Change: title, desc, file (file name of your PDF), thumb (emoji or image)
//
// Example: { title: "My Brochure", file: "/brochures/my-brochure.pdf", ... }
// =============================================

import { Download, Eye, FileText } from "lucide-react";

const brochures = [
  // ---- ADD YOUR BROCHURES HERE ----
  // Example below — replace with your real files:
  {
    title: "Business Starter Brochure",
    desc: "2-page folded brochure for small businesses. Professional layout with services list.",
    file: "/brochures/business-starter.pdf", // ← Put this PDF in public/brochures/
    pages: "2 Pages",
    category: "Business",
    emoji: "🏢",
  },
  {
    title: "Beauty Parlour Brochure",
    desc: "Elegant brochure for salons and beauty parlours with service menu.",
    file: "/brochures/beauty-parlour.pdf",
    pages: "3 Pages",
    category: "Beauty",
    emoji: "💄",
  },
  {
    title: "Restaurant Menu Brochure",
    desc: "Attractive menu brochure with food photos and pricing layout.",
    file: "/brochures/restaurant.pdf",
    pages: "4 Pages",
    category: "Food",
    emoji: "🍽️",
  },
  {
    title: "Event Invite Brochure",
    desc: "Premium brochure for weddings, engagement and corporate events.",
    file: "/brochures/event-invite.pdf",
    pages: "2 Pages",
    category: "Events",
    emoji: "🎉",
  },
];

// ---- Category colors — don't need to change ----
const catColors = {
  Business: "text-blue-400",
  Beauty: "text-pink-400",
  Food: "text-orange-400",
  Events: "text-purple-400",
  Other: "text-yellow-400",
};

export default function BrochuresPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 glass gold-border rounded-full text-yellow-400 text-sm mb-4">
            📄 PDF Brochures
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-black text-white mb-4">
            Beautiful <span className="text-yellow-400">Brochures</span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            Professional PDF brochures that make your business stand out.
            Download samples or order a custom one!
          </p>
        </div>

        {/* Upload note for you */}
        <div className="mb-10 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl text-sm text-yellow-300">
          <strong>📌 How to add your brochures:</strong> Put your PDF files in
          the{" "}
          <code className="bg-black/30 px-1 rounded">public/brochures/</code>{" "}
          folder. Then edit the{" "}
          <code className="bg-black/30 px-1 rounded">brochures</code> array in
          this file. The download/view buttons will work automatically!
        </div>

        {/* Brochures Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {brochures.map((b, i) => (
            <div
              key={i}
              className="glass rounded-2xl p-6 gold-border hover:border-yellow-400/40 transition-all duration-300 hover:scale-[1.02] group"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl glass flex items-center justify-center text-3xl flex-shrink-0 gold-border">
                  {b.emoji}
                </div>
                {/* Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={`text-xs font-semibold ${catColors[b.category] || catColors.Other}`}
                    >
                      {b.category}
                    </span>
                    <span className="text-xs text-gray-600">•</span>
                    <span className="text-xs text-gray-500">{b.pages}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                    {b.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {b.desc}
                  </p>

                  {/* Buttons */}
                  <div className="flex gap-2 flex-wrap">
                    <a
                      href={b.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2 glass gold-border text-yellow-400 rounded-lg text-sm font-medium hover:bg-yellow-400/10 transition-all"
                    >
                      <Eye size={14} /> Preview
                    </a>
                    <a
                      href={b.file}
                      download
                      className="flex items-center gap-1.5 px-4 py-2 bg-yellow-400 text-black rounded-lg text-sm font-bold hover:bg-yellow-300 transition-all"
                    >
                      <Download size={14} /> Download
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom order CTA */}
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <div className="glass rounded-2xl p-6 gold-border">
            <FileText size={40} className="text-yellow-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">
              Need a Custom Brochure?
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Tell me your business and I'll design a brochure that perfectly
              represents you. Delivered as PDF ready to print!
            </p>
            <a
              href="https://wa.me/919380195144?text=Hi%20Abrar!%20I%20need%20a%20custom%20brochure%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-yellow-400 text-black rounded-xl font-bold text-sm hover:bg-yellow-300 transition-all hover:scale-105"
            >
              💬 Order Custom Brochure
            </a>
          </div>

          <div className="glass rounded-2xl p-6 gold-border">
            <div className="text-4xl mb-4">📦</div>
            <h3 className="text-xl font-bold text-white mb-2">What You Get</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {[
                "Print-ready PDF",
                "High resolution (300 DPI)",
                "Your brand colors & logo",
                "Free revisions",
                "Delivered in 24-48 hours",
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
