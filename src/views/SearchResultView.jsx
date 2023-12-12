import React from 'react';
import NavigationBar from './NavigationBarView';

function SearchResultView(props){
   function navigateBackToSearchCB() {
      props.navigateBackToSearch();
   }
   function navigateToDetailsCB() {
      props.navigateToDetails();
   }
    return (
      <div className='HomePage' >
         <div><NavigationBar /></div>
         <div>
            <button onClick={navigateBackToSearchCB}
                     className='backToSearchButton'
               >
               Back to Search 
            </button>
         </div>
         <div className='container' onClick={navigateToDetailsCB}>
            {props.recipes.map(searchResultImageNameCB)}
         </div>
         
      </div>
      
    );
    function searchResultImageNameCB(searchResult){
      return (
        <span key={searchResult.id} onClick={() => getDish(searchResult)}>
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
            ingredient_str += ', ';
            ingredient_str += searchResult.missedIngredients.map(getIngredientsTextCB);
         }
         ingredient_str += '.';
         return ingredient_str;
      }
      function getIngredientsTextCB(searchResult, index, array){
         console.log(index);
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