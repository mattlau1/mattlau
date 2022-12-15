import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import DropdownButton from "./DropdownButton";
import DropdownLink from "./DropdownLink";

function Nav() {
  const [open, setOpen] = useState(false);
  const [projectDropdownOpen, setProjectDropdownOpen] = useState(false);
  const [appDropdownOpen, setAppDropdownOpen] = useState(false);

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
                      setProjectDropdownOpen(false);
                      setAppDropdownOpen(false);
                    }}
                  >
                    Home
                  </Link>
                  <div className="relative">
                    <DropdownButton
                      dropdownOpen={projectDropdownOpen}
                      setDropdownOpen={setProjectDropdownOpen}
                      buttonText="Projects"
                      setOtherDropdownOpen={setAppDropdownOpen}
                      mobile={false}
                    />

                    {projectDropdownOpen && (
                      <div className="absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48 z-50">
                        <div className="px-2 py-2 bg-gray-800 rounded-md shadow dark-mode:bg-gray-800">
                          <DropdownLink
                            path="/projects/host"
                            setDropdownOpen={setProjectDropdownOpen}
                            text="File Hosting Service"
                          />
                          <DropdownLink
                            path="/projects/loopmania"
                            setDropdownOpen={setProjectDropdownOpen}
                            text="Loop Mania"
                          />
                          <DropdownLink
                            path="/projects/hamsterwealth"
                            setDropdownOpen={setProjectDropdownOpen}
                            text="Hamster Wealth"
                          />
                          <DropdownLink
                            path="/projects/hamsterhealth"
                            setDropdownOpen={setProjectDropdownOpen}
                            text="Hamster Health"
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  <Link
                    to="/about"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    onClick={() => {
                      setProjectDropdownOpen(false);
                      setAppDropdownOpen(false);
                    }}
                  >
                    About Me
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative hidden md:block">
              <DropdownButton
                buttonText="Apps"
                dropdownOpen={appDropdownOpen}
                setDropdownOpen={setAppDropdownOpen}
                setOtherDropdownOpen={setProjectDropdownOpen}
                mobile={false}
              />

              {appDropdownOpen && (
                <div className="absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48 z-50">
                  <div className="px-2 py-2 bg-gray-800 rounded-md shadow dark-mode:bg-gray-800">
                    <DropdownLink
                      path="/shorten"
                      setDropdownOpen={setAppDropdownOpen}
                      text="Link Shortener"
                    />
                    <DropdownLink
                      path="/host"
                      setDropdownOpen={setAppDropdownOpen}
                      text="File Hosting"
                    />
                  </div>
                </div>
              )}
            </div>



            {/* menu */}
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => {
                  setOpen(!open);
                  setProjectDropdownOpen(false);
                }}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!open ? (
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

        {/* menu */}
        <Transition
          show={open}
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
                    setProjectDropdownOpen(false);
                  }}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => {
                    setProjectDropdownOpen(false);
                  }}
                >
                  About Me
                </Link>

                <DropdownButton
                  buttonText="Projects"
                  dropdownOpen={projectDropdownOpen}
                  setDropdownOpen={setProjectDropdownOpen}
                  setOtherDropdownOpen={setAppDropdownOpen}
                  mobile
                />
                <DropdownButton
                  buttonText="Apps"
                  dropdownOpen={appDropdownOpen}
                  setDropdownOpen={setAppDropdownOpen}
                  setOtherDropdownOpen={setProjectDropdownOpen}
                  mobile
                />

                {projectDropdownOpen && (
                  <div className="absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48 z-50">
                    <div className="px-2 py-2 bg-gray-800 rounded-md shadow dark-mode:bg-gray-800">
                      <DropdownLink
                        path="/projects/host"
                        setDropdownOpen={setProjectDropdownOpen}
                        text="File Hosting Service"
                      />
                      <DropdownLink
                        path="/projects/loopmania"
                        setDropdownOpen={setProjectDropdownOpen}
                        text="Loop Mania"
                      />
                      <DropdownLink
                        path="/projects/hamsterwealth"
                        setDropdownOpen={setProjectDropdownOpen}
                        text="Hamster Wealth"
                      />
                      <DropdownLink
                        path="/projects/hamsterhealth"
                        setDropdownOpen={setProjectDropdownOpen}
                        text="Hamster Health"
                      />
                    </div>
                  </div>
                )}

                {appDropdownOpen && (
                  <div className="absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48 z-50">
                    <div className="px-2 py-2 bg-gray-800 rounded-md shadow dark-mode:bg-gray-800">
                      <DropdownLink
                        path="/shorten"
                        setDropdownOpen={setAppDropdownOpen}
                        text="Link Shortener"
                      />
                      <DropdownLink
                        path="/host"
                        setDropdownOpen={setAppDropdownOpen}
                        text="File Hosting"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;
