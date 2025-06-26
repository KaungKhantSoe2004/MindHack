// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   FaUser,
//   FaEnvelope,
//   FaPhone,
//   FaCheckCircle,
//   FaSpinner,
//   FaBirthdayCake,
//   FaFacebook,
// } from "react-icons/fa";
// import axios from "axios";
// import { Navigate, useNavigate } from "react-router-dom";
// import { Helmet } from "react-helmet";

// export default function ParticipantRegistration() {
//   const backend_domain_name =
//     "https://www.mindhack-admin.z256600-ll9lz.ps02.zwhhosting.com";
//   const navigate = useNavigate();
//   const toHome = () => {
//     navigate("/");
//   };
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     age: "",
//     socialMedia: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSuccess, setIsSuccess] = useState(false);

//   const validateMyanmarPhone = (phone) => {
//     const myanmarPhoneRegex = /^(\+?95|0?9)\d{7,9}$/;
//     return myanmarPhoneRegex.test(phone.replace(/\s+/g, ""));
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.name.trim()) {
//       newErrors.name = "Name is required";
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Please enter a valid email address";
//     }

//     if (!formData.phone.trim()) {
//       newErrors.phone = "Phone number is required";
//     } else if (!validateMyanmarPhone(formData.phone)) {
//       newErrors.phone =
//         "Please enter a valid Myanmar phone number (e.g., +959xxxxxxxx or 09xxxxxxxx)";
//     }

//     if (!formData.age.trim()) {
//       newErrors.age = "Age is required";
//     } else if (
//       isNaN(formData.age) ||
//       Number.parseInt(formData.age) < 1 ||
//       Number.parseInt(formData.age) > 120
//     ) {
//       newErrors.age = "Please enter a valid age";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     try {
//       e.preventDefault();

//       if (!validateForm()) return;

//       setIsSubmitting(true);

//       // Prepare data for submission
//       console.log(formData);
//       // return;
//       const submitData = {
//         name: formData.name,
//         email: formData.email.trim().toLowerCase(),
//         phone: formData.phone.trim(),
//         age: formData.age,
//         fbLink: formData.socialMedia,
//       };

//       // Make API call
//       console.log(submitData);
//       const response = await axios.post(
//         `${backend_domain_name}/api/register`,
//         submitData
//       );
//       console.log(response);
//       // Check if response is successful
//       if (response.status === 200 || response.status === 201) {
//         setIsSuccess(true);
//       }
//     } catch (error) {
//       let errorMessage = "An unexpected error occurred. Please try again.";

//       if (error.response) {
//         // Server responded with error status
//         if (error.response.status === 400) {
//           errorMessage =
//             error.response.data?.message ||
//             "Please check your input and try again.";
//         } else if (error.response.status === 409) {
//           errorMessage =
//             "An account with this email or phone number already exists. Please use a different email and phone or try logging in.";
//         } else if (error.response.status === 422) {
//           errorMessage =
//             "An account with this email or phone number already exists. Please use a different email and phone or try logging in.";
//         } else if (error.response.status === 429) {
//           errorMessage =
//             "Too many registration attempts. Please wait a moment and try again.";
//         } else if (error.response.status >= 500) {
//           errorMessage = "Server error. Please try again later.";
//         } else if (error.response.data?.message) {
//           errorMessage = error.response.data.message;
//         }
//       } else if (error.request) {
//         // Network error
//         errorMessage =
//           "Network error. Please check your connection and try again.";
//       } else if (error.code === "ECONNABORTED") {
//         errorMessage = "Request timeout. Please try again.";
//       }
//       alert(errorMessage);
//     }
//     setIsSubmitting(false);
//   };

//   const handleInputChange = (field, value) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//     if (errors[field]) {
//       setErrors((prev) => ({ ...prev, [field]: "" }));
//     }
//   };

//   if (isSuccess) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 flex items-center justify-center px-4">
//         <Helmet>
//           <title>Participant Registration | Mindhack Tournament</title>
//           <meta
//             name="description"
//             content="Learn more about our team and mission."
//           />
//         </Helmet>
//         <motion.div
//           initial={{ scale: 0, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="text-center max-w-md"
//         >
//           <motion.div
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
//             className="w-24 h-24 bg-gradient-to-br from-orange-400 to-amber-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-orange-500/50"
//           >
//             <FaCheckCircle className="h-12 w-12 text-white" />
//           </motion.div>

//           <motion.h2
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.5, duration: 0.6 }}
//             className="text-3xl font-bold text-white mb-4 glow-text-strong"
//           >
//             Registration Successful!
//           </motion.h2>

//           <motion.p
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.7, duration: 0.6 }}
//             className="text-white/80 mb-8 leading-relaxed"
//           >
//             Welcome to MindHack 2025! We've received your registration and will
//             contact you soon with further details.
//           </motion.p>

//           <motion.div
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.9, duration: 0.6 }}
//           >
//             {/* <button
//               onClick={() => {
//                 toHome();
//               }}
//               className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
//             >
//               Return to Home
//             </button> */}
//           </motion.div>
//         </motion.div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 py-12 px-4">
//       <div className="max-w-2xl mx-auto">
//         <motion.div
//           initial={{ y: 50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-12"
//         >
//           <div className="flex items-center justify-center space-x-3 mb-6">
//             <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-orange-400" />
//             <span className="text-orange-400 font-mono text-sm uppercase tracking-wider glow-text">
//               Join as Participant
//             </span>
//             <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-orange-400" />
//           </div>
//           <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 glow-text-strong">
//             Register for{" "}
//             <span className="text-orange-400 glow-text-orange">
//               MindHack 2025
//             </span>
//           </h1>
//           <p className="text-white/70 text-lg leading-relaxed">
//             Join the ultimate technical competition and showcase your skills in
//             3D Design, Programming, or Electronics & Robotics.
//           </p>
//         </motion.div>

//         <motion.div
//           initial={{ y: 50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="backdrop-blur-xl bg-gradient-to-br from-gray-900/40 via-orange-900/20 to-gray-900/40 border border-orange-500/20 rounded-2xl p-8 shadow-2xl"
//         >
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="grid md:grid-cols-2 gap-6">
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="text-white font-semibold mb-2 flex items-center space-x-2"
//                 >
//                   <FaUser className="h-4 w-4 text-orange-400" />
//                   <span>Full Name *</span>
//                 </label>
//                 <input
//                   required
//                   id="name"
//                   type="text"
//                   value={formData.name}
//                   onChange={(e) => handleInputChange("name", e.target.value)}
//                   className={`w-full bg-gray-800/50 border border-orange-500/30 text-white placeholder-white/50 focus:border-orange-400 focus:outline-none rounded-md px-3 py-2 ${
//                     errors.name ? "border-red-500" : ""
//                   }`}
//                   placeholder="Enter your full name"
//                 />
//                 {errors.name && (
//                   <p className="text-red-400 text-sm mt-1">{errors.name}</p>
//                 )}
//               </div>

//               <div>
//                 <label
//                   htmlFor="email"
//                   className="text-white font-semibold mb-2 flex items-center space-x-2"
//                 >
//                   <FaEnvelope className="h-4 w-4 text-orange-400" />
//                   <span>Email Address *</span>
//                 </label>
//                 <input
//                   required
//                   id="email"
//                   type="email"
//                   value={formData.email}
//                   onChange={(e) => handleInputChange("email", e.target.value)}
//                   className={`w-full bg-gray-800/50 border border-orange-500/30 text-white placeholder-white/50 focus:border-orange-400 focus:outline-none rounded-md px-3 py-2 ${
//                     errors.email ? "border-red-500" : ""
//                   }`}
//                   placeholder="your.email@example.com"
//                 />
//                 {errors.email && (
//                   <p className="text-red-400 text-sm mt-1">{errors.email}</p>
//                 )}
//               </div>
//             </div>

//             <div className="grid md:grid-cols-2 gap-6">
//               <div>
//                 <label
//                   htmlFor="phone"
//                   className="text-white font-semibold mb-2 flex items-center space-x-2"
//                 >
//                   <FaPhone className="h-4 w-4 text-orange-400" />
//                   <span>Phone Number *</span>
//                 </label>
//                 <input
//                   required
//                   id="phone"
//                   type="tel"
//                   value={formData.phone}
//                   onChange={(e) => handleInputChange("phone", e.target.value)}
//                   className={`w-full bg-gray-800/50 border border-orange-500/30 text-white placeholder-white/50 focus:border-orange-400 focus:outline-none rounded-md px-3 py-2 ${
//                     errors.phone ? "border-red-500" : ""
//                   }`}
//                   placeholder="+959xxxxxxxx or 09xxxxxxxx"
//                 />
//                 {errors.phone && (
//                   <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
//                 )}
//               </div>

//               <div>
//                 <label
//                   htmlFor="age"
//                   className="text-white font-semibold mb-2 flex items-center space-x-2"
//                 >
//                   <FaBirthdayCake className="h-4 w-4 text-orange-400" />
//                   <span>Age *</span>
//                 </label>
//                 <input
//                   id="age"
//                   required
//                   type="number"
//                   value={formData.age}
//                   onChange={(e) => handleInputChange("age", e.target.value)}
//                   className={`w-full bg-gray-800/50 border border-orange-500/30 text-white placeholder-white/50 focus:border-orange-400 focus:outline-none rounded-md px-3 py-2 ${
//                     errors.age ? "border-red-500" : ""
//                   }`}
//                   placeholder="Enter your age"
//                   min="1"
//                   max="120"
//                 />
//                 {errors.age && (
//                   <p className="text-red-400 text-sm mt-1">{errors.age}</p>
//                 )}
//               </div>
//             </div>

//             <div>
//               <label
//                 htmlFor="socialMedia"
//                 className="text-white font-semibold mb-2 flex items-center space-x-2"
//               >
//                 <FaFacebook className="h-4 w-4 text-orange-400" />
//                 <span>Social Media Link (Optional)</span>
//               </label>
//               <input
//                 id="socialMedia"
//                 type="url"
//                 required
//                 value={formData.socialMedia}
//                 onChange={(e) =>
//                   handleInputChange("socialMedia", e.target.value)
//                 }
//                 className="w-full bg-gray-800/50 border border-orange-500/30 text-white placeholder-white/50 focus:border-orange-400 focus:outline-none rounded-md px-3 py-2"
//                 placeholder="Facebook or Telegram profile link"
//               />
//             </div>

//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               {isSubmitting ? (
//                 <div className="flex items-center justify-center space-x-2">
//                   <FaSpinner className="h-5 w-5 animate-spin" />
//                   <span>Submitting...</span>
//                 </div>
//               ) : (
//                 "Register for MindHack 2025"
//               )}
//             </button>
//           </form>
//         </motion.div>
//       </div>
//     </div>
//   );
// }
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
  FaSchool,
  FaUsers,
  FaTshirt,
  FaCamera,
  FaCode,
  FaMicrochip,
  FaCube,
} from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function ParticipantRegistration() {
  const backend_domain_name =
    "https://www.mindhack-admin.z256600-ll9lz.ps02.zwhhosting.com";
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    ageGroup: "",
    category: "",
    groupName: "",
    school: "",
    schoolName: "", // Optional school name input
    platform: "",
    campus: "",
    member1Name: "",
    member1Birthday: "",
    member1School: "",
    member1Phone: "",
    member1Email: "",
    member1ParentName: "",
    member1ParentPhone: "",
    member1TshirtSize: "",
    member1Photo: null,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const ageGroups = [
    { value: "A", label: "Wizards (7yrs - 10yrs)" },
    { value: "B", label: "Heroes (11yrs - 14yrs)" },
    { value: "C", label: "Masters (15yrs - 17yrs)" },
  ];

  const categories = [
    { value: "A", label: "Coding", icon: <FaCode className="mr-2" /> },
    { value: "B", label: "3D design", icon: <FaCube className="mr-2" /> },
    {
      value: "C",
      label: "Electronics",
      icon: <FaMicrochip className="mr-2" />,
    },
  ];

  const schools = [
    "CIY.CLUB",
    "Shining Stars - Ma Thwe - Private High School",
    "The First Private School",
    "Parami Private High School",
    "Yarmanya Tansaung Primary School",
    "Pinma Dual Program Private School",
    "MISY - Mandalay",
    "SCIS - Stanford Canadian International School",
    "Treasure Net Center",
    "Tara International School",
    "KIS",
    "EMPS",
    "French School (LFIR)",
    "MISY - Yangon",
    "KMD",
    "CAE (NPT)",
    "CAE (MDY)",
    "KBTC International School",
    "HCIS (MDY)",
    "HCIS (Hpa An)",
    "ILBC",
    "NIEC",
    "Other",
  ];

  const campuses = [
    "YGN-TimeCity Campus",
    "YGN-TimeMall Campus",
    "YGN-Shwe Moe Kaung Campus",
    "YGN-Thingangyun Campus",
    "YGN-North Dagon Campus",
    "MDY Campus",
    "PyinOoLwin Campus",
    "ShweBo Campus",
    "NayPyiTaw Campus",
    "MawLaMyine Campus",
    "Taunggyi Campus",
    "HpaAn Campus",
    "Tachileik Campus",
    "Online",
  ];

  const tshirtSizes = [
    { value: "A", label: "SS" },
    { value: "B", label: "S" },
    { value: "C", label: "M" },
    { value: "D", label: "L" },
    { value: "E", label: "XL" },
    { value: "F", label: "2XL" },
  ];

  const validateMyanmarPhone = (phone) => {
    const myanmarPhoneRegex = /^(\+?95|0?9)\d{7,9}$/;
    return myanmarPhoneRegex.test(phone.replace(/\s+/g, ""));
  };

  const validateForm = () => {
    const newErrors = {};

    // Competition details validation
    if (!formData.ageGroup) newErrors.ageGroup = "Age group is required";
    if (!formData.category) newErrors.category = "Category is required";
    if (!formData.groupName.trim())
      newErrors.groupName = "Group name is required";
    if (!formData.school) newErrors.school = "School is required";
    if (!formData.platform.trim()) newErrors.platform = "Platform is required";
    if (!formData.campus) newErrors.campus = "Campus is required";

    // Member 1 validation
    if (!formData.member1Name.trim())
      newErrors.member1Name = "Member name is required";
    if (!formData.member1Birthday)
      newErrors.member1Birthday = "Birthday is required";
    if (!formData.member1School.trim())
      newErrors.member1School = "School is required";
    if (!formData.member1Phone.trim())
      newErrors.member1Phone = "Phone is required";

    if (!formData.member1Email.trim())
      newErrors.member1Email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.member1Email))
      newErrors.member1Email = "Invalid email";
    if (!formData.member1ParentName.trim())
      newErrors.member1ParentName = "Parent name is required";
    if (!formData.member1ParentPhone.trim())
      newErrors.member1ParentPhone = "Parent phone is required";
    else if (!validateMyanmarPhone(formData.member1ParentPhone))
      newErrors.member1ParentPhone = "Invalid Myanmar phone";
    if (!formData.member1TshirtSize)
      newErrors.member1TshirtSize = "T-shirt size is required";
    if (!formData.member1Photo) {
      newErrors.member1Photo = "Photo is required";
    } else {
      // Validate image type
      const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
      if (!allowedTypes.includes(formData.member1Photo.type)) {
        newErrors.member1Photo = "Only JPG, JPEG, or PNG files are allowed";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const submitData = {
        ...formData,
        // Include the optional school name if provided
        school:
          formData.school === "Other" && formData.schoolName
            ? formData.schoolName
            : formData.school,
      };
      console.log(submitData);
      return;
      const response = await axios.post(
        `${backend_domain_name}/api/register`,
        submitData
      );

      if (response.status === 200 || response.status === 201) {
        setIsSuccess(true);
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred during registration. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleInputChange("member1Photo", file);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 flex items-center justify-center px-4">
        <Helmet>
          <title>Registration Successful | Mindhack Tournament</title>
        </Helmet>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center max-w-md"
        >
          <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-amber-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-orange-500/50">
            <FaCheckCircle className="h-12 w-12 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Registration Successful!
          </h2>
          <p className="text-white/80 mb-8">
            Thank you for registering for MindHack 2025! We'll contact you with
            further details.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-orange-400" />
            <span className="text-orange-400 font-mono text-sm uppercase tracking-wider">
              Team Registration
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-orange-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Register for <span className="text-orange-400">MindHack 2025</span>
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            Join the ultimate technical competition and showcase your skills.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="backdrop-blur-xl bg-gradient-to-br from-gray-900/40 via-orange-900/20 to-gray-900/40 border border-orange-500/20 rounded-2xl p-8 shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Competition Details Section */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-orange-400 border-b border-orange-500/30 pb-2">
                Competition Details
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-white font-semibold mb-2">
                    Choose an age group *
                  </label>
                  <div className="space-y-2">
                    {ageGroups.map((group) => (
                      <label
                        key={group.value}
                        className="flex items-center space-x-3 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="ageGroup"
                          checked={formData.ageGroup === group.value}
                          onChange={() =>
                            handleInputChange("ageGroup", group.value)
                          }
                          className="text-orange-500 focus:ring-orange-500"
                        />
                        <span className="text-white">{group.label}</span>
                      </label>
                    ))}
                  </div>
                  {errors.ageGroup && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.ageGroup}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-white font-semibold mb-2">
                    Choose your category *
                  </label>
                  <div className="space-y-2">
                    {categories.map((cat) => (
                      <label
                        key={cat.value}
                        className="flex items-center space-x-3 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="category"
                          checked={formData.category === cat.value}
                          onChange={() =>
                            handleInputChange("category", cat.value)
                          }
                          className="text-orange-500 focus:ring-orange-500"
                        />
                        <span className="text-white flex items-center">
                          {cat.icon} {cat.label}
                        </span>
                      </label>
                    ))}
                  </div>
                  {errors.category && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.category}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="text-white font-semibold mb-2 flex items-center">
                  <FaUsers className="h-4 w-4 text-orange-400 mr-2" />
                  Group Name *
                </label>
                <input
                  value={formData.groupName}
                  onChange={(e) =>
                    handleInputChange("groupName", e.target.value)
                  }
                  className={`w-full bg-gray-800/50 border ${
                    errors.groupName ? "border-red-500" : "border-orange-500/30"
                  } text-white rounded-md px-3 py-2`}
                  placeholder="Your team/group name"
                />
                {errors.groupName && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.groupName}
                  </p>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-white font-semibold mb-2 flex items-center">
                    <FaSchool className="h-4 w-4 text-orange-400 mr-2" />
                    Which school are you from? *
                  </label>
                  <select
                    value={formData.school}
                    onChange={(e) =>
                      handleInputChange("school", e.target.value)
                    }
                    className={`w-full bg-gray-800/50 border ${
                      errors.school ? "border-red-500" : "border-orange-500/30"
                    } text-white rounded-md px-3 py-2`}
                  >
                    <option value="">Select your school</option>
                    {schools.map((school) => (
                      <option key={school} value={school}>
                        {school}
                      </option>
                    ))}
                  </select>
                  {errors.school && (
                    <p className="text-red-400 text-sm mt-1">{errors.school}</p>
                  )}
                </div>

                <div>
                  <label className="text-white font-semibold mb-2">
                    School Name (Optional)
                  </label>
                  <input
                    value={formData.schoolName}
                    onChange={(e) =>
                      handleInputChange("schoolName", e.target.value)
                    }
                    className="w-full bg-gray-800/50 border border-orange-500/30 text-white rounded-md px-3 py-2"
                    placeholder="Enter school name if not listed"
                    disabled={formData.school !== "Other"}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-white font-semibold mb-2">
                    Which platform are you using? (e.g., TinkerCAD, Scratch,
                    etc) *
                  </label>
                  <input
                    value={formData.platform}
                    onChange={(e) =>
                      handleInputChange("platform", e.target.value)
                    }
                    className={`w-full bg-gray-800/50 border ${
                      errors.platform
                        ? "border-red-500"
                        : "border-orange-500/30"
                    } text-white rounded-md px-3 py-2`}
                    placeholder="Platform name"
                  />
                  {errors.platform && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.platform}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-white font-semibold mb-2">
                    Which campus will you come to for camp and trainings? *
                  </label>
                  <select
                    value={formData.campus}
                    onChange={(e) =>
                      handleInputChange("campus", e.target.value)
                    }
                    className={`w-full bg-gray-800/50 border ${
                      errors.campus ? "border-red-500" : "border-orange-500/30"
                    } text-white rounded-md px-3 py-2`}
                  >
                    <option value="">Select campus</option>
                    {campuses.map((campus) => (
                      <option key={campus} value={campus}>
                        {campus}
                      </option>
                    ))}
                  </select>
                  {errors.campus && (
                    <p className="text-red-400 text-sm mt-1">{errors.campus}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Team Member 1 Section */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-orange-400 border-b border-orange-500/30 pb-2">
                Team Member 1 Details
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-white font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    value={formData.member1Name}
                    onChange={(e) =>
                      handleInputChange("member1Name", e.target.value)
                    }
                    className={`w-full bg-gray-800/50 border ${
                      errors.member1Name
                        ? "border-red-500"
                        : "border-orange-500/30"
                    } text-white rounded-md px-3 py-2`}
                    placeholder="Member's full name"
                  />
                  {errors.member1Name && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.member1Name}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-white font-semibold mb-2">
                    Birthday *
                  </label>
                  <input
                    type="date"
                    value={formData.member1Birthday}
                    onChange={(e) =>
                      handleInputChange("member1Birthday", e.target.value)
                    }
                    className={`w-full bg-gray-800/50 border ${
                      errors.member1Birthday
                        ? "border-red-500"
                        : "border-orange-500/30"
                    } text-white rounded-md px-3 py-2`}
                  />
                  {errors.member1Birthday && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.member1Birthday}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-white font-semibold mb-2">
                    Name of your school *
                  </label>
                  <input
                    value={formData.member1School}
                    onChange={(e) =>
                      handleInputChange("member1School", e.target.value)
                    }
                    className={`w-full bg-gray-800/50 border ${
                      errors.member1School
                        ? "border-red-500"
                        : "border-orange-500/30"
                    } text-white rounded-md px-3 py-2`}
                    placeholder="School name"
                  />
                  {errors.member1School && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.member1School}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-white font-semibold mb-2">
                    Phone Number *
                  </label>
                  <input
                    value={formData.member1Phone}
                    onChange={(e) =>
                      handleInputChange("member1Phone", e.target.value)
                    }
                    className={`w-full bg-gray-800/50 border ${
                      errors.member1Phone
                        ? "border-red-500"
                        : "border-orange-500/30"
                    } text-white rounded-md px-3 py-2`}
                    placeholder="+959xxxxxxxx or 09xxxxxxxx"
                  />
                  {errors.member1Phone && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.member1Phone}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-white font-semibold mb-2">
                    Email address *
                  </label>
                  <input
                    type="email"
                    value={formData.member1Email}
                    onChange={(e) =>
                      handleInputChange("member1Email", e.target.value)
                    }
                    className={`w-full bg-gray-800/50 border ${
                      errors.member1Email
                        ? "border-red-500"
                        : "border-orange-500/30"
                    } text-white rounded-md px-3 py-2`}
                    placeholder="member@example.com"
                  />
                  {errors.member1Email && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.member1Email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-white font-semibold mb-2">
                    Parent Name *
                  </label>
                  <input
                    value={formData.member1ParentName}
                    onChange={(e) =>
                      handleInputChange("member1ParentName", e.target.value)
                    }
                    className={`w-full bg-gray-800/50 border ${
                      errors.member1ParentName
                        ? "border-red-500"
                        : "border-orange-500/30"
                    } text-white rounded-md px-3 py-2`}
                    placeholder="Parent/guardian name"
                  />
                  {errors.member1ParentName && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.member1ParentName}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-white font-semibold mb-2">
                    Parent Phone Number *
                  </label>
                  <input
                    value={formData.member1ParentPhone}
                    onChange={(e) =>
                      handleInputChange("member1ParentPhone", e.target.value)
                    }
                    className={`w-full bg-gray-800/50 border ${
                      errors.member1ParentPhone
                        ? "border-red-500"
                        : "border-orange-500/30"
                    } text-white rounded-md px-3 py-2`}
                    placeholder="+959xxxxxxxx or 09xxxxxxxx"
                  />
                  {errors.member1ParentPhone && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.member1ParentPhone}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-white font-semibold mb-2">
                    T-shirt size *
                  </label>
                  <select
                    value={formData.member1TshirtSize}
                    onChange={(e) =>
                      handleInputChange("member1TshirtSize", e.target.value)
                    }
                    className={`w-full bg-gray-800/50 border ${
                      errors.member1TshirtSize
                        ? "border-red-500"
                        : "border-orange-500/30"
                    } text-white rounded-md px-3 py-2`}
                  >
                    <option value="">Select size</option>
                    {tshirtSizes.map((size) => (
                      <option key={size.value} value={size.value}>
                        {size.label}
                      </option>
                    ))}
                  </select>
                  {errors.member1TshirtSize && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.member1TshirtSize}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="text-white font-semibold mb-2 flex items-center">
                  <FaCamera className="h-4 w-4 text-orange-400 mr-2" />
                  Submit your picture for ID (White shirt on blank background) *
                </label>
                <input
                  type="file"
                  accept="image/jpeg, image/jpg, image/png"
                  onChange={handleFileChange}
                  className={`w-full bg-gray-800/50 border ${
                    errors.member1Photo
                      ? "border-red-500"
                      : "border-orange-500/30"
                  } text-white rounded-md px-3 py-2`}
                />
                {errors.member1Photo && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.member1Photo}
                  </p>
                )}
                {formData.member1Photo && (
                  <p className="text-green-400 text-sm mt-2">
                    Photo selected: {formData.member1Photo.name}
                  </p>
                )}
                <p className="text-white/50 text-sm mt-1">
                  Accepted formats: JPG, JPEG, PNG
                </p>
              </div>
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
