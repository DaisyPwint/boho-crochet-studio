"use client";

import { useEffect, useState } from "react";

type NavItem = {
  label: string;
  href: string;
};

type NavSectionProps = {
  navItems: NavItem[];
};

export function NavSection({ navItems }: NavSectionProps) {
  const [activeHref, setActiveHref] = useState<string>(navItems[0]?.href ?? "#");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveHref(navItems.find((item) => item.href === `#${entry.target.getAttribute("id")}`)?.href ?? "");
        }
      });
    }, observerOptions);
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, [])

  return (
    <nav className="sticky top-0 z-20 border-b border-(--color-tertiary) bg-(--color-secondary)/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="font-semibold text-2xl tracking-wide text-(--color-primary)">
          Boho Crochet Studio
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className={`text-sm hover:text-(--color-primary) ${activeHref === item.href ? "relative text-(--color-primary) after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-(--color-primary)" : ""}`}>
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
