"use client";

import React, { createContext, useState, useContext } from "react";

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

// Define the shape of your cart items based on your product structure
export interface CartItem extends fullProduct {
  quantityInCart: number;
}

// Define the context using that type
export const CartContext = createContext({
  cartItems: [] as CartItem[],
  addToCart: (item: CartItem) => {},
  removeFromCart: (itemId: number) => {},
  clearCart: () => {},
});

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }: any) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (newItem: fullProduct) => {
    console.log(`Item added to cart: ${newItem.name}`);
    setCartItems((prevItems) => {
      // Check if the item is already in the cart
      const itemIndex = prevItems.findIndex((item) => item.id === newItem.id);
      if (itemIndex > -1) {
        // Increase quantity
        const newCartItems = [...prevItems];
        newCartItems[itemIndex].quantityInCart += 1;
        return newCartItems;
      } else {
        // Add new item
        return [...prevItems, { ...newItem, quantityInCart: 1 }];
      }
    });
  };

  const removeFromCart = (itemId: number) => {
    // Implementation for removing an item from the cart
  };

  const clearCart = () => {
    // Implementation for clearing the cart
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
