import React from "react";

interface ProjectImageProps {
  image: string;
  style?: string;
}

export const ProjectImage: React.FC<ProjectImageProps> = ({ image, style }) => {
  return (
    <img
      className={`mx-auto rounded mt-4 md:mb-4 sm:mb-2 mx-2 p-0 object-scale-down ${style}`}
      src={image}
      width="1080"
      alt="Project Screenshot"
    />
  );
};
