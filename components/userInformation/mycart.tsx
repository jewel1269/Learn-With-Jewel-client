"use client";
import React, { useState } from "react";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "FIFA 19",
    image: "https://miro.medium.com/v2/resize:fit:522/0*Hdm7hBTZ-hKlbtlV.png",
    category: "PS4",
    price: 4400,
    quantity: 1,
  },
  {
    id: 2,
    name: "Glacier White 500GB",
    image: "https://miro.medium.com/v2/resize:fit:522/0*Hdm7hBTZ-hKlbtlV.png",
    category: "PS4",
    price: 29999,
    quantity: 1,
  },
  {
    id: 3,
    name: "Platinum Headset",
    image: "https://miro.medium.com/v2/resize:fit:522/0*Hdm7hBTZ-hKlbtlV.png",
    category: "PS4",
    price: 11999,
    quantity: 1,
  },
];

const MyCart = () => {
  const [cartItems, setCartItems] = useState(products);

  const updateQuantity = (id:any, action:any) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity:
              action === "increment"
                ? item.quantity + 1
                : Math.max(1, item.quantity - 1),
          }
        : item
    );
    setCartItems(updatedCart);
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="p-6 lg:p-12 bg-gray-100 min-h-screen">
      <h1 className="text-3xl lg:text-5xl font-bold text-center mb-8">
        My <span className="text-green-600">Cart</span>
      </h1>
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="relative w-20 h-16">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="rounded-md object-cover"
                />
              </div>
              <div className="flex-1 px-4">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <h1 className="text-green-600 font-bold">
                  ৳{item.price.toLocaleString("en-BD")}
                </h1>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item.id, "decrement")}
                  className="px-3 py-2 bg-red-100 text-red-600 rounded-md font-semibold hover:bg-red-200"
                >
                  -
                </button>
                <span className="text-lg">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, "increment")}
                  className="px-3 py-2 bg-blue-100 text-blue-600 rounded-md font-semibold hover:bg-blue-200"
                >
                  +
                </button>
              </div>
            </div>
          ))}
          <button className="mt-6 text-blue-600 hover:underline">
            ← Continue Shopping
          </button>
        </div>

        {/* Order Summary */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
          <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
          <div className="flex justify-between mb-4">
            <span>Items</span>
            <span>{cartItems.length}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span>Shipping</span>
            <span>৳50</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span>Promo Code</span>
            <input
              type="text"
              placeholder="Enter code"
              className="border px-3 py-2 rounded-lg w-2/3 bg-gray-100"
            />
          </div>
          <button className="w-full py-2 mb-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Apply
          </button>
          <div className="flex justify-between text-lg font-bold">
            <span>Total Cost</span>
            <span>৳{(calculateTotal() + 50).toLocaleString("en-BD")}</span>
          </div>
          <button className="w-full py-3 mt-6 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
