import React from 'react';
import NavigationBar from './NavigationBarView';
import model from '../IngredientsModel';

function SearchResultView(props){
   function navigateBackToSearchCB() {
      props.navigateBackToSearch();
   }

   function navigateToDetailsCB(searchResult) {
      props.navigateToDetails(searchResult);
      model.saveCurrentRecipe(searchResult.id);
   }

   function veganButtonCB(){
      props.dietButtonPressed('vegan');
      
   }

   function vegetarianButtonCB(){
      props.dietButtonPressed('vegetarian');
   }
   function glutenFreeButtonCB(){
      props.dietButtonPressed('glutenFree');
   }

   function DiaryFreeButtonCB(){
      props.dietButtonPressed('dairyFree');
   }

    return (
      <div className='HomePage' >
         <div><NavigationBar /></div>
         <button onClick={navigateBackToSearchCB} className='detail-back'>&#8592;</button>
         <div className='diet-filter-bar'>
            <button className='special-diets-text'>Special Diets:</button>
            <button className='diet-filter-button' onClick={veganButtonCB}>Vegan</button>
            <button className='diet-filter-button' onClick={vegetarianButtonCB} >Vegetarian</button>
            <button className='diet-filter-button' onClick={glutenFreeButtonCB}>Gluten Free</button>
            <button className='diet-filter-button' onClick={DiaryFreeButtonCB}>Diary Free</button>
         </div>
         <div className='container'>
            {props.recipes.map(searchResultImageNameCB)}
         </div>
         
      </div>
      
    );
    function searchResultImageNameCB(searchResult){
      return (
            <span key={searchResult.id} onClick={() => navigateToDetailsCB(searchResult)}>
               <div className='item'>
                  <div><img src={searchResult.image} width="300" height="236"></img></div>
                  <div className='content'>
                     <div className='title'>{searchResult.title} </div>
                     <div className='ingredients'></div>
                     Ingredients: {getIngredientsCB(searchResult)}
                  </div>
               </div>
            </span>
      );

      function getIngredientsCB(searchResult){
         var ingredient_str = "";
         ingredient_str = searchResult.usedIngredients.map(getIngredientsTextCB);
         if (searchResult.missedIngredients){
            ingredient_str += ',';
            ingredient_str += searchResult.missedIngredients.map(getIngredientsTextCB);
         }
         ingredient_str += '.';
         return ingredient_str;
      }
      function getIngredientsTextCB(searchResult, index, array){
         if(index === array.length -1){
            return searchResult.name;
         }else{
            return(
               searchResult.name
            );
         }
      }

    }
   }
  
  export default SearchResultView;