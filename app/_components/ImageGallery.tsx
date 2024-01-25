"use client";

import Image from "next/image";
import { useState } from "react";

interface imageGalleryProps {
  images: string[];
}

export default function ImageGallery({ images }: imageGalleryProps) {
  const [mainImage, setMainImage] = useState(images[0]);

  const handleImageClick = (image: string) => {
    setMainImage(image);
  };

  return (
    <div className="grid gap-4 grid-cols-5">
      <div className="flex flex-col gap-4">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded bg-gray-100">
            <Image
              src={
                image.startsWith("/") || image.startsWith("http")
                  ? image
                  : "/" + image
              }
              alt="product thumbnail"
              width={200}
              height={200}
              className="object-cover object-center cursor-pointer"
              onClick={() => handleImageClick(image)}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </div>
      <div className="relative overflow-hidden rounded bg-gray-100 lg:col-span-4">
        <Image
          src={
            mainImage.startsWith("/") || mainImage.startsWith("http")
              ? mainImage
              : "/" + mainImage
          }
          alt="main product image"
          priority={true}
          width={500}
          height={500}
          className="object-cover object-center"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
}
