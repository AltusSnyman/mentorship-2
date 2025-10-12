import { useEffect, useState } from "react";
import { STORAGE_KEYS, COUNTDOWN_CONFIG } from "@/lib/constants";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface UseCountdownOptions {
  includeSeconds?: boolean;
  updateInterval?: number; // milliseconds
}

export function useCountdown(options: UseCountdownOptions = {}) {
  const { includeSeconds = false, updateInterval = COUNTDOWN_CONFIG.updateIntervalDefault } = options;

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Get or set first visit timestamp in localStorage
    const getTargetDate = () => {
      if (typeof window === "undefined") return new Date();

      const stored = localStorage.getItem(STORAGE_KEYS.countdownTarget);
      if (stored) {
        return new Date(stored);
      }

      // First visit - set target to configured duration from now
      const target = new Date();
      target.setHours(target.getHours() + COUNTDOWN_CONFIG.durationHours);
      localStorage.setItem(STORAGE_KEYS.countdownTarget, target.toISOString());
      return target;
    };

    const targetDate = getTargetDate();

    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        // Timer expired - reset to configured duration from now
        const newTarget = new Date();
        newTarget.setHours(newTarget.getHours() + COUNTDOWN_CONFIG.durationHours);
        localStorage.setItem(STORAGE_KEYS.countdownTarget, newTarget.toISOString());
        setTimeLeft({
          days: 0,
          hours: COUNTDOWN_CONFIG.durationHours - 1,
          minutes: 59,
          seconds: 59,
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(
      calculateTimeLeft,
      includeSeconds ? 1000 : updateInterval
    );

    return () => clearInterval(timer);
  }, [includeSeconds, updateInterval]);

  return { timeLeft, mounted };
}
