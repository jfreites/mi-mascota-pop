import type { Metadata } from "next";
import { Noto_Sans, Noto_Sans_Mono, Chewy, Fredoka } from "next/font/google";
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

const fredoka = Fredoka({
  variable: "--font-fredoka",
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
        className={`${notoSans.variable} ${notoSansMono.variable} ${chewy.variable} ${fredoka.variable} antialiased overflow-x-hidden relative text-gray-800`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
