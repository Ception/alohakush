import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useCart } from "./CartContext";

export function ShoppingCart({
  isOpen,
  setCartOpen,
}: {
  isOpen: boolean;
  setCartOpen: (open: boolean) => void;
}) {
  const { cartItems, removeFromCart } = useCart();
  
  const handleOpenChange = (open: boolean) => {
    setCartOpen(open);
  };

  return (
    <Sheet open={isOpen} onOpenChange={handleOpenChange}>
      <SheetContent className="sm:max-w-lg w-[90vw] bg-slate-200">
        <SheetHeader>
          <SheetTitle className="text-gray-700">Your Shopping Bag</SheetTitle>
        </SheetHeader>

        <div className="h-full flex-col justify-between">
          <div className="mt-8 flex-1 overflow-y-auto">
            <ul className="-my-6 divide-y divide-gray-200"></ul>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
