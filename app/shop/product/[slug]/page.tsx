import {
  Tag,
  ShoppingBag,
  Truck,
  CheckCheck,
  ExternalLink,
} from "lucide-react";
import ImageGallery from "../../../_components/ImageGallery";
import { Button } from "../../../_components/ui/button";

export default function Product({ params }: { params: { slug: string } }) {
  const images = [
    "https://images.unsplash.com/photo-1626106576760-d64336d3fa5b?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1536795335207-28f63e2352f0?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1579118459333-b6c080d24b5c?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  return (
    <div className="mx-auto w-full h-full pt-32 px-28 flex justify-center items-center">
      <div className="grid gap-8 grid-cols-2">
        <ImageGallery images={images} />
        <div className="max-w-2xl h-3/4 mx-auto p-6 bg-white shadow-lg rounded-lg">
          <div className="mb-6">
            <span className="inline-block text-gray-500 text-xs uppercase tracking-widest pl-1">
              EDIBLES
            </span>
            <h2 className="text-4xl font-bold text-gray-800 mt-1">
              ALOHA GUMMIES
            </h2>
          </div>

          <div className="m-12">
            <div className="flex items-center gap-1 mb-3 justify-center">
              <div className="flex items-center gap-0">
                <Tag className="h-6 w-6 text-red-500 pb-1" />
                <span className="text-3xl font-bold text-gray-800">$14.99</span>
              </div>
              <span className="text-xs text-red-500 line-through pt-4">
                $19.99
              </span>
            </div>
          </div>

          <p className="text-sm text-gray-500 mb-12">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua...
          </p>

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
