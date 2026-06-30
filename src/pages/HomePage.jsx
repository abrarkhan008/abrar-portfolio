// src/pages/HomePage.jsx
// =============================================
// This is your MAIN landing page
// Edit the text inside quotes ("...") to change content
// Don't change the HTML/JSX structure unless you know React
// =============================================

import { Link } from "react-router-dom";
import {
  ArrowRight,
  Star,
  Globe,
  FileText,
  Image,
  Palette,
  CheckCircle,
} from "lucide-react";

// ---- SERVICES LIST — Edit name, emoji, desc to change service cards ----
const services = [
  {
    emoji: "🌐",
    name: "Websites",
    desc: "Modern, responsive websites for startups, shops, portfolios & businesses.",
    path: "/websites",
    color: "from-blue-600 to-cyan-500",
  },
  {
    emoji: "📄",
    name: "Brochures",
    desc: "Professional PDF brochures that make your business look premium.",
    path: "/brochures",
    color: "from-purple-600 to-pink-500",
  },
  {
    emoji: "🎨",
    name: "Banners",
    desc: "Eye-catching banners for social media, events, and marketing.",
    path: "/banners",
    color: "from-orange-500 to-red-500",
  },
  {
    emoji: "✨",
    name: "Logos",
    desc: "Unique logos that give your brand a strong identity.",
    path: "/logos",
    color: "from-yellow-500 to-orange-500",
  },
  {
    emoji: "📜",
    name: "Certificates & Resumes",
    desc: "Beautifully designed certificates and professional resumes.",
    path: "/work-pics",
    color: "from-green-500 to-teal-500",
  },
  {
    emoji: "🎮",
    name: "Fun Games",
    desc: "Play games while you wait! Enjoy & share with friends.",
    path: "/games",
    color: "from-pink-500 to-rose-500",
  },
];

// ---- WHY CHOOSE ME — Edit text here ----
const reasons = [
  "100% Mobile Responsive Design",
  "Fast delivery — 2 to 5 days",
  "Affordable prices",
  "WhatsApp support anytime",
  "Modern & attractive UI",
  "Free revisions included",
];

// ---- STATS — change numbers if needed ----
const stats = [
  { num: "20+", label: "Projects Done" },
  { num: "10+", label: "Happy Clients" },
  { num: "5★", label: "Rating" },
  { num: "1yrs", label: "Experience" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background glow effects */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: "url('/bg1.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: window.innerWidth < 768 ? "contain" : "cover",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 gap-4 md:gap-12 items-center">
            {/* LEFT SIDE — TEXT */}
            <div className="text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full glass gold-border text-yellow-400 text-xs md:text-sm mb-4 md:mb-8 animate-fadeUp">
                <Star size={14} fill="currentColor" />
                <span>Premium Digital Services</span>
              </div>

              {/* Headline */}
              <h1 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-4 md:mb-6 leading-tight animate-fadeUp">
                <span className="text-white">Grow Your </span>
                <span className="animate-shimmer">Business</span>
                <br />
                <span className="text-white">With </span>
                <span className="text-yellow-400">Premium Design</span>
              </h1>

              <p className="text-gray-400 text-sm md:text-lg max-w-md mb-6 md:mb-10 animate-fadeUp">
                I create{" "}
                <strong className="text-white">
                  beautiful websites, brochures, banners & logos
                </strong>{" "}
                for startups and small businesses. 🚀
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 animate-fadeUp">
                <a
                  href="https://wa.me/919380195144?text=Hi%20Abrar!%20I%20need%20a%20website%20for%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 md:px-8 md:py-4 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-300 transition-all hover:shadow-2xl hover:shadow-yellow-400/30 hover:scale-105 flex items-center justify-center gap-2 text-sm md:text-base"
                >
                  💬 Free Quote
                </a>
                <Link
                  to="/websites"
                  className="px-5 py-3 md:px-8 md:py-4 glass gold-border text-white font-semibold rounded-full hover:bg-white/5 transition-all flex items-center justify-center gap-2 text-sm md:text-base"
                >
                  See Work <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* RIGHT SIDE — IMAGE */}
            <div className="flex justify-center md:justify-end">
              <img
                src="/hero-image.png"
                alt="My design work"
                className="w-full max-w-[320px] sm:max-w-[420px] md:max-w-[680px] drop-shadow-2xl animate-fadeUp"
              />
            </div>
          </div>
          \{/* Stats — full width below */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-10 md:mt-16 animate-fadeUp">
            {stats.map((s, i) => (
              <div key={i} className="glass rounded-2xl p-3 md:p-4 gold-border">
                <div className="font-display text-xl md:text-3xl font-bold text-yellow-400">
                  {s.num}
                </div>
                <div className="text-gray-400 text-xs md:text-sm mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              What I <span className="text-yellow-400">Create</span> For You
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Everything your business needs to look professional and attract
              more customers
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Link
                key={i}
                to={s.path}
                className="glass rounded-2xl p-6 gold-border hover:border-yellow-400/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/10 group"
              >
                <div className="text-4xl mb-4">{s.emoji}</div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                  {s.name}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {s.desc}
                </p>
                <div className="mt-4 flex items-center gap-2 text-yellow-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  View Work <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE ME ===== */}
      <section className="relative py-20 px-4">
        {/* Background Image Layer */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/bg2.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.25,
            filter: "blur(2px)",
          }}
        ></div>

        {/* Dark overlay for readability */}
        {/* <div className="absolute inset-0 bg-[#001a33]/80"></div> */}

        {/* Content */}
        <div className="relative max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side */}
            <div>
              <h2 className="font-display text-4xl font-bold text-white mb-4">
                Why Clients <span className="text-yellow-400">Choose Me</span>
              </h2>
              <p className="text-gray-400 mb-8">
                I don't just build websites — I help your business grow with
                professional digital presence that actually works.
              </p>

              <div className="space-y-3">
                {reasons.map((r, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle
                      size={18}
                      className="text-yellow-400 flex-shrink-0"
                    />
                    <span className="text-gray-300">{r}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right card */}
            <div className="glass rounded-3xl p-8 gold-border gold-glow">
              <h3 className="font-display text-2xl font-bold text-yellow-400 mb-2">
                Ready to Start? 🚀
              </h3>

              <p className="text-gray-400 mb-6 text-sm">
                Tell me about your business and I'll build something amazing for
                you!
              </p>

              <div className="space-y-3">
                <a
                  href="https://wa.me/919380195144?text=Hi%20Abrar!%20I%20need%20help%20with%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 w-full px-5 py-3 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-400 transition-all hover:scale-105"
                >
                  💬 WhatsApp — 9380195144
                </a>

                <a
                  href="https://www.instagram.com/abrarkhan__008"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 w-full px-5 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-xl font-semibold hover:scale-105 transition-all"
                >
                  📸 Instagram — @abrarkhan__008
                </a>

                <a
                  href="mailto:abrarhayathkhan1234@gmail.com"
                  className="flex items-center gap-3 w-full px-5 py-3 glass gold-border text-white rounded-xl font-semibold hover:scale-105 transition-all"
                >
                  ✉️ Email Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center glass rounded-3xl p-12 gold-border gold-glow">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Your Business Deserves a{" "}
            <span className="text-yellow-400">Premium Look</span>
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Contact me today and let's build something amazing together!
          </p>
          <a
            href="https://wa.me/919380195144?text=Hi%20Abrar!%20I%20want%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 bg-yellow-400 text-black font-bold rounded-full text-lg hover:bg-yellow-300 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/30"
          >
            💬 Let's Talk on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
