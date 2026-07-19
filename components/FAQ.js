"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { staggerContainer, fadeUpItem } from "@/lib/motion";

const FAQS = [
  {
    question: "Quanto custa e como funciona o pagamento?",
    answer:
      "Trabalhamos com orçamento personalizado — cada clínica tem um escopo diferente. Na conversa inicial já te passo um valor sob medida, normalmente com 50% no início e 50% na entrega.",
  },
  {
    question: "Quanto tempo leva pra ficar pronto?",
    answer:
      "Em média, de 7 a 15 dias úteis, dependendo do escopo combinado no orçamento e da agilidade na aprovação do conteúdo.",
  },
  {
    question: "Preciso enviar o conteúdo (textos e fotos)?",
    answer:
      "Você pode enviar o que já tiver, e a gente ajuda a organizar e até sugerir textos — não precisa ser redator.",
  },
  {
    question: "O site funciona bem no celular?",
    answer:
      "Sim. Todo site é responsivo por padrão, testado em diferentes tamanhos de tela antes da entrega.",
  },
  {
    question: "A hospedagem está incluída?",
    answer:
      "Sim. Hospedamos seu site na Vercel, uma das plataformas mais rápidas do mundo — sem custo extra de servidor pra você.",
  },
  {
    question: "Posso pedir alterações depois de pronto?",
    answer:
      "Sim, todo projeto inclui um período de suporte pra ajustes; depois disso oferecemos manutenção contínua sob consulta.",
  },
  {
    question: "O site aparece no Google?",
    answer:
      "Sim. Todo projeto já sai com otimização de SEO — estrutura, performance e metadados pensados pra te ajudar a aparecer nas buscas.",
  },
  {
    question: "E se eu não gostar do design?",
    answer:
      "O design é aprovado por você antes de irmos pro desenvolvimento — ajustes nessa fase não geram custo extra.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="relative overflow-hidden px-6 py-28 sm:px-12">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="rounded-full border border-brand/20 bg-brand/5 px-4 py-1.5 text-sm font-medium text-brand">
            FAQ
          </span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Perguntas frequentes
          </h2>
          <p className="mt-4 text-lg leading-8 text-foreground/70">
            Tudo que clínicas costumam perguntar antes de fechar.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-14 space-y-4"
        >
          {FAQS.map(({ question, answer }, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={question}
                variants={fadeUpItem}
                className="overflow-hidden rounded-2xl border border-white/50 bg-white/40 backdrop-blur-xl"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-medium text-foreground">
                    {question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-brand transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm leading-6 text-foreground/65">
                        {answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
