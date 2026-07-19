"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function TiltCard({
  children,
  className = "",
  as = "div",
  href,
  variants,
  strength = 8,
  ...rest
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 300, damping: 25 };
  const rotateX = useSpring(
    useTransform(y, [-0.5, 0.5], [strength, -strength]),
    springConfig
  );
  const rotateY = useSpring(
    useTransform(x, [-0.5, 0.5], [-strength, strength]),
    springConfig
  );

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const MotionTag = motion[href ? "a" : as];

  return (
    <MotionTag
      href={href}
      variants={variants}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
