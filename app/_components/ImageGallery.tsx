"use client";

import Image from "next/image";
import { useState } from "react";

interface imageGalleryProps {
  images: string[];
}

export default function ImageGallery({
  images,
  sale,
}: imageGalleryProps & { sale: boolean }) {
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
        className="flex overflow-hidden rounded bg-gray-100 relative"
        style={{ width: "100%", height: "100%" }}
      >
        {displayedImages[i] && (
          <Image
            src={displayedImages[i]}
            alt={`thumbnail ${i}`}
            width={400}
            height={400}
            className="cursor-pointer"
            style={{
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            onClick={() => handleImageClick(displayedImages[i])}
          />
        )}
      </div>
    );
  }

  return (
    <div className="grid gap-4 grid-cols-5 w-full h-full">
      <div className="flex flex-col gap-2 col-span-1">{thumbnailElements}</div>
      <div className="relative overflow-hidden rounded bg-gray-100 col-span-4">
        {/* Fixed-size container for the main image */}
        <div className="w-full h-full relative">
          {sale && (
            <span className="absolute left-0 top-0 rounded-br-xl bg-red-500 px-3 py-1.5 text-2xl uppercase tracking-wider text-white z-10">
              SALE
            </span>
          )}
          {mainImage && (
            <Image
              src={mainImage}
              alt="Main product image"
              className="object-center"
              width={400}
              height={400}
              priority={true}
              style={{
                objectFit: "cover",
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
