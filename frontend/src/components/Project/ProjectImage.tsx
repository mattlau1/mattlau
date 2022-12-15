import React from "react";

type Props = {
  image: string,
  extraClasses?: string
}

export const ProjectImage = (props: Props) => {
  return (
    <img
      className={`mx-auto rounded mt-4 md:mb-4 sm:mb-2 mx-2 p-0 object-cover w-full h-full ${props.extraClasses}`}
      src={props.image}
      alt="Project Screenshot"
    />
  );
};
