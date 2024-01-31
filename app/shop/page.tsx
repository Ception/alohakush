"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import image1 from "../../public/image1.jpg";
import image2 from "../../public/image2.jpg";
import image3 from "../../public/image3.jpg";
import image4 from "../../public/image4.jpg";
import image5 from "../../public/image5.jpg";
import image6 from "../../public/image6.jpg";
import image7 from "../../public/image7.jpg";
import image8 from "../../public/image8.jpg";

interface Category {
  name: string;
  imageUrl: string;
}

export default function Shop() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const images = [
      image1,
      image2,
      image3,
      image4,
      image5,
      image6,
      image7,
      image8,
    ];

    fetch("/api/categories", {
      headers: {
        "Cache-Control": "no-cache",
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
          (cat: { attributes: { name: any } }, index: number) => ({
            name: cat.attributes.name,
            imageUrl: images[index % images.length],
          })
        );
        setCategories(fetchedCategories);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  return (
    <div className="flex justify-center items-center h-[calc(100vh-6.0rem)] overflow-hidden">
      <div className="w-full overflow-x-auto">
        {/* Left gradient shadow */}
        <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-white to-transparent z-10"></div>

        <div className="inline-flex justify-center gap-4 p-4">
          {categories.slice(0, 8).map((category, index) => (
            <div
              key={index}
              className="category-card flex-shrink-0 flex flex-col items-center max-w-xs md:max-w-xxs rounded overflow-hidden shadow-lg transform transition duration-500 ease-in-out hover:scale-105"
              style={{ minWidth: "25%" }}
            >
              <Link
                href={`/shop/${category.name
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
              >
                <span>
                  <Image
                    src={category.imageUrl}
                    alt={category.name}
                    layout="responsive"
                    width={150}
                    height={150}
                    className="w-full object-cover"
                  />
                </span>
              </Link>
              <div className="px-2 py-1">
                <div className="font-bold text-xs sm:text-sm mb-1 text-center">
                  {category.name}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right gradient shadow */}
        <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-white to-transparent z-10"></div>
      </div>
    </div>
  );
}
