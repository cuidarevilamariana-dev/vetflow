"use client";

import { motion } from "framer-motion";
import { wordContainer, wordItem } from "@/lib/motion";

export default function SectionHeading({ eyebrow, title, description }) {
  const words = title.split(" ");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-2xl text-center"
    >
      <span className="rounded-full border border-brand/20 bg-brand/5 px-4 py-1.5 text-sm font-medium text-brand">
        {eyebrow}
      </span>

      <motion.h2
        variants={wordContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
        className="mt-6 font-heading text-4xl font-medium tracking-tight text-foreground sm:text-5xl"
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            variants={wordItem}
            className="mr-[0.28em] inline-block last:mr-0"
          >
            {word}
          </motion.span>
        ))}
      </motion.h2>

      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        className="mx-auto mt-4 block h-1 w-14 origin-left rounded-full bg-gradient-to-r from-brand via-accent to-brand-dark"
      />

      <p className="mt-4 text-lg leading-8 text-foreground/70">
        {description}
      </p>
    </motion.div>
  );
}
