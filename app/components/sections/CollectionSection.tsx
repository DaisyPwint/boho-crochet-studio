"use client";

import { motion } from "framer-motion";

type Collection = {
  title: string;
  description: string;
};

type CollectionSectionProps = {
  collections: Collection[];
};

export function CollectionSection({ collections }: CollectionSectionProps) {
  return (
    <section id="collection" className="border-y border-(--color-tertiary) bg-white py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h2 className="text-4xl md:text-5xl">Signature Works</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {collections.map((item, index) => (
            <motion.article
              key={item.title}
              className="rounded-2xl border border-(--color-tertiary) bg-(--color-secondary) p-6 shadow-sm"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.16 }}
            >
              <h3 className="text-2xl">{item.title}</h3>
              <p className="mt-3 text-sm/6">{item.description}</p>
              <a href="#" className="mt-6 inline-block text-sm font-semibold text-(--color-primary)">
                Explore pieces
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
