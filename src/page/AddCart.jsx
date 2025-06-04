// import React from 'react';
// import { FaTrash } from "react-icons/fa";
// import productImg from '../assets/newarrival.png'; // your image path

// const AddCart = () => {
//   return (
//     <div className="min-h-screen bg-white text-black px-4 sm:px-8 md:px-12 lg:px-20 py-8">
//       {/* Breadcrumb */}
//       <p className="text-sm text-gray-500 mb-2">Home / Cart Page</p>
//       <h2 className="text-2xl font-bold mb-6">Cart Page</h2>

//       <div className="flex flex-col lg:flex-row gap-8">
//         {/* Left - Cart Items */}
//         <div className="flex-1">
//           {/* Table Headings */}
//           <div className="hidden md:grid grid-cols-6 gap-6 font-semibold text-sm border-b pb-3 mb-4">
//             <div>Product</div>
//             <div>Description</div>
//             <div>Quantity</div>
//             <div>Price</div>
//             <div>Total</div>
//             <div>Actions</div>
//           </div>

//           {/* Cart Items */}
//           {[1, 2].map((item, index) => (
//             <div
//               key={index}
//               className="grid grid-cols-1 md:grid-cols-6 items-center gap-4 border-b py-4"
//             >
//               {/* Product Image */}
//               <div className="md:col-span-1 flex items-center gap-4">
//                 <img src={productImg} alt="Product" className="w-16 h-16 object-cover" />
//               </div>

//               {/* Description */}
//               <div className="md:col-span-1">
//                 <p className="font-medium">
//                   {index === 0 ? 'All-Purpose Cleaner' : 'Gold Infinity Ring 1'}
//                 </p>
//                 <p className="text-sm text-gray-500">Quantity: 100ml</p>
//               </div>

//               {/* Quantity Selector */}
//               <div className="md:col-span-0 flex items-center border rounded w-fit">
//                 <button className="px-3 text-lg">-</button>
//                 <span className="px-4">1</span>
//                 <button className="px-3 text-lg">+</button>
//               </div>

//               {/* Price */}
//               <div className="md:col-span-0 text-sm">₹120.00</div>

//               {/* Total */}
//               <div className="md:col-span-0 text-sm  ">₹120.00</div>

//               {/* Actions */}
//               <div className="md:col-span-0 md:text-center">
//                 <button className="text-black hover:text-red-700">
//                   <FaTrash />
//                 </button>
//               </div>
//             </div>
//           ))}

//           {/* Continue Shopping */}
//           <button className="mt-6 flex items-center gap-2 border px-4 py-2 rounded hover:bg-gray-100">
//             ← Continue Shopping
//           </button>
//         </div>

//         {/* Right - Order Summary */}
//         <div className="w-full lg:w-80 border p-6 rounded-md shadow-sm">
//           <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
//           <div className="space-y-3 text-sm">
//             <div className="flex justify-between">
//               <span>Subtotal</span>
//               <span>₹120.00</span>
//             </div>
//             <div className="flex justify-between">
//               <span>Shipping</span>
//               <span>₹20.00</span>
//             </div>
//             <div className="flex justify-between">
//               <span>Tax</span>
//               <span>₹20.00</span>
//             </div>
//             <div className="flex justify-between font-semibold border-t pt-3">
//               <span>Total</span>
//               <span>₹160.00</span>
//             </div>
//           </div>
//           <button className="mt-6 w-full bg-[#393185] text-white py-2 rounded hover:bg-purple-800">
//             Proceed to Checkout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddCart;

"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaTrashAlt } from 'react-icons/fa';
import pic1 from "../assets/newarrival.png"; 
import pic2 from "../assets/newarrival.png"; 

export default function AddCart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "", 
      description: "Multi-Surface Eco Cleaner",
      image: pic1,
      price: 120.0,
      quantity: 1,
    },
    {
      id: 2,
      name: "", 
      description: "All-Purpose Disinfectant", 
      image: pic2,
      price: 180.0,
      quantity: 1,
    },
  ]);

  const [orderSummary, setOrderSummary] = useState({
    subtotal: 0,
    shipping: 20.0,
    tax: 20.0,
    total: 0,
  });

  useEffect(() => {
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const total = subtotal + orderSummary.shipping + orderSummary.tax;
    setOrderSummary((prev) => ({ ...prev, subtotal, total }));
  }, [cartItems, orderSummary.shipping, orderSummary.tax]);

  const updateQuantity = (id, change) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity + change) } 
          : item
      )
    );
  };


  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };


  const currency = (amount) => `₹${amount.toFixed(2)}`;

  return (
    <div className="min-h-screen bg-white text-[#2D3319] font-['Muli'] pt-10 pb-40 shadow-md">

      <div className=" mb-8 px-4 sm:px-6 md:px-8 lg:px-20 text-left">
        <h2 className="text-2xl font-bold text-black">Cart</h2>
        <p className="text-sm text-gray-500 pb-5">Home / Cart</p>
      </div>

     
      <main className="container mx-auto px-4 py-5">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2">
          
            <div className="overflow-x-auto md:overflow-x-visible"> 
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-white">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                      Product
                    </th>
                    
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                      Description
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                      Quantity
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                      Total
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td className="px-6 py-4"> 
                        <div className="flex items-center">

                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-cover rounded-md mr-4"
                          />
                          <span className="font-medium text-gray-900">{item.name}</span>
                        </div>
                      </td>
                     
                      <td className="px-6 py-4 text-gray-700">
                        {item.description}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => updateQuantity(item.id, -1)}
                            className="px-2 py-1 rounded-md border border-gray-400 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                          >
                            -
                          </motion.button>
                          <span className="mx-2 text-gray-900">{item.quantity}</span>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => updateQuantity(item.id, 1)}
                            className="px-2 py-1 rounded-md border border-gray-400 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                          >
                            +
                          </motion.button>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-900">{currency(item.price)}</td> 
                      <td className="px-6 py-4 text-gray-900">
                        {currency(item.price * item.quantity)}
                      </td>
                      <td className="px-6 py-4"> 
                        <motion.button
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.8 }}
                          onClick={() => removeItem(item.id)}
                          className="text-black hover:text-black transition-colors duration-200"
                        >
                          
                          <FaTrashAlt  className="w-5 h-5" />
                        </motion.button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
        
            <div className="mt-8">
              <Link to="/Product" className="inline-flex items-center px-4 py-2 border border-gray-400 shadow-sm text-sm font-medium rounded text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200">
                <svg className="-ml-1 mr-2 h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Continue Shopping
              </Link>
            </div>
          </div>

     
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-700">Subtotal</span>
                  <span className="text-gray-900">{currency(orderSummary.subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Shipping</span>
                  <span className="text-gray-900">{currency(orderSummary.shipping)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Tax</span>
                  <span className="text-gray-900">{currency(orderSummary.tax)}</span>
                </div>
                <div className="border-t border-gray-400 pt-3 flex justify-between">
                  <span className="font-semibold text-gray-900">Total</span>
                  <span className="text-xl font-bold text-gray-900">{currency(orderSummary.total)}</span>
                </div>
              </div>

            
              <Link to="/Checkout">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 w-full bg-[#393185] text-white py-3 rounded-md hover:bg-opacity-90 transition-colors duration-200"
                >
                  Proceed to Checkout
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
