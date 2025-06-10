import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-primary-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-white font-bold text-xl">
                Prompt Engineering
              </Link>
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <Link
                to="/"
                className="text-white hover:text-primary-200 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                to="/preface"
                className="text-white hover:text-primary-200 px-3 py-2 rounded-md text-sm font-medium"
              >
                Preface
              </Link>
              <Link
                to="/index-cards"
                className="text-white hover:text-primary-200 px-3 py-2 rounded-md text-sm font-medium"
              >
                AI Basics
              </Link>
              <Link
                to="/chapter1"
                className="text-white hover:text-primary-200 px-3 py-2 rounded-md text-sm font-medium"
              >
                Chapter 1
              </Link>
              <Link
                to="/examples"
                className="text-white hover:text-primary-200 px-3 py-2 rounded-md text-sm font-medium"
              >
                Examples
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <span className="text-white text-sm">
              With Leonardo, your AI guide
            </span>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-primary-200 hover:bg-primary-600 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className="md:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className="text-white hover:text-primary-200 block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </Link>
          <Link
            to="/preface"
            className="text-white hover:text-primary-200 block px-3 py-2 rounded-md text-base font-medium"
          >
            Preface
          </Link>
          <Link
            to="/index-cards"
            className="text-white hover:text-primary-200 block px-3 py-2 rounded-md text-base font-medium"
          >
            AI Basics
          </Link>
          <Link
            to="/chapter1"
            className="text-white hover:text-primary-200 block px-3 py-2 rounded-md text-base font-medium"
          >
            Chapter 1
          </Link>
          <Link
            to="/examples"
            className="text-white hover:text-primary-200 block px-3 py-2 rounded-md text-base font-medium"
          >
            Examples
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
