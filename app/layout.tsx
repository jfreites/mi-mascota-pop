import type { Metadata } from "next";
import { Noto_Sans, Noto_Sans_Mono, Chewy } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { Toaster } from "@/components/ui/sonner"

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

const notoSansMono = Noto_Sans_Mono({
  variable: "--font-noto-sans-mono",
  subsets: ["latin"],
});

const chewy = Chewy({
  variable: "--font-chewy",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mi Mascota Pop",
  description: "Productos personalizados para pet lovers. Playeras, gorras y accesorios.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${notoSans.variable} ${notoSansMono.variable} ${chewy.variable} antialiased `}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
