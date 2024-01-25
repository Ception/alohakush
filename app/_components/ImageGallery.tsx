import Image from "next/image";

interface imageGalleryProps {
  images: string[];
}

export default function ImageGallery({ images }: imageGalleryProps) {
  return (
    <div className="grid gap-4 lg:grid-cols-5">
      <div className="order-last flex gap-4 lg:order-none lg:flex-col">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded bg-gray-100">
            <Image
              src={image}
              alt="product image"
              width={200}
              height={200}
              className="h-full w-full object-cover object-center cursor-pointer"
            />
          </div>
        ))}
      </div>
      <div className="relative overflow-hidden rounded bg-gray-100 lg:col-span-4 pb-6">
        <Image
          src={images[0]}
          alt="main product image"
          priority={true}
          width={500}
          height={500}
          className="h-full w-full object-cover object-center"
        />
      </div>
    </div>
  );
}
