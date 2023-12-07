
function searchPageView(props) {

    function handleInputChangeACB(evt) {
        props.onTextChange(evt.target.value) //function ska finnas i presenter
    }
    function AddToIngredientListACB(evt) {
        props.addToIngredientList() //function ska finnas i presenter
    }

    return (
        <div>

            <h2 className='text3'>Add ingredients you need to use:</h2>

            <input 
                type="text"
                value={props.text || ''}
                onChange={handleInputChangeACB} 
            />

            <button
                onClick={AddToIngredientListACB}
            >
                Add
            </button>
        </div>
    )
}

export default searchPageView;