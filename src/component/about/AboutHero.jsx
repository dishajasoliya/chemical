
// import React from 'react';
// import PromoBanner from '../../assets/promobanner.png';

// const AboutHero = () => {
//   return (
//     <div className="w-full bg-gradient-to-r py-40 px-4 text-center relative overflow-hidden ">
//       <h1 className="text-4xl font-bold z-10 relative text-left pl-20 ">About US</h1>
//       <p className="mt-2 text-sm z-10 relative text-left pl-20">Home / About US</p>
//       <img
//         src={PromoBanner} // replace with actual path
//         alt="Background"
//         className="absolute top-0 left-0 w-full h-full object-cover opacity-20 rotate-[-180deg]"
        
//       />
//     </div>
//   );
// };

// export default AboutHero;
// import React from 'react';
// import PromoBanner from '../../assets/promobanner.png'; // Ensure this is the correct path

// const AboutHero = () => {
//   return (
//     <div className="relative w-full py-24 sm:py-32 px-4 overflow-hidden">
//       {/* Background Image */}
//       <img
//         src={PromoBanner}
//         alt="Background"
//         className="absolute inset-0 w-full h-full object-cover opacity-20 -z-10 rotate-[-180deg]"
//       />

//       {/* Content */}
//       <div className="max-w-7xl mx-auto text-left px-4 sm:px-6 lg:px-8">
//         <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">About Us</h1>
//         <p className="mt-2 text-base sm:text-lg text-white">Home / About Us</p>
//       </div>
//     </div>
//   );
// };

// export default AboutHero;

import React from 'react';
import { motion } from 'framer-motion';
import PromoBanner from '../../assets/promobanner.png';

const AboutHero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: false }}
      className="relative w-full py-24 sm:py-32  px-4 overflow-hidden"
    >
      {/* Background Image */}
      <img
        src={PromoBanner}
        alt="Background"
        className="absolute inset-0 w-full h-full  object-cover  opacity-20 -z-10 rotate-[-180deg]"
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto text-left px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          About Us
        </h1>
        <p className="mt-2 text-base sm:text-lg text-white">Home / About Us</p>
      </div>
    </motion.div>
  );
};

export default AboutHero;
