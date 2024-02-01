"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { ShoppingBag, Menu, X } from "lucide-react";
import { ShoppingCart } from "./cart/Cart";

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
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    fetch("/api/categories", {
      headers: {
        cache: "no-cache",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        return response.json();
      })
      .then((jsonResponse) => {
        const fetchedCategories = jsonResponse.data.map(
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

  const toggleDropdown = (
    visibility: boolean | ((prevState: boolean) => boolean)
  ) => {
    if (isMenuOpen) {
      setDropdownVisible(visibility);
    }
  };

  const toggleMobileMenu = () => {
    setMenuOpen(!isMenuOpen);
    if (isDropdownVisible) {
      setDropdownVisible(false);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white border-b">
        <div className="flex items-center justify-between mx-auto px-4 h-14 sm:h-24 lg:max-w-7xl lg:px-6">
          <Link href="/">
            <span className="md:text-4xl text-2xl text-black">
              ALOHA<span className="text-primary">KUSH</span>
            </span>
          </Link>
          <nav className="hidden lg:flex gap-6 ml-auto">
            {links.map((link, index) => (
              <div key={index}>
                {link.name === "Shop" ? (
                  <div
                    className="relative"
                    onMouseEnter={() => toggleDropdown(true)}
                    onMouseLeave={() => toggleDropdown(false)}
                  >
                    <Link href={link.href}>
                      <span
                        className={`text-lg ${
                          pathName.startsWith(link.href)
                            ? "text-primary"
                            : "text-gray-600"
                        } transition duration-100 hover:text-primary`}
                      >
                        {link.name}
                      </span>
                    </Link>
                    {isDropdownVisible && (
                      <div className="absolute left-0 w-56 py-2 bg-white rounded shadow-xl">
                        {categories.map((category, catIndex) => (
                          <Link
                            key={catIndex}
                            href={`/shop/${category
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                          >
                            <span className="block px-4 py-2 text-gray-800 hover:bg-sky-400 hover:text-white">
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
                          : "text-gray-600"
                      } transition duration-100 hover:text-primary`}
                    >
                      {link.name}
                    </span>
                  </Link>
                )}
              </div>
            ))}
          </nav>
          <div className="relative flex items-center">
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
            <div className="lg:hidden">
              <Button
                variant={"link"}
                className="p-2"
                onClick={toggleMobileMenu}
              >
                {isMenuOpen ? (
                  <X size={24} />
                ) : (
                  <Menu size={24} color="#fe8c00" />
                )}
              </Button>
              {isMenuOpen && (
                <div className="absolute top-full right-0 w-56 py-2 bg-white rounded shadow-xl">
                  {links.map((link, index) => (
                    <Link key={index} href={link.href}>
                      <span className="block px-4 py-2 text-gray-800 hover:bg-sky-400 hover:text-white">
                        {link.name}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      <ShoppingCart isOpen={isCartOpen} setCartOpen={setCartOpen} />
    </>
  );
}
