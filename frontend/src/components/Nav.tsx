import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <div>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    to="/"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    onClick={() => {
                      setIsDropdownOpen(false);
                    }}
                  >
                    Home
                  </Link>
                  <div className="relative">
                    <button
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      onClick={() => {
                        setIsDropdownOpen(!isDropdownOpen);
                      }}
                    >
                      <span>Projects</span>
                      <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        className="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>

                    {isDropdownOpen && (
                      <div className="absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48 z-50">
                        <div className="px-2 py-2 bg-gray-800 rounded-md shadow dark-mode:bg-gray-800">
                          <Link
                            className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            to="/projects/hamsterwealth"
                            onClick={() => {
                              setIsDropdownOpen(!isDropdownOpen);
                            }}
                          >
                            Hamster Wealth
                          </Link>
                          <Link
                            className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            to="/projects/hamsterhealth"
                            onClick={() => {
                              setIsDropdownOpen(!isDropdownOpen);
                            }}
                          >
                            Hamster Health
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>

                  <Link
                    to="/about"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    onClick={() => {
                      setIsDropdownOpen(false);
                    }}
                  >
                    About Me
                  </Link>
                </div>
              </div>
            </div>

            <div className="ml-auto hidden md:block">
              <Link
                to="/shorten"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                onClick={() => {
                  setIsDropdownOpen(false);
                }}
              >
                Link Shortener
              </Link>
            </div>

            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => {
                  setIsOpen(!isOpen);
                  setIsDropdownOpen(false);
                }}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
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
                ) : (
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  to="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => {
                    setIsDropdownOpen(false);
                  }}
                >
                  Home
                </Link>

                <div
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
                  onClick={() => {
                    setIsDropdownOpen(!isDropdownOpen);
                  }}
                >
                  <span>Projects</span>
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>

                {isDropdownOpen && (
                  <div className="absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48 z-50">
                    <div className="px-2 py-2 bg-gray-800 rounded-md shadow dark-mode:bg-gray-800">
                      <Link
                        className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        to="/projects/hamsterwealth"
                        onClick={() => {
                          setIsDropdownOpen(!isDropdownOpen);
                        }}
                      >
                        Hamster Wealth
                      </Link>
                      <Link
                        className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        to="/projects/hamsterhealth"
                        onClick={() => {
                          setIsDropdownOpen(!isDropdownOpen);
                        }}
                      >
                        Hamster Health
                      </Link>
                    </div>
                  </div>
                )}

                <Link
                  to="/about"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => {
                    setIsDropdownOpen(false);
                  }}
                >
                  About Me
                </Link>
                <Link
                  to="/shorten"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => {
                    setIsDropdownOpen(false);
                  }}
                >
                  Link Shortener
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;
