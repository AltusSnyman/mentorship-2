"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import CountdownTimer from "../shared/CountdownTimer";

export default function OfferRecap() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#01355A] to-[#01303E] text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Join the AI Agency School — Founders Rate
          </h3>

          <div className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 md:p-12 rounded-2xl border-2 border-[#01F1EB]">
            <div className="space-y-6">
              <div>
                <p className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#01F1EB]">
                  $97<span className="text-xl sm:text-2xl">/month</span>
                </p>
                <p className="text-lg sm:text-xl mt-2">Founders rate (Today)</p>
                <p className="text-base sm:text-lg text-white/70 mt-1">
                  After the launch window: $197 / month
                </p>
              </div>

              <div className="border-t border-white/20 pt-6">
                <p className="text-base sm:text-lg leading-relaxed mb-6">
                  Includes: templates, HighLevel account, toll-free number, 123+
                  websites, 300+ videos, automations, weekly mentorship.
                </p>

                <Link
                  href="/enroll"
                  className="inline-block w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-[#01F1EB] text-[#01303E] font-bold text-lg sm:text-xl rounded-lg hover:bg-[#01F1EB]/90 transition-all transform hover:scale-105 shadow-2xl text-center"
                >
                  ENROLL — $97 / month (Founders Rate)
                </Link>

                <div className="mt-6">
                  <CountdownTimer />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
