"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

export default function Shop() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://cms.alohakush.ca/api/categories")
      .then((response) => {
        const fetchedCategories = response.data.data.map(
          (cat: { attributes: { name: any } }) => ({
            name: cat.attributes.name,
            imageUrl: "/path/to/your/image.jpg", // Replace with actual image path
          })
        );
        setCategories(fetchedCategories);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  return (
    <div className="flex items-center justify-center w-full">
      <div className="grid grid-cols-4 gap-4 p-4">
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
                width={400}
                height={400}
              />
            </Link>
            <div className="px-6 py-4">
              <div className="font-bold text-sm mb-2">{category.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
