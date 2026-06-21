"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function StorySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [-45, 45]);

  return (
    <section ref={sectionRef} id="story" className="bg-(--color-tertiary)/45 py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 md:grid-cols-2 md:items-center">
        <motion.div style={{ y: imageY }} className="h-72 rounded-2xl bg-white p-6 shadow-sm">
          <h3 className="text-2xl text-(--color-primary)">From Sketch to Stitch</h3>
        </motion.div>
        <div>
          <h2 className="text-4xl md:text-5xl">Our Story</h2>
          <p className="mt-6 text-base/7">
            Boho Crochet Studio started with a simple intention: create slow,
            intentional pieces that feel personal. Every pattern and product is
            designed with comfort, practical use, and timeless boho aesthetics
            in mind.
          </p>
          <p className="mt-5 border-l-2 border-(--color-primary) pl-4 text-lg italic">
            "Made to be held, used, and loved for years."
          </p>
        </div>
      </div>
    </section>
  );
}
