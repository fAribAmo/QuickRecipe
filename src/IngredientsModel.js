export default class IngredientsModel {
    constructor() {
      this.ingredients = new Set();
    }
  
    addIngredient(ingredient) {
      this.ingredients.add(ingredient);
    }
  
    removeIngredient(ingredient) {
      this.ingredients.delete(ingredient);
    }
  
    //methods to manage mandatory and unwanted ingredients can be added here later
  }