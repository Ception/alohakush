"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { ShoppingBag } from "lucide-react";
import { ShoppingCart } from "./cart/Cart";
import axios from "axios";

const links = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "About", href: "/about" },
  // { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isCartOpen, setCartOpen] = useState(false);
  const [isHover, setHover] = useState(false);
  const [categories, setCategories] = useState<string[]>([]);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  useEffect(() => {
    axios
      .get("https://cms.alohakush.ca/api/categories")
      .then((response) => {
        const fetchedCategories = response.data.data.map(
          (cat: { attributes: { name: any } }) => cat.attributes.name
        );
        setCategories(fetchedCategories);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  const openCart = () => {
    setCartOpen(!isCartOpen);
  };

  const pathName = usePathname();
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white border-b">
        <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
          <Link href="/">
            <h1 className="md:text-4xl text-2xl text-black">
              ALOHA
              <span className="text-primary">KUSH</span>
            </h1>
          </Link>
          <nav className="hidden gap-6 lg:flex 2xl:ml-16">
            {links.map((link, index) => (
              <div key={index}>
                {link.name === "Shop" ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setDropdownVisible(true)}
                    onMouseLeave={() => setDropdownVisible(false)}
                  >
                    <Link href={link.href}>
                      <span className="text-lg text-gray-600 transition duration-100 hover:text-primary">
                        {link.name}
                      </span>
                    </Link>
                    {isDropdownVisible && (
                      <div className="absolute left-0 w-56 py-2 bg-white rounded shadow-xl">
                        {categories.map((category) => (
                          <Link
                            key={category}
                            href={`/shop/${category
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                          >
                            <span className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">
                              {category}
                            </span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link href={link.href}>
                    <span
                      className={`text-lg ${
                        pathName === link.href
                          ? "text-primary"
                          : "text-gray-600 transition duration-100 hover:text-primary"
                      }`}
                    >
                      {link.name}
                    </span>
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
              onClick={openCart}
            >
              <ShoppingBag color={isHover ? "#0284c7" : "#fe8c00"} />
              <span className="hidden text-xs text-gray-500 sm:block">
                Cart
              </span>
            </Button>
          </div>
        </div>
      </header>
      {/* Render ShoppingCart and pass the isCartOpen as a prop */}
      <ShoppingCart isOpen={isCartOpen} setCartOpen={setCartOpen} />
    </>
  );
}
