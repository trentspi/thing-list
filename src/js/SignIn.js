import React from 'react';

import {auth, githubProvider} from './base';

import '../css/SignIn.css';

const SignIn = ({ authHandler }) => {
  const authenticate = (provider) => {
    auth
      .signInWithPopup(provider)
      //.then(authHandler)
  }

  return (
    <button
      className="signin"
      onClick={() => authenticate(githubProvider)}
    >
      Sign in with GitHub
    </button>
  )
}

export default SignIn;
