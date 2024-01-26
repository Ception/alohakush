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
  name: string;
  description: string;
  price: number;
  smallImageUrl: string;
  slug: string | null;
  categoryName: string;
}

function mapToProduct(data: any): fullProduct {
  return {
    id: data.id,
    name: data.attributes.name,
    description: data.attributes.description,
    price: data.attributes.price,
    smallImageUrl:
      data.attributes.image?.data[0]?.attributes.formats.small.url ??
      "DefaultImageUrl",
    slug: data.attributes.slug ?? null,
    categoryName:
      data.attributes.categories?.data[0]?.attributes.name ?? "No Category",
  };
}

async function getProducts(): Promise<fullProduct[]> {
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

export default async function Product({
  params,
}: {
  params: { slug: string };
}) {
  const data: fullProduct[] = await getProducts();
  const images = data.map((product) => product.smallImageUrl);

  return (
    <div className="mx-auto w-full h-full pt-32 px-28 flex justify-center items-center">
      <div className="grid gap-8 grid-cols-2">
        <ImageGallery images={images} />
        <div className="max-w-2xl h-3/4 mx-auto p-6 bg-white shadow-lg rounded-lg">
          <div className="mb-6">
            <span className="inline-block text-gray-500 text-xs uppercase tracking-widest pl-1">
              {data[0].categoryName}
            </span>
            <h2 className="text-4xl font-bold text-gray-800 mt-1">
              {data[0].name}
            </h2>
          </div>

          <div className="m-12">
            <div className="flex items-center gap-1 mb-3 justify-center">
              <div className="flex items-center gap-0">
                <Tag className="h-6 w-6 text-red-500 pb-1" />
                <span className="text-3xl font-bold text-gray-800">
                  {data[0].price}
                </span>
              </div>
              <span className="text-xs text-red-500 line-through pt-4">
                $19.99
              </span>
            </div>
          </div>

          <p className="text-sm text-gray-500 mb-12">{data[0].description}</p>

          <div className="flex flex-row gap-4">
            <Button className="flex items-center justify-center px-6 py-3 hover:bg-orange-400 text-white rounded shadow-sm transition duration-150 ease-in-out w-full">
              <ShoppingBag className="h-5 w-6" />
              <span className="ml-2">Add To Bag</span>
            </Button>
            <Button className="flex items-center justify-center px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white rounded shadow-sm transition duration-150 ease-in-out w-full">
              <span className="mr-2">Checkout Now</span>
              <ExternalLink className="h-5 w-6" />
            </Button>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-500 justify-center mt-4">
            <div className="flex items-center gap-1">
              <CheckCheck />
              <span>Incl. Taxes & fees</span>
            </div>
            <div className="flex items-center gap-1">
              <Truck />
              <span>Same day delivery</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
