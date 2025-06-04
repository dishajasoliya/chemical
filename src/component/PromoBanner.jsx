// import React from "react";
// import PromoImage from "../assets/promobanner.png"; 

// const PromoBanner = () => {
//   return (
//     <section className="w-full bg-white py-16 sm:py-20 md:py-10 lg:py-10">
//       <div className="mx-auto max-w-8xl px-6 md:px-10 lg:px-20">
   
//         <div
//           className="relative text-white h-100 rounded-3xl flex flex-col lg:flex-row items-center justify-between overflow-hidden p-6 lg:p-10"
//           style={{

//             backgroundImage: `linear-gradient(to right, rgba(26, 32, 44, 0.7), rgba(49, 130, 206, 0.7)), url(${PromoImage})`,
//             backgroundSize: 'cover', 
//             backgroundPosition: 'right center', 
//             backgroundRepeat: 'no-repeat',
          
//           }}
//         >
//           {/* Text Section */}
//           <div className="lg:w-1/2 text-center lg:text-left z-10"> {/* z-10 ensures text is above background */}
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">Spring Cleaning Sale!</h2>
//             <p className="mb-6 text-sm md:text-base">
//               Get 20% off on all cleaning bundles. Limited time offer.
//             </p>
//             <button className="bg-white text-black px-6 py-2 font-medium hover:bg-gray-200 transition rounded-md">
//               Shop Deals
//             </button>
//           </div>

         
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PromoBanner;

// import React from "react";
// import PromoImage from "../assets/promobanner.png"; 

// const PromoBanner = () => {
//   return (
//     <section className="w-full bg-white py-20 sm:py-20 md:py-20 lg:py-10"> 
//       <div className="mx-auto max-w-8xl px-6 md:px-10 lg:px-20"> 
       
//         <div
//           className="relative text-white rounded-3xl flex flex-col lg:flex-row items-center justify-between overflow-hidden p-6 lg:p-10 h-64 sm:h-80 md:h-96 lg:h-[450px]" // Added responsive height classes
//           style={{
          
//             backgroundImage: `linear-gradient(to right, rgba(26, 32, 44, 0.7), rgba(49, 130, 206, 0.7)), url(${PromoImage})`,
//             backgroundSize: 'cover', 
//             backgroundPosition: 'right center', 
//             backgroundRepeat: 'no-repeat', 
//           }}
//         >
//           {/* Text Section */}
//           <div className="lg:w-1/2 text-center lg:text-left z-10"> 
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">Spring Cleaning Sale!</h2>
//             <p className="mb-6 text-sm md:text-base">
//               Get 20% off on all cleaning bundles. Limited time offer.
//             </p>
//             <button className="bg-white text-black px-6 py-2 font-medium hover:bg-gray-200 transition rounded-md">
//               Shop Deals
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PromoBanner;


// import React from "react";
// import { motion } from "framer-motion"; 
// import PromoImage from "../assets/promobanner.png";

// const PromoBanner = () => {
//   return (
//     <section className="w-full bg-white py-20 sm:py-20 md:py-20 lg:py-10">
//       <div className="mx-auto max-w-8xl px-6 md:px-10 lg:px-20">
//         <motion.div
//           className="relative text-white rounded-3xl flex flex-col lg:flex-row items-center justify-between overflow-hidden p-6 lg:p-10 h-64 sm:h-80 md:h-96 lg:h-[450px]"
//           style={{
//             backgroundImage: `linear-gradient(to right, rgba(26, 32, 44, 0.7), rgba(49, 130, 206, 0.7)), url(${PromoImage})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'right center',
//             backgroundRepeat: 'no-repeat',
//           }}
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           viewport={{ once: false, amount: 0.3 }} // 🔁 Animates every time it enters viewport
//         >
//           {/* Text Section */}
//           <div className="lg:w-1/2 text-center lg:text-left z-10">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">Spring Cleaning Sale!</h2>
//             <p className="mb-6 text-sm md:text-base">
//               Get 20% off on all cleaning bundles. Limited time offer.
//             </p>
//             <button className="bg-white text-black px-6 py-2 font-medium hover:bg-gray-200 transition rounded-md">
//               Shop Deals
//             </button>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default PromoBanner;
import React from "react";
import { motion } from "framer-motion";
import PromoImage from "../assets/promobanner.png";

const PromoBanner = () => {
  return (
    <section className="w-full bg-white py-10 md:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 2xl:px-20">
        <motion.div
          className="relative text-white rounded-3xl flex flex-col lg:flex-row items-center justify-between overflow-hidden p-6 lg:p-10 h-64 sm:h-80 md:h-96 lg:h-[450px]"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(26, 32, 44, 0.7), rgba(49, 130, 206, 0.7)), url(${PromoImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Text Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Spring Cleaning Sale!
            </h2>
            <p className="text-sm sm:text-base lg:text-lg mb-6">
              Get 20% off on all cleaning bundles. Limited time offer.
            </p>
            <button className="bg-white text-black px-6 py-2 font-medium hover:bg-gray-200 transition rounded-md">
              Shop Deals
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PromoBanner;
