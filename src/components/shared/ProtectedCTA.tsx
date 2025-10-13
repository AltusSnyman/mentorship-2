"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useBehaviorTracking } from "@/hooks/useBehaviorTracking";
import InlineCaptchaModal from "./InlineCaptchaModal";

interface ProtectedCTAProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  ctaSource?: string;
}

export default function ProtectedCTA({
  href,
  children,
  className = "",
  onClick,
  ctaSource = "Unknown CTA",
}: ProtectedCTAProps) {
  const router = useRouter();
  const { isTrusted, markAsTrusted } = useBehaviorTracking({
    trustThreshold: 50,
    timeThreshold: 8,
  });

  const [showCaptcha, setShowCaptcha] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // Call custom onClick if provided
    if (onClick) {
      onClick();
    }

    // Check trust score
    if (isTrusted) {
      // Trusted user - send minimal webhook and go directly
      sendMinimalWebhook(null, ctaSource, true);
      router.push(href);
    } else {
      // Suspicious - show CAPTCHA modal
      setShowCaptcha(true);
    }
  };

  const handleVerified = async (recaptchaToken: string) => {
    try {
      // Send minimal webhook with CAPTCHA token
      await sendMinimalWebhook(recaptchaToken, ctaSource, false);

      // Mark as trusted for future visits
      markAsTrusted();

      // Close modal and navigate
      setShowCaptcha(false);
      router.push(href);
    } catch (error) {
      console.error("Webhook error:", error);
      // Still allow navigation even if webhook fails
      setShowCaptcha(false);
      router.push(href);
    }
  };

  const sendMinimalWebhook = async (
    recaptchaToken: string | null,
    source: string,
    trustedUser: boolean
  ) => {
    try {
      const webhookUrl =
        "https://services.leadconnectorhq.com/hooks/YtfU1475csGLcTb5SH90/webhook-trigger/a5a7f85b-392f-40ac-89af-c33534aa184b";

      const payload = {
        event: "cta_clicked",
        recaptchaToken: recaptchaToken || "trusted_user_bypass",
        timestamp: new Date().toISOString(),
        source: `AI Agency Funnel - ${source}`,
        trustedUser,
        action: "enroll_clicked",
      };

      await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
    } catch (error) {
      // Silent fail - don't block user experience
      console.error("Webhook failed:", error);
    }
  };

  return (
    <>
      <a href={href} onClick={handleClick} className={className}>
        {children}
      </a>

      <InlineCaptchaModal
        isOpen={showCaptcha}
        onClose={() => setShowCaptcha(false)}
        onVerified={handleVerified}
        ctaSource={ctaSource}
      />
    </>
  );
}
