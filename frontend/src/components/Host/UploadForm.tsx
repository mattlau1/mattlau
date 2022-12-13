import axios from 'axios';
import React, { useState } from 'react'
import FileUploadBox from './FileUploadBox'

type Props = {
  token: string
}

const UploadForm = (props: Props) => {
  const [files, setFiles] = useState<FileList | null>(null);
  const [url, setUrl] = useState("");
  const [checked, setChecked] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleUpload = () => {
    if (!files) {
      console.log("Empty File Input")
      return;
    }
    const data = new FormData();
    data.append('file', files[0]);

    const options = {
      headers: {
        "Authorization": `Bearer ${props.token}`
      },
      onUploadProgress: (progressEvent: ProgressEvent) => {
        const { loaded, total } = progressEvent;
        const percent = Math.floor((loaded * 100) / total);
        if (percent < 100) {
          setProgress(percent);
        }
      }
    };
    setProgress(0);
    axios
      .post(`${process.env.REACT_APP_API || "http://localhost:5000"}/upload`, data, options)
      .then(res => {
        setUrl("http://zap.mattlau.tech/" + (res.data.urls[0].url.split('/').reverse())[0]);
        setProgress(100);
      }).catch(e => {
        console.log(e);
        setProgress(0);
      })
  }

  const copyLink = async () => {
    navigator.clipboard.writeText(url);
    setChecked(true);
    const delay = (ms: number) => new Promise(res => setTimeout(res, ms));
    await delay(2000);
    setChecked(false);
  };

  return (
    <div className="mx-auto flex flex-col">
      {/* Heading */}
      <div className="my-2 flex justify-center">
        <h1 className="project-title md:text-3xl py-4 leading-2">File Hosting</h1>
      </div>

      {/* URL Box */}
      <div className="my-2 flex justify-center mx-12">
        <input
          className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight col-span-12 md:col-span-10 focus:outline-none focus:shadow-outline md:mr-2 sm:col-span-12 text-xs sm:text-sm md:text-lg"
          type="text"
          value={url}
          placeholder="File URL"
          readOnly
        />
        <button
          className={`text-gray-300 bg-gray-800 hover:bg-gray-700 hover:text-white font-medium col-span-2 col-span-12 md:col-span-2 text-white py-2 px-4 rounded md:ml-2 sm:col-span-12`}
          onClick={(e) => {
            e.preventDefault();
            copyLink();
          }}
        >
          {checked ?
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            :
            <span>Copy</span>
          }
        </button>
      </div>

      {/* Progress Bar */}
      <div className="my-2 flex justify-center">
        <div className="mx-12 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: progress + "%" }} />
        </div>
      </div>

      {/* File Upload Box */}
      <div className="my-2 flex justify-center">
        <FileUploadBox files={files} setFiles={setFiles} />
      </div>

      {/* Upload Button */}
      <div className="my-2 flex justify-center">
        <button
          className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded inline-flex items-center"
          onClick={() => handleUpload()}
        >
          <span>Upload</span>
        </button>
      </div>
    </div >
  )
}

export default UploadForm