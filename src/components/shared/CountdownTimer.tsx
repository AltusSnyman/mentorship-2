"use client";

import { motion } from "framer-motion";
import { useCountdown } from "@/hooks/useCountdown";

export default function CountdownTimer() {
  const { timeLeft, mounted } = useCountdown({ includeSeconds: true });

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <div className="flex items-center justify-center gap-2 text-sm">
        <span className="text-red-500 font-semibold">⏰ Loading...</span>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center gap-2"
    >
      <p className="text-sm font-semibold text-red-500 flex items-center gap-2">
        <span>⏰</span>
        <span>Founders Rate ends in:</span>
      </p>
      <div className="flex items-center gap-2 text-lg font-bold">
        <TimeUnit value={timeLeft.days} label="days" />
        <Separator />
        <TimeUnit value={timeLeft.hours} label="hrs" />
        <Separator />
        <TimeUnit value={timeLeft.minutes} label="min" />
        <Separator />
        <TimeUnit value={timeLeft.seconds} label="sec" />
      </div>
      <p className="text-xs opacity-70 text-center">
        Price increases to $197/month after launch window
      </p>
    </motion.div>
  );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center min-w-[50px]">
      <motion.div
        key={value}
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="text-2xl font-bold tabular-nums"
      >
        {String(value).padStart(2, "0")}
      </motion.div>
      <div className="text-xs opacity-70 uppercase">{label}</div>
    </div>
  );
}

function Separator() {
  return <div className="text-xl font-bold opacity-50">:</div>;
}
