import React from 'react';
import NavigationBar from './NavigationBarView';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function HomePageView (props){
  
    function navigateToSearch() {
      props.navigateToSearch(); 
    };
  
    return (
    <div className="HomePage">
        <nav className='nav'>
            <ul className="nav navbar-nav">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
                <div className ='home-title'>
                <li className='center'>
                    <i className="fas fa-utensils"> </i> Quick Recipe
                </li>
                </div>
            </ul>
        </nav>
        <div className="main-content">
            <div className="home-text-section">
                <h1>Let's start cooking with popular Quick Recipes by your own ingredients!</h1>
                <p className='text2'>Want to find a quick recipe fitting your ingredients, diets and taste, click here to start!</p>
                <div className="center" >
                <button className='button-start' onClick={navigateToSearch}>Start</button>
                </div>
            </div> 
            <div className="image-section">
                {/* Image would be placed here. For now, it's a placeholder */}
                <div className="placeholder-image"></div>
            </div>
        </div>
    </div>
    );
  };
  
  export default HomePageView;