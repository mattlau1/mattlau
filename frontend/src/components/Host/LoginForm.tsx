import React from 'react'

type Props = {
  setLoggedOn: React.Dispatch<React.SetStateAction<boolean>>
}

const LoginForm = (props: Props) => {

  const handleLogIn = () => {
    props.setLoggedOn(true);
  }
  return (
    <div className="mx-auto my-36 flex flex-col">
      <div className="my-2 flex justify-center">
        <h1 className="project-title md:text-3xl py-4 leading-2">File Hosting Service</h1>
      </div>
      <div className="flex flex-col items-center">
        <input className="my-2 w-72 border p-2" type="email" placeholder="Username" />
        <input className="my-2 w-72 border p-2" type="password" placeholder="Password" />
      </div>
      <div className="my-2 flex justify-center">
        <button className="w-72 border p-2" onClick={() => handleLogIn()}>Login</button>
      </div>
    </div>
  )
}

export default LoginForm