// src/components/Navbar.jsx

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Websites", path: "/websites" },
  { name: "Brochures", path: "/brochures" },
  { name: "Banners", path: "/banners" },
  { name: "Logos", path: "/logos" },
  { name: "Work Pics", path: "/work-pics" },
  { name: "Games", path: "/games" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#131921] shadow-lg border-b border-white/10"
          : "bg-[#131921]/95 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-10 h-10 object-contain"
          />

          <Zap size={16} className="text-[#ff9900]" />

          <span className="font-bold text-lg text-white">
            Abrar<span className="text-[#ff9900]">Khan</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                location.pathname === link.path
                  ? "bg-[#ff9900] text-black"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Button (Amazon orange style) */}
        <a
          href="https://wa.me/919380195144"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 px-4 py-2 bg-[#ff9900] text-black rounded-full text-sm font-semibold hover:bg-orange-400 transition-all hover:shadow-lg hover:shadow-orange-500/30"
        >
          💬 WhatsApp Us
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 text-white"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="lg:hidden bg-[#131921] border-t border-white/10 px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block py-3 px-4 rounded-lg my-1 text-sm font-medium transition-all ${
                location.pathname === link.path
                  ? "bg-[#ff9900] text-black"
                  : "text-gray-300 hover:bg-white/10"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <a
            href="https://wa.me/919380195144"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-3 py-3 px-4 bg-[#ff9900] text-black rounded-lg text-center font-semibold"
          >
            💬 WhatsApp Us
          </a>
        </div>
      )}
    </nav>
  );
}
