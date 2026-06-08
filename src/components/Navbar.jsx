// src/components/Navbar.jsx
// This is the TOP navigation bar that shows on EVERY page
// To add a new page: add it to the "navLinks" array below

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

  // Close menu when page changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-lg border-b border-yellow-500/20 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* LOGO — change the text to your brand name */}
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-10 h-10 object-contain drop-shadow-[0_0_10px_rgba(234,179,8,0.6)]"
          />
          <Zap size={16} className="text-black" fill="black" />

          <span className="font-display font-bold text-lg text-white group-hover:text-yellow-400 transition-colors">
            Abrar<span className="text-yellow-400">Khan</span>
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
                  ? "bg-yellow-400 text-black"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="https://wa.me/919380195144"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 px-4 py-2 bg-yellow-400 text-black rounded-full text-sm font-semibold hover:bg-yellow-300 transition-all hover:shadow-lg hover:shadow-yellow-400/30"
        >
          💬 WhatsApp Us
        </a>

        {/* Mobile burger button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 text-white"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-lg border-t border-yellow-500/10 px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block py-3 px-4 rounded-lg my-1 text-sm font-medium transition-all ${
                location.pathname === link.path
                  ? "bg-yellow-400 text-black"
                  : "text-gray-300 hover:bg-white/5"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://wa.me/919380195144"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-3 py-3 px-4 bg-yellow-400 text-black rounded-lg text-center font-semibold"
          >
            💬 WhatsApp Us
          </a>
        </div>
      )}
    </nav>
  );
}
