import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import logo from "@/public/logo.png";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadados atualizados
export const metadata: Metadata = {
  title: "Nona Concept", // Título que você mencionou
  description: "Nona | Concept - Explore uma experiência única e personalizada. ✨", // Nova descrição
  openGraph: {
    title: "Nona Concept",
    description: "Descubra fragrâncias irresistíveis que capturam sua essência única. ✨",
    images: [
      {
        url: "https://scontent-for2-2.cdninstagram.com/v/t51.2885-19/483438639_9104407999658097_8164724548969486896_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=scontent-for2-2.cdninstagram.com&_nc_cat=109&_nc_oc=Q6cZ2QFnZC6jsz_84d0FUg9zWpnwvVA4IMPSxUoFc6zZ7HUJ2RZQhylA1ta1HwTXaW9MhQYLMTxpU4G--NTRtsvMuy0k&_nc_ohc=KVNbp7ALO1MQ7kNvgFVxDi1&_nc_gid=xiEbTQJu6Pgnou8cEgqolw&edm=APoiHPcBAAAA&ccb=7-5&oh=00_AYEHqpDHcgOpqur4Cr4G9LLDHNCZkkdZ3SFB2iRc-AnskQ&oe=67E3D019&_nc_sid=22de04", // Link fornecido
        width: 150,
        height: 150,
        alt: "Logo Nona Concept", // Texto alternativo
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
        <link rel="icon" href="https://scontent-for2-2.cdninstagram.com/v/t51.2885-19/483438639_9104407999658097_8164724548969486896_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=scontent-for2-2.cdninstagram.com&_nc_cat=109&_nc_oc=Q6cZ2QFnZC6jsz_84d0FUg9zWpnwvVA4IMPSxUoFc6zZ7HUJ2RZQhylA1ta1HwTXaW9MhQYLMTxpU4G--NTRtsvMuy0k&_nc_ohc=KVNbp7ALO1MQ7kNvgFVxDi1&_nc_gid=xiEbTQJu6Pgnou8cEgqolw&edm=APoiHPcBAAAA&ccb=7-5&oh=00_AYEHqpDHcgOpqur4Cr4G9LLDHNCZkkdZ3SFB2iRc-AnskQ&oe=67E3D019&_nc_sid=22de04" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
