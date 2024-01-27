import Image from "next/image";
import Link from "next/link";
import image3 from "../../public/image3.jpg";
import image6 from "../../public/image6.jpg";

export default function Hero() {
  return (
    <section className="mx-auto w-full h-full p-12 flex justify-center items-center">
      <div className="flex flex-wrap justify-between">
        {/* left column */}
        <div className="flex w-1/4 flex-col justify-center px-4 space-y-4 py-4">
          <h1 className="text-2xl font-bold text-black sm:text-5xl md:text-6xl leading-tight">
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
        <div className="flex w-3/4 lg:w-2/3">
          <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-xl bg-gray-100 shadow-lg">
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
