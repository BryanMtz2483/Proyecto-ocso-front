import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// 👇 importa tu archivo providers.tsx
import { Providers } from "./providers"; // asegúrate que la ruta sea correcta

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ocso",
  description: "Pagina web de administración de ocsos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {/* 👇 envuelve toda la app con tu Providers */}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
