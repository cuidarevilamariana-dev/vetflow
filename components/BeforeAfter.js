"use client";

import { motion } from "framer-motion";
import { ArrowRight, X, Check, PawPrint, Dog } from "lucide-react";
import { staggerContainer, fadeUpItem } from "@/lib/motion";
import SectionDecor from "@/components/SectionDecor";
import SectionHeading from "@/components/SectionHeading";

export default function BeforeAfter() {
  return (
    <section
      id="antes-depois"
      className="relative overflow-hidden px-6 py-28 sm:px-12"
    >
      <SectionDecor
        blobs={["left-0 bottom-0 h-[24rem] w-[24rem] bg-accent/10"]}
        icons={[
          {
            Icon: PawPrint,
            className: "right-6 top-8 text-brand/[0.08]",
            size: 56,
            duration: 9,
          },
          {
            Icon: Dog,
            className: "left-10 bottom-16 text-accent/[0.08]",
            size: 68,
            duration: 10,
            rotate: -10,
            delay: 0.6,
          },
        ]}
      />

      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Antes e Depois"
          title="A transformação que seu site merece"
          description="Veja o tipo de salto visual que uma clínica comum dá ao migrar pra um site premium."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid items-center gap-6 lg:grid-cols-[1fr_auto_1fr]"
        >
          <motion.div
            variants={fadeUpItem}
            className="rounded-2xl border border-foreground/10 bg-white p-2 shadow-md"
          >
            <div className="flex items-center justify-between px-3 py-2">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-red-50 px-2.5 py-1 text-xs font-medium text-red-500">
                <X className="h-3 w-3" />
                Antes
              </span>
            </div>
            <div className="space-y-2 rounded-xl bg-zinc-100 p-6">
              <div className="flex gap-2">
                <div className="h-3 w-10 rounded bg-zinc-300" />
                <div className="h-3 w-10 rounded bg-zinc-300" />
                <div className="h-3 w-10 rounded bg-zinc-300" />
                <div className="h-3 w-10 rounded bg-zinc-300" />
              </div>
              <div className="mt-4 h-24 w-full rounded bg-zinc-300" />
              <div className="mt-4 h-3 w-2/3 rounded bg-zinc-300" />
              <div className="h-3 w-1/2 rounded bg-zinc-300" />
              <div className="h-3 w-5/6 rounded bg-zinc-300" />
              <div className="mt-4 flex gap-2">
                <div className="h-8 w-20 rounded bg-zinc-300" />
                <div className="h-8 w-20 rounded bg-zinc-300" />
                <div className="h-8 w-20 rounded bg-zinc-300" />
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUpItem} className="flex justify-center">
            <div className="flex h-12 w-12 rotate-90 items-center justify-center rounded-full bg-brand text-white shadow-lg shadow-brand/30 lg:rotate-0">
              <ArrowRight className="h-5 w-5" />
            </div>
          </motion.div>

          <motion.div
            variants={fadeUpItem}
            className="rounded-2xl border border-white/50 bg-white/40 p-2 shadow-2xl shadow-brand/10 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between px-3 py-2">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-brand/10 px-2.5 py-1 text-xs font-medium text-brand">
                <Check className="h-3 w-3" />
                Depois
              </span>
            </div>
            <div className="space-y-3 rounded-xl bg-gradient-to-br from-brand/15 via-white to-accent/10 p-6">
              <div className="h-3 w-24 rounded-full bg-brand/30" />
              <div className="h-5 w-3/4 rounded bg-foreground/70" />
              <div className="h-3 w-1/2 rounded bg-foreground/25" />
              <div className="mt-4 h-10 w-36 rounded-full bg-whatsapp" />
            </div>
          </motion.div>
        </motion.div>

        <p className="mt-8 text-center text-xs text-foreground/40">
          Representação ilustrativa — substituímos por prints reais das
          clínicas atendidas assim que disponíveis.
        </p>
      </div>
    </section>
  );
}
