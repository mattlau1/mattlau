import React from "react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  projectType: string;
  projectName: string;
  projectImage: React.ReactNode;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  projectType,
  projectName,
  projectImage,
}) => {
  return (
    <section className="relative m-4 my-48">
      <div className="max-w-6xl mx-auto md:py-4 md:px-4 sm:px-2 rounded-md border border-gray-500 project-card cursor-pointer">
        <Link to={`projects/${projectName.toLowerCase().replace(" ", "")}`}>
          <p
            className="text-xs text-gray-100 mt-2 mx-2 project-text"
            data-aos="zoom-y-out"
            data-aos-delay="150"
          >
            {projectType}
          </p>
          <p
            className="text-xl text-gray-100 mx-2 project-card-title"
            data-aos="zoom-y-out"
            data-aos-delay="150"
          >
            {projectName}
          </p>

          {projectImage}
        </Link>
      </div>
    </section>
  );
};
