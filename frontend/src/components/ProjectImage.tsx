import React from "react";

interface ProjectImageProps {
  image: string;
}

export const ProjectImage: React.FC<ProjectImageProps> = ({ image }) => {
  return (
    <img
      className={`mx-auto rounded mt-4 md:mb-4 sm:mb-2 mx-2 p-0 object-cover w-full h-full`}
      src={image}
      alt="Project Screenshot"
    />
  );
};
