import React, { useState } from 'react';
import IngredientInputView from './IngredientInputView';
import IngredientListView from './IngredientListView';
import NavigationBar from './NavigationBarView';
import PopularIngredientsView from './PopularIngredView';

function SearchPageView(props){

  function addIngredient(ingredient){
    props.addIngredient(ingredient);
  };

  function removeIngredient(ingredient){
    props.removeIngredient(ingredient);
  };

  function handleSearchClick(){
    props.handleSearchClick();
  };

  function setIngredientText(ingredientText){
    props.setIngredientText(ingredientText);
  }

  function handleAddClick(){
    props.handleAddClick();
  }

  function handleDietChange(event) {
    props.setDiet(event.target.value);
  }

  function handleIntoleranceChange(event) {
    // Assuming intolerances can be multiple selections
    const selectedOptions = Array.from(event.target.selectedOptions, option => option.value);
    props.setIntolerances(selectedOptions);
  }

  // add event handlers using presenter methods here

  return (
    <div className='HomePage'>
        <div><NavigationBar /></div>
        <div className='main-content '>
            {/* Left section */}
            <div className="search-page-left">
                <h2 className='text3'>Add ingredients you need to use:</h2>
                <IngredientInputView  ingredientText={props.ingredientText} 
                                      setIngredientText={setIngredientText} 
                                      handleAddClick={handleAddClick} />
                <h2 className='text3'>Popular Ingredients:</h2>
                <PopularIngredientsView handlePopularIngredientClick={addIngredient}
                                        setThisIngredientFirst={setIngredientText} />
                                         <div>
                <label>Diet:</label>
                  <select onChange={handleDietChange}>
                    <option value="">Select Diet</option>
                    <option value="vegetarian">Vegetarian</option>
                    <option value="vegan">Vegan</option>
                  {/* ... other options ... */}
                </select>
            
                <label>Intolerances:</label>
                  <select multiple onChange={handleIntoleranceChange}>
                    <option value="egg">Egg</option>
                    <option value="gluten">Gluten</option>
                  {/* ... other options ... */}
                </select>
              </div>
            </div>

            {/* Right section */}
            <div id="rectangle" className="placeholder-list">
                <h2 className='text4'>My Ingredient List</h2>
                <IngredientListView ingredientsAccess={props.ingredients}
                                    deleteIngredientFromList={removeIngredient}/>
            </div>
        </div>
        <div className='button-container'>
              <button className='button-search' 
                      onClick={handleSearchClick}>
                Search
              </button>
        </div>
        
    </div>
  );
};

export default SearchPageView;