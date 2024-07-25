import type { Metadata } from "next";
import "./globals.css";
import { inter, montserrat } from './ui/fonts'

export const metadata: Metadata = {
  title: "spoons.global",
  description: "Spoon and fork!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
