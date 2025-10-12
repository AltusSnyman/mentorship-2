"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useCountdown } from "@/hooks/useCountdown";
import ProtectedCTA from "./ProtectedCTA";

export default function StickyCTA() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [0, 1]);
  const { timeLeft, mounted } = useCountdown({ updateInterval: 60000 });

  return (
    <motion.div
      style={{ opacity }}
      className="fixed bottom-0 left-0 right-0 z-50 p-3 bg-gradient-to-r from-[#01355A] to-[#267090] shadow-2xl md:hidden"
    >
      <div className="space-y-2">
        {mounted && (
          <div className="text-center text-xs text-white/90 flex items-center justify-center gap-2">
            <span>⏰ Founders Rate ends:</span>
            <span className="font-bold">
              {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m
            </span>
          </div>
        )}
        <ProtectedCTA
          href="/enroll"
          className="block w-full py-3 px-6 bg-[#01F1EB] text-[#01303E] font-bold text-center rounded-lg hover:bg-[#01F1EB]/90 transition-all"
        >
          ENROLL NOW — $97/month
        </ProtectedCTA>
      </div>
    </motion.div>
  );
}
