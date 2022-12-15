import React, { useEffect } from "react";
import Slider from "react-slick";

import hosting1 from "../images/hosting1.png";
import hosting2 from "../images/hosting2.png";
import hosting3 from "../images/hosting3.png";
import hosting4 from "../images/hosting4.png";
import { ProjectImage } from "../components/Project/ProjectImage";
import { Link } from "react-router-dom";

type Props = {
}

export const FileHosting = (props: Props) => {
  useEffect(() => {
    document.title = "Matthew Lau | File Hosting";
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
            <ProjectImage extraClasses="border border-white rounded-none" image={hosting1} />
            <ProjectImage extraClasses="border border-white rounded-none" image={hosting2} />
            <ProjectImage extraClasses="border border-white rounded-none" image={hosting3} />
            <ProjectImage extraClasses="border border-white rounded-none" image={hosting4} />
          </Slider>
          <div className="grid grid-cols-2">
            <h1 className="project-title md:text-3xl py-4 leading-2">File Hosting Service</h1>
            <h1 className="project-title md:text-3xl py-4 text-right">December 2022</h1>
          </div>

          <h2 className="project-subheading pt-4">Tech Stack</h2>
          <hr className="my-2" />
          <ul className="ml-4 list-disc">
            <li>Frontend: React.js, TypeScript, Tailwind, AWS Amplify</li>
            <li>Backend: TypeScript, Express.js, AWS Lambda, AWS API Gateway, Amazon S3, MongoDB</li>
          </ul>

          <h2 className="project-subheading pt-4">About</h2>
          <hr className="my-2" />
          <p>
            Authenticated users can log in and choose a file to upload. After uploading it, a link starting with zap.mattlau.tech/ can be copied and shared.
          </p>
          <br />
          <p>
            This passion project was made so that I had a way to upload & send files to friends more easily and without certain restrictions. I also wanted a way to host and share media with better URLs whilst also learning more about cloud infrastructure in the process.
          </p>
          <br />
          <p>
            My site's backend was originally written as a standard Express.js backend (non-serverless), but I wanted to experiment with serverless architecture. Rather than rewriting all my code in AWS Lambda, I decided to find a workaround. That's when I discovered the <a className="text-blue-500 hover:text-blue-700" href="https://www.serverless.com/">serverless framework</a>, a way for me to deploy my Express.js backend as a serverless backend on AWS. Originally, my site was also utilising MongoDB for its <Link className="text-blue-500 hover:text-blue-700" to="/shorten">link shortener</Link>, which is why I used MongoDB rather than AWS DynamoDB. AWS Amplify was also chosen to host my frontend (this whole site) since I was already comfortable with it.
          </p>

          <h2 className="project-subheading pt-4">Challenges</h2>
          <hr className="my-2" />
          <ul className="ml-4 list-disc">
            <li>Learning about specific cloud services and what they do</li>
            <li>Researching and figuring out how to use AWS</li>
            <li>Figuring out how to configure all the numerous settings for AWS, the Serverless Framework and the domain itself</li>
          </ul>

          <h2 className="project-subheading pt-4">What I learned</h2>
          <hr className="my-2" />
          <ul className="ml-4 list-disc">
            <li>What several AWS products do and what I can use them for</li>
            <li>The benefits of cloud architecture and infrastructure</li>
            <li>A bit about how to configure DNS records properly</li>
            <li>A little more about JWT authentication</li>
          </ul>

          <h2 className="project-subheading pt-4">Links</h2>
          <hr className="my-2" />
          <ul className="ml-4 list-disc">
            <li>
              Live Demo: {" "}
              <Link className="text-blue-500 hover:text-blue-700" to="/host">{window.location.origin}/host</Link> (Please message me for an account!)
            </li>
            <li>Project Code: {" "}
              <a
                className="text-blue-500 hover:text-blue-700"
                href="https://github.com/mattlau1/mattlau"
              >
                https://github.com/mattlau1/mattlau
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
