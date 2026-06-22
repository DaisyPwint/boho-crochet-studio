"use client";

import storyImage from "@/app/assets/story-one.png";
import storyImage2 from "@/app/assets/story-two.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
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
      <div className="mx-auto grid w-full max-w-6xl gap-5 px-6 md:grid-cols-[1fr_1fr_0.5fr] md:items-center">
        <motion.div style={{ y: imageY }}>
          <Image src={storyImage} alt="Story" className="relative z-10 h-112 w-full object-cover shadow-[0_24px_55px_rgba(0,0,0,0.14)] md:h-144" />
        </motion.div>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-(--color-primary)/80">
            Our Story
          </p>
          <h2 className="mt-4 max-w-[14ch] text-4xl leading-[1.06] md:text-6xl">
            Slowing down time, one knot at a time.
          </h2>
          <p className="mt-7 max-w-xl text-base/7 text-[color-mix(in_srgb,var(--color-neutral),white_28%)] md:text-lg/8">
            Boho Crochet Studio started with a brief pause in a world that rushes by. For me, crochet is an art form—a gentle weaving together of time, using only a single hook and a strand of thread. Through intention and patience, I wanted to create a sense of simple, tangible warmth.
          </p>
          <p className="mt-5 border-l-2 border-(--color-primary) pl-4 text-lg italic">
            "Made to be held, used, and loved for years."
          </p>
        </div>
        <motion.div style={{ y: imageY }} className="relative md:flex hidden">
          <Image src={storyImage2} alt="Story" width={200} height={200} className="absolute bottom-0 right-0" />
          <div className="absolute bottom-6 -right-6 -z-1 w-[200px] h-[125px] bg-(--color-primary) opacity-20"></div>
        </motion.div>
      </div>
    </section>
  );
}
