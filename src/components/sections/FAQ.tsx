"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      q: "Do I need technical experience?",
      a: "No. Training starts from zero — we give checklists and copy-paste templates so you can implement step-by-step.",
    },
    {
      q: "How quickly can I make money?",
      a: "Fastest students book clients in 2–3 weeks. Most see traction within 30–60 days with consistent implementation.",
    },
    {
      q: "What software costs should I expect?",
      a: "We include essential tools in the membership to minimize upfront software spend.",
    },
    {
      q: "Is this ongoing support or a one-time course?",
      a: "Ongoing mentorship + weekly calls + community access — not a one-and-done course.",
    },
    {
      q: "What if I can't find clients?",
      a: "Use our cold email + SMS scripts, 100K leads starter pack, and call coaching — plug-and-play.",
    },
    {
      q: "What happens if I wait?",
      a: "The price doubles. Same product later, higher cost. Early action locks your founders rate.",
    },
    {
      q: "How does the guarantee work?",
      a: "Follow the steps for Month-1; if you implemented and it failed, refund within 30 days.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#01355A] mb-8 sm:mb-12 text-center">
            Frequently Asked Questions
          </h3>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="border border-[#267090]/20 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 sm:p-6 bg-[#F9F9FB] hover:bg-[#01F1EB]/10 transition-colors"
                >
                  <span className="text-left font-semibold text-base sm:text-lg text-[#01355A] pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 text-[#267090] transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    className="bg-white"
                  >
                    <p className="p-4 sm:p-6 text-sm sm:text-base text-[#267090] leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
