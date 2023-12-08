import React from 'react';

function searchPageView(props) {

    function handleInputChangeACB(evt) {
        props.onTextChange(evt.target.value) //sets searchParameters.query
    }
    function AddToIngredientListACB() {
        props.addToIngredientList() //adds searchParameters.query in ingredientArray from above
    }

    return (
        <div>
            <h2 className='text3' >Add ingredients you need to use:</h2>

            <input 
                type="text"
                value={props.text || ''}
                onChange={handleInputChangeACB}
                className='search-input' 
            />

            <button
                onClick={AddToIngredientListACB}
                className='search-add-button'
            >
                Add
            </button>
        </div>
    )
}

export default searchPageView;