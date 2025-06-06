
// import React from 'react'
// import LogoImg from "../assets/llogo.png"; 
// import BottleCard1 from "../assets/newarrival.png"; 
// import BottleCard2 from "../assets/newarrival.png";
// // import { FaPlayCircle } from "react-icons/fa"; 
// import { FiPlayCircle } from "react-icons/fi";
// const Last = () => {
//   return (
//     <section className="py-12 px-6 bg-white">
//       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-center items-center gap-8">

//         {/* Logo */}
//         <div className="flex flex-col items-left lg:items-start text-left lg:text-left">
//           <img src={LogoImg} alt="Logo" className="w-50 h-auto mt-80 mr-40 ml-0 items-center" /> 
//         </div>

//         {/* Bottle Image */}
//         <div className="mt-50">
//           <img src={BottleCard1} alt="Cleaning Bottles" className="w-64 h-auto object-contain" />
//         </div>

//         {/* Hover Play Section */}
//         <div className="relative group mt-1">
//           <img
//             src={BottleCard2}
//             alt="Cleaning Bottles Video"
//             className="w-100 h-auto object-contain opacity-90 transition duration-300 ease-in-out group-hover:brightness-50"
//           />
//           <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//             <div className="bg-white rounded-full p-3 shadow-lg hover:scale-110 transition-transform cursor-pointer">
//               <FiPlayCircle size={30} className="text-black border-black" />
//             </div>
//           </div>
//         </div>

//       </div>
//     </section>
//   )
// }

// export default Last

// import React from 'react'
// import LogoImg from "../assets/llogo.png"; 
// import BottleCard1 from "../assets/newarrival.png"; 
// import BottleCard2 from "../assets/newarrival.png";
// import { FiPlayCircle } from "react-icons/fi"; // Ensure react-icons is installed

// const Last = () => {
//   return (
//     <section className="py-12 px-4 sm:px-6 md:px-8 lg:px-20 bg-white"> {/* Responsive padding for the section */}
//       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:justify-between items-center gap-8"> {/* Main flex container, responsive layout */}

//         {/* Logo Section */}
//         {/* On small screens, it will center. On large screens, it will align to the start (left). */}
//         {/* Responsive width for the logo container */}
//         <div className="flex flex-col items-center lg:pt-50 md:pt-30 sm:pt-10 lg:items-start text-center lg:text-left w-full lg:w-1/4">
//           <img 
//             src={LogoImg} 
//             alt="Logo" 
//             className="w-40 sm:w-48 md:w-56 lg:w-55 h-auto object-contain mb-4" // Responsive width for the logo image
//           /> 
//         </div>

//         {/* First Bottle Image */}
//         {/* Responsive width for the bottle image */}
//         <div className="w-full sm:w-auto flex justify-center lg:pt-30 md:pt-20 sm:pt-10"> {/* Center on small screens */}
//           <img 
//             src={BottleCard1} 
//             alt="Cleaning Bottles" 
//             className="w-48 sm:w-56 md:w-64 lg:w-72 h-auto object-contain" // Responsive width for the bottle image
//           />
//         </div>

//         {/* Second Bottle Image with Hover Play Section */}
//         {/* Responsive width for the bottle image container */}
//         <div className="relative group w-full sm:w-auto flex justify-center"> {/* Center on small screens */}
//           <img
//             src={BottleCard2}
//             alt="Cleaning Bottles Video"
//             className="w-64 sm:w-72 md:w-80 lg:w-96 h-auto object-contain opacity-90 transition duration-300 ease-in-out group-hover:brightness-50" // Responsive width for the bottle image
//           />
//           {/* Play Icon Overlay */}
//           <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//             <div className="bg-white rounded-full p-3 shadow-lg hover:scale-110 transition-transform cursor-pointer">
//               <FiPlayCircle size={30} className="text-black" /> {/* Removed border-black as it's not needed */}
//             </div>
//           </div>
//         </div>

//       </div>
//     </section>
//   )
// }

// export default Last


// import React from 'react';
// import { motion } from 'framer-motion';
// import LogoImg from "../assets/llogo.png"; 
// import BottleCard1 from "../assets/newarrival.png"; 
// import BottleCard2 from "../assets/newarrival.png";
// import { FiPlayCircle } from "react-icons/fi";

// const Last = () => {
//   return (
//     <section className="py-12 px-4 sm:px-6 md:px-8 lg:px-20 bg-white">
//       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:justify-between items-center gap-8">
        
//         {/* Logo Section */}
//         <motion.div
//           className="flex flex-col items-center lg:pt-50 md:pt-30 sm:pt-10 lg:items-start text-center lg:text-left w-full lg:w-1/4"
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: false, amount: 0.3 }}
//         >
//           <img 
//             src={LogoImg} 
//             alt="Logo" 
//             className="w-40 sm:w-48 md:w-56 lg:w-55 h-auto object-contain mb-4"
//           /> 
//         </motion.div>

//         {/* First Bottle Image */}
//         <motion.div
//           className="w-full sm:w-auto flex justify-center lg:pt-30 md:pt-20 sm:pt-10"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: false, amount: 0.3 }}
//         >
//           <img 
//             src={BottleCard1} 
//             alt="Cleaning Bottles" 
//             className="w-48 sm:w-56 md:w-64 lg:w-72 h-auto object-contain"
//           />
//         </motion.div>

//         {/* Second Bottle Image with Hover Play */}
//         <motion.div
//           className="relative group w-full sm:w-auto flex justify-center"
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: false, amount: 0.3 }}
//         >
//           <img
//             src={BottleCard2}
//             alt="Cleaning Bottles Video"
//             className="w-64 sm:w-72 md:w-80 lg:w-96 h-auto object-contain opacity-90 transition duration-300 ease-in-out group-hover:brightness-50"
//           />
//           <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//             <div className="bg-white rounded-full p-3 shadow-lg hover:scale-110 transition-transform cursor-pointer">
//               <FiPlayCircle size={30} className="text-black" />
//             </div>
//           </div>
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default Last;

import React from 'react';
import { motion } from 'framer-motion';
import LogoImg from "../assets/llogo.png";
import BottleCard1 from "../assets/newarrival.png";
import BottleCard2 from "../assets/newarrival.png";
import { FiPlayCircle } from "react-icons/fi";

const Last = () => {
  return (
    <section className="py-12 px-4 sm:px-6 md:px-8 lg:px-20   bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-8">

        {/* Logo Section */}
        <motion.div
          className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/3 sm:pt-8 md:pt-14 lg:pt-60"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <img 
            src={LogoImg} 
            alt="Logo" 
            className="w-40 sm:w-48 md:w-56 lg:w-52 h-auto object-contain mb-4 max-w-full"
          />
        </motion.div>

        {/* First Bottle Image */}
        <motion.div
          className="flex justify-center w-full lg:w-1/3 sm:pt-12 md:pt-20 lg:pt-28"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <img 
            src={BottleCard1} 
            alt="Cleaning Bottles" 
            className="w-48 sm:w-56 md:w-64 lg:w-72 h-auto object-contain max-w-full"
          />
        </motion.div>

        {/* Second Bottle Image with Hover Play */}
        <motion.div
          className="relative group flex justify-center w-full lg:w-1/3"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <img
            src={BottleCard2}
            alt="Cleaning Bottles Video"
            className="w-64 sm:w-72 md:w-80 lg:w-96 h-auto object-contain opacity-90 transition duration-300 ease-in-out group-hover:brightness-50 max-w-full"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white rounded-full p-3 shadow-lg hover:scale-110 transition-transform cursor-pointer">
              <FiPlayCircle size={30} className="text-black" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Last;
