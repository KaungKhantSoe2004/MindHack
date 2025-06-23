"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaChevronRight, FaHandshake, FaRocket, FaGlobe } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  setReduxDiamondSponsors,
  setReduxMainSponsors,
  setReduxPrevSponsors,
  setStoreReduxSponsors,
} from "../reducer/sponsorSlice";
import axios from "axios";

export default function Partners() {
  const [loading, setLoading] = useState(false);
  const backend_domain_name =
    "https://www.mindhack-admin.z256600-ll9lz.ps02.zwhhosting.com";
  const reduxSponsors = useSelector((store) => store.sponsors);
  const [mainSponsors, setMainSponsors] = useState(reduxSponsors.mainSponsors);

  const [prevSponsors, setPrevSponsors] = useState(reduxSponsors.prevSponsors);
  const [diamondSponsors, setDiamondSponsors] = useState(
    reduxSponsors.diamondSponsors
  );
  console.log(mainSponsors, diamondSponsors, prevSponsors);
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
  const dispatch = useDispatch();
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${backend_domain_name}/api/sponsors`);

      if (response.status == 200) {
        console.log(response.data);
        dispatch(setStoreReduxSponsors(response.data.sponsors));
        dispatch(setReduxMainSponsors(response.data.mainSponsors));
        dispatch(setReduxDiamondSponsors(response.data.diamondSponsors));
        dispatch(setReduxPrevSponsors(response.data.prevSponsors));
        setMainSponsors(response.data.mainSponsors);
        setDiamondSponsors(response.data.diamondSponsors);
        setPrevSponsors(response.data.prevSponsors);
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
    <div className="relative pt-16">
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
              Partnership
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-orange-400" />
          </motion.div>

          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 glow-text-strong leading-tight"
          >
            Our{" "}
            <span className="text-orange-400 glow-text-orange">Partners</span>
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm xs:text-base sm:text-lg text-white/90 leading-relaxed max-w-3xl mx-auto"
          >
            MindHack 2025 is made possible through the generous support of our
            partners who share our vision of empowering young creators.
          </motion.p>
        </div>
      </section>

      {/* Together We Innovate Banner */}
      <section className="relative min-h-[70vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            src="3h.JPG"
            alt="Partnership background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-orange-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-gray-900/60" />
        </div>

        <div className="relative z-10 h-full min-h-[70vh] flex items-center">
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="p-6 sm:p-8 md:p-12 lg:p-16 w-full max-w-2xl"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-0.5 bg-gradient-to-r from-orange-400 to-amber-400" />
              <span className="text-orange-300 font-mono text-xs uppercase tracking-widest">
                COLLABORATION
              </span>
            </div>

            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Together We{" "}
              <span className="text-orange-400 glow-text-orange">Innovate</span>
            </h2>

            <p className="text-white/90 text-base sm:text-lg leading-relaxed max-w-lg">
              Our partners are essential to creating an impactful experience for
              all MindHack participants. Through their support, we build bridges
              between tradition and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Sponsors */}
      <section className="py-16 sm:py-24 px-4 bg-black relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-white mb-4 glow-text-strong">
              Main{" "}
              <span className="text-orange-400 glow-text-orange">Sponsors</span>
            </h2>
            <p className="text-white/70 text-sm sm:text-base max-w-2xl mx-auto">
              Our premier partners who make MindHack 2025 possible
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
            {loading && mainSponsors.length < 1 ? (
              // Loading state
              Array.from({ length: 3 }).map((_, index) => (
                <div key={`loading-${index}`} className="group">
                  <div className="backdrop-blur-sm border border-orange-500/20 rounded-2xl p-8 sm:p-12 text-center min-h-[200px] flex items-center justify-center">
                    <div className="animate-pulse bg-gray-800 w-full h-full rounded-lg"></div>
                  </div>
                </div>
              ))
            ) : mainSponsors?.length > 0 ? (
              // Render actual sponsors + available spots
              <>
                {mainSponsors.map((logo, index) => (
                  <div
                    key={`main-${index}`}
                    className="group hover:scale-105 transition-transform duration-300"
                  >
                    <div className="backdrop-blur-sm border border-orange-500/20 rounded-2xl p-8 sm:p-12 text-center hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 flex items-center justify-center min-h-[200px] bg-white/5">
                      <img
                        src={`${backend_domain_name}/public/storage/${logo.logo}`}
                        alt={`MindHack 2025 ${logo.name || logo.logo}`}
                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                        style={{
                          filter: logo.hasDarkBackground ? "invert(1)" : "none",
                          maxHeight: "100px", // Ensures consistent logo sizing
                        }}
                      />
                    </div>
                    {logo.name && (
                      <p className="mt-3 text-center text-white/80 text-sm">
                        {logo.name}
                      </p>
                    )}
                  </div>
                ))}

                {/* Show available spots if there are less than 3 sponsors */}
                {Array.from({
                  length: Math.max(0, 3 - mainSponsors.length),
                }).map((_, index) => (
                  <div
                    key={`available-main-${index}`}
                    className="group hover:scale-105 transition-transform duration-300"
                  >
                    <div className="bg-gradient-to-br from-gray-900/40 via-orange-900/20 to-gray-900/40 border-2 border-dashed border-orange-400/50 rounded-2xl p-8 sm:p-12 text-center hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 flex flex-col items-center justify-center min-h-[200px]">
                      <div className="w-16 h-16 bg-orange-400/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 border border-orange-400/30">
                        <FaHandshake className="h-8 w-8 text-orange-400" />
                      </div>
                      <h3 className="text-xl font-bold text-orange-400 mb-2">
                        Available
                      </h3>
                      <p className="text-white/70 text-sm">
                        Your Business Here
                      </p>
                      <button className="mt-4 px-4 py-2 text-xs font-medium bg-orange-500/20 hover:bg-orange-500/30 text-white rounded-lg border border-orange-400/50 transition-all">
                        Become a Sponsor
                      </button>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              // Show all available spots if no sponsors
              Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={`available-main-${index}`}
                  className="group hover:scale-105 transition-transform duration-300"
                >
                  <div className="bg-gradient-to-br from-gray-900/40 via-orange-900/20 to-gray-900/40 border-2 border-dashed border-orange-400/50 rounded-2xl p-8 sm:p-12 text-center hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 flex flex-col items-center justify-center min-h-[200px]">
                    <div className="w-16 h-16 bg-orange-400/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 border border-orange-400/30">
                      <FaHandshake className="h-8 w-8 text-orange-400" />
                    </div>
                    <h3 className="text-xl font-bold text-orange-400 mb-2">
                      Available
                    </h3>
                    <p className="text-white/70 text-sm">Your Business Here</p>
                    <button className="mt-4 px-4 py-2 text-xs font-medium bg-orange-500/20 hover:bg-orange-500/30 text-white rounded-lg border border-orange-400/50 transition-all">
                      Become a Sponsor
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Diamond Sponsors */}
      <section className="py-16 sm:py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/60 via-orange-900/30 to-gray-900/60 backdrop-blur-xl"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-orange-500/20 blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-amber-500/15 blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 right-1/4 w-48 h-48 rounded-full bg-orange-400/10 blur-2xl animate-pulse delay-500" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-white mb-4 glow-text-strong">
              Diamond{" "}
              <span className="text-orange-400 glow-text-orange">Sponsors</span>
            </h2>
            <p className="text-white/70 text-sm sm:text-base max-w-2xl mx-auto">
              Prestigious partners supporting innovation and excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {loading & (diamondSponsors.length < 1)
              ? // Loading state
                Array.from({ length: 3 }).map((_, index) => (
                  <div key={`loading-${index}`} className="group">
                    <div className="backdrop-blur-sm border border-orange-500/20 rounded-2xl p-8 sm:p-12 text-center min-h-[200px] flex items-center justify-center">
                      <div className="animate-pulse bg-gray-700/50 w-full h-full rounded-lg"></div>
                    </div>
                  </div>
                ))
              : diamondSponsors?.length > 0
              ? // Actual sponsors
                diamondSponsors.map((logo, index) => (
                  <div key={`main-${index}`} className="group">
                    <div className="backdrop-blur-sm border border-orange-500/20 rounded-2xl p-8 sm:p-12 text-center transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20 flex items-center justify-center min-h-[200px] bg-white/10">
                      <img
                        src={`${backend_domain_name}/public/storage/${logo.logo}`}
                        alt={`MindHack 2025 ${logo.logo}`}
                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                        style={{
                          filter: logo.hasDarkBackground ? "invert(1)" : "none",
                        }}
                      />
                    </div>
                  </div>
                ))
              : // Empty state - show all available spots
                Array.from({ length: 6 }).map((_, index) => (
                  <div key={`available-diamond-${index}`} className="group">
                    <div className="backdrop-blur-xl bg-gradient-to-br from-gray-800/20 via-orange-800/10 to-gray-800/20 border-2 border-dashed border-orange-400/40 rounded-xl p-6 sm:p-8 text-center hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 flex flex-col items-center justify-center min-h-[160px]">
                      <div className="w-12 h-12 bg-orange-400/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3 border border-orange-400/30">
                        <FaRocket className="h-5 w-5 text-orange-400" />
                      </div>
                      <h3 className="text-lg font-bold text-orange-400 mb-1">
                        Available For Your Business
                      </h3>
                      <p className="text-white/70 text-xs mb-2">
                        Your Logo Here
                      </p>
                      <button className="mt-2 px-3 py-1 text-xs font-medium bg-orange-500/20 hover:bg-orange-500/30 text-white rounded border border-orange-400/50 transition-all">
                        Join Now
                      </button>
                    </div>
                  </div>
                ))}

            {/* Show available spots if there are some sponsors but not all spots filled */}
            {diamondSponsors?.length > 0 &&
              diamondSponsors.length < 6 &&
              Array.from({ length: 6 - diamondSponsors.length }).map(
                (_, index) => (
                  <div key={`available-diamond-${index}`} className="group">
                    <div className="backdrop-blur-xl bg-gradient-to-br from-gray-800/20 via-orange-800/10 to-gray-800/20 border-2 border-dashed border-orange-400/40 rounded-xl p-6 sm:p-8 text-center hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 flex flex-col items-center justify-center min-h-[160px]">
                      <div className="w-12 h-12 bg-orange-400/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3 border border-orange-400/30">
                        <FaRocket className="h-5 w-5 text-orange-400" />
                      </div>
                      <h3 className="text-lg font-bold text-orange-400 mb-1">
                        Available For Your Business
                      </h3>
                      <p className="text-white/70 text-xs mb-2">
                        Your Logo Here
                      </p>
                      <button className="mt-2 px-3 py-1 text-xs font-medium bg-orange-500/20 hover:bg-orange-500/30 text-white rounded border border-orange-400/50 transition-all">
                        Join Now
                      </button>
                    </div>
                  </div>
                )
              )}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 px-4 bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Our{" "}
              <span className="text-orange-400 relative">
                Partner Schools
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-orange-500/50 rounded-full"></span>
              </span>
            </h2>
            <p className="text-white/70 text-sm sm:text-base max-w-2xl mx-auto">
              Trusted educational partners collaborating with MindHack 2025
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
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
                <div className="relative bg-white/5 backdrop-blur-sm border border-gray-800 rounded-xl p-4 sm:p-6 transition-all duration-300 hover:border-orange-500/30 hover:bg-white/10 hover:shadow-lg hover:shadow-orange-500/10 aspect-square flex items-center justify-center">
                  <img
                    src={`/school-logos/${index + 1}.png`}
                    alt={`School ${index + 1} MindHack 2025`}
                    className="w-full h-full object-contain max-h-[80px] transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-orange-500/10 to-transparent"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Decorative elements */}
          <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-orange-500/10 blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"></div>
        </div>
      </section>
      <section className="py-16 sm:py-24 px-4 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-orange-400" />
              <span className="text-orange-400 font-mono text-sm uppercase tracking-wider glow-text">
                Join Us
              </span>
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-orange-400" />
            </div>

            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 glow-text-strong">
              Sponsor{" "}
              <span className="text-orange-400 glow-text-orange">MindHack</span>
            </h2>

            <p className="text-white/80 text-sm xs:text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-8">
              Sponsor our events and competitions to connect your brand with
              innovation and support young tech talent.
            </p>

            <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mt-12">
              {[
                {
                  icon: FaGlobe,
                  title: "Global Impact",
                  description:
                    "Reach international audiences and showcase your commitment to innovation",
                  color: "text-orange-400",
                },
                {
                  icon: FaHandshake,
                  title: "Community Building",
                  description:
                    "Connect with Myanmar's brightest young minds and tech leaders",
                  color: "text-amber-400",
                },
                {
                  icon: FaRocket,
                  title: "Innovation Leadership",
                  description:
                    "Position your brand at the forefront of technological advancement",
                  color: "text-yellow-400",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                  className="backdrop-blur-xl bg-gradient-to-br from-gray-900/40 via-orange-900/20 to-gray-900/40 border border-orange-500/20 rounded-xl p-6 text-center"
                >
                  <div className="w-16 h-16 bg-orange-400/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 border border-orange-400/30">
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

      {/* Become a Sponsor Banner */}
      <section className="relative min-h-[80vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            src="./4.JPG"
            alt="Become a sponsor background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-orange-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-gray-900/80" />
        </div>

        <div className="relative z-10 h-full min-h-[80vh] flex flex-col justify-between py-16 sm:py-24">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="p-4 xs:p-6 sm:p-8 md:p-12 max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-0.5 bg-gradient-to-r from-orange-400 to-amber-400" />
              <span className="text-orange-300 font-mono text-xs uppercase tracking-widest">
                PARTNERSHIP OPPORTUNITY
              </span>
            </div>

            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Become a{" "}
              <span className="text-orange-400 glow-text-orange">Sponsor</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                {[
                  {
                    title: "Business Exposure",
                    description:
                      "Gain visibility among 500+ participants, industry leaders, and media coverage across Myanmar and internationally.",
                  },
                  {
                    title: "Cultural Legacy",
                    description:
                      "Support the preservation and evolution of Myanmar's cultural heritage through innovative technology solutions.",
                  },
                  {
                    title: "Innovation Edge",
                    description:
                      "Connect with cutting-edge projects and discover emerging talent in 3D design, programming, and robotics.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 mt-2.5 rounded-full bg-gradient-to-r from-orange-400 to-amber-400 flex-shrink-0" />
                    <div>
                      <h3 className="text-orange-400 font-semibold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-white/80 text-sm sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="backdrop-blur-xl bg-gradient-to-br from-gray-900/40 via-orange-900/20 to-gray-900/40 border border-orange-500/20 rounded-xl p-6 sm:p-8"
              >
                <h3 className="text-xl font-bold text-white mb-4">
                  Ready to Partner?
                </h3>
                <p className="text-white/80 text-sm mb-6">
                  Ignite the future by joining MindHack 2025's thrilling mission
                  to empower young global creators aged 7-17 and safeguard
                  Asia's vibrant cultural heritage through cutting-edge
                  technology! As a proud MindHack partner, you'll gain dazzling
                  visibility while fueling the next generation of innovators,
                  culminating at the grand finale on August 17 at Wyndham Grand
                  Yangon Hotel—register your support by June 7!
                </p>
                <button className="w-full backdrop-blur-sm bg-orange-500/20 hover:bg-orange-500/30 text-white font-bold px-6 py-3 border border-orange-400/50 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 glow-button hover:shadow-lg hover:shadow-orange-500/25">
                  <span>Contact Partnership Team</span>
                  <FaChevronRight className="h-4 w-4" />
                </button>
              </motion.div>
            </div>
          </motion.div>

          {/* Stats Cards Section */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="px-4 xs:px-6 sm:px-8 md:px-12 mx-auto w-full max-w-7xl"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {/* Team Card */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-gray-900/60 to-orange-900/30 backdrop-blur-sm border border-orange-500/20 rounded-xl p-6 sm:p-8 flex flex-col items-center text-center"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-400 mb-2 glow-text-orange">
                  100+
                </div>
                <div className="text-white font-medium text-lg sm:text-xl mb-2">
                  Teams
                </div>
                <div className="text-orange-200/80 text-sm">
                  Competing in the hackathon
                </div>
                <div className="mt-4 w-12 h-1 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full" />
              </motion.div>

              {/* Coders Card */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-gray-900/60 to-orange-900/30 backdrop-blur-sm border border-orange-500/20 rounded-xl p-6 sm:p-8 flex flex-col items-center text-center"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-400 mb-2 glow-text-orange">
                  300+
                </div>
                <div className="text-white font-medium text-lg sm:text-xl mb-2">
                  Young Coders
                </div>
                <div className="text-orange-200/80 text-sm">
                  Aged 7-17 participating
                </div>
                <div className="mt-4 w-12 h-1 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full" />
              </motion.div>

              {/* Attendees Card */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-gray-900/60 to-orange-900/30 backdrop-blur-sm border border-orange-500/20 rounded-xl p-6 sm:p-8 flex flex-col items-center text-center"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-400 mb-2 glow-text-orange">
                  1000+
                </div>
                <div className="text-white font-medium text-lg sm:text-xl mb-2">
                  Event Attendees
                </div>
                <div className="text-orange-200/80 text-sm">
                  Expected at the grand finale
                </div>
                <div className="mt-4 w-12 h-1 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Previous Sponsors */}
      <section className="py-16 sm:py-24 px-4 bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-white mb-4 glow-text-strong">
              Previous{" "}
              <span className="text-orange-400 glow-text-orange">Sponsors</span>
            </h2>
            <p className="text-white/70 text-sm sm:text-base max-w-2xl mx-auto">
              Trusted partners who have supported MindHack's journey
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-3 gap-8 sm:gap-12"
          >
            {loading && prevSponsors.length > 0 ? (
              // Loading state
              Array.from({ length: 3 }).map((_, index) => (
                <motion.div
                  key={`loading-${index}`}
                  variants={staggerItem}
                  className="group"
                >
                  <div className="backdrop-blur-sm border border-orange-500/20 rounded-2xl p-8 sm:p-12 text-center transition-all duration-500 min-h-[200px] flex items-center justify-center">
                    <div className="animate-pulse bg-gray-700/50 w-full h-full rounded-lg"></div>
                  </div>
                </motion.div>
              ))
            ) : prevSponsors?.length > 0 ? (
              // Actual sponsors
              prevSponsors.map((logo, index) => (
                <motion.div
                  key={`main-${index}`}
                  variants={staggerItem}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3 },
                  }}
                  className="group"
                >
                  <div className="backdrop-blur-sm border border-orange-500/20 rounded-2xl p-8 sm:p-12 text-center transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/20 flex items-center justify-center min-h-[200px] bg-white/10">
                    <img
                      src={`${backend_domain_name}/public/storage/${logo.logo}`}
                      alt={`MindHack 2025 ${logo.logo}`}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                      style={{
                        filter: logo.hasDarkBackground ? "invert(1)" : "none",
                      }}
                    />
                  </div>
                </motion.div>
              ))
            ) : (
              // Empty state
              <div className="col-span-3 text-center py-12 text-gray-400">
                No sponsors available
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
