"use client";

import { Menu, X } from "lucide-react";
import { useHeaderAnimation } from "../lib/model/header-animation-model";
import FlowingMenu from "@/components/ui/flowing-menu/flowing-menu";

export const BurgerMenu = () => {
  const { menuRef, overlayRef, isOpen, toggleMenu } = useHeaderAnimation();

  const demoItems = [
    {
      link: "#",
      text: "Mojave",
      image: "https://picsum.photos/600/400?random=1",
    },
    {
      link: "#",
      text: "Sonoma",
      image: "https://picsum.photos/600/400?random=2",
    },
    {
      link: "#",
      text: "Monterey",
      image: "https://picsum.photos/600/400?random=3",
    },
    {
      link: "#",
      text: "Sequoia",
      image: "https://picsum.photos/600/400?random=4",
    },
  ];

  return (
    <div className="relative z-50" ref={menuRef}>
      <button
        className="flex items-center justify-center z-[1000] h-12 w-12 rounded-full bg-custom-orange shadow-md"
        onClick={toggleMenu}
      >
        {isOpen ? (
          <X color="#FFFFFF" className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>
      <div
        ref={overlayRef}
        className="fixed top-0 left-0 w-full bg-custom-black origin-top overflow-hidden"
        style={{ height: 0 }}
      >
        <div className="h-[600px] relative container mx-auto flex items-center justify-center">
          <FlowingMenu items={demoItems} />
        </div>
      </div>
    </div>
  );
};
