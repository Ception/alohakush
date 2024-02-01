import Image from "next/image";
import Link from "next/link";
import image7 from "../../public/image7.jpg";
import image10 from "../../public/image10.jpg";
import image8 from "../../public/image8.jpg";

export default function About() {
  return (
    <section className="mx-auto w-full h-full sm:p-12 flex flex-col sm:flex-row justify-center items-center">
      {/* Mobile View with Overlay */}
      <div className="sm:hidden w-screen h-[calc(100vh-3.5rem)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-100">
          <Image
            src={image7}
            alt="Smoking cannabis"
            className="w-full h-full object-cover md:w-150 md:h-150"
          />
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center p-4">
          <h1 className="text-6xl text-sky-500 font-bold px-4 w-4/5 mx-auto text-center mb-10">
            Our mission!
          </h1>
          <p className="text-lg lg:text-md text-white mb-8 p-8 leading-loose">
            Aloha Kush offers top-tier cannabis at affordable prices. Quality
            and affordability go hand in hand to ensure you always have access
            to the best without stretching your budget. Our carefully selected
            range is all about bringing maximum value and a seamless experience
            straight to your home.
          </p>
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
          <h1 className="text-xl sm:text-2xl font-bold text-primary sm:text-5xl md:text-6xl leading-tight mb-4">
            Our mission!
          </h1>
          <p className="text-lg lg:text-md text-gray-600 mb-8">
            Aloha Kush offers top-tier cannabis at affordable prices. Quality
            and affordability go hand in hand to ensure you always have access
            to the best without stretching your budget. Our carefully selected
            range is all about bringing maximum value and a seamless experience
            straight to your home.
          </p>
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
              src={image10}
              alt="Smoking cannabis"
              width={500}
              height={500}
              priority={true}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="overflow-hidden rounded-xl bg-gray-100 shadow-lg">
            <Image
              src={image8}
              alt="Cannabis plant"
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
