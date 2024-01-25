"use client";

import Image from "next/image";
import { useState } from "react";

interface imageGalleryProps {
  images: string[];
}

export default function ImageGallery({ images }: imageGalleryProps) {
  const [mainImage, setMainImage] = useState(images[0]);
  const displayedImages = images.length > 5 ? images.slice(0, 5) : images;

  const handleImageClick = (image: string) => {
    setMainImage(image);
  };

  // Generate thumbnail elements or placeholders if there are less than 4 images
  const thumbnailElements = [];
  for (let i = 0; i < 4; i++) {
    thumbnailElements.push(
      <div
        key={i}
        className="flex-1 overflow-hidden rounded bg-gray-100 relative"
        style={{ paddingTop: "100%" }}
      >
        {displayedImages[i] ? (
          <Image
            src={displayedImages[i]}
            alt={`thumbnail ${i}`}
            width={200}
            height={200}
            className="absolute top-0 left-0 w-full h-full object-cover cursor-pointer"
            onClick={() => handleImageClick(displayedImages[i])}
          />
        ) : (
          <div className="absolute inset-0 bg-gray-300" />
        )}
      </div>
    );
  }

  return (
    <div className="grid gap-4 grid-cols-5">
      <div className="flex flex-col gap-4 col-span-1">{thumbnailElements}</div>
      <div className="relative overflow-hidden rounded bg-gray-100 col-span-4">
        <Image
          src={mainImage}
          alt="main product image"
          width={500}
          height={500}
          className="object-cover object-center"
          style={{ width: "100%", height: "100%" }}
        />

        <span className="absolute left-0 top-0 rounded-br-xl bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
          SALE
        </span>
      </div>
    </div>
  );
}
