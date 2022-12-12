import React, { useState } from 'react'
import HostForm from '../components/Host/HostForm';
import LoginForm from '../components/Host/LoginForm';

type Props = {}

const Host = (props: Props) => {
  const [loggedOn, setLoggedOn] = useState(false);
  const [token, setToken] = useState("");
  return (
    loggedOn ?
      <HostForm />
      :
      <LoginForm setLoggedOn={setLoggedOn} />
  )
}

export default Host