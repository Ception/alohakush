"use client";

import React, { createContext, useState, useContext } from "react";

interface FullProduct {
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

// Define the shape of your cart items based on your product structure
export interface CartItem extends FullProduct {
  quantityInCart: number;
}

// Define the context using that type
export const CartContext = createContext({
  cartItems: [] as CartItem[],
  addToCart: (item: FullProduct) => {},
  removeFromCart: (itemId: number) => {},
  clearCart: () => {},
});

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }: any) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (newItem: FullProduct) => {
    setCartItems((prevItems) => {
      // Check if the item is already in the cart
      const existingItem = prevItems.find((item) => item.id === newItem.id);

      if (existingItem) {
        // Increase quantity for existing item
        return prevItems.map((item) =>
          item.id === newItem.id
            ? { ...item, quantityInCart: item.quantityInCart + 1 }
            : item
        );
      } else {
        // Add new item with quantityInCart initialized to 1
        const newItemWithQuantity: CartItem = { ...newItem, quantityInCart: 1 };
        return [...prevItems, newItemWithQuantity];
      }
    });
  };

  const removeFromCart = (itemId: number) => {
    setCartItems((prevItems) => {
      // Find the item in the cart
      const itemIndex = prevItems.findIndex((item) => item.id === itemId);

      // If the item exists and quantity is more than 1, decrease quantity
      if (itemIndex > -1 && prevItems[itemIndex].quantityInCart > 1) {
        return prevItems.map((item, index) =>
          index === itemIndex
            ? { ...item, quantityInCart: item.quantityInCart - 1 }
            : item
        );
      } else {
        // Remove the item from the cart
        return prevItems.filter((item) => item.id !== itemId);
      }
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
