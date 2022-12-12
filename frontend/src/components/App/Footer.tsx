import React, { useState } from "react";

interface FooterProps { }

export const Footer: React.FC<FooterProps> = () => {
  const [githubHover, setGithubHover] = useState(false);
  const [linkedInHover, setLinkedInHover] = useState(false);
  return (
    <footer className="flex flex-wrap items-center justify-between p-3 m-auto">
      <div className="container mx-auto flex flex-col flex-wrap items-center justify-between">
        <ul className="flex mx-auto text-white text-center">
          <li className="p-2">
            <a
              href="https://github.com/mattlau1"
              onMouseEnter={() => {
                setGithubHover(true);
              }}
              onMouseLeave={() => {
                setGithubHover(false);
              }}
            >
              <span className="sr-only">Github</span>
              <svg
                className="cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill={githubHover ? "rgb(139, 148, 158)" : "rgb(72, 79, 88)"}
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                />
              </svg>
            </a>
          </li>
          <li className="p-2">
            <a
              href="https://www.linkedin.com/in/matthew-lau1/"
              onMouseEnter={() => {
                setLinkedInHover(true);
              }}
              onMouseLeave={() => {
                setLinkedInHover(false);
              }}
            >
              <span className="sr-only">LinkedIn</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={linkedInHover ? "rgb(139, 148, 158)" : "rgb(72, 79, 88)"}
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </li>
        </ul>
        <div className="flex mx-auto text-white text-center">Copyright Matthew Lau © 2021-2022</div>
      </div>
    </footer>
  );
};
