"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Loading from "@/loading";

interface Product {
  id: number;
  price: number;
  smallImageUrl: string;
  slug: string | null;
  name: string;
  categoryName: string;
}

interface CategoryAttributes {
  slug: string;
  name: string;
}

interface Category {
  id: number;
  attributes: CategoryAttributes;
}

async function getProductsByCategorySlug(
  categorySlug: string
): Promise<Product[]> {
  try {
    const response = await fetch(`/api/products/${categorySlug}`);

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const jsonResponse = await response.json();
    return jsonResponse.data.map((item: any) => ({
      id: item.id,
      price: item.attributes.price,
      smallImageUrl:
        item.attributes.image?.data[0]?.attributes.formats.small.url ??
        "DefaultImageUrl",
      slug: item.attributes.slug,
      name: item.attributes.name,
      categoryName: categorySlug,
    }));
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export default function Category({ params }: { params: { category: string } }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchedProducts = await getProductsByCategorySlug(
          params.category
        );
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProducts();
  }, [params.category]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="bg-white">
      <div className="mx-auto w-full p-12">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl tracking-tight text-gray-900">
            All things {params.category}!
          </h2>
        </div>

        <div className="mt-6 grid grid-cols-4 gap-x-6 gap-y-10">
          {products.map((product: Product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-square w-full overflow-hidden rounded bg-gray-200 group-hover:opacity-75 lg:h-80 cursor-pointer">
                <Link href={`/shop/product/${product.slug}`}>
                  <Image
                    src={`https://cms.alohakush.ca${product.smallImageUrl}`}
                    alt="Product image"
                    priority={true}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover object-center custom-object-fit lg:h-full lg:w-full"
                  />
                </Link>
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link href={`/shop/product/${product.slug}`}>
                      <span className="hover:underline">{product.name}</span>
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
