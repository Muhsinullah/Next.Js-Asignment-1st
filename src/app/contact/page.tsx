
// import React from 'react';

// const Contact = () => {
//   return (
//     <div id='contact' className=" min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
//       <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
//       <form className="w-full max-w-lg bg-gray-800 p-8 rounded-lg shadow-md">
//         <div className="mb-4">
//           <label className="block text-sm font-bold mb-2" htmlFor="name">
//             Name
//           </label>
//           <input
//             className="w-full px-3 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
//             type="text"
//             id="name"
//             placeholder="Enter your name"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm font-bold mb-2" htmlFor="email">
//             Email
//           </label>
//           <input
//             className="w-full px-3 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
//             type="email"
//             id="email"
//             placeholder="Enter your email"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm font-bold mb-2" htmlFor="message">
//             Message
//           </label>
//           <textarea
//             className="w-full px-3 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
//             id="message"
//             placeholder="Write your message"
//             rows={4}
//             required
//           />
//         </div>

//         <button
//           className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
//           type="submit"
//         >
//           Send Message
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Contact;





"use client";

import React, { useEffect, useState } from 'react';

const Contact = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (e.g., fetching data)
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds
    }, 2000); // 2000 milliseconds = 2 seconds

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        {/* Tailwind CSS spinner */}
        <div className="w-16 h-16 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div id='contact' className=" min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <form className="w-full max-w-lg bg-gray-800 p-8 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="w-full px-3 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            type="text"
            id="name"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="w-full px-3 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            type="email"
            id="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full px-3 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            id="message"
            placeholder="Write your message"
            rows={4}
            required
          />
        </div>

        <button
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
