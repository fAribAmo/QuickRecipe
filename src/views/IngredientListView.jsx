import React from 'react';

const IngredientListView = ({ ingredients, onRemove }) => {
  return (
    <div>
      {ingredients.map((ingredient, index) => (
        <button className='search-popIng-button' key={index} onClick={() => onRemove(ingredient)}>
          -  {ingredient}
        </button>
      ))}
    </div>
  );
};

export default IngredientListView;