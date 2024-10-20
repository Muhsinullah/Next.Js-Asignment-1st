"use client";

import React, { useEffect, useState } from "react";

const Team = () => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // two seconds bad error thorough karega (assighment me tha error islie)
    const timer = setTimeout(() => {
      setHasError(true); // Set error state to true after 2 seconds
    }, 2000); // 2000 = 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (hasError) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-red-100 text-red-700 px-8">
        <h1 className="text-5xl font-bold mb-4">Error Occurred!</h1>
        <p className="text-lg mb-6">
          <b>Oh Wait! There&apos;s No One Here Yet</b>
        </p>
        <button
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300"
          onClick={() => setHasError(false)}
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div
      id="about-pg"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-8"
    >
      <h1 className="text-4xl font-bold mb-8">Meet MY Awesome Team!</h1>
      <p className="text-lg mb-4 mx-20">
        As a dedicated student, I&apos;m still in the &lsquo;solo player&lsquo;
        phase, hustling through web development. But don&apos;t worry, <br /> one day
        this page will be filled with brilliant minds! Until then, it&apos;s
        just me, my code, and my dream team (in progress)!
      </p>
      <div className="mt-8">
        <a
          href="/"
          className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-6 rounded"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default Team;
