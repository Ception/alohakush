import {
  Tag,
  ShoppingBag,
  Truck,
  CheckCheck,
  ExternalLink,
} from "lucide-react";
import ImageGallery from "../../../_components/ImageGallery";
import { Button } from "../../../_components/ui/button";
import { API, AUTH_TOKEN } from "@/app/page";

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
    <div className="mx-auto max-w-7xl pt-32 px-4 sm:px-6 lg:px-8">
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
        <ImageGallery images={images} sale={data[0].sale} />
        <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          {data.length > 0 && (
            <div className="flex flex-col justify-between p-6 h-full">
              <div>
                <span className="block text-gray-500 text-xs uppercase tracking-widest">
                  {data[0].categoryName}
                </span>
                <h2 className="text-4xl font-bold text-gray-800 my-2">
                  {data[0].name}
                </h2>

                {data[0].sale ? (
                  <div className="my-4">
                    <span className="text-3xl font-bold text-gray-800">
                      ${data[0].price}
                    </span>
                    <span className="text-lg text-red-500 line-through ml-2">
                      ${data[0].originalPrice}
                    </span>
                  </div>
                ) : (
                  <div className="my-4">
                    <span className="text-3xl font-bold text-gray-800">
                      ${data[0].price}
                    </span>
                  </div>
                )}
                <p className="text-sm text-gray-500 mb-4 p-8">
                  {data[0].description}
                </p>
              </div>
              <div>
                <div className="flex flex-col sm:flex-row gap-4 mb-4">
                  <Button className="flex items-center justify-center px-6 py-3 hover:bg-orange-400 text-white rounded shadow-sm transition duration-150 ease-in-out w-full">
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
