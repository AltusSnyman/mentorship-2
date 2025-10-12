"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import ReCAPTCHA from "react-google-recaptcha";
import { Shield, CheckCircle, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function FormPage() {
  const router = useRouter();
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    recaptcha: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);

  // Validate email format
  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // Handle reCAPTCHA change
  const handleRecaptchaChange = (value: string | null) => {
    setRecaptchaValue(value);
    setErrors((prev) => ({ ...prev, recaptcha: "" }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Reset errors
    const newErrors = {
      fullName: "",
      email: "",
      recaptcha: "",
    };

    // Validate full name
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Please enter your full name";
    }

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Validate reCAPTCHA
    if (!recaptchaValue) {
      newErrors.recaptcha = "Please complete the CAPTCHA";
    }

    // Check if there are any errors
    if (newErrors.fullName || newErrors.email || newErrors.recaptcha) {
      setErrors(newErrors);
      return;
    }

    // Submit form
    setIsSubmitting(true);

    try {
      // Here you could send data to your backend/CRM
      // For now, we'll just simulate a delay and redirect
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Store lead info in localStorage (optional - for analytics)
      localStorage.setItem("leadInfo", JSON.stringify({
        fullName: formData.fullName,
        email: formData.email,
        timestamp: new Date().toISOString(),
      }));

      // Redirect to enrollment page
      router.push("/enroll");
    } catch (error) {
      console.error("Form submission error:", error);
      setErrors((prev) => ({
        ...prev,
        recaptcha: "Something went wrong. Please try again.",
      }));
      setIsSubmitting(false);
    }
  };

  // Get reCAPTCHA site key from environment variable
  // You need to set this in Netlify: NEXT_PUBLIC_RECAPTCHA_SITE_KEY
  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"; // Test key

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F9F9FB] via-[#F9F9FB] to-[#01F1EB]/10 flex items-center justify-center py-12 px-4">
      {/* Disclaimer Banner */}
      <div className="fixed top-0 left-0 right-0 bg-[#01355A] text-white py-2 px-4 text-center text-sm z-10">
        <p>
          <strong>Educational Program Only:</strong> Success depends on individual
          effort. No income or results guaranteed.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl mt-16"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#01F1EB]/20 rounded-full mb-4">
            <Shield className="w-8 h-8 text-[#01355A]" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#01355A] mb-4">
            Almost There! 🚀
          </h1>
          <p className="text-lg sm:text-xl text-[#267090]">
            Enter your details to secure your <strong>$97/month Founders Rate</strong>
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name Field */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-semibold text-[#01355A] mb-2"
              >
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="John Doe"
                className={`w-full px-4 py-3 border-2 rounded-lg text-[#01355A] placeholder-[#267090]/50 focus:outline-none focus:ring-2 focus:ring-[#01F1EB] transition-all ${
                  errors.fullName
                    ? "border-red-500"
                    : "border-[#267090]/30 focus:border-[#01F1EB]"
                }`}
              />
              {errors.fullName && (
                <div className="flex items-center gap-2 mt-2 text-sm text-red-600">
                  <AlertCircle className="w-4 h-4" />
                  <span>{errors.fullName}</span>
                </div>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-[#01355A] mb-2"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className={`w-full px-4 py-3 border-2 rounded-lg text-[#01355A] placeholder-[#267090]/50 focus:outline-none focus:ring-2 focus:ring-[#01F1EB] transition-all ${
                  errors.email
                    ? "border-red-500"
                    : "border-[#267090]/30 focus:border-[#01F1EB]"
                }`}
              />
              {errors.email && (
                <div className="flex items-center gap-2 mt-2 text-sm text-red-600">
                  <AlertCircle className="w-4 h-4" />
                  <span>{errors.email}</span>
                </div>
              )}
            </div>

            {/* reCAPTCHA */}
            <div>
              <div className="flex justify-center">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={recaptchaSiteKey}
                  onChange={handleRecaptchaChange}
                  theme="light"
                />
              </div>
              {errors.recaptcha && (
                <div className="flex items-center justify-center gap-2 mt-2 text-sm text-red-600">
                  <AlertCircle className="w-4 h-4" />
                  <span>{errors.recaptcha}</span>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 px-6 bg-gradient-to-r from-[#01355A] to-[#267090] text-white font-bold text-lg rounded-xl transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-3 ${
                isSubmitting ? "opacity-75 cursor-not-allowed" : "hover:opacity-90"
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <CheckCircle className="w-6 h-6" />
                  Continue to Enrollment
                </>
              )}
            </button>

            {/* Trust Badges */}
            <div className="text-center space-y-2 pt-4 border-t border-[#267090]/20">
              <div className="flex items-center justify-center gap-2 text-sm text-[#267090]">
                <Shield className="w-4 h-4" />
                <span>Your information is secure and will never be shared</span>
              </div>
              <p className="text-xs text-[#267090]/80">
                Protected by Google reCAPTCHA · No spam, ever
              </p>
            </div>
          </form>
        </div>

        {/* Back Link */}
        <div className="text-center mt-6">
          <Link
            href="/"
            className="text-sm text-[#267090] hover:text-[#01355A] underline transition-colors"
          >
            ← Back to main page
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
