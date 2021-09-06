import React from "react";
import { FadeInSection } from "../components/FadeInSection";
import { Introduction } from "../components/Introduction";
import { ProjectCard } from "../components/ProjectCard";
import { ProjectImage } from "../components/ProjectImage";

import ex1 from "../images/ex1.png";
import health from "../images/health.png";
import wealth from "../images/wealth.png";
interface LandingProps {}

export const Landing: React.FC<LandingProps> = () => {
  return (
    <>
      <Introduction />
      <FadeInSection>
        <ProjectCard
          projectImage={<ProjectImage image={wealth} />}
          projectName="Hamster Wealth"
          projectType="Virtual Stock Portfolio Tool"
        />
      </FadeInSection>

      <FadeInSection>
        <ProjectCard
          projectImage={<ProjectImage image={health} />}
          projectName="Hamster Health"
          projectType="Task Organisation Tool"
        />
      </FadeInSection>
    </>
  );
};
