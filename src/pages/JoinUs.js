"use client";

import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import {
  FaChevronRight,
  FaUsers,
  FaLightbulb,
  FaChartLine,
  FaHeart,
  FaStar,
  FaCode,
  FaCube,
  FaMicrochip,
  FaHandshake,
  FaTrophy,
  FaGlobe,
  FaRocket,
  FaEnvelope,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function JoinUs() {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  const navigate = useNavigate();
  const toRegister = () => {
    navigate("/register/participant");
  };
  const toPartner = () => {
    navigate("/register/partner");
  };
  const toSponsor = () => {
    navigate("/register/sponsor");
  };
  return (
    <div className="relative pt-16">
      <Helmet>
        <title>JoinUs | Mindhack Tournament</title>
        <meta
          name="description"
          content="Learn more about our team and mission."
        />
      </Helmet>
      {/* Header Section */}
      <section className="py-16 sm:py-24 px-4 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-orange-500/5 blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-amber-500/5 blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="flex items-center justify-center space-x-3 mb-6"
          >
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-orange-400" />
            <span className="text-orange-400 font-mono text-sm uppercase tracking-wider glow-text">
              Community
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-orange-400" />
          </motion.div>

          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 glow-text-strong leading-tight"
          >
            JOIN MIND
            <span className="text-orange-400 glow-text-orange">HACK</span>{" "}
            COMMUNITY
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm xs:text-base sm:text-lg text-white/90 leading-relaxed max-w-3xl mx-auto"
          >
            Be part of the most innovative youth tech competition. Whether
            you're a participant, partner, or sponsor, there's a place for you
            in our growing community.
          </motion.p>
        </div>
      </section>

      {/* Three Cards Section */}
      <section className="py-16 sm:py-24 px-4 bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid lg:grid-cols-3 gap-8"
          >
            {/* Register as Participant Card */}
            <motion.div
              variants={staggerItem}
              whileHover={{
                scale: 1.02,
                rotateY: 2,
                transition: { duration: 0.3 },
              }}
              className="group"
            >
              <div className="backdrop-blur-xl bg-gradient-to-br from-orange-500/20 to-amber-500/20 border border-orange-400/30 rounded-2xl p-8 h-full hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-800/60 via-orange-800/20 to-gray-800/60 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 border border-orange-400/30 group-hover:scale-110 transition-transform duration-300">
                  <FaUsers className="h-8 w-8 text-orange-400" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors duration-300">
                  Register as Participant
                </h3>

                <p className="text-white/80 mb-6 leading-relaxed">
                  Join thousands of young innovators aged 7-17 and showcase your
                  skills in 3D Design, Coding, and Electronics.
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    { icon: FaCube, text: "3D Design & Modeling competitions" },
                    { icon: FaCode, text: " Programming challenges" },
                    {
                      icon: FaMicrochip,
                      text: "Electronics & Robotics projects",
                    },
                    { icon: FaTrophy, text: "Win prizes up to $10,000+" },
                    { icon: FaUsers, text: "Network with like-minded peers" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-400 to-amber-400 flex-shrink-0" />
                      <item.icon className="h-4 w-4 text-orange-400 flex-shrink-0" />
                      <span className="text-white/70 text-sm">{item.text}</span>
                    </motion.div>
                  ))}
                </div>

                <button
                  onClick={() => {
                    toRegister();
                  }}
                  className="w-full backdrop-blur-sm bg-orange-500/20 hover:bg-orange-500/30 text-white font-bold px-6 py-3 border border-orange-400/50 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 glow-button hover:shadow-lg hover:shadow-orange-500/25"
                >
                  <span>Register Now</span>
                  <FaChevronRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>

            {/* Become a Partner Card */}
            <motion.div
              variants={staggerItem}
              whileHover={{
                scale: 1.02,
                rotateY: 2,
                transition: { duration: 0.3 },
              }}
              className="group"
            >
              <div className="backdrop-blur-xl bg-gradient-to-br from-amber-500/20 to-yellow-500/20 border border-amber-400/30 rounded-2xl p-8 h-full hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-500">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-800/60 via-amber-800/20 to-gray-800/60 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 border border-amber-400/30 group-hover:scale-110 transition-transform duration-300">
                  <FaHandshake className="h-8 w-8 text-amber-400" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors duration-300">
                  Become a Partner
                </h3>

                <p className="text-white/80 mb-6 leading-relaxed">
                  Partner with MindHack to support the next generation of tech
                  innovators and gain visibility for your organization.
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    { icon: FaGlobe, text: "Global brand exposure" },
                    { icon: FaUsers, text: "Access to talent pipeline" },
                    { icon: FaLightbulb, text: "Innovation collaboration" },
                    { icon: FaHeart, text: "Community impact recognition" },
                    {
                      icon: FaRocket,
                      text: "Technology leadership positioning",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 flex-shrink-0" />
                      <item.icon className="h-4 w-4 text-amber-400 flex-shrink-0" />
                      <span className="text-white/70 text-sm">{item.text}</span>
                    </motion.div>
                  ))}
                </div>

                <button
                  onClick={() => {
                    toPartner();
                  }}
                  className="w-full backdrop-blur-sm bg-amber-500/20 hover:bg-amber-500/30 text-white font-bold px-6 py-3 border border-amber-400/50 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 glow-button hover:shadow-lg hover:shadow-amber-500/25"
                >
                  <span>Partner with Us</span>
                  <FaChevronRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>

            {/* Sponsor MindHack Card */}
            <motion.div
              variants={staggerItem}
              whileHover={{
                scale: 1.02,
                rotateY: 2,
                transition: { duration: 0.3 },
              }}
              className="group"
            >
              <div className="backdrop-blur-xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-400/30 rounded-2xl p-8 h-full hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-800/60 via-yellow-800/20 to-gray-800/60 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 border border-yellow-400/30 group-hover:scale-110 transition-transform duration-300">
                  <FaTrophy className="h-8 w-8 text-yellow-400" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                  Sponsor MindHack
                </h3>

                <p className="text-white/80 mb-6 leading-relaxed">
                  Sponsor our events and competitions to connect your brand with
                  innovation and support young tech talent.
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    { icon: FaGlobe, text: "Premium brand visibility" },
                    { icon: FaTrophy, text: "Award ceremony recognition" },
                    { icon: FaUsers, text: "Direct audience engagement" },
                    { icon: FaRocket, text: "Innovation ecosystem access" },
                    { icon: FaHeart, text: "Social impact storytelling" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 flex-shrink-0" />
                      <item.icon className="h-4 w-4 text-yellow-400 flex-shrink-0" />
                      <span className="text-white/70 text-sm">{item.text}</span>
                    </motion.div>
                  ))}
                </div>

                <button
                  onClick={() => {
                    toSponsor();
                  }}
                  className="w-full backdrop-blur-sm bg-yellow-500/20 hover:bg-yellow-500/30 text-white font-bold px-6 py-3 border border-yellow-400/50 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 glow-button hover:shadow-lg hover:shadow-yellow-500/25"
                >
                  <span>Become a Sponsor</span>
                  <FaChevronRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Join MindHack Banner */}
      <section className="relative min-h-[80vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            src="./6h.jpg"
            alt="Why join MindHack background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-orange-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-gray-900/60" />
        </div>

        <div className="relative z-10 h-full min-h-[80vh] flex items-center">
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="p-6 sm:p-8 md:p-12 lg:p-16 w-full max-w-6xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-0.5 bg-gradient-to-r from-orange-400 to-amber-400" />
              <span className="text-orange-300 font-mono text-xs uppercase tracking-widest">
                WHY JOIN US
              </span>
            </div>

            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Why Join{" "}
              <span className="text-orange-400 glow-text-orange">MindHack</span>
              ?
            </h2>

            <p className="text-white/90 text-base sm:text-lg leading-relaxed max-w-2xl mb-12">
              MindHack is more than a competition—it's a movement that bridges
              ancient wisdom with modern innovation, creating opportunities for
              growth, learning, and impact.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {[
                {
                  icon: FaUsers,
                  title: "Community",
                  description: "Connect with innovators",
                  color: "text-orange-400",
                  bgColor: "bg-orange-400/10",
                  borderColor: "border-orange-400/30",
                },
                {
                  icon: FaLightbulb,
                  title: "Innovation",
                  description: "Push creative boundaries",
                  color: "text-amber-400",
                  bgColor: "bg-amber-400/10",
                  borderColor: "border-amber-400/30",
                },
                {
                  icon: FaChartLine,
                  title: "Growth",
                  description: "Develop new skills",
                  color: "text-yellow-400",
                  bgColor: "bg-yellow-400/10",
                  borderColor: "border-yellow-400/30",
                },
                {
                  icon: FaHeart,
                  title: "Impact",
                  description: "Make a difference",
                  color: "text-orange-400",
                  bgColor: "bg-orange-400/10",
                  borderColor: "border-orange-400/30",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0, scale: 0.8 }}
                  whileInView={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{
                    delay: index * 0.2 + 0.3,
                    type: "spring",
                    stiffness: 200,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    transition: { duration: 0.3 },
                  }}
                  className="backdrop-blur-xl bg-gradient-to-br from-gray-900/40 via-orange-900/20 to-gray-900/40 border border-orange-500/20 rounded-xl p-6 text-center"
                >
                  <div
                    className={`w-16 h-16 ${item.bgColor} backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 border ${item.borderColor}`}
                  >
                    <item.icon className={`h-8 w-8 ${item.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/70 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success Stories Section */}
      {/* <section className="py-16 sm:py-24 px-4 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-white mb-4 glow-text-strong">
              Success{" "}
              <span className="text-orange-400 glow-text-orange">Stories</span>
            </h2>
            <p className="text-white/70 text-sm sm:text-base max-w-2xl mx-auto">
              Hear from our past participants who have gone on to achieve great
              things
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                name: "Aung Myat Thu",
                age: "16",
                award: "Winner - 3D Design 2023",
                image: "/placeholder.svg?height=80&width=80",
                quote:
                  "MindHack changed my perspective on technology. The competition pushed me to create something I never thought possible, and now I'm pursuing computer graphics professionally.",
                rating: 5,
              },
              {
                name: "Thant Zin Oo",
                age: "14",
                award: "Champion - Robotics 2023",
                image: "/placeholder.svg?height=80&width=80",
                quote:
                  "The mentorship and community at MindHack are incredible. I learned not just technical skills, but also how to present my ideas and work in a team.",
                rating: 5,
              },
              {
                name: "May Thwe Aung",
                age: "15",
                award: "Best Innovation - Coding 2023",
                image: "/placeholder.svg?height=80&width=80",
                quote:
                  "MindHack gave me the confidence to pursue my dreams in technology. The experience opened doors to opportunities I never imagined.",
                rating: 5,
              },
            ].map((story, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{
                  scale: 1.02,
                  rotateY: 2,
                  transition: { duration: 0.3 },
                }}
                className="backdrop-blur-xl bg-gradient-to-br from-gray-900/40 via-orange-900/20 to-gray-900/40 border border-orange-500/20 rounded-2xl p-8 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={story.image || "/placeholder.svg"}
                    alt={story.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-orange-400/30"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {story.name}
                    </h3>
                    <p className="text-orange-400 text-sm">{story.award}</p>
                    <p className="text-white/60 text-xs">Age {story.age}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(story.rating)].map((_, i) => (
                    <FaStar key={i} className="h-4 w-4 text-yellow-400" />
                  ))}
                </div>

                <blockquote className="text-white/80 text-sm leading-relaxed italic">
                  "{story.quote}"
                </blockquote>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* Ready to Join CTA Section */}
      <section className="py-16 sm:py-24 px-4 relative overflow-hidden">
        {/* Glass-like gradient background with orange glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/60 via-orange-900/30 to-gray-900/60 backdrop-blur-xl"></div>
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-orange-500/20 blur-3xl animate-pulse"
          />
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-amber-500/15 blur-3xl animate-pulse delay-1000"
          />
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="absolute top-1/2 right-1/4 w-48 h-48 rounded-full bg-orange-400/10 blur-2xl animate-pulse delay-500"
          />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 glow-text-strong leading-tight">
              Ready To Join{" "}
              <span className="text-orange-400 glow-text-orange">
                MindHack 2025
              </span>
              ?
            </h2>

            <p className="text-white/90 text-sm xs:text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-12">
              Don't miss your chance to be part of Myanmar's most innovative
              tech competition. Whether you're here to compete, partner, or
              sponsor, your journey with MindHack starts now.
            </p>

            <div className="flex flex-col xs:flex-row gap-4 sm:gap-6 justify-center">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(249, 115, 22, 0.3)",
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.95 }}
                className="backdrop-blur-sm bg-orange-500/20 hover:bg-orange-500/30 text-white font-bold px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg border border-orange-400/50 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 glow-button hover:shadow-2xl hover:shadow-orange-500/25"
              >
                <span>Register Now</span>
                <FaChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.95 }}
                className="border border-orange-500/30 text-white hover:bg-orange-500/10 font-bold px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg rounded-lg transition-all duration-300 hover:border-orange-400/50 flex items-center justify-center space-x-2"
              >
                <FaEnvelope className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>Contact Us</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
