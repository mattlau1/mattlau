import React from "react";
import styled from "styled-components";

const bg = styled.img`
  background-image: url("");
`;

interface ProjectCardProps {}

export const ProjectCard: React.FC<ProjectCardProps> = () => {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 rounded-md border border-gray-100 project-card">
        <p className="text-xs text-gray-100 mt-2" data-aos="zoom-y-out" data-aos-delay="150">
          Web App
        </p>
        <p
          className="text-xl text-gray-100 mb-8 font-bold"
          data-aos="zoom-y-out"
          data-aos-delay="150"
        >
          Link Shortener
        </p>

        <div className="flex flex-col h-screen my-auto items-center bg-cover"></div>
      </div>
    </section>
  );
};
