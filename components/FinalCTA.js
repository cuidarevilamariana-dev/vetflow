"use client";

import { motion } from "framer-motion";
import { PawPrint } from "lucide-react";
import { getWhatsappLink } from "@/lib/whatsapp";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden px-6 py-28 sm:px-12">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl bg-gradient-to-br from-brand to-brand-dark px-6 py-20 text-center shadow-2xl shadow-brand/30 sm:px-16">
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            className="absolute -left-10 -top-10 h-64 w-64 rounded-full bg-white/10 blur-3xl"
            animate={{ x: [0, 20, 0], y: [0, 15, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-10 -right-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
            animate={{ x: [0, -20, 0], y: [0, -15, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute right-10 top-8 text-white/10"
            animate={{ y: [0, -10, 0], rotate: [0, 8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <PawPrint className="h-16 w-16" />
          </motion.div>
          <motion.div
            className="absolute bottom-10 left-10 text-white/10"
            animate={{ y: [0, 10, 0], rotate: [0, -8, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          >
            <PawPrint className="h-10 w-10" />
          </motion.div>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl"
        >
          Sua clínica merece um site à altura do cuidado que você oferece
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mt-4 text-lg text-white/80"
        >
          Fale agora com a gente e receba uma proposta personalizada em
          minutos.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          href={getWhatsappLink(
            "Olá! Quero criar o site premium da minha clínica com a VetFlow."
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="relative mt-10 inline-flex items-center gap-2 rounded-full bg-whatsapp px-9 py-4 text-base font-semibold text-white shadow-lg shadow-black/20 transition-transform hover:scale-105"
        >
          Falar no WhatsApp agora
        </motion.a>
      </div>
    </section>
  );
}
