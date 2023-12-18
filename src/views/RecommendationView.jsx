import React from 'react';

function RecommendationView(props) {
  const { recommendations } = props;

  return (
    <div className='recommendation-container'>
      <h2>Recommended Recipes</h2>
      <div className='recommendation-scroll-container'>
        {recommendations.map((recipe) => (
          <div key={recipe.id} className='recommendation-item'>
            <img src={recipe.image} alt={recipe.title} />
            <p>{recipe.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecommendationView;