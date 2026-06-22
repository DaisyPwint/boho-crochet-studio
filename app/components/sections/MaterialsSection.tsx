"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

type MaterialsSectionProps = {
  materials: {
    title: string;
    label: string;
    src: StaticImageData;
  }[];
};

export function MaterialsSection({ materials }: MaterialsSectionProps) {
  return (
    <section id="materials" className="bg-(--color-primary) py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-[0.5fr_2fr] md:items-center">
          <h2 className="text-4xl md:text-5xl text-white leading-tight">The <i>Dialogue</i> of Fiber</h2>
          <p className="text-base/7 text-(--color-accent) md:text-lg/8">
            Each collection is a conversation between the materials and the maker. I source organic cotton yarns for their breathability and softness, natural wool blends for warmth and long-term durability, and low-impact dyes inspired by clay, sand, and desert skies. The result is a tactile experience that invites you to slow down and savor the beauty of handmade craftsmanship.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {materials.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.12 }}
              className={`
                  ${index === 1 ? "md:mt-20" : ""}
                  group
                `}
            >
              <motion.div className="bg-amber-50 z-10 overflow-hidden mb-3 shadow-[0_24px_55px_rgba(0,0,0,0.14)]">
                <Image
                  src={item.src}
                  alt={item.title}
                  className="w-full h-auto transition duration-300 ease-in-out filter brightness-75 group-hover:brightness-100"
                />
              </motion.div>
              <span className="text-sm uppercase font-medium text-foreground mb-2">{item.title}</span>
              <p className="text-sm/6 text-(--color-accent)">{item.label}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
