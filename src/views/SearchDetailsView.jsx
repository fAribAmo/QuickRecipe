import React from 'react';
import NavigationBar from './NavigationBarView';
import model from '../IngredientsModel';

function SearchDetailsView(props) {
  const searchData = model.searchResultsPromiseState.data;
  const time = searchData ? searchData.readyInMinutes : null;
  const dishImg = searchData ? searchData.image : null;
  const dishTitle = searchData ? searchData.title : null;
  const isVegetarian = searchData ? searchData.vegetarian : false;
  const isVegan = searchData ? searchData.vegan : false;
  const isDairyFree = searchData ? searchData.dairyFree : false;
  const isGlutenFree = searchData ? searchData.glutenFree : false;

  function navigateBackToResultsCB() {
    props.navigateToResult();
  }

  return (
    <div className='HomePage'>
      <NavigationBar />
      <button onClick={navigateBackToResultsCB} className='backToSearchButton'>
        Back to Search
      </button>
      <div className='container'>
        <div className='content-section'>
          <div className='image-section'>
            <img src={dishImg} alt={dishTitle} />
          </div>
          <div className='title'>{dishTitle}</div>
          <div className='details'>
            <p>Time: {time} minutes</p>
            <p>{isVegetarian && 'Vegetarian'}</p>
            <p>{isVegan && 'Vegan'}</p>
            <p>{isDairyFree && 'Dairy-Free'}</p>
            <p>{isGlutenFree && 'Gluten-Free'}</p>
          </div>
          <div className='description'>Description of the dish</div>
        </div>
      </div>
      <div className='additional-sections'>
        <div className='section-left'>
          <h2>Ingredients</h2>
          <ul>
            {searchData &&
              searchData.extendedIngredients.map((ingredient) => (
                <li key={ingredient.id}>{ingredient.original}</li>
              ))}
          </ul>
        </div>
        <div className='section-right'>
          <h2>Recipe</h2>
          <p>{searchData && searchData.instructions}</p>
        </div>
      </div>
    </div>
  );
}

export default SearchDetailsView;
