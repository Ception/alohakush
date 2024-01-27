"use client";

import { useState } from "react";
import { useCart } from "../_components/cart/CartContext";
import Image from "next/image";
import { CartItem } from "../_components/cart/CartContext";
import { z } from "zod";

export default function Checkout() {
  const { cartItems } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
  });
  const [note, setNote] = useState("");
  const [validationMessages, setValidationMessages] = useState({});
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantityInCart,
    0
  );

  const formSchema = z.object({
    name: z.string().nonempty({ message: "Name is required." }),
    phone: z.string().nonempty({ message: "Phone number is required." }),
    email: z
      .string()
      .email({ message: "Invalid email address." })
      .nonempty({ message: "Email address is required." }),
    city: z.string().nonempty({ message: "City is required." }),
  });

  const handleInputChange = (e: { target: { id: any; value: any } }) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      formSchema.parse(formData);
      // TODO: Send order through
    } catch (error) {
      if (error instanceof z.ZodError) {
        let validationErrors: Record<string, string> = {};
        for (let issue of error.issues) {
          validationErrors[issue.path[0]] = issue.message;
        }
        setValidationMessages(validationErrors);
      }
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-wrap -mx-4">
        {/* Checkout Form */}
        <div className="w-full lg:w-2/3 px-4">
          <div className="bg-white p-6 rounded shadow-sm">
            <h2 className="text-2xl font-bold mb-5">Billing Details</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Full Name"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="phone"
                >
                  Phone Number
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="phone"
                  type="tel"
                  placeholder="Phone Number"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email Address"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="city"
                >
                  City
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="city"
                  type="text"
                  placeholder="City"
                />
              </div>
            </form>

            {/* Note Section */}
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="note"
              >
                Note (Optional)
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="note"
                placeholder="Any special instructions or message?"
                rows={4}
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-1/3 px-4">
          <div className="bg-white p-6 rounded shadow-sm">
            <h2 className="text-2xl font-bold mb-5">Your Order</h2>
            {cartItems.map((item: CartItem) => (
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
                    <p>Qty: {item.quantityInCart}</p>
                    <p>Price: ${item.price}</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="border-t border-gray-300 mt-4 pt-4">
              <p className="text-lg font-bold">
                Total: ${totalPrice.toFixed(2)}
              </p>
            </div>
            <div className="mt-6">
              <button className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-4 rounded">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
