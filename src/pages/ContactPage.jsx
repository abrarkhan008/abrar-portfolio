// src/pages/ContactPage.jsx
// =============================================
// Contact page with all your social links
// TO UPDATE: Change the values below marked with ← EDIT THIS
// =============================================

import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Instagram,
  Facebook,
  Linkedin,
  Send,
} from "lucide-react";
import { useState } from "react";

// ---- YOUR CONTACT DETAILS — EDIT THESE ----
const PHONE = "9380195144";
const EMAIL = "abrarhayathkhan1234@gmail.com";
const LOCATION = "Mandya, Karnataka";
const WHATSAPP = "https://wa.me/919380195144";
const INSTAGRAM = "https://www.instagram.com/abrarkhan__008";
const FACEBOOK = "https://facebook.com"; // ← Add your Facebook URL
const LINKEDIN = "https://www.linkedin.com/in/abrar-khan-52a597240";

// ---- SERVICE OPTIONS for WhatsApp quick messages ----
const quickMessages = [
  { label: "🌐 Website", msg: "Hi Abrar! I need a website for my business." },
  { label: "📄 Brochure", msg: "Hi Abrar! I need a brochure for my business." },
  { label: "🎨 Banner", msg: "Hi Abrar! I need a banner design." },
  { label: "✨ Logo", msg: "Hi Abrar! I need a logo for my brand." },
  { label: "📜 Resume", msg: "Hi Abrar! I need a professional resume design." },
  { label: "💬 Just Chat", msg: "Hi Abrar! I want to discuss a project." },
];

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const copyPhone = () => {
    navigator.clipboard.writeText(PHONE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 glass gold-border rounded-full text-yellow-400 text-sm mb-4">
            📞 Let's Connect
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-black text-white mb-4">
            Get In <span className="text-yellow-400">Touch</span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            Ready to grow your business? Message me anytime on WhatsApp — I
            respond fast! 🚀
          </p>
        </div>

        {/* Quick WhatsApp Buttons */}
        <div className="mb-12">
          <h2 className="text-white font-semibold text-center mb-4">
            What do you need? Tap to message me instantly:
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {quickMessages.map((q, i) => (
              <a
                key={i}
                href={`${WHATSAPP}?text=${encodeURIComponent(q.msg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="glass gold-border rounded-xl p-4 text-center text-sm font-semibold text-gray-300 hover:text-white hover:border-yellow-400/50 hover:bg-yellow-400/5 transition-all hover:scale-105"
              >
                {q.label}
              </a>
            ))}
          </div>
        </div>

        {/* Main Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* WhatsApp — MOST IMPORTANT */}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="glass rounded-2xl p-6 border border-green-500/30 hover:border-green-400/60 transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-green-500/10 group"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                <MessageCircle size={24} className="text-white" />
              </div>
              <div>
                <div className="text-xs text-green-400 font-semibold mb-0.5">
                  FASTEST RESPONSE
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">
                  WhatsApp
                </h3>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-3">
              Message me directly on WhatsApp. I reply within minutes!
            </p>
            <div className="text-2xl font-bold text-white">{PHONE}</div>
            <div className="mt-3 px-4 py-2 bg-green-500 text-white rounded-xl text-sm font-bold text-center">
              Open WhatsApp Chat 💬
            </div>
          </a>

          {/* Instagram */}
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="glass rounded-2xl p-6 border border-pink-500/30 hover:border-pink-400/60 transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-pink-500/10 group"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Instagram size={24} className="text-white" />
              </div>
              <div>
                <div className="text-xs text-pink-400 font-semibold mb-0.5">
                  FOLLOW MY WORK
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-pink-400 transition-colors">
                  Instagram
                </h3>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-3">
              See my latest designs and work samples on Instagram!
            </p>
            <div className="text-xl font-bold text-white">@abrarkhan__008</div>
            <div className="mt-3 px-4 py-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-xl text-sm font-bold text-center">
              Follow on Instagram 📸
            </div>
          </a>

          {/* Facebook */}
          <a
            href={FACEBOOK}
            target="_blank"
            rel="noopener noreferrer"
            className="glass rounded-2xl p-6 border border-blue-500/30 hover:border-blue-400/60 transition-all hover:scale-[1.02] group"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                <Facebook size={24} className="text-white" />
              </div>
              <div>
                <div className="text-xs text-blue-400 font-semibold mb-0.5">
                  CONNECT
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  Facebook
                </h3>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-3">
              Connect with me on Facebook for updates and new projects.
            </p>
            <div className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-bold text-center">
              Follow on Facebook 👍
            </div>
          </a>

          {/* Email & Phone */}
          <div className="glass rounded-2xl p-6 gold-border space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Phone size={18} className="text-yellow-400" />
                <h3 className="font-bold text-white">Phone</h3>
              </div>
              <button
                onClick={copyPhone}
                className="w-full text-left px-4 py-2.5 glass gold-border rounded-xl text-white text-sm hover:bg-yellow-400/10 transition-all"
              >
                {copied ? "✅ Copied!" : `📞 ${PHONE} — tap to copy`}
              </button>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Mail size={18} className="text-yellow-400" />
                <h3 className="font-bold text-white">Email</h3>
              </div>
              <a
                href={`mailto:${EMAIL}`}
                className="block px-4 py-2.5 glass gold-border rounded-xl text-gray-300 text-sm hover:bg-yellow-400/10 transition-all break-all"
              >
                ✉️ {EMAIL}
              </a>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <MapPin size={18} className="text-yellow-400" />
                <h3 className="font-bold text-white">Location</h3>
              </div>
              <div className="px-4 py-2.5 glass gold-border rounded-xl text-gray-300 text-sm">
                📍 {LOCATION}
              </div>
            </div>
          </div>
        </div>

        {/* LinkedIn */}
        <a
          href={LINKEDIN}
          target="_blank"
          rel="noopener noreferrer"
          className="block glass rounded-2xl p-5 border border-blue-600/30 hover:border-blue-400/60 transition-all hover:scale-[1.01] mb-6 group"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-700 rounded-xl flex items-center justify-center">
                <Linkedin size={20} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white group-hover:text-blue-400 transition-colors">
                  LinkedIn
                </h3>
                <p className="text-gray-400 text-sm">
                  View my professional profile and experience
                </p>
              </div>
            </div>
            <Send size={18} className="text-blue-400" />
          </div>
        </a>

        {/* Final CTA */}
        <div className="glass rounded-3xl p-10 gold-border text-center gold-glow">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">
            Let's Build Something{" "}
            <span className="text-yellow-400">Amazing</span> Together! 🚀
          </h2>
          <p className="text-gray-400 mb-8">
            Don't wait — message me now and your website can be ready in just
            2–5 days!
          </p>
          <a
            href={`${WHATSAPP}?text=Hi%20Abrar!%20I%20want%20to%20discuss%20a%20project%20for%20my%20business.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 bg-yellow-400 text-black font-black text-lg rounded-full hover:bg-yellow-300 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/30"
          >
            💬 Start on WhatsApp Now
          </a>
        </div>
      </div>
    </div>
  );
}
