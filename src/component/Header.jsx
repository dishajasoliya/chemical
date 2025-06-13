// import React, { useState } from 'react';
// import { Link } from "react-router-dom";
// import { FiShoppingCart, FiHeart, FiUser, FiMenu, FiX } from 'react-icons/fi';
// import { motion } from 'framer-motion';
// import logo from '../assets/logo.png';
// import logoimg from '../assets/logoimg.png';

// const Header = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <header className="w-full bg-[#393185] text-white top-0 z-10 sticky lg:static">
//       {/* Top Bar */}
//       <div className="text-center py-2 border-b border-white">
//         Free shipping on all orders above $499
//       </div>

//       <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-20 2xl:px-40 py-4 relative max-w-screen-2xl mx-auto">
//         <div className="flex items-center md:grid md:grid-cols-3">
//           {/* Mobile Menu Icon */}
//           <div className="md:hidden">
//             <button onClick={toggleMobileMenu} className="focus:outline-none">
//               {isMobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
//             </button>
//           </div>

//           {/* Logo */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             className="flex items-center justify-center md:justify-start lg:gap-3 md:gap-1 sm:gap-1"
//           >
//             <Link to="/Home" className="flex items-center gap-2">
//               <img src={logo} alt="Logo Icon" className="w-12 h-12 md:w-10 md:h-10" />
//               <img src={logoimg} alt="Logo Text" className="h-8" />
//             </Link>
//           </motion.div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex justify-center items-center gap-6 lg:gap-10 text-sm md:text-base font-semibold">
//             <Link to="/Home" className="text-white hover:text-gray-200">Home</Link>
//             <Link to="/Product" className="text-white hover:text-gray-200">All Product</Link>
//             <Link to="/About" className="text-white hover:text-gray-200">About us</Link>
//             <Link to="/Contact" className="text-white hover:text-gray-200">Contact</Link>
//           </nav>

//           {/* Icons */}
//           <div className="flex justify-center md:justify-end items-center gap-2">
//             <Link to="/AddCart">
//               <motion.button
//                 whileHover={{ scale: 1.2 }}
//                 whileTap={{ scale: 0.9 }}
//                 className="bg-white w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
//               >
//                 <FiShoppingCart className="text-[#393185] w-4 h-4" />
//               </motion.button>
//             </Link>
//             <Link to="/WishList">
//               <motion.button
//                 whileHover={{ scale: 1.2 }}
//                 whileTap={{ scale: 0.9 }}
//                 className="bg-white w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
//               >
//                 <FiHeart className="text-[#393185] w-4 h-4" />
//               </motion.button>
//             </Link>
//             <Link to="/Profile">
//               <motion.button
//                 whileHover={{ scale: 1.2 }}
//                 whileTap={{ scale: 0.9 }}
//                 className="bg-white w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
//               >
//                 <FiUser className="text-[#393185] w-4 h-4" />
//               </motion.button>
//             </Link>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isMobileMenuOpen && (
//           <motion.nav
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.3 }}
//             className="md:hidden flex flex-col w-full bg-[#393185] py-4 space-y-4 items-center"
//           >
//             <Link to="/Home" className="text-white hover:text-gray-200">Home</Link>
//             <Link to="/Product" className="text-white hover:text-gray-200">All Product</Link>
//             <Link to="/About" className="text-white hover:text-gray-200">About us</Link>
//             <Link to="/Contact" className="text-white hover:text-gray-200">Contact</Link>
//           </motion.nav>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FiShoppingCart, FiHeart, FiUser, FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';
import logoimg from '../assets/logoimg.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  return (
    <header className="w-full bg-[#393185] text-white top-0 z-50 sticky">
      {/* Top Bar */}
      <div className="text-center py-2 border-b border-white">
        Free shipping on all orders above $499
      </div>

      {/* Navbar */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-20 2xl:px-40 py-4 max-w-screen-2xl mx-auto relative">
        <div className="flex items-center justify-between md:grid md:grid-cols-3">
          {/* Toggle Button - Mobile */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-white">
              {isMobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center md:justify-start gap-2"
          >
            <Link to="/Home" className="flex items-center gap-2">
              <img src={logo} alt="Logo Icon" className="w-12 h-12 md:w-10 md:h-10" />
              <img src={logoimg} alt="Logo Text" className="h-8 " />
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex justify-center items-center gap-6 lg:gap-10 text-sm md:text-base font-semibold">
            <Link to="/Home" className="hover:text-gray-200">Home</Link>
            <Link to="/Product" className="hover:text-gray-200">All Product</Link>
            <Link to="/About" className="hover:text-gray-200">About us</Link>
            <Link to="/Contact" className="hover:text-gray-200">Contact</Link>
          </nav>

          {/* Icons */}
          <div className="flex justify-end items-center gap-2">
            <Link to="/AddCart">
              <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}
                className="bg-white w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100">
                <FiShoppingCart className="text-[#393185] w-4 h-4" />
              </motion.button>
            </Link>
            <Link to="/WishList">
              <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}
                className="bg-white w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100">
                <FiHeart className="text-[#393185] w-4 h-4" />
              </motion.button>
            </Link>
            <Link to="/Profile">
              <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}
                className="bg-white w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100">
                <FiUser className="text-[#393185] w-4 h-4" />
              </motion.button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer (Header stays visible) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[120px] left-0 z-40 w-64 bg-[#393185] shadow-lg p-6 space-y-4  md:hidden"
          >
            <nav className="flex flex-col space-y-4 text-base font-semibold">
              <Link to="/Home" onClick={toggleMobileMenu} className="hover:text-gray-200">Home</Link>
              <Link to="/Product" onClick={toggleMobileMenu} className="hover:text-gray-200">All Product</Link>
              <Link to="/About" onClick={toggleMobileMenu} className="hover:text-gray-200">About us</Link>
              <Link to="/Contact" onClick={toggleMobileMenu} className="hover:text-gray-200">Contact</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;