"use client";

import { motion } from "framer-motion";
import {
  CalendarCheck,
  ShieldCheck,
  Search,
  Smartphone,
  MessageCircle,
  LifeBuoy,
} from "lucide-react";
import { staggerContainer, fadeUpItem } from "@/lib/motion";

const BENEFITS = [
  {
    icon: CalendarCheck,
    title: "Mais agendamentos",
    description:
      "Cada seção do site guia o tutor até o botão de agendar — sem distrações no caminho.",
  },
  {
    icon: ShieldCheck,
    title: "Credibilidade instantânea",
    description:
      "Um site profissional constrói confiança antes mesmo do primeiro contato — muitas vezes decide se o tutor liga ou não.",
  },
  {
    icon: Search,
    title: "Encontrado no Google",
    description:
      "Otimizado para aparecer quando alguém pesquisa 'veterinário perto de mim' na sua região.",
  },
  {
    icon: Smartphone,
    title: "Perfeito no celular",
    description:
      "Mais de 80% dos tutores acessam pelo smartphone — seu site precisa ser impecável lá, não só no computador.",
  },
  {
    icon: MessageCircle,
    title: "Contato a um clique",
    description:
      "Botão de WhatsApp sempre visível — sem formulários longos entre o tutor e a marcação da consulta.",
  },
  {
    icon: LifeBuoy,
    title: "Suporte contínuo",
    description:
      "Você não fica sozinho depois da entrega — ajustes, dúvidas e evolução do site sempre que precisar.",
  },
];

export default function Benefits() {
  return (
    <section
      id="beneficios"
      className="relative overflow-hidden px-6 py-28 sm:px-12"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-brand/10 blur-3xl" />
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
            Benefícios
          </span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Um site pensado pra trazer mais tutores até você
          </h2>
          <p className="mt-4 text-lg leading-8 text-foreground/70">
            Não é só bonito — é uma ferramenta de conversão construída pra
            transformar visitantes em consultas agendadas.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {BENEFITS.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={fadeUpItem}
              className="group relative rounded-2xl border border-white/50 bg-white/40 p-8 shadow-xl shadow-brand/5 backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative mb-6 inline-flex h-14 w-14 items-center justify-center">
                <motion.span
                  className="absolute inset-0 rounded-2xl bg-brand/10"
                  animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <Icon className="relative h-6 w-6 text-brand transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
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
