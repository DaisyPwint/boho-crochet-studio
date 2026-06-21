"use client";

import { motion } from "framer-motion";

type Testimonial = {
  quote: string;
  author: string;
};

type TestimonialsSectionProps = {
  testimonials: Testimonial[];
};

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const marqueeItems = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="bg-white py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h2 className="text-4xl md:text-5xl">Testimonials</h2>
        <div className="mt-10 overflow-hidden">
          <motion.div
            className="flex w-max gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 22, ease: "linear", repeat: Infinity }}
          >
            {marqueeItems.map((item, index) => (
              <blockquote
                key={`${item.author}-${index}`}
                className="w-[320px] shrink-0 rounded-2xl border border-(--color-tertiary) p-6"
              >
                <p className="text-base/7">"{item.quote}"</p>
                <footer className="mt-4 text-sm font-semibold text-(--color-primary)">
                  {item.author}
                </footer>
              </blockquote>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
