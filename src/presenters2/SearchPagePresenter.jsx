
import SearchFormView from "../views2/SearchFormView.jsx"

export default function SearchPagePresenter(props) {
    function TextChangeACB(parameter) {
        props.model.addIngredient(parameter)
    }
    function AddIngredientACB(parameter) {
        props.model
    }

    return <div><SearchFormView
                                text={props.model.searchParams.query}
                                type={props.model.searchParams.type}
                                onTextChange={TextChangeACB}
                                addToIngredientList={AddIngredientACB}
                                />{someFunction(props.model.searchResultsPromiseState)}
            </div>
}