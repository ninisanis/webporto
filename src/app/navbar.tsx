import React from "react";
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-white p-4 shadow-md rounded-full mt-4">
      <div className="flex space-x-20">
        <Link href="/" className="text-gray-900 hover:text-blue-500">Home</Link>
        <Link href="/photos" className="text-gray-900 hover:text-blue-500">Photos</Link>
        <Link href="/about" className="text-gray-900 hover:text-blue-500">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;