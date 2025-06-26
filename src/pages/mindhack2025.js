"use client";

import React, { useState, useEffect } from "react";
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
  FaBook,
  FaTrophy,
  FaBullseye,
  FaRocket,
  FaLightbulb,
  FaCogs,
  FaChalkboardTeacher,
  FaGraduationCap,
  FaNetworkWired,
  FaBriefcase,
  FaGlobe,
  FaCalendarAlt,
  FaMapPin,
  FaPlay,
  FaChild,
  FaUserGraduate,
  FaUserTie,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

// Add this new import
// Remove this line:
// const orbitron = Inter({
//   subsets: ["latin"],
//   variable: "--font-orbitron",
// })

// const heroImages = [

//   "https://wallpaperaccess.com/full/9254947.jpg",

//   "https://th.bing.com/th/id/R.8dfb89a4fce2e4e8f095cd50f9d52601?rik=NKO%2bcDVu%2bLUNAQ&pid=ImgRaw&r=0",
//   "/shwe.jpg",
//   "/frame.jpg",
//   "/mh.jpg",
// ];
const heroImages = [
  "./kv.jpg",
  "./hotel.jpg",
  "/shwe.jpg",
  "/BONUS.jpg",
  "/hotel.jpg",
];
const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
export default function MindHack2025() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const navigate = useNavigate();
  const toRegister = () => {
    navigate("/register/participant");
  };
  const toSponsor = () => {
    navigate("/register/sponsor");
  };
  const toPartner = () => {
    navigate("/register/partner");
  };
  const to2023 = () => {
    navigate("/mindhack-2023");
  };
  return (
    // Change this:
    // <div className="min-h-screen bg-gray-950 relative overflow-hidden font-orbitron">
    // To this:
    <div className="min-h-screen bg-gray-950 relative overflow-hidden">
      {/* Technical Grid Background */}
      <Helmet>
        <title>Mindhack 2025 | Mindhack Tournament</title>
        <meta
          name="description"
          content="Learn more about our team and mission."
        />
      </Helmet>
      <div className="fixed inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,165,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,165,0,0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Navigation */}

      {/* Hero Banner */}
      <section className="relative h-screen overflow-hidden">
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
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/70 to-gray-950/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-gray-950/40" />
        </div>

        {/* Hero Content - Bottom Left */}
        <div className="absolute bottom-16 left-8 md:left-16 z-10 max-w-2xl">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-left"
          >
            <div className="flex items-center space-x-3 mb-4">
              {/* <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse glow-dot" /> */}
              <span className="text-orange-400 font-mono text-sm uppercase tracking-wider glow-text">
                Technical Competition
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 glow-text-strong">
              MIND HACK{" "}
              <span className="text-orange-400 glow-text-orange">2025</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent mb-6 glow-text-gradient">
              Ancient Revival
            </h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed max-w-xl">
              Our world is changing fast. Technology is everywhere, but
              sometimes we forget what makes us who we are—our culture, our
              history, and our traditions. Mind Hack - is not just a
              competition. It is a mission to save our culture and keep it alive
              for the next generation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  toRegister();
                }}
                className="backdrop-blur-sm bg-orange-500/20 hover:bg-orange-500/30 text-white font-bold px-8 py-3 text-lg border border-orange-400/50 rounded-lg transition-all duration-300 flex items-center space-x-2 glow-button hover:shadow-lg hover:shadow-orange-500/25"
              >
                <span>Register Now</span>
                <FaChevronRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => {
                  to2023();
                }}
                className="border border-orange-500/30 text-white hover:bg-orange-500/10 font-bold px-8 py-3 text-lg rounded-lg transition-all duration-300 flex items-center space-x-2 hover:border-orange-400/50"
              >
                <FaPlay className="h-4 w-4" />
                <span>Watch 2023 Highlights</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Awards Section - Using Reference Image */}
      {/* Awards Section - Using Reference Image */}
      <section className="py-28 px-4 relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
        {/* Background Blurs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-orange-500/5 blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-amber-500/5 blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto relative z-30">
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-bold text-white mb-4"
            >
              Competition{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
                Awards
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-white/80 text-xl max-w-3xl mx-auto font-light"
            >
              Celebrating excellence across all age groups with incredible
              prizes.
            </motion.p>
          </div>

          {/* Glowing $10,000 Highlight */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            {/* Main Prize Amount - UNCHANGED */}
            <div className="relative inline-block mb-3">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400 animate-pulse">
                $10,000
              </h1>
              <span className="absolute inset-0 blur-2xl bg-gradient-to-r from-orange-400 to-amber-400 opacity-30 rounded-full -z-10" />
            </div>

            {/* Modified Prize Pool Text - now simple white text */}
            <div className="flex justify-center">
              <h3 className="text-white/80  font-medium tracking-wider">
                PRIZE POOL
              </h3>
            </div>
          </motion.div>

          {/* Award Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Wizards Champion Competition",
                ageGroup: "12 - 15 years",
                color: "from-yellow-400 to-amber-400",
                bgColor:
                  "bg-gradient-to-br from-yellow-400/10 via-amber-400/5 to-yellow-400/10",
                borderColor: "border-yellow-400/30",
                categories: ["Coding", "3D Design", "Electronics"],
                icon: <FaTrophy className="w-10 h-10" />,
              },
              {
                title: "Heroes Champion Competition",
                ageGroup: "16 - 19 years",
                color: "from-orange-400 to-amber-400",
                bgColor:
                  "bg-gradient-to-br from-orange-400/10 via-amber-400/5 to-orange-400/10",
                borderColor: "border-orange-400/30",
                categories: ["Coding", "3D Design", "Electronics"],
                icon: <FaTrophy className="w-10 h-10" />,
              },
              {
                title: "Masters Awards Competition",
                ageGroup: "20 - 25 years",
                color: "from-amber-400 to-orange-400",
                bgColor:
                  "bg-gradient-to-br from-amber-400/10 via-orange-400/5 to-amber-400/10",
                borderColor: "border-amber-400/30",
                categories: ["Coding", "3D Design", "Electronics"],
                icon: <FaTrophy className="w-10 h-10" />,
              },
              {
                title: "Audience Choice Competition",
                ageGroup: "All Categories",
                color: "from-yellow-400 to-amber-400",
                bgColor:
                  "bg-gradient-to-br from-yellow-400/10 via-amber-400/5 to-yellow-400/10",
                borderColor: "border-yellow-400/30",
                categories: [
                  "Overall Winner",
                  "Best Innovation",
                  "Technical Excellence",
                ],
                icon: <FaTrophy className="w-12 h-12" />,
              },
            ].map((award, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group h-full"
              >
                <div
                  className={`relative h-full rounded-xl overflow-hidden border ${award.borderColor} transition-all duration-500 group-hover:shadow-xl group-hover:shadow-orange-500/10`}
                >
                  {/* Card background */}
                  <div
                    className={`absolute inset-0 ${award.bgColor} opacity-80`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-950/80" />

                  {/* Card content */}
                  <div className="relative z-10 h-full flex flex-col p-6">
                    {/* Header */}
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {award.title}
                      </h3>
                      <p
                        className={`text-sm font-medium bg-gradient-to-r ${award.color} bg-clip-text text-transparent`}
                      >
                        {award.ageGroup}
                      </p>
                    </div>

                    {/* Center Icon */}
                    <div className="flex-1 flex flex-col items-center justify-center mb-8">
                      <div
                        className={`relative mb-6 w-28 h-28 rounded-full flex items-center justify-center bg-gradient-to-br ${award.color} shadow-lg`}
                      >
                        <div className="absolute inset-2 rounded-full bg-gray-900 flex items-center justify-center">
                          {React.cloneElement(award.icon, {
                            className: `w-10 h-10 ${award.color
                              .replace("from-", "text-")
                              .replace(" to-", " ")}`,
                          })}
                        </div>
                      </div>

                      {/* Categories */}
                      <div className="grid grid-cols-2 gap-2 w-full max-w-xs">
                        {award.categories.map((category, i) => (
                          <div
                            key={i}
                            className="text-xs text-center text-white/70 bg-gray-900/50 px-2 py-1 rounded border border-gray-700"
                          >
                            {category}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Competition Categories - Updated Design */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-900 via-gray-950 to-orange-900/20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-amber-500/10" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-6 glow-text-strong"
            >
              Competition{" "}
              <span className="text-orange-400 glow-text-orange">
                Categories
              </span>
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: FaMicrochip,
                title: "3D Design & Modeling",
                desc: "Craft stunning 3D models to preserve and promote  rich cultural heritage at MindHack 2025!",
                gradient: "from-orange-500/20 to-amber-500/20",
                iconColor: "text-orange-400",
                borderColor: "border-orange-400/30",
                glowColor: "shadow-orange-500/20",
              },
              {
                icon: FaCode,
                title: " Programming",
                desc: "Develop groundbreaking software to safeguard and celebrate traditions at MindHack 2025!",
                gradient: "from-amber-500/20 to-yellow-500/20",
                iconColor: "text-amber-400",
                borderColor: "border-amber-400/30",
                glowColor: "shadow-amber-500/20",
              },
              {
                icon: FaBolt,
                title: "Electronics & Robotics",
                desc: "Build innovative electronics to protect and showcase  vibrant culture at MindHack 2025!",
                gradient: "from-yellow-500/20 to-orange-500/20",
                iconColor: "text-yellow-400",
                borderColor: "border-yellow-400/30",
                glowColor: "shadow-yellow-500/20",
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div
                  className={`relative overflow-hidden rounded-3xl border ${category.borderColor} bg-gradient-to-br ${category.gradient} backdrop-blur-xl hover:scale-105 transition-all duration-500 hover:shadow-2xl ${category.glowColor}`}
                  style={{
                    background: `linear-gradient(135deg, rgba(17, 24, 39, 0.8) 0%, rgba(31, 41, 55, 0.6) 30%, ${
                      category.gradient.includes("orange")
                        ? "rgba(251, 146, 60, 0.1)"
                        : category.gradient.includes("amber")
                        ? "rgba(245, 158, 11, 0.1)"
                        : "rgba(234, 179, 8, 0.1)"
                    } 100%)`,
                  }}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-4 right-4 w-32 h-32 border border-orange-400/20 rounded-full" />
                    <div className="absolute bottom-4 left-4 w-24 h-24 border border-orange-400/20 rotate-45" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-orange-400/10 rounded-full" />
                  </div>

                  <div className="relative z-10 p-8">
                    {/* Header with Icon and Title side by side */}
                    <div className="flex items-center space-x-4 mb-6">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br from-gray-800/60 via-orange-800/20 to-gray-800/60 backdrop-blur-sm rounded-2xl flex items-center justify-center border ${category.borderColor} flex-shrink-0 group-hover:scale-110 transition-transform duration-300 hover:shadow-lg ${category.glowColor}`}
                      >
                        <category.icon
                          className={`h-8 w-8 ${category.iconColor}`}
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">
                          {category.title}
                        </h3>
                        <div className="text-right mt-2">
                          <div className="text-2xl font-bold text-orange-400/20 font-mono">
                            0{index + 1}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <p className="text-white/70 leading-relaxed text-sm">
                      {category.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Age Groups */}
      <section className="py-24 px-4 bg-gray-950 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-6 glow-text-strong"
            >
              Age{" "}
              <span className="text-orange-400 glow-text-orange">Groups</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: FaChild,
                title: "Wizards",
                age: "12 - 15 years",
                desc: "Young innovators taking their first steps into the world of tech creation. Special mentorship and simplified project requirements.",
                color: "text-orange-300",
                bgColor: "bg-orange-300/10",
                borderColor: "border-orange-300/30",
                glowColor: "shadow-orange-300/20",
              },
              {
                icon: FaUserGraduate,
                title: "Heroes",
                age: "16 - 19 years",
                desc: "Teen creators with developing skills ready to tackle more complex challenges and showcase their growing technical abilities.",
                color: "text-orange-400",
                bgColor: "bg-orange-400/10",
                borderColor: "border-orange-400/30",
                glowColor: "shadow-orange-400/20",
              },
              {
                icon: FaUserTie,
                title: "Masters",
                age: "20 - 25 years",
                desc: "Young adults with advanced skills ready to create projects with sophisticated technical implementation.",
                color: "text-amber-400",
                bgColor: "bg-amber-400/10",
                borderColor: "border-amber-400/30",
                glowColor: "shadow-amber-400/20",
              },
            ].map((group, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div
                  className={`backdrop-blur-xl bg-gradient-to-br from-gray-900/40 via-orange-900/20 to-gray-900/40 border ${group.borderColor} hover:bg-gradient-to-br hover:from-gray-800/50 hover:via-orange-800/30 hover:to-gray-800/50 transition-all duration-500 group-hover:scale-105 h-full relative overflow-hidden rounded-2xl hover:shadow-2xl ${group.glowColor}`}
                >
                  <div
                    className={`absolute inset-0 ${group.bgColor} opacity-5`}
                  />
                  <div className="p-8 text-center h-full flex flex-col relative z-10">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br from-gray-800/60 via-orange-800/20 to-gray-800/60 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border ${group.borderColor} hover:shadow-lg ${group.glowColor}`}
                    >
                      <group.icon className={`h-10 w-10 ${group.color}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {group.title}
                    </h3>
                    <div className={`text-xl font-bold ${group.color} mb-4`}>
                      {group.age}
                    </div>
                    <p className="text-white/70 leading-relaxed flex-grow">
                      {group.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Judging Criteria - Enhanced with Progress Bars */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-900 via-gray-950 to-orange-900/20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-amber-500/10" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-6 glow-text-strong"
            >
              Judging{" "}
              <span className="text-orange-400 glow-text-orange">Criteria</span>
            </motion.h2>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              Projects will be evaluated based on comprehensive criteria
              designed to assess both technical excellence and innovative
              thinking
            </p>
          </div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="backdrop-blur-xl bg-gradient-to-br from-gray-900/60 via-orange-900/20 to-gray-900/60 border border-orange-500/30 rounded-3xl p-8 md:p-12 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-8 right-8 w-32 h-32 border border-orange-400/30 rounded-full" />
                <div className="absolute bottom-8 left-8 w-24 h-24 border border-orange-400/30 rotate-45" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-orange-400/10 rounded-full" />
              </div>

              <div className="relative z-10">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Evaluation{" "}
                    <span className="text-orange-400">Framework</span>
                  </h3>
                  <p className="text-white/70 text-lg">
                    Each project is scored across six key dimensions to ensure
                    comprehensive assessment
                  </p>
                </div>

                <div className="space-y-8">
                  {[
                    {
                      icon: FaLightbulb,
                      title: "Innovation & Creativity",
                      percentage: 40,
                      desc: "Originality of ideas, creative problem-solving approaches, and unique implementation methods",
                      color: "text-yellow-400",
                      bgColor: "bg-yellow-400",
                      glowColor: "shadow-yellow-400/30",
                      borderColor: "border-yellow-400/30",
                    },
                    {
                      icon: FaCogs,
                      title: "Technical Excellence",
                      percentage: 40,
                      desc: "Code quality, technical complexity, proper implementation, and use of best practices",
                      color: "text-orange-400",
                      bgColor: "bg-orange-400",
                      glowColor: "shadow-orange-400/30",
                      borderColor: "border-orange-400/30",
                    },
                    {
                      icon: FaChalkboardTeacher,
                      title: "Impact & Presentation",
                      percentage: 20,
                      desc: "Real-world impact, presentation quality, and ability to communicate technical concepts effectively",
                      color: "text-amber-400",
                      bgColor: "bg-amber-400",
                      glowColor: "shadow-amber-400/30",
                      borderColor: "border-amber-400/30",
                    },
                  ].map((criteria, index) => (
                    <motion.div
                      key={index}
                      initial={{ x: -50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <div
                        className={`backdrop-blur-sm bg-gradient-to-br from-gray-800/30 via-orange-800/20 to-gray-800/30 border ${criteria.borderColor} rounded-2xl p-6 hover:bg-gradient-to-br hover:from-gray-800/50 hover:via-orange-800/30 hover:to-gray-800/50 transition-all duration-300 hover:shadow-lg ${criteria.glowColor}`}
                      >
                        <div className="flex items-start space-x-6">
                          {/* Icon */}
                          <div
                            className={`w-16 h-16 bg-gradient-to-br from-gray-800/60 via-orange-800/20 to-gray-800/60 backdrop-blur-sm rounded-xl flex items-center justify-center border ${criteria.borderColor} group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
                          >
                            <criteria.icon
                              className={`h-8 w-8 ${criteria.color}`}
                            />
                          </div>

                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-3">
                              <h4 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">
                                {criteria.title}
                              </h4>
                              <div
                                className={`text-2xl font-bold ${criteria.color} ml-4`}
                              >
                                {criteria.percentage}%
                              </div>
                            </div>

                            <p className="text-white/70 text-sm leading-relaxed mb-4">
                              {criteria.desc}
                            </p>

                            {/* Progress Bar */}
                            <div className="relative">
                              <div className="w-full bg-gray-700/50 rounded-full h-3 border border-gray-600/30 overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  whileInView={{
                                    width: `${criteria.percentage}%`,
                                  }}
                                  transition={{
                                    duration: 1.5,
                                    delay: index * 0.2,
                                    ease: "easeOut",
                                  }}
                                  viewport={{ once: true }}
                                  className={`h-full ${criteria.bgColor} relative overflow-hidden shadow-lg ${criteria.glowColor}`}
                                  style={{
                                    background: `linear-gradient(90deg, ${criteria.bgColor.replace(
                                      "bg-",
                                      ""
                                    )} 0%, ${criteria.bgColor
                                      .replace("bg-", "")
                                      .replace("-400", "-300")} 100%)`,
                                  }}
                                >
                                  {/* Animated shine effect */}
                                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />

                                  {/* Glow effect */}
                                  <div
                                    className={`absolute inset-0 ${criteria.bgColor} opacity-50 blur-sm`}
                                  />
                                </motion.div>
                              </div>

                              {/* Percentage indicator */}
                              <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{
                                  duration: 0.5,
                                  delay: index * 0.2 + 1,
                                }}
                                viewport={{ once: true }}
                                className={`absolute -top-8 bg-gray-800/90 backdrop-blur-sm border ${criteria.borderColor} rounded-lg px-3 py-1 text-sm font-bold ${criteria.color} shadow-lg ${criteria.glowColor}`}
                                style={{
                                  left: `${criteria.percentage}%`,
                                  transform: "translateX(-50%)",
                                  fontFamily: "Orbitron, sans-serif",
                                }}
                              >
                                {criteria.percentage}%
                                <div
                                  className={`absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800/90`}
                                />
                              </motion.div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Summary */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="mt-12 text-center"
                >
                  <div className="backdrop-blur-sm bg-gradient-to-br from-gray-800/30 via-orange-800/20 to-gray-800/30 border border-orange-500/20 rounded-2xl p-6">
                    <h4 className="text-xl font-bold text-white mb-3">
                      Total Score: <span className="text-orange-400">100%</span>
                    </h4>
                    <p className="text-white/70">
                      All criteria are carefully weighted to ensure fair and
                      comprehensive evaluation of each project's strengths and
                      innovation potential.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Dates & Location */}
      <section className="py-24 px-4 bg-gray-950 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Key Dates */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-8 glow-text-strong">
                Key{" "}
                <span className="text-orange-400 glow-text-orange">Dates</span>
              </h2>
              <div className="space-y-6">
                {[
                  {
                    date: "March 15, 2025",
                    event: "Registration Opens",
                    icon: FaCalendarAlt,
                  },
                  {
                    date: "June 10 - 11, 2025",
                    event: "Onboarding Session",
                    icon: FaBook,
                  },
                  {
                    date: "July 7, 2025",
                    event: "First Stage Competition",
                    icon: FaRocket,
                  },
                  {
                    date: "July 15, 2025",
                    event: "Finalist Announcement",
                    icon: FaBullseye,
                  },
                  {
                    date: "August 17(Wyndham Grand Yangon Hotel), 2025",
                    event: "Final Competition",
                    icon: FaTrophy,
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 p-4 backdrop-blur-xl bg-gradient-to-r from-gray-900/40 via-orange-900/20 to-gray-900/40 border border-orange-500/20 rounded-lg hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-800/60 via-orange-800/20 to-gray-800/60 backdrop-blur-sm rounded-lg flex items-center justify-center border border-orange-500/20 shadow-lg shadow-orange-500/20">
                      <item.icon className="h-6 w-6 text-orange-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">
                        {item.event}
                      </div>
                      <div className="text-orange-400 text-sm font-mono glow-text">
                        {item.date}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Location with Real Google Map */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-8 glow-text-strong">
                Event{" "}
                <span className="text-orange-400 glow-text-orange">
                  Location
                </span>
              </h2>
              <div className="backdrop-blur-xl bg-gradient-to-br from-gray-900/40 via-orange-900/20 to-gray-900/40 border border-orange-500/20 rounded-2xl p-6 mb-6 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300">
                <div className="flex items-start space-x-4 mb-4">
                  <FaMapPin className="h-6 w-6 text-orange-400 mt-1 glow-text" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      WYNDHAM GRAND YANGON Hotel
                    </h3>
                    <p className="text-white/80">
                      NO 11 Corner of Kan Yeik Thar Road & U Aung Myat Road,
                      Mingalar Taung Nyunt Tsp,
                    </p>
                    <p className="text-white/80">Yangon, Myanmar</p>
                  </div>
                </div>
              </div>

              {/* Real Google Map */}
              <div className="backdrop-blur-xl bg-gradient-to-br from-gray-900/40 via-orange-900/20 to-gray-900/40 border border-orange-500/20 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300">
                <a
                  href="https://www.google.com/maps/place/WYNDHAM+GRAND+YANGON+Hotel/@16.7921328,96.1692924,18z/data=!4m10!3m9!1s0x30c1ec9445b4f913:0x6e3f1f54b14c5503!5m3!1s2025-06-20!4m1!1i2!8m2!3d16.7920236!4d96.1700396!16s%2Fg%2F11f4m7jg2m?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative group"
                >
                  <div className="h-64 bg-gray-800/50 relative overflow-hidden">
                    {/* Google Maps Static Image */}
                    <img
                      src="./map.png"
                      alt="Event Location Map MindHack 2025 "
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Fallback content */}
                    <div
                      className="absolute inset-0 bg-gray-800/50 flex items-center justify-center"
                      style={{ display: "none" }}
                    >
                      <div className="text-center">
                        <FaMapPin className="h-12 w-12 text-orange-400 mx-auto mb-4 glow-text" />
                        <p className="text-white/80 font-semibold">
                          View on Google Maps
                        </p>
                        <p className="text-white/60 text-sm">Yangon, Myanmar</p>
                      </div>
                    </div>
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gray-950/20 group-hover:bg-gray-950/10 transition-colors duration-300 flex items-center justify-center">
                      <div className="bg-orange-500/20 backdrop-blur-sm border border-orange-400/50 rounded-lg px-4 py-2 flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg shadow-orange-500/20">
                        <FaExternalLinkAlt className="h-4 w-4 text-orange-400" />
                        <span className="text-white font-semibold">
                          Open in Google Maps
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Full Width */}
      <section className="py-24 bg-gradient-to-br from-gray-950 via-gray-900 to-orange-950/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-amber-500/5" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 glow-text-strong">
              Benefits of{" "}
              <span className="text-orange-400 glow-text-orange">
                Participating
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: FaGraduationCap,
                title: "Skill Development",
                desc: "Enhance your technical abilities through hands-on project work and expert feedback         ",
              },
              {
                icon: FaNetworkWired,
                title: "Networking",
                desc: "Connect with industry professionals, mentors, and like-minded peers",
              },
              {
                icon: FaBriefcase,
                title: "Career Opportunities",
                desc: "Showcase your work to potential employers and educational institutions",
              },
              {
                icon: FaGlobe,
                title: "Cultural Impact",
                desc: "Contribute to preserving and revitalizing cultural heritage through technology         ",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-gray-800/60 via-orange-800/20 to-gray-800/60 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border border-orange-500/20 hover:shadow-lg hover:shadow-orange-500/20">
                  <benefit.icon className="h-10 w-10 text-orange-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-white/70 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - 3 YouTube Videos */}
      <section className="py-24 px-4 bg-gray-950 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-6 glow-text-strong"
            >
              What Our{" "}
              <span className="text-orange-400 glow-text-orange">
                Participants Say
              </span>
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                video: "https://www.youtube.com/embed/XFWZoaRQfCc", // YouTube video ID
                title: "MindHack 2023 Winner",
                // category: "3D Design",
              },
              {
                video: "https://www.youtube.com/embed/Sj-Lk__cV8A",

                title: "MindHack 2023 Finalist",
                // category: "Robotics",
              },
              {
                video: "https://www.youtube.com/embed/cn6aMGaJ4nI", // YouTube video ID

                title: "MindHack 2024 Champion",
                // category: "Coding",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="backdrop-blur-xl bg-gradient-to-br from-gray-900/40 via-orange-900/20 to-gray-900/40 border border-orange-500/20 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500"
              >
                <div className="aspect-video">
                  <iframe
                    src={`${testimonial.video}`}
                    title={`${testimonial.name} Testimonial`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {testimonial.name}
                  </h3>
                  <p className="text-orange-400 mb-2 glow-text">
                    {testimonial.title}
                  </p>
                  {/* <p className="text-white/70">
                    {testimonial.category} Category
                  </p> */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Join - Full Black Background */}
      <section className="py-24 px-4 bg-black relative">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 glow-text-strong">
              Ready to Join{" "}
              <span className="text-orange-400 glow-text-orange">
                MindHack 2025
              </span>
              ?
            </h2>
            <p className="text-white/90 text-xl mb-12 max-w-4xl mx-auto leading-relaxed">
              Be part of the movement that's bridging the gap between cultural
              heritage and cutting-edge technology. Register today and start
              your journey!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => {
                  toRegister();
                }}
                className="backdrop-blur-sm bg-orange-500/20 hover:bg-orange-500/30 text-white font-bold px-12 py-4 text-lg border border-orange-400/50 rounded-lg transition-all duration-300 glow-button hover:shadow-2xl hover:shadow-orange-500/25"
              >
                Register as Participant
              </button>
              <button
                onClick={() => {
                  toPartner();
                }}
                className="backdrop-blur-sm bg-amber-500/20 hover:bg-amber-500/30 text-white font-bold px-12 py-4 text-lg border border-amber-400/50 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25"
              >
                Partner School
              </button>
              <button
                onClick={() => {
                  toSponsor();
                }}
                className="backdrop-blur-sm bg-yellow-500/20 hover:bg-yellow-500/30 text-white font-bold px-12 py-4 text-lg border border-yellow-400/50 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/25"
              >
                Sponsor the Event
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partner Schools */}
      <section className="py-24 px-4 bg-gray-950 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-6 glow-text-strong"
            >
              Our{" "}
              <span className="text-orange-400 glow-text-orange">
                Partner Schools
              </span>
            </motion.h2>
          </div>

          <motion.div
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6"
          >
            {Array.from({ length: 18 }).map((_, index) => (
              <motion.div
                key={`school-${index + 1}`}
                variants={staggerItem}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
                className="group"
              >
                <div className="relative bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 aspect-square group">
                  <img
                    src={`/school/${index + 1}.png`}
                    alt={`School ${index + 1} MindHack 2025`}
                    className="absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Subtle glow effect on hover */}
                  <div className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 rounded-xl bg-orange-100/20"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className=" mt-5 text-center">
            <button
              onClick={() => {
                toPartner();
              }}
              className="backdrop-blur-sm bg-gradient-to-r from-gray-800/50 via-orange-800/20 to-gray-800/50 hover:bg-gradient-to-r hover:from-gray-700/60 hover:via-orange-700/30 hover:to-gray-700/60 text-white font-bold px-12 py-4 text-lg border border-orange-500/20 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20"
            >
              Become a Partner
            </button>
          </div>
        </div>
      </section>

      {/* Origins of MindHack */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-950 via-gray-900 to-orange-950/20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-amber-500/5" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-8 glow-text-strong">
                The Origins of{" "}
                <span className="text-orange-400 glow-text-orange">
                  MindHack
                </span>
              </h2>
              <div className="space-y-6 text-white/80 leading-relaxed">
                <p>
                  Mind Hack started with a bold vision: to transform Myanmar’s
                  tech scene by empowering its youth. The first event in 2023
                  brought together 100 students to compete in coding challenges.
                  The success of this event laid the groundwork for a larger,
                  more ambitious platform.
                </p>
                <p>
                  We believe that the principles and knowledge systems developed
                  by our ancestors contain timeless insights that can guide and
                  enhance modern technological innovation. Through MindHack, we
                  create a platform where young minds can explore this
                  intersection.
                </p>
                <p>
                  Our mission is to inspire the next generation of innovators to
                  not just create technology, but to create technology with
                  purpose, wisdom, and cultural awareness. Every year, we
                  witness incredible projects that demonstrate how ancient
                  principles can solve modern problems.
                </p>
                <p>
                  Join us in this journey of discovery, innovation, and cultural
                  revival. Together, we're not just building the future – we're
                  honoring the past while creating tomorrow.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="backdrop-blur-xl bg-gradient-to-br from-gray-900/40 via-orange-900/20 to-gray-900/40 border border-orange-500/20 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500"
            >
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/c-wbSGQDOOs"
                  title="Origins of MindHack"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  The MindHack Story
                </h3>
                <p className="text-white/70">
                  Discover how ancient wisdom meets modern innovation
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="backdrop-blur-xl bg-gradient-to-br from-gray-900/20 via-orange-900/10 to-gray-900/20 border-t border-orange-500/20 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-12"
          >
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-gray-800/60 via-orange-800/20 to-gray-800/60 backdrop-blur-sm rounded-lg flex items-center justify-center border border-orange-500/20 shadow-lg shadow-orange-500/20">
                  <span className="text-white font-bold">M</span>
                </div>
                <span className="text-white font-bold text-2xl">MindHack</span>
                <span className="text-orange-400 text-sm font-mono glow-text">
                  2025
                </span>
              </div>
              <p className="text-white/70 leading-relaxed mb-6">
                The premier technical competition for 3D Design, Scratch
                Programming, and Robotics. Where innovation meets ancient wisdom
                through cutting-edge technology.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-6">
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
                    className="block text-white/70 hover:text-orange-400 transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-6">Resources</h4>
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
                    className="block text-white/70 hover:text-orange-400 transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-6">Contact</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-white/70">
                  <FaEnvelope className="h-5 w-5 flex-shrink-0 text-orange-400" />
                  <span>tech@mindhack.com</span>
                </div>
                <div className="flex items-center space-x-3 text-white/70">
                  <FaPhone className="h-5 w-5 flex-shrink-0 text-amber-400" />
                  <span>+1 (555) TECH-2025</span>
                </div>
                <div className="flex items-center space-x-3 text-white/70">
                  <FaMapMarkerAlt className="h-5 w-5 flex-shrink-0 text-yellow-400" />
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
            className="border-t border-orange-500/20 mt-12 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-white/60 text-center md:text-left">
                © 2025 MindHack Technical Competition. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="text-white/60 hover:text-orange-400 transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-white/60 hover:text-orange-400 transition-colors"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-white/60 hover:text-orange-400 transition-colors"
                >
                  Competition Rules
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </footer> */}

      {/* Custom Styles */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap");
        //
        * {
          font-family: "Orbitron", monospace !important;
        }

        .glow-text {
          text-shadow: 0 0 10px rgba(255, 165, 0, 0.5);
        }
        .glow-text-strong {
          text-shadow: 0 0 20px rgba(255, 165, 0, 0.6),
            0 0 30px rgba(255, 165, 0, 0.4);
        }
        .glow-text-orange {
          text-shadow: 0 0 15px rgba(255, 165, 0, 0.8),
            0 0 25px rgba(255, 165, 0, 0.5);
        }
        .glow-text-gradient {
          filter: drop-shadow(0 0 10px rgba(255, 165, 0, 0.5));
        }
        .glow-dot {
          box-shadow: 0 0 15px rgba(255, 165, 0, 0.8),
            0 0 25px rgba(255, 165, 0, 0.5);
        }
        .glow-button {
          box-shadow: 0 0 20px rgba(255, 165, 0, 0.3);
        }
        .glow-button:hover {
          box-shadow: 0 0 30px rgba(255, 165, 0, 0.5),
            0 0 40px rgba(255, 165, 0, 0.3);
        }
      `}</style>
    </div>
  );
}
