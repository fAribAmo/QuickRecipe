
import React from 'react';

function searchButtonView(props) {
    function fireSearchACB() {
        props.getSearchResults()
    }
    return (
            <div>
                <button 
                    className='button-search' 
                    onClick={fireSearchACB}
                    >
                    Search
                 </button>
            </div>
    )
}

export default searchButtonView;