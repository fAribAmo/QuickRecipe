
import {extractRecipeData} from "/src/recipeSource.js";
import { searchRecipesByIngredients } from "./recipeSource.js";
import resolvePromise from "./resolvePromise.js";

export default {
    
  ingredientArray: [],
  searchResultRecipies: [],
  currentRecipe: null,
  ingredientText: '',
  searchResultsPromiseState: {},
  currentRecipePromiseState: {},

  setCurrentRecipe(id) { //måste ändras till urlsökning
    if(id) {
      if(!(id === this.currentRecipe)) {
        this.currentRecipe = id;
        resolvePromise(extractRecipeData(id), this.currentRecipePromiseState)
      }
    }
  },

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

  //setNumberOfIngredients{}?
}