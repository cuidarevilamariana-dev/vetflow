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
  Bone,
  Stethoscope,
} from "lucide-react";
import { staggerContainer, fadeUpItem } from "@/lib/motion";
import SectionDecor from "@/components/SectionDecor";
import SectionHeading from "@/components/SectionHeading";

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
      <SectionDecor
        blobs={[
          "left-1/2 top-0 h-[26rem] w-[26rem] -translate-x-1/2 bg-brand/10",
        ]}
        icons={[
          {
            Icon: Bone,
            className: "left-6 bottom-6 text-brand/[0.08]",
            size: 60,
            duration: 9,
          },
          {
            Icon: Stethoscope,
            className: "right-6 top-6 text-accent/[0.09]",
            size: 68,
            duration: 10,
            rotate: -12,
            delay: 0.5,
          },
        ]}
      />

      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Diferenciais"
          title="Por que a VetFlow é diferente"
          description="Tudo isso já vem incluso em todo projeto — sem letras miúdas."
        />

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
              className="flex items-center gap-3 rounded-2xl border border-brand/10 bg-brand/[0.05] px-6 py-4 shadow-lg shadow-black/[0.03] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/30"
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
