import React from 'react'

type Props = {
  setDropdownOpen: (value: React.SetStateAction<boolean>) => void,
  dropdownOpen: boolean,
  buttonText: string,
  setOtherDropdownOpen: (value: React.SetStateAction<boolean>) => void,

  // mobile dropdown button?
  mobile: boolean
}

const DropdownButton = (props: Props) => {
  return (
    props.mobile ?
      <div
        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
        onClick={() => {
          props.setDropdownOpen(!props.dropdownOpen);
          props.setOtherDropdownOpen(false);
        }}
      >
        <span>{props.buttonText}</span>
        <svg
          fill="currentColor"
          viewBox="0 0 20 20"
          className="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
      :
      <button
        className={"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"}
        onClick={() => {
          props.setDropdownOpen(!props.dropdownOpen);
          props.setOtherDropdownOpen(false);
        }}
      >
        <span>{props.buttonText}</span>
        <svg
          fill="currentColor"
          viewBox="0 0 20 20"
          className="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>

  )
}

export default DropdownButton