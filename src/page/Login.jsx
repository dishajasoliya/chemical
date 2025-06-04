// import React from 'react';
// import Logo from '../assets/llogo.png';

// const Login = () => {
//   return (
//     <div className="fixed top-0 left-0 w-full h-full bg-white flex justify-center items-center">
//       <div className="bg-white shadow-md rounded-md p-6 w-full max-w-md">
//         {/* Logo */}
//         <div className="flex justify-center mb-6">
//           <img
//             src={Logo}
//             alt="Hariom Chemicals Logo"
//             className="h-30 w-30 object-contain"
//           />
//         </div>

//         {/* Email Input */}
//         <input
//           type="email"
//           placeholder="Email Address"
//           className="w-full px-4 py-2 border border-gray-300 text-black rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-gray-300"
//         />

//         {/* Password Input */}
//         <div className="relative mb-2">
//           <input
//             type="password"
//             placeholder="Password"
//             className="w-full px-4 py-2 border border-gray-300 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
//           />
//           <button className="absolute inset-y-0 right-3 flex items-center text-gray-500">
//             👁️
//           </button>
//         </div>

//         {/* Forgot Password */}
//         <div className="text-right text-sm text-gray-600 mb-4">
//           <a href="#" className="hover:underline">Forgot Password?</a>
//         </div>

//         {/* Login Button */}
//         <button className="w-full bg-[#393185] text-white py-2 rounded-md hover:bg-[#393185] transition">
//           Log in
//         </button>

//         {/* Divider */}
//         <div className="flex items-center my-4">
//           <hr className="flex-grow border-gray-300" />
//           <span className="mx-2 text-gray-500">OR</span>
//           <hr className="flex-grow border-gray-300" />
//         </div>

//         {/* Google and Facebook Buttons */}
//         <div className="flex space-x-2">
//           <button className="w-1/2 border border-gray-300  text-black py-2 rounded-md focus:ring-gray-300 hover:bg-gray-100">
//             Google
//           </button>
//           <button className="w-1/2 border border-gray-300 text-black py-2 rounded-md focus:ring-gray-300 hover:bg-gray-100">
//             Facebook
//           </button>
//         </div>

//         {/* Signup Link */}
//         <p className="text-center text-sm text-gray-600 mt-4">
//           Can’t log in? <a href="/Signup" className="text-[#393185] hover:underline">Sign up an account</a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/llogo.png';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white flex justify-center items-center px-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md border border-gray-200">
        
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src={Logo}
            alt="Hariom Chemicals Logo"
            className="h-24 w-auto object-contain"
          />
        </div>

        {/* Email Input */}
        <input
          type="email"
          placeholder="Email Address"
          className="w-full px-4 py-2 border border-gray-300 text-black bg-white rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-[#393185]"
        />

        {/* Password Input */}
        <div className="relative mb-2">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#393185]"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-3 flex items-center text-gray-500"
          >
            {showPassword ? '🙈' : '👁️'}
          </button>
        </div>

        {/* Forgot Password */}
        <div className="text-right text-sm text-gray-600 mb-4">
          <Link to="/ForgotPassword" className="hover:underline">Forgot Password?</Link>
        </div>

        {/* Login Button */}
        <button className="w-full bg-[#393185] text-white py-2 rounded-md hover:bg-[#2e2a6e] transition duration-300">
          Log in
        </button>

        {/* Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-500 text-sm">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Social Buttons */}
        <div className="flex space-x-2">
          <button className="w-1/2 border border-gray-300 py-2 text-gray-500 rounded-md hover:bg-gray-100 transition">
            Google
          </button>
          <button className="w-1/2 border border-gray-300 py-2 text-gray-500 rounded-md hover:bg-gray-100 transition">
            Facebook
          </button>
        </div>

       
        <p className="text-center text-sm text-gray-600 mt-4 ">
          Don’t have an account?{' '}
          <Link to="/Signup" className="text-[#393185] hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
