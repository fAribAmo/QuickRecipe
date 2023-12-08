import { observer } from "mobx-react-lite";
import SearchPageView from "../views/SearchPageView";
import { useNavigate } from 'react-router-dom';
import React from 'react';

export default 
observer(
function SearchPagePresenter(props){
  const navigate = useNavigate();

  function addIngredientACB(ingredient){
    props.model.addIngredient(ingredient);
  }

  function removeIngredientACB(ingredient){
    props.model.removeIngredient(ingredient);
  }

  function handleSearchClickACB(){
    props.model.doSearch();
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