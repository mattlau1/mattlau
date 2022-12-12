import React, { useEffect } from "react";
import { FadeInSection } from "../components/Landing/FadeInSection";
import { Introduction } from "../components/Landing/Introduction";
import { ProjectCard } from "../components/Project/ProjectCard";
import { ProjectImage } from "../components/Project/ProjectImage";
import health from "../images/health.png";
import wealth from "../images/wealth.png";
import loopmania from "../images/loopmania.png";
interface LandingProps { }

export const Landing: React.FC<LandingProps> = () => {
  useEffect(() => {
    document.title = "Matthew Lau";
  }, []);

  return (
    <>
      <Introduction />
      <FadeInSection>
        <ProjectCard
          projectImage={<ProjectImage image={loopmania} />}
          projectName="Loop Mania"
          projectType="2D Strategy Game"
        />
      </FadeInSection>

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
