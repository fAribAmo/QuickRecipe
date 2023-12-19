import React from 'react';
import { auth } from '../firebaseModel.js'
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

const NavigationBar = () => {
  function signInACB() {
    const provider = new GoogleAuthProvider();
    if(auth.currentUser) {
      signOut(auth) 
    } else {
      signInWithPopup(auth, provider)
    }
  }

  function returnSignInButton() {
    return(
      <button className='signInButton'
              onClick={signInACB}
              id="signIn"
              >Sign in
      </button>
    );
  }

  return (
      <nav className='nav'>
      <ul className="nav navbar-nav">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
        <div className ='home-title'>
        <li className='center'> <i className="fas fa-utensils"> </i> Quick Recipe </li>
        </div>
        <li>{returnSignInButton()}</li>
      </ul>
    </nav>
    
  );
};

export default NavigationBar;