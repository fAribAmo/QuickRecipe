import React from 'react';


function IngredientListView(props) {

  function ingredientsToTableRowCB(ingredient, index) {
      function WantsToRemoveACB() {
          props.deleteIngredientFromList(ingredient);
      }
      return <tr key={index}>
                <td>
                  <button onClick={WantsToRemoveACB} 
                          className='search-popIng-button'
                          >- 
                          {ingredient}
                  </button>
                </td> 
             </tr>;
  }

  return (
      <div>
          <table>
              <tbody  className='detailDishUp'>
              {
              //måste kanske sorteras som i labben först
              //med && kollar påståendet om det finns null element
              //props.ingredientsAccess && 
              //Array.isArray(props.ingredientsAccess) && 
              props.ingredientsAccess.map(ingredientsToTableRowCB)
              //kan ha total ingredients i td-element nedanför table
              }
              </tbody>
          </table>
      </div>

  );
}


/* OLD implementation
function IngredientListView({ ingredients, onRemove }){
  return (
    <div>
      {ingredients.map((ingredient, index) => (
        <button className='search-popIng-button' 
                key={index} 
                onClick={() => onRemove(ingredient)}>
          -  
          {ingredient}
        </button>
      ))}
    </div>
  );
};
*/

export default IngredientListView;