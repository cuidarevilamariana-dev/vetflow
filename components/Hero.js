"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { getWhatsappLink } from "@/lib/whatsapp";

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const blobsY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-6 pt-28 pb-16 text-center sm:px-12"
    >
      <motion.div
        style={{ y: blobsY }}
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <motion.div
          className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-brand/30 blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-32 -right-24 h-[28rem] w-[28rem] rounded-full bg-accent/20 blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, -40, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(14,124,102,0.1),transparent_60%)]" />
      </motion.div>

      <motion.div
        style={{ opacity: contentOpacity }}
        className="flex flex-col items-center"
      >
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6 rounded-full border border-brand/20 bg-white/60 px-4 py-1.5 text-sm font-medium text-brand backdrop-blur-sm"
      >
        Sites para clínicas veterinárias
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="max-w-4xl text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
      >
        O site que faz sua clínica parecer{" "}
        <span className="bg-gradient-to-r from-brand to-brand-dark bg-clip-text text-transparent">
          tão boa quanto realmente é
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-6 max-w-xl text-lg leading-8 text-foreground/70"
      >
        Criamos sites profissionais e rápidos para clínicas veterinárias —
        pensados para transmitir confiança a cada tutor que chega até você
        pelo Google ou pelas redes sociais.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
      >
        <a
          href={getWhatsappLink(
            "Olá! Quero saber mais sobre os sites da VetFlow para clínicas veterinárias."
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-full bg-whatsapp px-8 py-4 text-base font-semibold text-white shadow-lg shadow-whatsapp/25 transition-transform hover:scale-105"
        >
          Falar no WhatsApp
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
        <a
          href="#diferenciais"
          className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-white/50 px-8 py-4 text-base font-semibold text-foreground backdrop-blur-sm transition-colors hover:border-brand/40 hover:text-brand"
        >
          Ver diferenciais
        </a>
      </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4 }}
        className="mt-16 w-full max-w-3xl"
      >
        <motion.div
          style={{ y: imageY }}
          className="relative rounded-2xl border border-white/40 bg-white/40 p-2 shadow-2xl shadow-brand/10 backdrop-blur-xl"
        >
          <div className="flex items-center gap-1.5 px-3 py-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
          </div>
          <div className="relative aspect-video w-full overflow-hidden rounded-xl">
            <Image
              src="/images/hero-consulta.jpg"
              alt="Veterinário atendendo um cão com a tutora em consultório moderno"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/30 via-transparent to-transparent" />
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 text-foreground/30"
      >
        <ChevronDown className="h-6 w-6" />
      </motion.div>
    </section>
  );
}
