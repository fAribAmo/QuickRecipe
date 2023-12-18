import React from 'react';
import NavigationBar from './NavigationBarView';
import model from '../IngredientsModel';

function SearchDetailsView(props) {

const isVegetarian = props.recipeData ? props.recipeData.vegetarian : false;
const isVegan = props.recipeData ? props.recipeData.vegan : false;
const isDairyFree = props.recipeData ? props.recipeData.dairyFree : false;
const isGlutenFree = props.recipeData ? props.recipeData.glutenFree : false;

  function navigateBackToResultsCB() {
    props.navigateToResult();
  }

  return (
    <div className='HomePage'>
      <NavigationBar />
      <button onClick={navigateBackToResultsCB} className='detail-back'>&#8592;  
        </button>
      <div className='container'>
        
        <div className='detail-main-content'>
            <div className='detail-image'>
              <img src={props.recipeData.image} />
            </div>
            <div className='form-group'>
              <div className='detail-title'>{props.recipeData.title}</div>
              <div className='details'>
                <p>Time: {props.recipeData.readyInMinutes} minutes</p>
                <p>Servings: {props.recipeData.servings}</p>
                <p>{isVegetarian && 'Vegetarian'}</p>
                <p>{isVegan && 'Vegan'}</p>
                <p>{isDairyFree && 'Dairy-Free'}</p>
                <p>{isGlutenFree && 'Gluten-Free'}</p>
              </div>
            </div>
          {/*<div className='description'>{props.recipeData.summary}</div>*/}
        </div>
      </div>
      <div className='additional-sections'>
        <div className='section-left'>
          <h2>Ingredients</h2>
          <ul>
            {props.recipeData.extendedIngredients.map((ingredient) => (
                <li key={ingredient.id}>{ingredient.original}</li>
              ))}
          </ul>
        </div>
        <div className='section-right'>
          <h2>Instructions</h2>
          <div>{props.recipeData.analyzedInstructions.map((instructionGroup, groupIndex)  => (
                <div key={groupIndex}>{instructionGroup.step}
                  {instructionGroup.steps.map((instruction, index) => (
                          <div key={index}>
                              <h3>Step {instruction.number}</h3>
                              <p>{instruction.step}</p>
                          </div>
                      ))}
                </div>
              ))}</div>
        </div>
      </div>
    </div>
  );
}

export default SearchDetailsView;
