// src/components/Footer.jsx
// This footer shows on every page at the bottom
// To update contact info: change the values below

import {
  Instagram,
  MessageCircle,
  Facebook,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const socials = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    color: "hover:text-green-400",
    url: "https://wa.me/919380195144",
  },
  {
    icon: Instagram,
    label: "Instagram",
    color: "hover:text-pink-400",
    url: "https://www.instagram.com/abrarkhan__008",
  },
  {
    icon: Facebook,
    label: "Facebook",
    color: "hover:text-blue-400",
    url: "https://facebook.com",
  }, // ← ADD your Facebook URL here
];

export default function Footer() {
  return (
    <footer className="border-t border-yellow-500/10 bg-black/60 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold text-yellow-400 mb-2">
              Abrar Khan
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium websites, brochures, banners & logos for businesses. Let's
              grow your brand together. 🚀
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <a
                href="/websites"
                className="block hover:text-yellow-400 transition-colors"
              >
                🌐 Websites
              </a>
              <a
                href="/brochures"
                className="block hover:text-yellow-400 transition-colors"
              >
                📄 Brochures
              </a>
              <a
                href="/banners"
                className="block hover:text-yellow-400 transition-colors"
              >
                🎨 Banners
              </a>
              <a
                href="/logos"
                className="block hover:text-yellow-400 transition-colors"
              >
                ✨ Logos
              </a>
              <a
                href="/games"
                className="block hover:text-yellow-400 transition-colors"
              >
                🎮 Games
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-3">Contact Me</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-yellow-400" />
                <a href="tel:9380195144" className="hover:text-yellow-400">
                  9380195144
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-yellow-400" />
                <a
                  href="mailto:abrarhayathkhan1234@gmail.com"
                  className="hover:text-yellow-400 text-xs"
                >
                  abrarhayathkhan1234@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-yellow-400" />
                <span>Mandya, Karnataka</span>
              </div>
            </div>
            {/* Social icons */}
            <div className="flex gap-3 mt-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 glass rounded-full text-gray-400 transition-all hover:scale-110 ${s.color}`}
                  title={s.label}
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 text-center text-xs text-gray-600">
          © 2025 Abrar Khan Agency. All rights reserved. Built with ❤️ in
          Karnataka
        </div>
      </div>
    </footer>
  );
}
