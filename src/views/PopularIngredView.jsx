import React from 'react';

function PopularIngredientsView(props){
  const popularIngredients = ['Garlic', 'Onion', 'Eggs']; // Add more as needed

  function PopularIngredientButtonCB(ingredient, index) {
    function addPopularIngredientCB() {
      props.setThisIngredientFirst(ingredient)
      props.handlePopularIngredientClick(ingredient)
    }
    return (
        <tr key={index}>
          <td ><button className='search-popIng-button' onClick={addPopularIngredientCB}> + {ingredient}</button></td>
        </tr>
    )
  }

  return (
    <div>
      <table>
        <tbody>
        {popularIngredients.map((ingredient, index) =>
            PopularIngredientButtonCB(ingredient, index)
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PopularIngredientsView;