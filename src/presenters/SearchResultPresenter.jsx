import { observer } from "mobx-react-lite";
import SearchResultView from "../views/SearchResultView";
import { useNavigate } from 'react-router-dom';
import React from 'react';

import recipe from '/src/assets/recipe717040.json';

export default observer(
function SearchResultPresenter(props) {
    const navigate = useNavigate();
    function navigateToSearchACB() {
        navigate('/search'); 
    }
    function navigateToDetailsACB(searchResult) {
        props.model.setCurrentRecipe(searchResult.id);
        navigate('/detail'); 
    }

    function dietButtonPressedACB(diet){
        props.model.addSpecialDiet(diet);
    }

    function dietButtonUnpressedACB(diet){
        props.model.removeSpecialDiet(diet);
    }

    if(!props.model.searchResultsPromiseState.promise) {
        return <div><p>no data</p></div>;
    } else if (!props.model.searchResultsPromiseState.data && !props.model.searchResultsPromiseState.error) {
        return (
            <div>
                <img src="https://brfenergi.se/iprog/loading.gif" height="100"></img>
            </div>
        );
    } else if(props.model.searchResultsPromiseState.error) {
        return (
            <div>
                <p>
                    {props.model.searchResultsPromiseState.error}
                </p>
            </div>
        )
    } else {
        props.model.getAllRecipesInformation();
         return (
            <div>
                <SearchResultView 
                                 recipes={props.model.getRecipesWithDiet()}
                                 navigateBackToSearch={navigateToSearchACB}
                                 navigateToDetails={navigateToDetailsACB}
                                 dietButtonPressed={dietButtonPressedACB}
                                 dietButtonUnpressed={dietButtonUnpressedACB}
                                 />
            </div>
         )
    }
}
)