import { searchRecipesByIngredients } from "./recipeSource.js";
import resolvePromise from "./resolvePromise.js";

export default {
    
  ingredientArray: [],
  currentRecipe: null,
  ingredientProperty : {},
  ingredientText: '',
  searchParameters: {},
  searchResultsPromiseState: {},
  currentRecipePromiseState: {},
  dummyNumber: 2, //test for firebase config
  indexCounter: 0,
  specialDiets: [],

  addIngredient(ingredient) { //suggested solution from chatgpt to prevent error
    this.ingredientArray = Array.isArray(this.ingredientArray)
    ? [...this.ingredientArray, this.ingredientText]
    : [this.ingredientText];
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

  setSearchParameters() {
    function iterateIngredientsCB(ingredient) {
      return ingredient;
    }
    this.searchParameters.query = this.ingredientArray.map(iterateIngredientsCB)
  },

  doSearch() {
    resolvePromise(searchRecipesByIngredients(this.searchParameters), this.searchResultsPromiseState);
  },
   

  seeRecipeDetails(recipeId){
    resolvePromise(getRecipeInformation(recipeId), this.searchResultsPromiseState)
  },
//**Den här kan man använda istället för setCurrentRecipe För att undvika använda API *//
  saveCurrentRecipe(id){
    if (id) {
      if(!(id === this.currentRecipe)) {
       this.currentRecipe = id;
      }
    }
  },

  setCurrentRecipe(id) { //måste ändras till urlsökning
    if(id) {
      if(!(id === this.currentRecipe)) {
        this.currentRecipe = id;
        resolvePromise(getRecipeInformation(id), this.currentRecipePromiseState)
      }
    }
  },

  setDummyNumberForFirebaseTest(nr) { //test for firebase config 
    if (nr < 1 || !Number.isInteger(nr)) {
      throw new Error("number of guests not a positive integer");
    } else {
      this.dummyNumber = nr;
    }
  }


  //setNumberOfIngredients{}?
}