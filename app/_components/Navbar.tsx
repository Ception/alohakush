"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathName = usePathname();
  return (
    <header className="mb-8 border-b">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <Link href="/">
          <h1 className="text-4xl">
            ALOHA
            <span className="text-primary">KUSH</span>
          </h1>
        </Link>
        <nav className="hidden gap-8 lg:flex 2xl:ml-16">
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

        <div className="flex divide-x border-r sm:border-l">
            
        </div>
      </div>
    </header>
  );
}
