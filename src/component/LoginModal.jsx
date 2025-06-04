
import React, { useState, useEffect } from 'react';

const LoginModal = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5 * 60 * 1000); // 5 minutes in ms

    return () => clearTimeout(timer);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    alert(`Logging in with username: ${username}`);
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-80 p-6">
        <h2 className="text-2xl font-semibold mb-4 text-[#393185]">Login</h2>
        <form onSubmit={handleLogin}>
          <label className="block mb-2 text-gray-700">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full mb-4 px-3 py-2 border rounded focus:outline-none text-black focus:ring-2 focus:ring-[#393185]"
            required
          />
          <label className="block mb-2 text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-4 px-3 py-2 border rounded focus:outline-none text-black focus:ring-2 focus:ring-[#393185]"
            required
          />
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="bg-[#393185] text-white px-4 py-2 rounded hover:bg-[#2d276d]"
            >
              Login
            </button>
            <motion.button 
            animate={{}}
              type="button"
              onClick={() => setShowPopup(false)}
              className="text-gray-600 hover:text-gray-900"
            >
              Close
            </motion.button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;



