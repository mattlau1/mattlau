import React from "react";

interface ProjectImageProps {
  image: string;
}

export const ProjectImage: React.FC<ProjectImageProps> = ({ image }) => {
  return (
    <img
      className="mx-auto rounded mt-4 mb-8 mx-2 p-0 object-scale-down"
      src={image}
      width="1080"
      alt="Project Screenshot"
    />
  );
};
