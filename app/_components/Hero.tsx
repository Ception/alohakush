import Image from "next/image";

export default function Hero() {
  return (
    <section className="mx-auto">
      <div className="mb-8 flex flex-wrap justify-between md:mb-16">
        <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
          <h1 className="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">
            High quality Cannabis, at your fingertips!
          </h1>
          <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
            We sell only the best quality cannabis products. We are the best in
            the business
          </p>
          <button className="mt-4 bg-primary text-white py-2 px-4 rounded hover:bg-sky-600 transition">
            SHOP OUR CATALOG
          </button>
        </div>
        <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
          <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-xl bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
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
