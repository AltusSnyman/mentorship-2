"use client";

import { motion } from "framer-motion";
import CountdownTimer from "../shared/CountdownTimer";
import ProtectedCTA from "../shared/ProtectedCTA";

export default function ValueLadder() {
  const items = [
    {
      emoji: "🚀",
      title: "Unlimited Free SaaS HighLevel Account",
      description: "Helps you avoid $497/month in software costs—manage unlimited client funnels, automations, and CRM in one platform.",
      value: "$497/mo",
      type: "monthly",
    },
    {
      emoji: "📞",
      title: "USA Toll-Free Number Setup",
      description: "Reduces the hassle of setting up professional phone systems—gain instant credibility with clients.",
      value: "$99/mo",
      type: "monthly",
    },
    {
      emoji: "📧",
      title: "Cold Email Training + Instant Discounts",
      description: "Reduces the learning curve for outbound—learn proven methods for booking meetings with decision-makers.",
      value: "$234/mo",
      type: "monthly",
    },
    {
      emoji: "🌐",
      title: "123+ Copy-Paste Websites",
      description: "Saves weeks of design and development—deploy client sites quickly using proven templates.",
      value: "$1000s",
      type: "one-time",
      ctaLink: "https://portfolio-ice-spark.lovable.app/",
      ctaText: "View Examples",
    },
    {
      emoji: "💰",
      title: "Copy-Paste SaaS Business",
      description: "Saves months of product development—learn to launch a recurring revenue business model.",
      value: "$1,397",
      type: "one-time",
    },
    {
      emoji: "📚",
      title: "300+ Training Videos",
      description: "Reduces guesswork and trial-and-error—learn from experienced founders with proven track records.",
      value: "$997/mo",
      type: "monthly",
    },
    {
      emoji: "🏆",
      title: "The Experts Sales & Marketing Course",
      description: "Saves on expensive coaching costs—learn the psychology of selling high-ticket services.",
      value: "$9,000",
      type: "one-time",
    },
    {
      emoji: "⚡",
      title: "50+ No-Code Automation Blueprints",
      description: "Lowers the technical barrier—learn to build voice agents, workflows, and integrations without code.",
      value: "$2,000/mo",
      type: "monthly",
    },
    {
      emoji: "✨",
      title: "Other Micro SaaS Blueprints",
      description: "Reduces the risk of building the wrong product—access proven SaaS models you can white-label.",
      value: "$1,200/mo",
      type: "monthly",
    },
    {
      emoji: "🎁",
      title: "Weekly Copy-Paste Updates",
      description: "Helps you stay current—new templates, scripts, and strategies delivered every week.",
      value: "Ongoing",
      type: "endless",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#01355A] to-[#01303E] text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Everything You Get Inside AI Agency School
          </h3>
          <p className="text-xl sm:text-2xl md:text-3xl text-[#01F1EB] font-semibold">
            $16,424+ of tools, templates, and mentorship — included for the
            Founders rate of $97 / month today.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-[#01F1EB]/30 hover:border-[#01F1EB] transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-3">
                <div className="flex items-start gap-3 flex-1">
                  <span className="text-2xl sm:text-3xl flex-shrink-0">{item.emoji}</span>
                  <h4 className="text-lg sm:text-xl font-bold text-[#01F1EB] flex-1">{item.title}</h4>
                </div>
                {item.value && (
                  <span className="text-xs sm:text-sm bg-[#01F1EB] text-[#01303E] px-3 py-1 rounded-full font-semibold whitespace-nowrap self-start sm:ml-2">
                    {item.value}
                  </span>
                )}
              </div>
              <p className="text-sm sm:text-base text-white/80 pl-8 sm:pl-12 mb-3">{item.description}</p>
              {item.ctaLink && (
                <div className="pl-8 sm:pl-12">
                  <a
                    href={item.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#01F1EB] hover:text-white transition-colors group"
                  >
                    {item.ctaText}
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center space-y-6 bg-white/10 backdrop-blur-sm p-8 rounded-2xl max-w-2xl mx-auto border-2 border-[#01F1EB]"
        >
          <p className="text-2xl sm:text-3xl font-bold">
            Total value: $16,424+ — Your Price $97 / month (Founders Rate)
          </p>
          <p className="text-lg sm:text-xl text-[#01F1EB]/80">
            After the launch window: $197 / month.
          </p>
          <ProtectedCTA
            href="/form"
            className="inline-block w-full sm:w-auto px-6 sm:px-8 py-4 bg-[#01F1EB] text-[#01303E] font-bold text-base sm:text-lg rounded-lg hover:bg-[#01F1EB]/90 transition-all transform hover:scale-105 shadow-lg text-center"
          >
            Enroll Now — $97 / month (Founders Rate)
          </ProtectedCTA>
          <div className="mt-4">
            <CountdownTimer />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
