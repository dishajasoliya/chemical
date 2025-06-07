// import React, { useState } from "react";
// import { motion } from "framer-motion"; // 
// import productImage from "../assets/arrival.png";
// import { FiShoppingCart, FiHeart } from "react-icons/fi";


// const products = Array.from({ length: 8 }, (_, i) => ({
//   id: i + 1,
//   name: `Multi-Surface Eco Cleaner ${i + 1}`,
//   price: "$1,299.00",
//   image: productImage,
// }));

// const NewArrival = () => {
//   const [showAll, setShowAll] = useState(false);
//   const visibleProducts = showAll ? products : products.slice(0, 4);

//   const handleViewAllClick = () => setShowAll(true);
//   const handleViewLessClick = () => setShowAll(false);

//   return (
//     <section className="bg-white py-12 px-6 sm:px-12 lg:px-30">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-2xl font-bold text-black">New Arrivals</h2>
//         {!showAll && (
//           <button
//             onClick={handleViewAllClick}
//             className="text-sm text-gray-600 hover:text-black flex items-center gap-2"
//           >
//             View All <span className="transform rotate-90">⌵</span>
//           </button>
//         )}
//       </div>

//       {/* Product Grid */}
//       <div className={`grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center`}>
//         {visibleProducts.map((product, index) => (
//           <motion.div
//             key={product.id}
//             className="group w-full max-w-[280px] mx-auto bg-white border border-violet-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition relative"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             viewport={{ once: false, amount: 0.2 }}
//           >
//             <div className="relative w-full h-64">
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="w-full h-full object-cover group-hover:brightness-50"
//               />
//               <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
//                 <button className="bg-[#393185] w-9 h-9 flex items-center justify-center rounded-full">
//                   <FiHeart className="text-white w-4 h-4" />
//                 </button>
//                 <button className="bg-[#393185] w-9 h-9 flex items-center justify-center rounded-full">
//                   <FiShoppingCart className="text-white w-4 h-4" />
//                 </button>
//               </div>
//             </div>

//             <div className="p-4">
//               <h3 className="text-sm font-medium text-gray-800">{product.name}</h3>
//               <p className="text-sm text-[#393185] font-semibold mt-1">{product.price}</p>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* View Less Button */}
//       {showAll && (
//         <div className="mt-6 flex justify-center">
//           <button
//             onClick={handleViewLessClick}
//             className="text-sm text-gray-600 hover:text-black flex items-center gap-2"
//           >
//             View Less <span className="transform rotate-270">⌵</span>
//           </button>
//         </div>
//       )}
//     </section>
//   );
// };

// export default NewArrival;

import React, { useState } from "react";
import { motion } from "framer-motion";
import productImage from "../assets/arrival.png";
import { FiShoppingCart, FiHeart } from "react-icons/fi";

const products = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  name: `Multi-Surface Eco Cleaner ${i + 1}`,
  price: "$1,299.00",
  image: productImage,
}));

const NewArrival = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProducts = showAll ? products : products.slice(0, 4);

  return (
    <section className="bg-white py-12 px-4 sm:px-8 lg:px-16 xl:px-20 ">
      <div className="max-w-screen-2xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-black">New Arrivals</h2>
          {!showAll && (
            <button
              onClick={() => setShowAll(true)}
              className="text-sm text-gray-600 hover:text-black flex items-center gap-2"
            >
              View All <span className="transform rotate-90">⌵</span>
            </button>
          )}
        </div>

        {/* Product Grid */}
        <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
          {visibleProducts.map((product, index) => (
            <motion.div
              key={product.id}
              className="group bg-white border border-violet-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <div className="relative w-full h-64">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:brightness-50"
                />
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="bg-[#393185] w-9 h-9 flex items-center justify-center rounded-full">
                    <FiHeart className="text-white w-4 h-4" />
                  </button>
                  <button className="bg-[#393185] w-9 h-9 flex items-center justify-center rounded-full">
                    <FiShoppingCart className="text-white w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-800">{product.name}</h3>
                <p className="text-sm text-[#393185] font-semibold mt-1">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Less Button */}
        {showAll && (
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => setShowAll(false)}
              className="text-sm text-gray-600 hover:text-black flex items-center gap-2"
            >
              View Less <span className="transform rotate-270">⌵</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default NewArrival;
