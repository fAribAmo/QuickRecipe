import { searchRecipesByIngredients } from "./recipeSource.js";
import resolvePromise from "./resolvePromise.js";

export default {
    
  ingredientArray: [],
  ingredientText: '',
  searchResultsPromiseState: {},

  addIngredient(ingredient) {
    this.ingredientArray=[...this.ingredientArray,ingredient];
  },

  addIngredientFromInput(){
    this.addIngredient(this.ingredientText);
  },
  
  removeIngredient(ingredientToRemove) {
    function shouldWeKeepIngredientCB(ingredient){
      return !(ingredient === ingredientToRemove);
    }
    this.ingredientArray= this.ingredientArray.filter(shouldWeKeepIngredientCB);
  },
  
  //methods to manage mandatory and unwanted ingredients can be added here later

  setIngredientText(currentIngredientText) {
    this.ingredientText = currentIngredientText;
  },

  doSearch() { //goes to resolvePromise.js
    resolvePromise(searchRecipesByIngredients(this.ingredientArray), this.searchResultsPromiseState)
  },

  seeRecipeDetails(recipeId){
    resolvePromise(getRecipeInformation(recipeId), this.searchResultsPromiseState)
  }


  //setNumberOfIngredients{}?
}