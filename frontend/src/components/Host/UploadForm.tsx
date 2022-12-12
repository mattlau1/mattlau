import axios from 'axios';
import React, { useEffect, useState } from 'react'
import FileUploadBox from './FileUploadBox'

type Props = {
  token: string
}

const UploadForm = (props: Props) => {
  const [files, setFiles] = useState<FileList | null>(null);
  const [url, setUrl] = useState("");

  const handleUpload = () => {
    if (!files) {
      console.log("Empty File Input")
      return;
    }
    const data = new FormData();
    data.append('file', files[0]);

    const headers = {
      "Authorization": `Bearer ${props.token}`
    };
    axios
      .post(`${process.env.REACT_APP_API || "http://localhost:5000"}/upload`, data, { headers: headers })
      .then(res => {
        console.log(res);
        setUrl("http://images.mattlau.tech/" + (res.data.urls[0].url.split('/').reverse())[0]);
      })
  }

  const copyLink = () => {
    navigator.clipboard.writeText(url);
  };

  useEffect(() => {
    console.log("Files: ", files);
  }, [files])
  return (
    <div className="mx-auto flex flex-col">
      <div className="my-2 flex justify-center">
        <h1 className="project-title md:text-3xl py-4 leading-2">File Hosting</h1>
      </div>
      <div className="my-2 flex justify-center mx-12">
        <input
          className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight col-span-12 md:col-span-10 focus:outline-none focus:shadow-outline md:mr-2 sm:col-span-12 text-xs sm:text-sm md:text-lg"
          type="text"
          placeholder="https://www.google.com/"
          value={url}

        />
        <button
          className={`text-gray-300 bg-gray-800 hover:bg-gray-700 hover:text-white font-medium col-span-2 col-span-12 md:col-span-2 text-white py-2 px-4 rounded md:ml-2 sm:col-span-12`}
          onClick={(e) => {
            e.preventDefault();
            copyLink();
          }}
        >
          <span>Copy Link</span>
        </button>

      </div>
      <div className="my-2 flex justify-center">
        <FileUploadBox files={files} setFiles={setFiles} />
      </div>
      <div className="my-2 flex justify-center">
        <button
          className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded inline-flex items-center"
          onClick={() => handleUpload()}
        >
          <span>Upload</span>
        </button>
      </div>
    </div>
  )
}

export default UploadForm