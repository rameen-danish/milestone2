"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex items-center justify-between md:justify-center">
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="text-white hover:text-gray-300">
           Home
          </Link>
          <Link href="/About" className="text-white hover:text-gray-300">
           About
          </Link>
          <Link href="/Contact" className="text-white hover:text-gray-300">
           Contact
          </Link>
        </div>
        <button
          className="text-white md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2">
          <Link href="/" className="block text-white hover:text-gray-300">
            Home
          </Link>
          <Link href="/About" className="block text-white hover:text-gray-300">
            About
          </Link>
          <Link href="/Contact" className="block text-white hover:text-gray-300">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
