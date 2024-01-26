import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="mx-auto w-full h-full px-8 pt-8 flex justify-center items-center">
      <div className="flex flex-wrap justify-between">
        {/* left column */}
        <div className="flex w-1/4 flex-col justify-center px-4 space-y-4 py-4">
          <h1 className="text-2xl font-bold text-black sm:text-5xl md:text-6xl leading-tight">
            High quality Cannabis, at your fingertips!
          </h1>
          <Link
            href="/shop"
            className="text-lg bg-primary text-white py-4 px-4 rounded hover:bg-sky-600 transition text-center"
          >
            SHOP OUR CATALOG
          </Link>
        </div>

        {/* right column */}
        <div className="flex w-3/4 lg:w-2/3">
          <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-xl bg-gray-100 shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1536795335207-28f63e2352f0?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Joint held up"
              priority={true}
              width={500}
              height={500}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="overflow-hidden rounded-xl bg-gray-100 shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1626106576760-d64336d3fa5b?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="weed nug"
              priority={true}
              width={500}
              height={500}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
