"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCheckCircle,
  FaSpinner,
  FaBirthdayCake,
  FaFacebook,
} from "react-icons/fa";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

export default function ParticipantRegistration() {
  const backend_domain_name =
    "https://www.mindhack-admin.z256600-ll9lz.ps02.zwhhosting.com";
  const navigate = useNavigate();
  const toHome = () => {
    navigate("/");
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
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

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
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

    if (!formData.age.trim()) {
      newErrors.age = "Age is required";
    } else if (
      isNaN(formData.age) ||
      Number.parseInt(formData.age) < 1 ||
      Number.parseInt(formData.age) > 120
    ) {
      newErrors.age = "Please enter a valid age";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      if (!validateForm()) return;

      setIsSubmitting(true);

      // Prepare data for submission
      console.log(formData);
      // return;
      const submitData = {
        name: formData.name,
        email: formData.email.trim().toLowerCase(),
        phone: formData.phone.trim(),
        age: formData.age,
        fbLink: formData.socialMedia,
      };

      // Make API call
      console.log(submitData);
      const response = await axios.post(
        `${backend_domain_name}/api/register`,
        submitData
      );
      console.log(response);
      // Check if response is successful
      if (response.status === 200 || response.status === 201) {
        setIsSuccess(true);
      }
    } catch (error) {
      let errorMessage = "An unexpected error occurred. Please try again.";

      if (error.response) {
        // Server responded with error status
        if (error.response.status === 400) {
          errorMessage =
            error.response.data?.message ||
            "Please check your input and try again.";
        } else if (error.response.status === 409) {
          errorMessage =
            "An account with this email or phone number already exists. Please use a different email and phone or try logging in.";
        } else if (error.response.status === 422) {
          errorMessage =
            "An account with this email or phone number already exists. Please use a different email and phone or try logging in.";
        } else if (error.response.status === 429) {
          errorMessage =
            "Too many registration attempts. Please wait a moment and try again.";
        } else if (error.response.status >= 500) {
          errorMessage = "Server error. Please try again later.";
        } else if (error.response.data?.message) {
          errorMessage = error.response.data.message;
        }
      } else if (error.request) {
        // Network error
        errorMessage =
          "Network error. Please check your connection and try again.";
      } else if (error.code === "ECONNABORTED") {
        errorMessage = "Request timeout. Please try again.";
      }
      alert(errorMessage);
    }
    setIsSubmitting(false);
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
            className="w-24 h-24 bg-gradient-to-br from-orange-400 to-amber-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-orange-500/50"
          >
            <FaCheckCircle className="h-12 w-12 text-white" />
          </motion.div>

          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-3xl font-bold text-white mb-4 glow-text-strong"
          >
            Registration Successful!
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-white/80 mb-8 leading-relaxed"
          >
            Welcome to MindHack 2025! We've received your registration and will
            contact you soon with further details.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            {/* <button
              onClick={() => {
                toHome();
              }}
              className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Return to Home
            </button> */}
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
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-orange-400" />
            <span className="text-orange-400 font-mono text-sm uppercase tracking-wider glow-text">
              Join as Participant
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-orange-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 glow-text-strong">
            Register for{" "}
            <span className="text-orange-400 glow-text-orange">
              MindHack 2025
            </span>
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            Join the ultimate technical competition and showcase your skills in
            3D Design, Scratch Programming, or Electronics & Robotics.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="backdrop-blur-xl bg-gradient-to-br from-gray-900/40 via-orange-900/20 to-gray-900/40 border border-orange-500/20 rounded-2xl p-8 shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="text-white font-semibold mb-2 flex items-center space-x-2"
                >
                  <FaUser className="h-4 w-4 text-orange-400" />
                  <span>Full Name *</span>
                </label>
                <input
                  required
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className={`w-full bg-gray-800/50 border border-orange-500/30 text-white placeholder-white/50 focus:border-orange-400 focus:outline-none rounded-md px-3 py-2 ${
                    errors.name ? "border-red-500" : ""
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-white font-semibold mb-2 flex items-center space-x-2"
                >
                  <FaEnvelope className="h-4 w-4 text-orange-400" />
                  <span>Email Address *</span>
                </label>
                <input
                  required
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className={`w-full bg-gray-800/50 border border-orange-500/30 text-white placeholder-white/50 focus:border-orange-400 focus:outline-none rounded-md px-3 py-2 ${
                    errors.email ? "border-red-500" : ""
                  }`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="phone"
                  className="text-white font-semibold mb-2 flex items-center space-x-2"
                >
                  <FaPhone className="h-4 w-4 text-orange-400" />
                  <span>Phone Number *</span>
                </label>
                <input
                  required
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className={`w-full bg-gray-800/50 border border-orange-500/30 text-white placeholder-white/50 focus:border-orange-400 focus:outline-none rounded-md px-3 py-2 ${
                    errors.phone ? "border-red-500" : ""
                  }`}
                  placeholder="+959xxxxxxxx or 09xxxxxxxx"
                />
                {errors.phone && (
                  <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="age"
                  className="text-white font-semibold mb-2 flex items-center space-x-2"
                >
                  <FaBirthdayCake className="h-4 w-4 text-orange-400" />
                  <span>Age *</span>
                </label>
                <input
                  id="age"
                  required
                  type="number"
                  value={formData.age}
                  onChange={(e) => handleInputChange("age", e.target.value)}
                  className={`w-full bg-gray-800/50 border border-orange-500/30 text-white placeholder-white/50 focus:border-orange-400 focus:outline-none rounded-md px-3 py-2 ${
                    errors.age ? "border-red-500" : ""
                  }`}
                  placeholder="Enter your age"
                  min="1"
                  max="120"
                />
                {errors.age && (
                  <p className="text-red-400 text-sm mt-1">{errors.age}</p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="socialMedia"
                className="text-white font-semibold mb-2 flex items-center space-x-2"
              >
                <FaFacebook className="h-4 w-4 text-orange-400" />
                <span>Social Media Link (Optional)</span>
              </label>
              <input
                id="socialMedia"
                type="url"
                required
                value={formData.socialMedia}
                onChange={(e) =>
                  handleInputChange("socialMedia", e.target.value)
                }
                className="w-full bg-gray-800/50 border border-orange-500/30 text-white placeholder-white/50 focus:border-orange-400 focus:outline-none rounded-md px-3 py-2"
                placeholder="Facebook or Telegram profile link"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center space-x-2">
                  <FaSpinner className="h-5 w-5 animate-spin" />
                  <span>Submitting...</span>
                </div>
              ) : (
                "Register for MindHack 2025"
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
