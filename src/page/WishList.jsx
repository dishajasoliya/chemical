import React from 'react';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';

import acrylicBubbleSwing1 from '../assets/newarrival.png';
import acrylicBubbleSwing2 from '../assets/newarrival.png';

const WishList = () => {
  const wishlistItems = [
    {
      id: 1,
      image: acrylicBubbleSwing1,
      description: 'Gold Infinity Ring 1',
      price: '₹120.00',
    },
    {
      id: 2,
      image: acrylicBubbleSwing2,
      description: 'Gold Infinity Ring 1',
      price: '₹120.00',
    },
  ];

  return (
    <div className="bg-white min-h-screen px-4 py-8 md:px-8 lg:px-16 pb-40">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-black text-left">Wishlist</h2>
        <p className="text-sm text-gray-500 pt-2 text-left">Home / Wishlist</p>
      </div>

      {/* Table for medium and large screens */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-white">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Product</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Description</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-black uppercase tracking-wider">Total</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-black uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-300">
            {wishlistItems.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-4">
                  <img className="h-16 w-16 object-cover rounded" src={item.image} alt={item.description} />
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">{item.description}</td>
                <td className="px-6 py-4 text-sm text-right text-gray-900">{item.price}</td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end items-center gap-2">
                    <Link to="/#" className="bg-[#393185] hover:bg-gray-500 text-white font-semibold py-2 px-4 rounded text-sm">
                      Add To Cart
                    </Link>
                    <button className="text-black hover:text-red-500">
                      <FaTrashAlt className="text-lg" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Responsive cards for small screens */}
      <div className="md:hidden space-y-6">
        {wishlistItems.map((item) => (
          <div key={item.id} className="bg-white rounded shadow-md p-4 space-y-3">
            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.description} className="h-16 w-16 object-cover rounded" />
              <div>
                <p className="text-sm font-medium text-gray-800">{item.description}</p>
                <p className="text-sm text-gray-600">{item.price}</p>
              </div>
            </div>
            <div className="flex justify-between items-center pt-2">
              <Link to="/#" className="bg-[#393185] hover:bg-gray-500 text-white font-semibold py-2 px-4 rounded text-sm">
                Add To Cart
              </Link>
              <button className="text-gray-500 hover:text-red-500">
                <FaTrashAlt className="text-lg" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Continue Shopping Button */}
      <div className="mt-6">
        <Link
          to="/Product"
          className="inline-flex items-center px-4 py-2 border border-gray-400 shadow-sm text-sm font-medium rounded text-gray-700 bg-white hover:bg-gray-50"
        >
          <svg className="-ml-1 mr-2 h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default WishList;
