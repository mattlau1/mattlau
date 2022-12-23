import React, { useEffect } from "react";
import Slider from "react-slick";

import award from "../../images/projects/hamsterwealth/chronicle_award.png";
import wealth1 from "../../images/projects/hamsterwealth/wealth1.png";
import wealth2 from "../../images/projects/hamsterwealth/wealth2.png";
import wealth3 from "../../images/projects/hamsterwealth/wealth3.png";
import wealth4 from "../../images/projects/hamsterwealth/wealth4.jpg";
import wealth5 from "../../images/projects/hamsterwealth/wealth5.png";
import { ProjectImage } from "../../components/Project/ProjectImage";

interface HamsterWealthProps { }

export const HamsterWealth: React.FC<HamsterWealthProps> = () => {
  useEffect(() => {
    document.title = "Matthew Lau | Hamster Wealth";
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
            <ProjectImage image={wealth1} />
            <ProjectImage image={wealth2} />
            <ProjectImage image={wealth3} />
            <ProjectImage image={wealth4} />
            <ProjectImage image={wealth5} />
          </Slider>
          <div className="grid grid-cols-2">
            <h1 className="project-title md:text-3xl py-4 leading-2">Hamster Wealth</h1>
            <h1 className="project-title md:text-3xl py-4 text-right">April 2021</h1>
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
            <a className="hover:text-green-600 wealth-colour" href="https://chroniclehacks.devpost.com/">
              Chronicle 2021 hackathon hosted by the Google Developers Student Club at the
              University of Melbourne
            </a>
            , where our team of 3 were given the theme of "consumer tech". Our team created Hamster
            Wealth in order to allow people to organise and manage their investments in an easy way.
            Most virtual portfolio tools tend to be limited in certain ways such as potentially
            being linked to a certain broker or requiring a fee to use. Hamster Wealth addresses
            these issues by being free to use, and by presenting users with live stock quotes from
            US markets in a simulated portfolio, allowing users to experiment with risky investments
            without any payment to make it easier for people to get better at investing.
          </p>
          <h2 className="project-subheading pt-4">Challenges</h2>
          <hr className="my-2" />

          <ul className="ml-4 list-disc">
            <li>Random bugs</li>
            <li>Getting everything working on time</li>
            <li>Adjusting to changing requirements</li>
          </ul>

          <h2 className="project-subheading pt-4">What I learned</h2>
          <hr className="my-2" />

          <ul className="ml-4 list-disc">
            <li>How to fix various bugs/errors</li>
            <li>How to utilise public APIs</li>
          </ul>

          <h2 className="project-subheading pt-4">Results</h2>
          <hr className="my-2" />

          <div className="grid md:grid-cols-2 sm:grid-cols-1">
            <img className="" width="100%" src={award} alt="Hackathon Finalists" />
            <div>
              <p className="ml-2">Our team made it to the top 5 teams for the hackathon!</p>
            </div>
          </div>

          <h2 className="project-subheading pt-4">Links</h2>
          <hr className="my-2" />
          <ul className="ml-4 list-disc">
            <li>
              Frontend Code:{" "}
              <a
                className="hover:text-green-600 wealth-colour"
                href="https://github.com/Team-Hamsterdam/chronicle-frontend"
              >
                https://github.com/Team-Hamsterdam/chronicle-frontend
              </a>
            </li>
            <li>
              Backend Code:{" "}
              <a
                className="hover:text-green-600 wealth-colour"
                href="https://github.com/Team-Hamsterdam/chronicle-backend"
              >
                https://github.com/Team-Hamsterdam/chronicle-backend
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
