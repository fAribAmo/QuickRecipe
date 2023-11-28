import React, { useState } from 'react';

const IngredientInputView = ({ onAdd }) => {
  const [input, setInput] = useState('');

  const handleAddClick = () => {
    onAdd(input);
    setInput('');
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter ingredients"
        className='search-input'
      />
      <button className='search-add-button' onClick={handleAddClick}>Add</button>
    </div>
  );
};

export default IngredientInputView;