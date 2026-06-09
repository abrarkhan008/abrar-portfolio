import {
  Award,
  Download,
  CheckCircle,
  Briefcase,
  GraduationCap,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0A192F] text-white">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="flex justify-center">
            <img
              src="/abrar.jpg"
              alt="Abrar Khan"
              className="w-80 h-80 rounded-3xl object-cover border-4 border-yellow-400 shadow-2xl"
            />
          </div>

          {/* Content */}
          <div>
            <span className="text-yellow-400 font-semibold">About Me</span>

            <h1 className="text-5xl font-bold mt-4 mb-6">
              Hi, I'm <span className="text-yellow-400">Abrar Khan</span>
            </h1>

            <p className="text-gray-300 leading-relaxed text-lg">
              I am a passionate Web Designer and Digital Creative Professional
              from Mysore. I completed my Bachelor of Engineering (B.E.) in
              Information Science & Engineering and have over 1 year of
              practical experience creating professional websites, logos,
              banners, business advertisements, and digital branding solutions.
            </p>

            <p className="text-gray-300 leading-relaxed mt-4">
              My goal is simple: help businesses, startups, and individuals
              establish a powerful online presence with premium-quality designs
              at affordable prices.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/Abrar-Khan-CV.pdf"
                download
                className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:scale-105 transition"
              >
                <Download size={18} />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Experience */}
      <section className="py-16 px-6 bg-[#112240]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-[#1B2B4B] p-8 rounded-2xl">
            <GraduationCap className="text-yellow-400 mb-4" size={40} />
            <h3 className="text-2xl font-bold mb-3">Education</h3>

            <p className="text-gray-300">Bachelor of Engineering (B.E.)</p>

            <p className="text-gray-300">Information Science & Engineering</p>

            <p className="text-gray-300">Mysore, Karnataka</p>
          </div>

          <div className="bg-[#1B2B4B] p-8 rounded-2xl">
            <Briefcase className="text-yellow-400 mb-4" size={40} />
            <h3 className="text-2xl font-bold mb-3">Experience</h3>

            <p className="text-gray-300">1+ Year Experience in:</p>

            <ul className="mt-3 text-gray-300 space-y-2">
              <li>• Website Development</li>
              <li>• Logo Design</li>
              <li>• Banner Design</li>
              <li>• Business Advertisement Design</li>
              <li>• Landing Pages</li>
              <li>• Interactive Website Features</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            What I Can Build For You
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Business Websites",
              "Portfolio Websites",
              "Landing Pages",
              "Logo Design",
              "Banner Design",
              "Advertisement Creatives",
              "Game Websites",
              "Responsive Mobile Websites",
              "Branding Materials",
            ].map((item) => (
              <div key={item} className="bg-[#112240] p-6 rounded-2xl">
                <CheckCircle className="text-yellow-400 mb-3" />
                <h3 className="font-semibold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Degree Certificate */}
      <section className="py-20 px-6 bg-[#112240]">
        <div className="max-w-5xl mx-auto text-center">
          <Award className="mx-auto text-yellow-400 mb-4" size={50} />

          <h2 className="text-4xl font-bold mb-6">Verified Education</h2>

          <p className="text-gray-300 mb-8">
            Transparency builds trust. Visitors can view my degree certificate
            as proof of my educational background.
          </p>

          <img
            src="/degree.jpg"
            alt="Degree Certificate"
            className="mx-auto rounded-2xl border border-yellow-400 shadow-xl"
          />
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Clients Choose Me
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#112240] p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-yellow-400 mb-3">
                Affordable Pricing
              </h3>
              <p className="text-gray-300">
                Premium quality work at budget-friendly prices for startups,
                students, and growing businesses.
              </p>
            </div>

            <div className="bg-[#112240] p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-yellow-400 mb-3">
                Fast Delivery
              </h3>
              <p className="text-gray-300">
                Timely project completion without compromising quality.
              </p>
            </div>

            <div className="bg-[#112240] p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-yellow-400 mb-3">
                Customer First
              </h3>
              <p className="text-gray-300">
                Friendly communication, revisions, and complete support
                throughout the project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-yellow-500/10 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">
            Let's Build Something Amazing Together
          </h2>

          <p className="text-gray-300 text-lg mb-8">
            Whether you need a professional website, eye-catching banner,
            premium logo, or digital branding solution, I'm ready to help bring
            your ideas to life.
          </p>

          <a
            href="/contact"
            className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  );
}
