export default class SearchPagePresenter {
    constructor(model, viewSetters) {
      this.model = model;
      this.setIngredients = viewSetters.setIngredients;
    }
  
    handleAddIngredient = (ingredient) => {
      this.model.addIngredient(ingredient);
      this.updateView();
    };
  
    handleRemoveIngredient = (ingredient) => {
      this.model.removeIngredient(ingredient);
      this.updateView();
    };

  
    // Methods to manage mandatory and unwanted ingredients can be added here later
  
    updateView() {
      // Call the setters provided by the view to update the UI
      this.setIngredients([...this.model.ingredients]);
      // Mandatory and unwanted ingredients can be updated similarly here later
    }
  
    // Additional methods...
  }