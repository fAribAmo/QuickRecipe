import React, { useState } from 'react';
import NavigationBar from './NavigationBarView';
import model from '../IngredientsModel';

function SearchResultView(props){

  const [veganIsOn, veganSetIsOn] = useState(false);
  const [vegetarianIsOn, vegetarianSetIsOn] = useState(false);
  const [glutenIsOn, glutenSetIsOn] = useState(false);
  const [diaryIsOn, diarySetIsOn] = useState(false);

   function navigateBackToSearchCB() {
      props.navigateBackToSearch();
   }

   function navigateToDetailsCB(searchResult) {
      props.navigateToDetails(searchResult);
      model.saveCurrentRecipe(searchResult.id);
   }

   function veganButtonCB(){
      if(veganIsOn){
         props.dietButtonUnpressed('vegan');
      }else{
         props.dietButtonPressed('vegan');
      }
      veganSetIsOn(!veganIsOn);
      
   }

   function vegetarianButtonCB(){
      if(vegetarianIsOn){
         props.dietButtonUnpressed('vegetarian');
      }else{
         props.dietButtonPressed('vegetarian');
      }
      vegetarianSetIsOn(!vegetarianIsOn);
   }
   function glutenFreeButtonCB(){
      if(glutenIsOn){
         props.dietButtonUnpressed('glutenFree');
      }else{
         props.dietButtonPressed('glutenFree');
      }
      glutenSetIsOn(!glutenIsOn);
   }

   function DiaryFreeButtonCB(){
      if(diaryIsOn){
         props.dietButtonUnpressed('dairyFree');
      }else{
         props.dietButtonPressed('dairyFree');
      }
      diarySetIsOn(!diaryIsOn);
   }

    return (
      <div className='HomePage' >
         <div><NavigationBar /></div>
         <button onClick={navigateBackToSearchCB} className='search-back'>&#8592;</button>
         <div className='diet-filter-bar'>
            <button className='special-diets-text'>Special Diets:</button>
            <button className='diet-filter-button' onClick={veganButtonCB} style={{backgroundColor: veganIsOn? 'rgb(255, 210, 62)' : 'transparent',}}>Vegan</button>
            <button className='diet-filter-button' onClick={vegetarianButtonCB} style={{backgroundColor: vegetarianIsOn? 'rgb(255, 210, 62)' : 'transparent',}}>Vegetarian</button>
            <button className='diet-filter-button' onClick={glutenFreeButtonCB} style={{backgroundColor: glutenIsOn? 'rgb(255, 210, 62)' : 'transparent'}}>Gluten Free</button>
            <button className='diet-filter-button' onClick={DiaryFreeButtonCB} style={{backgroundColor: diaryIsOn? 'rgb(255, 210, 62)' : 'transparent'}}>Diary Free</button>
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