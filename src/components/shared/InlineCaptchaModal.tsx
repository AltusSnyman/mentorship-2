"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";
import { Shield, CheckCircle, AlertCircle, X } from "lucide-react";

interface InlineCaptchaModalProps {
  isOpen: boolean;
  onClose: () => void;
  onVerified: (token: string) => void;
  ctaSource?: string;
}

export default function InlineCaptchaModal({
  isOpen,
  onClose,
  onVerified,
  ctaSource = "Unknown CTA",
}: InlineCaptchaModalProps) {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);

  const recaptchaSiteKey =
    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ||
    "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"; // Test key

  const handleRecaptchaChange = (value: string | null) => {
    setRecaptchaValue(value);
    setError("");
  };

  const handleVerify = async () => {
    if (!recaptchaValue) {
      setError("Please complete the CAPTCHA verification");
      return;
    }

    setIsVerifying(true);
    setError("");

    try {
      // Call parent's onVerified callback with token
      await onVerified(recaptchaValue);
    } catch (err) {
      console.error("Verification error:", err);
      setError("Verification failed. Please try again.");
      setIsVerifying(false);

      // Reset reCAPTCHA
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
        setRecaptchaValue(null);
      }
    }
  };

  const handleClose = () => {
    if (!isVerifying) {
      setRecaptchaValue(null);
      setError("");
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 sm:p-8 relative">
              {/* Close Button */}
              {!isVerifying && (
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 text-[#267090] hover:text-[#01355A] transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              )}

              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#01F1EB]/20 rounded-full">
                  <Shield className="w-8 h-8 text-[#01355A]" />
                </div>
              </div>

              {/* Header */}
              <h3 className="text-2xl sm:text-3xl font-bold text-[#01355A] text-center mb-2">
                Quick Security Check
              </h3>
              <p className="text-base text-[#267090] text-center mb-6">
                Verify you're human to secure your <strong>Founders Rate</strong>
              </p>

              {/* reCAPTCHA */}
              <div className="flex justify-center mb-6">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={recaptchaSiteKey}
                  onChange={handleRecaptchaChange}
                  theme="light"
                />
              </div>

              {/* Error Message */}
              {error && (
                <div className="flex items-center justify-center gap-2 mb-4 text-sm text-red-600">
                  <AlertCircle className="w-4 h-4" />
                  <span>{error}</span>
                </div>
              )}

              {/* CTA Source Info */}
              <p className="text-xs text-[#267090]/60 text-center mb-4">
                Source: {ctaSource}
              </p>

              {/* Verify Button */}
              <button
                onClick={handleVerify}
                disabled={!recaptchaValue || isVerifying}
                className={`w-full py-4 px-6 bg-gradient-to-r from-[#01355A] to-[#267090] text-white font-bold text-lg rounded-xl transition-all transform shadow-lg flex items-center justify-center gap-3 ${
                  !recaptchaValue || isVerifying
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:scale-105 hover:opacity-90"
                }`}
              >
                {isVerifying ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Verifying...
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-6 h-6" />
                    Continue to Enrollment
                  </>
                )}
              </button>

              {/* Trust Badge */}
              <div className="mt-4 pt-4 border-t border-[#267090]/20">
                <div className="flex items-center justify-center gap-2 text-xs text-[#267090]/80">
                  <Shield className="w-3 h-3" />
                  <span>Protected by Google reCAPTCHA</span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
