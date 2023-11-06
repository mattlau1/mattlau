import React, { useEffect } from "react";
import Slider from "react-slick";
import cook1 from "../../images/projects/instacook/cook1.png";
import cook2 from "../../images/projects/instacook/cook2.png";
import cook3 from "../../images/projects/instacook/cook3.png";
import cook4 from "../../images/projects/instacook/cook4.png";
import cook5 from "../../images/projects/instacook/cook5.png";
import cook6 from "../../images/projects/instacook/cook6.png";
import cook7 from "../../images/projects/instacook/cook7.png";
import cook8 from "../../images/projects/instacook/cook8.png";
import cook9 from "../../images/projects/instacook/cook9.png";
import cook10 from "../../images/projects/instacook/cook10.png";

import { ProjectImage } from "../../components/Project/ProjectImage";

type Props = {
}

export const Instacook = (props: Props) => {
  useEffect(() => {
    document.title = "Matthew Lau | Instacook";
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto md:py-4 md:px-4 sm:px-2">
        <div className="mx-4">
          <Slider {...sliderSettings} className="mb-8 px-4">
            <ProjectImage image={cook1} />
            <ProjectImage image={cook2} />
            <ProjectImage image={cook3} />
            <ProjectImage image={cook4} />
            <ProjectImage image={cook5} />
            <ProjectImage image={cook6} />
            <ProjectImage image={cook7} />
            <ProjectImage image={cook8} />
            <ProjectImage image={cook9} />
            <ProjectImage image={cook10} />
          </Slider>
          <div className="grid grid-cols-2">
            <h1 className="project-title md:text-3xl py-4 leading-2">Instacook</h1>
            <h1 className="project-title md:text-3xl py-4 text-right">September - November 2022</h1>
          </div>

          <h2 className="project-subheading pt-4">Tech Stack</h2>
          <hr className="my-2" />
          <ul className="ml-4 list-disc">
            <li>Frontend: React.js, TypeScript, Material UI</li>
            <li>Backend: GraphQL, Javascript, Node.js, Express.js, MongoDB</li>
          </ul>

          <h2 className="project-subheading pt-4">About</h2>
          <hr className="my-2" />
          <p>
            Designed and created from scratch by me and three other fantastic team members, Instacook is a web app which allows users to find new recipes or share their own favourite recipes. Instacook features functionality such as a recipe discovery page, recipe tag searching, recipe bookmarking and more!
          </p>
          <br />
          <p>
            Since Instacook was created for our capstone projects, a significant amount of documentation and planning was required, so I've also attached it at the bottom of this page for some insight into our design choices and for some more information on the project.
          </p>

          <h2 className="project-subheading pt-4">Challenges</h2>
          <hr className="my-2" />
          <ul className="ml-4 list-disc">
            <li>Communication issues between team members regarding specific design decisions and missed details</li>
            <li>Making sure all team members were on the same page</li>
            <li>Forced migration to a local backend from a serverless backend due to a misunderstanding of project requirements</li>
          </ul>

          <h2 className="project-subheading pt-4">What I learned</h2>
          <hr className="my-2" />
          <ul className="ml-4 list-disc">
            <li>How to communicate and collaborate with team members more efficiently</li>
            <li>How to work with GraphQL backends on React.js</li>
            <li>How to convert user requirements into a fully working application more effectively</li>
          </ul>

          <h2 className="project-subheading pt-4">Links</h2>
          <hr className="my-2" />
          <ul className="ml-4 list-disc">
            <li>
              Project Code: {" "}
              <a
                className="hover:text-red-400 cook-colour"
                href="https://github.com/mattlau1/instacook"
              >
                https://github.com/mattlau1/instacook
              </a>
            </li>
            <li>Project Proposal: {" "}
              <a
                className="hover:text-red-400 cook-colour"
                href="http://zap.mattlau.dev/Instacook+Project+Proposal.pdf"
              >
                http://zap.mattlau.dev/Instacook+Project+Proposal.pdf
              </a>
            </li>
            <li>Project Report: {" "}
              <a
                className="hover:text-red-400 cook-colour"
                href="http://zap.mattlau.dev/Instacook+Project+Report.pdf"
              >
                http://zap.mattlau.dev/Instacook+Project+Report.pdf
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
