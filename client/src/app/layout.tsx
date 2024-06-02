import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";

import Providers from "./provider";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Employee Management",
  description: "Employee management system for Admin and Users",
};
export const revalidate = 0;
export const fetchCache = "force-no-store";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}
