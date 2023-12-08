import React from 'react';

function PopularIngredientsView({ handlePopularIngredientClick }){
  const popularIngredients = ['Garlic', 'Onion', 'Eggs']; // Add more as needed

  return (
    <div>
      {popularIngredients.map((ingredient, index) => (
        <button className='search-popIng-button' key={index} onClick={() => handlePopularIngredientClick(ingredient)}>
          + {ingredient}
        </button>
      ))}
    </div>
  );
};

export default PopularIngredientsView;