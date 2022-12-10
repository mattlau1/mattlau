import React, { useState } from 'react'
import LoginForm from '../components/Host/LoginForm';

type Props = {}

const Host = (props: Props) => {
  const [loggedOn, setLoggedOn] = useState(false);
  const [token, setToken] = useState("");
  return (
    loggedOn ?
      <div>
        Logged Ons
      </div>
      :
      <LoginForm setLoggedOn={setLoggedOn} />
  )
}

export default Host