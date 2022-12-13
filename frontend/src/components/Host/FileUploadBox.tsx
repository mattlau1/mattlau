import React from 'react'

type Props = {
  files: FileList | null,
  setFiles: React.Dispatch<React.SetStateAction<FileList | null>>
}
const suffixes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

const FileUploadBox = (props: Props) => {
  const getBytes = (bytes: number) => {
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return (!bytes && '0 Bytes') || ((bytes / Math.pow(1024, i)).toFixed(2) + " " + suffixes[i]);
  };

  return (
    <div className="flex items-center justify-center w-full mx-12">
      <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-800 hover:bg-gray-700">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
          <p className="mb-2 text-sm text-white"><span className="font-semibold">Click to upload</span> or drag and drop</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">{props.files && props.files[0] && props.files[0].name + " (" + getBytes(props.files[0].size) + ")"}</p>
        </div>
        <input name="file" type="file" className="hidden" onChange={(e) => props.setFiles(e.currentTarget.files)} />
      </label>
    </div>
  )
}

export default FileUploadBox