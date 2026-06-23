"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import heroImage from "@/app/assets/hero.png";

const headlineContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.18,
    },
  },
};

const headlineLine = {
  hidden: { y: "110%", opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.72,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const ctaContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.5,
    },
  },
};

const ctaItem = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

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
          variants={headlineContainer}
          initial="hidden"
          animate="show"
          className="text-5xl leading-tight md:text-7xl"
        >
          <span className="block overflow-hidden">
            <motion.span variants={headlineLine} className="block">
              Crafting Stillness
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span variants={headlineLine} className="block">
              <span className="italic">into</span> Material.
            </motion.span>
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 max-w-xl text-base/7 text-[color-mix(in_srgb,var(--color-neutral),white_25%)]"
        >
          A studio dedicated to the slow movement. We create artisanal crochet pieces that anchor a room in warmth, texture, and intentional design.
        </motion.p>
        <motion.div variants={ctaContainer} initial="hidden" animate="show" className="mt-10 flex flex-wrap gap-4">
          <motion.a
            variants={ctaItem}
            href="#collection"
            className="rounded-full bg-(--color-primary) px-6 py-3 font-medium text-background transition hover:opacity-90"
            whileHover={{ y: -2 }}
          >
            Explore Collection
          </motion.a>
          <motion.a
            variants={ctaItem}
            href="#story"
            className="rounded-full border border-(--color-primary) px-6 py-3 font-medium text-(--color-primary) transition hover:bg-(--color-primary) hover:text-background"
            whileHover={{ y: -2 }}
          >
            Our Story
          </motion.a>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.86, y: 22 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.95, ease: [0.2, 0.85, 0.2, 1], delay: 0.22 }}
      >
        <Image src={heroImage} alt="Boho Crochet Studio" className="h-112 w-auto object-cover" />
      </motion.div>
    </section>
  );
}
