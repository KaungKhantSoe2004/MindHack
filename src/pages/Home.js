// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   FaChevronRight,
//   FaMicrochip,
//   FaCode,
//   FaBolt,
//   FaBars,
//   FaTimes,
//   FaEnvelope,
//   FaPhone,
//   FaMapMarkerAlt,
//   FaUsers,
//   FaBook,
//   FaTrophy,
//   FaBullseye,
//   FaRocket,
// } from "react-icons/fa";

// const heroImages = [
//   // Teamwork at hackathon
//   "./kv.jpg",

//   // Programmer at night
//   "./hotel.jpg",

//   // People collaborating with laptops
//   "/shwe.jpg",

//   // Dark coding setup
//   "/BONUS.jpg",

//   // Event tech atmosphere
//   "/hotel.png",
// ];

// export default function MindHackHomepage() {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-950 relative overflow-hidden">
//       {/* Technical Grid Background */}
//       <div className="fixed inset-0 opacity-5">
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage: `
//             linear-gradient(rgba(255,165,0,0.1) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(255,165,0,0.1) 1px, transparent 1px)
//           `,
//             backgroundSize: "50px 50px",
//           }}
//         />
//       </div>

//       <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-gradient-to-r from-gray-950/80 via-orange-950/20 to-gray-950/80 border-b border-orange-500/20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             <div className="flex items-center space-x-2">
//               <div className="w-20 h-18  flex items-center justify-center ">
//                 <img src="./logo.png" />
//               </div>
//               {/* <span className="text-white font-bold text-xl">MindHack</span> */}
//               <span className="text-orange-400 text-sm font-mono glow-text">
//                 2025
//               </span>
//             </div>

//             {/* Desktop Navigation */}
//             <div className="hidden md:flex space-x-8 flex-1 justify-start ml-16">
//               <a
//                 href="/"
//                 className="text-white/80 hover:text-orange-400 transition-colors font-medium hover:glow-text"
//               >
//                 Home
//               </a>

//               {/* Competitions Dropdown */}
//               <div className="relative group">
//                 <button className="text-orange-400 font-medium flex items-center space-x-1 glow-text">
//                   <span>Competitions</span>
//                   <FaChevronRight className="h-3 w-3 transform group-hover:rotate-90 transition-transform duration-200" />
//                 </button>
//                 <div className="absolute top-full left-0 mt-2 w-64 backdrop-blur-xl bg-gradient-to-br from-gray-900/95 via-orange-900/20 to-gray-900/95 border border-orange-500/30 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 shadow-2xl shadow-orange-500/20">
//                   <div className="p-2">
//                     <a
//                       href="/mindhack-2025"
//                       className="block px-4 py-3 text-orange-400 bg-orange-500/10 rounded-lg glow-text"
//                     >
//                       <div className="font-semibold">MindHack 2025</div>
//                       <div className="text-sm text-orange-400/60">
//                         Current Competition
//                       </div>
//                     </a>
//                     <a
//                       href="/past-events"
//                       className="block px-4 py-3 text-white/80 hover:text-orange-400 hover:bg-orange-500/5 rounded-lg transition-colors"
//                     >
//                       <div className="font-semibold">Past Events Recap</div>
//                       <div className="text-sm text-white/60">
//                         Previous Competitions
//                       </div>
//                     </a>
//                   </div>
//                 </div>
//               </div>

//               <a
//                 href="#"
//                 className="text-white/80 hover:text-orange-400 transition-colors font-medium hover:glow-text"
//               >
//                 Timeline
//               </a>
//               <a
//                 href="#"
//                 className="text-white/80 hover:text-orange-400 transition-colors font-medium hover:glow-text"
//               >
//                 Register
//               </a>
//             </div>

//             <div className="flex items-center space-x-4">
//               <button
//                 className="md:hidden text-white"
//                 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               >
//                 {mobileMenuOpen ? (
//                   <FaTimes className="h-6 w-6" />
//                 ) : (
//                   <FaBars className="h-6 w-6" />
//                 )}
//               </button>
//             </div>
//           </div>

//           {/* Mobile Navigation */}
//           <AnimatePresence>
//             {mobileMenuOpen && (
//               <motion.div
//                 initial={{ opacity: 0, height: 0 }}
//                 animate={{ opacity: 1, height: "auto" }}
//                 exit={{ opacity: 0, height: 0 }}
//                 transition={{ duration: 0.3, ease: "easeInOut" }}
//                 className="md:hidden backdrop-blur-xl bg-gradient-to-br from-gray-900/90 via-orange-900/30 to-gray-900/90 border-t border-orange-500/20 overflow-hidden"
//               >
//                 <motion.div
//                   initial={{ y: -20 }}
//                   animate={{ y: 0 }}
//                   exit={{ y: -20 }}
//                   transition={{ duration: 0.3, delay: 0.1 }}
//                   className="px-2 pt-4 pb-6 space-y-2"
//                 >
//                   {[
//                     "Home",
//                     "MindHack 2025",
//                     "Past Events",
//                     "Timeline",
//                     "Register",
//                   ].map((item, index) => (
//                     <motion.a
//                       key={item}
//                       href="#"
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       exit={{ opacity: 0, x: -20 }}
//                       transition={{ duration: 0.2, delay: index * 0.1 }}
//                       className="block px-4 py-3 text-white/80 hover:text-orange-400 transition-colors rounded-lg hover:bg-orange-500/5"
//                     >
//                       {item}
//                     </motion.a>
//                   ))}
//                 </motion.div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </nav>

//       <section className="relative h-screen overflow-hidden">
//         {/* Background Images - Seamless Transition */}
//         <div className="absolute inset-0">
//           <AnimatePresence>
//             <motion.div
//               key={currentImageIndex}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 1.5, ease: "easeInOut" }}
//               className="absolute inset-0"
//             >
//               <div
//                 className="w-full h-full bg-cover bg-center"
//                 style={{
//                   backgroundImage: `url(${heroImages[currentImageIndex]})`,
//                 }}
//               />
//             </motion.div>
//           </AnimatePresence>
//           <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/70 to-gray-950/30" />
//           <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-gray-950/40" />
//         </div>

//         {/* Technical Overlay Elements */}
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-20 left-20 w-32 h-32 border border-orange-400 rotate-45" />
//           <div className="absolute bottom-40 right-32 w-24 h-24 border border-amber-400 rotate-12" />
//           <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-orange-300 rounded-full" />
//         </div>

//         {/* Hero Content */}
//         <div className="absolute bottom-12 left-12 z-10 max-w-3xl">
//           <motion.div
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             className="text-left"
//           >
//             <div className="flex items-center space-x-3 mb-4">
//               <span className="text-orange-400 font-mono text-sm uppercase tracking-wider glow-text">
//                 Technical Competition
//               </span>
//             </div>
//             <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 glow-text-strong">
//               MindHack{" "}
//               <span className="text-orange-400 glow-text-orange">2025</span>
//             </h1>
//             <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent mb-6 glow-text-gradient">
//               The Ancient Revival
//             </h2>
//             <p className="text-lg text-white/90 mb-8 leading-relaxed max-w-2xl">
//               Master the future of technology through{" "}
//               <span className="text-orange-400 font-semibold">3D Design</span>,
//               <span className="text-amber-400 font-semibold">
//                 {" "}
//                 Scratch Programming
//               </span>
//               , and
//               <span className="text-orange-400 font-semibold">
//                 {" "}
//                 Robotics Engineering
//               </span>
//               . Compete for prestigious awards in this ultimate technical
//               challenge.
//             </p>
//             <button className="backdrop-blur-sm bg-orange-500/20 hover:bg-orange-500/30 text-white text-lg px-8 py-3 font-semibold border border-orange-400/50 rounded-lg transition-all duration-300 flex items-center space-x-2 glow-button hover:shadow-lg hover:shadow-orange-500/25">
//               <span>Register Now</span>
//               <FaChevronRight className="h-5 w-5" />
//             </button>
//           </motion.div>
//         </div>

//         {/* Image indicators */}
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
//           {heroImages.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentImageIndex(index)}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 index === currentImageIndex
//                   ? "bg-orange-400 scale-125 glow-dot"
//                   : "bg-white/50 hover:bg-orange-400/70"
//               }`}
//             />
//           ))}
//         </div>
//       </section>

//       {/* What is MindHack + Competition Categories Section */}
//       <section className="py-24 px-4 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 relative">
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-orange-500/5 blur-3xl animate-pulse" />
//           <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-amber-500/5 blur-3xl animate-pulse delay-1000" />
//         </div>
//         <div className="max-w-7xl mx-auto relative z-10">
//           {/* What is MindHack */}
//           <div className="text-center mb-20">
//             <motion.div
//               initial={{ y: 50, opacity: 0 }}
//               whileInView={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: false }}
//               className="flex items-center justify-center space-x-3 mb-6"
//             >
//               <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-orange-400" />
//               <span className="text-orange-400 font-mono text-sm uppercase tracking-wider glow-text">
//                 About MindHack
//               </span>
//               <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-orange-400" />
//             </motion.div>
//             <motion.h2
//               initial={{ y: 50, opacity: 0 }}
//               whileInView={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               viewport={{ once: false }}
//               className="text-4xl md:text-5xl font-bold text-white mb-6 glow-text-strong"
//             >
//               What is{" "}
//               <span className="text-orange-400 glow-text-orange">MindHack</span>
//               ?
//             </motion.h2>
//             <motion.p
//               initial={{ y: 30, opacity: 0 }}
//               whileInView={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//               viewport={{ once: false }}
//               className="text-white/70 max-w-4xl mx-auto text-lg leading-relaxed mb-16"
//             >
//               MindHack is a groundbreaking technical competition that bridges
//               ancient wisdom with cutting-edge technology. We believe in the
//               power of combining time-tested principles with modern innovation
//               to solve complex problems and create meaningful impact. Through
//               three specialized categories, participants showcase their
//               technical mastery while honoring cultural heritage and driving
//               technological advancement.
//             </motion.p>
//           </div>

//           {/* Competition Categories */}
//           <div className="text-center mb-12">
//             <motion.div
//               initial={{ y: 50, opacity: 0 }}
//               whileInView={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: false }}
//               className="flex items-center justify-center space-x-3 mb-6"
//             >
//               <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-orange-400" />
//               <span className="text-orange-400 font-mono text-sm uppercase tracking-wider glow-text">
//                 Competition Categories
//               </span>
//               <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-orange-400" />
//             </motion.div>
//             <motion.h2
//               initial={{ y: 50, opacity: 0 }}
//               whileInView={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               viewport={{ once: false }}
//               className="text-4xl md:text-5xl font-bold text-white mb-6 glow-text-strong"
//             >
//               Technical{" "}
//               <span className="text-orange-400 glow-text-orange">
//                 Competitions
//               </span>
//             </motion.h2>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: FaMicrochip,
//                 title: "3D Designing & Modeling",
//                 desc: "Create stunning 3D models, architectural designs, and immersive visualizations using industry-standard software. Showcase your spatial creativity and technical precision in bringing digital concepts to life.",
//                 gradient: "from-orange-500/20 to-amber-500/20",
//                 iconColor: "text-orange-400",
//                 borderColor: "border-orange-400/30",
//                 glowColor: "shadow-orange-500/20",
//               },
//               {
//                 icon: FaCode,
//                 title: "Scratch Coding",
//                 desc: "Build interactive games, animations, and applications using visual programming. Perfect for beginners and experts alike to create engaging digital experiences that combine creativity with logical thinking.",
//                 gradient: "from-amber-500/20 to-yellow-500/20",
//                 iconColor: "text-amber-400",
//                 borderColor: "border-amber-400/30",
//                 glowColor: "shadow-amber-500/20",
//               },
//               {
//                 icon: FaBolt,
//                 title: "Electronics & Robotics",
//                 desc: "Design and build autonomous robots, IoT devices, and electronic circuits. Combine hardware engineering with intelligent programming for real-world solutions that bridge the physical and digital worlds.",
//                 gradient: "from-yellow-500/20 to-orange-500/20",
//                 iconColor: "text-yellow-400",
//                 borderColor: "border-yellow-400/30",
//                 glowColor: "shadow-yellow-500/20",
//               },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ y: 50, opacity: 0 }}
//                 whileInView={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.6, delay: index * 0.2 }}
//                 viewport={{ once: false }}
//                 className="group cursor-pointer"
//               >
//                 <div
//                   className={`relative overflow-hidden rounded-3xl border ${item.borderColor} bg-gradient-to-br ${item.gradient} backdrop-blur-xl hover:scale-105 transition-all duration-500 hover:shadow-2xl ${item.glowColor} h-full`}
//                   style={{
//                     background: `linear-gradient(135deg, rgba(17, 24, 39, 0.8) 0%, rgba(31, 41, 55, 0.6) 30%, ${
//                       item.gradient.includes("orange")
//                         ? "rgba(251, 146, 60, 0.1)"
//                         : item.gradient.includes("amber")
//                         ? "rgba(245, 158, 11, 0.1)"
//                         : "rgba(234, 179, 8, 0.1)"
//                     } 100%)`,
//                   }}
//                 >
//                   {/* Background Pattern */}
//                   <div className="absolute inset-0 opacity-5">
//                     <div className="absolute top-4 right-4 w-32 h-32 border border-orange-400/20 rounded-full" />
//                     <div className="absolute bottom-4 left-4 w-24 h-24 border border-orange-400/20 rotate-45" />
//                     <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-orange-400/10 rounded-full" />
//                   </div>

//                   <div className="p-8 text-center h-full flex flex-col relative z-10">
//                     <div
//                       className={`w-20 h-20 bg-gradient-to-br from-gray-800/60 via-orange-800/20 to-gray-800/60 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border ${item.borderColor} hover:shadow-lg ${item.glowColor}`}
//                     >
//                       <item.icon className={`h-10 w-10 ${item.iconColor}`} />
//                     </div>
//                     <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors duration-300">
//                       {item.title}
//                     </h3>
//                     <p className="text-white/70 leading-relaxed flex-grow">
//                       {item.desc}
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Discover The Ancient Revival Section */}
//       {/* <section className="py-24 px-4 bg-gradient-to-br from-gray-900 via-gray-950 to-orange-900/20 relative">
//         <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-amber-500/10" />
//         <div className="max-w-7xl mx-auto relative z-10">
//           <div className="text-center mb-20">
//             <motion.div
//               initial={{ y: 50, opacity: 0 }}
//               whileInView={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: false }}
//               className="flex items-center justify-center space-x-3 mb-6"
//             >
//               <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-orange-400" />
//               <span className="text-orange-400 font-mono text-sm uppercase tracking-wider glow-text">
//                 Discover The Ancient Revival
//               </span>
//               <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-orange-400" />
//             </motion.div>
//             <motion.h2
//               initial={{ y: 50, opacity: 0 }}
//               whileInView={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               viewport={{ once: false }}
//               className="text-4xl md:text-5xl font-bold text-white mb-8 glow-text-strong"
//             >
//               Reviving Culture Through{" "}
//               <span className="text-orange-400 glow-text-orange">
//                 MindHack 2025
//               </span>
//             </motion.h2>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <motion.div
//               initial={{ x: -50, opacity: 0 }}
//               whileInView={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: false }}
//               className="backdrop-blur-xl bg-gradient-to-br from-gray-900/60 via-orange-900/20 to-gray-900/60 border border-orange-500/30 rounded-3xl p-10 relative overflow-hidden hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500"
//             >
//               <div className="absolute inset-0 opacity-5">
//                 <div className="absolute top-0 right-0 w-40 h-40 border-2 border-orange-400/20 rounded-full" />
//                 <div className="absolute bottom-0 left-0 w-32 h-32 border-2 border-orange-400/20 rotate-45" />
//               </div>
//               <div className="relative z-10">
//                 <h3 className="text-3xl font-bold text-white mb-6 glow-text-strong">
//                   Why We Celebrate MindHack
//                 </h3>
//                 <p className="text-white/80 mb-6 leading-relaxed text-lg">
//                   MindHack serves as a groundbreaking fusion of ancient wisdom
//                   and modern innovation. Our mission is to bridge the gap
//                   between traditional knowledge systems and contemporary
//                   technological solutions, creating a unique platform for
//                   cultural revival and technological advancement.
//                 </p>
//                 <p className="text-white/80 mb-8 leading-relaxed text-lg">
//                   We invite participants to explore and integrate time-tested
//                   principles with cutting-edge technology, fostering solutions
//                   that honor our heritage while addressing modern challenges.
//                   This isn't just a competition—it's a movement to preserve and
//                   revitalize ancient wisdom through innovation.
//                 </p>
//                 <p className="text-white/80 leading-relaxed text-lg">
//                   Through technical mastery in 3D design, programming, and
//                   robotics, we create a bridge between past and future, ensuring
//                   that cultural wisdom continues to inspire technological
//                   progress for generations to come.
//                 </p>
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ x: 50, opacity: 0 }}
//               whileInView={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: false }}
//               className="relative group"
//             >
//               <div className="relative overflow-hidden rounded-3xl backdrop-blur-xl bg-gradient-to-br from-gray-900/40 via-orange-900/20 to-gray-900/40 border border-orange-500/20 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500">
//                 <img
//                   src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
//                   alt="Team collaboration"
//                   className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent" />
//                 <div className="absolute bottom-6 left-6">
//                   <h4 className="text-white font-semibold text-xl glow-text-strong">
//                     Collaborative Innovation
//                   </h4>
//                   <p className="text-white/80">
//                     Teams working together to create the future
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section> */}
//       <section className="relative min-h-screen overflow-hidden">
//         {/* Background with optimized gradient for mobile */}
//         <div className="absolute inset-0 z-0">
//           <img
//             src="601.JPG"
//             alt="Cultural innovation background"
//             className="w-full h-full object-cover object-center"
//             loading="eager" // Prioritize image loading
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-orange-950/30 md:to-orange-950/20" />
//         </div>

//         {/* Text content optimized for mobile */}
//         <div className="relative z-10 h-full min-h-screen flex items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }} // Reduced movement for mobile
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }} // Faster transition on mobile
//             viewport={{ once: true, margin: "-100px" }} // Earlier trigger
//             className="p-6 sm:p-8 md:p-12 lg:p-16 w-full max-w-2xl"
//           >
//             <div className="flex items-center gap-2 mb-3 sm:mb-4">
//               <div className="w-8 h-0.5 bg-gradient-to-r from-orange-400 to-amber-400" />
//               <span className="text-orange-300 font-mono text-[0.65rem] xs:text-xs uppercase tracking-widest">
//                 DISCOVER THE ANCIENT REVIVAL
//               </span>
//             </div>

//             <h3 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 leading-snug sm:leading-tight">
//               Why We Celebrate MindHack
//             </h3>

//             <div className="space-y-4 text-white/90 text-base sm:text-lg leading-relaxed max-w-lg">
//               <p>
//                 MindHack serves as a groundbreaking fusion of ancient wisdom and
//                 modern innovation. Our mission is to bridge the gap between
//                 traditional knowledge systems and contemporary technological
//                 solutions.
//               </p>
//               <p className="hidden xs:block">
//                 We create a unique platform for cultural revival and
//                 technological advancement through this celebration of heritage
//                 and progress.
//               </p>
//             </div>
//           </motion.div>
//         </div>

//         {/* Mobile-optimized decorative elements */}
//         <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-r from-transparent to-orange-950/40 md:to-orange-950/30 pointer-events-none" />
//         <div className="absolute left-0 bottom-0 w-48 h-48 rounded-full bg-orange-500/10 blur-xl md:blur-3xl" />
//       </section>
//       {/* Competition Timeline */}
//       <section className="py-24 px-4 bg-gray-950 relative">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <motion.div
//               initial={{ y: 50, opacity: 0 }}
//               whileInView={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: false }}
//               className="flex items-center justify-center space-x-3 mb-6"
//             >
//               <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-orange-400" />
//               <span className="text-orange-400 font-mono text-sm uppercase tracking-wider glow-text">
//                 Event Timeline
//               </span>
//               <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-orange-400" />
//             </motion.div>
//             <motion.h2
//               initial={{ y: 50, opacity: 0 }}
//               whileInView={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               viewport={{ once: false }}
//               className="text-4xl md:text-5xl font-bold text-white mb-4 glow-text-strong"
//             >
//               Competition{" "}
//               <span className="text-orange-400 glow-text-orange">Timeline</span>
//             </motion.h2>
//           </div>

//           <div className="grid md:grid-cols-5 gap-6">
//             {[
//               {
//                 phase: "Registration",
//                 date: "March 1, 2025",
//                 time: "9:00 AM",
//                 icon: FaUsers,
//                 color: "text-orange-300",
//                 bgColor: "bg-orange-300/10",
//                 borderColor: "border-orange-300/30",
//                 glowColor: "shadow-orange-300/20",
//               },
//               {
//                 phase: "On Boarding",
//                 date: "March 10, 2025",
//                 time: "10:00 AM",
//                 icon: FaBook,
//                 color: "text-orange-400",
//                 bgColor: "bg-orange-400/10",
//                 borderColor: "border-orange-400/30",
//                 glowColor: "shadow-orange-400/20",
//               },
//               {
//                 phase: "First Stage",
//                 date: "March 20, 2025",
//                 time: "9:00 AM",
//                 icon: FaRocket,
//                 color: "text-amber-400",
//                 bgColor: "bg-amber-400/10",
//                 borderColor: "border-amber-400/30",
//                 glowColor: "shadow-amber-400/20",
//               },
//               {
//                 phase: "Finalist Announcement",
//                 date: "March 21, 2025",
//                 time: "6:00 PM",
//                 icon: FaBullseye,
//                 color: "text-yellow-400",
//                 bgColor: "bg-yellow-400/10",
//                 borderColor: "border-yellow-400/30",
//                 glowColor: "shadow-yellow-400/20",
//               },
//               {
//                 phase: "Second Stage Final",
//                 date: "March 22, 2025",
//                 time: "9:00 AM",
//                 icon: FaTrophy,
//                 color: "text-orange-400",
//                 bgColor: "bg-orange-400/10",
//                 borderColor: "border-orange-400/30",
//                 glowColor: "shadow-orange-400/20",
//               },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ y: 50, opacity: 0 }}
//                 whileInView={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: false }}
//                 className="group"
//               >
//                 <div
//                   className={`backdrop-blur-xl bg-gradient-to-br from-gray-900/40 via-orange-900/20 to-gray-900/40 border ${item.borderColor} hover:bg-gradient-to-br hover:from-gray-800/50 hover:via-orange-800/30 hover:to-gray-800/50 transition-all duration-500 group-hover:scale-105 h-full relative overflow-hidden rounded-2xl hover:shadow-2xl ${item.glowColor}`}
//                 >
//                   <div
//                     className={`absolute inset-0 ${item.bgColor} opacity-5`}
//                   />
//                   <div className="p-6 text-center h-full flex flex-col relative z-10">
//                     <div className="mb-4">
//                       <div className="text-sm text-white/70 font-mono">
//                         {item.date}
//                       </div>
//                     </div>
//                     <div
//                       className={`w-20 h-20 bg-gradient-to-br from-gray-800/60 via-orange-800/20 to-gray-800/60 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 border ${item.borderColor} hover:shadow-lg ${item.glowColor}`}
//                     >
//                       <item.icon className={`h-10 w-10 ${item.color}`} />
//                     </div>
//                     <h3 className="text-lg font-bold text-white">
//                       {item.phase}
//                     </h3>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Join the Movement Section */}
//       <section className="relative min-h-screen overflow-hidden">
//         {/* Background with image and gradient overlay */}
//         <div className="absolute inset-0 z-0">
//           <img
//             src="./gp.JPG"
//             alt="MindHack community background"
//             className="w-full h-full object-cover object-center"
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-orange-950/30" />
//           <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-gray-900/80" />
//         </div>

//         {/* Content container */}
//         <div className="relative z-10 h-full min-h-screen flex flex-col justify-end pb-24">
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="p-8 md:p-12 lg:p-16 max-w-2xl"
//           >
//             <div className="flex items-center gap-3 mb-4">
//               <div className="w-10 h-0.5 bg-gradient-to-r from-orange-400 to-amber-400" />
//               <span className="text-orange-300 font-mono text-xs uppercase tracking-widest">
//                 JOIN THE MOVEMENT
//               </span>
//             </div>

//             <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
//               WHY JOIN MINDHACK??
//             </h2>

//             <div className="space-y-6 text-white/90 text-lg leading-relaxed">
//               <p>
//                 Join a global community of innovators bridging ancient wisdom
//                 with modern technology through groundbreaking competitions and
//                 collaborations.
//               </p>

//               <div className="space-y-4">
//                 {[
//                   "Network with like-minded creators worldwide",
//                   "Access cutting-edge tools and resources",
//                   "Compete for $10,000+ in prizes",
//                   "Receive expert mentorship",
//                   "Showcase to global audiences",
//                   "Preserve culture through innovation",
//                 ].map((item, index) => (
//                   <div key={index} className="flex items-start gap-3">
//                     <div className="w-2 h-2 mt-2.5 rounded-full bg-gradient-to-r from-orange-400 to-amber-400 flex-shrink-0" />
//                     <p>{item}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         {/* Decorative elements */}
//         <div className="absolute bottom-20 left-20 w-3 h-3 rounded-full bg-amber-400/60 blur-sm" />
//         <div className="absolute bottom-32 left-32 w-2 h-2 rounded-full bg-orange-400/60 blur-sm" />
//       </section>

//       {/* Ready to Compete Section - Full Width */}
//       <section className="py-24 bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-8 left-8 w-24 h-24 border-2 border-orange-400 rotate-45" />
//           <div className="absolute bottom-8 right-8 w-32 h-32 border-2 border-amber-400 rounded-full" />
//           <div className="absolute top-1/2 left-1/4 w-40 h-40 border border-orange-300 rotate-12" />
//           <div className="absolute top-1/4 right-1/4 w-28 h-28 border border-amber-300 rounded-full" />
//         </div>
//         <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
//           <motion.div
//             initial={{ y: 50, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: false }}
//           >
//             <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 glow-text-strong">
//               Ready to{" "}
//               <span className="text-orange-400 glow-text-orange">Compete</span>?
//             </h2>
//             <p className="text-white/90 text-xl mb-12 max-w-4xl mx-auto leading-relaxed">
//               Join MindHack 2025 and showcase your technical skills in 3D
//               Design, Scratch Programming, and Robotics. Compete for $10,000+ in
//               prizes and gain recognition from industry leaders in this ultimate
//               technical challenge.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
//               <button className="backdrop-blur-sm bg-orange-500/20 hover:bg-orange-500/30 text-white font-bold px-12 py-4 text-lg border border-orange-400/50 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 glow-button hover:shadow-2xl hover:shadow-orange-500/25">
//                 <span>Register Now</span>
//                 <FaChevronRight className="h-6 w-6" />
//               </button>
//               <button className="border border-orange-500/30 text-white hover:bg-orange-500/10 font-bold px-12 py-4 text-lg rounded-lg transition-all duration-300 hover:border-orange-400/50">
//                 Download Rules
//               </button>
//             </div>
//             <div className="flex items-center justify-center space-x-12 text-white/60">
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-orange-400 mb-2 glow-text">
//                   500+
//                 </div>
//                 <div className="text-sm uppercase tracking-wider">
//                   Participants
//                 </div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-amber-400 mb-2 glow-text">
//                   2025
//                 </div>
//                 <div className="text-sm uppercase tracking-wider">Edition</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-yellow-400 mb-2 glow-text">
//                   LIVE
//                 </div>
//                 <div className="text-sm uppercase tracking-wider">Status</div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Past MindHack Highlights */}
//       <section className="py-24 px-4 bg-gray-950 relative">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <motion.div
//               initial={{ y: 50, opacity: 0 }}
//               whileInView={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: false }}
//               className="flex items-center justify-center space-x-3 mb-6"
//             >
//               <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-orange-400" />
//               <span className="text-orange-400 font-mono text-sm uppercase tracking-wider glow-text">
//                 Past Highlights
//               </span>
//               <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-orange-400" />
//             </motion.div>
//             <motion.h2
//               initial={{ y: 50, opacity: 0 }}
//               whileInView={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               viewport={{ once: false }}
//               className="text-4xl md:text-5xl font-bold text-white mb-6 glow-text-strong"
//             >
//               Past MindHack{" "}
//               <span className="text-orange-400 glow-text-orange">
//                 Highlights
//               </span>
//             </motion.h2>
//           </div>

//           <div className="grid md:grid-cols-4 gap-6">
//             {[
//               "./1.JPG",
//               "./2.JPG",
//               "./3.JPG",
//               "./4.JPG",
//               "./5.JPG",
//               "./6.JPG",
//               "./7.JPG",
//               "./8.JPG",
//             ].map((img, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ y: 50, opacity: 0 }}
//                 whileInView={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: false }}
//                 className="group cursor-pointer"
//               >
//                 <div className="relative overflow-hidden rounded-2xl backdrop-blur-xl bg-gradient-to-br from-gray-900/40 via-orange-900/20 to-gray-900/40 border border-orange-500/20 hover:bg-gradient-to-br hover:from-gray-800/50 hover:via-orange-800/30 hover:to-gray-800/50 transition-all duration-500 group-hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20">
//                   <img
//                     src={img || "/placeholder.svg"}
//                     alt={`MindHack highlight ${index + 1}`}
//                     className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
//                   />
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="backdrop-blur-xl bg-gradient-to-br from-gray-900/20 via-orange-900/10 to-gray-900/20 border-t border-orange-500/20 py-16 px-4">
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             initial={{ y: 50, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: false }}
//             className="grid md:grid-cols-4 gap-12"
//           >
//             <div>
//               <div className="flex items-center space-x-2 mb-6">
//                 <div className="w-10 h-10 bg-gradient-to-br from-gray-800/60 via-orange-800/20 to-gray-800/60 backdrop-blur-sm rounded-lg flex items-center justify-center border border-orange-500/20 shadow-lg shadow-orange-500/20">
//                   <span className="text-white font-bold">M</span>
//                 </div>
//                 <span className="text-white font-bold text-2xl">MindHack</span>
//                 <span className="text-orange-400 text-sm font-mono glow-text">
//                   2025
//                 </span>
//               </div>
//               <p className="text-white/70 leading-relaxed mb-6">
//                 The premier technical competition for 3D Design, Scratch
//                 Programming, and Robotics. Where innovation meets ancient wisdom
//                 through cutting-edge technology.
//               </p>
//               <div className="flex space-x-4">
//                 <div className="w-10 h-10 bg-gray-800/50 backdrop-blur-sm border border-orange-500/20 rounded-full flex items-center justify-center hover:bg-orange-500/10 transition-colors cursor-pointer hover:shadow-lg hover:shadow-orange-500/20">
//                   <span className="text-orange-400 text-sm">f</span>
//                 </div>
//                 <div className="w-10 h-10 bg-gray-800/50 backdrop-blur-sm border border-orange-500/20 rounded-full flex items-center justify-center hover:bg-orange-500/10 transition-colors cursor-pointer hover:shadow-lg hover:shadow-orange-500/20">
//                   <span className="text-amber-400 text-sm">t</span>
//                 </div>
//                 <div className="w-10 h-10 bg-gray-800/50 backdrop-blur-sm border border-orange-500/20 rounded-full flex items-center justify-center hover:bg-orange-500/10 transition-colors cursor-pointer hover:shadow-lg hover:shadow-orange-500/20">
//                   <span className="text-yellow-400 text-sm">in</span>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <h4 className="text-white font-bold text-lg mb-6 glow-text-strong">
//                 Competitions
//               </h4>
//               <div className="space-y-3">
//                 {[
//                   "3D Design & Modeling",
//                   "Scratch Programming",
//                   "Electronics & Robotics",
//                   "Competition Rules",
//                 ].map((link) => (
//                   <a
//                     key={link}
//                     href="#"
//                     className="block text-white/70 hover:text-orange-400 transition-colors hover:glow-text"
//                   >
//                     {link}
//                   </a>
//                 ))}
//               </div>
//             </div>

//             <div>
//               <h4 className="text-white font-bold text-lg mb-6 glow-text-strong">
//                 Resources
//               </h4>
//               <div className="space-y-3">
//                 {[
//                   "Technical Guidelines",
//                   "Software Downloads",
//                   "Hardware Kits",
//                   "Mentorship Program",
//                 ].map((link) => (
//                   <a
//                     key={link}
//                     href="#"
//                     className="block text-white/70 hover:text-orange-400 transition-colors hover:glow-text"
//                   >
//                     {link}
//                   </a>
//                 ))}
//               </div>
//             </div>

//             <div>
//               <h4 className="text-white font-bold text-lg mb-6 glow-text-strong">
//                 Contact
//               </h4>
//               <div className="space-y-4">
//                 <div className="flex items-center space-x-3 text-white/70">
//                   <FaEnvelope className="h-5 w-5 flex-shrink-0 text-orange-400" />
//                   <span>tech@mindhack.com</span>
//                 </div>
//                 <div className="flex items-center space-x-3 text-white/70">
//                   <FaPhone className="h-5 w-5 flex-shrink-0 text-amber-400" />
//                   <span>+1 (555) TECH-2025</span>
//                 </div>
//                 <div className="flex items-center space-x-3 text-white/70">
//                   <FaMapMarkerAlt className="h-5 w-5 flex-shrink-0 text-yellow-400" />
//                   <span>Tech Hub, Innovation District</span>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ y: 30, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             viewport={{ once: false }}
//             className="border-t border-orange-500/20 mt-12 pt-8"
//           >
//             <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
//               <p className="text-white/60 text-center md:text-left">
//                 © 2025 MindHack Technical Competition. All rights reserved.
//               </p>
//               <div className="flex space-x-6">
//                 <a
//                   href="#"
//                   className="text-white/60 hover:text-orange-400 transition-colors hover:glow-text"
//                 >
//                   Privacy Policy
//                 </a>
//                 <a
//                   href="#"
//                   className="text-white/60 hover:text-orange-400 transition-colors hover:glow-text"
//                 >
//                   Terms of Service
//                 </a>
//                 <a
//                   href="#"
//                   className="text-white/60 hover:text-orange-400 transition-colors hover:glow-text"
//                 >
//                   Competition Rules
//                 </a>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </footer>

//       {/* Custom Styles */}
//       <style jsx global>{`
//         @import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap");

//         * {
//           font-family: "Orbitron", monospace !important;
//         }

//         .glow-text {
//           text-shadow: 0 0 10px rgba(255, 165, 0, 0.5);
//         }
//         .glow-text-strong {
//           text-shadow: 0 0 20px rgba(255, 165, 0, 0.6),
//             0 0 30px rgba(255, 165, 0, 0.4);
//         }
//         .glow-text-orange {
//           text-shadow: 0 0 15px rgba(255, 165, 0, 0.8),
//             0 0 25px rgba(255, 165, 0, 0.5);
//         }
//         .glow-text-gradient {
//           filter: drop-shadow(0 0 10px rgba(255, 165, 0, 0.5));
//         }
//         .glow-dot {
//           box-shadow: 0 0 15px rgba(255, 165, 0, 0.8),
//             0 0 25px rgba(255, 165, 0, 0.5);
//         }
//         .glow-button {
//           box-shadow: 0 0 20px rgba(255, 165, 0, 0.3);
//         }
//         .glow-button:hover {
//           box-shadow: 0 0 30px rgba(255, 165, 0, 0.5),
//             0 0 40px rgba(255, 165, 0, 0.3);
//         }
//       `}</style>
//     </div>
//   );
// }
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

const heroImages = [
  "./kv.jpg",
  "./hotel.jpg",
  "/shwe.jpg",
  "/BONUS.jpg",
  "/hotel.png",
];

export default function Homepage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
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
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/70 to-gray-950/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-gray-950/40" />
        </div>

        {/* Technical Overlay Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border border-orange-400 rotate-45" />
          <div className="absolute bottom-40 right-32 w-24 h-24 border border-amber-400 rotate-12" />
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-orange-300 rounded-full" />
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
              <span className="text-orange-400 font-mono text-sm uppercase tracking-wider glow-text">
                Technical Competition
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 glow-text-strong">
              MindHack{" "}
              <span className="text-orange-400 glow-text-orange">2025</span>
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent mb-6 glow-text-gradient">
              The Ancient Revival
            </h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed max-w-2xl">
              Master the future of technology through{" "}
              <span className="text-orange-400 font-semibold">3D Design</span>,
              <span className="text-amber-400 font-semibold">
                {" "}
                Scratch Programming
              </span>
              , and
              <span className="text-orange-400 font-semibold">
                {" "}
                Robotics Engineering
              </span>
              . Compete for prestigious awards in this ultimate technical
              challenge.
            </p>
            <button className="backdrop-blur-sm bg-orange-500/20 hover:bg-orange-500/30 text-white text-lg px-8 py-3 font-semibold border border-orange-400/50 rounded-lg transition-all duration-300 flex items-center space-x-2 glow-button hover:shadow-lg hover:shadow-orange-500/25">
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
                  ? "bg-orange-400 scale-125 glow-dot"
                  : "bg-white/50 hover:bg-orange-400/70"
              }`}
            />
          ))}
        </div>
      </section>

      {/* What is MindHack + Competition Categories Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-orange-500/5 blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-amber-500/5 blur-3xl animate-pulse delay-1000" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          {/* What is MindHack */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
              className="flex items-center justify-center space-x-3 mb-6"
            >
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-orange-400" />
              <span className="text-orange-400 font-mono text-sm uppercase tracking-wider glow-text">
                About MindHack
              </span>
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-orange-400" />
            </motion.div>
            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false }}
              className="text-4xl md:text-5xl font-bold text-white mb-6 glow-text-strong"
            >
              What is{" "}
              <span className="text-orange-400 glow-text-orange">MindHack</span>
              ?
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
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-orange-400" />
              <span className="text-orange-400 font-mono text-sm uppercase tracking-wider glow-text">
                Competition Categories
              </span>
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-orange-400" />
            </motion.div>
            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false }}
              className="text-4xl md:text-5xl font-bold text-white mb-6 glow-text-strong"
            >
              Technical{" "}
              <span className="text-orange-400 glow-text-orange">
                Competitions
              </span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: FaMicrochip,
                title: "3D Designing & Modeling",
                desc: "Create stunning 3D models, architectural designs, and immersive visualizations using industry-standard software. Showcase your spatial creativity and technical precision in bringing digital concepts to life.",
                gradient: "from-orange-500/20 to-amber-500/20",
                iconColor: "text-orange-400",
                borderColor: "border-orange-400/30",
                glowColor: "shadow-orange-500/20",
              },
              {
                icon: FaCode,
                title: "Scratch Coding",
                desc: "Build interactive games, animations, and applications using visual programming. Perfect for beginners and experts alike to create engaging digital experiences that combine creativity with logical thinking.",
                gradient: "from-amber-500/20 to-yellow-500/20",
                iconColor: "text-amber-400",
                borderColor: "border-amber-400/30",
                glowColor: "shadow-amber-500/20",
              },
              {
                icon: FaBolt,
                title: "Electronics & Robotics",
                desc: "Design and build autonomous robots, IoT devices, and electronic circuits. Combine hardware engineering with intelligent programming for real-world solutions that bridge the physical and digital worlds.",
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
                viewport={{ once: false }}
                className="group cursor-pointer"
              >
                <div
                  className={`relative overflow-hidden rounded-3xl border ${item.borderColor} bg-gradient-to-br ${item.gradient} backdrop-blur-xl hover:scale-105 transition-all duration-500 hover:shadow-2xl ${item.glowColor} h-full`}
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
                    <div className="absolute top-4 right-4 w-32 h-32 border border-orange-400/20 rounded-full" />
                    <div className="absolute bottom-4 left-4 w-24 h-24 border border-orange-400/20 rotate-45" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-orange-400/10 rounded-full" />
                  </div>

                  <div className="p-8 text-center h-full flex flex-col relative z-10">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br from-gray-800/60 via-orange-800/20 to-gray-800/60 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border ${item.borderColor} hover:shadow-lg ${item.glowColor}`}
                    >
                      <item.icon className={`h-10 w-10 ${item.iconColor}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors duration-300">
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

      {/* Ancient Revival Section */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="601.JPG"
            alt="Cultural innovation background"
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
                MindHack serves as a groundbreaking fusion of ancient wisdom and
                modern innovation. Our mission is to bridge the gap between
                traditional knowledge systems and contemporary technological
                solutions.
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
      <section className="py-24 px-4 bg-gray-950 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
              className="flex items-center justify-center space-x-3 mb-6"
            >
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-orange-400" />
              <span className="text-orange-400 font-mono text-sm uppercase tracking-wider glow-text">
                Event Timeline
              </span>
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-orange-400" />
            </motion.div>
            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false }}
              className="text-4xl md:text-5xl font-bold text-white mb-4 glow-text-strong"
            >
              Competition{" "}
              <span className="text-orange-400 glow-text-orange">Timeline</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                phase: "Registration",
                date: "March 1, 2025",
                time: "9:00 AM",
                icon: FaUsers,
                color: "text-orange-300",
                bgColor: "bg-orange-300/10",
                borderColor: "border-orange-300/30",
                glowColor: "shadow-orange-300/20",
              },
              {
                phase: "On Boarding",
                date: "March 10, 2025",
                time: "10:00 AM",
                icon: FaBook,
                color: "text-orange-400",
                bgColor: "bg-orange-400/10",
                borderColor: "border-orange-400/30",
                glowColor: "shadow-orange-400/20",
              },
              {
                phase: "First Stage",
                date: "March 20, 2025",
                time: "9:00 AM",
                icon: FaRocket,
                color: "text-amber-400",
                bgColor: "bg-amber-400/10",
                borderColor: "border-amber-400/30",
                glowColor: "shadow-amber-400/20",
              },
              {
                phase: "Finalist Announcement",
                date: "March 21, 2025",
                time: "6:00 PM",
                icon: FaBullseye,
                color: "text-yellow-400",
                bgColor: "bg-yellow-400/10",
                borderColor: "border-yellow-400/30",
                glowColor: "shadow-yellow-400/20",
              },
              {
                phase: "Second Stage Final",
                date: "March 22, 2025",
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
                viewport={{ once: false }}
                className="group"
              >
                <div
                  className={`backdrop-blur-xl bg-gradient-to-br from-gray-900/40 via-orange-900/20 to-gray-900/40 border ${item.borderColor} hover:bg-gradient-to-br hover:from-gray-800/50 hover:via-orange-800/30 hover:to-gray-800/50 transition-all duration-500 group-hover:scale-105 h-full relative overflow-hidden rounded-2xl hover:shadow-2xl ${item.glowColor}`}
                >
                  <div
                    className={`absolute inset-0 ${item.bgColor} opacity-5`}
                  />
                  <div className="p-6 text-center h-full flex flex-col relative z-10">
                    <div className="mb-4">
                      <div className="text-sm text-white/70 font-mono">
                        {item.date}
                      </div>
                    </div>
                    <div
                      className={`w-20 h-20 bg-gradient-to-br from-gray-800/60 via-orange-800/20 to-gray-800/60 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 border ${item.borderColor} hover:shadow-lg ${item.glowColor}`}
                    >
                      <item.icon className={`h-10 w-10 ${item.color}`} />
                    </div>
                    <h3 className="text-lg font-bold text-white">
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
            alt="MindHack community background"
            className="w-full h-full object-cover object-center"
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
                Join a global community of innovators bridging ancient wisdom
                with modern technology through groundbreaking competitions and
                collaborations.
              </p>

              <div className="space-y-4">
                {[
                  "Network with like-minded creators worldwide",
                  "Access cutting-edge tools and resources",
                  "Compete for $10,000+ in prizes",
                  "Receive expert mentorship",
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
      <section className="py-24 bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-8 left-8 w-24 h-24 border-2 border-orange-400 rotate-45" />
          <div className="absolute bottom-8 right-8 w-32 h-32 border-2 border-amber-400 rounded-full" />
          <div className="absolute top-1/2 left-1/4 w-40 h-40 border border-orange-300 rotate-12" />
          <div className="absolute top-1/4 right-1/4 w-28 h-28 border border-amber-300 rounded-full" />
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 glow-text-strong">
              Ready to{" "}
              <span className="text-orange-400 glow-text-orange">Compete</span>?
            </h2>
            <p className="text-white/90 text-xl mb-12 max-w-4xl mx-auto leading-relaxed">
              Join MindHack 2025 and showcase your technical skills in 3D
              Design, Scratch Programming, and Robotics. Compete for $10,000+ in
              prizes and gain recognition from industry leaders in this ultimate
              technical challenge.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <button className="backdrop-blur-sm bg-orange-500/20 hover:bg-orange-500/30 text-white font-bold px-12 py-4 text-lg border border-orange-400/50 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 glow-button hover:shadow-2xl hover:shadow-orange-500/25">
                <span>Register Now</span>
                <FaChevronRight className="h-6 w-6" />
              </button>
              <button className="border border-orange-500/30 text-white hover:bg-orange-500/10 font-bold px-12 py-4 text-lg rounded-lg transition-all duration-300 hover:border-orange-400/50">
                Download Rules
              </button>
            </div>
            <div className="flex items-center justify-center space-x-12 text-white/60">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2 glow-text">
                  500+
                </div>
                <div className="text-sm uppercase tracking-wider">
                  Participants
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400 mb-2 glow-text">
                  2025
                </div>
                <div className="text-sm uppercase tracking-wider">Edition</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2 glow-text">
                  LIVE
                </div>
                <div className="text-sm uppercase tracking-wider">Status</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Past MindHack Highlights */}
      <section className="py-24 px-4 bg-gray-950 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
              className="flex items-center justify-center space-x-3 mb-6"
            >
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-orange-400" />
              <span className="text-orange-400 font-mono text-sm uppercase tracking-wider glow-text">
                Past Highlights
              </span>
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-orange-400" />
            </motion.div>
            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false }}
              className="text-4xl md:text-5xl font-bold text-white mb-6 glow-text-strong"
            >
              Past MindHack{" "}
              <span className="text-orange-400 glow-text-orange">
                Highlights
              </span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "./1.JPG",
              "./2.JPG",
              "./3.JPG",
              "./4.JPG",
              "./5.JPG",
              "./6.JPG",
              "./7.JPG",
              "./8.JPG",
            ].map((img, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: false }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl backdrop-blur-xl bg-gradient-to-br from-gray-900/40 via-orange-900/20 to-gray-900/40 border border-orange-500/20 hover:bg-gradient-to-br hover:from-gray-800/50 hover:via-orange-800/30 hover:to-gray-800/50 transition-all duration-500 group-hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20">
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
      <footer className="backdrop-blur-xl bg-gradient-to-br from-gray-900/20 via-orange-900/10 to-gray-900/20 border-t border-orange-500/20 py-16 px-4">
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
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800/50 backdrop-blur-sm border border-orange-500/20 rounded-full flex items-center justify-center hover:bg-orange-500/10 transition-colors cursor-pointer hover:shadow-lg hover:shadow-orange-500/20">
                  <span className="text-orange-400 text-sm">f</span>
                </div>
                <div className="w-10 h-10 bg-gray-800/50 backdrop-blur-sm border border-orange-500/20 rounded-full flex items-center justify-center hover:bg-orange-500/10 transition-colors cursor-pointer hover:shadow-lg hover:shadow-orange-500/20">
                  <span className="text-amber-400 text-sm">t</span>
                </div>
                <div className="w-10 h-10 bg-gray-800/50 backdrop-blur-sm border border-orange-500/20 rounded-full flex items-center justify-center hover:bg-orange-500/10 transition-colors cursor-pointer hover:shadow-lg hover:shadow-orange-500/20">
                  <span className="text-yellow-400 text-sm">in</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-6 glow-text-strong">
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
                    className="block text-white/70 hover:text-orange-400 transition-colors hover:glow-text"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-6 glow-text-strong">
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
                    className="block text-white/70 hover:text-orange-400 transition-colors hover:glow-text"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-6 glow-text-strong">
                Contact
              </h4>
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
            viewport={{ once: false }}
            className="border-t border-orange-500/20 mt-12 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-white/60 text-center md:text-left">
                © 2025 MindHack Technical Competition. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="text-white/60 hover:text-orange-400 transition-colors hover:glow-text"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-white/60 hover:text-orange-400 transition-colors hover:glow-text"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-white/60 hover:text-orange-400 transition-colors hover:glow-text"
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
