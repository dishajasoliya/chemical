
import React from 'react';
import { FiUser, FiClipboard, FiTrash2, FiLogOut } from 'react-icons/fi';
import OrderImg from '../assets/newarrival.png'; // Replace with your actual image

const DeleteAccount = () => {
  return (
    <div className="min-h-screen bg-white px-4 py-8 md:px-8 lg:px-16 text-black">
      <h2 className="text-2xl font-bold">Track Your Order</h2>
      <p className="text-sm text-gray-500 mt-1 mb-6">Home / Track Your Order</p>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <div className="bg-white border rounded-md shadow-sm w-full lg:w-1/4 p-6 space-y-6">
          <div className="flex flex-col items-center text-center">
            <img
              src="https://via.placeholder.com/80"
              alt="User"
              className="w-20 h-20 rounded-full object-cover"
            />
            <p className="mt-2 font-semibold">Hii, Rahi</p>
          </div>

          <nav className="space-y-4">
            <button className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 rounded-md text-gray-700">
              <FiUser />
              My Profile
            </button>
            <button className="flex items-center gap-2 w-full px-4 py-2 bg-[#393185] text-white rounded-md">
              <FiClipboard />
              Order History
            </button>
            <button className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 rounded-md text-gray-700">
              <FiTrash2 />
              Delete Account
            </button>
            <button className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 rounded-md text-gray-700">
              <FiLogOut />
              Log out
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="bg-white border border-gray-300 rounded-md shadow-sm w-full lg:w-3/4 p-6 space-y-6">
          {/* Progress Tracker */}
          <div className="flex justify-between items-center text-center text-sm font-medium text-gray-600">
            {['Ordered', 'Shipping', 'Out of delivery', 'Delivered'].map((step, index) => (
              <div key={index} className="flex-1">
                <div
                  className={`w-8 h-8 mx-auto  rounded-full flex items-center justify-center ${
                    index <= 1 ? 'bg-[#393185] text-white' : 'border border-gray-300'
                  }`}
                >
                  ✓
                </div>
                <p className="mt-1">{step}</p>
              </div>
            ))}
          </div>

          {/* Delivery & Address Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-300 p-4 rounded-md">
              <p className="font-medium mb-1">Delivery by Hari om Chemical</p>
              <p className="text-sm text-gray-600">Tracking ID: 1234789412345689</p>
            </div>
            <div className="border border-gray-300 p-4 rounded-md">
              <p className="font-medium mb-1">Shipping Address</p>
              <p className="text-sm text-gray-600">
                123 Gold District<br />New York, NY 10001
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="w-full  rounded-md p-4 flex ">
            <img
              src={OrderImg}
              alt="Order Product"
              className="object-cover w-100 max-h-100 rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccount;
