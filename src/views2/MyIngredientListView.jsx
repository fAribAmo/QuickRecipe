
function IngredientListView(props) {

    function ingredientsToTableRowCB(ingredient) {
        function WantsToRemoveACB() {
            props.deleteIngredientFromList(ingredient);
        }
        return <tr key={ingredient.id}>
                <td> <button onClick={WantsToRemoveACB}> - </button></td>
                <td>{ingredient}</td> 
               </tr>;
    }

    return (
        <div>
            <h2 className='text4' > My Ingridient List </h2>
            <table>
                {
                //måste kanske sorteras som i labben först
                props.ingredientsAccess.map(ingredientsToTableRowCB)
                //kan ha total ingredients i td element nedanför table
                }
            </table>
        </div>

    );
}

export default IngredientListView;