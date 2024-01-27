import Image from "next/image";
import Link from "next/link";
import image10 from "../../public/image10.jpg";
import image8 from "../../public/image8.jpg";

export default function About() {
  return (
    <section className="flex justify-center items-center w-full p-4">
      <div className="flex flex-wrap justify-between items-stretch w-full">
        {/* Image column */}
        <div className="flex w-3/4 lg:w-2/3">
          <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-xl bg-gray-100 shadow-lg">
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
        {/* Text column */}
        <div className="flex w-1/3 flex-col justify-center p-4">
          <h1 className="text-3xl lg:text-3xl font-bold text-black leading-tight mb-8">
            Our mission!
          </h1>
          <p className="text-lg lg:text-md text-gray-600 mb-8">
            Aloha Kush offers top-tier cannabis at affordable prices. Quality
            and affordability go hand in hand to ensure you always have access
            to the best without stretching your budget. Our carefully selected
            range is all about bringing maximum value and a seamless experience
            straight to your home.
          </p>
          <div className="pt-8 w-full flex justify-center">
            <Link
              href="/shop"
              className="text-lg bg-primary text-white py-4 px-4 rounded hover:bg-sky-500 transition text-center"
            >
              SHOP OUR CATALOG
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
