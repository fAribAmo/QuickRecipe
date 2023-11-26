import React from 'react';

const NavigationBar = () => {
  return (
    <nav class='nav'>
      <ul class="nav navbar-nav">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
        <div className ='home-title'>
        <li> Quick Recipe </li>
        </div>
      </ul>
    </nav>
    
  );
};

export default NavigationBar;