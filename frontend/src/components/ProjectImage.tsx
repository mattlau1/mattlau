import React from "react";

interface ProjectImageProps {
  image: string;
}

export const ProjectImage: React.FC<ProjectImageProps> = ({ image }) => {
  return (
    <img
      className="mx-auto rounded mt-4 md:mb-4 sm:mb-2 mx-2 p-0 object-scale-down"
      src={image}
      width="1080"
      alt="Project Screenshot"
    />
  );
};
