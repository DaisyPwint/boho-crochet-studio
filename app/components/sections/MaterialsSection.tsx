"use client";

import { motion } from "framer-motion";

type MaterialsSectionProps = {
  materials: string[];
};

export function MaterialsSection({ materials }: MaterialsSectionProps) {
  return (
    <section id="materials" className="bg-(--color-secondary) py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h2 className="text-4xl md:text-5xl">Materials</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {materials.map((item, index) => (
            <motion.article
              key={item}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-(--color-tertiary)"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.12 }}
            >
              <p className="text-sm/6">{item}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
