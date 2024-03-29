import axios, { AxiosError } from 'axios'
import React, { useState } from 'react'

type Props = {
  setLoggedOn: React.Dispatch<React.SetStateAction<boolean>>,
  setToken: React.Dispatch<React.SetStateAction<string>>
}

const LoginForm = (props: Props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);

  const handleLogIn = () => {
    // request login from backend
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    axios
      .post(
        `${process.env.REACT_APP_API || "http://localhost:5000"}/login`,
        {
          username: username,
          password: password
        },
        { headers: headers }
      )
      .then((res) => {
        props.setToken(res.data.token);
        props.setLoggedOn(true);
      })
      .catch((err: AxiosError) => {
        console.log(err);
        if (err.response) {
          setShowError(true);
          return;
        }
      });

  }

  return (
    <div className="mx-auto my-36 flex flex-col">
      <div className="my-2 flex justify-center">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-normal my-6 text-center">
          <span className="bg-clip-text text-transparent linear-gradient">File Hosting Service</span>
        </h1>
      </div>
      {showError && <div className="my-2 flex justify-center">
        <p className="md:text-sm text-red-400 leading-2">Error: Invalid Credentials.</p>
      </div>}
      <div className="flex flex-col items-center">
        <input
          className="my-2 w-96 border p-2 text-black"
          type="username"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="my-2 w-96 border p-2 text-black"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="my-2 flex justify-center">
        <button className="w-96 border p-2" onClick={() => handleLogIn()}>Login</button>
      </div>
    </div>
  )
}

export default LoginForm