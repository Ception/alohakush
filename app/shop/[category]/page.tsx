import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Category() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-6 py-24">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl tracking-tight text-gray-900">
            Our Newest Products
          </h2>

          <Link href="/all" className="text-primary flex items-center gap-x-1">
            View All
            <span>
              <ArrowRight />
            </span>
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10">
          {/* THIS WILL HAVE TO GET MAPPED FOR PRODUCTION! */}
          <div key="" className="group relative">
            <div className="aspect-square w-full overflow-hidden rounded bg-gray-200 group-hover:opacity-75">
              <Image
                src="https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-01.jpg"
                alt=""
                width={300}
                height={300}
                className="w-full h-full object-cover object-center custom-object-fit"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  {/* HAVE TO ADD PRODUCT SLUG */}
                  <Link href="/product/">Product Name</Link>
                </h3>
                <p className="mt-1 text-xs text-gray-500">Product CATEGORY</p>
              </div>
              <p className="text-sm text-gray-900">$ PRODUCT PRICE</p>
            </div>
          </div>
        </div>
        {/* THIS WHOLE SECTION */}
      </div>
    </div>
  );
}
