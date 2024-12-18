"use client"
import React, { useState } from "react";
import Image from "next/image";

const products = [
    {
      id: 1,
      name: "FIFA 19",
      image: "https://miro.medium.com/v2/resize:fit:522/0*Hdm7hBTZ-hKlbtlV.png",
      category: "PS4",
      price: 4400, // Price in BDT
      quantity: 1,
    },
    {
      id: 2,
      name: "Glacier White 500GB",
      image: "https://miro.medium.com/v2/resize:fit:522/0*Hdm7hBTZ-hKlbtlV.png",
      category: "PS4",
      price: 29999, // Price in BDT
      quantity: 1,
    },
    {
      id: 3,
      name: "Platinum Headset",
      image: "https://miro.medium.com/v2/resize:fit:522/0*Hdm7hBTZ-hKlbtlV.png",
      category: "PS4",
      price: 11999, // Price in BDT
      quantity: 1,
    },
  ];
  

const MyCart = () => {
  const [cartItems, setCartItems] = useState(products);

  // Update Quantity
  const updateQuantity = (id, action) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: action === "increment" ? item.quantity + 1 : Math.max(1, item.quantity - 1),
        };
      }
      return item;
    });
    setCartItems(updatedCart);
  };

  // Calculate Total Price
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="p-4 lg:p-10 w-full text-black mx-auto">
      <h1 className="text-2xl lg:text-4xl font-bold mb-6">My <span className="text-green-500">Cart</span></h1>
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="flex flex-col gap-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-2 border rounded-lg shadow-md">
                {/* Product Image */}
                <div className="relative w-24 h-16">
                  <Image
                    fill
                    src={item.image}
                    alt={item.name}
                    className="rounded-md "
                  />
                </div>
                {/* Product Details */}
                <div className="flex-1 px-4">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <h1 className="text-lg font-bold">৳{item.price.toLocaleString("en-BD")}</h1>
                </div>
                {/* Quantity Controls */}
                <div className="flex items-center">
                  <button
                    onClick={() => updateQuantity(item.id, "decrement")}
                    className="px-2 py-1 font-bold  text-red-500 rounded-md"
                  >
                    ➖
                  </button>
                  <span className="px-4">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, "increment")}
                    className="px-2 py-1 font-bold  text-gray-700 rounded-md"
                  >
                    ➕
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-4 text-blue-500 hover:underline">← Continue Shopping</button>
        </div>

        {/* Order Summary */}
        <div className=" p-6 border rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <h1>Items</h1>
            <h1>{cartItems.length}</h1>
          </div>
          <div className="flex justify-between mb-2">
            <h1>Shipping</h1>
            <h1>৳50</h1>
          </div>
          <div className="flex justify-between mb-4">
            <p>Promo Code</p>
            <input
              type="text"
              placeholder="Enter your code"
              className="border px-2 py-1 bg-gray-200 rounded-md w-2/3"
            />
          </div>
          <button className="bg-red-500 hover:-translate-x-1 hover:bg-green-600  text-white w-full py-2 mb-4 rounded-md">Apply</button>
          <div className="flex justify-between text-lg font-bold">
            <h1>Total Cost</h1>
            <h1>৳{(calculateTotal() + 50).toLocaleString("en-BD")}</h1>
          </div>
          <button className="bg-purple-600 text-white w-full py-3 mt-4 rounded-md">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
