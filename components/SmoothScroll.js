"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.1,
      anchors: { offset: 88 },
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}
