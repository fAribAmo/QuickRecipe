
import {extractRecipeData} from "/src/recipeSource.js";
import { searchRecipesByIngredients } from "/src/recipeSource.js";
import resolvePromise from "./resolvePromise";

export default {
    
  ingredientArray: [],
  searchResultRecipies: [],
  currentRecipe: null,
  ingredients: {},
  stringIngredients: "",
  searchParameters: {},
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

  addIngredient() { //no parameters since its query listing
    this.ingredientArray = Array.isArray(this.ingredientArray)
    ? [...this.ingredientArray, this.searchParameters.query]
    : [this.searchParameters.query];
  },
  
  removeIngredient(ingredientToRemove) {
    function shouldWeKeepIngredientCB(ingredient){
      return !(ingredient === ingredientToRemove);
    }
    this.ingredientArray= this.ingredientArray.filter(shouldWeKeepIngredientCB);
  },
  
  //methods to manage mandatory and unwanted ingredients can be added here later

  setSearchQuery(queryText) {
    this.searchParameters.query = queryText;
  },

  doSearch(searchParams) { //goes to resolvePromise.js
    resolvePromise(searchRecipesByIngredients(searchParams), this.searchResultsPromiseState)
  },

  //setNumberOfIngredients{}?
}