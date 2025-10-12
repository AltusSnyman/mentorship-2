"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Shield, CheckCircle } from "lucide-react";

interface SmartGatePopupProps {
  isOpen: boolean;
  onConfirm: () => void;
}

export default function SmartGatePopup({ isOpen, onConfirm }: SmartGatePopupProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            onClick={onConfirm}
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] w-[90%] max-w-md"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 border-4 border-[#01F1EB]">
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-[#01F1EB]/20 rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-[#01355A]" />
                </div>
              </div>

              {/* Headline */}
              <h3 className="text-2xl sm:text-3xl font-bold text-[#01355A] text-center mb-3">
                Quick Security Check
              </h3>

              {/* Message */}
              <p className="text-base sm:text-lg text-[#267090] text-center mb-6">
                We protect our members from bots and spam. Just tap below to confirm you're a real person ready to build your agency!
              </p>

              {/* Confirmation Button */}
              <button
                onClick={onConfirm}
                className="w-full py-4 bg-gradient-to-r from-[#01355A] to-[#267090] text-white font-bold text-lg rounded-xl hover:opacity-90 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-3"
              >
                <CheckCircle className="w-6 h-6" />
                I'm Ready to Build My Agency
              </button>

              {/* Trust Badge */}
              <p className="text-xs text-[#267090] text-center mt-4">
                🔒 One-time verification · Your privacy is protected
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
