"use client";

import { motion } from "framer-motion";
import YouTube from "react-youtube";
import CountdownTimer from "../shared/CountdownTimer";
import ProtectedCTA from "../shared/ProtectedCTA";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#F9F9FB] via-[#F9F9FB] to-[#01F1EB]/10">
      {/* Disclaimer Banner */}
      <div className="absolute top-0 left-0 right-0 bg-[#01355A] text-white py-2 px-4 text-center text-sm z-10">
        <p>
          <strong>Educational Program Only:</strong> Success depends on individual
          effort. No income or results guaranteed. See full{" "}
          <a href="#footer" className="text-[#01F1EB] underline">
            disclaimer
          </a>
          .
        </p>
      </div>
      <div className="container mx-auto px-4 py-20 pt-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#01355A] leading-tight">
              🚀 Build Your AI & Automation Agency — Lock Today's Founders Rate
              Before It Doubles
            </h1>

            <h2 className="text-lg sm:text-xl md:text-2xl text-[#267090] leading-relaxed">
              Learn <strong>Go HighLevel</strong>, <strong>AI Agents</strong>, <strong>n8n</strong>, <strong>Make.com</strong>, <strong>Vbcoding</strong>, and proven outreach with
              copy-paste systems, templates, and weekly mentor calls. Training
              only — your results depend on your effort.
            </h2>

            {/* Pricing Highlight */}
            <div className="bg-gradient-to-r from-[#01355A] to-[#267090] text-white p-4 sm:p-6 rounded-xl">
              <p className="text-sm sm:text-base mb-2">
                💰 <strong>Founders pay $97/month today</strong>
              </p>
              <p className="text-xs sm:text-sm opacity-90">
                ⚠️ After the launch window it becomes <span className="line-through">$197/month</span>
              </p>
            </div>

            <ul className="space-y-4 text-base sm:text-lg">
              <li className="flex items-start gap-3">
                <span className="text-xl sm:text-2xl flex-shrink-0">✅</span>
                <span>
                  Learn to build client-ready voice agents (step-by-step templates
                  + checklist)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl sm:text-2xl flex-shrink-0">✅</span>
                <span>
                  Get automations that run on autopilot (plug-and-play blueprints
                  you can deploy)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl sm:text-2xl flex-shrink-0">✅</span>
                <span>
                  Master proven email + SMS outreach methods (100K leads starter
                  pack included)
                </span>
              </li>
            </ul>

            <div className="space-y-4">
              <ProtectedCTA
                href="/enroll"
                className="inline-block w-full sm:w-auto px-6 sm:px-8 py-4 bg-[#01F1EB] text-[#01303E] font-bold text-base sm:text-lg rounded-lg hover:bg-[#01F1EB]/90 transition-all transform hover:scale-105 shadow-lg text-center"
              >
                👉 Enroll Now — $97 / month (Founders Rate)
              </ProtectedCTA>

              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-[#01F1EB]/30">
                <CountdownTimer />
              </div>

              <p className="text-sm text-[#267090]">
                Instant access · Cancel anytime · Lifetime community included
              </p>
            </div>
          </motion.div>

          {/* Right: VSL */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl"
          >
            <YouTube
              videoId="qVLv8agBFnA"
              className="w-full h-full"
              opts={{
                width: "100%",
                height: "100%",
                playerVars: {
                  autoplay: 0,
                  modestbranding: 1,
                },
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
