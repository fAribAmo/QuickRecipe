
function searchResultView(props) {
    
    function renderSearchResultsCB(recipe) { //searchResultsPromiseState.data element
        return <span key={recipe.id} //finns id property i find by ingredients endpoint 
                    onClick={() => fireButtonACB(recipe)}
                    >
                    <img 
                        src={recipe.image} //finns image också
                        height="100"   
                    />
                    <div>
                        {recipe.title /* recipe name heter title */} 
                    </div>
                    
                </span>
    }
    function fireButtonACB(parameter) {
        props.customerIsInterestedInRecipe(parameter)
        //ska ändras
        //window.location.hash = "#/details"
    }

    return (
        <div className="cursorChange" >
            {props.searchResults.map(renderSearchResultsCB)}
        </div>
    );
}

export default searchResultView;