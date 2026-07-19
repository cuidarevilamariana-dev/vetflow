"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, fadeUpItem } from "@/lib/motion";
import TiltCard from "@/components/TiltCard";

const PHOTOS = [
  {
    src: "/images/galeria-exame.jpg",
    alt: "Veterinário examinando os olhos de um cão com equipamento de diagnóstico",
    label: "Exame clínico",
  },
  {
    src: "/images/galeria-consulta-felina.jpg",
    alt: "Veterinário auscultando um gato com estetoscópio",
    label: "Consulta felina",
  },
  {
    src: "/images/galeria-procedimento.jpg",
    alt: "Equipe veterinária preparando um cão para um procedimento",
    label: "Procedimentos",
  },
  {
    src: "/images/galeria-vacinacao.jpg",
    alt: "Veterinário aplicando vacina em um cão",
    label: "Vacinação",
  },
  {
    src: "/images/galeria-diagnostico.jpg",
    alt: "Veterinária analisando exames de imagem em monitores",
    label: "Diagnóstico por imagem",
  },
  {
    src: "/images/galeria-equipe.jpg",
    alt: "Equipe veterinária em consultório moderno",
    label: "Nossa equipe",
  },
];

export default function Gallery() {
  return (
    <section
      id="galeria"
      className="relative overflow-hidden px-6 py-28 sm:px-12"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 h-[26rem] w-[26rem] rounded-full bg-accent/10 blur-3xl" />
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
            Galeria
          </span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
            O dia a dia de uma clínica de verdade
          </h2>
          <p className="mt-4 text-lg leading-8 text-foreground/70">
            É esse cuidado que o site da sua clínica precisa transmitir logo
            no primeiro clique.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3"
        >
          {PHOTOS.map(({ src, alt, label }) => (
            <TiltCard
              key={src}
              variants={fadeUpItem}
              strength={10}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/50 shadow-xl shadow-black/[0.05] backdrop-blur-xl"
            >
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 400px"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="absolute bottom-4 left-4 text-sm font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {label}
              </span>
            </TiltCard>
          ))}
        </motion.div>

        <p className="mt-8 text-center text-xs text-foreground/40">
          Fotos ilustrativas de uso comercial livre — no site final,
          substituímos por fotos reais da sua clínica.
        </p>
      </div>
    </section>
  );
}
