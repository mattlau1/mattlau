import React from 'react'
import FileBox from './FileBox'

type Props = {}

const HostForm = (props: Props) => {
  return (
    <div className="mx-auto flex flex-col">
      <div className="my-2 flex justify-center">
        <h1 className="project-title md:text-3xl py-4 leading-2">File Hosting</h1>
      </div>
      <div className="my-2 flex justify-center">
        <FileBox />
      </div>
      <div className="my-2 flex justify-center">
        <button className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded inline-flex items-center">
          <span>Upload</span>
        </button>
      </div>

    </div>
  )
}

export default HostForm