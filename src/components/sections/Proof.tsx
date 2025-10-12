"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Proof() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#01355A] mb-4">
            Real Builds. Real Calls. Real Clients.
          </h3>
          <p className="text-lg sm:text-xl text-[#267090]">
            Inside the community — proof that templates + outreach works.
          </p>
        </motion.div>

        {/* Group Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 max-w-4xl mx-auto"
        >
          <Image
            src="/images/group.webp"
            alt="AI Agency School member builds and results overview"
            width={1200}
            height={675}
            className="rounded-2xl shadow-xl w-full h-auto"
          />
        </motion.div>

        {/* Jay & Eric Images */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <Image
              src="/images/jadyn.webp"
              alt="Jadyn — AI Agency School result screenshot"
              width={600}
              height={400}
              className="rounded-xl shadow-lg w-full h-auto"
            />
            <p className="text-center text-base sm:text-lg font-semibold text-[#01355A]">
              Jadyn — "Used the templates to build demos and run outreach."
            </p>
            <p className="text-center text-xs sm:text-sm text-[#267090]/70 italic mt-2">
              *Results not typical. Individual success varies based on effort.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <Image
              src="/images/eric.webp"
              alt="Eric — AI Agency School result screenshot"
              width={600}
              height={400}
              className="rounded-xl shadow-lg w-full h-auto"
            />
            <p className="text-center text-base sm:text-lg font-semibold text-[#01355A]">
              Eric — "Built automations using the plug-and-play blueprints."
            </p>
            <p className="text-center text-xs sm:text-sm text-[#267090]/70 italic mt-2">
              *Results not typical. Individual success varies based on effort.
            </p>
          </motion.div>
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 max-w-3xl mx-auto"
        >
          <p className="text-center text-sm text-[#267090]/70 italic">
            Results shown are not typical and may vary. Individual results depend on your
            effort, skill level, market conditions, and factors outside our control. These
            testimonials represent individual experiences and are not guarantees of your results.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
