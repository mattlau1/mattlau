import React from 'react'
import { Link } from 'react-router-dom';

type Props = {
  setDropdownOpen: (value: React.SetStateAction<boolean>) => void,
  text: string,
  path: string
}

const DropdownLink = (props: Props) => {
  return (
    <Link
      className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
      to={props.path}
      onClick={() => {
        props.setDropdownOpen(false);
      }}
    >
      {props.text}
    </Link>
  )
}

export default DropdownLink