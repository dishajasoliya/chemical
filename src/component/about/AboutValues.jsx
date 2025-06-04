
// import React from "react";
// import ValueImage from '../../assets/val1.png';
// import valueImg2 from '../../assets/val2.png';
// import valueImg3 from '../../assets/val3.png';
// import valueImg4 from '../../assets/val4.png';
// import valueImg5 from '../../assets/val5.png';
// import valueImg6 from '../../assets/val6.png';

// const values = [
//   {
//     icon: ValueImage,
//     title: "Quality First",
//     description: "We are committed to delivering top-quality cleaning products that ensure safety, effectiveness, and satisfaction in every use.",
//     bg: "bg-blue-500",
//     text: "text-blue-700"
//   },
//   {
//     icon: valueImg2,
//     title: "Innovation",
//     description: "We constantly evolve and innovate our formulas and processes to provide cutting-edge solutions that meet changing customer needs.",
//     bg: "bg-rose-200",
//     text: "text-rose-500"
//   },
//   {
//     icon: valueImg3,
//     title: "Customer-Centricity",
//     description: "Our customers are at the heart of everything we do. We listen, respond, and strive to exceed their expectations with reliable products and support.",
//     bg: "bg-purple-400",
//     text: "text-purple-600"
//   },
//   {
//     icon: valueImg4,
//     title: "Sustainability",
//     description: "We believe in protecting the environment. Our practices and products are designed to minimize waste and promote eco-friendly cleaning.",
//     bg: "bg-green-400",
//     text: "text-green-600"
//   },
//   {
//     icon: valueImg5,
//     title: "Consistency",
//     description: "From the first drop to the last, our products reflect consistent performance and dependable results.",
//     bg: "bg-yellow-300",
//     text: "text-yellow-600"
//   },
//   {
//     icon: valueImg6,
//     title: "Growth & Excellence",
//     description: "We aim for continuous growth by setting high standards, embracing challenges, and pushing boundaries to achieve excellence.",
//     bg: "bg-orange-300",
//     text: "text-orange-600"
//   }
// ];

// const AboutValues = () => {
//   return (
//     <section className="bg-white px-4 md:px-12 py-12 lg:px-20">
//       <h2 className="text-2xl md:text-3xl font-semibold text-[#393185] mb-10">Our Core Values</h2>
//       <div className="grid gap-8">
//         {values.map((value, index) => (
//           <div key={index} className="flex items-start space-x-4">
//             <div className={`min-w-[60px] min-h-[60px] sm:w-[50px] sm:h-[50px] flex items-center justify-center rounded-full ${value.bg}`}>
//               <img src={value.icon} alt={value.title} className="w-8 h-8 sm:w-8 sm:h-8 object-contain" />
//             </div>
//             <div>
//               <h3 className={`font-semibold text-lg pt-1 ${value.text}`}>{value.title}</h3>
//               <p className="text-gray-700 mt-1 text-sm sm:text-base">{value.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default AboutValues;

import React from "react";
import { motion } from "framer-motion";
import ValueImage from '../../assets/val1.png';
import valueImg2 from '../../assets/val2.png';
import valueImg3 from '../../assets/val3.png';
import valueImg4 from '../../assets/val4.png';
import valueImg5 from '../../assets/val5.png';
import valueImg6 from '../../assets/val6.png';

const values = [
  {
    icon: ValueImage,
    title: "Quality First",
    description: "We are committed to delivering top-quality cleaning products that ensure safety, effectiveness, and satisfaction in every use.",
    bg: "bg-blue-500",
    text: "text-blue-700"
  },
  {
    icon: valueImg2,
    title: "Innovation",
    description: "We constantly evolve and innovate our formulas and processes to provide cutting-edge solutions that meet changing customer needs.",
    bg: "bg-rose-200",
    text: "text-rose-500"
  },
  {
    icon: valueImg3,
    title: "Customer-Centricity",
    description: "Our customers are at the heart of everything we do. We listen, respond, and strive to exceed their expectations with reliable products and support.",
    bg: "bg-purple-400",
    text: "text-purple-600"
  },
  {
    icon: valueImg4,
    title: "Sustainability",
    description: "We believe in protecting the environment. Our practices and products are designed to minimize waste and promote eco-friendly cleaning.",
    bg: "bg-green-400",
    text: "text-green-600"
  },
  {
    icon: valueImg5,
    title: "Consistency",
    description: "From the first drop to the last, our products reflect consistent performance and dependable results.",
    bg: "bg-yellow-300",
    text: "text-yellow-600"
  },
  {
    icon: valueImg6,
    title: "Growth & Excellence",
    description: "We aim for continuous growth by setting high standards, embracing challenges, and pushing boundaries to achieve excellence.",
    bg: "bg-orange-300",
    text: "text-orange-600"
  }
];

const AboutValues = () => {
  return (
    <section className="py-12 bg-white px-6 md:px-12 lg:px-20 ">
      <div className="max-w-[1440px] mx-auto">
        <motion.h2
          className="text-2xl md:text-3xl xl:text-4xl font-semibold text-[#393185] mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          Our Core Values
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-x-12 gap-y-12">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="flex items-start space-x-5"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
              viewport={{ once: false }}
            >
              <div className={`w-14 h-14 min-w-[56px] min-h-[56px] flex items-center justify-center rounded-full ${value.bg}`}>
                <img src={value.icon} alt={value.title} className="w-7 h-7 object-contain" />
              </div>
              <div>
                <h3 className={`font-semibold text-lg xl:text-xl 2xl:text-2xl ${value.text}`}>{value.title}</h3>
                <p className="text-gray-700 mt-1 text-sm sm:text-base xl:text-lg 2xl:text-xl leading-snug">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
