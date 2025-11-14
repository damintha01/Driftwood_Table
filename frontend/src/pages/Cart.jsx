// src/pages/Cart.jsx
import React from "react";

const dummyCart = [
  { id: 1, name: "Cheese Pizza", price: 1500, quantity: 1 },
  { id: 2, name: "Veg Burger", price: 1200, quantity: 2 },
];

export default function Cart() {
  const total = dummyCart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="mt-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {dummyCart.length === 0 ? (
        <p className="text-gray-500 text-center py-8">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {dummyCart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center bg-white shadow-sm rounded-lg p-4"
            >
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">{item.name}</h3>
                <p className="text-sm text-gray-500 mt-1">Quantity: {item.quantity}</p>
              </div>

              <div className="text-right">
                <p className="font-semibold text-gray-900">LKR {item.price * item.quantity}</p>
                <button className="text-xs text-red-500 hover:text-red-700 mt-1">
                  Remove (later)
                </button>
              </div>
            </div>
          ))}

          <div className="flex justify-between items-center border-t border-gray-200 pt-4 mt-4">
            <span className="font-bold text-lg text-gray-800">Total:</span>
            <span className="font-bold text-lg text-red-500">LKR {total}</span>
          </div>

          <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition duration-200">
            Checkout (later)
          </button>
        </div>
      )}
    </div>
  );
}