"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaChevronRight,
  FaMicrochip,
  FaCode,
  FaBolt,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaUsers,
  FaBook,
  FaTrophy,
  FaBullseye,
  FaRocket,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  setReduxDiamondSponsors,
  setReduxMainSponsors,
  setReduxPrevSponsors,
  setStoreReduxSponsors,
} from "../reducer/sponsorSlice";
import { setStoreReduxFaq } from "../reducer/faqSlice";

const heroImages = [
  "./kv.jpg",
  "./hotel.jpg",
  "/shwe.jpg",
  "/BONUS.jpg",
  "/hotel.jpg",
];

export default function Homepage() {
  const backend_domain_name =
    "https://www.mindhack-admin.z256600-ll9lz.ps02.zwhhosting.com";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toRegister = () => {
    navigate("/register/participant");
  };
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const fetchData = async () => {
    try {
      setLoading(true);

      const response = await axios.get(`${backend_domain_name}/api/index`);

      if (response.status == 200) {
        console.log(response.data);
        dispatch(setStoreReduxSponsors(response.data.sponsors));
        dispatch(setReduxMainSponsors(response.data.mainSponsors));
        dispatch(setReduxDiamondSponsors(response.data.diamondSponsors));
        dispatch(setReduxPrevSponsors(response.data.prevSponsors));
        dispatch(setStoreReduxFaq(response.data.faqs));
      } else {
        console.log("error");
      }

      setLoading(false);
    } catch (error) {
      console.error("Error in fetchApi:", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="relative">
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
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-950/80 to-gray-950/60 sm:from-gray-950/90 sm:via-gray-950/70 sm:to-gray-950/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-transparent to-gray-950/60 sm:from-gray-950/80 sm:via-transparent sm:to-gray-950/40" />
        </div>

        {/* Technical Overlay Elements */}
        <div className="absolute inset-0 opacity-5 sm:opacity-10">
          <div className="absolute top-10 left-10 sm:top-20 sm:left-20 w-16 h-16 sm:w-32 sm:h-32 border border-orange-400 rotate-45" />
          <div className="absolute bottom-20 right-16 sm:bottom-40 sm:right-32 w-12 h-12 sm:w-24 sm:h-24 border border-amber-400 rotate-12" />
          <div className="absolute top-1/2 left-1/4 w-8 h-8 sm:w-16 sm:h-16 border border-orange-300 rounded-full" />
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center sm:items-end sm:justify-start z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center sm:text-left px-4 sm:px-0 sm:bottom-12 sm:left-12 max-w-3xl w-full sm:absolute sm:inset-auto"
          >
            <div className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3 mb-3 sm:mb-4">
              <div className="w-4 sm:w-6 h-0.5 bg-blue-400 hidden sm:block" />
              <span className="text-blue-700 font-mono text-xs sm:text-sm uppercase tracking-wider glow-text px-3 py-1 bg-orange-400/10 rounded-full sm:bg-transparent sm:px-0 sm:py-0">
                International Coding Tournament
              </span>
              <div className="w-4 sm:w-6 h-0.5 bg-blue-400 hidden sm:block" />
            </div>
            <h1 className="text-3xl xs:text-4xl sm:text-4xl md:text-6xl font-bold text-white mb-3 sm:mb-4 glow-text-strong leading-tight">
              MindHack{" "}
              <span className="text-orange-400 glow-text-orange block xs:inline sm:inline">
                2025
              </span>
            </h1>
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent mb-4 sm:mb-6 glow-text-gradient leading-tight">
              The Ancient Revival
            </h2>
            <p className="text-sm xs:text-base sm:text-lg text-white/90 mb-6 sm:mb-8 leading-relaxed max-w-lg sm:max-w-2xl mx-auto sm:mx-0">
              Master the future of technology through{" "}
              <span className="text-orange-400 font-semibold">3D Design</span>,
              <span className="text-amber-400 font-semibold"> Programming</span>
              , and
              <span className="text-orange-400 font-semibold">
                {" "}
                Robotics Engineering
              </span>
              . Compete for prestigious awards in this ultimate technical
              challenge.
            </p>
            <button
              onClick={() => {
                toRegister();
              }}
              className="w-full xs:w-auto backdrop-blur-sm bg-orange-500/20 hover:bg-orange-500/30 text-white text-base sm:text-lg px-6 sm:px-8 py-3 font-semibold border border-orange-400/50 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 glow-button hover:shadow-lg hover:shadow-orange-500/25 min-h-[48px] touch-manipulation"
            >
              <span>Register Now</span>
              <FaChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </motion.div>
        </div>

        {/* Image indicators */}
        <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-10">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 touch-manipulation min-h-[20px] min-w-[20px] sm:min-h-0 sm:min-w-0 flex items-center justify-center ${
                index === currentImageIndex
                  ? "bg-orange-400 scale-110 glow-dot"
                  : "bg-white/40 hover:bg-orange-400/60"
              }`}
            >
              <div
                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${
                  index === currentImageIndex ? "bg-orange-400" : "bg-white/50"
                }`}
              />
            </button>
          ))}
        </div>
      </section>

      {/* What is MindHack + Competition Categories Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-64 sm:h-64 rounded-full bg-orange-500/5 blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/3 w-40 h-40 sm:w-80 sm:h-80 rounded-full bg-amber-500/5 blur-3xl animate-pulse delay-1000" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          {/* What is MindHack */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center justify-center space-x-2 sm:space-x-3 mb-4 sm:mb-6"
            >
              <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-r from-transparent to-orange-400" />
              <span className="text-orange-400 font-mono text-xs sm:text-sm uppercase tracking-wider glow-text">
                About MindHack
              </span>
              <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-l from-transparent to-orange-400" />
            </motion.div>
            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 glow-text-strong leading-tight"
            >
              What is{" "}
              <span className="text-orange-400 glow-text-orange">MindHack</span>
              ?
            </motion.h2>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-white/70 max-w-4xl mx-auto text-sm xs:text-base sm:text-lg leading-relaxed mb-8 sm:mb-12 md:mb-16 px-2 sm:px-0"
            >
              Ignite your Power to Create at MindHack 2025: The Ancient Revival,
              the world’s leading international coding tournament! Young
              innovators aged 7-17 from every corner of the globe converge to
              revive cultural heritage through technology, finding their Place
              to Shine in 3D Design, Coding, and Electronics. As a Platform to
              Connect, MindHack unites creators, mentors, and visionaries,
              sparking lifelong collaborations. From online Theme Camps to the
              dazzling grand finale at Wyndham Grand Yangon Hotel on August 17,
              2025, CIY.CLUB Myanmar empowers you to shape the future.
            </motion.p>
          </div>

          {/* Competition Categories */}
          <div className="text-center mb-8 sm:mb-12">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center justify-center space-x-2 sm:space-x-3 mb-4 sm:mb-6"
            >
              <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-r from-transparent to-orange-400" />
              <span className="text-orange-400 font-mono text-xs sm:text-sm uppercase tracking-wider glow-text">
                Competition Categories
              </span>
              <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-l from-transparent to-orange-400" />
            </motion.div>
            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 glow-text-strong leading-tight"
            >
              Technical{" "}
              <span className="text-orange-400 glow-text-orange">
                Competitions
              </span>
            </motion.h2>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: FaMicrochip,
                title: "3D Designing & Modeling",
                desc: "Craft stunning 3D models to preserve and promote  rich cultural heritage at MindHack 2025!",
                gradient: "from-orange-500/20 to-amber-500/20",
                iconColor: "text-orange-400",
                borderColor: "border-orange-400/30",
                glowColor: "shadow-orange-500/20",
              },
              {
                icon: FaCode,
                title: " Coding",
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
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div
                  className={`relative overflow-hidden rounded-2xl sm:rounded-3xl border ${item.borderColor} bg-gradient-to-br ${item.gradient} backdrop-blur-xl hover:scale-105 transition-all duration-500 hover:shadow-2xl ${item.glowColor} h-full`}
                  style={{
                    background: `linear-gradient(135deg, rgba(17, 24, 39, 0.8) 0%, rgba(31, 41, 55, 0.6) 30%, ${
                      item.gradient.includes("orange")
                        ? "rgba(251, 146, 60, 0.1)"
                        : item.gradient.includes("amber")
                        ? "rgba(245, 158, 11, 0.1)"
                        : "rgba(234, 179, 8, 0.1)"
                    } 100%)`,
                  }}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-16 h-16 sm:w-32 sm:h-32 border border-orange-400/20 rounded-full" />
                    <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 w-12 h-12 sm:w-24 sm:h-24 border border-orange-400/20 rotate-45" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-40 sm:h-40 border border-orange-400/10 rounded-full" />
                  </div>

                  <div className="p-6 sm:p-8 text-center h-full flex flex-col relative z-10">
                    <div
                      className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-gray-800/60 via-orange-800/20 to-gray-800/60 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 border ${item.borderColor} hover:shadow-lg ${item.glowColor}`}
                    >
                      <item.icon
                        className={`h-8 w-8 sm:h-10 sm:w-10 ${item.iconColor}`}
                      />
                    </div>
                    <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-orange-400 transition-colors duration-300 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed flex-grow text-sm sm:text-base">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ancient Revival Section */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="5.JPG"
            alt="Cultural innovation background MindHack 2025"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-orange-950/30 md:to-orange-950/20" />
        </div>

        <div className="relative z-10 h-full min-h-screen flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="p-6 sm:p-8 md:p-12 lg:p-16 w-full max-w-2xl"
          >
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="w-8 h-0.5 bg-gradient-to-r from-orange-400 to-amber-400" />
              <span className="text-orange-300 font-mono text-[0.65rem] xs:text-xs uppercase tracking-widest">
                DISCOVER THE ANCIENT REVIVAL
              </span>
            </div>

            <h3 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 leading-snug sm:leading-tight">
              Why We Celebrate MindHack
            </h3>

            <div className="space-y-4 text-white/90 text-base sm:text-lg leading-relaxed max-w-lg">
              <p>
                MindHack 2025 is a groundbreaking international coding
                tournament designed for young creators aged 7-17, bridging the
                gap between rich cultural heritage and modern technology to
                inspire the next generation to protect and promote our
                traditions through digital innovation. Participants will
                collaborate on projects that fuse coding, 3D design, and
                electronics with cultural elements, creating solutions that
                honor the past and embrace the future, fostering creativity,
                technical skills, and cultural pride across the globe.
              </p>
              <p className="hidden xs:block">
                We create a unique platform for cultural revival and
                technological advancement through this celebration of heritage
                and progress.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-r from-transparent to-orange-950/40 md:to-orange-950/30 pointer-events-none" />
        <div className="absolute left-0 bottom-0 w-48 h-48 rounded-full bg-orange-500/10 blur-xl md:blur-3xl" />
      </section>

      {/* Competition Timeline */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-gray-950 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center justify-center space-x-2 sm:space-x-3 mb-4 sm:mb-6"
            >
              <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-r from-transparent to-orange-400" />
              <span className="text-orange-400 font-mono text-xs sm:text-sm uppercase tracking-wider glow-text">
                Event Timeline
              </span>
              <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-l from-transparent to-orange-400" />
            </motion.div>
            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 glow-text-strong leading-tight"
            >
              Competition{" "}
              <span className="text-orange-400 glow-text-orange">Timeline</span>
            </motion.h2>
          </div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-5">
            {[
              {
                phase: "Registration",
                date: "March 15, 2025",
                time: "9:00 AM",
                icon: FaUsers,
                color: "text-orange-300",
                bgColor: "bg-orange-300/10",
                borderColor: "border-orange-300/30",
                glowColor: "shadow-orange-300/20",
              },
              {
                phase: "On Boarding",
                date: "June 10 - 11, 2025",
                time: "10:00 AM",
                icon: FaBook,
                color: "text-orange-400",
                bgColor: "bg-orange-400/10",
                borderColor: "border-orange-400/30",
                glowColor: "shadow-orange-400/20",
              },
              {
                phase: "First Stage",
                date: "July 7, 2025",
                time: "9:00 AM",
                icon: FaRocket,
                color: "text-amber-400",
                bgColor: "bg-amber-400/10",
                borderColor: "border-amber-400/30",
                glowColor: "shadow-amber-400/20",
              },
              {
                phase: "Finalist Announcement",
                date: "July 15, 2025",
                time: "6:00 PM",
                icon: FaBullseye,
                color: "text-yellow-400",
                bgColor: "bg-yellow-400/10",
                borderColor: "border-yellow-400/30",
                glowColor: "shadow-yellow-400/20",
              },
              {
                phase: "Second Stage Final",
                date: "August 17(Wyndham Grand Yangon Hotel), 2025",
                time: "9:00 AM",
                icon: FaTrophy,
                color: "text-orange-400",
                bgColor: "bg-orange-400/10",
                borderColor: "border-orange-400/30",
                glowColor: "shadow-orange-400/20",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div
                  className={`backdrop-blur-xl bg-gradient-to-br from-gray-900/40 via-orange-900/20 to-gray-900/40 border ${item.borderColor} hover:bg-gradient-to-br hover:from-gray-800/50 hover:via-orange-800/30 hover:to-gray-800/50 transition-all duration-500 group-hover:scale-105 h-full relative overflow-hidden rounded-xl sm:rounded-2xl hover:shadow-2xl ${item.glowColor}`}
                >
                  <div
                    className={`absolute inset-0 ${item.bgColor} opacity-5`}
                  />
                  <div className="p-4 sm:p-6 text-center h-full flex flex-col relative z-10">
                    <div className="mb-3 sm:mb-4">
                      <div className="text-xs sm:text-sm text-white/70 font-mono">
                        {item.date}
                      </div>
                    </div>
                    <div
                      className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-gray-800/60 via-orange-800/20 to-gray-800/60 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 border ${item.borderColor} hover:shadow-lg ${item.glowColor}`}
                    >
                      <item.icon
                        className={`h-8 w-8 sm:h-10 sm:w-10 ${item.color}`}
                      />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
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
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="./gp.JPG"
            alt="MindHack community background MindHack 2025"
            className="w-full h-full z-20 object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-orange-950/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-gray-900/80" />
        </div>

        <div className="relative z-10 h-full min-h-screen flex flex-col justify-end pb-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 lg:p-16 max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-0.5 bg-gradient-to-r from-orange-400 to-amber-400" />
              <span className="text-orange-300 font-mono text-xs uppercase tracking-widest">
                JOIN THE MOVEMENT
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
              WHY JOIN MINDHACK??
            </h2>

            <div className="space-y-6 text-white/90 text-lg leading-relaxed">
              <p>
                MindHack 2025 is more than just a competition—it's a movement to
                empower young creators to become the cultural ambassadors of
                tomorrow. By participating, young innovators will:
              </p>

              <div className="space-y-4">
                {[
                  "Develop valuable technical skills in coding, design, and electronics",
                  "Gain deeper appreciation for cultural heritage and traditions",
                  "Connect with like-minded peers and industry mentors",
                  "Showcase their talents to a global audience",
                  "Showcase to global audiences",
                  "Preserve culture through innovation",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2.5 rounded-full bg-gradient-to-r from-orange-400 to-amber-400 flex-shrink-0" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-20 left-20 w-3 h-3 rounded-full bg-amber-400/60 blur-sm" />
        <div className="absolute bottom-32 left-32 w-2 h-2 rounded-full bg-orange-400/60 blur-sm" />
      </section>

      {/* Ready to Compete Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 left-4 sm:top-8 sm:left-8 w-12 h-12 sm:w-24 sm:h-24 border-2 border-orange-400 rotate-45" />
          <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 w-16 h-16 sm:w-32 sm:h-32 border-2 border-amber-400 rounded-full" />
          <div className="absolute top-1/2 left-1/4 w-20 h-20 sm:w-40 sm:h-40 border border-orange-300 rotate-12" />
          <div className="absolute top-1/4 right-1/4 w-14 h-14 sm:w-28 sm:h-28 border border-amber-300 rounded-full" />
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 sm:mb-8 glow-text-strong leading-tight">
              Ready to{" "}
              <span className="text-orange-400 glow-text-orange">Compete</span>?
            </h2>
            <p className="text-white/90 text-sm xs:text-base sm:text-lg md:text-xl mb-8 sm:mb-10 md:mb-12 max-w-4xl mx-auto leading-relaxed px-2 sm:px-0">
              Be part of Myanmar's most innovative tech competition and help
              preserve our cultural heritage through creative technology
              solutions.
            </p>
            <div className="flex flex-col xs:flex-row gap-4 sm:gap-6 justify-center mb-8 sm:mb-10 md:mb-12">
              <button
                onClick={() => {
                  toRegister();
                }}
                className="w-full xs:w-auto backdrop-blur-sm bg-orange-500/20 hover:bg-orange-500/30 text-white font-bold px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg border border-orange-400/50 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 glow-button hover:shadow-2xl hover:shadow-orange-500/25 min-h-[48px] touch-manipulation"
              >
                <span>Register Now</span>
                <FaChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
              </button>
              {/* <button className="w-full xs:w-auto border border-orange-500/30 text-white hover:bg-orange-500/10 font-bold px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg rounded-lg transition-all duration-300 hover:border-orange-400/50 min-h-[48px] touch-manipulation">
                Download Rules
              </button> */}
            </div>
            <div className="grid grid-cols-3 gap-4 sm:gap-8 md:gap-12 text-white/60 max-w-md sm:max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-xl xs:text-2xl sm:text-3xl font-bold text-orange-400 mb-1 sm:mb-2 glow-text">
                  300+
                </div>
                <div className="text-xs sm:text-sm uppercase tracking-wider">
                  Participants
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl xs:text-2xl sm:text-3xl font-bold text-amber-400 mb-1 sm:mb-2 glow-text">
                  2025
                </div>
                <div className="text-xs sm:text-sm uppercase tracking-wider">
                  Edition
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl xs:text-2xl sm:text-3xl font-bold text-yellow-400 mb-1 sm:mb-2 glow-text">
                  LIVE
                </div>
                <div className="text-xs sm:text-sm uppercase tracking-wider">
                  Status
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Past MindHack Highlights */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-gray-950 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center justify-center space-x-2 sm:space-x-3 mb-4 sm:mb-6"
            >
              <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-r from-transparent to-orange-400" />
              <span className="text-orange-400 font-mono text-xs sm:text-sm uppercase tracking-wider glow-text">
                Past Highlights
              </span>
              <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-l from-transparent to-orange-400" />
            </motion.div>
            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 glow-text-strong leading-tight"
            >
              Past MindHack{" "}
              <span className="text-orange-400 glow-text-orange">
                Highlights
              </span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-6">
            {[
              "./1h.JPG",
              "./2h.JPG",
              "./3h.JPG",
              "./4h.JPG",
              "./5h.JPG",
              "./6h.JPG",
              "./7h.JPG",
              "./8h.JPG",
            ].map((img, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg sm:rounded-2xl backdrop-blur-xl bg-gradient-to-br from-gray-900/40 via-orange-900/20 to-gray-900/40 border border-orange-500/20 hover:bg-gradient-to-br hover:from-gray-800/50 hover:via-orange-800/30 hover:to-gray-800/50 transition-all duration-500 group-hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20">
                  <img
                    src={img || "/placeholder.svg"}
                    alt={`MindHack 2025 highlight ${index + 1} `}
                    className="w-full h-32 xs:h-40 sm:h-48 md:h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
}
