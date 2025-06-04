// import React from 'react'
// import cleaningImage from "../../assets/cleaning.png";


// const AboutSection = () => {
//   return (
//     <div className="w-full max-w-8xl grid md:grid-cols-2 gap-8 px-4 py-10 mx-auto items-center bg-white lg:pl-20 lg:pr-20 md:pl-5 md:pr-5">
//       <div>
//         <h2 className="text-[#393185] text-sm font-semibold mb-2">About Hariom Chemical</h2>
//         <h3 className="text-3xl font-bold text-[#393185] mb-4 leading-snug">
//           Crafting Cleanliness.<br />Delivering Trust
//         </h3>
//         <p className="text-gray-700 mb-4 text-[16px]">
//         Hariom Chemicals is a renowned manufacturer of premium household cleaning products and concentrates, proudly based in Vadodara, Gujarat. Since our inception, we have remained dedicated to creating high-performance, cost-effective, and environmentally responsible cleaning solutions that cater to homes, businesses, and institutions alike.
//         </p>
//         <p className="text-gray-700 text-[16px]">
//       At Hariom Chemicals, our mission is simple – to deliver exceptional cleanliness with every drop. We understand the vital role hygiene plays in daily life, which is why each of our products is formulated with precision, quality ingredients, and a deep understanding of customer needs. Whether it's a sparkling kitchen, a spotless bathroom, or gleaming floors, our products help keep spaces fresh, clean, and inviting.
//         </p>
//       </div>
//       <div>
//         <img src={cleaningImage} alt="Cleaning Products" className="rounded-xl shadow-lg w-full h-130 " />
//       </div>
//     </div>
  
//   )
// }

// export default AboutSection


// import React from 'react';
// import { motion } from 'framer-motion';
// import cleaningImage from "../../assets/cleaning.png";

// const AboutSection = () => {
//   return (
//     <section className="w-full bg-white py-12 px-4 sm:px-8 lg:px-16 2xl:px-28 overflow-x-hidden">
//       <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
//         {/* Animated Text Section */}
//         <motion.div
//           className="flex-1"
//           initial={{ opacity: 0, x: -30 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, ease: 'easeOut' }}
//           viewport={{ once: false }}
//         >
//           <h2 className="text-[#393185] text-sm font-semibold mb-2">
//             About Hariom Chemical
//           </h2>
//           <h3 className="text-3xl lg:text-4xl font-bold text-[#393185] mb-4 leading-snug">
//             Crafting Cleanliness.<br />Delivering Trust
//           </h3>
//           <p className="text-gray-700 mb-4 text-base lg:text-lg">
//             Hariom Chemicals is a renowned manufacturer of premium household cleaning products and concentrates, proudly based in Vadodara, Gujarat. Since our inception, we have remained dedicated to creating high-performance, cost-effective, and environmentally responsible cleaning solutions that cater to homes, businesses, and institutions alike.
//           </p>
//           <p className="text-gray-700 text-base lg:text-lg">
//             At Hariom Chemicals, our mission is simple – to deliver exceptional cleanliness with every drop. We understand the vital role hygiene plays in daily life, which is why each of our products is formulated with precision, quality ingredients, and a deep understanding of customer needs. Whether it's a sparkling kitchen, a spotless bathroom, or gleaming floors, our products help keep spaces fresh, clean, and inviting.
//           </p>
//         </motion.div>

       
//         <motion.div
//           className="flex-1"
//           initial={{ opacity: 0, x: 30 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
//           viewport={{ once: false }}
//         >
//           <img
//             src={cleaningImage}
//             alt="Cleaning Products"
//             className="rounded-xl shadow-lg w-full h-auto object-cover max-h-[500px]"
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;

import React from 'react';
import { motion } from 'framer-motion';
import cleaningImage from "../../assets/cleaning.png";

const AboutSection = () => {
  return (
    // w-full bg-white py-12 px-4 sm:px-8 lg:px-16 2xl:px-28 overflow-x-hidden
    <section className="py-12 bg-white px-6 md:px-12 lg:px-20 ">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col md:flex-row items-center gap-12">
        
      
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 className="text-[#393185] text-sm lg:text-base font-semibold mb-2">
            About Hariom Chemical
          </h2>
          <h3 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold text-[#393185] mb-4 leading-snug">
            Crafting Cleanliness.<br />Delivering Trust
          </h3>
          <p className="text-gray-700 mb-4 text-base lg:text-lg 2xl:text-xl">
            Hariom Chemicals is a renowned manufacturer of premium household cleaning products and concentrates, proudly based in Vadodara, Gujarat. Since our inception, we have remained dedicated to creating high-performance, cost-effective, and environmentally responsible cleaning solutions that cater to homes, businesses, and institutions alike.
          </p>
          <p className="text-gray-700 text-base lg:text-lg 2xl:text-xl">
            At Hariom Chemicals, our mission is simple – to deliver exceptional cleanliness with every drop. We understand the vital role hygiene plays in daily life, which is why each of our products is formulated with precision, quality ingredients, and a deep understanding of customer needs. Whether it's a sparkling kitchen, a spotless bathroom, or gleaming floors, our products help keep spaces fresh, clean, and inviting.
          </p>
        </motion.div>

        {/* Animated Image Section */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay:0.2 }}
          viewport={{ once: false }}
        >
          <img
            src={cleaningImage}
            alt="Cleaning Products"
            className="rounded-xl shadow-lg w-full h-auto object-cover max-h-[500px] 2xl:max-h-[500px]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
