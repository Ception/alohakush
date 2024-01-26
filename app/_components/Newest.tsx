import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { API, AUTH_TOKEN, SITE_LINK } from "../page";

interface Product {
  id: number;
  title: string;
  price: number;
  smallImageUrl: string;
  slug: string | null;
  categoryName: string;
}

function mapToProduct(data: any): Product {
  return {
    id: data.id,
    title: data.attributes.title,
    price: data.attributes.price,
    smallImageUrl:
      data.attributes.image?.data[0]?.attributes.formats.small.url ??
      "DefaultImageUrl",
    slug: data.attributes.slug ?? null,
    categoryName:
      data.attributes.categories?.data[0]?.attributes.Name ?? "No Category",
  };
}

async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch(
      `${API}/products?populate=*&sort=updatedAt:DESC`,
      {
        headers: {
          Authorization: `Bearer ${AUTH_TOKEN}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const jsonResponse = await response.json();
    const products = jsonResponse.data.map(mapToProduct);
    console.log("Mapped Products:", products);
    return products;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

export default async function Newest() {
  const data: Product[] = await getProducts();
  return (
    <div className="bg-white">
      <div className="mx-auto w-full px-6 py-24">
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

        <div className="mt-6 grid grid-cols-4 gap-x-6 gap-y-10">
          {data.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-square w-full overflow-hidden rounded bg-gray-200 group-hover:opacity-75 lg:h-80 cursor-pointer">
                <Image
                  src={`${SITE_LINK}${product.smallImageUrl}`}
                  alt="Product image"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover object-center custom-object-fit lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link href={`/product/${product.slug}`}>
                      {product.title}
                    </Link>
                  </h3>
                  <p className="mt-1 text-xs text-gray-500">
                    {product.categoryName}
                  </p>
                </div>
                <p className="text-sm text-gray-900">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
