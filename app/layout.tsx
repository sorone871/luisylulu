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

export const metadata: Metadata = {
  // Reemplaza con tu dominio real de producción cuando lo despliegues
  metadataBase: new URL("https://lyl.soroner.com/"),
  title: "Lulu & Luis | ¡Nos Casamos!",
  description: "Acompáñanos a celebrar nuestra boda este 03 de Octubre de 2026.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Lulu & Luis | ¡Nos Casamos!",
    description: "Acompáñanos a celebrar nuestra boda este 03 de Octubre de 2026.",
    url: "https://lyl.soroner.com/",
    siteName: "Boda Lulu & Luis",
    images: [
      {
        url: "/images/novios/novios-portada.jpeg",
        width: 1200,
        height: 630,
        alt: "Invitación de Boda Lulu & Luis",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lulu & Luis | ¡Nos Casamos!",
    description: "Acompáñanos a celebrar nuestra boda este 03 de Octubre de 2026.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex flex-col" suppressHydrationWarning>{children}</body>
    </html>
  );
}
