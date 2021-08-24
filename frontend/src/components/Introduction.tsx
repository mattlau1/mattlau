import React from "react";

interface IntroductionProps {}

export const Introduction: React.FC<IntroductionProps> = () => {
  return (
    <section className="relative md:my-40 md:py-20 xs:my-0 xs:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="text-center pb-12 md:pb-16">
            <h1
              className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              <span className="bg-clip-text text-transparent linear-gradient">Matthew Lau</span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-100 mb-8" data-aos="zoom-y-out" data-aos-delay="150">
                I'm an aspiring software engineer currently in my second year of computer science at
                university. Here are some of the projects that I've been working on!
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
