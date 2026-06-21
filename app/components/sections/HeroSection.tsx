"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import heroImage from "@/app/assets/hero.png";

export function HeroSection() {
  return (
    <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1.5fr_1fr] md:items-center">
      <motion.div>
        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-4 text-sm uppercase tracking-[0.2em] text-(--color-primary)"
        >
          Handmade Crochet Artistry
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl leading-tight md:text-7xl"
        >
          Crafting Stillness
          <span className="italic"> into</span> Material.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 max-w-xl text-base/7 text-[color-mix(in_srgb,var(--color-neutral),white_25%)]"
        >
          A studio dedicated to the slow movement. We create artisanal crochet pieces that anchor a room in warmth, texture, and intentional design.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <motion.a
            href="#collection"
            className="rounded-full bg-(--color-primary) px-6 py-3 font-medium text-(--color-secondary) transition hover:opacity-90"
            whileHover={{ y: -2 }}
          >
            Explore Collection
          </motion.a>
          <motion.a
            href="#story"
            className="rounded-full border border-(--color-primary) px-6 py-3 font-medium text-(--color-primary) transition hover:bg-(--color-primary) hover:text-(--color-secondary)"
            whileHover={{ y: -2 }}
          >
            Our Story
          </motion.a>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <Image src={heroImage} alt="Boho Crochet Studio" className="h-112 w-auto object-cover" />
      </motion.div>
    </section>
  );
}
