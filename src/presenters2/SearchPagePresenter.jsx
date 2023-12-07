
import SearchFormView from "../views2/SearchFormView.jsx"
import MyIngredientListView from "../views2/MyIngredientListView.jsx"
import { observer } from "mobx-react-lite";

export default observer (
    function SearchPagePresenter(props) {

        function TextChangeACB(parameter) {
            props.model.setSearchQuery(parameter)
        }
        function AddButtonACB(parameter) {
            props.model.addIngredient(parameter) //lägger till ingredienser i ingredientArray
        }
        function RemoveIngredientACB(parameter) {
            props.model.removeIngredient(parameter)
        }
        
        return <div className='main-content ' >
                    <div className="search-page-left" >
                    <SearchFormView
                                    text={props.model.searchParameters.query}
                                    onTextChange={TextChangeACB}
                                    addToIngredientList={AddButtonACB}
                                    />
                    </div>
                    <div className="placeholder-list" >
                    <MyIngredientListView
                                         ingredientsAccess={props.model.ingredientArray}
                                         deleteIngredientFromList={RemoveIngredientACB}
                                         />
                    </div>
                </div>
    }
);
