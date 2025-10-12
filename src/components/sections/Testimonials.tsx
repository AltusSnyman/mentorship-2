"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { URLS } from "@/lib/constants";

export default function Testimonials() {
  const [loadedVideos, setLoadedVideos] = useState<Set<number>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);
  const videoRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Initialize Intersection Observer for lazy loading
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0");
            setLoadedVideos((prev) => new Set(prev).add(index));
          }
        });
      },
      {
        rootMargin: "50px", // Start loading slightly before visible
        threshold: 0.1,
      }
    );

    // Observe all video containers
    videoRefs.current.forEach((ref) => {
      if (ref && observerRef.current) {
        observerRef.current.observe(ref);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-[#F9F9FB] to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#01355A] mb-4">
            Hear From Our Members — What they built in 30 days
          </h3>
          <p className="text-lg sm:text-xl text-[#267090]">
            Verified members. Real demos. Watch any clip — then join on the same
            roadmap.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {URLS.testimonials.map((url, index) => (
            <motion.div
              key={index}
              ref={(el) => { videoRefs.current[index] = el; }}
              data-index={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="aspect-video rounded-xl overflow-hidden shadow-lg bg-gray-200"
            >
              {loadedVideos.has(index) ? (
                <iframe
                  src={url}
                  allow="autoplay; encrypted-media; fullscreen"
                  className="w-full h-full"
                  loading="lazy"
                  title={`Customer testimonial ${index + 1}`}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#01355A] to-[#267090]">
                  <span className="text-white text-sm">Loading video...</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
