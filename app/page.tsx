import {
  CollectionSection,
  FooterSection,
  HeroSection,
  MaterialsSection,
  NavSection,
  StorySection,
  TestimonialsSection,
} from "./components/sections";

export default function Home() {
  const navItems = [
    { label: "Collection", href: "#collection" },
    { label: "Story", href: "#story" },
    { label: "Materials", href: "#materials" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  const collections = [
    {
      title: "Luna Throws",
      description: "Soft, textured blankets for calm and cozy evenings.",
    },
    {
      title: "Desert Shawls",
      description: "Light wraps with airy stitches and earthy boho tones.",
    },
    {
      title: "Studio Baskets",
      description: "Functional handcrafted storage with artisan details.",
    },
  ];

  const materials = [
    "Organic cotton yarn for breathability and softness",
    "Natural wool blends for warmth and long-term durability",
    "Low-impact dyes inspired by clay, sand, and desert skies",
  ];

  const testimonials = [
    {
      quote:
        "Every piece feels like it was made just for my home. The quality is beautiful.",
      author: "Mina K.",
    },
    {
      quote:
        "The patterns are easy to follow and still look premium when finished.",
      author: "Thandar A.",
    },
    {
      quote:
        "Warm colors, rich texture, and thoughtful packaging. Loved everything.",
      author: "Elliot S.",
    },
  ];

  return (
    <main className="min-h-screen bg-(--color-secondary) text-(--color-neutral)">
      <NavSection navItems={navItems} />
      <HeroSection />
      <CollectionSection collections={collections} />
      <StorySection />
      <MaterialsSection materials={materials} />
      <TestimonialsSection testimonials={testimonials} />
      <FooterSection navItems={navItems} />
    </main>
  );
}
