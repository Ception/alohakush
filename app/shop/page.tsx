import { Star, Truck } from "lucide-react";
import ImageGallery from "../_components/ImageGallery";
import { Button } from "../_components/ui/button";

export default function Shop() {
  const images = [
    "https://images.unsplash.com/photo-1626106576760-d64336d3fa5b?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1536795335207-28f63e2352f0?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1579118459333-b6c080d24b5c?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 pt-4">
        <div className="grid gap-8 grid-cols-2">
          <ImageGallery images={images} />

          <div className="py-8">
            <div className="mb-3">
              <span className="mb-0 inline-block text-gray-500 text-sm">
                EDIBLES
              </span>
              <h2 className="text-3xl text-gray-800">ALOHA GUMMIES</h2>
            </div>

            <div className="mb-10 flex items-center gap-3">
              <Button className="rounded-full gap-x-2">
                <span className="text-sm text-white">4.2</span>
                <Star className="h-5 w-5 text-white" />
              </Button>

              <span className="text-sm text-gray-500 transition duration-100">
                56 ratings
              </span>
            </div>

            <div className="mb-4">
              <div className="flex items-end gap-2">
                <span className="text-2xl font-bold text-gray-800">
                  ${14.99}
                </span>
                <span className="mb-0.5 text-sm text-red-500 line-through">
                  ${19.99}
                </span>
              </div>

              <span className="text-sm text-gray-500">
                Incl. HST plus shipping
              </span>
            </div>

            <div className="mb-6 flex items-center gap-2 text-gray-500">
              <Truck />
              <span className="text-sm">Same day delivery</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
