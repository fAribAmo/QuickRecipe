
import {extractRecipeData} from "/src/recipeSource.js";
import {searchRecipesByIngredients} from "/src/recipeSource.js";
import resolvePromise from "./resolvePromise";

export default {
    
  ingredientArray: [],
  searchResultRecipies: [],
  currentRecipe: null,
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

  addIngredient(ingredient) {
    this.ingredients.add(ingredient);
  },
  
  removeIngredient(ingredient) {
    this.ingredients.delete(ingredient);
  },
  
  //methods to manage mandatory and unwanted ingredients can be added here later

  setSearchQuery(queryText) {
    this.searchParameters.query = queryText;
  },

  setSearchType(queryType) {
    this.searchParams.type = queryType;
  },

  doSearch(searchParams) { //goes to resolvePromise.js
    resolvePromise(searchRecipesByIngredients(searchParams), this.searchResultsPromiseState)
  },

  //setNumberOfIngredients{}?
}