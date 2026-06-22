import {
  CollectionSection,
  FooterSection,
  HeroSection,
  MaterialsSection,
  NavSection,
  StorySection,
} from "./components/sections";

import CollectionFour from "./assets/collection-four.png";
import CollectionThree from "./assets/collection-three.jpg";
import CollectionTwo from "./assets/collection-two.jpg";

import MaterialOne from "./assets/material-one.png";
import MaterialThree from "./assets/material-three.png";
import MaterialTwo from "./assets/material-two.png";
import { WorkshopSection } from "./components/sections/WorkshopSection";

export default function Home() {
  const navItems = [
    { label: "Collection", href: "#collection" },
    { label: "Story", href: "#story" },
    { label: "Materials", href: "#materials" },
    { label: "Workshop", href: "#workshop" },
  ];

  const collections = [
    {
      title: "Nomad Tote",
      src: CollectionFour
    },
    {
      title: "Desert Shawl",
      src: CollectionTwo,
    },
    {
      title: "Studio Baskets",
      src: CollectionThree
    }
  ];

  const materials = [
    {
      title: "01. curated environment",
      label: "Room to breathe, space to create.",
      src: MaterialOne
    },
    {
      title: "02. natural fibers",
      label: "Organic cotton yarns for breathability and softness.",
      src: MaterialTwo
    },
    {
      title: "03. low-impact dyes",
      label: "Colors inspired by clay, sand, and desert skies.",
      src: MaterialThree
    }
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <NavSection navItems={navItems} />
      <HeroSection />
      <CollectionSection collections={collections} />
      <StorySection />
      <MaterialsSection materials={materials} />
      <WorkshopSection />
      <FooterSection navItems={navItems} />
    </main>
  );
}
