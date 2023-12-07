
import SearchFormView from "../views2/SearchFormView.jsx"
import MyIngredientListView from "../views2/MyIngredientListView.jsx"
import { observer } from "mobx-react-lite";

export default observer (
    function SearchPagePresenter(props) {

        function TextChangeACB(parameter) {
            props.model.addIngredient(parameter) //lägger till ingredienser i ingredientArray
        }

        function RenderIngredientList() {
            function RemoveIngredientACB(parameter) {
                props.model.removeIngredient(parameter)
            }
            return (<MyIngredientListView
                                         ingredientAccess={props.model.ingredientArray}
                                         deleteIngredientFromList={RemoveIngredientACB}
                                         />
            )
        }  
        
        return <div><SearchFormView
                                    text={props.model.searchParameters.query}
                                    onTextChange={TextChangeACB}
                                    />
                                    {RenderIngredientList()}
                </div>
    }
);
