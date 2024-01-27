"use client";

import { useState } from "react";
import { useCart } from "../_components/cart/CartContext";
import Image from "next/image";
import { CartItem } from "../_components/cart/CartContext";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";

interface FormData {
  name: string;
  phone: string;
  email: string;
  city: string;
  note: string;
}

export default function Checkout() {
  const { cartItems, clearCart } = useCart();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    city: "",
    note: "",
  });
  const [validationMessages, setValidationMessages] = useState<
    Partial<Record<keyof FormData, string>>
  >({});
  const [sentEmail, setSentEmail] = useState(false);
  const [loading, setLoading] = useState(false);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantityInCart,
    0
  );

  const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
  );

  const formSchema = z.object({
    name: z.string().nonempty({ message: "Name is required." }),
    phone: z
      .string()
      .regex(phoneRegex, { message: "Invalid phone number.   " }),
    email: z
      .string()
      .email({ message: "Invalid email address." })
      .nonempty({ message: "Email address is required." }),
    city: z.string().nonempty({ message: "City is required." }),
    note: z.string().optional(),
  });

  const handleInputChange = (e: { target: { id: any; value: any } }) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      formSchema.parse(formData);

      // Prepare the items for the request
      const items = cartItems.map((item) => ({
        product: item.name,
        quantity: item.quantityInCart,
      }));

      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items,
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          city: formData.city,
          note: formData.note,
        }),
      });

      if (response.ok) {
        setSentEmail(true);
        clearCart();
      } else {
        setSentEmail(false);
      }
      setLoading(false);
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

  return sentEmail ? (
    <div className="container mx-auto p-6 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <CheckCircle2 className="h-12 w-12 text-green-500" />
        <h2 className="text-2xl font-bold text-center mt-4">Order Received</h2>
        <p className="text-center mt-2">We&apos;ll be reaching out shortly.</p>
      </div>
    </div>
  ) : (
    <div className="container mx-auto p-6">
      <div className="flex flex-wrap -mx-4">
        {/* Checkout Form */}
        <div className="w-full lg:w-2/3 px-4">
          <div className="bg-white p-6 rounded shadow-sm">
            <h2 className="text-2xl font-bold mb-5">Billing Details</h2>
            <form onSubmit={handleSubmit}>
              {/* Name Input */}
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
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                {validationMessages.name && (
                  <p className="text-red-500 text-xs italic">
                    {validationMessages.name}
                  </p>
                )}
              </div>

              {/* Phone Number Input */}
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
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                {validationMessages.phone && (
                  <p className="text-red-500 text-xs italic">
                    {validationMessages.phone}
                  </p>
                )}
              </div>

              {/* Email Address Input */}
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
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {validationMessages.email && (
                  <p className="text-red-500 text-xs italic">
                    {validationMessages.email}
                  </p>
                )}
              </div>

              {/* City Input */}
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
                  value={formData.city}
                  onChange={handleInputChange}
                />
                {validationMessages.city && (
                  <p className="text-red-500 text-xs italic">
                    {validationMessages.city}
                  </p>
                )}
              </div>

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
                  value={formData.note}
                  onChange={handleInputChange}
                />
              </div>

              {/* Place Order Button */}
              <div className="mt-6">
                <button
                  type="submit"
                  className={`w-full font-bold py-3 px-4 rounded ${
                    loading
                      ? "bg-gray-500 cursor-not-allowed"
                      : "bg-sky-500 hover:bg-sky-600"
                  } text-white`}
                  disabled={loading}
                >
                  {loading ? "Submitting Order..." : "Place Order"}
                </button>
              </div>
            </form>
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
          </div>
        </div>
      </div>
    </div>
  );
}
