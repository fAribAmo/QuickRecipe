import React, { useState } from 'react';
import NavigationBar from './NavigationBarView';

function SearchDetailsView(props) {
  const isVegetarian = props.recipeData ? props.recipeData.vegetarian : false;
  const isVegan = props.recipeData ? props.recipeData.vegan : false;
  const isDairyFree = props.recipeData ? props.recipeData.dairyFree : false;
  const isGlutenFree = props.recipeData ? props.recipeData.glutenFree : false;

  // Initialize state for adjustedServings = 4 and then it can beadjusted when the buttons are pressed
  const [adjustedServings, setAdjustedServings] = useState(props.recipeData.servings);

  function navigateBackToResultsCB() {
    props.navigateToResult();
  }

  function adjustAmountForServings(amount) {
    const adjustedAmount = ((amount / props.recipeData.servings) * adjustedServings).toFixed(2);
    return parseFloat(adjustedAmount); 
  }

  function handleServingsChange(increase) {
    const newServings = increase
      ? Math.min(adjustedServings + 2, 14) 
      : Math.max(adjustedServings - 2, 1); 
  
    // Update the state
    setAdjustedServings(newServings);
  }

  return (
    <div className='HomePage' key={props.recipeData.id}>
      <NavigationBar />
      <button onClick={navigateBackToResultsCB} className='detail-back'>&#8592;</button>
      <div className='container'>
        <div className='detail-main-content'>
          <div className='detail-image'>
            <img src={props.recipeData.image} alt='Recipe' />
          </div>
          <div className='form-group'>
            <div className='detail-title'>{props.recipeData.title}</div>
            <div className='details'>
              <p>Time: {props.recipeData.readyInMinutes} minutes</p>
              <p>{isVegetarian && 'Vegetarian'}</p>
              <p>{isVegan && 'Vegan'}</p>
              <p>{isDairyFree && 'Dairy-Free'}</p>
              <p>{isGlutenFree && 'Gluten-Free'}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='additional-sections'>
        <div className='section-left'>
          <h2>Ingredients</h2>
          
          <div className='servings-container'>
            <p>Servings:</p>
            <button className='servings-button' onClick={() => handleServingsChange(true)}>+</button>
            <p>{adjustedServings}</p>
            <button className='servings-button' onClick={() => handleServingsChange(false)}>-</button>
          </div>

          <ul>
            {props.recipeData.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>
                {adjustAmountForServings(ingredient.amount, adjustedServings)} {ingredient.unit} {ingredient.meta} {ingredient.name}
              </li>
            ))}
          </ul>
        </div>
        <div className='section-right'>
          <h2>Instructions</h2>
          <div>
            {props.recipeData.analyzedInstructions.map((instructionGroup, groupIndex) => (
              <div key={groupIndex}>
                {instructionGroup.steps.map((instruction, index) => (
                  instruction.number > 4 ? (
                    <div key={index}>
                      <h3>Step {instruction.number - 4}</h3>
                      <p>{instruction.step}</p>
                    </div>
                  ) : null
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchDetailsView;
