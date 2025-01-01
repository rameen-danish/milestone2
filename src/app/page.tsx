import React from 'react';
const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white p-6">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center">
        Welcome to Rameen Website
      </h1>
      <p className="mt-4 text-lg sm:text-xl text-center max-w-3xl">
        Explore our responsive web application built with Next.js and styled with Tailwind CSS.
      </p>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">Feature 1</h2>
          <p className="mt-2 text-white">
            Discover amazing functionalities tailored for your needs.
          </p>
        </div>
        <div className="p-6 bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">Feature 2</h2>
          <p className="mt-2 text-white">
            Experience seamless integration and responsive design.
          </p>
        </div>
        <div className="p-6 bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">Feature 3</h2>
          <p className="mt-2 text-white">
            Stay updated with the latest features and trends.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
