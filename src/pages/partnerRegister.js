"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaBuilding,
  FaEnvelope,
  FaPhone,
  FaCheckCircle,
  FaSpinner,
  FaUsers,
  FaFacebook,
} from "react-icons/fa";

export default function PartnerRegistration() {
  const [formData, setFormData] = useState({
    organizationName: "",
    contactName: "",
    email: "",
    phone: "",
    socialMedia: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateMyanmarPhone = (phone) => {
    const myanmarPhoneRegex = /^(\+?95|0?9)\d{7,9}$/;
    return myanmarPhoneRegex.test(phone.replace(/\s+/g, ""));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.organizationName.trim()) {
      newErrors.organizationName = "Organization name is required";
    }

    if (!formData.contactName.trim()) {
      newErrors.contactName = "Contact person name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!validateMyanmarPhone(formData.phone)) {
      newErrors.phone =
        "Please enter a valid Myanmar phone number (e.g., +959xxxxxxxx or 09xxxxxxxx)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 flex items-center justify-center px-4">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-md"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            className="w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-amber-500/50"
          >
            <FaCheckCircle className="h-12 w-12 text-white" />
          </motion.div>

          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-3xl font-bold text-white mb-4 glow-text-strong"
          >
            Partnership Request Submitted!
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-white/80 mb-8 leading-relaxed"
          >
            Thank you for your interest in partnering with MindHack 2025! Our
            team will review your application and get back to you soon.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <button
              onClick={() => (window.location.href = "/")}
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Return to Home
            </button>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-amber-400" />
            <span className="text-amber-400 font-mono text-sm uppercase tracking-wider glow-text">
              Become a Partner
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-amber-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 glow-text-strong">
            Partner with{" "}
            <span className="text-amber-400 glow-text-orange">
              MindHack 2025
            </span>
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            Join us in empowering the next generation of innovators by providing
            resources, expertise, and support to our technical competition.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="backdrop-blur-xl bg-gradient-to-br from-gray-900/40 via-amber-900/20 to-gray-900/40 border border-amber-500/20 rounded-2xl p-8 shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="organizationName"
                  className="text-white font-semibold mb-2 flex items-center space-x-2"
                >
                  <FaBuilding className="h-4 w-4 text-amber-400" />
                  <span>Organization Name *</span>
                </label>
                <input
                  id="organizationName"
                  type="text"
                  value={formData.organizationName}
                  onChange={(e) =>
                    handleInputChange("organizationName", e.target.value)
                  }
                  className={`w-full bg-gray-800/50 border border-amber-500/30 text-white placeholder-white/50 focus:border-amber-400 focus:outline-none rounded-md px-3 py-2 ${
                    errors.organizationName ? "border-red-500" : ""
                  }`}
                  placeholder="Your organization name"
                />
                {errors.organizationName && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.organizationName}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contactName"
                  className="text-white font-semibold mb-2 flex items-center space-x-2"
                >
                  <FaUsers className="h-4 w-4 text-amber-400" />
                  <span>Contact Person *</span>
                </label>
                <input
                  id="contactName"
                  type="text"
                  value={formData.contactName}
                  onChange={(e) =>
                    handleInputChange("contactName", e.target.value)
                  }
                  className={`w-full bg-gray-800/50 border border-amber-500/30 text-white placeholder-white/50 focus:border-amber-400 focus:outline-none rounded-md px-3 py-2 ${
                    errors.contactName ? "border-red-500" : ""
                  }`}
                  placeholder="Contact person name"
                />
                {errors.contactName && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.contactName}
                  </p>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="email"
                  className="text-white font-semibold mb-2 flex items-center space-x-2"
                >
                  <FaEnvelope className="h-4 w-4 text-amber-400" />
                  <span>Email Address *</span>
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className={`w-full bg-gray-800/50 border border-amber-500/30 text-white placeholder-white/50 focus:border-amber-400 focus:outline-none rounded-md px-3 py-2 ${
                    errors.email ? "border-red-500" : ""
                  }`}
                  placeholder="contact@organization.com"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="text-white font-semibold mb-2 flex items-center space-x-2"
                >
                  <FaPhone className="h-4 w-4 text-amber-400" />
                  <span>Phone Number *</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className={`w-full bg-gray-800/50 border border-amber-500/30 text-white placeholder-white/50 focus:border-amber-400 focus:outline-none rounded-md px-3 py-2 ${
                    errors.phone ? "border-red-500" : ""
                  }`}
                  placeholder="+959xxxxxxxx or 09xxxxxxxx"
                />
                {errors.phone && (
                  <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="socialMedia"
                className="text-white font-semibold mb-2 flex items-center space-x-2"
              >
                <FaFacebook className="h-4 w-4 text-amber-400" />
                <span>Social Media Link (Optional)</span>
              </label>
              <input
                id="socialMedia"
                type="url"
                value={formData.socialMedia}
                onChange={(e) =>
                  handleInputChange("socialMedia", e.target.value)
                }
                className="w-full bg-gray-800/50 border border-amber-500/30 text-white placeholder-white/50 focus:border-amber-400 focus:outline-none rounded-md px-3 py-2"
                placeholder="Facebook or Telegram profile link"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center space-x-2">
                  <FaSpinner className="h-5 w-5 animate-spin" />
                  <span>Submitting...</span>
                </div>
              ) : (
                "Submit Partnership Application"
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
