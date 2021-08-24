import React from "react";

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
    <section className="relative m-4 my-32">
      <div className="max-w-6xl mx-auto py-4 md:px-4 sm:px-6 rounded-md border border-gray-100 project-card">
        <p className="text-xs text-gray-100 mt-2 mx-2" data-aos="zoom-y-out" data-aos-delay="150">
          {projectType}
        </p>
        <p
          className="text-xl text-gray-100 font-bold mx-2"
          data-aos="zoom-y-out"
          data-aos-delay="150"
        >
          {projectName}
        </p>

        {projectImage}
      </div>
    </section>
  );
};
