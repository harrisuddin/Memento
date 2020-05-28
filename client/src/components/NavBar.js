import React, { useState } from "react";

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);
  
  return (
    <nav className="sm:flex sm:justify-between sm:items-center sm:px-8 sm:py-3">
      <div className="flex items-center justify-between px-4 py-3 sm:p-0">
        <div>
          {/* <img className="h-8" src="/img/logo-inverted.svg" alt="Workcation"/> */}
          <h1 className="text-brandBlue-A font-bold hover:text-brandBlue-B">Memento</h1>
        </div>
        <div className="sm:hidden">
          <button
            onClick={() => setOpen(!isOpen)}
            type="button"
            className="block text-gray-900 hover:text-gray-600 focus:text-grey-600 focus:outline-none"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {/* TODO: FIX BELOW TURN INTO ONE STATEMENT */}
           
              {isOpen && (
                <path
                  fill-rule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              )}
              {!isOpen && (
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {
        <nav className={isOpen ? 'block px-2 pt-2 pb-4 sm:flex sm:p-0' : 'hidden px-2 pt-2 pb-4 sm:flex sm:p-0'}>
          <a
            href="#"
            className="block px-2 py-1 text-gray-500 font-bold rounded hover:text-brandBlue-B"
          >
            Features
          </a>
          <a
            href="#"
            className="mt-1 block px-2 py-1 text-gray-500 font-bold rounded hover:text-brandBlue-B sm:mt-0 sm:ml-2"
          >
            Something
          </a>
          <a
            href="#"
            className="mt-1 md:mr-16 block px-2 py-1 text-gray-500 font-bold rounded hover:text-brandBlue-B sm:mt-0 sm:ml-2"
          >
            About Us
          </a>

          <a
            href="/"
            className="mt-1 block text-brandBlue-A hover:text-brandBlue-B font-bold px-2 py-1 sm:mt-0 sm:ml-2"
          >
            Log in
          </a>

          <a
            href="/"
            className="bg-white mt-1 hover:text-brandBlue-B hover:border-brandBlue-B inline-block border-brandBlue-A border-2 border-solid text-brandBlue-A font-bold px-2 py-1 rounded-full sm:mt-0 sm:ml-2"
          >
            Sign Up
          </a>

          {/* <p className="text-gray"> | </p> */}

          {/* <a
            href="/"
            className="bg-white mt-1 block text-gray-500 font-bold py-1 px-3 sm:ml-2"
          >
            Features
          </a>

          <a
            href="/"
            className="bg-white mt-1 block text-gray-500 font-bold py-1 px-3"
          >
            Something
          </a>

          <a
            href="/"
            className="bg-white mt-1 block text-gray-500 font-bold py-1 px-3 mr-16"
          >
            About Us
          </a>

          <a
            href="/"
            className="bg-white mt-1 block text-brandBlue-A hover:text-brandBlue-B font-bold py-1 px-3"
          >
            Log in
          </a>

          <a
            href="/"
            className="bg-white mt-1 hover:text-brandBlue-B hover:border-brandBlue-B inline-block border-brandBlue-A border-2 border-solid text-brandBlue-A font-bold py-1 px-3 rounded-full"
          >
            Sign Up
          </a> */}

          
        </nav>
      }
    </nav>
  );
};

export default NavBar;