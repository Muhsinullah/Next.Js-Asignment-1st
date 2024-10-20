import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4">
      <h1 className="text-5xl font-bold mb-8">
        Welcome to My Assignment Project
      </h1>
      <p className="max-w-2xl text-center text-lg leading-relaxed mb-6">
        This website is part of my assignment work, showcasing my skills in
        building responsive and functional web applications. The project
        demonstrates various technologies and best practices that I&apos;ve
        learned. Thank you for visiting and exploring my work!
      </p>
      <div className="flex space-x-4">
        <a
          href="/about"
          className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-6 rounded"
        >
          Learn More About Us
        </a>
        <a
          href="/contact"
          className="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-6 rounded"
        >
          Get In Touch
        </a>
      </div>
    </div>
  );
};

export default Home;
