"use client";

import { motion } from "framer-motion";

export default function SectionDecor({ blobs = [], icons = [], grid = true }) {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {grid && (
        <div className="absolute inset-0 bg-dot-grid opacity-60 [mask-image:radial-gradient(ellipse_55%_45%_at_50%_0%,black,transparent)]" />
      )}

      {blobs.map((className, i) => (
        <div key={i} className={`absolute rounded-full blur-3xl ${className}`} />
      ))}

      {icons.map(
        (
          { Icon, className, size = 64, duration = 9, delay = 0, rotate = 10 },
          i
        ) => (
          <motion.div
            key={i}
            className={`absolute ${className}`}
            animate={{ y: [0, -14, 0], rotate: [0, rotate, 0] }}
            transition={{
              duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay,
            }}
          >
            <Icon style={{ width: size, height: size }} />
          </motion.div>
        )
      )}
    </div>
  );
}
