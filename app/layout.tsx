import { Inter, Noto_Sans, DM_Sans, Montserrat } from "next/font/google";
import "./globals.css";

// ── Inter: Cuerpo / UI ─────────────────────────────────────
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// ── Montserrat: Títulos y subtítulos ──────────────────────────
const montserrat = Montserrat({
  variable: "--font-headings",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  display: "swap",
});

// ── Noto Sans SemiCondensed Bold: Botones ────────────────────────
const notoSans = Noto_Sans({
  variable: "--font-buttons",
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

// ── DM Sans 500: Párrafos ─────────────────────────────────────────
const dmSans = DM_Sans({
  variable: "--font-paragraph",
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
});

export const metadata = {
  title: "GastroClick | Cartas de Comida Digitales",
  description: "Crea cartas de comida digitales modernas y atractivas con GastroClick.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${montserrat.variable} ${notoSans.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col h-full">{children}</body>
    </html>
  );
}
