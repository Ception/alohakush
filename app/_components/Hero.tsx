import Image from "next/image";
import Link from "next/link";
import image2 from "../../public/image2.jpg";
import image3 from "../../public/image3.jpg";
import image6 from "../../public/image6.jpg";

export default function Hero() {
  return (
    <section className="mx-auto w-full h-full sm:p-12 flex flex-col sm:flex-row justify-center items-center">
      {/* Mobile View with Overlay */}
      <div className="sm:hidden w-screen h-[calc(100vh-3.5rem)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-100">
          <Image
            src={image2}
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center p-4">
          <h1 className="text-6xl text-white font-bold px-4 w-4/5 mx-auto text-center">
            High quality Cannabis, at your fingertips!
          </h1>
          <div className="pt-8 w-2/3 mx-auto flex justify-center">
            <Link
              href="/shop"
              className="w-full text-lg bg-primary text-white py-4 px-4 rounded hover:bg-sky-500 transition text-center"
            >
              SHOP OUR CATALOG
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden sm:flex w-full justify-center items-center">
        {/* left column */}
        <div className="flex w-full sm:w-1/4 flex-col justify-center space-y-4 py-4">
          <h1 className="text-xl sm:text-2xl font-bold text-black sm:text-5xl md:text-6xl leading-tight">
            High quality Cannabis, at your fingertips!
          </h1>
          <div className="pt-8 w-full">
            <Link
              href="/shop"
              className="text-lg bg-primary text-white py-4 px-4 rounded hover:bg-sky-500 transition text-center"
            >
              SHOP OUR CATALOG
            </Link>
          </div>
        </div>

        {/* right column */}
        <div className="flex w-full sm:w-3/4 lg:w-2/3">
          <div className="relative left-16 top-12 z-10 overflow-hidden rounded-xl bg-gray-100 shadow-lg">
            <Image
              src={image3}
              alt="Joint held up"
              width={500}
              height={500}
              priority={true}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="overflow-hidden rounded-xl bg-gray-100 shadow-lg">
            <Image
              src={image6}
              alt="cannabis nug"
              width={500}
              height={500}
              priority={true}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
