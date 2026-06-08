// src/pages/WorkPicsPage.jsx
// =============================================
// Shows your work photos, certificates, resumes
//
// HOW TO ADD IMAGES:
// 1. Put images in public/work/ folder
// 2. Add objects to the correct array below
// =============================================

import { Download, Eye, Award, FileText, Camera } from "lucide-react";

// ---- CERTIFICATES — edit or add your certificates here ----
const certificates = [
  {
    title: "AI DevOps Certificate",
    issuer: "Skill India",
    date: "Jan 2025",
    img: "/work/cert-aidevops.jpg", // ← Put in public/work/
    emoji: "🤖",
  },
  {
    title: "Cloud Computing Certificate",
    issuer: "Ethnotech",
    date: "Feb 2024",
    img: "/work/cert-cloud.jpg",
    emoji: "☁️",
  },
  {
    title: "App Development Certificate",
    issuer: "Run Shaw Technology",
    date: "Nov 2023",
    img: "/work/cert-app.jpg",
    emoji: "📱",
  },
];

// ---- RESUMES — add your resume PDF links here ----
const resumes = [
  {
    title: "Abrar Khan – Full Stack Developer",
    desc: "MERN Stack, React, Node.js, MongoDB specialist resume",
    file: "/work/Abrar_Khan_Resume.pdf", // ← Put in public/work/
    emoji: "📄",
  },
];

// ---- WORK PHOTOS — photos of your work/process ----
const workPhotos = [
  {
    title: "Client Website Delivered",
    desc: "Makeup artist website completed and delivered to client",
    img: "/work/photo1.jpg",
    emoji: "💻",
  },
  {
    title: "Banner Design Work",
    desc: "Festival banner designed for local shop",
    img: "/work/photo2.jpg",
    emoji: "🎨",
  },
];

export default function WorkPicsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 glass gold-border rounded-full text-yellow-400 text-sm mb-4">
            🗂️ My Portfolio
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-black text-white mb-4">
            Work & <span className="text-yellow-400">Achievements</span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Certificates, resumes and work samples — evidence of my skills and
            experience.
          </p>
        </div>

        {/* Tip box */}
        <div className="mb-10 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl text-sm text-yellow-300">
          <strong>📌 To add your files:</strong> Put images/PDFs in{" "}
          <code className="bg-black/30 px-1 rounded">public/work/</code> folder,
          then update the arrays in this file.
        </div>

        {/* ====== CERTIFICATES ====== */}
        <section className="mb-16">
          <h2 className="font-display text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <Award className="text-yellow-400" size={28} />
            Certificates
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {certificates.map((c, i) => (
              <div
                key={i}
                className="glass rounded-2xl overflow-hidden gold-border hover:border-yellow-400/40 transition-all hover:scale-[1.02] group"
              >
                <div className="h-36 bg-gradient-to-br from-yellow-800/30 to-amber-900/20 flex items-center justify-center relative">
                  <img
                    src={c.img}
                    alt={c.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "block";
                    }}
                  />
                  <span className="text-5xl" style={{ display: "none" }}>
                    {c.emoji}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-white text-sm mb-1 group-hover:text-yellow-400 transition-colors">
                    {c.title}
                  </h3>
                  <p className="text-xs text-gray-500 mb-0.5">{c.issuer}</p>
                  <p className="text-xs text-yellow-400/70 mb-3">{c.date}</p>
                  <div className="flex gap-2">
                    <a
                      href={c.img}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2 glass gold-border text-yellow-400 rounded-lg text-xs hover:bg-yellow-400/10 transition-all"
                    >
                      View
                    </a>
                    <a
                      href={c.img}
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
        </section>

        {/* ====== RESUMES ====== */}
        <section className="mb-16">
          <h2 className="font-display text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <FileText className="text-yellow-400" size={28} />
            Resumes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {resumes.map((r, i) => (
              <div
                key={i}
                className="glass rounded-2xl p-6 gold-border hover:border-yellow-400/40 transition-all hover:scale-[1.01] group flex items-start gap-4"
              >
                <div className="w-14 h-14 glass gold-border rounded-xl flex items-center justify-center text-3xl flex-shrink-0">
                  {r.emoji}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-white mb-1 group-hover:text-yellow-400 transition-colors">
                    {r.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{r.desc}</p>
                  <div className="flex gap-2">
                    <a
                      href={r.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2 glass gold-border text-yellow-400 rounded-lg text-sm hover:bg-yellow-400/10 transition-all"
                    >
                      <Eye size={14} /> Preview
                    </a>
                    <a
                      href={r.file}
                      download
                      className="flex items-center gap-1.5 px-4 py-2 bg-yellow-400 text-black rounded-lg text-sm font-bold hover:bg-yellow-300 transition-all"
                    >
                      <Download size={14} /> Download PDF
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ====== WORK PHOTOS ====== */}
        <section className="mb-16">
          <h2 className="font-display text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <Camera className="text-yellow-400" size={28} />
            Work Photos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {workPhotos.map((p, i) => (
              <div
                key={i}
                className="glass rounded-2xl overflow-hidden gold-border hover:border-yellow-400/40 transition-all hover:scale-[1.02] group"
              >
                <div className="h-40 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center relative">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div
                    className="absolute inset-0 items-center justify-center flex-col gap-1"
                    style={{ display: "none" }}
                  >
                    <span className="text-4xl">{p.emoji}</span>
                    <span className="text-gray-500 text-xs">
                      Photo Coming Soon
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-white text-sm group-hover:text-yellow-400 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-gray-500 text-xs mt-1">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="glass rounded-2xl p-8 gold-border text-center">
          <h3 className="font-display text-2xl font-bold text-white mb-2">
            Need a Resume or Certificate Design?
          </h3>
          <p className="text-gray-400 mb-6 text-sm">
            I design beautiful, professional resumes and certificates too!
          </p>
          <a
            href="https://wa.me/919380195144?text=Hi%20Abrar!%20I%20need%20a%20resume%20or%20certificate%20design."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-300 transition-all hover:scale-105"
          >
            💬 Order Design on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
