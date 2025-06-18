"use client";

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronRight, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-gradient-to-r from-gray-950/80 via-orange-950/20 to-gray-950/80 border-b border-orange-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-20 h-18 flex items-center justify-center">
              <img src="./logo.png" alt="MindHack Logo" />
            </div>
            <span className="text-orange-400 text-sm font-mono glow-text">
              2025
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 flex-1 justify-start ml-16">
            <Link
              to="/"
              className={`font-medium transition-colors hover:glow-text ${
                isActive("/")
                  ? "text-orange-400 glow-text"
                  : "text-white/80 hover:text-orange-400"
              }`}
            >
              Home
            </Link>

            {/* Competitions Dropdown - Enhanced Visibility */}
            <div className="relative group">
              <button className="text-white/90 hover:text-orange-400 font-semibold flex items-center space-x-1 transition-colors">
                <span>Competitions</span>
                <FaChevronRight className="h-3 w-3 transform group-hover:rotate-90 transition-transform duration-200" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-72 backdrop-blur-xl bg-gradient-to-br from-gray-900/95 via-orange-900/30 to-gray-900/95 border-2 border-orange-500/40 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 shadow-2xl shadow-orange-500/30">
                <div className="p-3 space-y-1">
                  <Link
                    to="/mindhack-2025"
                    className={`block px-5 py-3 rounded-lg transition-all ${
                      isActive("/mindhack-2025")
                        ? "text-orange-400 bg-orange-500/15 glow-text font-bold"
                        : "text-white/90 hover:text-orange-300 hover:bg-orange-500/10 font-semibold"
                    }`}
                  >
                    <div className="text-xl mb-1">MindHack 2025</div>
                    <div className="text-sm font-medium text-orange-400/70">
                      Current Competition
                    </div>
                  </Link>
                  <Link
                    to="/mindhack-2023"
                    className={`block px-5 py-3 rounded-lg transition-all ${
                      isActive("/mindhack-2023")
                        ? "text-orange-400 bg-orange-500/15 glow-text font-bold"
                        : "text-white/90 hover:text-orange-300 hover:bg-orange-500/10 font-semibold"
                    }`}
                  >
                    <div className="text-xl mb-1">MindHack 2023</div>
                    <div className="text-sm font-medium text-white/70">
                      Past Event Recap
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <Link
              to="/partners"
              className={`font-medium transition-colors hover:glow-text ${
                isActive("/partners")
                  ? "text-orange-400 glow-text"
                  : "text-white/80 hover:text-orange-400"
              }`}
            >
              Partners
            </Link>
            <Link
              to="/faq"
              className={`font-medium transition-colors hover:glow-text ${
                isActive("/faq")
                  ? "text-orange-400 glow-text"
                  : "text-white/80 hover:text-orange-400"
              }`}
            >
              FAQ
            </Link>
            <Link
              to="/join-us"
              className={`font-medium transition-colors hover:glow-text ${
                isActive("/join-us")
                  ? "text-orange-400 glow-text"
                  : "text-white/80 hover:text-orange-400"
              }`}
            >
              Join Us
            </Link>

            {/* Register Dropdown - Enhanced Visibility */}
            <div className="relative group ml-auto">
              <button className="text-white/90 hover:text-orange-400 font-semibold flex items-center space-x-1 transition-colors">
                <span>Register</span>
                <FaChevronRight className="h-3 w-3 transform group-hover:rotate-90 transition-transform duration-200" />
              </button>
              <div className="absolute top-full right-0 mt-2 w-80 backdrop-blur-xl bg-gradient-to-br from-gray-900/95 via-orange-900/30 to-gray-900/95 border-2 border-orange-500/40 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 shadow-2xl shadow-orange-500/30">
                <div className="p-3 space-y-1">
                  <Link
                    to="/register/participant"
                    className={`block px-5 py-3 rounded-lg transition-all ${
                      isActive("/register/participant")
                        ? "text-orange-400 bg-orange-500/15 glow-text font-bold"
                        : "text-white/90 hover:text-orange-300 hover:bg-orange-500/10 font-semibold"
                    }`}
                  >
                    <div className="text-xl mb-1">Join as Participant</div>
                    <div className="text-sm font-medium text-orange-400/70">
                      Compete in MindHack
                    </div>
                  </Link>
                  <Link
                    to="/register/partner"
                    className={`block px-5 py-3 rounded-lg transition-all ${
                      isActive("/register/partner")
                        ? "text-orange-400 bg-orange-500/15 glow-text font-bold"
                        : "text-white/90 hover:text-orange-300 hover:bg-orange-500/10 font-semibold"
                    }`}
                  >
                    <div className="text-xl mb-1">Become a Partner</div>
                    <div className="text-sm font-medium text-white/70">
                      Support with resources
                    </div>
                  </Link>
                  <Link
                    to="/register/sponsor"
                    className={`block px-5 py-3 rounded-lg transition-all ${
                      isActive("/register/sponsor")
                        ? "text-orange-400 bg-orange-500/15 glow-text font-bold"
                        : "text-white/90 hover:text-orange-300 hover:bg-orange-500/10 font-semibold"
                    }`}
                  >
                    <div className="text-xl mb-1">Sponsor MindHack</div>
                    <div className="text-sm font-medium text-white/70">
                      Fund innovation & talent
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden backdrop-blur-xl bg-gradient-to-br from-gray-900/90 via-orange-900/30 to-gray-900/90 border-t border-orange-500/20 overflow-hidden"
            >
              <motion.div
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                exit={{ y: -20 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="px-2 pt-4 pb-6 space-y-2"
              >
                {[
                  { name: "Home", path: "/" },
                  { name: "MindHack 2025", path: "/mindhack-2025" },
                  { name: "MindHack 2023", path: "/mindhack-2023" },
                  { name: "Partners", path: "/partners" },
                  { name: "FAQ", path: "/faq" },
                  { name: "Join Us", path: "/join-us" },
                  {
                    name: "Join as Participant",
                    path: "/register/participant",
                  },
                  { name: "Become a Partner", path: "/register/partner" },
                  { name: "Sponsor MindHack", path: "/register/sponsor" },
                ].map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2, delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      className={`block px-4 py-3 rounded-lg transition-colors text-lg ${
                        isActive(item.path)
                          ? "text-orange-400 bg-orange-500/10 glow-text font-bold"
                          : "text-white/90 hover:text-orange-400 hover:bg-orange-500/5 font-semibold"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
