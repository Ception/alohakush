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

    fetch("/api/categories")
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
    <div className="flex items-center justify-center w-full h-full p-4">
      <div className="grid grid-rows-2 grid-cols-4 gap-4">
        {categories.slice(0, 8).map((category, index) => (
          <div
            key={index}
            className="category-card max-w-xxs rounded overflow-hidden shadow-lg transform transition duration-500 ease-in-out hover:scale-105"
          >
            <Link
              href={`/shop/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <Image
                className="w-full"
                src={category.imageUrl}
                alt={category.name}
                loading="lazy"
                width={150}
                height={150}
              />
            </Link>
            <div className="px-2 py-1">
              <div className="font-bold text-xxs mb-1">{category.name}</div>{" "}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
