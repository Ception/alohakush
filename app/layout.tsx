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
        <main className="relative flex px-24 pt-28 min-h-screen w-full overflow-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
