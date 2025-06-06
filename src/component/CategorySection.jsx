// import React from 'react';
// import AllPurposeImg from '../assets/cat1.png';
// import KitchenImg from '../assets/cat2.png';
// import BathroomImg from '../assets/cat3.png';
// import FloorImg from '../assets/cat4.png';
// import GlassImg from '../assets/cat5.png';
// import LaundryImg from '../assets/cat6.png';

// const categories = [
//   { title: "All-Purpose", image: AllPurposeImg },
//   { title: "Kitchen", image: KitchenImg },
//   { title: "Bathroom", image: BathroomImg },
//   { title: "Floor", image: FloorImg },
//   { title: "Glass", image: GlassImg },
//   { title: "Laundry", image: LaundryImg },
// ];

// const CategorySection = () => {
//   return (
//     <div className="bg-white py-12 px-6 md:px-12 lg:px-20">
//       <h2 className="text-2xl sm:text-3xl font-semibold text-center mt-6 mb-10 text-black">Browse Categories</h2>
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-items-center">
//         {categories.map((category, index) => (
//           <div key={index} className="flex flex-col items-center">
//             <img
//               src={category.image}
//               alt={category.title}
//               className="w-40 h-40 sm:w-48 sm:h-48 object-cover rounded-xl shadow-md"
//             />
//             <p className="mt-3 text-xl font-medium text-black">{category.title}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CategorySection;


import React from 'react';
import { easeInOut, motion } from 'framer-motion'; 
import AllPurposeImg from '../assets/cat1.png';
import KitchenImg from '../assets/cat2.png';
import BathroomImg from '../assets/cat3.png';
import FloorImg from '../assets/cat4.png';
import GlassImg from '../assets/cat5.png';
import LaundryImg from '../assets/cat6.png';

const categories = [
  { title: "All-Purpose", image: AllPurposeImg },
  { title: "Kitchen", image: KitchenImg },
  { title: "Bathroom", image: BathroomImg },
  { title: "Floor", image: FloorImg },
  { title: "Glass", image: GlassImg },
  { title: "Laundry", image: LaundryImg },
];

const CategorySection = () => {
  return (
    <div className="bg-white py-12 px-6 md:px-12 lg:px-20">

      {/* <h2 className="text-2xl sm:text-3xl font-semibold text-center mt-6 mb-10 text-black">Browse Categories</h2> */}
      <motion.h2 
      className="text-2xl sm:text-3xl font-bold text-center mt-6 mb-10 text-black"
      animate={{ opacity:1, y:10}}
      initial={{opacity:0, y:-20}}
       transition={{duration:0.6, ease:"easeInOut"}} >Browse Categories</motion.h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-items-center">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1}}
            viewport={{ once: false, amount: 0.2 }} 
          >
            <img
              src={category.image}
              alt={category.title}
              className="w-40 h-40 sm:w-48 sm:h-48 object-cover rounded-xl shadow-md"
            />
            <p className="mt-3 text-xl font-medium text-black">{category.title}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;

// import React from 'react';
// import { easeInOut, motion } from 'framer-motion';
// import AllPurposeImg from '../assets/cat1.png';
// import KitchenImg from '../assets/cat2.png';
// import BathroomImg from '../assets/cat3.png';
// import FloorImg from '../assets/cat4.png';
// import GlassImg from '../assets/cat5.png';
// import LaundryImg from '../assets/cat6.png';

// const categories = [
//   { title: "All-Purpose", image: AllPurposeImg },
//   { title: "Kitchen", image: KitchenImg },
//   { title: "Bathroom", image: BathroomImg },
//   { title: "Floor", image: FloorImg },
//   { title: "Glass", image: GlassImg },
//   { title: "Laundry", image: LaundryImg },
// ];

// const CategorySection = () => {
//   // Duplicate categories for seamless looping
//   const extendedCategories = [...categories, ...categories];

//   return (
//     <div className="bg-white py-8 px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden">
//       <motion.h2
//         className="text-2xl sm:text-3xl font-bold text-center mb-8 text-black"
//         animate={{ opacity: 1, y: 0 }}
//         initial={{ opacity: 0, y: -20 }}
//         transition={{ duration: 0.6, ease: "easeInOut" }}
//       >
//         Browse Categories
//       </motion.h2>
//       <div className="relative w-full">
//         <motion.div
//           className="flex"
//           animate={{
//             x: ['0%', '-50%'],
//             transition: {
//               x: {
//                 repeat: Infinity,
//                 repeatType: 'loop',
//                 duration: 20,
//                 ease: 'linear',
//               },
//             },
//           }}
//           style={{ width: '200%' }} 
//         >
//           {extendedCategories.map((category, index) => (
//             <div
//               key={index}
//               className="flex flex-col items-center mx-2 sm:mx-3 md:mx-4 flex-shrink-0"
//               style={{ width: 'calc(100% / 6 - 1rem)' }} 
//             >
//               <motion.img
//                 src={category.image}
//                 alt={category.title}
//                 className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover rounded-xl shadow-md"
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ duration: 0.3 }}
//               />
//               <p className="mt-2 text-base sm:text-lg md:text-xl font-medium text-black text-center">
//                 {category.title}
//               </p>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default CategorySection;
 