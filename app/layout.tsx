import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Header";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: "400", style: "normal" });

export const metadata: Metadata = {
  title: "AlohaKush — Premium Cannabis Delivery",
  description:
    "Discover AlohaKush, Ontario's premier cannabis delivery service. Offering a diverse selection of high-quality strains, edibles, and accessories, we bring the best of cannabis right to your doorstep. Experience fast, discreet, and reliable delivery across Ontario with AlohaKush. Shop now for an exceptional cannabis journey!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <Navbar />
        <main className="relative flex justify-center px-12 pt-12 sm:px-20 sm:pt-20 md:px-24 md:pt-24 h-screen w-full overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
