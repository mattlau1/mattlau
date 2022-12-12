import React, { useState } from 'react'
import UploadForm from '../components/Host/UploadForm';
import LoginForm from '../components/Host/LoginForm';

type Props = {}

const Host = (props: Props) => {
  const [loggedOn, setLoggedOn] = useState(false);
  const [token, setToken] = useState("");
  return (
    loggedOn ?
      <UploadForm token={token} />
      :
      <LoginForm setLoggedOn={setLoggedOn} setToken={setToken} />
  )
}

export default Host