"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Rocket,
  CalendarClock,
  MessagesSquare,
  TrendingUp,
  ServerCog,
  ArrowUpRight,
  Syringe,
  Bone,
} from "lucide-react";
import { getWhatsappLink } from "@/lib/whatsapp";
import { staggerContainer, fadeUpItem } from "@/lib/motion";
import TiltCard from "@/components/TiltCard";
import SectionDecor from "@/components/SectionDecor";
import SectionHeading from "@/components/SectionHeading";

const SERVICES = [
  {
    icon: Globe,
    title: "Site Institucional Premium",
    description:
      "A vitrine digital da sua clínica: design profissional que transmite confiança desde o primeiro clique.",
  },
  {
    icon: Rocket,
    title: "Landing Page para Campanhas",
    description:
      "Páginas focadas em conversão pras suas campanhas de tráfego pago ou promoções sazonais.",
  },
  {
    icon: CalendarClock,
    title: "Agendamento Online",
    description:
      "Tutores marcam consultas direto pelo site, sem trocar mensagens — menos faltas, mais organização.",
  },
  {
    icon: MessagesSquare,
    title: "Integração com WhatsApp",
    description:
      "Botão inteligente que leva o visitante direto pra uma conversa, no momento em que ele decide agir.",
  },
  {
    icon: TrendingUp,
    title: "SEO para Google",
    description:
      "Estrutura otimizada pra aparecer nas primeiras posições quando alguém procura veterinário na sua região.",
  },
  {
    icon: ServerCog,
    title: "Hospedagem e Suporte",
    description:
      "Site sempre no ar, rápido e seguro — com suporte contínuo pra você nunca lidar com isso sozinho.",
  },
];

export default function Services() {
  return (
    <section
      id="servicos"
      className="relative overflow-hidden px-6 py-28 sm:px-12"
    >
      <SectionDecor
        blobs={["right-0 top-1/3 h-[28rem] w-[28rem] bg-accent/10"]}
        icons={[
          {
            Icon: Syringe,
            className: "right-8 top-8 text-accent/[0.08]",
            size: 72,
            duration: 9,
            rotate: -15,
          },
          {
            Icon: Bone,
            className: "-left-6 bottom-10 text-brand/[0.07]",
            size: 88,
            duration: 11,
            delay: 0.5,
          },
        ]}
      />

      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Serviços"
          title="Tudo que sua clínica precisa, em um só lugar"
          description="Da criação à manutenção — cuidamos de cada detalhe pra você focar no que importa: seus pacientes."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map(({ icon: Icon, title, description }) => (
            <TiltCard
              key={title}
              variants={fadeUpItem}
              href={getWhatsappLink(
                `Olá! Quero saber mais sobre o serviço de ${title}.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col rounded-2xl border border-white/50 bg-white/40 p-8 shadow-xl shadow-black/[0.03] backdrop-blur-xl transition-colors duration-300 hover:border-brand/30 hover:shadow-2xl hover:shadow-brand/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand-dark text-white shadow-lg shadow-brand/30">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-foreground">
                {title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-foreground/65">
                {description}
              </p>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-brand">
                Saiba mais
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </TiltCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
