"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HeartPulse, PawPrint } from "lucide-react";
import { staggerContainer, fadeUpItem } from "@/lib/motion";
import SectionDecor from "@/components/SectionDecor";
import SectionHeading from "@/components/SectionHeading";

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
      <SectionDecor
        blobs={[
          "left-1/2 top-0 h-[26rem] w-[26rem] -translate-x-1/2 bg-accent/10",
        ]}
        icons={[
          {
            Icon: HeartPulse,
            className: "left-6 top-10 text-brand/[0.08]",
            size: 52,
            duration: 8,
          },
          {
            Icon: PawPrint,
            className: "right-8 bottom-10 text-accent/[0.09]",
            size: 60,
            duration: 10,
            rotate: -10,
            delay: 0.6,
          },
        ]}
      />

      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Perguntas frequentes"
          description="Tudo que clínicas costumam perguntar antes de fechar."
        />

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
