import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Status from './Status';

function Navbar({ mode, setmode }) {
  const [hidden1, sethidden1] = useState("hidden");

  const handleClick = () => {
    mode === "light" ? setmode("dark") : setmode("light");
  }

  return (
    <div>
      <div className='flex flex-col md:flex-row justify-between bg-purple-800 text-gray-200 items-center py-3 px-6'>
        {/* Logo and Title */}
        <div className='flex items-center mb-2 md:mb-0'>
          <Link to="/" className='text-gray-200 text-lg font-bold'>DSA Tracker</Link>
        </div>

        {/* Links */}
        <div className='flex flex-col md:flex-row md:space-x-4'>
          <Link to="https://www.audisankara.ac.in/has/pdf/DATA%20STRUCTURE.pdf" className='text-gray-200 text-base md:text-lg font-bold' target='_blank'>DSA Notes Pdf</Link>

        </div>
        <div className='flex flex-col md:flex-row md:space-x-4'>
          <Link to="/" className='text-gray-200 text-base md:text-lg font-bold'>DSA Tracker</Link>
        </div>

      </div>

      {/* Status Component */}
      <Status visi={hidden1} />
    </div>
  );
}

export default Navbar;
