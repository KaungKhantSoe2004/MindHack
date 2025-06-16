"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaChevronRight,
  FaMicrochip,
  FaCode,
  FaBolt,
  FaBars,
  FaTimes,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaUsers,
  FaBook,
  FaTrophy,
  FaBullseye,
  FaRocket,
} from "react-icons/fa";

const heroImages = [
  // Teamwork at hackathon
  "https://wallpaperaccess.com/full/9254947.jpg",

  // Programmer at night
  "https://th.bing.com/th/id/R.8dfb89a4fce2e4e8f095cd50f9d52601?rik=NKO%2bcDVu%2bLUNAQ&pid=ImgRaw&r=0",

  // People collaborating with laptops
  "/shwe.jpg",

  // Dark coding setup
  "/frame.png",

  // Event tech atmosphere
  "/mh.png",
];

export default function MindHackHomepage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Technical Grid Background */}
      <div className="fixed inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 backdrop-blur-sm bg-gray-800/50 rounded-lg flex items-center justify-center border border-white/20">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span
                className="text-white font-bold text-xl"
                style={{ fontFamily: "Orbitron, sans-serif" }}
              >
                MindHack
              </span>
              <span className="text-cyan-400 text-sm font-mono">2025</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8 flex-1 justify-start ml-16">
              <a
                href="/"
                className="text-white/80 hover:text-cyan-400 transition-colors font-medium"
              >
                Home
              </a>

              {/* Competitions Dropdown */}
              <div className="relative group">
                <button className="text-cyan-400 font-medium flex items-center space-x-1">
                  <span>Competitions</span>
                  <FaChevronRight className="h-3 w-3 transform group-hover:rotate-90 transition-transform duration-200" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 backdrop-blur-xl bg-gray-900/95 border border-white/20 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="p-2">
                    <a
                      href="/mindhack-2025"
                      className="block px-4 py-3 text-cyan-400 bg-white/5 rounded-lg"
                    >
                      <div className="font-semibold">MindHack 2025</div>
                      <div className="text-sm text-cyan-400/60">
                        Current Competition
                      </div>
                    </a>
                    <a
                      href="/past-events"
                      className="block px-4 py-3 text-white/80 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-colors"
                    >
                      <div className="font-semibold">Past Events Recap</div>
                      <div className="text-sm text-white/60">
                        Previous Competitions
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <a
                href="#"
                className="text-white/80 hover:text-cyan-400 transition-colors font-medium"
              >
                Timeline
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-cyan-400 transition-colors font-medium"
              >
                Register
              </a>
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
                className="md:hidden backdrop-blur-xl bg-black/90 border-t border-white/10 overflow-hidden"
              >
                <motion.div
                  initial={{ y: -20 }}
                  animate={{ y: 0 }}
                  exit={{ y: -20 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="px-2 pt-4 pb-6 space-y-2"
                >
                  {[
                    "Home",
                    "MindHack 2025",
                    "Past Events",
                    "Timeline",
                    "Register",
                  ].map((item, index) => (
                    <motion.a
                      key={item}
                      href="#"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2, delay: index * 0.1 }}
                      className="block px-4 py-3 text-white/80 hover:text-cyan-400 transition-colors rounded-lg hover:bg-white/5"
                    >
                      {item}
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Hero Section with Technical Banner */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Images - Seamless Transition */}
        <div className="absolute inset-0">
          <AnimatePresence>
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${heroImages[currentImageIndex]})`,
                }}
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/50" />
        </div>

        {/* Technical Overlay Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-400 rotate-45" />
          <div className="absolute bottom-40 right-32 w-24 h-24 border border-blue-400 rotate-12" />
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-cyan-300 rounded-full" />
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-12 left-12 z-10 max-w-3xl">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-left"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
              <span className="text-cyan-400 font-mono text-sm uppercase tracking-wider">
                Technical Competition
              </span>
            </div>
            <h1
              className="text-4xl md:text-6xl font-bold text-white mb-4"
              style={{ fontFamily: "Orbitron, sans-serif" }}
            >
              MindHack <span className="text-cyan-400">2025</span>
            </h1>
            <h2
              className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6"
              style={{ fontFamily: "Orbitron, sans-serif" }}
            >
              The Ancient Revival
            </h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed max-w-2xl">
              Master the future of technology through{" "}
              <span className="text-cyan-400 font-semibold">3D Design</span>,
              <span className="text-blue-400 font-semibold">
                {" "}
                Scratch Programming
              </span>
              , and
              <span className="text-cyan-400 font-semibold">
                {" "}
                Robotics Engineering
              </span>
              . Compete for prestigious awards in this ultimate technical
              challenge.
            </p>
            <button className="backdrop-blur-sm bg-gray-800/50 hover:bg-gray-700/60 text-white text-lg px-8 py-3 font-semibold border border-white/20 rounded-lg transition-all duration-300 flex items-center space-x-2">
              <span>Register Now</span>
              <FaChevronRight className="h-5 w-5" />
            </button>
          </motion.div>
        </div>

        {/* Image indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? "bg-cyan-400 scale-125"
                  : "bg-white/50 hover:bg-cyan-400/70"
              }`}
            />
          ))}
        </div>
      </section>

      {/* What is MindHack + Competition Categories Section */}
      <section className="py-24 px-4 bg-black relative">
        <div className="max-w-7xl mx-auto">
          {/* What is MindHack */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
              className="flex items-center justify-center space-x-3 mb-6"
            >
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-cyan-400" />
              <span className="text-cyan-400 font-mono text-sm uppercase tracking-wider">
                About MindHack
              </span>
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-cyan-400" />
            </motion.div>
            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: "Orbitron, sans-serif" }}
            >
              What is <span className="text-cyan-400">MindHack</span>?
            </motion.h2>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: false }}
              className="text-white/70 max-w-4xl mx-auto text-lg leading-relaxed mb-16"
            >
              MindHack is a groundbreaking technical competition that bridges
              ancient wisdom with cutting-edge technology. We believe in the
              power of combining time-tested principles with modern innovation
              to solve complex problems and create meaningful impact. Through
              three specialized categories, participants showcase their
              technical mastery while honoring cultural heritage and driving
              technological advancement.
            </motion.p>
          </div>

          {/* Competition Categories */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
              className="flex items-center justify-center space-x-3 mb-6"
            >
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-cyan-400" />
              <span className="text-cyan-400 font-mono text-sm uppercase tracking-wider">
                Competition Categories
              </span>
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-cyan-400" />
            </motion.div>
            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: "Orbitron, sans-serif" }}
            >
              Technical <span className="text-cyan-400">Competitions</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: FaMicrochip,
                title: "3D Designing & Modeling",
                desc: "Create stunning 3D models, architectural designs, and immersive visualizations using industry-standard software. Showcase your spatial creativity and technical precision in bringing digital concepts to life.",
              },
              {
                icon: FaCode,
                title: "Scratch Coding",
                desc: "Build interactive games, animations, and applications using visual programming. Perfect for beginners and experts alike to create engaging digital experiences that combine creativity with logical thinking.",
              },
              {
                icon: FaBolt,
                title: "Electronics & Robotics",
                desc: "Design and build autonomous robots, IoT devices, and electronic circuits. Combine hardware engineering with intelligent programming for real-world solutions that bridge the physical and digital worlds.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: false }}
                className="group"
              >
                <div className="backdrop-blur-xl bg-gray-900/40 border border-white/20 hover:bg-gray-800/50 transition-all duration-500 group-hover:scale-105 h-full relative overflow-hidden rounded-2xl">
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-4 right-4 w-32 h-32 border border-white/20 rounded-full" />
                    <div className="absolute bottom-4 left-4 w-24 h-24 border border-white/20 rotate-45" />
                  </div>
                  <div className="p-8 text-center h-full flex flex-col relative z-10">
                    <div className="w-20 h-20 bg-gray-800/60 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/20">
                      <item.icon className="h-10 w-10 text-white" />
                    </div>
                    <h3
                      className="text-2xl font-bold text-white mb-4"
                      style={{ fontFamily: "Orbitron, sans-serif" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed flex-grow">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Discover The Ancient Revival Section */}
      <section className="py-24 px-4 bg-black relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
              className="flex items-center justify-center space-x-3 mb-6"
            >
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-cyan-400" />
              <span className="text-cyan-400 font-mono text-sm uppercase tracking-wider">
                Discover The Ancient Revival
              </span>
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-cyan-400" />
            </motion.div>
            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false }}
              className="text-4xl md:text-5xl font-bold text-white mb-8"
              style={{ fontFamily: "Orbitron, sans-serif" }}
            >
              Reviving Culture Through{" "}
              <span className="text-cyan-400">MindHack 2025</span>
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
              className="backdrop-blur-xl bg-gray-900/40 rounded-3xl p-10 border border-white/20 relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-40 h-40 border-2 border-white/20 rounded-full" />
                <div className="absolute bottom-0 left-0 w-32 h-32 border-2 border-white/20 rotate-45" />
              </div>
              <div className="relative z-10">
                <h3
                  className="text-3xl font-bold text-white mb-6"
                  style={{ fontFamily: "Orbitron, sans-serif" }}
                >
                  Why We Celebrate MindHack
                </h3>
                <p className="text-white/80 mb-6 leading-relaxed text-lg">
                  MindHack serves as a groundbreaking fusion of ancient wisdom
                  and modern innovation. Our mission is to bridge the gap
                  between traditional knowledge systems and contemporary
                  technological solutions, creating a unique platform for
                  cultural revival and technological advancement.
                </p>
                <p className="text-white/80 mb-8 leading-relaxed text-lg">
                  We invite participants to explore and integrate time-tested
                  principles with cutting-edge technology, fostering solutions
                  that honor our heritage while addressing modern challenges.
                  This isn't just a competition—it's a movement to preserve and
                  revitalize ancient wisdom through innovation.
                </p>
                <p className="text-white/80 leading-relaxed text-lg">
                  Through technical mastery in 3D design, programming, and
                  robotics, we create a bridge between past and future, ensuring
                  that cultural wisdom continues to inspire technological
                  progress for generations to come.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-3xl backdrop-blur-xl bg-gray-900/40 border border-white/20">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                  alt="Team collaboration"
                  className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h4
                    className="text-white font-semibold text-xl"
                    style={{ fontFamily: "Orbitron, sans-serif" }}
                  >
                    Collaborative Innovation
                  </h4>
                  <p className="text-white/80">
                    Teams working together to create the future
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Competition Timeline */}
      <section className="py-24 px-4 bg-black relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
              className="flex items-center justify-center space-x-3 mb-6"
            >
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-cyan-400" />
              <span className="text-cyan-400 font-mono text-sm uppercase tracking-wider">
                Event Timeline
              </span>
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-cyan-400" />
            </motion.div>
            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "Orbitron, sans-serif" }}
            >
              Competition <span className="text-cyan-400">Timeline</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                phase: "Registration",
                date: "March 1, 2025",
                time: "9:00 AM",
                icon: FaUsers,
              },
              {
                phase: "On Boarding",
                date: "March 10, 2025",
                time: "10:00 AM",
                icon: FaBook,
              },
              {
                phase: "First Stage",
                date: "March 20, 2025",
                time: "9:00 AM",
                icon: FaRocket,
              },
              {
                phase: "Finalist Announcement",
                date: "March 21, 2025",
                time: "6:00 PM",
                icon: FaBullseye,
              },
              {
                phase: "Second Stage Final",
                date: "March 22, 2025",
                time: "9:00 AM",
                icon: FaTrophy,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: false }}
                className="group"
              >
                <div className="backdrop-blur-xl bg-gray-900/40 border border-white/20 hover:bg-gray-800/50 transition-all duration-500 group-hover:scale-105 h-full relative overflow-hidden rounded-2xl">
                  <div className="p-6 text-center h-full flex flex-col relative z-10">
                    <div className="mb-4">
                      <div
                        className="text-sm text-cyan-400 font-mono mb-1"
                        style={{ fontFamily: "Orbitron, sans-serif" }}
                      >
                        {item.time}
                      </div>
                      <div className="text-sm text-white/70 font-mono">
                        {item.date}
                      </div>
                    </div>
                    <div className="w-20 h-20 bg-gray-800/60 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 border border-white/20">
                      <item.icon className="h-10 w-10 text-white" />
                    </div>
                    <h3
                      className="text-lg font-bold text-white"
                      style={{ fontFamily: "Orbitron, sans-serif" }}
                    >
                      {item.phase}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Movement Section */}
      <section className="py-24 px-4 bg-black relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
              className="flex items-center justify-center space-x-3 mb-6"
            >
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-cyan-400" />
              <span className="text-cyan-400 font-mono text-sm uppercase tracking-wider">
                Join The Movement
              </span>
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-cyan-400" />
            </motion.div>
            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false }}
              className="text-4xl md:text-5xl font-bold text-white mb-8"
              style={{ fontFamily: "Orbitron, sans-serif" }}
            >
              Join the <span className="text-cyan-400">Movement</span>
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-3xl backdrop-blur-xl bg-gray-900/40 border border-white/20">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop"
                  alt="Hackathon participants"
                  className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h4
                    className="text-white font-semibold text-xl"
                    style={{ fontFamily: "Orbitron, sans-serif" }}
                  >
                    Global Community
                  </h4>
                  <p className="text-white/80">
                    Innovators from around the world
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
              className="backdrop-blur-xl bg-gray-900/40 rounded-3xl p-10 border border-white/20 relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-40 h-40 border-2 border-white/20 rounded-full" />
                <div className="absolute bottom-0 left-0 w-32 h-32 border-2 border-white/20 rotate-45" />
              </div>
              <div className="relative z-10">
                <h3
                  className="text-3xl font-bold text-white mb-8"
                  style={{ fontFamily: "Orbitron, sans-serif" }}
                >
                  Why Join MindHack?
                </h3>
                <p className="text-white/80 text-lg mb-8 leading-relaxed">
                  Become part of a global community of innovators, creators, and
                  visionaries who are passionate about bridging the gap between
                  ancient wisdom and modern technology.
                </p>
                <div className="space-y-6">
                  {[
                    "Network with like-minded innovators and industry experts from around the world",
                    "Access cutting-edge tools, technologies, and development resources",
                    "Compete for prizes worth $50,000+ and exclusive partnership opportunities",
                    "Receive mentorship from leading tech professionals and cultural experts",
                    "Showcase your solutions to a global audience of investors and thought leaders",
                    "Contribute to preserving and revitalizing ancient wisdom through innovation",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ x: -30, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: false }}
                      className="flex items-start space-x-4"
                    >
                      <div className="w-3 h-3 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-white/80 leading-relaxed">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ready to Compete Section - Full Width */}
      <section className="py-24 bg-gradient-to-r from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-8 left-8 w-24 h-24 border-2 border-cyan-400 rotate-45" />
          <div className="absolute bottom-8 right-8 w-32 h-32 border-2 border-blue-400 rounded-full" />
          <div className="absolute top-1/2 left-1/4 w-40 h-40 border border-cyan-300 rotate-12" />
          <div className="absolute top-1/4 right-1/4 w-28 h-28 border border-blue-300 rounded-full" />
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <h2
              className="text-4xl md:text-6xl font-bold text-white mb-8"
              style={{ fontFamily: "Orbitron, sans-serif" }}
            >
              Ready to <span className="text-cyan-400">Compete</span>?
            </h2>
            <p className="text-white/90 text-xl mb-12 max-w-4xl mx-auto leading-relaxed">
              Join MindHack 2025 and showcase your technical skills in 3D
              Design, Scratch Programming, and Robotics. Compete for $50,000+ in
              prizes and gain recognition from industry leaders in this ultimate
              technical challenge.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <button className="backdrop-blur-sm bg-cyan-500/20 hover:bg-cyan-500/30 text-white font-bold px-12 py-4 text-lg border border-cyan-400/50 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Register Now</span>
                <FaChevronRight className="h-6 w-6" />
              </button>
              <button className="border border-white/30 text-white hover:bg-white/10 font-bold px-12 py-4 text-lg rounded-lg transition-all duration-300">
                Download Rules
              </button>
            </div>
            <div className="flex items-center justify-center space-x-12 text-white/60">
              <div className="text-center">
                <div
                  className="text-3xl font-bold text-cyan-400 mb-2"
                  style={{ fontFamily: "Orbitron, sans-serif" }}
                >
                  500+
                </div>
                <div className="text-sm uppercase tracking-wider">
                  Participants
                </div>
              </div>
              <div className="text-center">
                <div
                  className="text-3xl font-bold text-blue-400 mb-2"
                  style={{ fontFamily: "Orbitron, sans-serif" }}
                >
                  2025
                </div>
                <div className="text-sm uppercase tracking-wider">Edition</div>
              </div>
              <div className="text-center">
                <div
                  className="text-3xl font-bold text-purple-400 mb-2"
                  style={{ fontFamily: "Orbitron, sans-serif" }}
                >
                  LIVE
                </div>
                <div className="text-sm uppercase tracking-wider">Status</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Past MindHack Highlights */}
      <section className="py-24 px-4 bg-black relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
              className="flex items-center justify-center space-x-3 mb-6"
            >
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-cyan-400" />
              <span className="text-cyan-400 font-mono text-sm uppercase tracking-wider">
                Past Highlights
              </span>
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-cyan-400" />
            </motion.div>
            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: "Orbitron, sans-serif" }}
            >
              Past MindHack <span className="text-cyan-400">Highlights</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
            ].map((img, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: false }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl backdrop-blur-xl bg-gray-900/40 border border-white/20 hover:bg-gray-800/50 transition-all duration-500 group-hover:scale-105">
                  <img
                    src={img || "/placeholder.svg"}
                    alt={`MindHack highlight ${index + 1}`}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="backdrop-blur-xl bg-gray-900/20 border-t border-white/10 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="grid md:grid-cols-4 gap-12"
          >
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 backdrop-blur-sm bg-gray-800/50 rounded-lg flex items-center justify-center border border-white/20">
                  <span className="text-white font-bold">M</span>
                </div>
                <span
                  className="text-white font-bold text-2xl"
                  style={{ fontFamily: "Orbitron, sans-serif" }}
                >
                  MindHack
                </span>
                <span className="text-cyan-400 text-sm font-mono">2025</span>
              </div>
              <p className="text-white/70 leading-relaxed mb-6">
                The premier technical competition for 3D Design, Scratch
                Programming, and Robotics. Where innovation meets ancient wisdom
                through cutting-edge technology.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800/50 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-gray-700/60 transition-colors cursor-pointer">
                  <span className="text-cyan-400 text-sm">f</span>
                </div>
                <div className="w-10 h-10 bg-gray-800/50 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-gray-700/60 transition-colors cursor-pointer">
                  <span className="text-blue-400 text-sm">t</span>
                </div>
                <div className="w-10 h-10 bg-gray-800/50 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-gray-700/60 transition-colors cursor-pointer">
                  <span className="text-purple-400 text-sm">in</span>
                </div>
              </div>
            </div>

            <div>
              <h4
                className="text-white font-bold text-lg mb-6"
                style={{ fontFamily: "Orbitron, sans-serif" }}
              >
                Competitions
              </h4>
              <div className="space-y-3">
                {[
                  "3D Design & Modeling",
                  "Scratch Programming",
                  "Electronics & Robotics",
                  "Competition Rules",
                ].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="block text-white/70 hover:text-cyan-400 transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4
                className="text-white font-bold text-lg mb-6"
                style={{ fontFamily: "Orbitron, sans-serif" }}
              >
                Resources
              </h4>
              <div className="space-y-3">
                {[
                  "Technical Guidelines",
                  "Software Downloads",
                  "Hardware Kits",
                  "Mentorship Program",
                ].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="block text-white/70 hover:text-cyan-400 transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4
                className="text-white font-bold text-lg mb-6"
                style={{ fontFamily: "Orbitron, sans-serif" }}
              >
                Contact
              </h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-white/70">
                  <FaEnvelope className="h-5 w-5 flex-shrink-0 text-cyan-400" />
                  <span>tech@mindhack.com</span>
                </div>
                <div className="flex items-center space-x-3 text-white/70">
                  <FaPhone className="h-5 w-5 flex-shrink-0 text-blue-400" />
                  <span>+1 (555) TECH-2025</span>
                </div>
                <div className="flex items-center space-x-3 text-white/70">
                  <FaMapMarkerAlt className="h-5 w-5 flex-shrink-0 text-purple-400" />
                  <span>Tech Hub, Innovation District</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false }}
            className="border-t border-white/10 mt-12 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-white/60 text-center md:text-left">
                © 2025 MindHack Technical Competition. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="text-white/60 hover:text-cyan-400 transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-white/60 hover:text-cyan-400 transition-colors"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-white/60 hover:text-cyan-400 transition-colors"
                >
                  Competition Rules
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
