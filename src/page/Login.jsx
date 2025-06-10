

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Logo from '../assets/llogo.png';
// import { FiEye, FiEyeOff } from 'react-icons/fi'; 


// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);

//   const togglePasswordVisibility = () => {
//     setShowPassword(prev => !prev);
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // Simple validation
//     if (!email || !password) {
//       alert('Please enter both email and password');
//       return;
//     }

//     // Fake login logic (Replace with API call)
//     console.log('Logging in with:', { email, password });
//     alert('Login Successful (Dummy)');
//   };

//   return (
//     <div className="fixed top-0 left-0 w-full h-full bg-white flex justify-center items-center px-4">
//       <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md border border-gray-200">
        
//         {/* Logo */}
//         <div className="flex justify-center mb-6">
//           <img
//             src={Logo}
//             alt="Hariom Chemicals Logo"
//             className="h-20 w-auto object-contain"
//           />
//         </div>

//         <form onSubmit={handleLogin}>

//           {/* Email Input */}
//           <input
//             type="email"
//             placeholder="Email Address"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full px-4 py-2 border border-gray-300 text-black bg-white rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-[#393185]"
//           />

//           {/* Password Input */}
//           <div className="relative mb-4">
//             <input
//               type={showPassword ? 'text' : 'password'}
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#393185]"
//             />
//             <button
//               type="button"
//               onClick={togglePasswordVisibility}
//               className="absolute inset-y-0 right-3 flex items-center text-gray-500 text-xl"
//             >
//                {showPassword ? <FiEyeOff /> : <FiEye />}
//             </button>
//           </div>

//           {/* Forgot Password */}
//           <div className="text-right text-sm text-gray-600 mb-4">
//             <Link to="/ForgotPassword" className="hover:underline">Forgot Password?</Link>
//           </div>

//           {/* Login Button */}
//           <button
//             type="submit"
//             className="w-full bg-[#393185] text-white py-2 rounded-md hover:bg-[#2e2a6e] transition duration-300"
//           >
//             Log in
//           </button>

//         </form>

//         {/* Divider */}
//         <div className="flex items-center my-4">
//           <hr className="flex-grow border-gray-300" />
//           <span className="mx-2 text-gray-500 text-sm">OR</span>
//           <hr className="flex-grow border-gray-300" />
//         </div>

//         {/* Social Buttons */}
//         <div className="flex space-x-2">
//           <button className="w-1/2 border border-gray-300 py-2 text-gray-500 rounded-md hover:bg-gray-100 transition">
//             Google
//           </button>
//           <button className="w-1/2 border border-gray-300 py-2 text-gray-500 rounded-md hover:bg-gray-100 transition">
//             Facebook
//           </button>
//         </div>

//         {/* Signup Prompt */}
//         <p className="text-center text-sm text-gray-600 mt-4">
//           Don’t have an account?{' '}
//           <Link to="/Signup" className="text-[#393185] hover:underline">
//             Sign up
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/llogo.png';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !perv);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Please enter both email and password');
      return;
    }

    
    console.log('Logging in with:', { email, password });

    navigate('/');
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white flex justify-center items-center px-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md border border-gray-200">

        <div className="flex justify-center mb-6">
          <img src={Logo} alt="Hariom Chemicals Logo" className="h-20 w-auto object-contain" />
        </div>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 text-black bg-white rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-[#393185]"
          />

          <div className="relative mb-4">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#393185]"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-3 flex items-center text-gray-500 text-xl"
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>

          <div className="text-right text-sm text-gray-600 mb-4">
            <Link to="/ForgotPassword" className="hover:underline">Forgot Paasword?</Link>
          </div>

          <button
            type="submit"
            className="w-full bg-[#393185] text-white py-2 rounded-md hover:bg-[#2e2a6e] transition duration-300"
          >
            Log in
          </button>
        </form>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-500 text-sm">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <div className="flex space-x-2">
          <button className="w-1/2 border border-gray-300 py-2 text-gray-500 rounded-md hover:bg-gray-100 transition">Google</button>
          <button className="w-1/2 border border-gray-300 py-2 text-gray-500 rounded-md hover:bg-gray-100 transition">Facebook</button>
        </div>

        <p className="text-center text-sm text-gray-600 mt-4">
          Don’t have an account?{' '}
          <Link to="/Signup" className="text-[#393185] hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
