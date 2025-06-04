// import React from 'react';
// import { FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa';
// import logo from '../assets/logo.png'; 

// const Footer = () => {
//   return (
//     <footer className="bg-[#393185] text-white py-10 px-4 sm:px-8 lg:px-20">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

//         {/* Logo & Description */}
//         <div>
//           <img src={logo} alt="Hariom Logo" className="w-20 mb-4" />
//           <p className="text-sm">
//             Premium cleaning solutions for every home and business. Eco-friendly and effective.
//           </p>
//           <div className="flex gap-4 mt-4">
//             <a href="#"><FaInstagram className="text-white text-2xl" /></a>
//             <a href="#"><FaYoutube className="text-white text-2xl" /></a>
//             <a href="#"><FaFacebook className="text-white text-2xl" /></a>
//           </div>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
//           <ul className="space-y-2 text-white text-sm">
//             <li><a href="/Home">Home</a></li>
//             <li><a href="/About">About</a></li>
//             <li><a href="/Product">All Product</a></li>
//             <li><a href="#">Combos</a></li>
//             <li><a href="/Contact">Contact</a></li>
//           </ul>
//         </div>

//         {/* Customer Service */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
//           <ul className="space-y-2 text-sm text-white">
//             <li><a href="#">Track Order</a></li>
//             <li><a href="#">Return & Exchange</a></li>
//             <li><a href="#">Shipping Policy</a></li>
//             <li><a href="#">FAQs</a></li>
//             <li><a href="#">Privacy Policy</a></li>
//           </ul>
//         </div>

//         {/* Contact Info */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
//           <p className="text-sm">123, Gold District<br />New York, NY 10001</p>
//           <p className="mt-2 text-sm">Email: info@adminadmn12.com</p>
//           <p className="text-sm">Phone: +1 (555) 123-4567</p>
//         </div>
//       </div>

//       {/* Bottom Copyright */}
//       <div className="mt-10 border-t border-white/30 pt-4 text-center text-sm">
//         © 2025 HARIOM CHEMCAL. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React, { useEffect, useState } from 'react';
import { FaInstagram, FaYoutube, FaFacebook, FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.pageYOffset > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <footer className="bg-[#393185] text-white py-10 px-4 sm:px-8 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            <Link to="/Home">
              {logo && (
                <img src={logo} alt="Hariom Logo" className="w-20 mb-4" />
              )}
            </Link>
            <p className="text-sm">
              Premium cleaning solutions for every home and business. Eco-friendly and effective.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="https://www.instagram.com/hariomchemical/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" onClick={scrollToTop}>
                <FaInstagram className="text-white text-2xl hover:text-gray-300 transition-colors duration-200" />
              </a>
              <a href="https://www.youtube.com/channel/your-youtube-channel-id" target="_blank" rel="noopener noreferrer" aria-label="YouTube" onClick={scrollToTop}>
                <FaYoutube className="text-white text-2xl hover:text-gray-300 transition-colors duration-200" />
              </a>
              <a href="https://www.facebook.com/your-facebook-page" target="_blank" rel="noopener noreferrer" aria-label="Facebook" onClick={scrollToTop}>
                <FaFacebook className="text-white text-2xl hover:text-gray-300 transition-colors duration-200" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-white text-sm">
              <li><Link to="/Home" className="hover:underline" onClick={scrollToTop}>Home</Link></li>
              <li><Link to="/About" className="hover:underline" onClick={scrollToTop}>About</Link></li>
              <li><Link to="/Product" className="hover:underline" onClick={scrollToTop}>All Product</Link></li>
              <li><Link to="/Product" className="hover:underline" onClick={scrollToTop}>Combos</Link></li>
              <li><Link to="/Contact" className="hover:underline" onClick={scrollToTop}>Contact</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm text-white">
              <li><Link to="/TrackOrder" className="hover:underline" onClick={scrollToTop}>Track Order</Link></li>
              <li><Link to="/Returns" className="hover:underline" onClick={scrollToTop}>Return & Exchange</Link></li>
              <li><Link to="/ShippingPolicy" className="hover:underline" onClick={scrollToTop}>Shipping Policy</Link></li>
              <li><Link to="/FAQs" className="hover:underline" onClick={scrollToTop}>FAQs</Link></li>
              <li><Link to="/PrivacyPolicy" className="hover:underline" onClick={scrollToTop}>Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm leading-relaxed">
              123, Gold District<br />
              New York, NY 10001
            </p>
            <p className="mt-2 text-sm">Email: info@adminadmn12.com</p>
            <p className="text-sm">Phone: +1 (555) 123-4567</p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/30 pt-4 text-center text-sm">
          © 2025 HARIOM CHEMICAL. All rights reserved.
        </div>
      </footer>

      {/* Floating Scroll to Top Button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 z-50 p-3 rounded-full bg-[#393185] text-white shadow-lg hover:bg-[#2d276a] transition duration-300"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

export default Footer;
