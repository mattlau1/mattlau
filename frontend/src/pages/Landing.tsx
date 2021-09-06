import React from "react";
import { FadeInSection } from "../components/FadeInSection";
import { Introduction } from "../components/Introduction";
import { ProjectCard } from "../components/ProjectCard";
import { ProjectImage } from "../components/ProjectImage";

import ex1 from "../images/ex1.png";
interface LandingProps {}

export const Landing: React.FC<LandingProps> = () => {
  return (
    <>
      <Introduction />
      <FadeInSection>
        <ProjectCard
          projectImage={<ProjectImage image={ex1} />}
          projectName="Hamster Wealth"
          projectType="Web App"
        />
      </FadeInSection>

      <FadeInSection>
        <ProjectCard
          projectImage={<ProjectImage image={ex1} />}
          projectName="Hamster Health"
          projectType="Web App"
        />
      </FadeInSection>
    </>
  );
};
