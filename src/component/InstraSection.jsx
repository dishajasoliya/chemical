
// import React from 'react';
// import instraImg from '../assets/instra.png';
// import { FaInstagram } from 'react-icons/fa';
// import { motion } from 'framer-motion';

// const InstraSection = () => {
//   const handleViewInstagramClick = () => {
//     window.open('https://www.instagram.com/hariomchemical/', '_blank');
//   };

//   return (
//     <section className="py-12 bg-white text-center px-6 md:px-12 lg:px-20">
//       <h2 className="text-2xl font-semibold mb-2 text-black">Follow Us on Instagram</h2>
//       <h4 className="text-[#6B6B6B] font-semibold mb-6">@hariomchemical</h4>

   
//       <div className="flex flex-wrap justify-center gap-1">
//         {[...Array(6)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="relative w-48 h-48  overflow-hidden group rounded-md"
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5, delay: i * 0.1 }}
//             viewport={{ once: false, amount: 0.2 }}
//             whileTap={{ scale: 0.98, boxShadow: "0px 2px 8px rgba(0, 0,0, 0.1)" }}
//           >
//             <img
//               src={instraImg}
//               alt="Instagram"
//               className="w-48 h-48 object-cover group-hover:brightness-50 transition duration-300"
//             />
//             <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
//               <FaInstagram className="text-white text-4xl" />
//             </div>
//           </motion.div>
//         ))}
//       </div>

    
//       <motion.button
//         onClick={handleViewInstagramClick}
//         className="mt-8 bg-[#393185] text-white px-6 py-2 rounded hover:bg-[#2e2d73] transition duration-300"
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.6, duration: 0.6 }}
//         viewport={{ once: false , amount:0.2 }}
//       >
//        View Instagram 

//       </motion.button>
//     </section>
//   );
// };

// export default InstraSection;
  

import React from 'react';
import instraImg from '../assets/instra.png';
import { FaInstagram } from 'react-icons/fa';
import { motion, scale } from 'framer-motion';

const InstraSection = () => {
  const handleViewInstagramClick = () => {
    window.open('https://www.instagram.com/hariomchemical/', '_blank');
  };

  return (
    <section className="py-12 bg-white text-center px-6 md:px-12 lg:px-20 xl:px-20">
      <h2 className="text-2xl font-semibold mb-2 text-black">Follow Us on Instagram</h2>
      <h4 className="text-[#6B6B6B] font-semibold mb-6">@hariomchemical</h4>

      {/* 3D Grid Section */}
      <div className="flex flex-wrap justify-center gap-1  perspective">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="relative w-48 h-48 overflow-hidden group rounded-lg bg-white shadow-md"
            initial={{ opacity: 0, rotateY: -90 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: i * 0.15, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
            style={{ transformStyle: 'preserve-3d' }}
            whileHover={{
             scale:0.9,
              // rotateY: 10,
              // rotateX: -10,
              transition: { type: 'spring', stiffness: 200, damping: 10 },
            }}
          >
            <img
              src={instraImg}
              alt="Instagram"
              className="w-48 h-48 object-cover  group-hover:brightness-50 transition duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <FaInstagram className="text-white text-4xl" />
            </div>
          </motion.div>
        ))}
      </div>

     
      <motion.button
        onClick={handleViewInstagramClick}
        className="mt-8 bg-[#393185] text-white px-6 py-2 rounded hover:bg-[#2e2d73] transition duration-300"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        viewport={{ once: false, amount: 0.2 }}
        whileHover={{ scale: 1.05, rotateZ: 1 }}
        whileTap={{ scale: 0.95 }}
      >
        View Instagram
      </motion.button>
    </section>
  );
};

export default InstraSection;
