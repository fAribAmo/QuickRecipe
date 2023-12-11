# Quick Recipe - Group 20

## Short project description :
In this project, we will be developing a website capable of discovering recipes based on user-selected ingredients. The website will display relevant search results, and upon selecting a recipe, a detailed description will be presented, outlining the necessary steps to prepare the dish. Additionally, we aim to provide recommendations featuring similar recipes to the user. The technologies employed for this project include the React framework and Firebase.

The API used for this project is: https://rapidapi.com/webknox/api/recipe

## What we have done :
- [x] We created the most of the view componenets and presenters. 
- [x] The "IngredientsModel, firebaseModel" have been created. 
- [x] The user can navigate between pages even to the contact page. There are also some popular ingredients that they can add them in the list directly. 
- [x] The most of the MVP componenets are created. 
- [x] We have deployed the app ([DeployURL](https://quickrecipe-14ffc.web.app )) and set up the firebase for the project. 
- [x] We start using data by calling API, for example, when user click the "search" button after entering in the ingredients, the user can get corresponding recipes.

## What we still plan to do :
- [ ] We have not completed the creation of the detailed view and the utilization of all the intended endpoints. These include the endpoint for displaying similar recipes and the one for presenting the details of each recipe.

## Project file structure (short description/purpose of each file):
### VIEWS:
    HomepageView: It serves the homepage of the application. It includes navigation bar links, a start button which navigate to the searchPage. It also include a placeholder for an image but the image is not ready yet.

    IngredientInputView: It contains the input and Add button. It will trigger an "onAdd" function when it clicks.

    IngredientListView: It will contain the list of ingredients that the user adds. All ingredients has a button to remove.

    SearchPageView: This component add ingredients, display popular ingredients, show the current list, along with a search button.

    SearchResultView: Show searching result of the recipes. It is not complete yet.
    
    ContactPageView: This componenet is designed to render a contact page.

### PRESENTER:
    ContactPagePresenter: Renders the the ContactPageView.

    HomePagePresenter: Renderes the SearchResultView.

    SearchPagePresenter: This presenter renders the the search view using 
    SearchPageView. It manages seach queries, triggers searches and handles search results.

    SearchResultPresenter: Renderes SearchResultView.

### MODEL:
    IngerdientsModel: This object manage reciepe and ingredient data in the application. It includes the methods for setting current recipe, adding and removing ingredients, it also perform the recipe searches. It also includes the fetch and promise opperations. 

    firebaseMode: Manage database storage and persistence of the project.

    RecipeSource: This component is responsible to intract with the API. It contains four end points. The functions are designed to fetch each of these endpoint for different types of recipe related data from API.