Quick Recipe -


Short project description :
In this project, we will be developing a website capable of discovering recipes based on user-selected ingredients. The website will display relevant search results, and upon selecting a recipe, a detailed description will be presented, outlining the necessary steps to prepare the dish. Additionally, we aim to provide recommendations featuring similar recipes to the user. The technologies employed for this project include the React framework and Firebase.

What we have done :
We create the most of the view componenets and presenters. The "IngredientsModel, firebaseModel" have been created. The user can navigate between pages even to the contact page. There are also some popular ingredients that they can add them in the list directly. The most of the MVP componenets are created. 

What we still plan to do :
We have not completed the creation of the detailed view and the utilization of all the intended endpoints. These include the endpoint for displaying similar recipes and the one for presenting the details of each recipe.

Project file structure (short description/purpose of each file):
VIEWS:
    HomepageView: It serves the homepage of the application. It includes navigation links, a start button which navigate to the searchPage. It also include a placeholder for an image but the image is not ready yet.

    IngredientInputView: It contains the input and Add button. It will trigger an "onAdd" function when it clicks.

    IngredientListView: It will contain the list of ingredients that the user adds. All ingredients has a button to remove.

    NavigationBar: 
    SearchPageView: This component add ingredients, display popular ingredients, show the current list, along with a search button.

    SearchResultView: It is not complete yet.
    
    ContactPageView: This componenet is designed to render a contact page.

PRESENTER:
    SearchPagePresenter: This presenter renders the the search view using SearchPageView. It manages seach queries, triggers searches and handles search results.

    SearchResultPresenter: Renderes SearchResultView, which is not complete yet.
MODEL:
    IngerdientsModel: This object manage reciepe and ingredient data in the application. It includes the methods for setting current recipe, adding and removing ingredients, it also perform the recipe searches. It also includes the fetch and promise opperations. 

    RecipeSource: This component is responsible to intract with the API. It contains four end points. The functions are designed to fetch each of these endpoint for different types of recipe related data from API.