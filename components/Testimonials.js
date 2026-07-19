"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { staggerContainer, fadeUpItem } from "@/lib/motion";
import TiltCard from "@/components/TiltCard";

const TESTIMONIALS = [
  {
    quote:
      "Depois que lançamos o novo site, os agendamentos pelo WhatsApp praticamente dobraram. Parece outro negócio.",
    name: "Dra. Fernanda Lopes",
    role: "Clínica Vida Animal",
    initials: "FL",
  },
  {
    quote:
      "Finalmente um site que passa a seriedade da nossa clínica. Os tutores comentam como ficou profissional.",
    name: "Dr. Marcos Andrade",
    role: "PetCare Veterinária",
    initials: "MA",
  },
  {
    quote:
      "Processo rápido, comunicação clara e um resultado muito acima do que eu esperava pelo investimento.",
    name: "Dra. Juliana Prado",
    role: "Clínica Bichos & Cia",
    initials: "JP",
  },
];

export default function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="relative overflow-hidden px-6 py-28 sm:px-12"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-[26rem] w-[26rem] rounded-full bg-brand/10 blur-3xl" />
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
            Depoimentos
          </span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Quem já construiu com a gente
          </h2>
          <p className="mt-4 text-lg leading-8 text-foreground/70">
            O tipo de retorno que buscamos entregar pra cada clínica
            parceira.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid gap-6 lg:grid-cols-3"
        >
          {TESTIMONIALS.map(({ quote, name, role, initials }) => (
            <TiltCard
              key={name}
              variants={fadeUpItem}
              strength={6}
              className="relative flex flex-col rounded-2xl border border-white/50 bg-white/40 p-8 shadow-xl shadow-black/[0.03] backdrop-blur-xl"
            >
              <span className="absolute right-6 top-6 rounded-full bg-foreground/5 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-foreground/40">
                Exemplo
              </span>
              <Quote className="h-8 w-8 text-brand/20" />

              <div className="mt-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-accent text-accent"
                  />
                ))}
              </div>

              <p className="mt-4 flex-1 text-base leading-7 text-foreground/80">
                &ldquo;{quote}&rdquo;
              </p>

              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-dark text-sm font-semibold text-white">
                  {initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {name}
                  </p>
                  <p className="text-xs text-foreground/55">{role}</p>
                </div>
              </div>
            </TiltCard>
          ))}
        </motion.div>

        <p className="mt-8 text-center text-xs text-foreground/40">
          Depoimentos ilustrativos — serão substituídos por avaliações reais
          de clientes assim que disponíveis.
        </p>
      </div>
    </section>
  );
}
