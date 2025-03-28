import { useEffect, useRef, useState } from "react";
import type { gsap } from "gsap";

export const useHeaderAnimation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    import("gsap").then((gsap) => {
      timeline.current = gsap.default.timeline({ paused: true });

      if (overlayRef.current) {
        gsap.default.set(overlayRef.current, { height: 0 });

        timeline.current.to(overlayRef.current, {
          height: "100vh",
          duration: 0.7,
          ease: "power3.inOut",
        });
      }
    });

    return () => {
      if (timeline.current) {
        timeline.current.kill();
      }
    };
  }, []);

  const toggleMenu = () => {
    if (timeline.current) {
      if (isOpen) {
        timeline.current.reverse();
      } else {
        timeline.current.play();
      }
      setIsOpen(!isOpen);
    }
  };

  return { menuRef, overlayRef, isOpen, toggleMenu };
};
