"use client";

import WorkshopImage from "@/app/assets/studio.jpg";
import WorkshopTwoImage from "@/app/assets/studio-two.png"
import Image from "next/image";

export function WorkshopSection() {
  return (
    <section id="workshop" className="bg-white py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-3 md:items-center">
          <div className="text-center">
            <Image src={WorkshopImage} alt="Workshop" width={600} height={400} className="w-full h-auto object-cover mb-6" />
            <div className="bg-(--color-primary)/80 text-white h-60 flex flex-col items-center justify-center p-4">
              <h3 className="text-sm font-semibold pb-6">Join the Studio</h3>
              <p className="text-base">
                Monthly workshops for makers of all levels.
              </p>
            </div>
          </div>
          <div className="text-center bg-white shadow-[0_24px_55px_rgba(0,0,0,0.14)] p-6 h-60 flex flex-col items-center justify-center text-(--color-primary)">
            <i>"A breath of fresh air in the crochet world!"</i>
          </div>
          <Image src={WorkshopTwoImage} alt="Workshop" width={400} height={600} className="w-full h-auto object-cover" />
        </div>
      </div>
    </section>
  );
}
