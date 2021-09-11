import axios, { AxiosError } from "axios";
import React, { useEffect, useState } from "react";

interface ShortenProps {}

enum AlertType {
  ERROR,
  SUCCESS,
  INFO,
}

export const Shorten: React.FC<ShortenProps> = () => {
  const [alertVisible, setAlertVisible] = useState(false);
  const [buttonToggle, setButtonToggle] = useState(false);
  const [linkText, setLinkText] = useState("");
  const [alertTitle, setAlertTitle] = useState("");
  const [alertDesc, setAlertDesc] = useState("");
  const [alertType, setAlertType] = useState<AlertType>();

  useEffect(() => {
    document.title = "Matthew Lau | Link Shortener";
  }, []);

  useEffect(() => {
    // change button to "copy" if link contains current url else "shorten"
    setButtonToggle(linkText.includes(window.location.host));
  }, [linkText]);

  const isValidURL = () => {
    let url;

    try {
      url = new URL(linkText);
    } catch (_) {
      return false;
    }

    return url.protocol === "http:" || url.protocol === "https:";
  };

  const shortenLink = () => {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    if (!isValidURL()) {
      setInvalidLinkAlert();
      showAlert();
      return;
    }

    axios
      .post(
        `${process.env.REACT_APP_API || "http://localhost:5000"}/shorten`,
        {
          fullURL: linkText,
        },
        { headers: headers }
      )
      .then((res) => {
        const shortened: string = res.data.url;
        console.log(shortened);
        console.log(window.location.origin + "/" + shortened);
        setLinkText(window.location.origin + "/" + shortened);
        showClickInfoAlert(shortened);
      })
      .catch((err: AxiosError) => {
        console.log(err);
        if (err.response!.status === 400) {
          setInvalidLinkAlert();
          showAlert();
        }
      });
  };

  const setInvalidLinkAlert = () => {
    setAlertTitle("Invalid Link Provided");
    setAlertDesc("The provided link is not a valid link. Please check the link and try again.");
    setAlertType(AlertType.ERROR);
  };

  const setSuccessfulCopyAlert = () => {
    setAlertTitle("Link was successfully copied to clipboard");
    setAlertDesc("");
    setAlertType(AlertType.SUCCESS);
  };

  const setClickInfoAlert = (shortened: string) => {
    setAlertType(AlertType.INFO);
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    axios
      .get(`${process.env.REACT_APP_API || "http://localhost:5000"}/clicks/${shortened}`, {
        headers: headers,
      })
      .then((res) => {
        setAlertTitle(`This link has been clicked ${res.data.clicks} time(s)!`);
        setAlertDesc("");
      })
      .catch((err: AxiosError) => {
        console.log(err);
        if (err.response!.status === 404) {
          setInvalidLinkAlert();
          showAlert();
        }
      });
  };

  const showAlert = () => {
    setAlertVisible(true);
    setTimeout(() => {
      setAlertVisible(false);
    }, 5000);
  };

  const showClickInfoAlert = (shortened: string) => {
    setClickInfoAlert(shortened);
    // showAlert();
    setAlertVisible(true);
  };

  const showSuccessfulCopyAlert = () => {
    setSuccessfulCopyAlert();
    showAlert();
  };

  const copyLink = () => {
    navigator.clipboard.writeText(linkText);
    showSuccessfulCopyAlert();
  };

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto md:py-4 md:px-4 sm:px-2">
        <div className="mx-4">
          {alertType === AlertType.ERROR && (
            <div
              className={`bg-red-100 border-l-4 border-red-500 text-red-700
               p-4 ${alertVisible ? "visible" : "invisible"}`}
              role="alert"
            >
              <p className="font-bold">{alertTitle}</p>
              <p>{alertDesc}</p>
            </div>
          )}
          {alertType === AlertType.SUCCESS && (
            <div
              className={`
                 bg-green-100 border-l-4 border-green-500 text-green-700 p-4 ${
                   alertVisible ? "visible" : "invisible"
                 }`}
              role="alert"
            >
              <p className="font-bold">{alertTitle}</p>
              <p>{alertDesc}</p>
            </div>
          )}
          {alertType === AlertType.INFO && (
            <div
              className={` bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 ${
                alertVisible ? "visible" : "invisible"
              }`}
              role="alert"
            >
              <p className="font-bold">{alertTitle}</p>
              <p>{alertDesc}</p>
            </div>
          )}

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-normal mb-24 text-center pt-24">
            <span className="bg-clip-text text-transparent linear-gradient">Link Shortener</span>
          </h1>
          <form className="mb-64">
            <div className="grid grid-cols-12">
              <input
                className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight col-span-12 md:col-span-10 focus:outline-none focus:shadow-outline md:mr-2 sm:col-span-12 text-xs sm:text-sm md:text-lg"
                type="text"
                placeholder="https://www.google.com/"
                value={linkText}
                onChange={(e) => {
                  setLinkText(e.currentTarget.value);
                }}
              />
              <button
                className={`text-gray-300 bg-gray-800 hover:bg-gray-700 hover:text-white font-medium col-span-2 col-span-12 md:col-span-2 text-white py-2 px-4 rounded md:ml-2 sm:col-span-12`}
                onClick={(e) => {
                  e.preventDefault();
                  buttonToggle ? copyLink() : shortenLink();
                }}
              >
                <span>{buttonToggle ? "Copy" : "Shorten"}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
