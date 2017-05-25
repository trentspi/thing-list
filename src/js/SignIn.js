import React from 'react';

import {auth, githubProvider} from './base';

import '../css/SignIn.css';

const SignIn = () => {
  const authenticate = () => {
    auth.signInWithPopup(githubProvider);
  }

  return (
    <button
      className="signin"
      onClick={authenticate}
    >
      Sign in with GitHub
    </button>
  )
}

export default SignIn;
