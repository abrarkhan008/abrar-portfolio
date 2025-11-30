import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  Linkedin,
  MapPin,
  Code,
  Database,
  Briefcase,
  GraduationCap,
  Award,
  Languages,
  ChevronDown,
  Github,
  ExternalLink,
  Instagram,
  MessageCircle,
} from "lucide-react";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ["home", "about", "skills", "projects", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/abrar-khan-52a597240",
      color: "hover:text-blue-500",
      bgColor: "hover:bg-blue-500/10",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/abrarkhan008",
      color: "hover:text-gray-300",
      bgColor: "hover:bg-gray-500/10",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/abrarkhan__008",
      color: "hover:text-pink-500",
      bgColor: "hover:bg-pink-500/10",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: "https://wa.me/919380195144",
      color: "hover:text-green-500",
      bgColor: "hover:bg-green-500/10",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Professional Animated Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>

        {/* Animated gradient orbs */}
        <div className="absolute -top-1/2 -right-1/4 w-1/2 h-1/2 bg-blue-600/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute -bottom-1/2 -left-1/4 w-1/2 h-1/2 bg-purple-600/5 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Subtle particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/10 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${20 + Math.random() * 20}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-slate-900/95 backdrop-blur-lg shadow-lg shadow-slate-500/10 border-b border-slate-700/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            ABRAR KHAN
          </div>

          <div className="hidden md:flex gap-2">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`px-6 py-2 rounded-full transition-all duration-300 font-medium ${
                  activeSection === item.toLowerCase()
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Social Links in Navigation */}
          <div className="flex gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-all duration-300 ${social.color} ${social.bgColor} border border-slate-600 hover:border-slate-400`}
                title={social.name}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative pt-20 z-10"
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div
            className={`space-y-6 transition-all duration-1000 transform ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-20 opacity-0"
            }`}
          >
            <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-sm backdrop-blur-sm">
              Welcome to my portfolio
            </div>

            <h1 className="text-6xl md:text-7xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Abrar Khan
              </span>
            </h1>

            <h2 className="text-3xl md:text-4xl font-semibold text-gray-200">
              Full-Stack Developer
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed">
              Hi... I’m Abrar Khan, a MERN Stack Developer skilled in building
              clean, responsive, and modern front-end interfaces using React,
              Tailwind CSS, and JavaScript. I also work on backend development
              with Node.js, Express, and MongoDB, creating efficient and secure
              APIs. I’m looking for an opportunity to apply my skills, grow
              professionally, and contribute effectively to the team.
            </p>

            {/* Social Links Large Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${social.color} ${social.bgColor} border border-slate-600 hover:border-slate-400 hover:scale-105 backdrop-blur-sm`}
                >
                  <social.icon size={20} />
                  <span className="font-medium">{social.name}</span>
                </a>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-6">
              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold 
                         hover:shadow-lg hover:shadow-blue-500/30 transform hover:scale-105 transition-all duration-300"
              >
                Contact Me
              </button>

              <a
                href="mailto:abrarhayathkhan1234@gmail.com"
                className="px-8 py-4 border-2 border-blue-500/50 rounded-full font-semibold 
                         hover:bg-blue-500/10 transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <Mail size={20} />
                Email
              </a>

              <a
                href="/Abrar_Khan_Resume.pdf"
                download="Abrar_Khan_Resume.pdf"
                className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full font-semibold 
                         hover:shadow-lg hover:shadow-cyan-500/30 transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <ExternalLink size={20} />
                Download CV
              </a>
            </div>

            <div className="flex items-center gap-2 text-gray-300 pt-4">
              <MapPin size={20} className="text-blue-400" />
              <span>Mandya, Karnataka</span>
            </div>
          </div>

          {/* Photo Section */}
          <div
            className={`relative flex justify-center transition-all duration-1000 delay-300 transform ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-20 opacity-0"
            }`}
          >
            {/* Professional frame */}
            <div className="relative">
              {/* Glowing effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-20 blur-xl animate-pulse-slow"></div>

              {/* Main photo container */}
              <div className="relative w-80 h-96 rounded-xl overflow-hidden border border-slate-600 bg-gradient-to-br from-slate-800 to-slate-900 shadow-2xl">
                <img
                  src="/suit.jpg"
                  alt="Abrar"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              </div>

              {/* Floating tech badges */}
              <div className="absolute -top-4 -left-4 px-4 py-2 bg-slate-800/80 backdrop-blur-sm rounded-full border border-slate-600 flex items-center gap-2 animate-float">
                <Code size={16} className="text-blue-400" />
                <span className="text-sm font-medium">React</span>
              </div>
              <div
                className="absolute -bottom-4 -right-4 px-4 py-2 bg-slate-800/80 backdrop-blur-sm rounded-full border border-slate-600 flex items-center gap-2 animate-float"
                style={{ animationDelay: "1s" }}
              >
                <Database size={16} className="text-purple-400" />
                <span className="text-sm font-medium">Node.js</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-sm text-gray-400">Scroll Down</span>
          <ChevronDown className="text-blue-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>

          {/* Education */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <GraduationCap className="text-blue-400" />
              Education
            </h3>
            <div className="space-y-6">
              {[
                {
                  degree: "B.E. Information Science and Engineering",
                  institution: "Maharaja Institute of Technology, Mysore",
                  period: "2021–2025",
                  grade: "GPA: 7.0/10.0",
                  color: "blue",
                },
                {
                  degree: "Pre-University Education",
                  institution: "Shaheen Falcon PU College, Bangalore",
                  period: "2019–2021",
                  grade: "Percentage: 68%",
                  color: "purple",
                },
                {
                  degree: "Secondary Education",
                  institution: "Mandavya English Medium High School",
                  period: "2019",
                  grade: "Percentage: 72%",
                  color: "cyan",
                },
              ].map((edu, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-blue-500/40 transition-all duration-300 hover:transform hover:scale-[1.02]"
                >
                  <h4 className="text-xl font-bold text-blue-300 mb-2">
                    {edu.degree}
                  </h4>
                  <p className="text-gray-200 mb-2">{edu.institution}</p>
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>{edu.period}</span>
                    <span>{edu.grade}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Internships */}
          <div>
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Briefcase className="text-purple-400" />
              Internships
            </h3>
            <div className="space-y-6">
              {[
                {
                  title: "AI DevOps Intern",
                  company: "Skill India",
                  date: "Jan 2025",
                  description:
                    "Worked on integrating AI and DevOps for automation and improved deployment pipelines.",
                  color: "from-blue-600 to-blue-400",
                },
                {
                  title: "Cloud Computing Intern",
                  company: "Ethnotech",
                  date: "Feb 2024",
                  points: [
                    "Deployed applications using AWS, Azure, and GCP",
                    "Automated infrastructure using Terraform, Kubernetes, and Docker",
                  ],
                  color: "from-purple-600 to-purple-400",
                },
                {
                  title: "App Development Intern",
                  company: "Run Shaw Technology",
                  date: "Nov 2023",
                  description:
                    "Built mobile applications using Flutter and Dart with backend integration via Firebase.",
                  color: "from-cyan-600 to-cyan-400",
                },
              ].map((intern, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:transform hover:scale-[1.02]"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4
                        className={`text-xl font-bold bg-gradient-to-r ${intern.color} bg-clip-text text-transparent`}
                      >
                        {intern.title}
                      </h4>
                      <p className="text-gray-200">{intern.company}</p>
                    </div>
                    <span className="px-4 py-1 bg-blue-500/10 rounded-full text-sm text-blue-300 border border-blue-500/20">
                      {intern.date}
                    </span>
                  </div>
                  {intern.description && (
                    <p className="text-gray-300">{intern.description}</p>
                  )}
                  {intern.points && (
                    <ul className="space-y-2 mt-4">
                      {intern.points.map((point, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-gray-300"
                        >
                          <span className="text-blue-400 mt-1">▹</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: Code,
                title: "Languages",
                items: ["Java", "HTML/CSS", "JavaScript"],
                gradient: "from-blue-600 to-blue-400",
              },
              {
                icon: Database,
                title: "Databases",
                items: ["MongoDB", "Firebase", "MongoDB Atlas"],
                gradient: "from-purple-600 to-purple-400",
              },
              {
                icon: Award,
                title: "Frameworks",
                items: ["React", "Node.js", "Tailwind CSS", "GitHub"],
                gradient: "from-cyan-600 to-cyan-400",
              },
              {
                icon: Languages,
                title: "Languages Spoken",
                items: ["English", "Kannada", "Hindi", "Urdu"],
                gradient: "from-green-600 to-green-400",
              },
            ].map((skill, idx) => (
              <div
                key={idx}
                className="p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${skill.gradient} rounded-lg flex items-center justify-center mb-4`}
                >
                  <skill.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-100">
                  {skill.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-gray-300 border border-slate-600"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-xl border border-blue-500/20">
            <h3 className="text-2xl font-bold mb-4 text-gray-100">
              Additional Skills
            </h3>
            <div className="space-y-2 text-gray-300">
              <p>
                <span className="text-blue-400 font-semibold">Tools:</span> VS
                Code, Postman
              </p>
              <p>
                <span className="text-purple-400 font-semibold">
                  Soft Skills:
                </span>{" "}
                Communication, Consistency, Teamwork
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="space-y-8">
            {[
              {
                title:
                  "Feedback Mechanism in Public Speaking using Audio and Video Analysis",
                points: [
                  "Built a real-time feedback system analyzing facial expressions and voice using OpenCV and audio tools",
                  "Trained ML models to detect emotions and engagement levels from audio-visual input",
                  "Developed a web interface using Flask/Django for actionable feedback",
                  "Implemented sentiment, pitch, and expression analysis for speaker performance",
                ],
                tech: ["Python", "OpenCV", "TensorFlow", "Flask/Django"],
                gradient: "from-blue-600 to-blue-400",
              },
              {
                title: "E-Commerce Website",
                points: [
                  "Developed an e-commerce site using React, Redux Toolkit, and Firebase",
                  "Implemented cart persistence, billing, and order management",
                  "Enhanced UX using react-toastify for notifications",
                ],
                tech: ["React", "Redux", "Firebase"],
                gradient: "from-purple-600 to-purple-400",
              },
              {
                title: "Task Manager",
                points: [
                  "Built a full-stack task management app for CRUD operations and categorization",
                  "Implemented secure REST APIs using Express.js and hosted data on MongoDB Atlas",
                  "Designed responsive UI with Tailwind CSS and optimized rendering via Vite",
                  "Added task status indicators, filtering, and form validation for UX improvement",
                ],
                tech: [
                  "React",
                  "Vite",
                  "Tailwind CSS",
                  "MongoDB Atlas",
                  "Express.js",
                ],
                gradient: "from-cyan-600 to-cyan-400",
              },
            ].map((project, idx) => (
              <div
                key={idx}
                className="p-8 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:transform hover:scale-[1.02]"
              >
                <h3
                  className={`text-2xl font-bold mb-4 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}
                >
                  {project.title}
                </h3>
                <ul className="space-y-3 mb-6">
                  {project.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <span className="text-blue-400 mt-1 flex-shrink-0">
                        ▹
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full text-sm font-medium border border-blue-500/20 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen py-20 relative flex items-center z-10"
      >
        <div className="max-w-4xl mx-auto px-6 text-center w-full">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Open to opportunities and collaborations. Let's build something
            amazing together!
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              {
                icon: Phone,
                title: "Phone",
                value: "9380195144",
                href: "tel:9380195144",
                gradient: "from-blue-600 to-blue-400",
              },
              {
                icon: Mail,
                title: "Email",
                value: "abrarhayathkhan1234@gmail.com",
                href: "mailto:abrarhayathkhan1234@gmail.com",
                gradient: "from-purple-600 to-purple-400",
              },
              {
                icon: Linkedin,
                title: "LinkedIn",
                value: "Connect with me",
                href: "https://www.linkedin.com/in/abrar-khan-52a597240",
                gradient: "from-cyan-600 to-cyan-400",
              },
              {
                icon: MapPin,
                title: "Location",
                value: "Mandya, Karnataka",
                href: "#",
                gradient: "from-green-600 to-green-400",
              },
            ].map((contact, idx) => (
              <a
                key={idx}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : "_self"}
                rel={
                  contact.href.startsWith("http") ? "noopener noreferrer" : ""
                }
                className="p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:transform hover:scale-105 block"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${contact.gradient} rounded-lg flex items-center justify-center mb-4 mx-auto`}
                >
                  <contact.icon size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-100">
                  {contact.title}
                </h3>
                <p className="text-gray-400">{contact.value}</p>
              </a>
            ))}
          </div>

          {/* Social Links in Contact Section */}
          <div className="flex justify-center gap-4 pt-8">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-full transition-all duration-300 ${social.color} ${social.bgColor} border border-slate-600 hover:border-slate-400 hover:scale-110`}
                title={social.name}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-700/50 relative z-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              Abrar Khan
            </h3>
            <p className="text-gray-400">
              Full-Stack Developer • Building the Future
            </p>
          </div>
          <p className="text-gray-500 text-sm">
            © 2025 Abrar Khan. Crafted with React & Tailwind CSS
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.2;
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
