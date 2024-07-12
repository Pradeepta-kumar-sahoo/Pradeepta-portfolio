import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to close mobile menu
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-sky-900 bg-opacity-50 backdrop-blur-lg sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-white text-2xl font-extrabold mr-4">pra_deep_ta</h1>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center">
            <button
              type="button"
              className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium sm:hidden"
              onClick={toggleMenu}
            >
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
            </button>
          </div>

          {/* Links */}
          <div className={`sm:flex sm:items-center ${isOpen ? 'block' : 'hidden'} absolute inset-x-0 top-16  sm:static  p-4 rounded-lg shadow-md`}>
            <ul className="flex flex-col sm:flex-row sm:space-x-4 sm:space-y-0">
              <li>
                <Link to="/" onClick={closeMenu} className="text-white hover:bg-sky-900 py-2 rounded-md text-sm font-medium block">// Home</Link>
              </li>
              <li>
                <Link to="/myexpertise" onClick={closeMenu} className="text-white hover:bg-sky-900 py-2 rounded-md text-sm font-medium block">// My Expertise</Link>
              </li>
              <li>
                <Link to="/contact" onClick={closeMenu} className="text-white hover:bg-sky-900 py-2 rounded-md text-sm font-medium block">// Contact</Link>
              </li>
              <li>
                <Link to="/myproject" onClick={closeMenu} className="text-white hover:bg-sky-900 py-2 rounded-md text-sm font-medium block">// Project</Link>
              </li>
              <li>
                <Link to="/myskill" onClick={closeMenu} className="text-white hover:bg-sky-900 py-2 rounded-md text-sm font-medium block">// Skill</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
