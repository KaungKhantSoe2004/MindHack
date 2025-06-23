"use client";

import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUsers,
  FaChevronRight,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function MindHack2023() {
  const navigate = useNavigate();
  const toJoinUs = () => {
    navigate("join-us");
  };
  return (
    <div className="relative pt-16">
      {/* Banner Section */}
      <section className="relative h-[60vh] sm:h-[70vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('./g12.jpg')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-950/80 to-gray-950/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-transparent to-gray-950/60" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center px-4 sm:px-0 max-w-3xl"
          >
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 glow-text-strong leading-tight">
              Mind<span className="text-orange-400 glow-text-orange">Hack</span>{" "}
              2023
            </h1>
            <p className="text-sm xs:text-base sm:text-lg text-white/90 mb-6 leading-relaxed max-w-2xl mx-auto">
              By 2023, the competition grew to include 900 participants and over
              30 schools, introducing new categories like electronic and
              roboticsToday, Mind Hack is a national symbol of innovation,
              driven by the passion and potential of Myanmar’s young talent.
              Each year, it continues to grow, inspiring students and creating
              opportunities for the next generation of tech leaders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* YouTube Embedded Video Section */}
      <section className="py-16 sm:py-24 px-4 relative overflow-hidden">
        {/* Glass-like gradient background with orange glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/60 via-orange-900/30 to-gray-900/60 backdrop-blur-xl"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-orange-500/20 blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-amber-500/15 blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 right-1/4 w-48 h-48 rounded-full bg-orange-400/10 blur-2xl animate-pulse delay-500" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-white mb-4 glow-text-strong">
              MindHack 2023{" "}
              <span className="text-orange-400 glow-text-orange">
                Highlights
              </span>
            </h2>
            <p className="text-white/70 text-sm sm:text-base max-w-2xl mx-auto">
              Relive the excitement and innovation of MindHack 2023 through our
              official event highlights video.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="aspect-video w-full bg-gradient-to-br from-gray-800/50 via-orange-800/20 to-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-orange-500/30 shadow-2xl shadow-orange-500/20"
          >
            <div className="relative pb-[56.25%] h-0">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/8b5UOrrKTR8"
                title="MindHack 2023 Highlights"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Past Year Event Display */}
      <section className="py-16 sm:py-24 px-4 bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-white mb-4 glow-text-strong">
              MindHack 2023{" "}
              <span className="text-orange-400 glow-text-orange">
                By The Numbers
              </span>
            </h2>
            <p className="text-white/70 text-sm sm:text-base max-w-2xl mx-auto">
              The impact and reach of MindHack 2023 across Myanmar's tech
              ecosystem.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6">
            {[
              {
                title: "Teams",
                value: "42",
                description: "Competing teams",
                color: "from-orange-500/20 to-amber-500/20",
                borderColor: "border-orange-400/30",
              },
              {
                title: "Coders",
                value: "156",
                description: "Talented participants",
                color: "from-amber-500/20 to-yellow-500/20",
                borderColor: "border-amber-400/30",
              },
              {
                title: "Audience",
                value: "500+",
                description: "In-person attendees",
                color: "from-yellow-500/20 to-orange-500/20",
                borderColor: "border-yellow-400/30",
              },
              {
                title: "Schools",
                value: "18",
                description: "Educational institutions",
                color: "from-orange-500/20 to-amber-500/20",
                borderColor: "border-orange-400/30",
              },
              {
                title: "Sponsors",
                value: "12",
                description: "Supporting organizations",
                color: "from-amber-500/20 to-yellow-500/20",
                borderColor: "border-amber-400/30",
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
                  className={`backdrop-blur-xl bg-gradient-to-br ${item.color} border ${item.borderColor} hover:bg-gradient-to-br hover:from-gray-800/50 hover:via-orange-800/30 hover:to-gray-800/50 transition-all duration-500 group-hover:scale-105 h-full relative overflow-hidden rounded-xl sm:rounded-2xl hover:shadow-2xl shadow-orange-500/20 p-4 sm:p-6 text-center`}
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <div className="text-3xl sm:text-4xl font-bold text-orange-400 my-3 glow-text">
                    {item.value}
                  </div>
                  <p className="text-white/70 text-xs sm:text-sm">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MindHack History Section */}
      <section className="py-16 sm:py-24 px-4 bg-gradient-to-br from-gray-800/60 via-orange-800/20 to-gray-800/60 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-white mb-6 glow-text-strong">
              MIND<span className="text-orange-400 glow-text-orange">HACK</span>{" "}
              2022
            </h2>
            <p className="text-white/80 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed mb-8">
              Mind Hack started with a bold vision: to transform Myanmar’s tech
              scene by empowering its youth. The first event in 2022 brought
              together 100 students to compete in coding challenges. The success
              of this event laid the groundwork for a larger, more ambitious
              platform.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                city: "Mandalay",
                videoId: "https://www.youtube.com/embed/c-wbSGQDOOs",
              },
              {
                city: "Yangon",
                videoId: "https://www.youtube.com/embed/rXf4QTdv_fA",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 rounded-xl overflow-hidden border border-orange-500/20"
              >
                <div className="relative pb-[56.25%] h-0">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`${item.videoId}`}
                    title={`MindHack 2023 ${item.city}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-xl font-bold text-orange-400 glow-text">
                    {item.city}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 sm:py-24 px-4 bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-white mb-4 glow-text-strong">
              Event{" "}
              <span className="text-orange-400 glow-text-orange">Gallery</span>
            </h2>
            <p className="text-white/70 text-sm sm:text-base max-w-2xl mx-auto">
              Moments captured from MindHack 2023 events across Myanmar.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg sm:rounded-xl backdrop-blur-xl bg-gradient-to-br from-gray-900/40 via-orange-900/20 to-gray-900/40 border border-orange-500/20 hover:bg-gradient-to-br hover:from-gray-800/50 hover:via-orange-800/30 hover:to-gray-800/50 transition-all duration-500 group-hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20">
                  <img
                    src={`./g${index}.jpg`}
                    alt={`MindHack 2023 Gallery Image ${index}`}
                    className="w-full h-48 sm:h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Be Part of the Next Chapter Section */}
      <section className="relative min-h-[80vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="./1h.jpg"
            alt="Join MindHack 2025  background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-orange-950/40 sm:from-gray-900 sm:to-orange-950/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-gray-900/80" />
        </div>

        <div className="relative z-10 h-full min-h-[80vh] flex flex-col justify-center py-16 sm:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-4 xs:p-6 sm:p-8 md:p-12 max-w-4xl mx-auto text-center"
          >
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Be Part of the{" "}
              <span className="text-orange-400 glow-text-orange">
                Next Chapter
              </span>
            </h2>

            <p className="text-white/90 text-sm xs:text-base sm:text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
              MindHack continues to grow and evolve, creating more opportunities
              for Myanmar's tech talent to shine. Join us for MindHack 2025, our
              most ambitious event yet, featuring expanded categories,
              international judges, and unprecedented prizes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: FaCalendarAlt,
                  title: "Date",
                  value: "March 2025",
                  color: "text-orange-400",
                  bgColor: "bg-orange-400/10",
                  borderColor: "border-orange-400/30",
                },
                {
                  icon: FaMapMarkerAlt,
                  title: "Location",
                  value: "Yangon",
                  color: "text-amber-400",
                  bgColor: "bg-amber-400/10",
                  borderColor: "border-amber-400/30",
                },
                {
                  icon: FaUsers,
                  title: "Participants",
                  value: "300+ Expected",
                  color: "text-yellow-400",
                  bgColor: "bg-yellow-400/10",
                  borderColor: "border-yellow-400/30",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="backdrop-blur-xl bg-gradient-to-br from-gray-900/40 via-orange-900/20 to-gray-900/40 border border-orange-500/20 rounded-xl p-6 text-center"
                >
                  <div
                    className={`w-16 h-16 ${item.bgColor} backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 border ${item.borderColor}`}
                  >
                    <item.icon className={`h-8 w-8 ${item.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className={`${item.color} font-medium`}>{item.value}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <button className="backdrop-blur-sm bg-orange-500/20 hover:bg-orange-500/30 text-white font-bold px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg border border-orange-400/50 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 glow-button hover:shadow-2xl hover:shadow-orange-500/25 mx-auto">
                <span>JOIN MINDHACK 2025</span>
                <FaChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
