import React, { useState } from 'react';
import IngredientInputView from './IngredientInputView';
import IngredientListView from './IngredientListView';
import SearchPagePresenter from '../presenters/SearchPagePresenter';
import IngredientsModel from '../IngredientsModel';
import NavigationBar from './NavigationBarView';
import PopularIngredientsView from './PopularIngredView';

const SearchPageView = () => {
  const [ingredients, setIngredients] = useState([]);
  // add other state variables

  const model = IngredientsModel;
  const presenter = new SearchPagePresenter(model, {
    setIngredients,
    // add other setters
  });

  const addIngredient = (ingredient) => {
    if (ingredient && !ingredients.includes(ingredient)) {
      setIngredients(prevIngredients => [...prevIngredients, ingredient]);
    }
  };

  const removeIngredient = (ingredient) => {
    setIngredients(prevIngredients => prevIngredients.filter(ing => ing !== ingredient));
  };

  // add event handlers using presenter methods here

  return (
    <div className='HomePage'>
        <div><NavigationBar /></div>
        <div className='main-content '>
            {/* Left section */}
            <div className="search-page-left">
                <h2 className='text3'>Add ingredients you need to use:</h2>
                <IngredientInputView onAdd={addIngredient} />
                <h2 className='text3'>Popular Ingredients:</h2>
                <PopularIngredientsView onAdd={addIngredient} />
            </div>
            {/* Right section */}
            <div id="rectangle" className="placeholder-list">
                <h2 className='text4'>My Ingredient List</h2>
                <IngredientListView ingredients={ingredients} onRemove={removeIngredient} />
            </div>
        </div>
        <div className='search-button-div'>
            <button className = 'search-button'>Search</button>
        </div>
    </div>
  );
};

export default SearchPageView;