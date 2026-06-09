// src/pages/WebsitesPage.jsx
// =============================================
// This page shows all the websites you have built
// TO ADD A NEW WEBSITE: Copy one object inside the "projects" array and edit it
// Each project needs: title, desc, tags, url (live link), gradient
// =============================================

import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Sana Beauty",
    desc: "Professional makeup artist portfolio with booking system and gallery.",
    tags: ["React", "Tailwind", "Makeup Artist"],
    url: "https://sana-beauty.vercel.app/",
    image: "/1w.png",
    gradient: "from-pink-600 to-rose-500",
  },
  {
    title: "Ladies Choice – Tenali",
    desc: "Beauty parlour website with services and contact integration.",
    tags: ["React", "Next.js", "Beauty"],
    url: "https://ladies-choice-now-in-tenali-bdbv.vercel.app/",
    image: "/2w.png",
    gradient: "from-purple-600 to-pink-500",
  },
  {
    title: "AM Welding",
    desc: "Professional welding and fabrication business website showcasing services and projects.",
    tags: ["React", "Business", "Welding"],
    url: "https://am-welding.vercel.app/",
    image: "/3w.png",
    gradient: "from-orange-600 to-red-500",
  },
  {
    title: "Mahnayeem Jewels & Accessories",
    desc: "Jewelry and accessories showcase website with elegant product presentation.",
    tags: ["React", "Jewelry", "Business"],
    url: "https://mahnayeem-jewels-and-accessories-hc.vercel.app/",
    image: "/4w.png",
    gradient: "from-yellow-500 to-amber-600",
  },
  {
    title: "Monika Artistry",
    desc: "Professional makeup artist portfolio with gallery and booking information.",
    tags: ["React", "Portfolio", "Makeup"],
    url: "https://monikaaristry-qr1l.vercel.app/",
    image: "/5w.png",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    title: "Valentine App",
    desc: "Interactive Valentine's Day themed web application with modern UI.",
    tags: ["React", "Fun App", "Interactive"],
    url: "https://valentine-app-silk.vercel.app/",
    image: "/6w.png",
    gradient: "from-rose-500 to-red-600",
  },
  {
    title: "Siddiqu Tarannum",
    desc: "Professional makeup artist website with portfolio and bridal packages.",
    tags: ["React", "Portfolio", "Bridal"],
    url: "https://siddiquatarannum.in/",
    image: "/7w.png",
    gradient: "from-rose-600 to-orange-500",
  },
  {
    title: "Makeover by Harshitha",
    desc: "Makeup artist website showcasing services and before/after transformations.",
    tags: ["React", "Tailwind", "Makeover"],
    url: "https://makeoverbyharshitha.com/",
    image: "/8w.png",
    gradient: "from-fuchsia-600 to-pink-500",
  },
  {
    title: "Ayub Portfolio",
    desc: "Modern professional portfolio website with smooth animations.",
    tags: ["React", "Portfolio", "Developer"],
    url: "https://ayub-portfolio-97cm.vercel.app/",
    image: "/9w.png",
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    title: "Mehek Portfolio",
    desc: "Elegant personal portfolio with skills and projects showcase.",
    tags: ["React", "Tailwind", "Portfolio"],
    url: "https://mehek-portfolio-wy27.vercel.app/",
    image: "/10w.png",
    gradient: "from-violet-600 to-purple-500",
  },
  {
    title: "Khanam Artistry",
    desc: "Mehendi design business website with gallery and booking form.",
    tags: ["React", "Mehendi", "Gallery"],
    url: "https://khanam-artistry.vercel.app/",
    image: "/11w.png",
    gradient: "from-green-600 to-teal-500",
  },
  {
    title: "MS Mehendi Portfolio",
    desc: "Beautiful mehendi artist portfolio with Instagram-style gallery.",
    tags: ["React", "Next.js", "Mehendi"],
    url: "https://ms-mehendi-portfolio.vercel.app/",
    image: "/12w.png",
    gradient: "from-orange-600 to-amber-500",
  },
  {
    title: "Henna by Nazu",
    desc: "Henna art portfolio showcasing designs and pricing packages.",
    tags: ["React", "Henna", "Art"],
    url: "https://henna-by-nazu-qh5x.vercel.app/",
    image: "/13w.png",
    gradient: "from-amber-600 to-yellow-500",
  },
  {
    title: "Yaseen Electrician",
    desc: "Professional electrician services website with contact and pricing.",
    tags: ["React", "Services", "Business"],
    url: "https://yaseen-portfolio-chi.vercel.app/",
    image: "/14w.png",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    title: "JK Fancy Store",
    desc: "Store management system with billing, attendance tracking and multi-branch support.",
    tags: ["React", "Firebase", "Management"],
    url: "https://jk-fancy-store.netlify.app/",
    image: "/15w.png",
    gradient: "from-green-600 to-emerald-500",
  },
  {
    title: "Engagement Ceremony",
    desc: "Digital invitation card with date, location and RSVP for engagement ceremony.",
    tags: ["React", "Invitation", "Events"],
    url: "https://engagement-ceremony-alpha.vercel.app/",
    image: "/16w.png",
    gradient: "from-rose-600 to-red-500",
  },
];

export default function WebsitesPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 glass gold-border rounded-full text-yellow-400 text-sm mb-4">
            🌐 My Work
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-black text-white mb-4">
            Websites I've <span className="text-yellow-400">Built</span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            Every website below is live and working. Click to visit them!
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className="glass rounded-2xl overflow-hidden gold-border hover:border-yellow-400/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-yellow-500/10 group"
            >
              {/* Card header with gradient */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30"></div>
              </div>

              {/* Card body */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                  {p.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {p.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((t, ti) => (
                    <span
                      key={ti}
                      className="px-2 py-1 bg-white/5 rounded-full text-xs text-gray-400 border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Live link button */}
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 w-full px-4 py-2.5 bg-yellow-400 text-black rounded-xl text-sm font-bold hover:bg-yellow-300 transition-all justify-center hover:shadow-lg hover:shadow-yellow-400/20"
                >
                  <ExternalLink size={16} />
                  Visit Live Website
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center glass rounded-3xl p-8 gold-border">
          <h2 className="font-display text-3xl font-bold text-white mb-3">
            Need a Website Like These? 🚀
          </h2>
          <p className="text-gray-400 mb-6">
            Contact me and get your website ready in 2–5 days!
          </p>
          <a
            href="https://wa.me/919380195144?text=Hi%20Abrar!%20I%20saw%20your%20website%20portfolio%20and%20I%20need%20a%20website%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-300 transition-all hover:scale-105"
          >
            💬 Order Your Website Now
          </a>
        </div>
      </div>
    </div>
  );
}
