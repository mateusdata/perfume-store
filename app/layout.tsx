import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Atualize o título, descrição e adicione a imagem da meta tag
export const metadata: Metadata = {
  title: "Vitrine de Perfumes", // Novo título
  description: "Explore nossa coleção exclusiva de perfumes.", // Descrição personalizada
  openGraph: {
    title: "Vitrine de Perfumes",
    description: "Descubra nossa seleção incrível de fragrâncias.",
    images: [
      {
        url: "https://example.com/imagem-perfume.jpg", // Substitua pelo link correto da imagem
        width: 800,
        height: 600,
        alt: "Imagem de destaque - Perfumes",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
