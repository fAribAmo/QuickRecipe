import React from 'react';
import { useState, useEffect } from 'react';
import { auth } from '../firebaseModel.js'
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

const NavigationBar = () => {
  const [signInOrOutText, setSignText] = useState('Sign in');

  function signInACB() {
    const provider = new GoogleAuthProvider();
    if(auth.currentUser) {
      signOut(auth) 
      setSignText('Sign in');
    } else {
      console.log('The button text is slow')
      signInWithPopup(auth, provider)
      setTimeout(setSet, 2500)
    }
  }

  function setSet() {
    console.log('Now to the point')
    setSignText('Logged in as ' + auth.currentUser.displayName);
  }

  function returnSignInButton() {
    return(
      <button className='signInButton'
              onClick={signInACB}
              id="signIn"
              >{signInOrOutText}
              {console.log("The error from clicking on signin button is ok")}
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