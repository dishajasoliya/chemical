

import React from 'react';
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { motion } from 'framer-motion';

const ContactUs = () => {
  return (
    
    // bg-white py-10 px-4 sm:px-6 md:px-10 lg:px-20 pt-10 relative
     <div className=" bg-white min-h-[40vw] px-4 py-8 md:px-8 lg:px-16 ">
     {/* <div className="bg-white pt-10 px-4 sm:px-6 md:px-10 lg:px-20 max-w-[100vw] overflow-x-hidden">  */}

      <motion.h2
        className="text-2xl font-bold text-black"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Contact Us
      </motion.h2>

      <motion.div
        className="text-sm text-gray-600 mt-1 mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
      >
        Home / <span className="text-black">Contact Us</span>
      </motion.div>

      <motion.p
        className="text-gray-600 mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        viewport={{ once: true }}
      >
        Get in touch with our team for inquiries about our products and services.
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact Form */}
        <motion.form
          className="space-y-5 w-full"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <label className="block text-sm font-semibold text-black mb-1">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full h-13 border border-gray-300 bg-white rounded-md px-4 py-3 text-sm text-gray-800 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-black mb-1">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full h-13 border border-gray-300 bg-white rounded-md px-4 py-3 text-sm text-gray-800 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-black mb-1">Message</label>
            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full h-40 border border-gray-300 bg-white rounded-md px-4 py-3 text-sm text-gray-800 focus:outline-none resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#393185] hover:bg-[#2f286e] text-white py-3 rounded-md text-sm transition"
          >
            Send Message
          </button>
        </motion.form>

        {/* Contact Info and Map */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-black mb-4">Get in touch</h3>

          {/* Icons Row */}
          <div className="flex flex-wrap gap-4 mb-6">
            {[<FiPhone />, <FiMail />, <FiMapPin />].map((Icon, idx) => (
              <motion.div
                key={idx}
                className="bg-[#393185] text-white rounded-full p-3"
                initial={{ scale: 0.6, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6 + idx * 0.2, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <Icon.type className="w-5 h-5" />
              </motion.div>
            ))}
          </div>

     
          <motion.div
            className="w-full h-[300px] md:h-[350px] lg:h-[380px] border border-gray-300 rounded-md overflow-hidden shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.7 }}
            viewport={{ once: false }}
          >
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.911783785219!2d72.86264557529218!3d21.19235738049688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f1c6764cfc5%3A0x91ed4701b565640!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1716191200000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;
