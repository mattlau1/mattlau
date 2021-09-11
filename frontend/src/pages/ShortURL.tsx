import axios from "axios";
import React, { useEffect, useState } from "react";
import { Redirect, useParams } from "react-router";
import MetaTags from "react-meta-tags";

interface ParamTypes {
  shortURL: string;
}

interface ShortURLProps {}

export const ShortURL: React.FC<ShortURLProps> = () => {
  let { shortURL } = useParams<ParamTypes>();
  const [redirectSuccess, setRedirectSuccess] = useState(true);
  const [imagePath, setImagePath] = useState("");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API || "http://localhost:5000"}/full/${shortURL}`)
      .then((res) => {
        // check if url is an image
        const url = res.data.fullURL;
        if (url.match(/\.(jpeg|jpg|gif|png)$/) != null) {
          setImagePath(url);
        }
        window.location.href = url;
        return;
      })
      .catch((_) => {
        setRedirectSuccess(false);
      });
  }, [shortURL]);
  return (
    <>
      <MetaTags>
        <meta property="og:image" content={imagePath} />
      </MetaTags>
      {!redirectSuccess && <Redirect to="/" />}
      <section className="relative my-64 md:mb-64 sm:mb-20 xs:py-0">
        <div className="max-w-6xl py-12 mx-auto px-4 sm:px-6">
          <div className="md:pb-12 mx-4">
            <div className="text-center pb-12 md:pb-16">
              <h1
                className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
                data-aos="zoom-y-out"
              >
                <span className="bg-clip-text text-white about-title linear-gradient">
                  Redirecting...
                </span>
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
