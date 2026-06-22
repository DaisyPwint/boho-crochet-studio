"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

type Collection = {
  title: string;
  src: StaticImageData;
};

type CollectionSectionProps = {
  collections: Collection[];
};

export function CollectionSection({ collections }: CollectionSectionProps) {
  return (
    <section id="collection" className="border-y border-(--color-tertiary) bg-white py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h2 className="text-4xl md:text-5xl">Signature Works</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {collections.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.16 }}
              className={`
                ${index === 0 ? "md:col-span-2 md:row-span-2" : ""}
                  ${index === 1 ? "md:mt-12" : ""}
                  ${index === 2 ? "md:mt-40" : ""}
                  ${index === 3 ? "md:mt-10" : ""}
                `}
            >
              <Image src={item.src} alt={item.title}
                width={`${index === 0 ? 500 : 400}`} height={`${index === 0 ? 600 : 500}`}
                className="mb-4 object-cover" />
              <h3 className="text-2xl text-(--color-primary)">{item.title}</h3>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
