// pages/about.js
import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <h1 className="text-4xl font-bold text-center sm:text-5xl lg:text-6xl">About Us</h1>
      <p className="mt-4 text-lg text-center sm:text-xl lg:text-2xl max-w-3xl">
        We are a dynamic team committed to providing exceptional services and solutions. Our goal is to exceed expectations and deliver value in every project we undertake.
      </p>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p className="mt-2 text-gray-600">
            To innovate and create solutions that empower businesses and individuals to achieve their goals.
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold">Our Vision</h2>
          <p className="mt-2 text-gray-600">
            To be the leading provider of transformative solutions that make a meaningful impact on the world.
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold">Our Values</h2>
          <p className="mt-2 text-gray-600">
            Integrity, innovation, and excellence are at the core of everything we do.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
