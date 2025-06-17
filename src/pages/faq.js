"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaChevronDown,
  FaChevronRight,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaCheckCircle,
  FaCommentAlt,
  FaPaperPlane,
  FaSpinner,
  FaExclamationTriangle,
  FaTimes,
  FaCheck,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("registration");
  const [openFAQ, setOpenFAQ] = useState(null);
  const [activeTab, setActiveTab] = useState("message");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [submissionState, setSubmissionState] = useState({
    isLoading: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
  });
  const [showSuccessAnimation, setShowSuccessAnimation] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);
  const formRef = useRef(null);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const faqCategories = {
    registration: {
      title: "Registration Process",
      icon: FaUser,
      faqs: [
        {
          question: "How do I register for MindHack 2025?",
          answer:
            "Registration is simple! Visit our registration page, fill out the required information including your age group, select your competition categories, and submit the form. You'll receive a confirmation email within 24 hours.",
        },
        {
          question: "What are the age requirements?",
          answer:
            "MindHack is open to participants aged 7-25, divided into three categories: Wizards (7-12 years), Heroes (13-17 years), and Masters (18-25 years). Each category has tailored challenges appropriate for the skill level.",
        },
        {
          question: "Is there a registration fee?",
          answer:
            "Registration for MindHack 2025 is completely free! We believe in making technology education accessible to all young innovators regardless of their financial background.",
        },
        {
          question: "Can I register for multiple categories?",
          answer:
            "Yes! You can participate in multiple categories (3D Design, Scratch Programming, Electronics & Robotics). However, you can only compete in one age group based on your actual age.",
        },
        {
          question: "What documents do I need for registration?",
          answer:
            "You'll need a valid ID for age verification, a recent photo, and contact information. For participants under 18, parental consent is required during the registration process.",
        },
      ],
    },
    categories: {
      title: "Event Categories",
      icon: FaCommentAlt,
      faqs: [
        {
          question: "What is the 3D Design & Modeling category?",
          answer:
            "This category focuses on creating stunning 3D models, architectural designs, and immersive visualizations using industry-standard software like Blender, Maya, or SketchUp. Projects are judged on creativity, technical skill, and innovation.",
        },
        {
          question:
            "What programming languages are allowed in Scratch Programming?",
          answer:
            "The Scratch Programming category primarily uses Scratch, a visual programming language. However, advanced participants may also use Python, JavaScript, or other beginner-friendly languages for more complex projects.",
        },
        {
          question: "What equipment is provided for Electronics & Robotics?",
          answer:
            "We provide basic Arduino kits, sensors, motors, and building materials. Participants can also bring their own components. A detailed equipment list will be shared with registered participants.",
        },
        {
          question: "Are there different difficulty levels within categories?",
          answer:
            "Yes! Each category has challenges tailored to different age groups. Wizards get foundational projects, Heroes tackle intermediate challenges, and Masters work on advanced, real-world applications.",
        },
        {
          question: "Can teams participate or is it individual only?",
          answer:
            "Both individual and team participation (up to 3 members) are allowed. Teams must be from the same age category and will compete against other teams, not individuals.",
        },
      ],
    },
    format: {
      title: "Event Format",
      icon: FaClock,
      faqs: [
        {
          question: "How long is the competition?",
          answer:
            "MindHack 2025 spans 3 days: Day 1 is onboarding and initial challenges, Day 2 focuses on project development and mentorship, and Day 3 features final presentations and the award ceremony.",
        },
        {
          question: "Is the event held online or in-person?",
          answer:
            "MindHack 2025 is a hybrid event. The main competition is held in-person in Yangon and Mandalay, with virtual participation options for remote areas. Online mentorship and resources are available throughout.",
        },
        {
          question: "What is the judging criteria?",
          answer:
            "Projects are evaluated on innovation (30%), technical execution (25%), presentation skills (20%), cultural relevance (15%), and teamwork/collaboration (10%). Detailed rubrics are provided to all participants.",
        },
        {
          question: "Are mentors available during the competition?",
          answer:
            "Yes! Industry experts and experienced developers serve as mentors throughout the event. They provide guidance, technical support, and feedback to help participants achieve their best work.",
        },
        {
          question: "What happens if I can't complete my project in time?",
          answer:
            "Don't worry! The focus is on learning and innovation, not just completion. Partial projects are accepted, and judges consider the thought process, problem-solving approach, and effort invested.",
        },
      ],
    },
    support: {
      title: "Support & Contact",
      icon: FaPhone,
      faqs: [
        {
          question: "Who can I contact for technical support?",
          answer:
            "Our technical support team is available via email at tech@mindhack.com or through our Discord community. During the event, on-site technical assistants are available for immediate help.",
        },
        {
          question: "How can parents/guardians stay updated?",
          answer:
            "We provide regular updates via email and our parent portal. Parents can also join our WhatsApp group for real-time updates during the event. Emergency contact numbers are provided to all families.",
        },
        {
          question: "What if I need to cancel my registration?",
          answer:
            "You can cancel your registration up to 7 days before the event through your participant portal. Since registration is free, there are no cancellation fees, but please notify us early to help with planning.",
        },
        {
          question: "Is accommodation provided for out-of-town participants?",
          answer:
            "We partner with local hostels and budget hotels to provide affordable accommodation options. A list of recommended places with special rates for MindHack participants is sent after registration confirmation.",
        },
        {
          question: "What COVID-19 safety measures are in place?",
          answer:
            "We follow all local health guidelines including sanitization stations, optional mask-wearing, and adequate spacing. Virtual participation options ensure everyone can join safely regardless of health concerns.",
        },
      ],
    },
  };

  const toggleFAQ = (categoryKey, faqIndex) => {
    const faqId = `${categoryKey}-${faqIndex}`;
    setOpenFAQ(openFAQ === faqId ? null : faqId);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "Full name is required";
    } else if (formData.name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      errors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      errors.subject = "Subject is required";
    } else if (formData.subject.trim().length < 5) {
      errors.subject = "Subject must be at least 5 characters";
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters";
    } else if (formData.message.length > 1000) {
      errors.message = "Message must be less than 1000 characters";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setSubmissionState({
      isLoading: true,
      isSuccess: false,
      isError: false,
      errorMessage: "",
    });

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setSubmissionState({
        isLoading: false,
        isSuccess: true,
        isError: false,
        errorMessage: "",
      });

      // Trigger success animation sequence
      setTimeout(() => setShowSuccessAnimation(true), 100);
      setTimeout(() => setAnimationStep(1), 600);
      setTimeout(() => setAnimationStep(2), 1100);
      setTimeout(() => setAnimationStep(3), 1400);
      setTimeout(() => setAnimationStep(4), 1700);
    } catch (error) {
      setSubmissionState({
        isLoading: false,
        isSuccess: false,
        isError: true,
        errorMessage: "Failed to send message. Please try again.",
      });
    }
  };

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
              Frequently Asked Questions
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-orange-400" />
          </motion.div>

          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 glow-text-strong leading-tight"
          >
            Frequently Asked{" "}
            <span className="text-orange-400 glow-text-orange">Questions</span>
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm xs:text-base sm:text-lg text-white/90 leading-relaxed max-w-3xl mx-auto"
          >
            Find answers to common questions about MindHack 2025. Can't find
            what you're looking for? Contact our support team below.
          </motion.p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 sm:py-24 px-4 bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 relative">
        <div className="max-w-4xl mx-auto">
          {/* Category Navigation */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          >
            {Object.entries(faqCategories).map(([key, category], index) => (
              <motion.button
                key={key}
                variants={staggerItem}
                onClick={() => setActiveCategory(key)}
                className={`p-4 rounded-xl border transition-all duration-300 ${
                  activeCategory === key
                    ? "bg-orange-500/20 border-orange-400/50 text-orange-400 glow-text"
                    : "bg-gray-800/50 border-gray-700/50 text-white/70 hover:bg-orange-500/10 hover:border-orange-400/30"
                }`}
              >
                <category.icon className="h-6 w-6 mx-auto mb-2" />
                <span className="text-sm font-medium">{category.title}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* FAQ Content */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {faqCategories[activeCategory].faqs.map((faq, index) => (
              <div
                key={index}
                className="backdrop-blur-xl bg-gradient-to-br from-gray-900/40 via-orange-900/20 to-gray-900/40 border border-orange-500/20 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(activeCategory, index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-orange-500/5 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{
                      rotate:
                        openFAQ === `${activeCategory}-${index}` ? 180 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronDown className="h-5 w-5 text-orange-400 flex-shrink-0" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openFAQ === `${activeCategory}-${index}` && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-white/80 leading-relaxed border-t border-orange-500/10">
                        <div className="pt-4">{faq.answer}</div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        id="contact-form"
        className="py-16 px-4 bg-gradient-to-b from-gray-950 to-gray-900"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Get in Touch with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
                  Mind Hack
                </span>
              </h2>
              <p className="text-white/70 mb-8">
                Whether you have questions about our programs, want to schedule
                a consultation, or are interested in partnership opportunities,
                we're here to help.
              </p>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-orange-500/20 mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center text-white">
                    <FaClock size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Our Response Time
                    </h3>
                    <p className="text-white/70">
                      We typically respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-orange-400" />
                    <span className="text-white/80">
                      Questions about programs: 2-4 hours
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-orange-400" />
                    <span className="text-white/80">
                      Technical support: 4-6 hours
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-orange-400" />
                    <span className="text-white/80">
                      Partnership inquiries: 1-2 business days
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
                <div className="flex gap-4 mb-6">
                  {[FaLinkedin, FaTwitter, FaFacebook, FaInstagram].map(
                    (Icon, index) => (
                      <a
                        key={index}
                        href="#"
                        className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                      >
                        <Icon size={18} />
                      </a>
                    )
                  )}
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <FaPhone className="mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-white/80">+95 (9) 123-456-789</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaEnvelope className="mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-white/80">info@mindhack.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaMapMarkerAlt className="mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-white/80">
                        Innovation Hub, Yangon, Myanmar
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              ref={formRef}
              className="bg-gray-800/50 backdrop-blur-sm rounded-3xl shadow-xl border border-orange-500/20 overflow-hidden"
            >
              <div className="flex border-b border-orange-500/20">
                <button
                  className={`flex-1 py-4 px-6 text-center font-medium ${
                    activeTab === "message"
                      ? "text-orange-400 border-b-2 border-orange-400"
                      : "text-white/70"
                  }`}
                  onClick={() => setActiveTab("message")}
                >
                  Send Message
                </button>
              </div>

              <div className="p-8">
                {/* Error Alert */}
                {submissionState.isError && (
                  <div className="mb-6 p-4 bg-red-900/50 border border-red-500/50 rounded-xl flex items-start gap-3">
                    <FaExclamationTriangle className="text-red-400 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="font-medium text-red-300 mb-1">
                        Submission Failed
                      </h4>
                      <p className="text-red-200 text-sm">
                        {submissionState.errorMessage}
                      </p>
                    </div>
                    <button
                      onClick={() =>
                        setSubmissionState((prev) => ({
                          ...prev,
                          isError: false,
                          errorMessage: "",
                        }))
                      }
                      className="text-red-400 hover:text-red-300"
                    >
                      <FaTimes />
                    </button>
                  </div>
                )}

                {/* General Form Error */}
                {formErrors.general && (
                  <div className="mb-6 p-4 bg-red-900/50 border border-red-500/50 rounded-xl flex items-start gap-3">
                    <FaExclamationTriangle className="text-red-400 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-red-200 text-sm">
                        {formErrors.general}
                      </p>
                    </div>
                    <button
                      onClick={() =>
                        setFormErrors((prev) => ({
                          ...prev,
                          general: undefined,
                        }))
                      }
                      className="text-red-400 hover:text-red-300"
                    >
                      <FaTimes />
                    </button>
                  </div>
                )}

                {!submissionState.isSuccess ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-white mb-2"
                      >
                        Full Name *
                      </label>
                      <div className="relative">
                        <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-400" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full pl-12 pr-4 py-4 bg-gray-700/50 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-white placeholder-white/50 ${
                            formErrors.name
                              ? "border-red-500 bg-red-900/20"
                              : "border-orange-500/30"
                          }`}
                          placeholder="Enter your full name"
                          disabled={submissionState.isLoading}
                        />
                      </div>
                      {formErrors.name && (
                        <p className="mt-2 text-sm text-red-400 flex items-center gap-2">
                          <FaExclamationTriangle size={12} />
                          {formErrors.name}
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-white mb-2"
                      >
                        Email Address *
                      </label>
                      <div className="relative">
                        <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-400" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full pl-12 pr-4 py-4 bg-gray-700/50 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-white placeholder-white/50 ${
                            formErrors.email
                              ? "border-red-500 bg-red-900/20"
                              : "border-orange-500/30"
                          }`}
                          placeholder="your.email@example.com"
                          disabled={submissionState.isLoading}
                        />
                      </div>
                      {formErrors.email && (
                        <p className="mt-2 text-sm text-red-400 flex items-center gap-2">
                          <FaExclamationTriangle size={12} />
                          {formErrors.email}
                        </p>
                      )}
                    </div>

                    {/* Subject Field */}
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-white mb-2"
                      >
                        Subject *
                      </label>
                      <div className="relative">
                        <FaCommentAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-400" />
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className={`w-full pl-12 pr-4 py-4 bg-gray-700/50 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-white placeholder-white/50 ${
                            formErrors.subject
                              ? "border-red-500 bg-red-900/20"
                              : "border-orange-500/30"
                          }`}
                          placeholder="What is your message about?"
                          disabled={submissionState.isLoading}
                        />
                      </div>
                      {formErrors.subject && (
                        <p className="mt-2 text-sm text-red-400 flex items-center gap-2">
                          <FaExclamationTriangle size={12} />
                          {formErrors.subject}
                        </p>
                      )}
                    </div>

                    {/* Message Field */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-white mb-2"
                      >
                        Message * ({formData.message.length}/1000)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className={`w-full px-4 py-4 bg-gray-700/50 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none text-white placeholder-white/50 ${
                          formErrors.message
                            ? "border-red-500 bg-red-900/20"
                            : "border-orange-500/30"
                        }`}
                        placeholder="Please provide details about your inquiry..."
                        disabled={submissionState.isLoading}
                        maxLength={1000}
                      ></textarea>
                      {formErrors.message && (
                        <p className="mt-2 text-sm text-red-400 flex items-center gap-2">
                          <FaExclamationTriangle size={12} />
                          {formErrors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={submissionState.isLoading}
                      className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white py-4 px-8 rounded-xl font-bold text-lg hover:from-orange-600 hover:to-amber-600 transition-all transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {submissionState.isLoading ? (
                        <>
                          <FaSpinner className="animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <FaPaperPlane />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                ) : (
                  /* Success Animation */
                  <div className="text-center py-12">
                    <div className="relative mb-8">
                      {/* Animated Success Icon */}
                      <div
                        className={`w-24 h-24 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center mx-auto transition-all duration-500 ${
                          showSuccessAnimation
                            ? "scale-100 opacity-100"
                            : "scale-0 opacity-0"
                        }`}
                      >
                        <FaCheckCircle className="text-white text-4xl" />
                      </div>

                      {/* Ripple Effect */}
                      {showSuccessAnimation && (
                        <>
                          <div className="absolute inset-0 w-24 h-24 mx-auto rounded-full bg-orange-200 animate-ping opacity-20"></div>
                          <div className="absolute inset-0 w-24 h-24 mx-auto rounded-full bg-amber-200 animate-ping opacity-20 animation-delay-200"></div>
                        </>
                      )}
                    </div>

                    {/* Success Message */}
                    <div
                      className={`transition-all duration-500 delay-300 ${
                        animationStep >= 1
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"
                      }`}
                    >
                      <h3 className="text-3xl font-bold text-white mb-4">
                        Message Sent Successfully! 🎉
                      </h3>
                      <p className="text-white/70 mb-8 text-lg">
                        Thank you for reaching out to Mind Hack. We've received
                        your message and will get back to you shortly.
                      </p>
                    </div>

                    {/* Progress Steps */}
                    <div
                      className={`bg-gradient-to-r from-orange-900/20 to-amber-900/20 border border-orange-500/30 rounded-2xl p-6 text-left transition-all duration-500 delay-500 ${
                        animationStep >= 2
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"
                      }`}
                    >
                      <p className="text-orange-400 font-bold mb-4 text-lg">
                        What happens next?
                      </p>
                      <div className="space-y-4">
                        <div
                          className={`flex items-center gap-4 transition-all duration-300 ${
                            animationStep >= 2 ? "opacity-100" : "opacity-50"
                          }`}
                        >
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center flex-shrink-0">
                            <FaCheck className="text-white text-sm" />
                          </div>
                          <span className="text-white/80">
                            Your message has been received and logged
                          </span>
                        </div>
                        <div
                          className={`flex items-center gap-4 transition-all duration-300 delay-200 ${
                            animationStep >= 3 ? "opacity-100" : "opacity-50"
                          }`}
                        >
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-sm font-bold">
                              2
                            </span>
                          </div>
                          <span className="text-white/80">
                            You'll receive a confirmation email within 5 minutes
                          </span>
                        </div>
                        <div
                          className={`flex items-center gap-4 transition-all duration-300 delay-400 ${
                            animationStep >= 4 ? "opacity-100" : "opacity-50"
                          }`}
                        >
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-sm font-bold">
                              3
                            </span>
                          </div>
                          <span className="text-white/80">
                            A specialist will contact you within 24 hours
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Additional Info */}
                    <div
                      className={`mt-6 p-4 bg-gray-800/50 border border-orange-500/20 rounded-xl transition-all duration-500 delay-700 ${
                        animationStep >= 4
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"
                      }`}
                    >
                      <p className="text-sm text-white/70">
                        <strong>Reference ID:</strong> MH-
                        {Date.now().toString().slice(-6)}
                      </p>
                      <p className="text-sm text-white/70 mt-1">
                        Keep this reference for your records
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

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
              Still have questions? Don't let that stop you! Join thousands of
              young innovators in Myanmar's most exciting tech competition. Our
              support team is here to help you every step of the way.
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
                <span>Contact Support</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
