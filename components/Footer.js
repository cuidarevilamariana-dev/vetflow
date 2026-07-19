import { MessageCircle, Mail } from "lucide-react";
import { getWhatsappLink } from "@/lib/whatsapp";
import { FOOTER_LINKS } from "@/lib/nav";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-foreground/10 bg-background px-6 pb-8 pt-16 sm:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr]">
          <div className="max-w-xs">
            <span className="text-lg font-semibold tracking-tight text-foreground">
              Vet<span className="text-brand">Flow</span>
            </span>
            <p className="mt-3 text-sm leading-6 text-foreground/60">
              Sites premium para clínicas veterinárias que querem ser
              lembradas — do diagnóstico à publicação.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Navegação
            </h3>
            <ul className="mt-4 space-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-foreground/60 transition-colors hover:text-brand"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Contato
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={getWhatsappLink(
                    "Olá! Quero saber mais sobre os sites da VetFlow."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-foreground/60 transition-colors hover:text-brand"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:Joca01318@gmail.com"
                  className="inline-flex items-center gap-2 text-sm text-foreground/60 transition-colors hover:text-brand"
                >
                  <Mail className="h-4 w-4" />
                  Joca01318@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-foreground/10 pt-8 text-xs text-foreground/45 sm:flex-row">
          <p>© {year} VetFlow. Todos os direitos reservados.</p>
          <p>Feito com cuidado para quem cuida.</p>
        </div>
      </div>
    </footer>
  );
}
