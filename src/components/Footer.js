import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaMapMarkedAlt,
  FaEnvelope,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
const Footer = () => {
  const navigation = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
    { name: "Gallery", path: "/gallery" },
    { name: "History", path: "/history" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    { icon: FaFacebook, href: "#", label: "Facebook" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaLinkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="backdrop-blur-xl bg-gradient-to-br from-gray-900/20 via-orange-900/10 to-gray-900/20 border-t border-orange-500/20 py-12 sm:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid gap-8 sm:gap-12 md:grid-cols-2 lg:grid-cols-4"
        >
          <div>
            <div className="flex items-center space-x-2 mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-gray-800/60 via-orange-800/20 to-gray-800/60 backdrop-blur-sm rounded-lg flex items-center justify-center border border-orange-500/20 shadow-lg shadow-orange-500/20">
                <span className="text-white font-bold text-sm sm:text-base">
                  <img src="./logo.png" alt="MindHack Logo" />
                </span>
              </div>
              <span className="text-white font-bold text-xl sm:text-2xl">
                MindHack
              </span>
              <span className="text-orange-400 text-xs sm:text-sm font-mono glow-text">
                2025
              </span>
            </div>
            <p className="text-white/70 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
              The premier technical competition for 3D Design, Scratch
              Programming, and Robotics. Where innovation meets ancient wisdom
              through cutting-edge technology.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800/50 backdrop-blur-sm border border-orange-500/20 rounded-full flex items-center justify-center hover:bg-orange-500/10 transition-colors cursor-pointer hover:shadow-lg hover:shadow-orange-500/20 touch-manipulation">
                <span className="text-orange-400 text-xs sm:text-sm">f</span>
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800/50 backdrop-blur-sm border border-orange-500/20 rounded-full flex items-center justify-center hover:bg-orange-500/10 transition-colors cursor-pointer hover:shadow-lg hover:shadow-orange-500/20 touch-manipulation">
                <span className="text-amber-400 text-xs sm:text-sm">t</span>
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800/50 backdrop-blur-sm border border-orange-500/20 rounded-full flex items-center justify-center hover:bg-orange-500/10 transition-colors cursor-pointer hover:shadow-lg hover:shadow-orange-500/20 touch-manipulation">
                <span className="text-yellow-400 text-xs sm:text-sm">in</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-base sm:text-lg mb-4 sm:mb-6 glow-text-strong">
              Competitions
            </h4>
            <div className="space-y-2 sm:space-y-3">
              {[
                "3D Design & Modeling",
                "Scratch Programming",
                "Electronics & Robotics",
                "Competition Rules",
              ].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-white/70 hover:text-orange-400 transition-colors hover:glow-text text-sm sm:text-base touch-manipulation min-h-[44px] flex items-center"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-base sm:text-lg mb-4 sm:mb-6 glow-text-strong">
              Resources
            </h4>
            <div className="space-y-2 sm:space-y-3">
              {[
                "Technical Guidelines",
                "Software Downloads",
                "Hardware Kits",
                "Mentorship Program",
              ].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-white/70 hover:text-orange-400 transition-colors hover:glow-text text-sm sm:text-base touch-manipulation min-h-[44px] flex items-center"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-base sm:text-lg mb-4 sm:mb-6 glow-text-strong">
              Contact
            </h4>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-2 sm:space-x-3 text-white/70 text-sm sm:text-base">
                <FaEnvelope className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-orange-400" />
                <span>tech@mindhack.com</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 text-white/70 text-sm sm:text-base">
                <FaPhone className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-amber-400" />
                <span>+1 (555) TECH-2025</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 text-white/70 text-sm sm:text-base">
                <FaMapMarkedAlt className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-yellow-400" />
                <span>Tech Hub, Innovation District</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="border-t border-orange-500/20 mt-8 sm:mt-12 pt-6 sm:pt-8"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <p className="text-white/60 text-center sm:text-left text-sm sm:text-base">
              © 2025 MindHack Technical Competition. All rights reserved.
            </p>
            <div className="flex flex-col xs:flex-row space-y-2 xs:space-y-0 xs:space-x-4 sm:space-x-6">
              <a
                href="#"
                className="text-white/60 hover:text-orange-400 transition-colors hover:glow-text text-sm sm:text-base touch-manipulation min-h-[44px] flex items-center justify-center"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-orange-400 transition-colors hover:glow-text text-sm sm:text-base touch-manipulation min-h-[44px] flex items-center justify-center"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-orange-400 transition-colors hover:glow-text text-sm sm:text-base touch-manipulation min-h-[44px] flex items-center justify-center"
              >
                Competition Rules
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
