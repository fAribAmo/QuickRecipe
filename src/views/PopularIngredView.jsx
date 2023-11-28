import React from 'react';

const PopularIngredientsView = ({ onAdd }) => {
  const popularIngredients = ['Garlic', 'Onion', 'Eggs']; // Add more as needed

  return (
    <div>
      {popularIngredients.map((ingredient, index) => (
        <button className='search-popIng-button' key={index} onClick={() => onAdd(ingredient)}>
          + {ingredient}
        </button>
      ))}
    </div>
  );
};

export default PopularIngredientsView;