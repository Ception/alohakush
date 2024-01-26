import {
  ShoppingBag,
  Truck,
  CheckCheck,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import ImageGallery from "../../../_components/ImageGallery";
import { Button } from "../../../_components/ui/button";
import { API, AUTH_TOKEN } from "@/app/page";
import Link from "next/link";

interface fullProduct {
  id: number;
  description: string;
  price: number;
  quantity: number;
  flower: string;
  sale: boolean;
  originalPrice: number;
  slug: string | null;
  name: string;
  smallImageUrl: string;
  categoryName: string;
}

async function getProduct(name: string): Promise<fullProduct[]> {
  try {
    const response = await fetch(
      `${API}/products?filters[slug][$eq]=${name}&populate=image,categories`,
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
    return jsonResponse.data.map((item: any) => ({
      id: item.id,
      description: item.attributes.description,
      price: item.attributes.price,
      quantity: item.attributes.quantity,
      flower: item.attributes.flower,
      sale: item.attributes.sale,
      originalPrice: item.attributes.originalPrice,
      slug: item.attributes.slug ?? null,
      name: item.attributes.name,
      smallImageUrl:
        item.attributes.image?.data[0]?.attributes.formats.small.url ??
        "DefaultImageUrl",
      categoryName:
        item.attributes.categories?.data[0]?.attributes.name ?? "No Category",
    }));
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

export default async function Product({
  params,
}: {
  params: { product: string };
}) {
  const data: fullProduct[] = await getProduct(params.product);
  const images = data.map(
    (product) => `https://cms.alohakush.ca${product.smallImageUrl}`
  );

  return (
    <div className="mx-auto max-w-7xl pt-24 px-4 sm:px-6 lg:px-8">
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
        <ImageGallery images={images} sale={data[0].sale} />
        <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          {data.length > 0 && (
            <div className="flex flex-col justify-between p-6 h-full">
              <div>
                <div className="flex justify-between items-center">
                  <span className="flex text-gray-500 text-xs uppercase tracking-widest">
                    <Link
                      href={`/shop/${data[0].categoryName.toLowerCase()}`}
                      className="hover:underline"
                    >
                      {data[0].categoryName}
                    </Link>
                    <ChevronRight className="h-2 w-2 m-auto" />
                    {data[0].flower}
                  </span>
                  <p className="text-sm text-gray-700">
                    Stock:{" "}
                    <span className="underline text-orange-500 hover:text-yellow-400 cursor-pointer">
                      {data[0].quantity}
                    </span>
                  </p>
                </div>
                <h2 className="text-4xl font-bold text-gray-800 my-2">
                  {data[0].name}
                </h2>

                <div className="flex justify-center items-center p-4">
                  {data[0].sale ? (
                    <>
                      <span className="text-4xl font-bold text-gray-800">
                        $<span className="underline">{data[0].price}</span>
                      </span>
                      <span className="text-lg text-red-500 line-through ml-2">
                        ${data[0].originalPrice}
                      </span>
                    </>
                  ) : (
                    <span className="text-4xl font-bold text-gray-800">
                      $<span className="underline">{data[0].price}</span>
                    </span>
                  )}
                </div>

                <div className="p-4">
                  <h4 className="text-xs text-gray-700 mb-0.5 underline">
                    Description:
                  </h4>
                  <p className="text-sm text-gray-500 mb-4">
                    {data[0].description}
                  </p>
                </div>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row gap-4 mb-4">
                  <Button className="flex items-center justify-center px-6 py-3 hover:bg-yellow-400 text-white rounded shadow-sm transition duration-150 ease-in-out w-full">
                    <ShoppingBag className="h-5 w-6" />
                    <span className="ml-2">Add To Bag</span>
                  </Button>
                  <Button className="flex items-center justify-center px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white rounded shadow-sm transition duration-150 ease-in-out w-full">
                    <span className="mr-2">Checkout Now</span>
                    <ExternalLink className="h-5 w-6" />
                  </Button>
                </div>
                <div className="flex justify-center gap-4 text-sm text-gray-500 my-4">
                  <div className="flex items-center gap-1">
                    <CheckCheck className="h-5 w-5 text-gray-500" />
                    <span>Incl. Taxes & fees</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Truck className="h-5 w-5 text-gray-500" />
                    <span>Same day delivery</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
