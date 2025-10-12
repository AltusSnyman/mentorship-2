"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";
import { useCountdown } from "@/hooks/useCountdown";
import { STORAGE_KEYS } from "@/lib/constants";

export default function ExitPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const { timeLeft, mounted } = useCountdown({ updateInterval: 60000 });

  useEffect(() => {

    // Exit intent detection
    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse is leaving from top of page and popup hasn't been shown
      if (e.clientY <= 0 && !sessionStorage.getItem(STORAGE_KEYS.exitPopupShown)) {
        setShowPopup(true);
        sessionStorage.setItem(STORAGE_KEYS.exitPopupShown, "true");
      }
    };

    // Mobile: detect back button or close tab attempt
    const handleBeforeUnload = () => {
      if (!sessionStorage.getItem(STORAGE_KEYS.exitPopupShown)) {
        setShowPopup(true);
        sessionStorage.setItem(STORAGE_KEYS.exitPopupShown, "true");
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {showPopup && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 z-[9999] backdrop-blur-sm"
          />

          {/* Popup Container - Centered */}
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-2rem)] sm:w-full max-w-2xl z-[10000]">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto w-full">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
                aria-label="Close popup"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500" />
              </button>

              {/* Content */}
              <div className="p-6 sm:p-8 md:p-12">
                {/* Headline */}
                <div className="text-center mb-6">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#01355A] mb-4">
                    ⏰ Wait! Don't Miss the Founders Rate
                  </h2>
                  <p className="text-base sm:text-lg text-[#267090]">
                    Lock in $97/month before it doubles to $197/month
                  </p>
                </div>

                {/* Countdown Timer */}
                <div className="bg-gradient-to-r from-[#01355A] to-[#267090] text-white p-4 sm:p-6 rounded-xl mb-6">
                  <p className="text-center text-sm sm:text-base mb-3 font-semibold">
                    ⏰ Founders Rate ends in:
                  </p>
                  <div className="flex items-center justify-center gap-2 sm:gap-4 text-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 sm:p-3 min-w-[60px] sm:min-w-[80px]">
                      <div className="text-2xl sm:text-3xl md:text-4xl font-bold tabular-nums">
                        {String(timeLeft.days).padStart(2, "0")}
                      </div>
                      <div className="text-xs sm:text-sm uppercase opacity-80">Days</div>
                    </div>
                    <div className="text-xl sm:text-2xl font-bold opacity-70">:</div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 sm:p-3 min-w-[60px] sm:min-w-[80px]">
                      <div className="text-2xl sm:text-3xl md:text-4xl font-bold tabular-nums">
                        {String(timeLeft.hours).padStart(2, "0")}
                      </div>
                      <div className="text-xs sm:text-sm uppercase opacity-80">Hours</div>
                    </div>
                    <div className="text-xl sm:text-2xl font-bold opacity-70">:</div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 sm:p-3 min-w-[60px] sm:min-w-[80px]">
                      <div className="text-2xl sm:text-3xl md:text-4xl font-bold tabular-nums">
                        {String(timeLeft.minutes).padStart(2, "0")}
                      </div>
                      <div className="text-xs sm:text-sm uppercase opacity-80">Min</div>
                    </div>
                  </div>
                </div>

                {/* Price Comparison */}
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  {/* After Launch */}
                  <div className="bg-gray-100 p-4 sm:p-6 rounded-xl text-center relative">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-500 text-white text-xs sm:text-sm font-bold px-3 py-1 rounded-full">
                      AFTER LAUNCH
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 mb-2 mt-2">Regular Price</p>
                    <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-400 line-through">
                      $197
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1">/month</p>
                  </div>

                  {/* Founders Rate */}
                  <div className="bg-gradient-to-br from-[#01F1EB] to-[#01F1EB]/80 p-4 sm:p-6 rounded-xl text-center relative">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#01355A] text-white text-xs sm:text-sm font-bold px-3 py-1 rounded-full">
                      TODAY ONLY
                    </div>
                    <p className="text-sm sm:text-base text-[#01303E] mb-2 mt-2 font-semibold">
                      Founders Rate
                    </p>
                    <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#01303E]">
                      $97
                    </p>
                    <p className="text-xs sm:text-sm text-[#01303E]/80 mt-1 font-semibold">/month</p>
                  </div>
                </div>

                {/* HighLevel Offer */}
                <div className="bg-[#F9F9FB] border-2 border-[#01F1EB] p-4 sm:p-6 rounded-xl mb-6">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl sm:text-3xl">🚀</div>
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg font-bold text-[#01355A] mb-2">
                        BONUS: Free Unlimited Go HighLevel Account
                      </h3>
                      <p className="text-sm sm:text-base text-[#267090]">
                        Includes a <strong>$497/month value</strong> — Manage unlimited client
                        funnels, automations, and CRM in one platform.
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <Link
                    href="/enroll"
                    onClick={() => setShowPopup(false)}
                    className="block w-full py-4 sm:py-5 bg-[#01F1EB] text-[#01303E] font-bold text-base sm:text-lg text-center rounded-lg hover:bg-[#01F1EB]/90 transition-all transform hover:scale-105 shadow-lg"
                  >
                    👉 YES! Lock In $97/Month (Founders Rate)
                  </Link>
                  <button
                    onClick={handleClose}
                    className="block w-full py-3 text-sm sm:text-base text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    No thanks, I'll pay $197/month later
                  </button>
                </div>

                {/* Disclaimer */}
                <p className="text-xs text-center text-gray-500 mt-4">
                  Training only. Results depend on your effort. No income guarantees.
                </p>
              </div>
            </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
