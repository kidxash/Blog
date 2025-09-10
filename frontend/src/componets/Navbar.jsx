import { Link } from "react-router-dom";
import React, { useEffect } from "react";

function Navbar() {
  // Remove body margin when Navbar mounts
  useEffect(() => {
    document.body.style.margin = "0";
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-yellow-600 to-orange-900 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-white text-2xl font-bold hover:text-yellow-200 transition-colors duration-200">
              Note-taker
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link 
                to="/" 
                className="text-white hover:bg-orange-200 hover:text-black px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 transform hover:scale-105"
              >
                Home
              </Link>
              <Link 
                to="/create" 
                className="text-white hover:bg-orange-200 hover:text-black px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 transform hover:scale-105"
              >
                Create
              </Link>
              
            </div>
          </div>

          <div className="md:hidden">
            <button className="text-white hover:text-blue-200 focus:outline-none focus:text-blue-200">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-700">
          <Link 
            to="/" 
            className="text-white hover:bg-blue-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </Link>
          <Link 
            to="/create" 
            className="text-white hover:bg-purple-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            Create
          </Link>
          <Link 
            to="/Blog" 
            className="text-white hover:bg-indigo-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            Blog
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;