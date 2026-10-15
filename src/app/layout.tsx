import type { Metadata } from "next";
import "./globals.css";
import AuthProvider from "@/provider/authProvider";
import NavigationBar from "./nav/navbar";

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
      <body className="overflow-x-clip"> {/* **:outline-[red] **:outline-1 */}
        <AuthProvider>
          <NavigationBar />
          <main>
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
