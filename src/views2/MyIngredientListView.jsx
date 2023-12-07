
function IngredientListView(props) {

    function ingredientsToTableRowCB(ingredient) {

        function WantsToRemoveACB() {
            props.deleteIngredientFromList(ingredient);
        }

        return <tr key={ingredient.id}>
                <td> <button onClick={WantsToRemoveACB}> - </button></td>
                <td>{ingredient.name /*Found propery name in example response api*/}</td> 
               </tr>;
    }

    return (
        <div>
            <table>
                {
                //måste kanske sorteras som i labben först
                props.ingredientAccess.map(ingredientsToTableRowCB)
                //kan ha total ingredients i td element nedanför table
                }
            </table>
        </div>

    );
}

export default IngredientListView;