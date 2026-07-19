"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code2, Rocket } from "lucide-react";
import { staggerContainer, fadeUpItem } from "@/lib/motion";

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
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute bottom-0 right-0 h-[26rem] w-[26rem] rounded-full bg-brand/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="rounded-full border border-brand/20 bg-brand/5 px-4 py-1.5 text-sm font-medium text-brand">
            Processo
          </span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Do diagnóstico ao site no ar, em 4 etapas
          </h2>
          <p className="mt-4 text-lg leading-8 text-foreground/70">
            Um processo claro, sem enrolação — você acompanha cada etapa até
            a publicação.
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
