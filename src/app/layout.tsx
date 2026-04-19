import type { Metadata } from "next";
import "./globals.css";
import AuthProvider from "@/provider/authProvider";

export const metadata: Metadata = {
  title: "spoons.su",
  description: "Spoon and Fork!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
