import type { Metadata } from "next";
import "./globals.css";
import { inter, montserrat } from './ui/fonts'

export const metadata: Metadata = {
  title: "spoons.verse",
  description: "Spoon and Fork",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
