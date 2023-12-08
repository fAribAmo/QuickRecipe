
import SearchFormView from "../views2/SearchFormView.jsx"
import MyIngredientListView from "../views2/MyIngredientListView.jsx"
import SearchButtonView from "../views2/searchButtonView.jsx"
import SearchResultView from "../views2/searchResultView.jsx"
import { observer } from "mobx-react-lite";

export default observer (
    function SearchPagePresenter(props) {

        function TextChangeACB(parameter) {
            props.model.setSearchQuery(parameter) //sätter searchParameters.query
        }
        function AddIngredientButtonACB() {
            props.model.addIngredient() //lägger till ingredienser i ingredientArray av searchParameters.query
        }
        function RemoveIngredientACB(parameter) {
            props.model.removeIngredient(parameter)
        }
        function SearchACB() { //anropar searchRecipesByIngredients ifrån model från recipeSource
            const commaSeparatedQuery = props.model.ingredientArray.join(',');
            props.model.doSearch(commaSeparatedQuery) //sets searchResultsPromiseState in IngredientModel
        }
        function SetCurrentRecipe(theRecipe) {
            props.model.SetCurrentRecipe(theRecipe.id)
        }

        function renderSearchResults(parameter) {
            if(!parameter.promise) {
                return (<div><p>no data</p></div>);
            } else if(!parameter.data && !parameter.error) {
                return (
                    <div>
                        <img src="https://brfenergi.se/iprog/loading.gif" height="100"/>
                    </div>
                );
            } else if (parameter.error) {
                return (
                    <div>
                        <p>
                            {parameter.error}
                        </p>
                    </div>
                );
            } else {
                return (<SearchResultView
                                          searchResults={props.model.searchResultsPromiseState.data}
                                          customerIsInterestedInRecipe={SetCurrentRecipe}
                                          />)
            }
        }
        
        return <div className='main-content ' >
                    <div className="search-page-left" >
                        <SearchFormView
                                        text={props.model.searchParameters.query}
                                        onTextChange={TextChangeACB}
                                        addToIngredientList={AddIngredientButtonACB}
                                        />
                    </div>
                    <div className="placeholder-list" >
                        <MyIngredientListView
                                             ingredientsAccess={props.model.ingredientArray}
                                             deleteIngredientFromList={RemoveIngredientACB}
                                             />
                    </div>
                    <div className='button-container'>
                        <SearchButtonView
                                         getSearchResults={SearchACB /* endast trycker på search knappen */}
                                         /> 
                    </div>
                        {renderSearchResults(props.model.searchResultsPromiseState)}                 
                </div>
    }
);
