"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Loading from "@/loading";
import { ChevronRight, ShoppingBag, ThumbsUp } from "lucide-react";
import { useCart } from "@/app/_components/cart/CartContext";
import { FullProduct } from "../product/[product]/page";
import { Button } from "@/app/_components/ui/button";

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
): Promise<FullProduct[]> {
  try {
    const response = await fetch(`/api/products/${categorySlug}`, {
      headers: {
        "Cache-Control": "no-cache",
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const jsonResponse = await response.json();
    return jsonResponse.data.map((item: any) => ({
      id: item.id,
      price: item.attributes.price,
      quantity: item.attributes.quantity,
      flower: item.attributes.flower,
      smallImageUrl:
        item.attributes.image?.data[0]?.attributes.formats.small.url ??
        "DefaultImageUrl",
      thumbnailImageUrl:
        item.attributes.image?.data[0]?.attributes.formats.thumbnail.url ??
        "DefaultImageUrl",
      slug: item.attributes.slug,
      description: item.attributes.description,
      name: item.attributes.name,
      categoryName: categorySlug,
    }));
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export default function Category({ params }: { params: { category: string } }) {
  const [products, setProducts] = useState<FullProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [justAdded, setJustAdded] = useState<number | null>(null);
  const [outOfStock, setOutOfStock] = useState<number | null>(null);
  const { addToCart, cartItems } = useCart();

  const handleAddToCart = (product: FullProduct) => {
    const itemsInCart = cartItems.filter((item) => item.id === product.id);
    if (itemsInCart.length >= product.quantity) {
      setOutOfStock(product.id);
    } else {
      addToCart(product);
      setJustAdded(product.id);
      setTimeout(() => {
        setJustAdded(null);
      }, 3000);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    async function fetchProducts() {
      try {
        const fetchedProducts = await getProductsByCategorySlug(
          params.category
        );
        setProducts(fetchedProducts);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setIsLoading(false);
      }
    }

    fetchProducts();
  }, [params.category]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="bg-white py-8 px-4 sm:px-12 w-full">
      <div className="flex justify-start items-center w-full mb-4">
        <span className="flex text-gray-500 text-xs uppercase tracking-widest">
          <Link href="/shop">
            <span className="hover:underline">Shop</span>
          </Link>
          <ChevronRight className="h-2 w-2 m-auto" />
          {params.category}
        </span>
      </div>

      {isLoading ? (
        <Loading />
      ) : products.length < 1 ? (
        <div className="flex items-center justify-center h-full">
          <div className="text-center py-8">
            <h2 className="text-xl font-semibold">
              We&apos;re currently stocking up.
            </h2>
            <p className="text-gray-500">Check back soon for new products!</p>
          </div>
        </div>
      ) : (
        <div className="flex justify-center">
          <div
            style={{ maxHeight: "calc(100vh - 200px)" }}
            className="overflow-y-auto"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-col bg-white shadow rounded-lg overflow-hidden relative"
                >
                  <div className="w-full h-56 relative">
                    <Link href={`/shop/product/${product.slug}`}>
                      <span aria-label={product.name}>
                        <Image
                          src={`https://cms.alohakush.ca${product.smallImageUrl}`}
                          alt={product.name}
                          layout="fill"
                          objectFit="cover"
                          priority={true}
                        />
                      </span>
                    </Link>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <Link
                          href={`/shop/product/${product.slug}`}
                          className="hover:text-primary"
                        >
                          <span className="text-gray-600 text-sm hover:text-primary">
                            {product.name}
                          </span>
                        </Link>
                        <span className="text-gray-600 text-sm underline">
                          {product.flower}
                        </span>
                      </div>
                      <div className="h-20 md:h-32 w-full overflow-hidden relative mb-4">
                        <span className="text-gray-600 text-sm underline mb-2">
                          Overview:
                        </span>
                        <p className="text-left text-gray-500">
                          {product.description}
                        </p>
                        <Link href={`/shop/product/${product.slug}`}>
                          <span className="absolute bottom-0 right-0 text-sky-500 hover:text-orange-400 underline">
                            more
                          </span>
                        </Link>
                      </div>
                    </div>
                    <Button
                      className={`w-full flex items-center justify-center px-6 py-3 text-white rounded shadow-sm transition duration-150 ease-in-out ${
                        justAdded === product.id
                          ? "bg-green-500"
                          : outOfStock === product.id
                          ? "bg-red-500"
                          : "hover:bg-sky-500"
                      }`}
                      onClick={() => handleAddToCart(product)}
                    >
                      <div className="flex justify-center items-center">
                        {justAdded === product.id ? (
                          <>
                            <ThumbsUp className="h-5 w-6" />
                            <span className="ml-2">Added!</span>
                          </>
                        ) : outOfStock === product.id ? (
                          <>
                            <span className="text-base sm:text-base md:text-base ml-2">
                              Low stock level!
                            </span>
                          </>
                        ) : (
                          <>
                            <ShoppingBag className="h-5 w-6" />
                            <span className="ml-2">Add To Bag</span>
                          </>
                        )}
                      </div>
                    </Button>
                  </div>
                  <div className="absolute top-2 left-2 bg-green-500 text-white py-1 px-2 rounded">
                    ${product.price}
                  </div>
                  <div
                    className={`absolute top-2 right-2 text-white py-1 px-2 rounded ${
                      product.quantity === 0 ? "bg-red-500" : "bg-green-500"
                    }`}
                  >
                    Stock: {product.quantity}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
