import { observer } from "mobx-react-lite";
import SearchPageView from "../views/SearchPageView";
import { useNavigate } from 'react-router-dom';
import React from 'react';

//TODO(@siyu): Remove this once we are done with testing local data.
import testdata from '/src/assets/testdata.json';

export default observer(
function SearchPagePresenter(props){
  const navigate = useNavigate();

  function addIngredientACB(){
    props.model.addIngredient();
  }

  function removeIngredientACB(ingredient){
    props.model.removeIngredient(ingredient);
  }

  function handleSearchClickACB(){
    //TODO(@siyu): Remove this once we are done with testing local data.
    props.model.doSearch().then(() => props.model.getAllRecipesInformation());
    /*
    props.model.searchResultsPromiseState = {
      promise: 'foo',
      error: null,
      data: testdata.slice(0, 10),
    }
    */
    navigate('/result');
  }

  function setIngredientTextACB(ingredientText){
    props.model.setIngredientText(ingredientText);
  }

  function handleAddClickACB(){
    props.model.addIngredientFromInput();
    props.model.setIngredientText('');
  }

  return (
    <div>
      < SearchPageView ingredients={props.model.ingredientArray}
                       ingredientText={props.model.ingredientText}
                       addIngredient={addIngredientACB}
                       removeIngredient={removeIngredientACB}
                       handleSearchClick={handleSearchClickACB}
                       handleAddClick={handleAddClickACB}
                       setIngredientText={setIngredientTextACB}/>
    </div>
  )
  
}
)