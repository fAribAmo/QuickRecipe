import React from 'react';
import { useState, useEffect } from 'react';
import { auth } from '../firebaseModel.js'
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

function setButtonTextCB() {
  const [signInOrOutText, setSignText] = useState('Sign in');
  useEffect(() => {
    if (auth.currentUser) {
      setSignText('Logged in as ' + auth.currentUser.displayName);
    } else {
      setSignText('Sign in')
    }
  }, [auth.currentUser, signInOrOutText]);

  return signInOrOutText;
}

function signInACB() {
  const provider = new GoogleAuthProvider();
  if(auth.currentUser) {
    signOut(auth) 
    window.location.reload();
    console.log('logged out')
  } else {
    console.log('The button text update is slow')
    signInWithPopup(auth, provider)
    console.log('Logged in')
  }
}

const NavigationBar = () => {
  function returnSignInButton() {
    return(
      <div className="singInContainer">
        <button className='signInButton'
                onClick={signInACB}
                id="signIn"
                >{setButtonTextCB()}
                {console.log("The error from clicking on signin button is ok")}
        </button>
        <div className="iconSignIn">
          <i className="fas fa-hand-point-up"></i>
        </div>
      </div>
    );
  }
  return (
    <div>
      <nav className='nav'>
      <ul className="nav navbar-nav">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
        <div className ='home-title'>
          <li className='center'>
          <a href="/">
            <i className="fas fa-utensils"></i> 
            Quick Recipe
          </a> 
          </li> 
        </div>
        <li>{returnSignInButton()}</li>
      </ul>
    </nav>
    </div>
  );
};

export default NavigationBar;