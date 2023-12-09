"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { ShoppingBag } from "lucide-react";

const links = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isHover, setHover] = useState(false);
  const pathName = usePathname();
  return (
    <header className="mb-8 border-b">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <Link href="/">
          <h1 className="md:text-4xl text-2xl">
            ALOHA
            <span className="text-primary">KUSH</span>
          </h1>
        </Link>
        <nav className="hidden gap-6 lg:flex 2xl:ml-16">
          {links.map((link, index) => (
            <div key={index}>
              {pathName === link.href ? (
                <Link className="text-lg text-primary" href={link.href}>
                  {link.name}
                </Link>
              ) : (
                <Link
                  className="text-lg text-gray-600 transition duration-100 hover:text-primary"
                  href={link.href}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="flex divide-x">
          <Button
            variant={"link"}
            className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <ShoppingBag color={isHover ? "#0284c7" : "#fe8c00"} />
            <span className="hidden text-xs text-gray-500 sm:block">Cart</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
