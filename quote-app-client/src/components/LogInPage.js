import React from 'react';
import SignIn from './containers/SignInPage';
import LogIn from './containers/LogInPage';

const LogInPage = ()=>{
    let SignIn = <SignIn/>
    let LogIn = <SignUp/>
    return(
        <div className="LogInHeader">
          <h1>Log in Or Sign Up to Begin</h1>
          <button>Log In </button>
          <button> Sign Up </button>
            <div id="access">
            </div>
        </div>
    )
}