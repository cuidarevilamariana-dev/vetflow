"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { getWhatsappLink } from "@/lib/whatsapp";
import { HEADER_LINKS } from "@/lib/nav";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "border-b border-foreground/5 bg-background/70 shadow-sm backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <a
          href="#hero"
          className="text-lg font-semibold tracking-tight text-foreground"
        >
          Vet<span className="text-brand">Flow</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-foreground/70 lg:flex">
          {HEADER_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={getWhatsappLink(
              "Olá! Quero saber mais sobre os sites da VetFlow para clínicas veterinárias."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center rounded-full bg-whatsapp px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-whatsapp/20 transition-transform hover:scale-105 sm:inline-flex"
          >
            Falar no WhatsApp
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-foreground/5 lg:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-foreground/5 bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 py-4">
              {HEADER_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-2 py-3 text-base font-medium text-foreground/80 transition-colors hover:bg-brand/5 hover:text-brand"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={getWhatsappLink(
                  "Olá! Quero saber mais sobre os sites da VetFlow para clínicas veterinárias."
                )}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="mt-3 inline-flex items-center justify-center rounded-full bg-whatsapp px-5 py-3 text-sm font-semibold text-white shadow-md shadow-whatsapp/20 sm:hidden"
              >
                Falar no WhatsApp
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
