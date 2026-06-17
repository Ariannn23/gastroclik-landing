import { Manrope, Aclonica } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const aclonica = Aclonica({
  variable: "--font-aclonica",
  subsets: ["latin"],
  weight: "400",
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
    <html lang="es" className={`${manrope.variable} ${aclonica.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
