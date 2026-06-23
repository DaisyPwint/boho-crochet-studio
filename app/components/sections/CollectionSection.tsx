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
  const layoutClasses = [
    "md:col-span-5 md:row-span-2",
    "md:col-span-5 md:col-start-6 md:row-span-1 md:self-start",
    "md:col-span-4 md:col-start-9 md:row-span-1 md:-mt-8",
  ];

  return (
    <section id="collection" className="border-y border-(--color-tertiary) bg-white py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h2 className="text-4xl md:text-5xl">Signature Works</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-12 md:auto-rows-[220px] md:gap-8">
          {collections.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.16 }}
              className={`group ${layoutClasses[index] ?? "md:col-span-4"}`}
            >
              <Image
                src={item.src}
                alt={item.title}
                width={index === 0 ? 860 : 460}
                height={index === 0 ? 980 : 520}
                className={`
                  mb-4 w-full object-cover transition duration-500 group-hover:scale-[1.02]
                  ${index === 0 ? "h-120 md:h-full" : "h-80 md:h-full"}
                `}
              />
              <h3 className={`${index === 0 ? "text-3xl md:text-4xl" : "text-2xl"} text-(--color-primary)`}>
                {item.title}
              </h3>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
