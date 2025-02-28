import React from "react";

interface IntroductionProps { }

export const Introduction: React.FC<IntroductionProps> = () => {
  return (
    <section className="relative md:my-40 md:py-20 xs:my-0 xs:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4">
              <span className="bg-clip-text text-transparent linear-gradient">Matthew Lau</span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-100 mb-8">
                I develop games as a graduate/junior software engineer at American Gaming Systems! 
              </p>
              <div className="mx-auto py-16 block">
                <svg
                  className="inline animate-bounce"
                  height="26px"
                  viewBox="0 0 26 26"
                  width="26px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <polygon
                      fill="white"
                      points="0.046,2.582 2.13,0.498 12.967,11.334 23.803,0.498 25.887,2.582 12.967,15.502  "
                    />
                    <polygon
                      fill="white"
                      points="0.046,13.582 2.13,11.498 12.967,22.334 23.803,11.498 25.887,13.582 12.967,26.502  "
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
