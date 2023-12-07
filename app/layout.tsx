import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aloha Kush — Premium Cannabis Delivery",
  description:
    "Discover Aloha Kush, Ontario's premier cannabis delivery service. Offering a diverse selection of high-quality strains, edibles, and accessories, we bring the best of cannabis right to your doorstep. Experience fast, discreet, and reliable delivery across Ontario with Aloha Kush. Shop now for an exceptional cannabis journey!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
