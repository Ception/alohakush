import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { CartItem, useCart } from "./CartContext";
import { Trash2, Plus, Minus, Info } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function ShoppingCart({
  isOpen,
  setCartOpen,
}: {
  isOpen: boolean;
  setCartOpen: (open: boolean) => void;
}) {
  const { cartItems, removeFromCart, clearCart, addToCart } = useCart();
  const [notification, setNotification] = useState("");

  const handleOpenChange = (open: boolean) => {
    setCartOpen(open);
  };

  const incrementQuantity = (item: CartItem) => {
    if (item.quantityInCart < item.quantity) {
      addToCart(item);
    } else {
      setNotification(
        `Sorry, there are only ${item.quantity} "${item.name}" items in stock.`
      );
      setTimeout(() => setNotification(""), 5000); // Remove notification after 3 seconds
    }
  };

  const decrementQuantity = (itemId: number) => {
    removeFromCart(itemId);
  };

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantityInCart,
    0
  );

  return (
    <Sheet open={isOpen} onOpenChange={handleOpenChange}>
      <SheetContent className="sm:max-w-lg w-[90vw] bg-slate-200 p-4">
        <SheetHeader>
          <SheetTitle className="text-gray-700 mb-8">
            Your Shopping Bag
          </SheetTitle>
        </SheetHeader>

        {notification ? (
          <div className="transition-all transform ease-in-out duration-500 bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4 rounded flex items-center">
            <Info className="h-5 w-5 text-red-500 mr-3" />
            <p>{notification}</p>
          </div>
        ) : (
          <div className="transition-all transform ease-in-out duration-500 bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 mb-4 rounded flex items-center">
            <Info className="h-5 w-5 text-orange-500 mr-3" />
            <p>As soon as we receive your order, we&apos;ll be in touch!</p>
          </div>
        )}

        <div className="overflow-auto max-h-[calc(100vh - 200px)]">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Your bag is empty
              </h2>
              <p className="text-sm text-gray-500">
                You haven&apos;t added anything to your bag yet.
              </p>
            </div>
          ) : (
            <div className="flex flex-col">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="mb-4 flex justify-between items-center"
                >
                  <div className="flex items-center">
                    <Image
                      src={`https://cms.alohakush.ca${item.thumbnailImageUrl}`}
                      alt={item.name}
                      width={64}
                      height={64}
                      className="h-16 w-16 mr-4 object-cover rounded"
                    />
                    <div>
                      <h3 className="text-xl font-bold">{item.name}</h3>
                      <div className="flex items-center">
                        <button
                          onClick={() => decrementQuantity(item.id)}
                          className="p-2"
                        >
                          <Minus className="h-5 w-5 text-orange-500 hover:text-orange-400" />
                        </button>
                        <span className="mx-2">Qty: {item.quantityInCart}</span>
                        <button
                          onClick={() => incrementQuantity(item)}
                          className="p-2"
                        >
                          <Plus className="h-5 w-5 text-green-500 hover:text-green-700" />
                        </button>
                      </div>
                      <p>Price: ${item.price}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-2"
                  >
                    <Trash2 className="h-5 w-5 text-red-400 hover:text-orange-400" />
                  </button>
                </div>
              ))}
              <div className="mt-4 p-4 border-t border-gray-300">
                <p className="text-lg font-bold">
                  Total: ${totalPrice.toFixed(2)}
                </p>
                <div className="flex justify-between mt-4">
                  <button
                    onClick={clearCart}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    Clear Cart
                  </button>
                  <Link
                    href="/checkout"
                    className="bg-sky-500 text-white px-4 py-2 rounded hover:bg-sky-600"
                  >
                    Checkout
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
