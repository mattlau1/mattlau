import React from "react";
import { Introduction } from "../components/Introduction";
import { ProjectCard } from "../components/ProjectCard";
import { ProjectImage } from "../components/ProjectImage";
import { Scrollbar } from "react-scrollbars-custom";

import ex1 from "../images/ex1.png";
import Nav from "../components/Nav";
interface LandingProps {}

export const Landing: React.FC<LandingProps> = () => {
  return (
    <>
      <Introduction />
      <ProjectCard
        projectImage={<ProjectImage image={ex1} />}
        projectName="Hamster Wealth"
        projectType="Web App"
      />

      <ProjectCard
        projectImage={<ProjectImage image={ex1} />}
        projectName="Hamster Health"
        projectType="Web App"
      />
    </>
  );
};
