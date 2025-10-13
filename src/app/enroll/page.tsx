"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";
import Footer from "@/components/sections/Footer";

export default function EnrollPage() {
  // Track Lead event when user reaches enrollment page
  useEffect(() => {
    // Check if fbq is available (Meta Pixel loaded)
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "Lead", {
        content_name: "AI Agency Funnel - Enrollment Page",
        value: 97,
        currency: "USD",
        source: "Inline CAPTCHA Verification",
      });
    }
  }, []);

  const pricingTiers = [
    {
      name: "EMPIRE BUILDER",
      price: "$777",
      period: "/ 12 months",
      billing: "billed annually",
      highlight: true,
      badge: "BEST VALUE - 67% OFF",
      features: [
        "Everything in Agency Accelerator",
        "Complete 200+ video training library",
        "$3000+ worth of software included FREE",
        "Private community access (200+ members)",
        "Weekly live coaching calls with Altus",
        "Copy-paste scripts and templates",
        "Complete client acquisition system",
      ],
      bonuses: [
        "🔥 BONUS: Personal $137 strategy call",
        "🔥 BONUS: 100,000+ hot business leads database",
        "🔥 BONUS: Priority support (24hr response)",
      ],
      cta: "🚀 Lock In Empire Builder (67% OFF)",
      ctaLink: "https://www.skool.com/thevoiceaiagency",
      description: "Save $387 + get exclusive bonuses worth $2,000+. Best value for serious entrepreneurs.",
    },
    {
      name: "AGENCY ACCELERATOR",
      price: "$97",
      period: "/ month",
      billing: "billed monthly",
      highlight: false,
      badge: "MOST POPULAR",
      features: [
        "Complete 200+ video training library",
        "$3000+ worth of software included FREE",
        "Private community access (200+ members)",
        "Weekly live coaching calls with Altus",
        "Copy-paste scripts and templates (zero writing)",
        "Complete client acquisition system",
        "48-hour money back guarantee",
        "First client in 90 days or free strategy call",
      ],
      bonuses: [],
      cta: "🚀 Start Building My $50K Agency Now",
      ctaLink: "https://www.skool.com/thevoiceaiagency",
      description: "Perfect for entrepreneurs ready to build their $50K/month AI agency.",
    },
    {
      name: "EMPIRE IN A BOX",
      price: "$2,500",
      period: "/ one-time",
      billing: "one-time payment",
      highlight: false,
      badge: "VIP SETUP",
      features: [
        "Everything in Agency Accelerator",
        "6x private 1-on-1 calls with Altus ($822 value)",
        "Done-for-you agency setup & configuration",
        "Custom website built for your agency",
        "Complete workflow automation setup",
        "Professional website chatbot installed",
        "Phone chatbot system configured",
        "Dedicated phone number & setup",
        "Ready-to-sell service packages",
        "Priority 24/7 support for 90 days",
      ],
      bonuses: [],
      cta: "🏆 Find Out More - Your VIP Pass",
      ctaLink: "https://api.leadconnectorhq.com/widget/bookings/doneforyouai",
      description: "Complete done-for-you agency setup. Start selling immediately.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F9F9FB] via-[#F9F9FB] to-[#01F1EB]/10">
      {/* Disclaimer Banner */}
      <div className="bg-[#01355A] text-white py-2 px-4 text-center text-sm">
        <p>
          <strong>Educational Program Only:</strong> Success depends on individual
          effort. No income or results guaranteed. See full{" "}
          <Link href="/#footer" className="text-[#01F1EB] underline">
            disclaimer
          </Link>
          .
        </p>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#01355A] mb-4 sm:mb-6">
            Choose Your Path to $50K/Month
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-[#267090] max-w-4xl mx-auto">
            Select the perfect plan to build your AI & automation agency empire
          </p>
        </motion.div>

        {/* Pricing Tiers */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto mb-12">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden ${
                tier.highlight ? "ring-4 ring-[#01F1EB] transform scale-105" : ""
              }`}
            >
              {/* Badge */}
              <div className={`py-2 sm:py-3 text-center text-xs sm:text-sm font-bold text-white ${
                tier.highlight ? "bg-[#01F1EB] text-[#01303E]" : "bg-[#01355A]"
              }`}>
                {tier.badge}
              </div>

              <div className="p-6 sm:p-8">
                {/* Tier Name */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#01355A] mb-2">
                  {tier.name}
                </h3>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-end gap-1">
                    <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#01355A]">
                      {tier.price}
                    </span>
                    <span className="text-lg sm:text-xl text-[#267090] mb-2">
                      {tier.period}
                    </span>
                  </div>
                  <p className="text-sm text-[#267090]">{tier.billing}</p>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-[#01F1EB] flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-[#01355A]">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Bonuses */}
                {tier.bonuses.length > 0 && (
                  <div className="space-y-2 mb-6 p-4 bg-[#01F1EB]/10 rounded-lg border-2 border-[#01F1EB]">
                    {tier.bonuses.map((bonus, idx) => (
                      <div key={idx} className="text-sm sm:text-base font-semibold text-[#01355A]">
                        {bonus}
                      </div>
                    ))}
                  </div>
                )}

                {/* CTA Button */}
                <a
                  href={tier.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-4 sm:py-5 text-center font-bold text-base sm:text-lg rounded-lg transition-all transform hover:scale-105 shadow-lg ${
                    tier.highlight
                      ? "bg-[#01F1EB] text-[#01303E] hover:bg-[#01F1EB]/90"
                      : "bg-[#01355A] text-white hover:bg-[#01355A]/90"
                  }`}
                >
                  {tier.cta}
                </a>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#267090] text-center mt-4">
                  {tier.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Money-Back Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#01355A] mb-4">
              🛡️ 48-Hour Money-Back Guarantee
            </h3>
            <p className="text-base sm:text-lg text-[#267090]">
              Not satisfied? Get a full refund within 48 hours. No questions asked.
              We're confident you'll love the training and community.
            </p>
          </div>
        </motion.div>

        {/* Disclaimer */}
        <div className="text-center text-xs sm:text-sm text-[#267090] max-w-3xl mx-auto">
          <p>
            Training only. Results depend on your effort. No income guarantees. Past
            student results not typical. Your success depends on your execution,
            market conditions, and effort applied.
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
