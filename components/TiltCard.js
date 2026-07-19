"use client";

import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useSpring,
  useTransform,
} from "framer-motion";

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
  const spotlightX = useMotionValue(50);
  const spotlightY = useMotionValue(50);
  const spotlightOpacity = useMotionValue(0);

  const springConfig = { stiffness: 300, damping: 25 };
  const rotateX = useSpring(
    useTransform(y, [-0.5, 0.5], [strength, -strength]),
    springConfig
  );
  const rotateY = useSpring(
    useTransform(x, [-0.5, 0.5], [-strength, strength]),
    springConfig
  );

  const spotlightBackground = useMotionTemplate`radial-gradient(320px circle at ${spotlightX}% ${spotlightY}%, rgba(255,255,255,0.35), transparent 75%)`;

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const relX = (event.clientX - rect.left) / rect.width;
    const relY = (event.clientY - rect.top) / rect.height;
    x.set(relX - 0.5);
    y.set(relY - 0.5);
    spotlightX.set(relX * 100);
    spotlightY.set(relY * 100);
  }

  function handleMouseEnter() {
    spotlightOpacity.set(1);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
    spotlightOpacity.set(0);
  }

  const MotionTag = motion[href ? "a" : as];

  return (
    <MotionTag
      href={href}
      variants={variants}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className={className}
      {...rest}
    >
      {children}
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit] mix-blend-overlay"
        style={{ background: spotlightBackground, opacity: spotlightOpacity }}
      />
    </MotionTag>
  );
}
