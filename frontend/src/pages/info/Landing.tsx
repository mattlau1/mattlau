import React, { useEffect } from "react";
import { FadeInSection } from "../../components/Landing/FadeInSection";
import { Introduction } from "../../components/Landing/Introduction";
import { ProjectCard } from "../../components/Project/ProjectCard";
import { ProjectImage } from "../../components/Project/ProjectImage";
import health from "../../images/projects/hamsterhealth/health.png";
import wealth from "../../images/projects/hamsterwealth/wealth.png";
import loopmania from "../../images/projects/loopmania/loopmania.png";
import hosting from "../../images/projects/filehosting/hosting2.png";

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
          projectImage={<ProjectImage image={hosting} />}
          projectName="File Hosting Service"
          projectType="Cloud Storage and Media Sharing Utility"
          projectRoute="host"
        />
      </FadeInSection>

      <FadeInSection>
        <ProjectCard
          projectImage={<ProjectImage image={loopmania} />}
          projectName="Loop Mania"
          projectType="2D Strategy Game"
          projectRoute="loopmania"
        />
      </FadeInSection>

      <FadeInSection>
        <ProjectCard
          projectImage={<ProjectImage image={wealth} />}
          projectName="Hamster Wealth"
          projectType="Virtual Stock Portfolio Tool"
          projectRoute="hamsterwealth"
        />
      </FadeInSection>

      <FadeInSection>
        <ProjectCard
          projectImage={<ProjectImage image={health} />}
          projectName="Hamster Health"
          projectType="Task Organisation Tool"
          projectRoute="hamsterhealth"
        />
      </FadeInSection>
    </>
  );
};
