import React from 'react';

const HomeMainContent = () => {
  return (
    <div className="main-content">
      <div className="text-section">
        <h1>Let's start cooking with popular Quick Recipes by your own ingredients!</h1>
        <p className='text2'>Want to find a quick recipe fitting your ingredients, diets and taste, click here to start!</p>
        <div className="center" >
        <button className='butten-start' onClick={() => window.location.href='/search'}>Start</button>
        </div>
      </div>
      <div className="image-section">
        {/* Image would be placed here. For now, it's a placeholder */}
        <div className="placeholder-image"></div>
      </div>
    </div>
  );
};

export default HomeMainContent;