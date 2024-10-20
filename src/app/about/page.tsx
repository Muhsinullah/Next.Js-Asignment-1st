// import React from "react";

// const About = () => {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4">
//       <h1 className="text-4xl font-bold mb-8">About Us</h1>
//       <p className="max-w-3xl text-center text-lg leading-relaxed mb-8">
//         Welcome to our website! We are passionate developers dedicated to
//         creating high-quality web applications. Our mission is to craft visually
//         stunning and highly functional websites that provide an exceptional user
//         experience.
//       </p>
//       <p className="max-w-3xl text-center text-lg leading-relaxed mb-8">
//         With a strong background in modern web development technologies like
//         Next.js, TypeScript, and Tailwind CSS, we aim to deliver the best
//         possible solutions tailored to our clients&apos; needs. Our team is committed
//         to pushing the boundaries of innovation in the web development space,
//         and we take pride in building projects that are both technically sound
//         and creatively inspiring.
//       </p>
//       <p className="max-w-3xl text-center text-lg leading-relaxed">
//         Whether you&apos;re here to learn more about us, explore our projects,
//         or get in touch, we&apos;re thrilled to have you on board. Thank you for
//         visiting!
//       </p>
//     </div>
//   );
// };

// export default About;



import React from 'react';

const About = () => {
  return (
    <div id='about-pg' className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4">
      <h1 className="text-5xl font-bold mb-8">About Us</h1>
      <div className="max-w-2xl text-center">
        <h2 className="text-3xl font-semibold mb-4">Meet Muhsin Ullah</h2>
        <p className="text-lg mb-4">
          My name is Muhsin Ullah, and I am a student at GIAIC with ID No. 00363770. 
          I have learned HTML, CSS, Tailwid CSS, Bootstrap, JavaScript, and TypeScript, and I am currently focusing on mastering Next Js.
        </p>
        <p className="text-lg mb-4">
          This website is part of my assignment work, where I aim to showcase my skills and creativity 
          in developing modern web applications. I am passionate about technology and enjoy learning 
          new frameworks and libraries that enhance my development abilities.
        </p>
        <p className="text-lg">
          Thank you for visiting my project! I hope you find it informative and engaging.
        </p>
      </div>
      <div className="mt-8">
        <a href="/" className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-6 rounded">
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default About;
