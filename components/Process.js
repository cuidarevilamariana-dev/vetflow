"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Search, PenTool, Code2, Rocket, Cross, Sparkles } from "lucide-react";
import { staggerContainer, fadeUpItem } from "@/lib/motion";
import SectionDecor from "@/components/SectionDecor";
import SectionHeading from "@/components/SectionHeading";

const STEPS = [
  {
    icon: Search,
    title: "Diagnóstico",
    description:
      "Entendemos sua clínica, seu público e o que hoje afasta ou atrai tutores no seu site atual (ou na ausência dele).",
  },
  {
    icon: PenTool,
    title: "Design",
    description:
      "Criamos o layout visual, cores e identidade — você aprova antes de qualquer linha de código.",
  },
  {
    icon: Code2,
    title: "Desenvolvimento",
    description:
      "Construímos o site de verdade: rápido, responsivo e otimizado, com animações e integrações incluídas.",
  },
  {
    icon: Rocket,
    title: "Publicação",
    description:
      "Publicamos no ar, testamos tudo com você e entregamos as chaves — com suporte pra qualquer ajuste.",
  },
];

export default function Process() {
  return (
    <section
      id="processo"
      className="relative overflow-hidden px-6 py-28 sm:px-12"
    >
      <SectionDecor
        blobs={["bottom-0 right-0 h-[26rem] w-[26rem] bg-brand/10"]}
        icons={[
          {
            Icon: Cross,
            className: "left-4 top-4 text-brand/[0.07]",
            size: 60,
            duration: 8,
          },
          {
            Icon: Sparkles,
            className: "right-10 top-24 text-accent/[0.1]",
            size: 48,
            duration: 7,
            rotate: 16,
            delay: 0.8,
          },
        ]}
      />

      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Processo"
          title="Do diagnóstico ao site no ar, em 4 etapas"
          description="Um processo claro, sem enrolação — você acompanha cada etapa até a publicação."
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="relative mt-14 h-64 w-full overflow-hidden rounded-3xl sm:h-80"
        >
          <Image
            src="/images/processo-equipe.jpg"
            alt="Veterinário examinando um cão com cuidado em consultório"
            fill
            sizes="(max-width: 1024px) 100vw, 1152px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-brand-dark/10 to-transparent" />
          <p className="absolute bottom-6 left-6 max-w-sm text-sm font-medium text-white/90 sm:text-base">
            Cuidado de verdade, em cada etapa — do primeiro diagnóstico à
            publicação do site.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="relative mt-20 grid gap-12 lg:grid-cols-4 lg:gap-8"
        >
          <div className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent lg:block" />

          {STEPS.map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={title}
              variants={fadeUpItem}
              className="relative flex flex-col items-center text-center lg:items-start lg:text-left"
            >
              <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand-dark text-white shadow-lg shadow-brand/30">
                <Icon className="h-7 w-7" />
              </div>
              <span className="mt-4 text-xs font-semibold uppercase tracking-wider text-brand/60">
                Etapa {index + 1}
              </span>
              <h3 className="mt-1 text-lg font-semibold text-foreground">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-foreground/65">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
