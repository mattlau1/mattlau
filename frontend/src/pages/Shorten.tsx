import React, { useEffect, useState } from "react";

interface ShortenProps {}

export const Shorten: React.FC<ShortenProps> = ({}) => {
  const [alertVisible, setAlertVisible] = useState(false);
  const [buttonToggle, setButtonToggle] = useState(false);
  const [linkText, setLinkText] = useState("");
  useEffect(() => {
    document.title = "Matthew Lau | Link Shortener";
  }, []);

  useEffect(() => {
    // change button to "copy" if link contains current url else "shorten"
    setButtonToggle(linkText.includes(window.location.host));
  }, [linkText]);

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto md:py-4 md:px-4 sm:px-2">
        <div className="mx-4">
          <div
            className={`bg-red-100 border-l-4 border-red-500 text-red-700 p-4 ${
              alertVisible ? "visible" : "invisible"
            }`}
            role="alert"
          >
            <p className="font-bold">Invalid Link Provided</p>
            <p>The provided link is not a valid link. Please check the link and try again.</p>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-normal mb-24 text-center pt-24">
            <span className="bg-clip-text text-transparent linear-gradient">Link Shortener</span>
          </h1>
          <form className="mb-64">
            <div className="grid grid-cols-12">
              <input
                className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight md:col-span-10 focus:outline-none focus:shadow-outline md:mr-2 sm:col-span-12"
                type="text"
                placeholder="https://www.google.com/"
                onChange={(e) => {
                  setLinkText(e.currentTarget.value);
                }}
              />
              <button
                className="text-gray-300 bg-gray-800 hover:bg-gray-700 hover:text-white font-medium col-span-2 md:col-span-2 text-white py-2 px-4 rounded md:ml-2 sm:col-span-12"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                <span>{buttonToggle ? "Copy" : "Shorten"}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
