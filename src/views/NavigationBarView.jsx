import React from 'react';

const NavigationBar = () => {
  return (
    <nav className='nav'>
      <ul className="nav navbar-nav">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
        <div className ='home-title'>
        <li className='center'> Quick Recipe </li>
        </div>
      </ul>
    </nav>
    
  );
};

export default NavigationBar;