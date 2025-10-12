"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function Guarantee() {
  const steps = [
    "Launch a domain email + copy-paste website (training provided)",
    "Build a demo video showing your automation in action",
    "Run the starter outreach sequence we provide",
    "Follow the complete Month-1 roadmap and action steps",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#01355A] mb-6">
            Month-2 Free If You Complete The Work
          </h3>

          <p className="text-lg sm:text-xl text-[#267090] mb-8 leading-relaxed">
            Complete the Month-1 roadmap — build your demo, run outreach, submit
            proof of completion. If you do the work and don't see progress, we
            waive Month 2. This guarantees access, not results. Your outcome
            depends on your effort.
          </p>

          <div className="bg-[#F9F9FB] p-6 sm:p-8 rounded-2xl shadow-lg border border-[#01F1EB]/30">
            <h4 className="text-xl sm:text-2xl font-bold text-[#01355A] mb-6">
              How to qualify:
            </h4>

            <div className="space-y-4">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 sm:gap-4"
                >
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#01F1EB] flex-shrink-0 mt-1" />
                  <p className="text-left text-base sm:text-lg text-[#01303E]">{step}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
