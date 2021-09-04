import React from "react";
import Slider from "react-slick";

import ex1 from "../images/ex1.png";
import { ProjectImage } from "../components/ProjectImage";

interface HamsterHealthProps {}

export const HamsterHealth: React.FC<HamsterHealthProps> = ({}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="relative bg-gradient-to-b from-gray-800">
      <div className="max-w-6xl mx-auto md:py-4 md:px-4 sm:px-2">
        {/* <ProjectImage image={ex1} /> */}

        <Slider {...settings} className="mb-8">
          <ProjectImage image={ex1} />
          <ProjectImage image={ex1} />
          <ProjectImage image={ex1} />
          <ProjectImage image={ex1} />
          <ProjectImage image={ex1} />
        </Slider>

        <h1 className="project-title text-lg">Hamster Health</h1>
      </div>
    </section>
  );
};
