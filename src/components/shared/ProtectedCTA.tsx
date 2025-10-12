"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useBehaviorTracking } from "@/hooks/useBehaviorTracking";
import SmartGatePopup from "./SmartGatePopup";

interface ProtectedCTAProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function ProtectedCTA({
  href,
  children,
  className = "",
  onClick,
}: ProtectedCTAProps) {
  const router = useRouter();
  const { isTrusted, trustScore, markAsTrusted } = useBehaviorTracking({
    trustThreshold: 50,
    timeThreshold: 8,
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // Call custom onClick if provided
    if (onClick) {
      onClick();
    }

    // Check trust score
    if (isTrusted) {
      // Trusted user - go directly
      console.log(`✅ Trusted user (score: ${trustScore}) - Direct access`);
      router.push(href);
    } else {
      // Suspicious - show confirmation popup
      console.log(`⚠️ Suspicious behavior (score: ${trustScore}) - Showing verification`);
      setShowPopup(true);
    }
  };

  const handleConfirm = () => {
    // Mark as trusted and navigate
    markAsTrusted();
    setShowPopup(false);
    router.push(href);
  };

  return (
    <>
      <a
        href={href}
        onClick={handleClick}
        className={className}
      >
        {children}
      </a>

      <SmartGatePopup
        isOpen={showPopup}
        onConfirm={handleConfirm}
      />
    </>
  );
}
