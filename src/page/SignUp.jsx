import React from 'react';
import Logo from '../assets/llogo.png';

const SignUp = () => {
  return (
    <div className="fixed top-0 left-0 w-full pt-0 h-full bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-md space-y-6 bg-white">
        {/* Logo */}
        <div className="flex justify-center">
          <img src={Logo} alt="Hari Om Chemicals" className="h-32 object-contain" />
        </div>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="First Name"
            className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 "
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 "
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 "
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 "
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 "
          />

          <button
            type="submit"
            className="w-full bg-[#393185] hover:bg-[#393185] text-white font-semibold py-3 rounded-md transition"
          >
            Sign Up
          </button>
        </form>

     
        <p className="text-center text-sm text-gray-500 mt-2">
          Can’t Sign up? <a href="/Login" className="text-[#393185] hover:underline">Log in an account</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;