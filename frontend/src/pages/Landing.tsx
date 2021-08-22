import React from "react";
import { ProjectCard } from "../components/ProjectCard";
interface LandingProps {}

export const Landing: React.FC<LandingProps> = () => {
  return (
    <>
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div className="text-center pb-12 md:pb-16">
              <h1
                className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
                data-aos="zoom-y-out"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-800 to-blue-500">
                  Matthew Lau
                </span>
              </h1>
              <div className="max-w-3xl mx-auto">
                <p
                  className="text-xl text-gray-100 mb-8"
                  data-aos="zoom-y-out"
                  data-aos-delay="150"
                >
                  I'm an aspiring software engineer currently in my second year of computer science.
                  Here are some of the projects that I've been working on!
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
      <ProjectCard />
    </>
  );
};
