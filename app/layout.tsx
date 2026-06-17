import localFont from "next/font/local";
import "./globals.css";

const agrandir = localFont({
  src: [
    { path: "../public/fonts/Agrandir-Regular.otf", weight: "400" },
    { path: "../public/fonts/Agrandir-Bold.otf", weight: "700" },
  ],
  variable: "--font-agrandir",
});

const newSpiritCondensed = localFont({
  src: [
    { path: "../public/fonts/NewSpiritCondensed-Regular.otf", weight: "400" },
    { path: "../public/fonts/NewSpiritCondensed-Bold.otf", weight: "700" },
  ],
  variable: "--font-spirit",
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
      className={`${agrandir.variable} ${newSpiritCondensed.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
