import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import "lenis/dist/lenis.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
});

const SITE_TITLE = "VetFlow — Sites premium para clínicas veterinárias";
const SITE_DESCRIPTION =
  "Criamos sites profissionais e rápidos para clínicas veterinárias, feitos para transmitir confiança a cada tutor que chega até você.";

export const metadata = {
  metadataBase: new URL("https://vetflow.com.br"),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: [
    "site para clínica veterinária",
    "site para veterinário",
    "landing page para clínica veterinária",
    "agência de sites premium",
    "criação de sites para pet shop",
  ],
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
