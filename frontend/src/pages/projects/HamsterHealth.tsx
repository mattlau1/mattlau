import React, { useEffect } from "react";
import Slider from "react-slick";

import health1 from "../../images/projects/hamsterhealth/health1.png";
import health2 from "../../images/projects/hamsterhealth/health2.png";
import health3 from "../../images/projects/hamsterhealth/health3.png";
import health4 from "../../images/projects/hamsterhealth/health4.png";
import health5 from "../../images/projects/hamsterhealth/health5.png";
import health6 from "../../images/projects/hamsterhealth/health6.png";
import finalists from "../../images/projects/hamsterhealth/hackiethon_finalists.png";
import { ProjectImage } from "../../components/Project/ProjectImage";

interface HamsterHealthProps { }

export const HamsterHealth: React.FC<HamsterHealthProps> = () => {
  useEffect(() => {
    document.title = "Matthew Lau | Hamster Health";
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
            <ProjectImage image={health1} />
            <ProjectImage image={health2} />
            <ProjectImage image={health3} />
            <ProjectImage image={health4} />
            <ProjectImage image={health5} />
            <ProjectImage image={health6} />
          </Slider>
          <div className="grid grid-cols-2">
            <h1 className="project-title md:text-3xl py-4 leading-2">Hamster Health</h1>
            <h1 className="project-title md:text-3xl py-4 text-right">March 2021</h1>
          </div>
          <h2 className="project-subheading pt-4">Tech Stack</h2>
          <hr className="my-2" />

          <ul className="ml-4 list-disc">
            <li>Frontend: HTML, CSS, React.js, Javascript, Bootstrap</li>
            <li>Backend: Python, Flask</li>
            <li>Database: PostgreSQL</li>
            <li>Hosting: Netlify, Heroku</li>
          </ul>

          <h2 className="project-subheading pt-4">About</h2>
          <hr className="my-2" />
          <p>
            This project was built for the{" "}
            <a
              className="hover:text-yellow-600 health-colour"
              href="https://hackiethon.devpost.com/"
            >
              Hackiethon 2021 hackathon hosted by HackMelbourne
            </a>
            , where our team of 4 were given the theme of "working from home". Our team decided to
            address the issue of staying organised and motivated in quarantine through our web app
            Hamster Health. Hamster Health is an organisation tool which allows users to create a
            to-do list with custom tasks which they can complete. Upon completing their tasks they
            will be rewarded with experience points to increase their account level, motivating
            users by giving them a sense of progression as they see their level increase whilst they
            become more organised. Hamster Health implements a leaderboard which displays the 50
            users with the highest levels, creating a social aspect of motivation which is lost in
            quarantine life.
          </p>
          <h2 className="project-subheading pt-4">Challenges</h2>
          <hr className="my-2" />

          <ul className="ml-4 list-disc">
            <li>Learning how to use our libraries and frameworks</li>
            <li>Random bugs</li>
            <li>Getting everything working on time</li>
            <li>Deployment</li>
          </ul>

          <h2 className="project-subheading pt-4">What I learned</h2>
          <hr className="my-2" />

          <ul className="ml-4 list-disc">
            <li>The process of creating a full stack web application and deploying it</li>
            <li>What it's like to work on a project with a strict time limit</li>
          </ul>

          <h2 className="project-subheading pt-4">Results</h2>
          <hr className="my-2" />

          <div className="grid md:grid-cols-2 sm:grid-cols-1">
            <img className="" width="100%" src={finalists} alt="Hackathon Finalists" />
            <div>
              <p className="ml-2">Our team ranked top 16 out of 75 teams for the hackathon!</p>
              <p className="ml-2">(Team Hamsterdam)</p>
            </div>
          </div>

          <h2 className="project-subheading pt-4">Links</h2>
          <hr className="my-2" />
          <ul className="ml-4 list-disc">
            <li>
              Frontend Code:{" "}
              <a
                className="hover:text-yellow-600 health-colour"
                href="https://github.com/Team-Hamsterdam/hackiethon-frontend"
              >
                https://github.com/Team-Hamsterdam/hackiethon-frontend
              </a>
            </li>
            <li>
              Backend Code:{" "}
              <a
                className="hover:text-yellow-600 health-colour"
                href="https://github.com/Team-Hamsterdam/hackiethon-backend"
              >
                https://github.com/Team-Hamsterdam/hackiethon-backend
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
