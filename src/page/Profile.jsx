// src/pages/TrackOrder.jsx
// import React, { useState } from 'react';
// import { FiUser, FiClipboard, FiTrash2, FiLogOut } from 'react-icons/fi';
// import ProfileImg from '../assets/profile.png';
// import OrderImg from '../assets/newarrival.png'; 
// const Profile = () => {
//   const [activeTab, setActiveTab] = useState('profile');

//   return (
//     <div className="min-h-screen bg-white px-4 py-8 md:px-16 text-black">
//       <h2 className="text-2xl font-bold">Track Your Order</h2>
//       <p className="text-sm text-gray-500 mt-1 mb-6">Home / Track Your Order</p>
//       <div className="flex flex-col lg:flex-row gap-6">
//         {/* Sidebar */}
//         <div className="bg-white shadow-md border border-gray-300 rounded-md w-full lg:w-1/4 p-6 space-y-6">
//           <div className="flex flex-col items-center">
//             <img
//               src={ProfileImg}
//               alt="User"
//               className="w-20 h-20 rounded-full object-cover"
//             />
//             <p className="mt-2 font-semibold">Hii, Rahi</p>
//           </div>

//           <nav className="space-y-4">
//             <button
//               onClick={() => setActiveTab('profile')}
//               className={`flex items-center gap-2 w-full px-4 py-2 rounded-md ${activeTab === 'profile' ? 'bg-[#393185] text-white' : 'hover:bg-gray-100'}`}
//             >
//               <FiUser />
//               My Profile
//             </button>
//             <button
//               onClick={() => setActiveTab('orders')}
//               className={`flex items-center gap-2 w-full px-4 py-2 rounded-md ${activeTab === 'orders' ? 'bg-[#393185] text-white' : 'hover:bg-gray-100'}`}
//             >
//               <FiClipboard />
//               Order History
//             </button>
//             <button className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 rounded-md">
//               <FiTrash2 />
//               Delete Account
//             </button>
//             <button className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 rounded-md">
//               <FiLogOut />
//               Log out
//             </button>
//           </nav>
//         </div>

//         {/* Main Content */}
//         <div className="bg-white shadow-md border border-gray-300 rounded-md w-full lg:w-3/4 p-6 space-y-6">
//           {activeTab === 'profile' && (
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label className="block mb-1 text-sm font-medium">First Name</label>
//                 <input
//                   type="text"
//                   value="Rahi"
//                   className="w-full p-2 border border-gray-300 rounded-md"
//                   readOnly
//                 />
//               </div>
//               <div>
//                 <label className="block mb-1 text-sm font-medium">Last Name</label>
//                 <input
//                   type="text"
//                   value="Sharma"
//                   className="w-full p-2 border border-gray-300 rounded-md"
//                   readOnly
//                 />
//               </div>
//               <div>
//                 <label className="block mb-1 text-sm font-medium">Phone Number</label>
//                 <input
//                   type="text"
//                   value="9876543210"
//                   className="w-full p-2 border border-gray-300 rounded-md"
//                   readOnly
//                 />
//               </div>
//               <div>
//                 <label className="block mb-1 text-sm font-medium">DOB</label>
//                 <input
//                   type="text"
//                   value="12/12/2000"
//                   className="w-full p-2 border border-gray-300 rounded-md"
//                   readOnly
//                 />
//               </div>
//               <div className="md:col-span-2">
//                 <label className="block mb-1 text-sm font-medium">Email</label>
//                 <input
//                   type="email"
//                   value="rahi.sharma@example.com"
//                   className="w-full p-2 border border-gray-300 rounded-md"
//                   readOnly
//                 />
//               </div>
//             </div>
//           )}

//           {activeTab === 'orders' && (
//             <>
//               <div className="flex justify-between items-center">
//                 {['Ordered', 'Shipping', 'Out of delivery', 'Delivered'].map((step, idx) => (
//                   <div key={idx} className="flex flex-col items-center flex-1">
//                     <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${idx < 2 ? 'bg-[#393185] border-[#393185] text-white' : 'border-gray-300 text-gray-400'}`}>
//                       {idx < 2 ? '✓' : ''}
//                     </div>
//                     <span className="mt-1 text-sm text-center text-black">{step}</span>
//                   </div>
//                 ))}
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div className="border border-gray-300 p-4 rounded-md">
//                   <h4 className="font-semibold mb-1">Delivery by Hari om Chemical</h4>
//                   <p className="text-sm text-gray-600">Tracking ID: 1234789412345689</p>
//                 </div>
//                 <div className="border border-gray-300 p-4 rounded-md">
//                   <h4 className="font-semibold mb-1">Shipping Address</h4>
//                   <p className="text-sm text-gray-600">123 Gold District, New York, NY 10001</p>
//                 </div>
//               </div>

//                 <div className="w-full  rounded-md p-4 flex ">
//                           <img
//                             src={OrderImg}
//                             alt="Order Product"
//                             className="object-cover w-100 max-h-100 rounded-xl"
//                           />
//                         </div>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;

import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FiUser, FiClipboard, FiTrash2, FiLogOut } from 'react-icons/fi';
import ProfileImg from '../assets/profile.png';
import OrderImg from '../assets/newarrival.png';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="min-h-screen bg-white px-4 py-8 md:px-16 text-black">
      <h2 className="text-2xl font-bold">Track Your Order</h2>
      <p className="text-sm text-gray-500 mt-1 mb-6">Home / Track Your Order</p>
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <div className="bg-white shadow-md border border-gray-300 rounded-md w-full lg:w-1/4 p-6 space-y-6">
          <div className="flex flex-col items-center">
            <img
              src={ProfileImg}
              alt="User"
              className="w-20 h-20 rounded-full object-cover"
            />
            <p className="mt-2 font-semibold">Hii, Rahi</p>
          </div>

          <nav className="space-y-4">
            <button
              onClick={() => setActiveTab('profile')}
              className={`flex items-center gap-2 w-full px-4 py-2 rounded-md ${activeTab === 'profile' ? 'bg-[#393185] text-white' : 'hover:bg-gray-100'}`}
            >
              <FiUser />
              My Profile
            </button>
            <button
              onClick={() => setActiveTab('orders')}
              className={`flex items-center gap-2 w-full px-4 py-2 rounded-md ${activeTab === 'orders' ? 'bg-[#393185] text-white' : 'hover:bg-gray-100'}`}
            >
              <FiClipboard />
              Order History
            </button>
            <button
              onClick={() => setActiveTab('deleteAccount')}
              className={`flex items-center gap-2 w-full px-4 py-2 rounded-md ${activeTab === 'deleteAccount' ? 'bg-[#393185] text-white' : 'hover:bg-gray-100'}`}
            >
              <FiTrash2 />
              Delete Account
            </button>
            <Link to="/Login">
            <button className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 rounded-md">
              <FiLogOut />
              Log out
            </button>
            </Link>
          </nav>
        </div>

        {/* Main Content */}
        <div className="bg-white shadow-md border border-gray-300 rounded-md w-full lg:w-3/4 p-6 space-y-6">
          {activeTab === 'profile' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Profile Details */}
              <div>
                <label className="block mb-1 text-sm font-medium">First Name</label>
                <input
                  type="text"
                  value="Rahi"
                  className="w-full p-2 border border-gray-300 bg-white rounded-md"
                  readOnly
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">Last Name</label>
                <input
                  type="text"
                  value="Sharma"
                  className="w-full p-2 border border-gray-300 bg-white rounded-md"
                  readOnly
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">Phone Number</label>
                <input
                  type="text"
                  value="9876543210"
                  className="w-full p-2 border border-gray-300 bg-white rounded-md"
                  readOnly
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">DOB</label>
                <input
                  type="text"
                  value="12/12/2000"
                  className="w-full p-2 border border-gray-300 bg-white rounded-md"
                  readOnly
                />
              </div>
              <div className="md:col-span-2">
                <label className="block mb-1 text-sm font-medium">Email</label>
                <input
                  type="email"
                  value="rahi.sharma@example.com"
                  className="w-full p-2 border border-gray-300 bg-white rounded-md"
                  readOnly
                />
              </div>
            </div>
          )}

          {activeTab === 'orders' && (
            <>
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
            </>
          )}

          {activeTab === 'deleteAccount' && (
            <>
            {/* Order Progress Steps */}
              <div className="flex justify-between items-center">
                {['Ordered', 'Shipping', 'Out of delivery', 'Delivered'].map((step, idx) => (
                  <div key={idx} className="flex flex-col items-center flex-1">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${idx < 2 ? 'bg-[#393185] border-[#393185] text-white' : 'border-gray-300 text-gray-400'}`}>
                      {idx < 2 ? '✓' : ''}
                    </div>
                    <span className="mt-1 text-sm text-center text-black">{step}</span>
                  </div>
                ))}
              </div>

              {/* Order Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-gray-300 p-4 rounded-md">
                  <h4 className="font-semibold mb-1">Delivery by Hari om Chemical</h4>
                  <p className="text-sm text-gray-600">Tracking ID: 1234789412345689</p>
                </div>
                <div className="border border-gray-300 p-4 rounded-md">
                  <h4 className="font-semibold mb-1">Shipping Address</h4>
                  <p className="text-sm text-gray-600">123 Gold District, New York, NY 10001</p>
                </div>
              </div>

              {/* Product Image */}
              <div className="w-full rounded-md p-4 flex">
                <img
                  src={OrderImg}
                  alt="Order Product"
                  className="object-cover w-100 max-h-90 rounded-xl"
                />
              </div>
              </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
