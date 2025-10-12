"use client";

import { useEffect, useState } from "react";
import { STORAGE_KEYS } from "@/lib/constants";

interface BehaviorScore {
  timeOnPage: number;
  hasMouseMovement: boolean;
  hasScrolled: boolean;
  isTrusted: boolean;
  trustScore: number;
}

interface UseBehaviorTrackingOptions {
  trustThreshold?: number; // Minimum score to be considered trusted
  timeThreshold?: number; // Seconds on page to be considered engaged
}

export function useBehaviorTracking(options: UseBehaviorTrackingOptions = {}) {
  const { trustThreshold = 50, timeThreshold = 8 } = options;

  const [behavior, setBehavior] = useState<BehaviorScore>({
    timeOnPage: 0,
    hasMouseMovement: false,
    hasScrolled: false,
    isTrusted: false,
    trustScore: 0,
  });

  useEffect(() => {
    // Check if user is already trusted (returning visitor)
    const trustedUser = localStorage.getItem(STORAGE_KEYS.trustedUser);
    if (trustedUser === "true") {
      setBehavior((prev) => ({
        ...prev,
        isTrusted: true,
        trustScore: 100,
      }));
      return;
    }

    let timeOnPage = 0;
    let hasMouseMovement = false;
    let hasScrolled = false;

    // Track time on page
    const startTime = Date.now();
    const timeInterval = setInterval(() => {
      timeOnPage = Math.floor((Date.now() - startTime) / 1000);
      updateScore();
    }, 1000);

    // Track mouse movement
    const handleMouseMove = () => {
      if (!hasMouseMovement) {
        hasMouseMovement = true;
        updateScore();
      }
    };

    // Track scroll
    const handleScroll = () => {
      if (!hasScrolled) {
        hasScrolled = true;
        updateScore();
      }
    };

    // Calculate trust score
    const calculateTrustScore = (): number => {
      let score = 0;

      // Time on page (max 50 points)
      if (timeOnPage >= timeThreshold) {
        score += 50;
      } else {
        score += (timeOnPage / timeThreshold) * 50;
      }

      // Mouse movement (30 points)
      if (hasMouseMovement) {
        score += 30;
      }

      // Scroll activity (20 points)
      if (hasScrolled) {
        score += 20;
      }

      return Math.min(score, 100);
    };

    // Update behavior state
    const updateScore = () => {
      const trustScore = calculateTrustScore();
      const isTrusted = trustScore >= trustThreshold;

      setBehavior({
        timeOnPage,
        hasMouseMovement,
        hasScrolled,
        isTrusted,
        trustScore,
      });
    };

    // Add event listeners
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      clearInterval(timeInterval);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [trustThreshold, timeThreshold]);

  // Function to mark user as trusted (called after manual confirmation)
  const markAsTrusted = () => {
    localStorage.setItem(STORAGE_KEYS.trustedUser, "true");
    setBehavior((prev) => ({
      ...prev,
      isTrusted: true,
      trustScore: 100,
    }));
  };

  return {
    ...behavior,
    markAsTrusted,
  };
}
