// src/App.jsx
// =============================================
// THIS FILE CONNECTS ALL PAGES TOGETHER
// To add a new page:
//   1. Create the page file in src/pages/
//   2. Import it here (copy any import line below)
//   3. Add a <Route> line pointing to your page
//   4. Add a link in Navbar.jsx navLinks array
// =============================================

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Navbar and Footer (shown on all pages)
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Import all pages
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import WebsitesPage from "./pages/WebsitesPage";
import BrochuresPage from "./pages/BrochuresPage";
import BannersPage from "./pages/BannersPage";
import LogosPage from "./pages/LogosPage";
import WorkPicsPage from "./pages/WorkPicsPage";
import GamesPage from "./pages/GamesPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <BrowserRouter>
      {/* Navbar always shows at top */}
      <Navbar />

      {/* Page content changes based on URL */}
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/websites" element={<WebsitesPage />} />
        <Route path="/brochures" element={<BrochuresPage />} />
        <Route path="/banners" element={<BannersPage />} />
        <Route path="/logos" element={<LogosPage />} />
        <Route path="/work-pics" element={<WorkPicsPage />} />
        <Route path="/games" element={<GamesPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* 404 - Page not found */}
        <Route
          path="*"
          element={
            <div className="min-h-screen flex items-center justify-center text-center px-4 pt-20">
              <div>
                <div className="text-8xl mb-4">😅</div>
                <h1 className="font-display text-4xl font-bold text-white mb-4">
                  Page Not Found
                </h1>
                <p className="text-gray-400 mb-6">
                  Oops! This page doesn't exist.
                </p>
                <a
                  href="/"
                  className="px-6 py-3 bg-blue-400 text-black rounded-full font-bold hover:bg-blue-300 transition-all"
                >
                  Go Home
                </a>
              </div>
            </div>
          }
        />
      </Routes>

      {/* Footer always shows at bottom */}
      <Footer />
    </BrowserRouter>
  );
}
