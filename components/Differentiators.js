"use client";

import { motion } from "framer-motion";
import {
  Gem,
  TrendingUp,
  MessageCircle,
  Zap,
  Smartphone,
  Triangle,
  Headset,
} from "lucide-react";
import { staggerContainer, fadeUpItem } from "@/lib/motion";

const DIFFERENTIATORS = [
  { icon: Gem, label: "Design premium" },
  { icon: TrendingUp, label: "SEO otimizado" },
  { icon: MessageCircle, label: "Integração com WhatsApp" },
  { icon: Zap, label: "Site rápido" },
  { icon: Smartphone, label: "Responsivo" },
  { icon: Triangle, label: "Hospedagem na Vercel" },
  { icon: Headset, label: "Suporte contínuo" },
];

export default function Differentiators() {
  return (
    <section
      id="diferenciais"
      className="relative overflow-hidden px-6 py-28 sm:px-12"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-brand/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="rounded-full border border-brand/20 bg-brand/5 px-4 py-1.5 text-sm font-medium text-brand">
            Diferenciais
          </span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Por que a VetFlow é diferente
          </h2>
          <p className="mt-4 text-lg leading-8 text-foreground/70">
            Tudo isso já vem incluso em todo projeto — sem letras miúdas.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 flex flex-wrap justify-center gap-4"
        >
          {DIFFERENTIATORS.map(({ icon: Icon, label }) => (
            <motion.div
              key={label}
              variants={fadeUpItem}
              className="flex items-center gap-3 rounded-2xl border border-white/50 bg-white/40 px-6 py-4 shadow-lg shadow-black/[0.03] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/30"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand-dark text-white">
                <Icon className="h-5 w-5" />
              </div>
              <span className="text-sm font-semibold text-foreground">
                {label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
