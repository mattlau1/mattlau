import React, { useEffect } from "react";
import Slider from "react-slick";

import loop1 from "../images/loop1.png";
import loop2 from "../images/loop2.png";
import loop3 from "../images/loop3.png";
import loop4 from "../images/loop4.png";
import { ProjectImage } from "../components/Project/ProjectImage";

interface LoopManiaProps { }

export const LoopMania: React.FC<LoopManiaProps> = () => {
  useEffect(() => {
    document.title = "Matthew Lau | Loop Mania";
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto md:py-4 md:px-4 sm:px-2">
        <div className="mx-4">
          <Slider {...sliderSettings} className="mb-8 px-4">
            <ProjectImage image={loop1} />
            <ProjectImage image={loop2} />
            <ProjectImage image={loop3} />
            <ProjectImage image={loop4} />
          </Slider>
          <div className="grid grid-cols-2">
            <h1 className="project-title md:text-3xl py-4 leading-2">Loop Mania</h1>
            <h1 className="project-title md:text-3xl py-4 text-right">July 2021</h1>
          </div>
          <h2 className="project-subheading pt-4">Tech Stack</h2>
          <hr className="my-2" />

          <ul className="ml-4 list-disc">
            <li>Frontend: JavaFX</li>
            <li>Backend: Java</li>
          </ul>

          <h2 className="project-subheading pt-4">About</h2>
          <hr className="my-2" />
          <p>
            Loop Mania is an application written in Java by our team of 4, where users are able to
            place buildings and equip items to aid a character which automatically moves around a
            cyclical map while battling enemies. This project was slowly built over 2 months, where
            we planned everything carefully through documents such as UML diagrams, project
            timelines and user interface designs.
          </p>

          <h2 className="project-subheading pt-4">Challenges</h2>
          <hr className="my-2" />
          <ul className="ml-4 list-disc">
            <li>Planning and thinking about requirements before implementation</li>
            <li>Integrating design patterns into different parts of our design</li>
            <li>Designing an object oriented system</li>
            <li>Making sure we were following good object oriented design practices</li>
          </ul>

          <h2 className="project-subheading pt-4">What I learned</h2>
          <hr className="my-2" />
          <ul className="ml-4 list-disc">
            <li>How to plan, design and implement an object oriented application</li>
            <li>How to create a working desktop application in Java</li>
            <li>How to design code for reusability and extendibility</li>
          </ul>
          <h2 className="project-subheading pt-4">Links</h2>
          <hr className="my-2" />
          <ul className="ml-4 list-disc">
            <li>Code: {" "}
              <a
                className="loop-colour hover:text-green-600"
                href="https://github.com/mattlau1/loop-mania"
              >
                https://github.com/mattlau1/loop-mania
              </a>
            </li>
            <li>Project Timeline {" "}
              <a
                className="loop-colour hover:text-green-600"
                href="http://zap.mattlau.tech/Loop%20Mania%20Project%20Timeline.pdf"
              >
                http://zap.mattlau.tech/Loop%20Mania%20Project%20Timeline.pdf
              </a>
            </li>
            <li>UML Diagram: {" "}
              <a
                className="loop-colour hover:text-green-600"
                href="http://zap.mattlau.tech/Loop%20Mania%20UML%20Diagram.pdf"
              >
                http://zap.mattlau.tech/Loop%20Mania%20UML%20Diagram.pdf
              </a>
            </li>
            <li>UI Design {" "}
              <a
                className="loop-colour hover:text-green-600"
                href="http://zap.mattlau.tech/Loop%20Mania%20UI%20Design.pdf"
              >
                http://zap.mattlau.tech/Loop%20Mania%20UI%20Design.pdf
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
