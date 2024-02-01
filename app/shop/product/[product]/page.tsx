"use client";

import {
  ShoppingBag,
  Truck,
  CheckCheck,
  ExternalLink,
  ChevronRight,
  ThumbsUp,
} from "lucide-react";
import { useState, useEffect } from "react";
import ImageGallery from "../../../_components/ImageGallery";
import { Button } from "../../../_components/ui/button";
import Link from "next/link";
import Loading from "@/loading";
import { useCart } from "@/app/_components/cart/CartContext";

export interface FullProduct {
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
  thumbnailImageUrl: string;
  categoryName: string;
  categorySlug: string;
  quantityInCart?: number;
}

async function getProduct(name: string): Promise<FullProduct[]> {
  try {
    const response = await fetch(`/api/${name}`, {
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
      thumbnailImageUrl:
        item.attributes.image?.data[0]?.attributes.formats.thumbnail.url ??
        "DefaultImageUrl",
      categoryName: item.attributes.categories?.data[0]?.attributes.name,
      categorySlug: item.attributes.categories?.data[0]?.attributes.slug,
    }));
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

export default function Product({ params }: { params: { product: string } }) {
  const [products, setProducts] = useState<FullProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [justAdded, setJustAdded] = useState<number | null>(null);
  const images = products.map(
    (product) => `https://cms.alohakush.ca${product.smallImageUrl}`
  );
  const sale = products.map((product) => product.sale);
  const [outOfStock, setOutOfStock] = useState<number | null>(null);
  const { addToCart, cartItems } = useCart();

  const handleBack = () => {
    if (typeof window !== "undefined") {
      window.history.back();
    }
  };

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
    async function fetchProducts() {
      try {
        const fetchedProducts = await getProduct(params.product);
        setProducts(fetchedProducts);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, [params.product]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="mx-auto max-w-7xl p-4 sm:p-24 sm:mt-12 lg:p-8">
      <button
        type="button"
        className="w-full sm:w-auto flex items-center justify-center px-5 py-3 text-base sm:text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 hover:bg-gray-100 dark:hover:bg-gray-800 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 mb-4"
        onClick={handleBack}
      >
        <svg
          className="w-5 h-5 rtl:rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          />
        </svg>
        <span>Go back</span>
      </button>
      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 items-start">
        <ImageGallery images={images} sale={sale[0]} />
        {products.map((product: FullProduct) => (
          <div
            key={product.id}
            className="flex flex-col bg-white shadow-md rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-lg items-center justify-center w-full h-full"
          >
            <div className="p-4 sm:p-6">
              <div className="flex justify-between items-center mb-2">
                <span className="flex text-gray-500 text-xs sm:text-xm uppercase tracking-widest">
                  <Link
                    href={`/shop/${product.categorySlug}`}
                    className="hover:underline"
                  >
                    {product.categoryName}
                  </Link>
                  <ChevronRight className="h-2 w-2 m-auto" />
                  {product.flower}
                </span>
                <p className="text-sm sm:text-base text-gray-700">
                  Stock:{" "}
                  <span className="underline text-orange-500 hover:text-yellow-400">
                    {product.quantity}
                  </span>
                </p>
              </div>
              <h2 className="text-sm sm:text-sm font-bold text-gray-800 mb-8">
                {product.name}
              </h2>
              <div className="flex justify-center items-center mb-2 p-2 sm:p-2">
                {product.sale ? (
                  <>
                    <span className="text-3xl sm:text-4xl font-bold text-gray-800">
                      $<span className="underline">{product.price}</span>
                    </span>
                    <span className="text-lg sm:text-xl text-red-500 line-through ml-2">
                      ${product.originalPrice}
                    </span>
                  </>
                ) : (
                  <span className="text-3xl sm:text-4xl font-bold text-gray-800">
                    $<span className="underline">{product.price}</span>
                  </span>
                )}
              </div>
              <div className="flex justify-center items-center pt-10 sm:pt-10">
                <div>
                  <h4 className="text-xs sm:text-sm text-gray-700 underline mb-1">
                    Overview:
                  </h4>
                  <p className="text-sm sm:text-base text-gray-500">
                    {product.description}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-auto p-4 sm:p-6">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <Button
                  className={`w-full items-center justify-center px-4 py-3 text-sm sm:text-base text-white rounded shadow-md transition duration-150 ease-in-out ${
                    justAdded === product.id
                      ? "bg-green-500 hover:bg-green-600"
                      : outOfStock === product.id
                      ? "bg-red-500 hover:bg-red-600"
                      : "bg-orange-400 hover:bg-sky-500"
                  }`}
                  onClick={() => handleAddToCart(product)}
                >
                  <div className="flex justify-center items-center w-full">
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
                <Link href="/checkout" onClick={() => handleAddToCart(product)}>
                  <Button className="w-full items-center justify-center px-4 py-3 bg-gray-700 hover:bg-gray-800 text-white rounded shadow-md transition duration-150 ease-in-out">
                    <div className="flex justify-center items-center w-full">
                      <span className="mr-2">Checkout Now</span>
                      <ExternalLink className="h-5 w-6" />
                    </div>
                  </Button>
                </Link>
              </div>

              <div className="flex justify-center gap-4 text-sm sm:text-base text-gray-500">
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
        ))}
      </div>
    </div>
  );
}
