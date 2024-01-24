interface imageGalleryProps {
  images: string[];
}

export default function ImageGallery({ images }: imageGalleryProps) {
  return (
    <div className="grid gap-8 grid-cols-2">
      {images.map((image) => (
        <div className="overflow-hidden rounded-xl bg-gray-100 shadow-lg">
          <Image
            src={image}
            alt="weed nug"
            priority={true}
            width={500}
            height={500}
            className="w-full h-full object-cover object-center"
          />
        </div>
      ))}
    </div>
  );
}
