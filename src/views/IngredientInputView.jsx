import React from 'react';

function IngredientInputView(props){

  function setIngredientText(evt){
    props.setIngredientText(evt.target.value);
    return evt.target.value;
  }

  function handleAddClick(){
    props.handleAddClick();
  }

  return (
    <div>
      <input
        type="text"
        value={props.ingredientText}
        onChange={setIngredientText}
        placeholder="Enter ingredients"
        className='search-input'
      />
      <button className='search-add-button' onClick={handleAddClick}>Add</button>
    </div>
  );
};

export default IngredientInputView;