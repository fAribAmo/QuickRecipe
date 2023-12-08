import React from 'react';

function searchPageView(props) {

    function handleInputChangeACB(evt) {
        props.onTextChange(evt.target.value) //function ska finnas i presenter
    }
    function AddToIngredientListACB(evt) {
        props.addToIngredientList(evt.target.value) //gör egentligen det som ovan
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