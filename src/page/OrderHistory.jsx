import React from 'react';
import { FiUser, FiClipboard, FiTrash2, FiLogOut } from 'react-icons/fi';
import OrderImg from '../assets/newarrival.png';

const OrderHistory = () => {
  return (
    <div className="min-h-screen bg-white px-4 py-8 md:px-8 lg:px-16 text-black">
      <h2 className="text-2xl font-bold">Track Your Order</h2>
      <p className="text-sm text-gray-500 mt-1 mb-6">Home / Track Your Order</p>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <div className="bg-white shadow-md border rounded-md w-full lg:w-1/4 p-6 space-y-6">
          <div className="flex flex-col items-center">
            <img
              src="https://via.placeholder.com/80"
              alt="User"
              className="w-20 h-20 rounded-full object-cover"
            />
            <p className="mt-2 font-semibold">Hii, Rahi</p>
          </div>

          <nav className="space-y-4">
            <button className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 rounded-md">
              <FiUser />
              My Profile
            </button>
            <button className="flex items-center gap-2 w-full px-4 py-2 bg-[#393185] text-white rounded-md">
              <FiClipboard />
              Order History
            </button>
            <button className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 rounded-md">
              <FiTrash2 />
              Delete Account
            </button>
            <button className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 rounded-md">
              <FiLogOut />
              Log out
            </button>
          </nav>
        </div>

        {/* Order Content */}
        <div className="w-full lg:w-[65%] max-w-4xl mx-auto border border-gray-300 rounded-md p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[1, 2].map((order) => (
              <div key={order} className="w-full">
                <img
                  src={OrderImg}
                  alt="Order Product"
                  className="w-full h-64 md:h-60 lg:h-90 object-cover rounded-md"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
