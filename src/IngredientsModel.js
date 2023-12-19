import { getRecipeInformation, searchRecipesByIngredients } from "./recipeSource.js";
import resolvePromise from "./resolvePromise.js";
import recipe from '/src/assets/recipe717040.json';

export default {
    
  ingredientArray: [],
  currentRecipe: null,
  ingredientProperty : {},
  ingredientText: '',
  searchParameters: {},
  searchResultsPromiseState: {},
  currentRecipePromiseState: {},
  allDetailsPromiseStates: [],
  dummyNumber: 2, //test for firebase config
  indexCounter: 0,
  specialDiets: [],

  addSpecialDiet(diet){
    this.specialDiets = [...this.specialDiets, diet];
  },

  removeSpecialDiet(diet){
    function filterDietCB(currentDiet){
      return !(diet === currentDiet);
    }
    this.specialDiets= this.specialDiets.filter(filterDietCB);
  },

  getRecipesWithDiet(){
    if(! 'data' in this.searchResultsPromiseState){
      return [];
    }

    if(this.allDetailsPromiseStates.length !== this.searchResultsPromiseState.data.length){
      return [];
    }

    let recipesWithDiet = []
    for(let i = 0, stateLen=this.allDetailsPromiseStates.length; i<stateLen; i++){
      if(!'data' in this.allDetailsPromiseStates[i]){
        continue;
      }

      let meetCriteria = true;
      for(let j = 0, dietLen=this.specialDiets.length; j<dietLen; j++){
        meetCriteria = this.allDetailsPromiseStates[i].data[this.specialDiets[j]] && meetCriteria;
      }
      if(meetCriteria){
        recipesWithDiet = [...recipesWithDiet, this.searchResultsPromiseState.data[i]];
      }
    }
    return recipesWithDiet;
  },

  addIngredient() {
    if(this.ingredientArray.includes(this.ingredientText)){
      return;
    }
    this.ingredientArray = Array.isArray(this.ingredientArray)
    ? [...this.ingredientArray, this.ingredientText]
    : [this.ingredientText];
  },

  addIngredientFromInput(){
    this.addIngredient();
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
    resolvePromise(searchRecipesByIngredients(this.ingredientArray), this.searchResultsPromiseState);
  },

  getAllRecipesInformation() {
    if(! 'data' in this.searchResultsPromiseState){
      return;
    }

    // TODO(@siyu): change this to only call this function when test is done.
    // allDetailsPromiseStates mismatch the searchResultsPromiseState.data.
    if(this.allDetailsPromiseStates.length === this.searchResultsPromiseState.data.length){
      return;
    }

    this.allDetailsPromiseStates = Array.from({ length: this.searchResultsPromiseState.data.length }, () => ({}));
    this.searchResultsPromiseState.data.forEach((item, index) => {
      //resolvePromise(getRecipeInformation(item.id), this.allDetailsPromiseStates[index]);
      this.allDetailsPromiseStates[index] = {
        promise: 'foo',
        error: null,
        data: recipe,
      };
    });
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
        for(let i = 0, len=this.allDetailsPromiseStates.length; i<len; i++){
          // TODO(@siyu): Change to the right id.
          
          if(true){
            this.currentRecipePromiseState = this.allDetailsPromiseStates[i];
            break;
          }
          
         /*
          if('data' in this.allDetailsPromiseStates[i] && this.allDetailsPromiseStates[i].data.id === id){
            this.currentRecipePromiseState = this.allDetailsPromiseStates[i];
            break;
          }*/
        }
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